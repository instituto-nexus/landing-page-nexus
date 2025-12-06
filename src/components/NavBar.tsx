import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  hasDropdown?: boolean;
}

function NavBarLink({ to, children, hasDropdown }: NavLinkProps) {
  return (
    <a 
      href={to} 
      className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
    >
      {children}
      {hasDropdown && <ChevronDown className="h-3 w-3" />}
    </a>
  );
}

function NavDropdown({ label, items }: { label: string; items: { label: string; href: string }[] }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors outline-none">
        {label}
        <ChevronDown className="h-3 w-3" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-48">
        {items.map((item) => (
          <DropdownMenuItem key={item.href} asChild>
            <a href={item.href} className="cursor-pointer">
              {item.label}
            </a>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function MobileNavLink({ to, onClick, children }: { to: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <a 
      href={to} 
      onClick={onClick}
      className="text-foreground hover:text-primary text-base font-medium transition-colors py-2"
    >
      {children}
    </a>
  );
}

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const productsDropdown = [
    { label: t('nav.projects'), href: "/#projetos" },
    { label: "UFABC Next", href: "/projetos/ufabc-next" },
    { label: "UFABC Parser", href: "/projetos/ufabc-parser" },
  ];

  const resourcesDropdown = [
    { label: t('nav.docs'), href: "/docs" },
    { label: t('nav.blog'), href: "/blog" },
    { label: t('nav.community'), href: "/#comunidade" },
  ];

  const integrationsDropdown = [
    { label: "WhatsApp Bot", href: "/projetos/whatsapp-bot" },
    { label: "WhatsApp Bot AI", href: "/projetos/whatsapp-bot-ai" },
  ];

  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <img src="/nexus-logo-gradient.svg" alt="Nexus Logo" className="h-6 w-6" />
            <span className="font-semibold text-foreground text-base">Nexus</span>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <NavBarLink to="/docs">{t('nav.docs')}</NavBarLink>
          <NavDropdown label={t('nav.integrations')} items={integrationsDropdown} />
          <NavBarLink to="/blog">{t('nav.blog')}</NavBarLink>
          <NavDropdown label={t('nav.resources')} items={resourcesDropdown} />
        </nav>
        
        {/* Right Side Actions */}
        <div className="hidden lg:flex items-center gap-4">
          {/* GitHub Stats */}
          <a 
            href="https://github.com/ufabc-next" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-1.5 rounded-md border bg-card hover:bg-accent transition-colors text-sm"
          >
            <Github className="h-4 w-4" />
            <span className="font-medium">1.2k</span>
            <span className="text-muted-foreground text-xs">{t('nav.githubStars')}</span>
          </a>

          {/* Language Switcher */}
          <LanguageSwitcher />
          
          {/* CTA Button */}
          <Button 
            size="sm" 
            className="rounded-full px-4 font-medium shadow-sm"
            asChild
          >
            <a href="/#comunidade">{t('nav.signUp')}</a>
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSwitcher />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2">
                  <img src="/nexus-logo-gradient.svg" alt="Nexus Logo" className="h-6 w-6" />
                  <span>Nexus</span>
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4 mt-8">
                <div className="space-y-1">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                    {t('nav.products')}
                  </p>
                  {productsDropdown.map((item) => (
                    <MobileNavLink key={item.href} to={item.href} onClick={() => setIsOpen(false)}>
                      {item.label}
                    </MobileNavLink>
                  ))}
                </div>

                <div className="border-t pt-4 space-y-1">
                  <MobileNavLink to="/playground" onClick={() => setIsOpen(false)}>
                    {t('nav.playground')}
                  </MobileNavLink>
                  <MobileNavLink to="/docs" onClick={() => setIsOpen(false)}>
                    {t('nav.docs')}
                  </MobileNavLink>
                  <MobileNavLink to="/pricing" onClick={() => setIsOpen(false)}>
                    {t('nav.pricing')}
                  </MobileNavLink>
                </div>

                <div className="border-t pt-4 space-y-1">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                    {t('nav.integrations')}
                  </p>
                  {integrationsDropdown.map((item) => (
                    <MobileNavLink key={item.href} to={item.href} onClick={() => setIsOpen(false)}>
                      {item.label}
                    </MobileNavLink>
                  ))}
                </div>

                <div className="border-t pt-4 space-y-1">
                  <MobileNavLink to="/blog" onClick={() => setIsOpen(false)}>
                    {t('nav.blog')}
                  </MobileNavLink>
                  {resourcesDropdown.map((item) => (
                    <MobileNavLink key={item.href} to={item.href} onClick={() => setIsOpen(false)}>
                      {item.label}
                    </MobileNavLink>
                  ))}
                </div>

                <div className="border-t pt-4">
                  <Button className="w-full rounded-full" asChild>
                    <a href="/#comunidade" onClick={() => setIsOpen(false)}>
                      {t('nav.signUp')}
                    </a>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
