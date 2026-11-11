/**
 * STUDIO OCTUS — Conceito, modelo de negócio e operação.
 * Apenas identidade Octus. Trechos entre *asteriscos* recebem destaque em ciano.
 */

export const meta = { client: 'Studio Octus', agency: 'Studio Octus', date: 'Novembro · 2026' }

export const chapters = [
  { label: 'Conceito', from: 1, to: 3 },
  { label: 'Operação', from: 4, to: 7 },
  { label: 'Modelo', from: 8, to: 11 },
]

export const sections = [
  'Capa',
  'O que é o Studio Octus',
  'A oportunidade',
  'Proposta de valor',
  'Estrutura de entrega',
  'Coordenação central',
  'Método de atuação',
  'Perfil dos clientes',
  'Modelo em duas fases',
  'Fase 1 · Base recorrente',
  'Fase 2 · Parcerias de crescimento',
  'Transição gradual',
  'Síntese',
]

export const cover = {
  tag: 'Conceito, modelo de negócio e operação',
  title: 'Studio Octus',
  subtitle: 'Núcleo de inteligência operacional e crescimento empresarial.',
}

export const what = {
  label: 'O que é o Studio Octus',
  title: 'Um núcleo que conecta *operação e crescimento*.',
  lead: 'Integramos análise do negócio, gestão, tecnologia e marketing em uma única inteligência, com execução própria e uma rede de especialistas coordenada por nós.',
  pillars: [
    { name: 'Análise do negócio', text: 'Processos, custos, mercado e capacidade de entrega' },
    { name: 'Gestão', text: 'Prioridades, metas, orçamento e acompanhamento' },
    { name: 'Tecnologia', text: 'Automações, sistemas e indicadores' },
    { name: 'Marketing', text: 'Direção de growth, prospecção e campanhas' },
  ],
  center: 'Inteligência integrada',
  evolution: { from: 'Serviços recorrentes', to: 'Parcerias com participação nos resultados' },
}

export const opportunity = {
  label: 'A oportunidade',
  title: 'Empresas tentam crescer com peças *desconectadas*.',
  lead: 'O marketing é contratado de um lado, a gestão de outro, a tecnologia de outro. Ninguém olha a empresa inteira, e o crescimento esbarra no que a operação consegue entregar.',
  without: {
    title: 'O padrão do mercado',
    items: ['Fornecedores isolados, cada um com sua meta', 'Marketing que gera demanda sem estrutura para atender', 'Decisões sem dados confiáveis', 'Resultado medido em entregas, não em receita e margem'],
  },
  with: {
    title: 'O Studio Octus',
    items: ['Uma inteligência que coordena todas as frentes', 'Crescimento compatível com a capacidade de entrega', 'Decisões baseadas em diagnóstico e indicadores', 'Resultado medido em receita, margem, caixa e eficiência'],
  },
}

export const value = {
  label: 'Proposta de valor',
  title: 'Crescimento conectado à *realidade da empresa*.',
  inputsLabel: 'O que avaliamos',
  inputs: ['Gargalos', 'Processos', 'Custos', 'Mercado', 'Capacidade de entrega'],
  coreLabel: 'O que estruturamos',
  core: ['Onde intervir', 'Melhorias operacionais', 'Plano de marketing e prospecção compatível com recursos e objetivos'],
  outputsLabel: 'O que acompanhamos',
  outputs: ['Receita', 'Margem', 'Caixa', 'Eficiência operacional'],
}

export const delivery = {
  label: 'Estrutura de entrega',
  title: 'Três frentes, *uma só direção*.',
  fronts: [
    {
      name: 'Execução direta',
      tag: 'Time Octus',
      items: ['Diagnóstico e auditoria gerencial', 'Planejamento', 'Melhoria de processos', 'Automações e tecnologia', 'Direção de marketing e growth'],
    },
    {
      name: 'Coordenação central',
      tag: 'O núcleo',
      items: ['Define estratégia e briefings', 'Seleciona parceiros', 'Alinha o orçamento com a liderança', 'Acompanha as entregas'],
      center: true,
    },
    {
      name: 'Rede de especialistas',
      tag: 'Acionada sob demanda',
      items: ['Fotografia', 'Design', 'Audiovisual', 'Eventos', 'Influenciadores', 'Outras competências do plano'],
    },
  ],
  note: 'A empresa tem um único interlocutor. O Studio garante que cada entrega, interna ou de parceiro, siga o mesmo plano.',
}

export const coordination = {
  label: 'Coordenação central',
  title: 'Como o núcleo *orquestra* cada entrega.',
  flow: [
    { name: 'Estratégia', text: 'O plano define o que precisa ser feito e por quê.' },
    { name: 'Briefing', text: 'Cada entrega recebe objetivo, escopo e critério de qualidade.' },
    { name: 'Seleção', text: 'Execução própria ou parceiro certo para cada competência.' },
    { name: 'Orçamento', text: 'Custos alinhados com a liderança antes de executar.' },
    { name: 'Acompanhamento', text: 'Prazos, qualidade e efeito no resultado.' },
  ],
  gains: [
    { title: 'Escala sem inchar a estrutura', text: 'Especialistas acionados conforme a demanda, não como custo fixo.' },
    { title: 'Qualidade padronizada', text: 'Briefings e critérios definidos pelo núcleo para todas as frentes.' },
    { title: 'Custo transparente', text: 'Mídia, produção e terceiros identificados em cada proposta.' },
  ],
}

