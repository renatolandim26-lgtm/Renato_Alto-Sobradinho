# Auditoria completa do site **Magnos / Alto da Alvorada**

Autor: **Manus AI**  
Data: **2026-04-16**

## Resumo executivo

Realizei uma auditoria completa do site publicado em [magnos-site.vercel.app][1] e do código-fonte disponível no repositório [renatolandim26-lgtm/Magnos][2]. O projeto está **funcional, publica corretamente e apresenta boa legibilidade visual**, mas ainda transmite a sensação de uma landing page em fase de consolidação. O principal problema não está na base técnica do build, que compila normalmente, mas sim na **consistência do produto digital**: o site mistura nomes de empreendimentos no herói, mantém textos temporários, deixa metadados importantes ausentes e não entrega a página 404 customizada em acessos diretos a rotas inexistentes.[1] [3] [4] [5] [6] [7]

Em termos objetivos, a base frontend é simples e saudável para evoluir. O projeto usa **Vite + React + TypeScript**, a checagem de tipos passou sem erros e a build de produção foi gerada com sucesso na auditoria local.[3] [4] [8] O problema central, portanto, não é “o site estar quebrado”, e sim **estar parcialmente desalinhado com a proposta comercial e com boas práticas de conversão, SEO e governança de conteúdo**.[1] [5] [6]

| Dimensão | Avaliação | Síntese |
|---|---:|---|
| Funcionamento geral | **8/10** | A home renderiza bem, as âncoras funcionam e as imagens principais carregam. |
| Qualidade do código | **7/10** | Estrutura simples, legível e compilando sem erro, mas com trechos duplicados e sinais de template ainda não finalizado. |
| SEO | **4/10** | Falta description, canonical, robots e dados estruturados; há inconsistência forte de branding. |
| Acessibilidade | **6/10** | Há `alt` nas imagens inspecionadas e alguns `aria-labels`, mas faltam refinamentos semânticos e de conteúdo. |
| Performance | **6/10** | Site leve em arquitetura, porém com JS/CSS relativamente grandes para uma landing page e imagens externas pesadas. |
| Segurança | **6/10** | Não encontrei segredos versionados, mas há risco operacional por exposição manual de token e por links/termos não materializados. |
| Conversão comercial | **6/10** | WhatsApp e formulário existem, mas a mensagem e o conteúdo não estão totalmente coerentes com o empreendimento anunciado. |

## Escopo e método

A auditoria cobriu o comportamento do site em produção, a estrutura de implantação na Vercel, os arquivos principais do frontend e os principais componentes de interface. Também validei a saúde básica do projeto com instalação de dependências, checagem TypeScript e build de produção, além de inspeção do HTML publicado e dos cabeçalhos HTTP capturados durante a análise.[1] [2] [3] [4] [5] [8] [9] [10] [11]

## Arquitetura do projeto

O projeto é uma **SPA estática** baseada em Vite. O `package.json` mostra uso de React 19, TypeScript, Tailwind CSS 4, Wouter para roteamento e geração via `vite build`.[3] A configuração da Vercel aponta `dist/public` como diretório de saída e declara um rewrite genérico para `/index.html`, o que indica intenção clara de servir o aplicativo como SPA.[4]

| Item | Evidência | Leitura técnica |
|---|---|---|
| Build tool | `vite build` no script de produção | Adequado para landing page estática.[3] |
| Framework | React 19 + TypeScript | Base moderna e fácil de manter.[3] |
| Roteamento | `wouter` com rota `/` e fallback interno | Suficiente para site pequeno.[5] |
| Deploy | Vercel com `outputDirectory: dist/public` | Coerente com site estático.[4] |
| Entrada HTML | `client/index.html` | Ainda sem metadados completos de SEO.[6] |

Há também sinais de que o projeto foi derivado de um template ou fluxo assistido. O nome do pacote ainda é `alto-da-alvorada-preview`, o HTML contém um bloco comentado marcado como conteúdo a ser removido, e existem componentes genéricos não necessariamente usados pela landing page final.[3] [6]

## Qualidade do código

A organização geral do código é boa para um projeto pequeno. A página principal é composta por seções bem separadas — `Header`, `Hero`, `Introduction`, `PointsOfInterest`, `Amenities`, `Units`, `Gallery`, `OtherDevelopments`, `ContactSection` e `Footer` — o que favorece manutenção incremental.[7] O roteamento também está claro e minimalista.[5]

