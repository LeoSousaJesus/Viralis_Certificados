export function Authenticity() {
  return (
    <div className="flex min-h-screen flex-col">
      <section className="w-full max-w-[1280px] mx-auto px-4 py-10 md:px-10 md:py-16">
        <div className="flex flex-col-reverse items-center gap-6 md:gap-12 lg:flex-row">
          <div className="flex flex-1 flex-col gap-6 text-left">
            <div className="flex flex-col gap-4">
              <div className="inline-flex w-fit items-center gap-2 rounded-full bg-primary/10 px-3 py-1 dark:bg-primary/20">
                <span className="material-symbols-outlined text-sm text-primary">gavel</span>
                <span className="text-xs font-bold uppercase tracking-wider text-primary">
                  Governança Pública
                </span>
              </div>
              <h1 className="text-4xl font-black leading-tight tracking-tight text-foreground md:text-5xl">
                Registro Privado de Certificação Institucional
              </h1>
              <h2 className="max-w-2xl text-lg font-normal leading-relaxed text-muted-foreground">
                Garantia de segurança, transparência e rastreabilidade para documentos emitidos
                pela Viralis Certificações, assegurando a validade das boas práticas em gestão
                pública.
              </h2>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <button className="flex h-12 min-w-[160px] cursor-pointer items-center justify-center rounded-lg bg-primary px-6 text-base font-bold text-primary-foreground transition-colors hover:bg-primary/90">
                <span className="truncate">Verificar Autenticidade</span>
              </button>
              <button className="flex h-12 min-w-[160px] cursor-pointer items-center justify-center rounded-lg border border-border bg-card px-6 text-base font-bold text-foreground transition-colors hover:bg-secondary">
                <span className="truncate">Consultar Base de Dados</span>
              </button>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div
              className="group relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-cover bg-center bg-no-repeat shadow-lg"
              style={{
                backgroundImage:
                  'url(https://images.unsplash.com/photo-1639503547276-90230c4a4198?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwY2VydGlmaWNhdGUlMjBzZWN1cml0eXxlbnwxfHx8fDE3NjcwMzM0MDF8MA&ixlib=rb-4.1.0&q=80&w=1080)',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <div className="mb-1 flex items-center gap-2">
                  <span className="material-symbols-outlined text-green-400">verified</span>
                  <span className="text-sm font-bold uppercase tracking-wider">
                    Documento Autenticado
                  </span>
                </div>
                <p className="text-sm opacity-90">Protocolo de segurança SHA-256</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full border-y border-border bg-card">
        <div className="mx-auto max-w-[1280px] px-4 py-16 md:px-10">
          <div className="mb-10 flex flex-col gap-4">
            <h2 className="text-3xl font-bold leading-tight text-foreground">
              Anatomia do Certificado
            </h2>
            <p className="max-w-[720px] text-lg font-normal leading-normal text-muted-foreground">
              Cada documento emitido para Prefeituras e Câmaras contém elementos únicos
              criptografados que garantem sua procedência e validade jurídica.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: 'fingerprint',
                title: 'Número Único',
                description:
                  'Identificador exclusivo (Hash) para rastreamento instantâneo no banco de dados nacional.',
              },
              {
                icon: 'calendar_month',
                title: 'Data de Emissão',
                description: 'Registro temporal imutável do dia da concessão da certificação.',
              },
              {
                icon: 'hourglass_top',
                title: 'Validade',
                description:
                  'Período de vigência das boas práticas atestadas, com alertas de expiração.',
              },
              {
                icon: 'category',
                title: 'Área Certificada',
                description:
                  'Escopo específico da certificação (ex: Boas Práticas Legislativas).',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col gap-4 rounded-xl border border-border bg-background p-6 transition-shadow hover:shadow-md"
              >
                <div className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-primary/20">
                  <span className="material-symbols-outlined">{item.icon}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full max-w-[960px] mx-auto px-4 py-16 md:px-10">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-blue-600 p-8 text-center text-white shadow-xl md:p-12">
          <div className="relative z-10 flex flex-col items-center gap-6">
            <span className="material-symbols-outlined text-5xl opacity-80">verified</span>
            <blockquote className="max-w-3xl text-xl font-bold leading-snug tracking-tight md:text-3xl">
              "Esse certificado possui registro de autenticidade e rastreabilidade institucional
              junto à Viralis."
            </blockquote>
            <div className="mt-2 h-1 w-20 rounded-full bg-white/30"></div>
            <p className="mt-2 text-sm font-medium uppercase tracking-widest text-white/80">
              Garantia Oficial
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
