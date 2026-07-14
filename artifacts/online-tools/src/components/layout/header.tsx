import { Link, useLocation } from 'wouter';
import { Menu, X, Hammer, Search } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location, setLocation] = useLocation();

  const navLinks = [
    { href: '/', label: 'Tools' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' }
  ];

  const handleNav = (href: string) => {
    setLocation(href);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-primary text-primary-foreground p-1.5 rounded-md">
              <Hammer className="h-5 w-5" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight hidden sm:inline-block">
              ToolBox
            </span>
          </Link>
          <nav className="hidden md:flex gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center text-sm font-medium transition-colors hover:text-foreground/80 ${
                  location === link.href ? 'text-foreground' : 'text-foreground/60'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle Menu">
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden border-b bg-background px-4 py-4 space-y-4 shadow-lg absolute w-full left-0 top-16">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className={`text-left text-sm font-medium p-2 rounded-md ${
                  location === link.href ? 'bg-secondary text-foreground' : 'text-foreground/60 hover:text-foreground hover:bg-secondary/50'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