Contudo, a auditoria encontrou **quatro problemas de qualidade estrutural** que merecem atenção. O primeiro é a existência de **duplicidade aparente de `ErrorBoundary`** em caminhos diferentes, o que aumenta ruído e possibilidade de divergência futura.[5] [12] O segundo é a presença de um componente de mapa genérico com chave e proxy de terceiros, mas sem evidência de uso efetivo na home auditada, sugerindo código residual.[13] O terceiro é a grande quantidade de dependências para um site relativamente simples, o que tende a inflar bundle e manutenção.[3] O quarto é a existência de texto de erro e rota 404 em inglês, destoando do restante do projeto, que está majoritariamente em português.[12]

| Achado de código | Severidade | Evidência |
|---|---:|---|
| Nome do pacote e sinais de preview/template ainda presentes | Média | `alto-da-alvorada-preview` e comentário temporário no HTML.[3] [6] |
| Duplicidade de `ErrorBoundary` | Média | Arquivo em `client/src/ErrorBoundary.tsx` e outro em `client/src/components/ErrorBoundary.tsx`.[2] [12] |
| Componente de mapa genérico aparentemente residual | Baixa | `Map.tsx` com proxy externo e `DEMO_MAP_ID`, sem integração visível na home.[13] |
| Página 404 interna em inglês | Baixa | `NotFound.tsx` contém “Page Not Found” e “Go Home”.[12] |

## Funcionamento do site em produção

No ambiente publicado, a home carrega normalmente, as seções aparecem na ordem esperada e os links de navegação interna funcionam. Durante os testes, as âncoras **Contato** e **Plantas** reposicionaram corretamente a página para as seções correspondentes.[1] [10]

O ponto mais sensível da experiência funcional é o **carrossel do herói**. Pelo código, ele alterna entre **Alto Sobradinho**, **Alto da Aurora**, **Alto da Alvorada** e **Alto do Horizonte**.[7] Em produção, observei a home exibir nomes diferentes em momentos distintos, embora o `<title>` da página permaneça “Alto da Alvorada - Condomínio de Luxo”.[1] [10] Essa escolha compromete a clareza comercial da landing page, porque o visitante entra esperando um empreendimento específico e encontra uma narrativa de portfólio parcialmente mesclada.

> O site se apresenta tecnicamente como landing page de um produto, mas o herói se comporta como vitrine rotativa de vários produtos. Essa é hoje a principal quebra de coerência da experiência.

O formulário de contato está implementado no frontend e envia dados para o Formspree em `https://formspree.io/f/mojyejbd`.[14] Por prudência, não enviei um cadastro real durante a auditoria, para não poluir sua base comercial. Ainda assim, o código mostra que existe submissão assíncrona, feedback visual e validação mínima da região de interesse.[14]

## Problemas funcionais relevantes

O problema funcional mais objetivo encontrado foi o comportamento de **rota inexistente**. Apesar de o projeto conter um componente `NotFound` interno e de o `vercel.json` declarar rewrite para SPA, o acesso direto a uma rota inexistente em produção retornou a **página padrão 404 da plataforma**, não a página customizada do aplicativo.[4] [11] Isso sugere desalinhamento entre a configuração esperada e o comportamento efetivamente publicado.

Outro ponto funcional importante é a montagem dos links de WhatsApp na seção de unidades. O código concatena texto adicional ao final da URL já codificada, no formato:

> `https://wa.me/...?...` + ` (Interesse na unidade: X)`

Essa concatenação tende a gerar uma URL menos robusta do que a construção correta de uma nova mensagem completamente codificada em `text=`.[14] Em muitos casos ainda pode abrir, mas é uma implementação frágil e pouco elegante.

| Problema funcional | Impacto | Evidência |
|---|---|---|
| Herói muda entre empreendimentos diferentes | Alto | Confunde posicionamento e campanha.[1] [7] [10] |
| Rota inexistente cai no 404 padrão da plataforma | Alto | Perda de experiência e SEO.[4] [11] |
| Link de WhatsApp das unidades é montado de forma frágil | Médio | Concatenação textual fora do parâmetro codificado.[14] |
| CTA menciona política e termos sem páginas associadas | Médio | Afeta confiança e conformidade percebida.[14] |
| Campo “E-mail Corporativo” em site residencial | Médio | Pode reduzir conversão ou gerar estranhamento.[14] |

## SEO

