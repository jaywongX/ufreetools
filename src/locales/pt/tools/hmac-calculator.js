export default {
    name: 'Calculadora HMAC',
    description: 'Calcula HMAC (Hash-based Message Authentication Code) para dados',
    title: 'Ferramenta de Cálculo de Código de Autenticação de Mensagem HMAC',
    intro: 'Gera códigos de autenticação de mensagem usando chaves secretas, com suporte a múltiplos algoritmos de hash e formatos de saída',
    
    input: {
      title: 'Entrada',
      message: 'Mensagem',
      messagePlaceholder: 'Digite a mensagem a ser autenticada',
      key: 'Chave',
      keyLabel: 'Chave Secreta',
      keyPlaceholder: 'Insira a chave HMAC',
      messageLabel: 'Mensagem',
      messageLongPlaceholder: 'Digite a mensagem para cálculo do HMAC',
      file: 'Arquivo',
      text: 'Texto',
      fileSelect: 'Selecionar arquivo',
      fileDrop: 'Ou arraste e solte um arquivo aqui',
      fileSelected: 'Arquivo selecionado: {name}',
      clearFile: 'Remover arquivo',
      encoding: 'Codificação da entrada',
      keyEncoding: 'Codificação da chave',
      outputFormat: 'Formato de saída',
      inputType: 'Tipo de entrada',
      utf8: 'UTF-8',
      ascii: 'ASCII',
      base64: 'Base64',
      hex: 'Hexadecimal',
      binary: 'Binário',
      calculate: 'Calcular HMAC',
      calculating: 'Calculando...',
      clear: 'Limpar tudo'
    },
    
    algorithms: {
      title: 'Algoritmos',
      label: 'Algoritmo de Hash',
      hmacMd5: 'HMAC-MD5',
      hmacSha1: 'HMAC-SHA1',
      hmacSha224: 'HMAC-SHA224',
      hmacSha256: 'HMAC-SHA256',
      hmacSha384: 'HMAC-SHA384',
      hmacSha512: 'HMAC-SHA512',
      hmacRipemd160: 'HMAC-RIPEMD160',
      hmacSm3: 'HMAC-SM3'
    },
    
    result: {
      title: 'Resultado HMAC',
      digest: 'Resumo HMAC',
      outputLabel: 'Resultado HMAC',
      copy: 'Copiar',
      copied: 'Copiado!',
      noResult: 'Digite uma mensagem e chave para calcular o HMAC',
      calculating: 'Calculando...',
      placeholder: 'O resultado HMAC será exibido aqui',
      useExample: 'Usar exemplo',
      jsExample: 'Exemplo JavaScript:'
    },
    
    validation: {
      title: 'Validação HMAC',
      hmacToVerify: 'HMAC para verificar',
      verifyPlaceholder: 'Digite o HMAC para verificação',
      verify: 'Verificar HMAC',
      valid: 'HMAC válido',
      invalid: 'HMAC inválido',
      verifying: 'Verificando...'
    },
    
    options: {
      title: 'Opções',
      uppercase: 'Saída em maiúsculas',
      showDetails: 'Mostrar detalhes técnicos',
      autoUpdate: 'Atualização automática',
      truncate: 'Truncar saída',
      truncateLength: 'Comprimento do truncamento'
    },
    
    details: {
      title: 'Detalhes Técnicos',
      algorithm: 'Algoritmo',
      keyLength: 'Tamanho da chave',
      blockSize: 'Tamanho do bloco',
      outputLength: 'Tamanho da saída',
      execution: 'Tempo de execução',
      ms: 'milissegundos'
    },
    
    messages: {
      noMessage: 'Por favor, digite uma mensagem',
      noKey: 'Por favor, digite uma chave',
      invalidEncoding: 'Formato de codificação inválido',
      processingError: 'Erro no processamento: {error}',
      success: 'Cálculo HMAC concluído com sucesso',
      invalidKey: 'Formato de chave inválido para a codificação selecionada',
      fileTooBig: 'Arquivo muito grande. Tamanho máximo: 5MB',
      copied: 'Copiado para a área de transferência',
      copyFailed: 'Falha ao copiar, copie manualmente',
      invalidHex: 'A chave não está em formato hexadecimal válido',
      invalidBase64: 'A chave não está em formato Base64 válido'
    },
    
    security: {
      title: 'Notas de Segurança',
      keyStorage: 'Nunca compartilhe sua chave secreta',
      keyStrength: 'Use chaves fortes e únicas para cada aplicação',
      recommendation: 'Para aplicações críticas de segurança, use pelo menos HMAC-SHA256',
      warning: 'HMAC-MD5 e HMAC-SHA1 podem não ser adequados para aplicações de alta segurança'
    },
    
    article: {
      title: "Calculadora HMAC: Ferramenta de Geração de Código de Autenticação de Mensagem Baseado em Hash",
      features: {
        title: "Entendendo o HMAC e sua importância",
        description: "A <strong>Calculadora HMAC</strong> é uma <strong>ferramenta criptográfica</strong> especializada projetada para gerar Códigos de Autenticação de Mensagem Baseados em Hash (HMACs), fornecendo um método para verificar a integridade e autenticidade de mensagens. Ao contrário de funções hash simples, o HMAC incorpora uma <strong>chave secreta</strong> ao processo de hash, criando um <strong>valor hash com chave</strong> que só pode ser reproduzido por quem possui a mesma chave.<br><br>Este <strong>gerador HMAC</strong> suporta vários algoritmos padrão do setor, incluindo SHA-256, SHA-512, MD5 e SM3, permitindo que os usuários escolham o nível de segurança apropriado para suas necessidades específicas. A ferramenta processa vários formatos de entrada (texto simples, hexadecimal ou Base64) e gera saída no formato de codificação de sua preferência. Nossa <strong>calculadora de código de autenticação de mensagem</strong> fornece uma interface simples e intuitiva para implementar esse mecanismo de segurança essencial, seja você um desenvolvedor testando autenticação de API ou um profissional de segurança verificando a integridade de mensagens.",
        useCases: {
          title: "Aplicações práticas do HMAC",
          items: [
            "<strong>Autenticação de API</strong>: Proteja seus endpoints de API implementando autenticação baseada em HMAC. O <strong>processo de assinatura HMAC</strong> permite que o servidor verifique se as requisições recebidas são legítimas e não foram adulteradas durante a transmissão.",
            "<strong>Verificação de integridade de dados</strong>: Garanta a integridade de dados armazenados ou arquivos transmitidos calculando <strong>somas de verificação HMAC</strong>. Isso permite detectar qualquer modificação não autorizada nos dados, fornecendo uma camada adicional de segurança além da simples verificação de hash.",
            "<strong>Validação de cookies seguros</strong>: Proteja os cookies de aplicações web contra adulteração incorporando <strong>assinaturas HMAC</strong>. Isso impede que usuários modifiquem valores de cookies e potencialmente obtenham acesso ou privilégios não autorizados.",
            "<strong>Armazenamento de senhas</strong>: Crie um sistema de verificação de senhas mais seguro usando HMAC com uma chave única para cada usuário, gerando <strong>resumos de senha com chave</strong> que oferecem melhor proteção do que funções hash padrão.",
            "<strong>Verificação de assinatura digital</strong>: Implemente um esquema simplificado de assinatura digital para autenticação e não-repúdio. O <strong>processo de autenticação HMAC</strong> fornece prova criptográfica de que uma mensagem foi criada por alguém com acesso à chave compartilhada.",
            "<strong>Verificação de transações blockchain</strong>: Use <strong>verificação criptográfica HMAC</strong> para validar a autenticidade de transações e mensagens blockchain, garantindo que apenas partes autorizadas possam criar assinaturas de transação válidas."
          ]
        }
      },
      faq: {
        title: "Perguntas frequentes sobre HMAC",
        items: [
          {
            question: "Qual a diferença entre HMAC e funções hash comuns?",
            answer: "Funções hash comuns (como SHA-256 ou MD5) apenas fornecem verificação de integridade de dados - confirmando que os dados não foram alterados. Já o HMAC (Código de Autenticação de Mensagem Baseado em Hash) combina funções hash criptográficas com uma chave secreta, fornecendo tanto integridade de dados quanto autenticação. Isso significa que o HMAC não apenas verifica se a mensagem não foi alterada, mas também confirma que foi criada por alguém com a chave correta. Esta camada adicional de segurança torna o HMAC significativamente mais resistente a vários tipos de ataques criptográficos, incluindo colisões e ataques de extensão de comprimento que podem comprometer funções hash comuns. Nossa ferramenta de cálculo HMAC implementa esta abordagem de segurança aprimorada, tornando-a adequada para aplicações que exigem verificação da autenticidade de mensagens."
          },
          {
            question: "Qual algoritmo HMAC devo escolher para minha aplicação?",
            answer: "Para a maioria das aplicações de segurança modernas, o HMAC-SHA256 é a escolha padrão recomendada, pois oferece um bom equilíbrio entre segurança e desempenho. Para aplicações com requisitos de segurança mais rigorosos ou necessidades de segurança de longo prazo, considere HMAC-SHA384 ou HMAC-SHA512, que oferecem maior resistência a possíveis ataques futuros às custas de um desempenho ligeiramente inferior. Evite usar HMAC-MD5 e HMAC-SHA1 em novas aplicações, pois esses algoritmos hash subjacentes têm vulnerabilidades conhecidas. Para aplicações no mercado chinês que precisam estar em conformidade com padrões locais, o HMAC-SM3 pode ser usado. O fator mais importante é escolher um algoritmo que atenda aos seus requisitos específicos de segurança, considerando também compatibilidade com outros sistemas e restrições de desempenho."
          },
          {
            question: "É seguro usar esta calculadora HMAC online com dados sensíveis?",
            answer: "Nossa calculadora HMAC usa JavaScript para executar todas as operações criptográficas diretamente no seu navegador, o que significa que seus dados sensíveis e chaves nunca deixam seu dispositivo ou são transmitidos para nossos servidores. Embora isso forneça um nível básico de segurança, ainda recomendamos usar principalmente este gerador HMAC online para testes, aprendizado e aplicações não críticas. Para ambientes de produção ou dados altamente sensíveis, recomendamos implementar a funcionalidade HMAC diretamente no código do aplicativo usando bibliotecas criptográficas estabelecidas, onde você tem controle total sobre o gerenciamento de chaves e o processamento de dados. Se você precisar usar esta calculadora com informações sensíveis, considere desconectar-se da internet enquanto usa a ferramenta e limpar o histórico do navegador depois."
          },
          {
            question: "Como gerenciar as chaves usadas para HMAC?",
            answer: "O gerenciamento adequado de chaves é crucial para a segurança do HMAC. Primeiro, gere chaves fortes e aleatórias com comprimento suficiente (pelo menos 32 bytes/256 bits para HMAC-SHA256). Armazene essas chaves com segurança, usando sistemas dedicados de gerenciamento de chaves ou cofres seguros em ambientes de produção. Nunca codifique chaves diretamente no código-fonte ou arquivos de configuração. Implemente uma estratégia de rotação de chaves para substituí-las periodicamente e estabeleça chaves separadas para diferentes aplicações ou ambientes. Ao transmitir chaves, sempre use canais seguros com criptografia apropriada. Lembre-se de que a segurança da implementação do HMAC depende diretamente das práticas de gerenciamento de chaves - mesmo os algoritmos mais seguros podem ser comprometidos se as chaves não forem manipuladas corretamente."
          },
          {
            question: "Como usar os resultados HMAC em meu projeto de programação?",
            answer: "A maioria das linguagens de programação e frameworks oferecem suporte nativo para cálculo HMAC. Depois de verificar os resultados esperados com nossa calculadora HMAC, você pode implementar a mesma funcionalidade em seu código. Para JavaScript/Node.js, use a função createHmac do módulo crypto. Em Python, utilize o módulo hmac. Desenvolvedores Java podem usar a classe Mac do pacote javax.crypto. O PHP fornece a função hash_hmac. Nossa ferramenta fornece exemplos de código mostrando como reproduzir o mesmo resultado HMAC em JavaScript. Ao implementar autenticação HMAC, você normalmente calculará o HMAC de uma mensagem usando uma chave compartilhada tanto no remetente quanto no receptor, e então comparará os resultados para verificar a autenticidade. Os detalhes específicos da implementação dependerão das necessidades da sua aplicação e da linguagem de programação utilizada."
          }
        ]
      },
      guide: {
        title: "Guia passo a passo para usar a Calculadora HMAC",
        steps: [
          "<strong>Selecione o algoritmo de hash</strong>: Escolha o <strong>algoritmo HMAC</strong> apropriado para suas necessidades de segurança. Clique em uma das opções disponíveis (SHA-256, SHA-1, SHA-384, SHA-512, MD5 ou SM3). Para a maioria das aplicações, o SHA-256 é recomendado por oferecer um bom equilíbrio entre segurança e desempenho.",
          "<strong>Insira sua chave</strong>: Digite a <strong>chave secreta</strong> no campo designado. Selecione o formato de codificação de entrada apropriado (texto, hexadecimal ou Base64) no menu suspenso, de acordo com o formato da sua chave. Para aplicações de segurança, use chaves aleatórias fortes com comprimento suficiente.",
          "<strong>Forneça a mensagem</strong>: Digite a mensagem que deseja autenticar na área de entrada de mensagem. Assim como com a chave, selecione o formato de codificação que corresponde ao formato da sua mensagem (texto, hexadecimal ou Base64). A mensagem pode ser qualquer dado que você queira verificar posteriormente.",
          "<strong>Selecione o formato de saída</strong>: Escolha seu formato de saída preferido para o <strong>resumo HMAC</strong>. As opções incluem hexadecimal (o mais comum), Base64 (mais compacto), Base64URL (para uso na web) ou binário. Isso determina como o valor hash final será representado.",
          "<strong>Gere o HMAC</strong>: Clique no botão 'Calcular HMAC' para processar suas entradas e gerar o <strong>código de autenticação de mensagem</strong>. O sistema criará um valor hash único usando o algoritmo selecionado em combinação com sua chave e mensagem.",
          "<strong>Copie seu resultado</strong>: Após o cálculo, a área de resultados exibirá o <strong>resumo HMAC</strong>. Use o botão copiar para levar esse valor para a área de transferência, para uso em sua aplicação.",
          "<strong>Implemente no código</strong>: Consulte o exemplo JavaScript fornecido abaixo do resultado para ver como reproduzir o mesmo <strong>cálculo HMAC</strong> em seu próprio código. Este exemplo mostra o código exato necessário para reproduzir programaticamente o mesmo resultado."
        ]
      },
      conclusion: "A Calculadora HMAC é uma ferramenta essencial para desenvolvedores e profissionais de segurança que buscam implementar verificações robustas de autenticação e integridade de dados em seus sistemas. Ao fornecer uma interface intuitiva para gerar esses códigos criptográficos, ela simplifica o processo de testar e implementar medidas de segurança baseadas em HMAC. Seja protegendo comunicações de API, verificando integridade de dados ou implementando sistemas de autenticação, entender e aplicar corretamente o HMAC é crucial para manter práticas de segurança robustas. À medida que as ameaças digitais continuam a evoluir, o uso de tecnologias apropriadas de autenticação de mensagens, como o HMAC, permanece um componente fundamental da arquitetura de segurança moderna, ajudando a garantir que as comunicações sejam tanto privadas quanto verificáveis quanto à autenticidade."
    }
  }