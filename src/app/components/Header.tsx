import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

export function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-4 md:px-10">
        <Link to="/" className="flex items-center gap-4 text-foreground">
          <div className="flex size-8 items-center justify-center text-primary">
            <span className="material-symbols-outlined !text-3xl">verified</span>
          </div>
          <h2 className="text-lg font-bold leading-tight tracking-tight">
            Viralis Certificações
          </h2>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex flex-1 justify-end gap-8 items-center">
          <nav className="flex items-center gap-9">
            <Link
              to="/"
              className={`text-sm font-medium leading-normal transition-colors ${
                isActive('/')
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-primary'
              }`}
            >
              Home
            </Link>
            <Link
              to="/certification"
              className={`text-sm font-medium leading-normal transition-colors ${
                isActive('/certification')
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-primary'
              }`}
            >
              A Certificação
            </Link>
            <Link
              to="/methodology"
              className={`text-sm font-medium leading-normal transition-colors ${
                isActive('/methodology')
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-primary'
              }`}
            >
              Metodologia
            </Link>
            <Link
              to="/authenticity"
              className={`text-sm font-medium leading-normal transition-colors ${
                isActive('/authenticity')
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-primary'
              }`}
            >
              Autenticidade
            </Link>
            <Link
              to="/verify"
              className={`text-sm font-medium leading-normal transition-colors ${
                isActive('/verify')
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-primary'
              }`}
            >
              Verificar
            </Link>
          </nav>
          <button className="flex h-10 min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-primary px-4 text-sm font-bold leading-normal tracking-wide text-primary-foreground shadow-sm transition-colors hover:bg-primary/90">
            <span className="truncate">Solicitar Avaliação</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-foreground"
        >
          <span className="material-symbols-outlined cursor-pointer">menu</span>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="flex flex-col gap-4 px-4 py-6">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`text-sm font-medium ${
                isActive('/') ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Home
            </Link>
            <Link
              to="/certification"
              onClick={() => setMobileMenuOpen(false)}
              className={`text-sm font-medium ${
                isActive('/certification') ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              A Certificação
            </Link>
            <Link
              to="/methodology"
              onClick={() => setMobileMenuOpen(false)}
              className={`text-sm font-medium ${
                isActive('/methodology') ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Metodologia
            </Link>
            <Link
              to="/authenticity"
              onClick={() => setMobileMenuOpen(false)}
              className={`text-sm font-medium ${
                isActive('/authenticity') ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Autenticidade
            </Link>
            <Link
              to="/verify"
              onClick={() => setMobileMenuOpen(false)}
              className={`text-sm font-medium ${
                isActive('/verify') ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Verificar
            </Link>
            <button className="mt-2 flex h-10 items-center justify-center rounded-lg bg-primary px-4 text-sm font-bold text-primary-foreground">
              Solicitar Avaliação
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
