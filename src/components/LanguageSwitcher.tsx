import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Globe, Check } from 'lucide-react';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (newLang: string) => {
    i18n.changeLanguage(newLang);
  };

  const currentLang = i18n.language;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="h-9 w-9 transition-all duration-300 hover:bg-transparent hover:opacity-60">
          <Globe className="h-5 w-5" />
          <span className="sr-only">Change language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem 
          onClick={() => changeLanguage('pt')} 
          className="cursor-pointer focus:bg-gray-100"
        >
          <span className="flex items-center gap-2 w-full">
            Português
            {currentLang === 'pt' && <Check className="h-4 w-4 ml-auto" />}
          </span>
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => changeLanguage('en')} 
          className="cursor-pointer focus:bg-gray-100"
        >
          <span className="flex items-center gap-2 w-full">
            English
            {currentLang === 'en' && <Check className="h-4 w-4 ml-auto" />}
          </span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
