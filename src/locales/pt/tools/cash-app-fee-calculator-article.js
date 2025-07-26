export default {
  title: 'Guia completo da calculadora de taxas do Cash App',
  intro: {
    title: 'O que é a calculadora de taxas do Cash App?',
    content1: 'Esta calculadora ajuda a determinar com precisão as taxas para várias transações no Cash App. Seja enviando dinheiro, recebendo pagamentos ou fazendo saques, nossa calculadora usa as taxas mais recentes (atualizadas em 18/04/2025).',
    content2: 'Elimine surpresas com taxas usando nossa calculadora. Diferente do app oficial que nem sempre mostra as taxas claramente antes das transações.'
  },
  applications: {
    title: 'Quando usar a calculadora',
    scenarios: [
      {
        title: 'Calcular taxas de cartão de crédito',
        description: 'Determine a taxa exata de 3% ao enviar dinheiro com cartão de crédito.'
      },
      {
        title: 'Planejar depósitos instantâneos',
        description: 'Calcule as taxas de 0.5%-1.75% para transferências rápidas para sua conta bancária.'
      },
      {
        title: 'Pagamentos em contas comerciais',
        description: 'Usuários comerciais podem calcular a taxa de 2.75% para recebimentos.'
      },
      {
        title: 'Custos com Bitcoin',
        description: 'Determine os custos variáveis para comprar/vender Bitcoin no Cash App.'
      },
      {
        title: 'Estimativa de saques ATM',
        description: 'Calcule a taxa de $2.50 do Cash App + possíveis taxas do operador de ATM.'
      },
      {
        title: 'Análise de taxas em ações',
        description: 'Identifique possíveis taxas regulatórias para compra/venda de ações.'
      },
      {
        title: 'Planejamento de transações internacionais',
        description: 'Calcule taxas para transferências e conversões internacionais.'
      },
      {
        title: 'Cálculo reverso',
        description: 'Determine quanto enviar para que o destinatário receba exatamente o valor desejado.'
      }
    ]
  },
  guide: {
    title: 'Como usar a calculadora',
    steps: [
      {
        title: 'Selecione o tipo de transação',
        description: 'Escolha entre transferência, depósito, Bitcoin, ações, etc.'
      },
      {
        title: 'Selecione o tipo de conta',
        description: 'Pessoal ou comercial, pois as taxas diferem.'
      },
      {
        title: 'Escolha o método de cálculo',
        description: 'Padrão (valor enviado → recebido) ou reverso (valor desejado → enviar).'
      },
      {
        title: 'Insira o valor',
        description: 'Digite o valor em dólares da transação.'
      },
      {
        title: 'Especifique detalhes',
        description: 'Método de pagamento, velocidade do depósito, tipo de ATM, etc.'
      },
      {
        title: 'Calcule',
        description: 'Clique em "Calcular taxas" para processar.'
      },
      {
        title: 'Veja os resultados',
        description: 'Confira o valor original, taxas aplicáveis e valor final.'
      }
    ]
  },
  faq: {
    title: 'Perguntas frequentes',
    items: [
      {
        question: 'Qual a taxa para $1000 no Cash App?',
        answer: 'Enviar $1000 do saldo ou débito: sem taxa. Com cartão de crédito: 3% ($30). Depósito instantâneo: 0.5%-1.75% ($5-$17.50), com máximo de $9.99.'
      },
      {
        question: 'Como funciona a taxa para depósito instantâneo?',
        answer: '0.5% a 1.75% do valor (mínimo $0.25, máximo $9.99). Depósito padrão (1-3 dias) é gratuito.'
      },
      {
        question: 'Há taxa mensal no Cash App?',
        answer: 'Não, só se aplicam taxas para transações específicas.'
      },
      {
        question: 'Como as taxas são pagas?',
        answer: 'São deduzidas automaticamente do valor da transação.'
      },
      {
        question: 'Qual a taxa para Bitcoin?',
        answer: 'Taxas variáveis incluindo spread (~1.75%).'
      },
      {
        question: 'Qual a taxa para $200?',
        answer: 'Enviar $200 do saldo/débito: sem taxa. Crédito: 3% ($6). Depósito instantâneo: $1-$3.50.'
      },
      {
        question: 'Qual a taxa para saque ATM?',
        answer: '$2.50 do Cash App + possíveis taxas do operador se ATM for fora da rede.'
      },
      {
        question: 'Como evitar taxas?',
        answer: 'Use saldo/débito/banco para enviar; escolha depósito padrão; use ATMs na rede se tiver depósito direto de $300+/mês.'
      }
    ]
  },
  feeTypes: {
    title: 'Tipos de taxas',
    items: [
      {
        title: 'Envio em conta pessoal',
        description: '0% usando saldo/banco/débito. 3% com cartão de crédito.'
      },
      {
        title: 'Recebimento em conta pessoal',
        description: 'Sempre gratuito.'
      },
      {
        title: 'Contas comerciais',
        description: '2.75% para recebimentos.'
      },
      {
        title: 'Depósitos',
        description: 'Padrão: gratuito. Instantâneo: 0.5%-1.75% (mín $0.25, máx $9.99).'
      },
      {
        title: 'Saque ATM',
        description: '$2.50. Usuários com depósito direto de $300+/mês têm reembolso de até $7/mês.'
      },
      {
        title: 'Bitcoin',
        description: '~1.75% incluindo spread.'
      },
      {
        title: 'Ações',
        description: 'Compra sem comissão. Venda pode ter pequenas taxas.'
      },
      {
        title: 'Internacional',
        description: '~3% + possíveis taxas de câmbio.'
      }
    ]
  },
  tips: {
    title: 'Dicas para reduzir taxas',
    items: [
      'Use saldo ou débito em vez de crédito para evitar 3%.',
      'Planeje com antecedência e use depósito padrão.',
      'Configure depósito direto de $300+/mês para reembolso de taxas ATM.',
      'Contas comerciais devem considerar 2.75% para recebimentos.',
      'Use cálculo reverso para determinar valor exato a enviar.',
      'Compare custos de Bitcoin antes de grandes compras.',
      'Consolide pequenas transferências para minimizar taxas mínimas.',
      'Compare taxas internacionais com outros serviços.'
    ]
  },
  conclusion: {
    title: 'Tome decisões financeiras informadas',
    content: 'Nossa calculadora proporciona transparência sobre taxas do Cash App, ajudando você a gerenciar melhor suas finanças digitais. Saiba exatamente quanto cada transação custará e planeje-se adequadamente.'
  }
}
