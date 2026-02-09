import mascotImg from '@/assets/mascot.png';
import { cn } from '@/lib/utils';

interface MascotProps {
  message?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  animate?: boolean;
}

const sizeClasses = {
  sm: 'w-16 h-16',
  md: 'w-24 h-24',
  lg: 'w-40 h-40',
};

const Mascot = ({ message, size = 'md', className, animate = true }: MascotProps) => {
  return (
    <div className={cn('relative inline-flex flex-col items-center', className)}>
      {message && (
        <div className="relative mb-3 max-w-[220px] rounded-2xl bg-card px-4 py-3 text-center text-sm font-medium shadow-lg border border-border">
          {message}
          <div className="absolute -bottom-2 left-1/2 h-4 w-4 -translate-x-1/2 rotate-45 border-b border-r border-border bg-card" />
        </div>
      )}
      <img
        src={mascotImg}
        alt="Scratchy the cat mascot"
        className={cn(sizeClasses[size], animate && 'animate-float', 'drop-shadow-lg')}
      />
    </div>
  );
};

export default Mascot;
