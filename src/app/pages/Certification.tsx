export function Certification() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative w-full">
        <div className="flex w-full justify-center px-4 py-5 md:px-10">
          <div className="flex w-full max-w-[960px] flex-col items-center">
            <div
              className="relative flex min-h-[400px] w-full items-center justify-center overflow-hidden rounded-xl bg-cover bg-center p-6 md:min-h-[480px]"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(17, 25, 33, 0.7), rgba(17, 25, 33, 0.8)), url(https://images.unsplash.com/photo-1600730424902-a3a3be6af112?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3Zlcm5tZW50JTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc2NzAzMzQwMHww&ixlib=rb-4.1.0&q=80&w=1080)',
              }}
            >
              <div className="flex max-w-2xl flex-col gap-4 text-center">
                <span className="self-center rounded-full border border-primary/30 bg-primary/20 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white backdrop-blur-sm">
                  Certificação Institucional
                </span>
                <h1 className="text-3xl font-black leading-tight tracking-tight text-white md:text-5xl">
                  Segurança Jurídica e Reconhecimento
                </h1>
                <h2 className="text-base font-normal leading-relaxed text-slate-200 md:text-lg">
                  Validando a excelência na gestão pública através de protocolos técnicos
                  rigorosos e transparentes.
                </h2>
                <div className="pt-4">
                  <button className="rounded-lg bg-primary px-8 py-3 text-base font-bold text-white shadow-lg transition-all hover:bg-blue-600 hover:shadow-primary/25">
                    Solicitar Análise de Protocolo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Definition Section */}
      <section className="px-4 py-12 md:px-10 md:py-16">
        <div className="mx-auto flex max-w-[960px] flex-col items-center">
          <h1 className="mb-6 text-center text-3xl font-bold leading-tight text-foreground md:text-4xl">
            O que é a Certificação Viralis?
          </h1>
          <div className="max-w-3xl text-center">
            <p className="text-lg font-normal leading-relaxed text-muted-foreground md:text-xl">
              Uma adesão voluntária a um rigoroso protocolo técnico de boas práticas. Não somos
              uma auditoria governamental, mas uma consultoria estratégica que valida e certifica
              processos de gestão, garantindo que sua administração esteja alinhada com os mais
              altos padrões de eficiência.
            </p>
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="border-y border-border bg-card px-4 py-12 md:px-10 md:py-16">
        <div className="mx-auto max-w-[1120px]">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">
              O Que Você Recebe
            </h2>
            <p className="text-muted-foreground">
              Entregáveis tangíveis que comprovam a qualidade da gestão
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
            {[
              {
                icon: 'description',
                title: 'Relatório Técnico',
                description:
                  'Diagnóstico completo das práticas atuais, com análise de conformidade e sugestões de melhoria baseadas no protocolo.',
              },
              {
                icon: 'workspace_premium',
                title: 'Certificado Impresso',
                description:
                  'Documento físico em papel moeda, atestando a conformidade da instituição com as normas de excelência.',
              },
              {
                icon: 'verified',
                title: 'Selo Digital',
                description:
                  'Asset digital verificado para uso no Portal da Transparência e site oficial da Prefeitura ou Câmara.',
              },
              {
                icon: 'public',
                title: 'Registro Público',
                description:
                  'Página de validação pública no site da Viralis, permitindo que qualquer cidadão confira a autenticidade da certificação.',
              },
              {
                icon: 'style',
                title: 'Manual da Marca',
                description:
                  'Guia completo de aplicação visual do selo em materiais institucionais, placas e redes sociais.',
              },
              {
                icon: 'support_agent',
                title: 'Suporte Consultivo',
                description:
                  'Acompanhamento durante o processo para esclarecimento de dúvidas sobre a implementação dos requisitos.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group flex flex-col gap-4 rounded-xl border border-border bg-background p-6 transition-colors hover:border-primary/50"
              >
                <div className="flex size-12 items-center justify-center rounded-lg bg-blue-100 text-primary transition-transform group-hover:scale-110 dark:bg-blue-900/30">
                  <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-bold text-foreground">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-primary px-4 py-16 md:px-10">
        <div className="mx-auto max-w-4xl text-center text-white">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Pronto para elevar o nível da sua gestão?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-blue-100">
            Entre em contato com nossos consultores e descubra como obter a Certificação Viralis
            para o seu município.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <button className="rounded-lg bg-white px-8 py-3 font-bold text-primary shadow-lg transition-colors hover:bg-slate-100">
              Fale com um Consultor
            </button>
            <button className="rounded-lg border-2 border-white bg-transparent px-8 py-3 font-bold text-white transition-colors hover:bg-white/10">
              Baixar Apresentação PDF
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