A camada de SEO está hoje **abaixo do ideal**. No HTML de entrada publicado, identifiquei ausência de `meta description`, `meta keywords`, `meta robots`, `canonical` e dados estruturados JSON-LD.[6] [9] Além disso, o atributo `lang` está definido como `en`, embora o conteúdo seja em português brasileiro.[6] [9] Essa combinação prejudica interpretação por mecanismos de busca, snippets e consistência semântica.

O problema de SEO mais grave, porém, continua sendo **a inconsistência entre intenção de página e conteúdo principal**. O título do documento aponta para “Alto da Alvorada”, mas o herói rotaciona outros empreendimentos.[1] [6] [7] Para uma landing page imobiliária, isso reduz relevância temática, enfraquece indexação focada e pode diminuir a taxa de conversão do tráfego orgânico ou pago.

| Item de SEO | Estado atual | Impacto |
|---|---|---|
| `<title>` | Presente | Positivo, mas insuficiente sozinho.[1] [6] |
| `meta description` | Ausente | Prejudica snippet e CTR.[6] [9] |
| Canonical | Ausente | Piora consolidação de URL canônica.[9] |
| `robots` | Ausente | Menor controle de indexação.[9] |
| `lang="pt-BR"` | Incorreto; está `en` | Afeta semântica e acessibilidade.[6] [9] |
| JSON-LD | Ausente | Perde oportunidade de rich results.[9] |
| Coerência semântica do herói | Fraca | Prejudica intenção da página.[1] [7] |

## Acessibilidade e UX

A base não está ruim, mas ainda precisa amadurecer. Os botões do carrossel possuem `aria-label`, e as imagens inspecionadas apresentam texto alternativo, o que é positivo.[7] [9] A navegação por âncoras também ajuda na previsibilidade da home.[1]

Mesmo assim, há pontos de atrito. O primeiro é textual: a página alterna português e inglês em mensagens de erro internas.[12] O segundo é semântico: os textos legais de política e termos aparecem apenas como texto corrido, sem links reais.[14] O terceiro é de microcopy comercial: “E-mail Corporativo” não parece alinhado com um lead residencial comum.[14] O quarto é a ausência de sinais visíveis de acessibilidade mais avançada, como skip links, estados de foco mais explicitamente tratados e estrutura legal claramente navegável.

## Performance

A home não aparenta travamentos evidentes em uso normal, mas a análise de ativos mostra que o bundle JavaScript publicado tem cerca de **409 KB** e o CSS cerca de **127 KB**, números razoáveis para uma SPA, porém relativamente altos para uma landing page focada em conversão.[15] A própria resposta HTML principal chegou com aproximadamente **368 KB**, e uma única imagem de planta inspecionada tinha aproximadamente **294 KB**.[10] [15]

Esses números não tornam o site inviável, mas indicam espaço real para otimização. Parte desse peso provavelmente vem do conjunto extenso de dependências e de componentes genéricos que não são essenciais para uma página de apresentação simples.[3] Além disso, o herói usa imagens externas grandes e um fundo com `backgroundAttachment: fixed`, recurso que costuma ser menos amigável em dispositivos móveis e pode afetar fluidez em certos cenários.[7]

| Recurso | Tamanho observado | Leitura |
|---|---:|---|
| HTML principal | ~368 KB | Alto para uma landing page simples, embora parte possa vir de inline/runtime.[10] |
| JS principal | ~409 KB | Candidato claro para redução.[15] |
| CSS principal | ~127 KB | Pode ser enxugado com revisão de estilos e dependências.[15] |
| Imagem de planta amostral | ~294 KB | Aceitável isoladamente, mas merece compressão contínua.[10] |

## Segurança

No repositório auditado, **não encontrei segredos versionados** por padrão nas buscas realizadas.[2] Isso é positivo. Também observei uso correto de `rel="noopener noreferrer"` em links externos importantes, o que reduz um risco clássico de navegação em nova aba.[14]

Ainda assim, há dois alertas. O primeiro é operacional e crítico: a **chave pessoal do GitHub compartilhada na conversa deve ser revogada imediatamente**, porque qualquer token exposto fora do canal controlado deve ser considerado comprometido. O segundo é de reputação e confiança: o site menciona política de privacidade e termos de uso sem materializar essas páginas, o que enfraquece percepção de conformidade e profissionalismo.[14]

## Implantação e roteamento

