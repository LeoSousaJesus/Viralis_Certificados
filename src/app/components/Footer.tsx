import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="w-full border-t border-border bg-background">
      <div className="mx-auto max-w-[1280px] px-4 md:px-10 py-10">
        <div className="mb-8 flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-3 text-foreground">
            <span className="material-symbols-outlined text-primary">verified</span>
            <span className="text-lg font-bold">Viralis Certificações</span>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              to="/privacy"
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              Política de Privacidade
            </Link>
            <Link
              to="/terms"
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              Termos de Uso
            </Link>
            <Link
              to="/contact"
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              Contato
            </Link>
          </div>
        </div>
        <div className="mb-8 h-px w-full bg-border"></div>
        <div className="flex flex-col-reverse items-center justify-between gap-6 md:flex-row">
          <p className="text-center text-sm font-normal leading-normal text-muted-foreground md:text-left">
            © 2024 Viralis Certificações. Todos os direitos reservados.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="flex size-10 items-center justify-center rounded-full bg-secondary text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
            >
              <span className="material-symbols-outlined text-[20px]">business</span>
            </a>
            <a
              href="#"
              className="flex size-10 items-center justify-center rounded-full bg-secondary text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
            >
              <span className="material-symbols-outlined text-[20px]">photo_camera</span>
            </a>
            <a
              href="#"
              className="flex size-10 items-center justify-center rounded-full bg-secondary text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
            >
              <span className="material-symbols-outlined text-[20px]">public</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
