import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="w-full px-4 py-12 md:py-16 flex justify-center">
        <div className="max-w-7xl w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center text-center">
            <div className="space-y-4 flex flex-col items-center">
              <Image src="/logo.svg" alt="Logo" className="w-12 h-12" width={192} height={192} />
              <p className="text-sm text-muted-foreground max-w-[200px]">
                Sua fonte definitiva para informações sobre cartas Pokémon TCG.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contribua com o Projeto</h4>
              <p className="text-sm text-muted-foreground max-w-[300px]">
                Este é um projeto open source e você pode contribuir! Visite nosso
                <a href="https://github.com/seu-usuario/seu-repo" className="text-primary hover:underline ml-1">
                  repositório no GitHub
                </a>
              </p>
            </div>
          </div>
          
          <div className="border-t mt-8 pt-8 text-center">
            <p className="text-sm text-muted-foreground mb-4">
              © 2024 Pokemon TCG Pocket DB. Todos os direitos reservados.
            </p>
            <p className="text-xs text-muted-foreground max-w-[800px] mx-auto">
              As informações literais e gráficas apresentadas neste site sobre o Pokémon Trading Card Game, incluindo imagens e textos das cartas, são protegidas por direitos autorais de The Pokémon Company, DeNA Co., Ltd. e/ou Creatures, Inc.. Este site não é produzido, endossado, apoiado ou afiliado a nenhum desses detentores de direitos autorais.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
} 