A configuração declarada para a Vercel parece correta para uma SPA, com rewrite global para `index.html`.[4] Entretanto, o teste real em produção mostrou 404 padrão da plataforma em rota desconhecida.[11] Isso pode ocorrer por divergência entre o arquivo versionado e o que foi efetivamente publicado, por cache/configuração do projeto na plataforma, por conflito de regras, ou por comportamento de deploy não refletindo a revisão atual.

Em outras palavras, **o código sugere uma intenção correta, mas a produção não confirma essa intenção**.[4] [11]

## Prioridades recomendadas

| Prioridade | Ação | Motivo |
|---|---|---|
| **P1** | Fixar o herói em um único empreendimento ou separar claramente página de portfólio e página de produto | Hoje é o principal problema comercial e semântico.[1] [7] |
| **P1** | Corrigir o 404 em produção para usar o fallback do app | Impacta UX, rastreamento e SEO.[4] [11] |
| **P1** | Adicionar `meta description`, canonical, robots e `lang="pt-BR"` | Ganho rápido de SEO técnico.[6] [9] |
| **P1** | Revogar a chave do GitHub exposta e gerar outra | Medida de segurança imediata. |
| **P2** | Trocar “E-mail Corporativo” por “E-mail” e revisar microcopy do formulário | Melhora conversão.[14] |
| **P2** | Criar páginas reais de Política de Privacidade e Termos de Uso | Melhora confiança e conformidade.[14] |
| **P2** | Corrigir a montagem das URLs de WhatsApp por unidade | Torna tracking e compartilhamento mais robustos.[14] |
| **P3** | Reduzir dependências e bundle da landing page | Melhora performance e manutenção.[3] [15] |
| **P3** | Revisar textos em inglês de 404 e tratamento de erro | Aumenta consistência de marca.[12] |

## Conclusão

O site **não está ruim**. Ele tem base moderna, código separável por componentes, build saudável e entrega visual suficientemente boa para continuar evoluindo.[3] [5] [8] O que hoje limita sua força não é a ausência de tecnologia, mas a **falta de acabamento estratégico e editorial**. A página ainda mistura identidade de múltiplos empreendimentos, deixa SEO técnico incompleto, não entrega a 404 prevista em produção e transmite alguns sinais de “preview” em vez de produto comercial totalmente consolidado.[1] [4] [6] [7] [11]

Se você quiser, o próximo passo mais eficiente é eu transformar esta auditoria em um **plano de correção com prioridade alta/média/baixa** e depois aplicar as mudanças diretamente no repositório.

## Referências

[1]: https://magnos-site.vercel.app/ "Site publicado: Magnos / Alto da Alvorada"
[2]: https://github.com/renatolandim26-lgtm/Magnos "Repositório GitHub do projeto"
[3]: https://github.com/renatolandim26-lgtm/Magnos/blob/main/package.json "package.json do projeto"
[4]: https://github.com/renatolandim26-lgtm/Magnos/blob/main/vercel.json "Configuração de implantação na Vercel"
[5]: https://github.com/renatolandim26-lgtm/Magnos/blob/main/client/src/App.tsx "Estrutura de rotas do aplicativo"
[6]: https://github.com/renatolandim26-lgtm/Magnos/blob/main/client/index.html "HTML base do frontend"
[7]: https://github.com/renatolandim26-lgtm/Magnos/blob/main/client/src/components/Hero.tsx "Componente Hero com carrossel principal"
[8]: https://github.com/renatolandim26-lgtm/Magnos/blob/main/tsconfig.json "Configuração TypeScript do projeto"
[9]: /home/ubuntu/magnos_audit/live_html_report.txt "Relatório de inspeção do HTML publicado"
[10]: /home/ubuntu/magnos_audit/headers_report.txt "Cabeçalhos HTTP da home e de imagem publicada"
[11]: https://magnos-site.vercel.app/rota-inexistente-teste "Teste de rota inexistente em produção"
[12]: https://github.com/renatolandim26-lgtm/Magnos/blob/main/client/src/pages/NotFound.tsx "Página 404 interna do projeto"
[13]: https://github.com/renatolandim26-lgtm/Magnos/blob/main/client/src/components/Map.tsx "Componente de mapa do projeto"
[14]: https://github.com/renatolandim26-lgtm/Magnos/blob/main/client/src/components/ContactSection.tsx "Seção de contato e formulário"
[15]: /home/ubuntu/magnos_audit/bundle_headers.txt "Cabeçalhos dos bundles JS e CSS publicados"
