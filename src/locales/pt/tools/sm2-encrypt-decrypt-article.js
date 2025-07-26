export default {
  title: 'Criptografia SM2: Guia Completo',
  introduction: {
    title: 'O que é criptografia SM2 e como funciona?',
    p1: 'A criptografia SM2 é um componente essencial do padrão chinês de criptografia comercial, sendo um algoritmo robusto de chave pública. Desenvolvido pelo Escritório Chinês de Gerenciamento de Criptografia Comercial, o SM2 oferece segurança comparável ao RSA-2048, mas com chaves mais curtas e melhor desempenho, ideal para comunicações digitais seguras e proteção de dados.',
    p2: 'Diferente dos métodos simétricos, o SM2 utiliza um par de chaves: uma chave pública para criptografia (que pode ser compartilhada) e uma chave privada para descriptografia (que deve ser mantida em segredo). Essa abordagem assimétrica resolve problemas de distribuição de chaves, permitindo comunicação segura sem necessidade de chaves pré-compartilhadas.',
    p3: 'Nossa ferramenta SM2 oferece interface amigável para gerar pares de chaves, criptografar informações sensíveis e descriptografar mensagens, sem exigir conhecimento especializado em criptografia - tornando esta tecnologia avançada acessível desde profissionais de segurança até usuários preocupados com privacidade.'
  },
  useCases: {
    title: 'Aplicações da Criptografia SM2',
    item1: 'Comunicações seguras em sistemas bancários (especialmente onde SM2 é padrão regulatório)',
    item2: 'Proteção de comunicações governamentais e militares',
    item3: 'Sistemas de assinatura digital para autenticação e não-repúdio',
    item4: 'Proteção de dados em trânsito para plataformas de e-commerce',
    item5: 'Autenticação em infraestruturas PKI e certificados digitais'
  },
  guide: {
    title: 'Guia Prático da Ferramenta SM2',
    step1: {
      title: 'Passo 1: Gerenciamento de Chaves',
      description: 'Configure suas chaves de três formas:',
      option1: 'Clique em "Gerar novo par" para criar chaves SM2',
      option2: 'Importe chaves existentes com "Importar chave"',
      option3: 'Use "Carregar exemplo" para testar com chaves pré-geradas'
    },
    step2: {
      title: 'Passo 2: Preparação de Dados',
      description: 'Para criptografar/descriptografar:',
      option1: 'Selecione formato de entrada (texto, hex, Base64 ou arquivo)',
      option2: 'Para criptografia: insira seu texto claro',
      option3: 'Para descriptografia: insira o texto cifrado',
      option4: 'No modo arquivo: arraste/solte ou clique para selecionar'
    },
    step3: {
      title: 'Passo 3: Configurações',
      description: 'Ajustes importantes antes de processar:',
      option1: 'Formato de texto cifrado (C1C2C3 padrão ou C1C3C2 comum na China)',
      option2: 'Formato de saída desejado (texto, hexadecimal ou Base64)'
    },
    step4: {
      title: 'Passo 4: Processamento e Resultados',
      description: 'Clique em "Criptografar" ou "Descriptografar". Após processamento, você pode copiar resultados, baixar arquivos ou visualizar componentes detalhados do texto cifrado (partes C1, C2 e C3).'
    }
  },
  faq: {
    title: 'Perguntas Frequentes sobre SM2',
    q1: 'Quais as vantagens do SM2 sobre outros algoritmos?',
    a1: 'O SM2 oferece chaves mais curtas (256 bits) com segurança equivalente ao RSA-2048, operações mais rápidas e conformidade com padrões chineses. Também foi projetado para resistir a ataques quânticos, sendo uma solução futurista.',
    q2: 'Qual a diferença entre formatos C1C2C3 e C1C3C2?',
    a2: 'Ambos contêm os mesmos três componentes em ordens diferentes. C1 representa um ponto na curva elíptica, C2 são os dados cifrados e C3 é um hash de verificação. C1C2C3 é o formato original, enquanto C1C3C2 é mais comum na China. Nossa ferramenta suporta ambos para máxima compatibilidade.',
    q3: 'O SM2 é adequado para dados sensíveis?',
    a3: 'Sim, o SM2 é seguro para dados sensíveis. Porém, para aplicações críticas, recomendamos implementações locais com sistemas adequados de armazenamento de chaves. Esta ferramenta online é ideal para testes e educação.',
    q4: 'Como verificar se minha criptografia SM2 funciona?',
    a4: 'Teste criptografando uma mensagem e depois descriptografando para verificar se o texto original é recuperado. Use a opção "Carregar exemplo" para uma demonstração automática. Em sistemas de produção, consulte vetores de teste oficiais.',
    q5: 'É possível descriptografar SM2 sem a chave privada?',
    a5: 'Não. A segurança do SM2 baseia-se no problema do logaritmo discreto em curvas elípticas - considerado computacionalmente inviável com tecnologias atuais. Por isso, manter chaves privadas seguras é essencial.'
  },
  comparison: {
    title: 'SM2 vs. Outros Algoritmos',
    p1: 'O SM2 pertence à família ECC (Criptografia de Curva Elíptica), semelhante ao ECDSA, mas com parâmetros específicos definidos pelo padrão chinês. Comparado ao RSA, oferece segurança equivalente com chaves significativamente mais curtas (256 bits do SM2 ≈ 2048 bits do RSA), resultando em operações mais rápidas e menor consumo de recursos.',
    p2: 'Para aplicações que exigem conformidade com padrões chineses, o SM2 é preferível a algoritmos internacionais como RSA ou ECDSA. Sua eficiência o torna ideal para ambientes com recursos limitados: cartões inteligentes, dispositivos IoT e aplicativos móveis.',
    p3: 'Embora o SM2 esteja ganhando reconhecimento global, o RSA ainda possui suporte mais amplo. Para comparação com outro método assimétrico popular, consulte nosso',
    linkText: 'Tool de Criptografia RSA'
  },
  references: {
    title: 'Referências e Leitura Adicional',
    link1: 'Wikipedia-SM2',
    link2: 'Algoritmo SM2 de Criptografia de Chave Pública',
    link3: 'Parâmetros de Curva Recomendados para SM2'
  },
  relatedTools: {
    title: 'Ferramentas Relacionadas',
    tool1: 'Tool de Criptografia RSA',
    tool2: 'Calculadora de Hash',
    tool3: 'Ferramenta de Criptografia Simétrica',
    tool4: 'Gerador de Senhas Seguras'
  }
}
