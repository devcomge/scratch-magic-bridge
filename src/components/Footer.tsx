import { Cat, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex items-center gap-2 font-display text-lg font-bold text-foreground">
            <Cat size={20} className="text-primary" />
            Scratch Academy
          </div>

          <p className="text-sm text-muted-foreground">{t('footer.madeWith')}</p>

          <a
            href="https://scratch.mit.edu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-secondary hover:underline"
          >
            {t('footer.scratchLink')}
            <ExternalLink size={14} />
          </a>

          <p className="text-xs text-muted-foreground/70">{t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