export const method = {
  label: 'Método de atuação',
  title: 'Um ciclo contínuo, *guiado pelo resultado*.',
  steps: [
    { name: 'Diagnosticar', text: 'Situação da empresa, oportunidades e restrições.', out: 'Mapa de oportunidades' },
    { name: 'Definir', text: 'Prioridades, metas, orçamento e plano de crescimento com a liderança.', out: 'Plano aprovado' },
    { name: 'Implantar e executar', text: 'Melhorias e ações com a equipe e os parceiros necessários.', out: 'Operação em andamento' },
    { name: 'Medir e ajustar', text: 'Resultados acompanhados e plano ajustado à evolução do negócio.', out: 'Novo ciclo' },
  ],
}

export const clients = {
  label: 'Perfil dos clientes',
  title: 'Escolhemos *com quem* trabalhar.',
  lead: 'Cada contratação precisa ser compatível com a capacidade de entrega e a rentabilidade do Studio.',
  criteria: [
    { name: 'Oportunidade real', text: 'Espaço claro para crescimento ou ganho de eficiência.' },
    { name: 'Liderança disposta', text: 'Abertura para implementar mudanças.' },
    { name: 'Acesso a informações', text: 'Condições de disponibilizar dados e processos.' },
    { name: 'Contrato sustentável', text: 'Compatível com a capacidade e a rentabilidade do Studio.' },
  ],
  phase2: 'Na segunda fase, a seleção prioriza empresas com maior potencial de resultado por parceria.',
}

export const phases = {
  label: 'Modelo de negócio',
  title: 'Um modelo em *duas fases*.',
  lead: 'A evolução acompanha a receita, a maturidade da equipe e a capacidade de execução.',
  cols: ['Fase 1 · Base recorrente', 'Fase 2 · Parcerias de crescimento'],
  rows: [
    { aspect: 'Objetivo', a: 'Sustentar a operação e financiar sua estruturação.', b: 'Ampliar o retorno por empresa a partir dos resultados gerados.' },
    { aspect: 'Receita', a: 'Setup inicial e mensalidade na maioria dos clientes.', b: 'Percentual sobre lucro ou resultado acordado, ou híbrido de fixo mais percentual.' },
    { aspect: 'Estrutura', a: 'Equipe enxuta e especialistas acionados conforme a demanda.', b: 'Time consolidado, processos definidos e atuação mais profunda.' },
    { aspect: 'Seleção', a: 'Adequação ao serviço, capacidade de pagamento e contrato rentável.', b: 'Potencial de crescimento, qualidade da liderança e dados confiáveis.' },
    { aspect: 'Prioridade', a: 'Consolidar uma base de contratos que sustente o negócio.', b: 'Concentrar dedicação nas empresas de maior potencial.' },
  ],
}

export const phase1 = {
  label: 'Fase 1 · Base recorrente',
  title: 'Uma base previsível que *financia a estrutura*.',
  revenue: [
    { name: 'Setup', text: 'Remunera o diagnóstico, o planejamento e a estruturação inicial.' },
    { name: 'Mensalidade', text: 'Remunera a continuidade dos serviços e forma receita previsível.' },
  ],
  loopLabel: 'Ciclo de reinvestimento',
  loop: ['Novos contratos', 'Margem e caixa', 'Equipe, ferramentas e processos', 'Mais capacidade de entrega'],
  notes: ['Estrutura enxuta, compatível com baixo investimento inicial.', 'Reinvestimento acompanha a margem e o caixa disponíveis.', 'Custos de mídia, produção e terceiros identificados em cada proposta.'],
}

export const phase2 = {
  label: 'Fase 2 · Parcerias de crescimento',
  title: 'De prestador de serviço a *parceiro operacional*.',
  lead: 'Em empresas selecionadas, a remuneração passa a acompanhar o resultado econômico gerado.',
  model: [
    { name: 'Fixo', text: 'Sustenta a operação dedicada à empresa.' },
    { name: 'Variável', text: 'Participação sobre o resultado definido para cada relação.' },
  ],
  agreeLabel: 'O que é acordado em cada parceria',
  agree: [
    { name: 'Base de cálculo', text: 'Lucro ou resultado definido' },
    { name: 'Referência inicial', text: 'Ponto de partida medido' },
    { name: 'Apuração', text: 'Como e quando é calculado' },
    { name: 'Prazo', text: 'Duração da participação' },
  ],
  note: '"Sócios de trabalho" descreve o envolvimento na operação. Uma participação societária seria uma decisão adicional.',
}

export const transition = {
  label: 'Transição gradual',
  title: 'A primeira fase *constrói* a segunda.',
  lead: 'A Fase 1 forma o método, a equipe e o histórico de resultados que sustentam a Fase 2. Os contratos recorrentes continuam enquanto as primeiras parcerias são testadas.',
  reqLabel: 'Condições para avançar',
  req: ['Operação rentável', 'Entregas consistentes', 'Dados confiáveis', 'Caixa para aguardar a remuneração variável'],
  chart: { a: 'Base recorrente', b: 'Parcerias de crescimento', x: ['Início', 'Estruturação', 'Primeiras parcerias', 'Maturidade'] },
  note: 'A proporção entre os modelos evolui conforme a capacidade e o desempenho do Studio. Gráfico ilustrativo.',
}

export const closing = {
  title: 'Do serviço recorrente à *parceria de crescimento*.',
  summary: [
    { k: 'O que somos', v: 'Núcleo de inteligência operacional e crescimento' },
    { k: 'Como entregamos', v: 'Execução direta, rede de especialistas e coordenação central' },
    { k: 'Como trabalhamos', v: 'Diagnosticar, definir, executar, medir' },
    { k: 'Como evoluímos', v: 'Base recorrente que financia parcerias com participação nos resultados' },
  ],
  signature: 'Studio Octus · 2026',
}
