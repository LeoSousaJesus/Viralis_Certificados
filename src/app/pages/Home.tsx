import { Link } from 'react-router-dom';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center bg-background px-4 py-10 md:px-10 md:py-16">
        <div className="w-full max-w-[1280px]">
          <div className="flex flex-col-reverse items-center gap-8 md:gap-12 lg:flex-row">
            {/* Text Content */}
            <div className="flex w-full flex-col items-start gap-6 text-left lg:w-1/2">
              <div className="flex flex-col gap-4">
                <span className="text-sm font-bold uppercase tracking-wider text-primary">
                  Excelência na Gestão Pública
                </span>
                <h1 className="text-4xl font-black leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                  Certificação Institucional Privada para Boas Práticas
                </h1>
                <h2 className="max-w-xl text-lg font-normal leading-relaxed text-muted-foreground sm:text-xl">
                  Elevando o padrão de qualidade e transparência para Prefeituras e Câmaras
                  Municipais em todo o Brasil com consultoria estratégica e auditoria de
                  processos.
                </h2>
              </div>
              <div className="flex w-full flex-wrap gap-4 pt-2">
                <button className="flex flex-1 min-w-[160px] cursor-pointer items-center justify-center rounded-lg bg-primary px-6 h-12 text-base font-bold leading-normal tracking-wide text-primary-foreground shadow-md transition-colors hover:bg-primary/90 sm:flex-none">
                  <span className="truncate">Solicitar Avaliação</span>
                </button>
                <Link
                  to="/verify"
                  className="flex flex-1 min-w-[160px] cursor-pointer items-center justify-center rounded-lg border border-border bg-card px-6 h-12 text-base font-bold leading-normal tracking-wide text-foreground shadow-sm transition-colors hover:bg-secondary sm:flex-none"
                >
                  <span className="truncate">Verificar Certificado</span>
                </Link>
              </div>
              <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                <span className="material-symbols-outlined text-lg text-green-500">
                  check_circle
                </span>
                <span>Processo 100% auditável e seguro</span>
              </div>
            </div>
            {/* Hero Image */}
            <div className="flex w-full justify-center lg:w-1/2 lg:justify-end">
              <div
                className="h-64 w-full transform rounded-2xl bg-cover bg-center bg-no-repeat shadow-xl transition duration-500 hover:scale-[1.01] sm:h-80 lg:h-[500px]"
                style={{
                  backgroundImage:
                    'url(https://images.unsplash.com/photo-1694702740570-0a31ee1525c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjY5NzExMTd8MA&ixlib=rb-4.1.0&q=80&w=1080)',
                }}
              >
                <div className="h-full w-full rounded-2xl bg-gradient-to-tr from-primary/10 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="flex flex-col items-center justify-center bg-card px-4 py-16 md:px-10">
        <div className="w-full max-w-[1280px]">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col items-center gap-4 text-center">
              <h2 className="max-w-[720px] text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
                Pilares da Nossa Certificação
              </h2>
              <p className="max-w-[720px] text-lg font-normal leading-normal text-muted-foreground">
                Nossa metodologia garante segurança, transparência e reconhecimento oficial para
                a gestão pública municipal.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {/* Feature 1 */}
              <div className="flex flex-col gap-4 rounded-xl border border-border bg-background p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg">
                <div className="mb-2 flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>
                    bar_chart
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-bold leading-tight text-foreground">
                    Metodologia
                  </h3>
                  <p className="text-sm font-normal leading-relaxed text-muted-foreground">
                    Análise estratégica baseada em dados reais e indicadores de performance.
                  </p>
                </div>
              </div>
              {/* Feature 2 */}
              <div className="flex flex-col gap-4 rounded-xl border border-border bg-background p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg">
                <div className="mb-2 flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>
                    verified_user
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-bold leading-tight text-foreground">Protocolo</h3>
                  <p className="text-sm font-normal leading-relaxed text-muted-foreground">
                    Processos auditáveis, seguros e padronizados internacionalmente.
                  </p>
                </div>
              </div>
              {/* Feature 3 */}
              <div className="flex flex-col gap-4 rounded-xl border border-border bg-background p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg">
                <div className="mb-2 flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>
                    database
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-bold leading-tight text-foreground">Registro</h3>
                  <p className="text-sm font-normal leading-relaxed text-muted-foreground">
                    Certificação registrada e auditável em banco de dados seguro.
                  </p>
                </div>
              </div>
              {/* Feature 4 */}
              <div className="flex flex-col gap-4 rounded-xl border border-border bg-background p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg">
                <div className="mb-2 flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>
                    description
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-bold leading-tight text-foreground">Relatório</h3>
                  <p className="text-sm font-normal leading-relaxed text-muted-foreground">
                    Diagnóstico completo da gestão com insights para melhorias.
                  </p>
                </div>
              </div>
              {/* Feature 5 */}
              <div className="flex flex-col gap-4 rounded-xl border border-border bg-background p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg">
                <div className="mb-2 flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>
                    verified
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-bold leading-tight text-foreground">Selo</h3>
                  <p className="text-sm font-normal leading-relaxed text-muted-foreground">
                    Reconhecimento visual de excelência e boas práticas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary px-4 py-16 md:px-10">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-bold text-primary-foreground">
              Pronto para certificar sua gestão?
            </h2>
            <p className="text-lg text-primary-foreground/80">
              Junte-se às prefeituras mais transparentes do Brasil.
            </p>
          </div>
          <button className="whitespace-nowrap rounded-lg bg-primary-foreground px-8 py-3 font-bold text-primary shadow-lg transition-colors hover:bg-primary-foreground/90">
            Falar com Consultor
          </button>
        </div>
      </section>
    </div>
  );
}
