import { useState } from 'react';
import type { Locale } from '@/utils/i18n';

interface LanguageSwitcherProps {
  currentLocale: Locale;
  currentPath: string;
}

export default function LanguageSwitcher({ currentLocale, currentPath }: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);

  const getAlternatePath = (targetLocale: Locale) => {
    if (targetLocale === 'es') {
      const path = currentPath.replace(/^\/en/, '') || '/';
      return path.endsWith('/') ? path : `${path}/`;
    } else {
      if (currentPath.startsWith('/en')) {
        return currentPath.endsWith('/') ? currentPath : `${currentPath}/`;
      }
      const basePath = currentPath === '/' ? '/' : currentPath;
      const enPath = `/en${basePath}`;
      return enPath.endsWith('/') ? enPath : `${enPath}/`;
    }
  };

  const languages = [
    { code: 'es' as Locale, name: 'Español', flag: '🇪🇸', title: 'Cambiar idioma a Español' },
    { code: 'en' as Locale, name: 'English', flag: '🇺🇸', title: 'Switch language to English' },
  ];

  const currentLanguage = languages.find(lang => lang.code === currentLocale) || languages[0];
  const alternateLanguage = languages.find(lang => lang.code !== currentLocale) || languages[1];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-muted transition-colors"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span>{currentLanguage.flag}</span>
        <span className="hidden sm:inline">{currentLanguage.name}</span>
        <svg
          className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 z-20 mt-2 w-48 rounded-md border bg-popover shadow-lg">
            <div className="py-1">
              {languages.map((lang) => (
                <a
                  key={lang.code}
                  href={getAlternatePath(lang.code)}
                  className={`flex items-center gap-3 px-4 py-2 text-sm transition-colors hover:bg-muted ${
                    lang.code === currentLocale
                      ? 'bg-muted text-primary font-semibold'
                      : 'text-foreground'
                  }`}
                  onClick={() => setIsOpen(false)}
                  title={lang.title}
                >
                  <span className="text-lg">{lang.flag}</span>
                  <span>{lang.name}</span>
                  {lang.code === currentLocale && (
                    <svg className="ml-auto h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
