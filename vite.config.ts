import { defineConfig } from 'vite'
import type { Plugin } from 'vite'
import path from 'path'
import fs from 'fs'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

const SITEMAP_PATHS = ['/', '/a-propos', '/machines', '/emplacements', '/contact'] as const

function cofandiSeoPlugin(): Plugin {
  return {
    name: 'cofandi-seo',
    transformIndexHtml(html) {
      const site = (process.env.VITE_SITE_URL || '').trim().replace(/\/$/, '')
      if (!site) return html
      const home = `${site}/`
      const ogImage = `${site}/logo.png`
      let next = html.replaceAll('content="/logo.png"', `content="${ogImage}"`)
      const org = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Cofandi',
        url: home,
        logo: ogImage,
        description:
          "Machines à café premium en libre-service, Montréal, Québec. Qualité barista, paiement sans contact, campus Concordia.",
        areaServed: { '@type': 'Place', name: 'Montréal, Québec, Canada' },
      }
      const block = `    <link rel="canonical" href="${home}" data-cofandi-seo="canonical" />
    <meta property="og:url" content="${home}" />
    <script type="application/ld+json">${JSON.stringify(org)}</script>`
      return next.replace('</head>', `${block}\n  </head>`)
    },
    closeBundle() {
      const outDir = path.resolve(__dirname, 'dist')
      const site = (process.env.VITE_SITE_URL || '').trim().replace(/\/$/, '')
      const lines = ['User-agent: *', 'Allow: /', '']
      if (site) {
        lines.push(`Sitemap: ${site}/sitemap.xml`, '')
        const urlBlocks = SITEMAP_PATHS.map((route) => {
          const loc = route === '/' ? `${site}/` : `${site}${route}`
          const priority = route === '/' ? '1.0' : '0.8'
          return `  <url>\n    <loc>${loc}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>${priority}</priority>\n  </url>`
        }).join('\n')
        const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlBlocks}\n</urlset>\n`
        fs.writeFileSync(path.join(outDir, 'sitemap.xml'), sitemap, 'utf8')
      }
      fs.writeFileSync(path.join(outDir, 'robots.txt'), lines.join('\n'), 'utf8')
    },
  }
}

function netlify404() {
  return {
    name: 'netlify-404',
    closeBundle() {
      const outDir = path.resolve(__dirname, 'dist')
      const indexPath = path.join(outDir, 'index.html')
      const notFoundPath = path.join(outDir, '404.html')
      if (fs.existsSync(indexPath)) {
        fs.copyFileSync(indexPath, notFoundPath)
      }
    }
  }
}

export default defineConfig({
  base: process.env.BASE_PATH || '/',
  plugins: [
    react(),
    tailwindcss(),
    cofandiSeoPlugin(),
    netlify404(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  assetsInclude: ['**/*.svg', '**/*.csv'],
})
