export default {
    name: 'Calculadora de Taxas do Cash App',
    title: 'Calculadora de Taxas do Cash App (EUA)',
    description: 'Calcula taxas para transferências, depósitos, saques em ATM, transações de Bitcoin etc. no Cash App, baseado no tipo de conta e método de pagamento.',
    updatedDate: 'Taxas atualizadas em: 18 de abril de 2025',
    
    quickSelect: {
      label: 'Seleção rápida',
      sendCredit: '3% (Enviar - Cartão de crédito)',
      sendDebit: '0% (Enviar - Débito/saldo)',
      receivePersonal: '0% (Conta pessoal - Receber)',
      receiveBusiness: '2.75% (Conta comercial - Receber)',
      instantDeposit: '0.5-1.75% (Depósito instantâneo)',
      atmWithdrawal: 'Saque ATM (taxa de $2.50)'
    },
    
    calculationType: {
      label: 'Tipo de cálculo',
      direct: 'Cálculo padrão (valor enviado → valor recebido)',
      inverse: 'Cálculo inverso (valor desejado → valor a enviar)'
    },
    
    accountType: {
      label: 'Tipo de conta',
      personal: 'Conta pessoal',
      business: 'Conta comercial'
    },
    
    amount: {
      label: 'Valor da transação',
      desiredLabel: 'Valor desejado',
      placeholder: 'Insira o valor'
    },
    
    transactionType: {
      label: 'Tipo de transação',
      options: {
        send: 'Enviar dinheiro',
        receive: 'Receber dinheiro'
      }
    },
    
    paymentSource: {
      label: 'Método de pagamento',
      options: {
        credit: 'Cartão de crédito',
        debit: 'Cartão de débito',
        bank: 'Conta bancária',
        balance: 'Saldo do Cash App'
      }
    },
    
    depositType: {
      label: 'Tipo de depósito',
      options: {
        standard: 'Depósito padrão (1-3 dias úteis)',
        instant: 'Depósito instantâneo'
      }
    },
    
    atmType: {
      label: 'Tipo de ATM',
      options: {
        inNetwork: 'ATM na rede',
        outOfNetwork: 'ATM fora da rede'
      }
    },
    
    additionalAtmFee: {
      label: 'Taxa adicional do ATM (cobrada pelo operador)'
    },
    
    bitcoinTransactionType: {
      label: 'Tipo de transação de Bitcoin',
      options: {
        buy: 'Comprar Bitcoin',
        sell: 'Vender Bitcoin',
        send: 'Enviar Bitcoin (Lightning Network)'
      }
    },
    
    stockTransactionType: {
      label: 'Tipo de transação de ações',
      options: {
        buy: 'Comprar ações',
        sell: 'Vender ações'
      }
    },
    
    cashInLocation: {
      label: 'Local de depósito',
      options: {
        retail: 'Lojas (7-Eleven, CVS etc)',
        other: 'Outros métodos'
      }
    },
    
    internationalType: {
      label: 'Tipo de transação internacional',
      options: {
        send: 'Enviar pagamento internacional',
        receive: 'Receber pagamento internacional',
        convert: 'Conversão de moeda'
      }
    },
    
    tabs: {
      moneyTransfer: 'Transferência',
      deposit: 'Depósito bancário',
      atm: 'Saque ATM',
      bitcoin: 'Bitcoin',
      stocks: 'Ações',
      cashIn: 'Depósito em dinheiro',
      international: 'Transação internacional'
    },
    
    calculateButton: 'Calcular taxas',
    
    results: {
      title: 'Resultado do cálculo',
      amountInput: 'Valor',
      amountSent: 'Valor enviado',
      fee: 'Taxa do Cash App',
      amountReceived: 'Valor recebido',
      finalAmount: 'Valor final',
      desiredAmount: 'Valor desejado',
      amountToSend: 'Valor a enviar',
      note: 'Observação'
    },
    
    errors: {
      amountRequired: 'Insira o valor da transação',
      invalidAmount: 'Insira um valor válido',
      positiveAmount: 'O valor deve ser maior que zero',
      amountTooLarge: 'Valor excede o limite máximo'
    },
    
    notes: {
      creditCardFee: 'Pagamentos com cartão de crédito têm taxa de 3%. Use débito, conta bancária ou saldo para evitar.',
      instantDepositFee: 'Depósito instantâneo: 0.5% a 1.75% (mínimo $0.25, máximo $9.99). Depósito padrão é gratuito.',
      atmInNetworkFee: 'Saque em ATM na rede: taxa de $2.50 do Cash App.',
      atmOutOfNetworkFee: 'Saque em ATM fora da rede: taxa de $2.50 + possíveis taxas do operador.',
      bitcoinBuyFee: 'Compra de Bitcoin inclui taxas de rede e spread variável.',
      bitcoinSellFee: 'Venda de Bitcoin inclui taxas de rede e spread variável.',
      bitcoinSendFee: 'Envio via Lightning Network é gratuito, mas transações na blockchain podem ter taxas.',
      stockBuyFee: 'Cash App não cobra comissão para compra de ações, mas podem aplicar taxas regulatórias.',
      stockSellFee: 'Venda de ações pode ter pequenas taxas regulatórias.',
      cashInRetailFee: 'Depósito em lojas: $0.99 a $2.99 dependendo do valor.',
      cashInOtherFee: 'Depósito via conta bancária ou depósito direto geralmente é gratuito.',
      internationalTransferFee: 'Transferências internacionais podem ter taxas mais altas e câmbio.',
      currencyConversionFee: 'Conversão de moeda inclui taxas e possivelmente spread cambial.'
    },
    
    feeInfo: {
      title: 'Informações sobre taxas',
      personal: {
        receiving: 'Conta pessoal - Receber: 0%',
        sendingCredit: 'Conta pessoal - Enviar (crédito): 3%',
        sendingOther: 'Conta pessoal - Enviar (débito/banco/saldo): 0%',
        standardDeposit: 'Conta pessoal - Depósito padrão: 0%',
        instantDeposit: 'Conta pessoal - Depósito instantâneo: 0.5-1.75% (mín $0.25, máx $9.99)'
      },
      business: {
        receiving: 'Conta comercial - Receber: 2.75%'
      },
      atm: 'Saque ATM: $2.50 + possíveis taxas do operador',
      bitcoin: 'Bitcoin: taxas variáveis conforme mercado',
      stocks: 'Ações: compra - grátis, venda - pequenas taxas regulatórias',
      cashIn: 'Depósito em lojas: $0.99-$2.99 conforme valor',
      international: 'Transferência internacional: ~3%'
    },
    
    article: {
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
  };