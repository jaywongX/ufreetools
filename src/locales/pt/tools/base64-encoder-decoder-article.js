export default {
  title: "Codificador/Decodificador Base64: Converta e proteja seus dados",
  features: {
    title: "Entenda a codificação e decodificação Base64",
    description: "O <strong>Codificador/Decodificador Base64</strong> é uma ferramenta essencial para conversão entre dados binários e formato ASCII. Este <strong>utilitário de codificação</strong> transforma qualquer informação binária em representação de texto usando apenas 64 caracteres imprimíveis (A-Z, a-z, 0-9, +, /), ideal para transmissão através de sistemas baseados em texto.<br><br>Nossa <strong>ferramenta de conversão Base64</strong> suporta múltiplos métodos de entrada incluindo texto, arquivos e hexadecimal, com opções avançadas de codificação (UTF-8 e GBK). Durante a <strong>decodificação Base64</strong>, a ferramenta detecta automaticamente tipos de arquivo como imagens, documentos e compactados, oferece pré-visualização para imagens e suporte a download em múltiplos formatos. Para arquivos grandes, nosso <strong>codificador Base64</strong> implementa processamento eficiente em blocos com visualização de progresso em tempo real.",
    useCases: {
      title: "Casos de uso comuns para codificação Base64",
      items: [
        "Incorporação de imagens e outros binários diretamente em código HTML, CSS ou JavaScript via Data URI, criando páginas autossuficientes",
        "Transmissão segura de dados binários via e-mail ou protocolos de texto, evitando corrupção por caracteres não-texto",
        "Armazenamento de estruturas complexas em cookies, localStorage ou outros mecanismos web que só aceitam texto",
        "Codificação de credenciais de autenticação ou tokens API para transmissão segura em cabeçalhos HTTP (autenticação básica)",
        "Conversão de anexos binários para inclusão em XML, JSON ou outros formatos de troca de dados baseados em texto",
        "Criação de strings seguras para parâmetros URL, evitando caracteres especiais que exigiriam codificação"
      ]
    }
  },
  faq: {
    title: "Perguntas frequentes sobre codificação Base64",
    items: [
      {
        question: "Por que dados codificados em Base64 são maiores que os originais?",
        answer: "A codificação Base64 aumenta o tamanho dos dados em ~33%, pois usa 4 bytes de texto ASCII para representar cada 3 bytes de dados binários. Esta é uma característica fundamental, já que cada caractere usa apenas 6 bits (2^6 = 64 valores possíveis) em vez de 8. Esse aumento é a compensação inevitável para compatibilidade entre sistemas, especialmente os que só suportam ASCII. Para arquivos grandes, considere esse aumento ao planejar armazenamento ou transmissão."
      },
      {
        question: "Qual a diferença entre Base64 padrão e seguro para URL?",
        answer: "O Base64 padrão usa '+' e '/', caracteres com significado especial em URLs que podem causar problemas em parâmetros. O Base64 seguro substitui esses caracteres por '-' e '_', permitindo uso seguro em URLs sem escape adicional. Nosso codificador inclui a opção de saída segura para URL, permitindo escolher o formato adequado ao uso pretendido."
      },
      {
        question: "Base64 pode ser usado para criptografia ou segurança?",
        answer: "Não, Base64 não é criptografia e não oferece segurança ou confidencialidade. É apenas um esquema de codificação que pode ser facilmente revertido com ferramentas amplamente disponíveis (incluindo nosso decodificador). Para confidencialidade, use algoritmos de criptografia (AES, RSA) antes da codificação Base64. Base64 serve para compatibilidade, não segurança."
      },
      {
        question: "Como identificar texto codificado em Base64?",
        answer: "Textos Base64 geralmente têm estas características: contém apenas letras (A-Z, a-z), números (0-9) e normalmente '+' e '/' (ou '-' e '_' na versão segura); o comprimento é sempre múltiplo de 4 (às vezes com preenchimento '=' no final); parece uma string aleatória sem padrões de palavras naturais. Nosso decodificador inclui validação para verificar se a entrada é Base64 válida antes da decodificação."
      },
      {
        question: "O que acontece se minha string Base64 não tiver caracteres de preenchimento?",
        answer: "O padrão Base64 exige preenchimento com '=' para garantir que o comprimento seja múltiplo de 4, mas muitos decodificadores modernos (incluindo o nosso) conseguem lidar com strings sem preenchimento, calculando-o automaticamente. Porém, para máxima compatibilidade, recomenda-se incluir o preenchimento adequado ao gerar dados codificados."
      }
    ]
  },
  guide: {
    title: "Guia passo a passo para usar o Codificador/Decodificador Base64",
    steps: [
      "Selecione o modo desejado clicando em 'Codificar' ou 'Decodificar' no topo da interface",
      "Para codificar, escolha o método de entrada: 'Texto' para entrada direta, 'Arquivo' para envio de binários ou 'Hex' para representação hexadecimal",
      "Ao codificar arquivos, marque 'Adicionar cabeçalho Base64 para imagens' para incluir o prefixo Data URI, facilitando uso direto em ambientes web",
      "Para decodificar, selecione 'Texto' para strings Base64 ou 'Arquivo' para envio de arquivos contendo dados Base64",
      "Na decodificação, escolha a codificação de caracteres (UTF-8 ou GBK) no menu para processar corretamente caracteres internacionais",
      "Insira os dados ou envie o arquivo conforme o método selecionado",
      "Clique em 'Codificar' ou 'Decodificar' para processar - o resultado será exibido no campo de saída",
      "Para imagens decodificadas, use a opção 'Mostrar imagem' para pré-visualizar ou 'Baixar' para salvar no formato desejado"
    ]
  },
  conclusion: "O Codificador/Decodificador Base64 é uma ferramenta versátil para diversos cenários que exigem transferência de dados entre sistemas baseados em texto. Seja você um desenvolvedor web incorporando imagens em CSS, um engenheiro transmitindo binários via protocolos de texto, ou apenas precisando decodificar uma string Base64, esta ferramenta oferece uma solução eficiente com opções avançadas para necessidades específicas. Com suporte a múltiplos métodos de entrada, codificações e formatos, nosso utilitário Base64 ajuda a conectar sistemas binários e baseados em texto no diversificado ecossistema computacional atual."
}
