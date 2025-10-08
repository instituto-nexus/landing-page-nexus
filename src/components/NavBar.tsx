import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

function NavBarLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link to={to} className="text-muted-foreground hover:text-foreground hover:scale-105 transition-all duration-300 text-xl">
      {children}
    </Link>
  );
}

function MobileNavLink({ to, onClick, children }: { to: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <a 
      href={to} 
      onClick={onClick}
      className="text-foreground hover:text-primary text-lg font-medium transition-colors py-2"
    >
      {children}
    </a>
  );
}

const navBarLinks = [
  {
    to: "/",
    children: "Inicio"
  },
  
  {
    to: "/#projetos",
    children: "Projetos"
  },
  {
    to: "/#comunidade",
    children: "Comunidade"
  },
  {
    to: "/team",
    children: "Equipe"
  }
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 hover:scale-105 transition-all duration-300">
            <img src="/nexus-logo-gradient.svg" alt="Nexus Logo" className="w-6 h-6 md:h-10 md:w-10" />
            <span className="font-semibold text-foreground text-lg md:text-2xl">Nexus</span>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-16 flex-1 justify-center">
          {navBarLinks.map((link) => (
            <NavBarLink key={link.to} to={link.to}>
              {link.children}
            </NavBarLink>
          ))}
        </nav>
        
        {/* Desktop - Empty space for balance */}
        <div className="flex-shrink-0 w-[72px] hidden md:block"></div>

        {/* Mobile Menu */}
        <div className="flex-1 flex justify-end md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                {isOpen ? <X className="h-10 w-10" /> : <Menu className="h-8 w-8" />}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle className="flex items-center space-x-2">
                  <a href="/" className="flex flex-row items-center gap-2 hover:scale-105 transition-all duration-300">
                    <img src="/nexus-logo-gradient.svg" alt="Nexus Logo" className="w-8 h-8" />
                    <span>Nexus</span>
                  </a>
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col space-y-6 mt-8">
                {navBarLinks.map((link) => (
                  <MobileNavLink key={link.to} to={link.to} onClick={() => setIsOpen(false)}>
                    {link.children}
                  </MobileNavLink>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
