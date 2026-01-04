export function Verify() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-start px-4 pb-20 pt-10 sm:px-6">
      <div className="flex w-full max-w-4xl flex-col gap-10">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-primary">
            <span className="material-symbols-outlined text-sm">gpp_good</span>
            Área de Validação
          </div>
          <h1 className="text-4xl font-black leading-tight tracking-tight text-foreground md:text-5xl">
            Verifique a autenticidade do seu certificado
          </h1>
          <p className="max-w-2xl text-lg font-normal leading-normal text-muted-foreground">
            Garanta a legitimidade de documentos emitidos pela Viralis Certificações. Insira o
            código único abaixo para validar conformidade e boas práticas.
          </p>
        </div>

        <div className="flex flex-col gap-8 rounded-xl border border-border bg-card p-6 shadow-md md:flex-row md:items-start md:p-10">
          <div className="flex flex-1 flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label
                className="text-sm font-bold uppercase tracking-wide text-foreground"
                htmlFor="cert-code"
              >
                Código de Autenticação
              </label>
              <div className="group relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors group-focus-within:text-primary">
                  qr_code_2
                </span>
                <input
                  className="h-14 w-full rounded-lg border border-border bg-secondary pl-12 pr-4 text-lg font-medium text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  id="cert-code"
                  placeholder="Ex: VIR-2024-X892"
                  type="text"
                />
              </div>
              <p className="flex items-center gap-1 text-xs text-muted-foreground">
                <span className="material-symbols-outlined text-sm">info</span>O código está
                localizado no canto inferior direito do documento.
              </p>
            </div>

            <div className="flex w-fit items-center gap-3 rounded-lg border border-border bg-secondary p-3">
              <div className="size-6 cursor-pointer rounded border-2 border-border bg-card transition-colors hover:border-primary"></div>
              <span className="select-none text-sm font-medium text-foreground">
                Não sou um robô
              </span>
              <div className="ml-4 text-muted-foreground">
                <span className="material-symbols-outlined text-xl">security</span>
              </div>
            </div>

            <button className="flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-primary text-base font-bold text-primary-foreground shadow-md transition-all hover:bg-primary/90 hover:shadow-lg">
              <span className="material-symbols-outlined">search</span>
              Verificar Autenticidade
            </button>
          </div>

          <div className="hidden flex-col items-center rounded-lg border border-border bg-secondary p-4 text-center md:flex md:w-72">
            <div
              className="relative mb-4 flex h-64 w-48 flex-col justify-between border border-border bg-card p-4 shadow-sm"
              aria-label="Ilustração de certificado"
            >
              <div className="space-y-2">
                <div className="mx-auto mb-2 size-12 rounded-full bg-secondary"></div>
                <div className="mx-auto h-2 w-3/4 rounded bg-secondary"></div>
                <div className="mx-auto h-2 w-1/2 rounded bg-secondary"></div>
              </div>
              <div className="space-y-2">
                <div className="h-1 w-full rounded bg-secondary"></div>
                <div className="h-1 w-full rounded bg-secondary"></div>
                <div className="h-1 w-5/6 rounded bg-secondary"></div>
              </div>
              <div className="mt-4 flex justify-end">
                <div className="flex h-8 w-20 items-center justify-center rounded border-2 border-primary/40 bg-primary/5">
                  <div className="h-2 w-12 rounded bg-primary/20"></div>
                </div>
              </div>
              <div className="absolute -right-2 bottom-6 animate-bounce text-primary">
                <span className="material-symbols-outlined">arrow_back</span>
              </div>
            </div>
            <p className="text-sm font-semibold text-foreground">Onde encontrar?</p>
            <p className="mt-1 text-xs text-muted-foreground">
              Busque pelo código alfanumérico próximo ao QR Code do certificado.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            {
              icon: 'lock',
              title: 'Segurança Garantida',
              description: 'Validação criptografada para evitar fraudes e falsificações.',
            },
            {
              icon: 'bolt',
              title: 'Consulta Rápida',
              description: 'Resultado instantâneo da situação cadastral do documento.',
            },
            {
              icon: 'account_balance',
              title: 'Transparência Pública',
              description: 'Ferramenta auditável para Prefeituras e Câmaras.',
            },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center p-4 text-center">
              <div className="mb-3 flex size-12 items-center justify-center rounded-full bg-blue-50 text-primary dark:bg-blue-900/30">
                <span className="material-symbols-outlined">{item.icon}</span>
              </div>
              <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
