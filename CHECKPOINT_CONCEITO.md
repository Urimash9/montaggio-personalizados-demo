# Checkpoint / AVERO Concept — Interiores

Data: 15 de outubro de 2026.

Branch exclusiva: `concept/avero-portfolio-moveis`.

Base protegida: `d2cf26bc44f1a41b4fe3bc169380700e2ae9e78b`.

## Resultado esperado

Peça de portfólio da AVERO STUDIO com a estrutura visual aprovada e conteúdo conceitual. Nenhuma identificação, contato, localização, histórico, obra executada ou avaliação da empresa de origem integra o preview.

## Alterações de conteúdo

- Identidade neutra “Interiores / Sob Medida / Concept” no header e no footer.
- Hero e Sobre conceituais; selo numérico substituído por uma expressão sem número factual.
- Processo descrito como leitura de composição, sem promessas de produção ou instalação de uma empresa.
- “Estudos de ambiente” e “Estudo em destaque” com imagens declaradas conceituais.
- Prova social real convertida em três princípios: essência, rotina e matéria.
- CTAs com destinos internos; “Conhecer a AVERO” aponta para a apresentação no footer.
- Metadados, alt texts, rótulos de acessibilidade e scripts neutros.
- Exclusão da árvore conceitual dos arquivos antigos com imagens embutidas e dos cinco arquivos de obras reais.

## Invariantes

Preservar fonte, grids, dimensões dos frames, responsividade, linguagem geométrica, ordem das seções e comportamento do carrossel. As imagens se adaptam aos frames existentes.

Não alterar `main`, checkpoint-base ou deployment de produção original. Não fazer merge ou promoção. Preview conceitual com endereço separado e identificação neutra.

## Validação

Comparar com a base em desktop e mobile; verificar carregamento, dimensões, menu, cinco ambientes e carrossel por botões, teclado e gesto; auditar arquivos, DOM, URLs, metadados, alt texts e rede. Confirmar os hashes protegidos antes e depois da entrega.

## Verificação concluída

- Desktop: 1440 e 1920 px; tablet: 768 px; mobile: 390 e 360 px.
- Dez seções preservadas na mesma ordem; frames, recortes e tipografia comparados com a base sem diferenças de dimensões.
- Cinco ambientes, sete posições do carrossel, próximo/anterior, teclado, arraste no desktop e gesto de toque no mobile: aprovados.
- Menu mobile e destino do CTA da AVERO: aprovados.
- DOM, metadados, atributos, links e scripts sem identidade ou contatos da origem; todos os destinos da interface são âncoras internas válidas.
- Zero imagens quebradas, erros de JavaScript, falhas HTTP ou recursos externos nos testes de página.
- Dezoito imagens editoriais preservadas byte a byte; seis substituições conceituais em WebP.
- Arquivos antigos com identidade e obras reais ausentes da cópia; URLs legadas verificadas retornam 404.
- Publicação original respondeu HTTP 200 e seu HTML de entrada corresponde exatamente ao commit-base protegido.
- Sintaxe JavaScript e `git diff --check`: aprovados. Sem dependências ou build necessário.
