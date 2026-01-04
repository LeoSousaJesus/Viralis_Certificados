export function Methodology() {
  return (
    <div className="flex min-h-screen flex-col">
      <section className="mx-auto max-w-[1280px] px-4 py-12 sm:px-10 lg:py-20">
        <div className="flex flex-col items-center gap-12 lg:flex-row">
          <div className="flex flex-1 flex-col gap-6 lg:max-w-[600px]">
            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-blue-50 px-3 py-1 dark:bg-blue-900/30">
              <span className="material-symbols-outlined text-sm text-primary">
                verified_user
              </span>
              <span className="text-xs font-bold uppercase tracking-wide text-primary">
                Protocolo Oficial
              </span>
            </div>
            <h1 className="text-4xl font-black leading-tight tracking-tight text-foreground lg:text-5xl">
              Metodologia Comprovada para Gestão Pública Eficiente
            </h1>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Conheça o Protocolo Viralis de Avaliação Institucional: um sistema rigoroso de
              auditoria e certificação projetado para elevar o padrão de governança,
              transparência e eficiência em Prefeituras e Câmaras Municipais.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="flex h-12 items-center justify-center rounded-lg bg-primary px-6 font-bold text-white shadow-md transition-all hover:scale-[1.02] hover:bg-blue-600">
                Baixar Apresentação PDF
              </button>
              <button className="flex h-12 items-center justify-center rounded-lg border border-border bg-card px-6 font-medium text-foreground transition-colors hover:bg-secondary">
                Falar com Especialista
              </button>
            </div>
          </div>
          <div
            className="group relative h-[300px] flex-1 overflow-hidden rounded-2xl shadow-2xl lg:h-[500px]"
            style={{
              backgroundImage:
                'url(https://images.unsplash.com/photo-1758691736097-7f735ac5f118?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWV0aW5nJTIwcm9vbSUyMGRhdGF8ZW58MXx8fHwxNzY3MDMzNDAwfDA&ixlib=rb-4.1.0&q=80&w=1080)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 z-20 rounded-xl border border-border bg-white/95 p-4 shadow-lg backdrop-blur dark:bg-slate-900/95">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase text-muted-foreground">
                    Confiabilidade
                  </p>
                  <p className="text-lg font-bold text-foreground">98% de Aprovação</p>
                </div>
                <div className="h-10 w-px bg-border"></div>
                <div>
                  <p className="text-xs font-bold uppercase text-muted-foreground">Municípios</p>
                  <p className="text-lg font-bold text-foreground">+150 Auditados</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full border-y border-border bg-card">
        <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-10">
          <div className="mb-12 text-center">
            <span className="mb-2 block text-sm font-bold uppercase tracking-widest text-primary">
              Rigor Técnico
            </span>
            <h2 className="mb-4 text-3xl font-bold text-foreground">Profundidade da Análise</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Nossa metodologia vai além do superficial. Analisamos dados, processos e evidências
              documentais para garantir um diagnóstico preciso.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                icon: 'analytics',
                title: 'Indicadores de Desempenho',
                description:
                  'Métricas quantitativas que avaliam a eficiência operacional, execução orçamentária e cumprimento de metas estabelecidas no PPA e LDO.',
              },
              {
                icon: 'folder_open',
                title: 'Coleta de Evidências',
                description:
                  'Verificação documental rigorosa. Analisamos portarias, contratos, atas de reuniões e relatórios fiscais para comprovar a conformidade.',
              },
              {
                icon: 'rule',
                title: 'Validação Cruzada',
                description:
                  'Confronto de dados internos com bases públicas (TCE, Portal da Transparência) e entrevistas com gestores para validar a realidade dos fatos.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-border bg-background p-8 transition-colors hover:border-primary/50"
              >
                <div className="mb-6 flex size-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                </div>
                <h3 className="mb-3 text-xl font-bold text-foreground">{item.title}</h3>
                <p className="leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary px-4 py-16 md:px-10">
        <div className="relative z-10 mx-auto flex max-w-[960px] flex-col items-center text-center sm:px-10">
          <h2 className="mb-6 text-3xl font-black leading-tight text-white lg:text-4xl">
            Pronto para elevar o nível da sua gestão?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-blue-100">
            Solicite uma proposta personalizada e descubra como o Protocolo Viralis pode
            transformar a eficiência e transparência do seu município.
          </p>
          <div className="flex w-full flex-col justify-center gap-4 sm:flex-row">
            <button className="h-12 rounded-lg bg-white px-8 text-base font-bold text-primary shadow-lg transition-colors hover:bg-blue-50">
              Solicitar Proposta Agora
            </button>
            <button className="h-12 rounded-lg border-2 border-blue-300 bg-transparent px-8 text-base font-bold text-white transition-colors hover:bg-white/10">
              Falar no WhatsApp
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
