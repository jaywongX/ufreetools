export default {
  title: "Algoritmos de Criptografia Simétrica: Ferramenta Completa para Segurança de Dados",
  features: {
    title: "Funcionalidades da Criptografia Simétrica",
    description: "Esta <strong>ferramenta de criptografia</strong> implementa algoritmos simétricos padrão para proteção de dados sensíveis. Diferente da criptografia assimétrica que usa pares de chaves, a <strong>criptografia simétrica</strong> utiliza uma única chave secreta para ambos processos de cifragem e decifragem. O sistema suporta múltiplos algoritmos incluindo <strong>AES</strong> (padrão atual), <strong>DES</strong> (legado), <strong>3DES</strong> (versão reforçada) e <strong>SM4</strong> (padrão chinês).<br><br>Principais recursos incluem processamento de texto e arquivos, com configurações flexíveis como <strong>modos de operação</strong> (CBC, ECB, CFB, OFB, CTR), <strong>esquemas de preenchimento</strong> e suporte a múltiplos formatos de entrada/saída. Esta <strong>solução de criptografia</strong> oferece interface intuitiva que torna técnicas avançadas acessíveis sem exigir conhecimento profundo em criptografia, mantendo altos padrões de segurança.",
    useCases: {
      title: "Cenários Práticos de Aplicação",
      items: [
        "<strong>Compartilhamento seguro de arquivos</strong>: Proteja documentos, planilhas e mídias antes de enviar por canais potencialmente inseguros. O destinatário com a chave correta pode descriptografar e acessar o conteúdo original, garantindo confidencialidade na transmissão.",
        "<strong>Armazenamento de credenciais</strong>: Crie repositórios criptografados para senhas e informações de autenticação. Ao usar uma senha mestra para cifrar esses dados sensíveis, você mantém uma coleção segura de credenciais enquanto memoriza apenas uma chave forte.",
        "<strong>Autenticação em APIs</strong>: Gere e valide tokens criptografados para sistemas de autenticação. A criptografia simétrica oferece equilíbrio ideal entre segurança e desempenho para tokens em aplicações web e serviços.",
        "<strong>Criptografia de campos em bancos de dados</strong>: Proteja informações sensíveis em bancos de dados sem reconstruir todo o sistema. <strong>Algoritmos simétricos</strong> permitem cifrar seletivamente dados críticos como identificadores pessoais, informações financeiras ou dados privados de usuários.",
        "<strong>Segurança em configurações</strong>: Criptografe arquivos de configuração contendo credenciais sensíveis como senhas de banco de dados, chaves de API e tokens de serviço. Isso previne exposição acidental mesmo se os arquivos forem comprometidos.",
        "<strong>Canais de comunicação seguros</strong>: Estabeleça comunicação ponto-a-ponto criptografada gerando chaves simétricas por sessão. Essa abordagem permite troca de mensagens segura em tempo real mantendo desempenho adequado mesmo em aplicações com limitações de banda."
      ]
    }
  },
  faq: {
    title: "Perguntas Frequentes sobre Criptografia Simétrica",
    items: [
      {
        question: "Quais as diferenças entre AES, DES, 3DES e SM4?",
        answer: "Estes são diferentes <strong>algoritmos simétricos</strong> com níveis de segurança e características distintas. <strong>AES</strong> (Padrão Avançado) é o padrão global atual, oferecendo excelente segurança e desempenho com chaves de 128, 192 ou 256 bits. <strong>DES</strong> (Padrão de Criptografia de Dados) é um algoritmo antigo usando chave de 56 bits, agora considerado inseguro para aplicações críticas. <strong>3DES</strong> aplica o DES três vezes com chaves diferentes para maior segurança, porém com menor desempenho. <strong>SM4</strong> é um padrão chinês com chave de 128 bits, projetado como alternativa ao AES com segurança comparável. Para maioria das aplicações modernas, AES é recomendado por oferecer o melhor equilíbrio entre segurança e eficiência."
      },
      {
        question: "Qual modo de operação devo escolher?",
        answer: "O <strong>modo de operação</strong> determina como o algoritmo processa blocos de dados. <strong>ECB</strong> é o mais simples mas menos seguro, cifrando blocos idênticos de forma idêntica. <strong>CBC</strong> aumenta segurança fazendo cada bloco depender do anterior, requerendo vetor de inicialização (IV). <strong>CFB</strong>, <strong>OFB</strong> e <strong>CTR</strong> convertem cifras de bloco em fluxo com características distintas. Para dados sensíveis, CBC com IV aleatório oferece bom equilíbrio. CTR permite paralelização e evita necessidade de preenchimento. Sistemas modernos frequentemente preferem modos autenticados como GCM (não disponível nesta ferramenta) que combinam confidencialidade e integridade."
      },
      {
        question: "Esta ferramenta online é segura para dados sensíveis?",
        answer: "Este <strong>criptografador baseado em navegador</strong> processa todos dados localmente sem enviar informações a servidores externos, provendo nível básico de confidencialidade. Porém, para informações altamente sensíveis, considere: 1) Implementações JavaScript podem não oferecer mesmas garantias de segurança que soluções nativas auditadas; 2) Ambientes de navegador estão sujeitos a ameaças como extensões maliciosas; 3) Gerenciamento de chaves permanece crítico - chaves perdidas tornam dados irrecuperáveis. Para sistemas críticos, recomenda-se software dedicado com práticas adequadas de gerenciamento de chaves. Esta ferramenta é mais adequada para fins educacionais, uso ocasional ou proteção de dados de sensibilidade moderada."
      },
      {
        question: "Como compartilhar chaves de forma segura?",
        answer: "O <strong>gerenciamento seguro de chaves</strong> é essencial para manter a segurança criptográfica. Nunca compartilhe chaves pelos mesmos canais usados para dados cifrados. Em vez disso: 1) Use canais separados e seguros para troca de chaves; 2) Considere dividir a chave em partes enviadas por diferentes meios; 3) Prefira protocolos seguros de troca de chaves; 4) Para comunicação contínua, use criptografia assimétrica para negociar chaves simétricas; 5) Implemente rotatividade de chaves para segurança prolongada; 6) Armazene chaves com segurança, preferencialmente em sistemas dedicados de gerenciamento; 7) Para máxima segurança, considere módulos de hardware (HSM) ou serviços especializados. Lembre-se que a segurança dos dados cifrados depende diretamente das práticas de gerenciamento de chaves."
      },
      {
        question: "Como garantir integridade dos dados criptografados?",
        answer: "A <strong>criptografia simétrica</strong> padrão fornece confidencialidade mas não garante integridade. Para verificar se dados cifrados não foram alterados: 1) Prefira modos autenticados como AES-GCM quando disponíveis; 2) Implemente verificações adicionais calculando hashes criptográficos (ex: SHA-256) ou HMAC dos dados cifrados; 3) Para aplicações críticas, considere assinaturas digitais além da criptografia; 4) Sempre verifique estrutura e tamanho do texto cifrado antes de decifrar; 5) Inclua metadados de versão no esquema para prevenir ataques de downgrade. Estas medidas ajudam a assegurar tanto confidencialidade quanto integridade em ambientes potencialmente inseguros."
      }
    ]
  },
  guide: {
    title: "Guia Passo a Passo para Uso da Ferramenta",
    steps: [
      "<strong>Selecione algoritmo</strong>: Escolha entre AES (recomendado), DES, 3DES ou SM4 conforme requisitos de segurança e compatibilidade. AES oferece melhor equilíbrio para aplicações modernas.",
      "<strong>Escolha modo de operação</strong>: Selecione entre ECB, CBC, CFB, OFB ou CTR. Para segurança geral, CBC com IV aleatório é recomendado.",
      "<strong>Configure preenchimento</strong>: Para modos que requerem (CBC/ECB), escolha entre PKCS7 (padrão) ou preenchimento com zeros. Isso define como blocos incompletos são tratados.",
      "<strong>Insira ou gere chave</strong>: Digite chave personalizada ou use gerador para criar chave criptograficamente forte. Para AES, tamanhos são 16, 24 ou 32 bytes conforme segurança desejada.",
      "<strong>Forneça IV quando necessário</strong>: Para modos além de ECB, gere IV aleatório ou insira manualmente. IVs devem ser únicos por operação mas não necessariamente secretos.",
      "<strong>Insira dados</strong>: Digite ou cole texto para cifrar. Para descriptografar, forneça texto cifrado no formato original (geralmente HEX ou Base64).",
      "<strong>Processe e use resultados</strong>: Clique em 'Criptografar' ou 'Descriptografar'. Armazene chaves e IVs com segurança pois são necessários para decifragem. Use botão copiar para transferir resultados facilmente."
    ]
  },
  conclusion: "Esta ferramenta de criptografia simétrica oferece maneira poderosa e acessível de proteger informações sensíveis usando algoritmos padrão. Ao seguir boas práticas e entender as opções disponíveis, você pode implementar criptografia robusta para diversas aplicações, desde proteção de arquivos pessoais até sistemas de segurança mais complexos. Embora a conveniência da solução baseada em navegador seja valiosa para muitas necessidades, aplicações críticas podem requerer soluções dedicadas com infraestrutura adequada de gerenciamento de chaves. Seja para adicionar privacidade a dados pessoais ou explorar conceitos criptográficos, esta ferramenta proporciona introdução prática a técnicas fundamentais de segurança digital."
}
