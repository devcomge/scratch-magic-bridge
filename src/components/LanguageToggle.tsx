import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1.5 rounded-full bg-muted p-1">
      <button
        onClick={() => setLanguage('en')}
        className={cn(
          'rounded-full px-3 py-1 text-sm font-semibold transition-all duration-200',
          language === 'en'
            ? 'bg-primary text-primary-foreground shadow-sm'
            : 'text-muted-foreground hover:text-foreground'
        )}
      >
        🇬🇧 EN
      </button>
      <button
        onClick={() => setLanguage('ka')}
        className={cn(
          'rounded-full px-3 py-1 text-sm font-semibold transition-all duration-200',
          language === 'ka'
            ? 'bg-primary text-primary-foreground shadow-sm'
            : 'text-muted-foreground hover:text-foreground'
        )}
      >
        🇬🇪 KA
      </button>
    </div>
  );
};

export default LanguageToggle;
