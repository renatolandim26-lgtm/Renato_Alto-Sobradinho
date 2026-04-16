# Achados iniciais do site publicado

- Título da página em produção: **Alto da Alvorada - Condomínio de Luxo**.
- O herói exibido ao carregar a página mostra **"Alto Sobradinho"** com subtítulo **"Destino Vida e Lar"**, sugerindo inconsistência entre branding do título do documento e conteúdo principal visível.
- A navegação visível contém as âncoras: Sobre, Lazer, Plantas, Galeria, Empreendimentos e Contato.
- A página inicial renderiza seções de pontos de interesse, amenidades, plantas, galeria, outros empreendimentos e formulário de contato.
- O formulário exibe o rótulo **"E-mail Corporativo"**, o que pode filtrar ou confundir leads residenciais.
- O texto menciona **Política de Privacidade** e **Termos de Uso**, mas ainda não foi confirmada a existência de páginas reais para esses documentos.
- Há chamadas para WhatsApp visíveis e botões de solicitação de informações.

Em nova verificação do site em produção, o herói já havia mudado automaticamente para **"Alto do Horizonte"** com a descrição **"Primeiro condomínio do nosso complexo"**. Isso confirma que o carrossel inicial alterna entre diferentes empreendimentos, reforçando a percepção de branding inconsistente para quem acessa uma landing page cujo título do documento e demais seções apresentam o empreendimento **Alto da Alvorada**.

Foram testadas âncoras internas da navegação. O link de **Contato** levou corretamente à seção de atendimento no rodapé da página, e o link de **Plantas** posicionou a tela na seção de unidades. Isso indica que a navegação interna básica funciona. Na seção de plantas, as imagens carregam visualmente e os três cards de unidades aparecem corretamente. Ainda assim, permanece a inconsistência do herói, que nesse momento exibia **Alto da Alvorada**, enquanto em verificações anteriores alternou para outros nomes do complexo.

Ao testar uma rota inexistente em produção, o servidor retornou a página padrão da plataforma com o título **"404: NOT_FOUND"**, em vez de renderizar a página 404 customizada do projeto. Na prática, isso significa que o fallback de rotas configurado no frontend não está cobrindo acessos diretos a caminhos desconhecidos na implantação atual, o que prejudica experiência, consistência de marca e SEO.
