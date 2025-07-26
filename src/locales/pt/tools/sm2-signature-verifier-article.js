export default {
    title: "Ferramenta SM2 - Geração e Verificação Segura de Assinaturas Digitais",
    introduction: {
        title: "O que são Assinaturas Digitais SM2?",
        p1: "Assinaturas SM2 fazem parte do padrão criptográfico chinês. Nossa <strong>ferramenta SM2</strong> oferece interface amigável para criar/verificar assinaturas usando curvas elípticas, proporcionando segurança equivalente a RSA 256-bit com chaves menores.",
        p2: "Este <strong>verificador de assinatura SM2 online</strong> permite assinar e validar dados sem instalar software especializado, ideal para desenvolvedores, profissionais de segurança e empresas que precisam cumprir regulamentações chinesas.",
        p3: "Com a crescente adoção global do padrão SM2, especialmente em operações com a China, ter um <strong>gerador de assinaturas SM2</strong> confiável tornou-se essencial para negócios internacionais."
    },
    applications: {
        title: "Aplicações Práticas",
        p1: "Assinaturas SM2 são usadas em diversos setores onde integridade e autenticação são críticas:",
        scenario1: {
            title: "Fintech e Bancos",
            description: "Instituições financeiras usam <strong>verificação SM2</strong> para proteger transações e manter conformidade com regulamentos chineses, autenticando solicitações e comunicações seguras."
        },
        scenario2: {
            title: "Governo",
            description: "Órgãos governamentais implementam <strong>assinaturas digitais SM2</strong> para validar documentos eletrônicos, comunicações oficiais e registros legais, especialmente em interações com entidades chinesas."
        },
        scenario3: {
            title: "Comércio Internacional",
            description: "Empresas em <strong>comércio transfronteiriço</strong> utilizam assinaturas SM2 para proteger contratos, verificar remessas e autenticar documentos aduaneiros, facilitando operações seguras com a China."
        }
    },
    tutorial: {
        title: "Como Usar a Ferramenta SM2",
        intro: "Guia passo a passo para assinar e verificar dados:",
        step1: {
            title: "Passo 1: Gerenciamento de Chaves",
            description: "Insira sua chave privada SM2 (para assinar) e pública (para verificar). Gere novos pares diretamente ou importe em formatos como PEM, HEX ou Base64. Todas as operações são realizadas localmente no navegador."
        },
        step2: {
            title: "Passo 2: Configurar ID",
            description: "Defina o parâmetro ID usado no algoritmo SM2. O valor padrão é '1234567812345678', mas pode ser personalizado em texto, HEX ou Base64 conforme necessário."
        },
        step3: {
            title: "Passo 3: Criar Assinatura",
            description: "Insira os dados a serem assinados (em texto, HEX ou Base64), clique em 'Assinar' e escolha o formato de saída (DER, HEX, Base64 ou PEM). Copie ou exporte a assinatura gerada."
        },
        step4: {
            title: "Passo 4: Verificar Assinatura",
            description: "Para verificar, insira os dados originais e a assinatura nos formatos corretos. A ferramenta validará automaticamente a autenticidade, indicando sucesso ou falha com detalhes para diagnóstico."
        }
    },
    specifications: {
        title: "Especificações Técnicas",
        p1: "A ferramenta implementa o padrão SM2 (GM/T 0003-2012) da Administração de Criptografia da China, com recursos adicionais para facilidade de uso:",
        p2: "Principais características:",
        feature1: "Uso obrigatório do algoritmo SM3 para hash (256-bit)",
        feature2: "Suporte a parâmetro ID personalizável (texto/HEX/Base64)",
        feature3: "Múltiplos formatos de saída (DER/HEX/Base64/PEM)",
        feature4: "Exibição detalhada dos componentes R e S",
        feature5: "Compatibilidade com vários formatos de chave",
        feature6: "Relatórios de erro detalhados para solução de problemas"
    },
    faq: {
        title: "Perguntas Frequentes",
        q1: "Como SM2 difere de outros algoritmos?",
        a1: "<strong>Assinaturas SM2</strong> baseiam-se em criptografia de curva elíptica (ECC), padrão chinês. Comparado ao RSA, oferece segurança equivalente com chaves menores e inclui ID do signatário no processo, adicionando camada extra de autenticação. Essencial para conformidade com regulamentos chineses.",

        q2: "A ferramenta é segura para dados sensíveis?",
        a2: "Sim, nosso <strong>verificador SM2</strong> executa todas as operações localmente no seu navegador. Chaves privadas e dados sensíveis nunca são transmitidos para nossos servidores. A implementação segue rigorosamente o padrão GM/T 0003-2012 usando SM3 para hash.",

        q3: "Por que o parâmetro ID é importante?",
        a3: "O ID é característica única do <strong>algoritmo SM2</strong>, vinculando a identidade do signatário à assinatura para prevenir certos ataques. Embora um valor padrão seja fornecido, organizações frequentemente usam IDs personalizados para maior rastreabilidade e segurança.",

        q4: "Posso usar SM2 fora da China?",
        a4: "Absolutamente. Embora originado na China, o <strong>padrão SM2</strong> ganha adoção global, especialmente entre empresas com operações chinesas. Nossa ferramenta facilita operações transfronteiriças com suporte a múltiplos formatos compatíveis internacionalmente.",

        q5: "E se a verificação falhar?",
        a5: "Para <strong>erros de verificação SM2</strong>, verifique: 1) Chave pública corresponde à privada usada; 2) Parâmetro ID coincide com o original; 3) Dados são idênticos aos assinados; 4) Formato da assinatura está correto. Mensagens de erro detalhadas auxiliam no diagnóstico."
    },
    related: {
        title: "Ferramentas Relacionadas",
        description: "Complemente seu conjunto de segurança com:",
        tool1: "<a href='https://www.ufreetools.com/tool/rsa-signature-verifier' target='_blank'>Verificador RSA</a> - Para assinaturas usando o padrão RSA",
        tool2: "<a href='https://www.ufreetools.com/tool/hash-calculator' target='_blank'>Calculadora Hash</a> - Gere hashes com SM3 e outros algoritmos",
        tool3: "<a href='https://www.ufreetools.com/tool/x509-certificate-decoder' target='_blank'>Decodificador de Certificados</a> - Analise certificados X.509 com SM2"
    }
}
