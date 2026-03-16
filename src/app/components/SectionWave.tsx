import clsx from 'clsx';

type SectionWaveProps = {
  className?: string;
};

export function SectionWave({ className }: SectionWaveProps) {
  return (
    <div className={clsx('-mt-10', className)}>
      <svg
        viewBox="0 0 1440 150"
        preserveAspectRatio="none"
        className="block w-full h-[120px]"
      >
        <path
          fill="currentColor"
          d="M0,64L48,80C96,96,192,128,288,133.3C384,139,480,117,576,106.7C672,96,768,96,864,90.7C960,85,1056,75,1152,69.3C1248,64,1344,64,1392,64L1440,64L1440,150L1392,150C1344,150,1248,150,1152,150C1056,150,960,150,864,150C768,150,672,150,576,150C480,150,384,150,288,150C192,150,96,150,48,150L0,150Z"
        />
      </svg>
    </div>
  );
}

