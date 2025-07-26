export default {
  introduction: {
    title: "Gerador de Número de Identificação Chinês: Funcionalidades e Operação",
    p1: "Este gerador produz números de identificação chineses válidos estruturalmente, seguindo o formato oficial estabelecido pelo governo chinês. Os números gerados são fictícios, destinando-se exclusivamente a testes e desenvolvimento.",
    p2: "A ferramenta é especialmente útil para desenvolvedores de software, testadores de QA e designers que necessitam incorporar números de ID chineses em aplicações sem utilizar dados pessoais reais. Cada número gerado contém informações embutidas como região, data de nascimento e gênero, em conformidade com o formato oficial.",
    p3: "Através de opções personalizáveis de região, intervalo de datas de nascimento, gênero e quantidade, nosso gerador oferece flexibilidade enquanto mantém a conformidade com os algoritmos de validação oficiais.",
    structureTitle: "Estrutura do Número de Identificação Chinês",
    structureDesc: "Cada número de ID chinês contém 18 dígitos organizados da seguinte forma:"
  },
  useCases: {
    title: "Aplicações Práticas do Gerador",
    case1: {
      title: "Testes de Software e Desenvolvimento",
      description: "Desenvolvedores podem gerar dados de teste que passam em verificações de validação de ID chinês, sem comprometer a privacidade de indivíduos reais. Ideal para testes de formulários, preenchimento de bancos de dados e testes de API."
    },
    case2: {
      title: "Design de Interface e Prototipagem",
      description: "Designers criando protótipos de aplicativos que envolvem identificação de usuários chineses podem utilizar esses números gerados para representações realistas sem riscos de privacidade."
    },
    case3: {
      title: "Fins Educacionais",
      description: "Estudantes e educadores aprendendo sobre estruturas de dados, algoritmos de validação ou sistemas administrativos chineses podem usar esta ferramenta para entender como as informações são codificadas nos números de ID."
    },
    case4: {
      title: "Conformidade com Privacidade de Dados",
      description: "Organizações podem evitar o uso de números de ID reais em ambientes não produtivos, ajudando no cumprimento de regulamentações de proteção de dados enquanto mantêm dados de teste realistas."
    }
  },
  guide: {
    title: "Como Utilizar o Gerador de Números de ID",
    step1: {
      title: "Configuração Regional",
      description: "Escolha entre gerar números de regiões aleatórias ou selecione províncias e cidades específicas. A função de seleção múltipla permite gerar IDs de diversas localidades simultaneamente."
    },
    step2: {
      title: "Definição do Intervalo de Datas",
      description: "Estabeleça o período de nascimento para os números gerados, permitindo criar IDs para faixas etárias ou períodos históricos específicos."
    },
    step3: {
      title: "Seleção de Gênero",
      description: "Opte por gerar IDs com gênero aleatório, exclusivamente masculino ou feminino. O gênero é codificado no dígito sequencial (ímpar para homens, par para mulheres)."
    },
    step4: {
      title: "Geração e Exportação",
      description: "Especifique a quantidade desejada e clique em gerar. Os resultados podem ser copiados individualmente ou em massa, e exportados em formatos TXT, CSV ou Excel para uso posterior."
    },
    tip: "Para melhores resultados, considere os requisitos específicos do seu cenário de teste. Ajuste as datas de nascimento para testar sistemas com restrições etárias e selecione regiões relevantes para seu aplicativo.",
    additionalTip: "Para verificar a validade dos números gerados, utilize nosso",
    hashCalculatorLink: "Calculadora de Hash"
  },
  faq: {
    title: "Perguntas Frequentes sobre IDs Chineses",
    q1: "Os números gerados são legalmente válidos?",
    a1: "Não. Embora estruturalmente válidos (passando em verificações de formato e checksum), os números são completamente fictícios. Seu uso é restrito a testes, educação e demonstrações. Utilizá-los para identificação oficial ou representação fraudulenta é ilegal.",
    q2: "Como o gênero é codificado no número de ID?",
    a2: "O gênero é indicado pelo penúltimo dígito (17º). Dígitos ímpares (1,3,5,7,9) representam homens, enquanto pares (0,2,4,6,8) representam mulheres.",
    q3: "É possível gerar IDs para regiões específicas da China?",
    a3: "Sim. Nossa ferramenta permite selecionar províncias e cidades específicas, com suporte a seleção múltipla para gerar IDs de diversas localidades simultaneamente. Todas as divisões administrativas estão disponíveis.",
    q4: "Qual o significado do último dígito do ID chinês?",
    a4: "O último dígito (18º) é um dígito verificador calculado através de algoritmo específico baseado nos 17 dígitos anteriores. Pode ser um número de 0-9 ou a letra X (representando 10).",
    q5: "Com que frequência o formato do ID chinês é atualizado?",
    a5: "O formato de 18 dígitos é padrão desde outubro de 1999. Embora a estrutura permaneça estável, os códigos regionais são atualizados conforme reorganizações administrativas. Nosso gerador utiliza os códigos mais recentes.",
    officialSource: "Ministério da Segurança Pública da China (Site Oficial)"
  },
  resources: {
    title: "Ferramentas e Recursos Relacionados",
    passwordGenerator: "Gerador de Senhas - Crie senhas seguras com opções personalizáveis",
    wordShuffler: "Embaralhador de Texto - Reorganize palavras, frases ou parágrafos aleatoriamente",
    hashCalculator: "Calculadora de Hash - Verifique integridade de dados com múltiplos algoritmos",
    wikipediaLink: "Wikipedia: Cartão de Identificação Chinês - Detalhes sobre o sistema de identificação"
  },
  conclusion: {
    title: "Conclusão",
    p1: "Este gerador oferece uma solução valiosa para profissionais que necessitam trabalhar com números de identificação chineses, equilibrando a necessidade de dados realistas com considerações éticas e de privacidade.",
    p2: "Seja para desenvolvimento de aplicativos, testes de sistemas ou fins educacionais, a ferramenta proporciona a flexibilidade e precisão necessárias para lidar com o formato de ID chinês de maneira responsável.",
    disclaimer: "Aviso Legal: Esta ferramenta destina-se exclusivamente a testes legítimos, educação e desenvolvimento. Os números gerados não devem ser utilizados para fraude de identidade, representação falsa ou qualquer atividade ilegal."
  }
}
