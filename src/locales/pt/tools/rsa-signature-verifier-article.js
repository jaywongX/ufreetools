export default {
    title: "Ferramenta RSA de Assinatura/Verificação: Garantia de Integridade de Dados com Assinaturas Digitais Seguras",

    introduction: {
        title: "O que é Assinatura/Verificação RSA?",
        p1: "A assinatura/verificação RSA é um processo criptográfico que garante integridade, autenticidade e não-repúdio em comunicações digitais. Nossa ferramenta permite assinar dados com chave privada RSA e verificar assinaturas com a chave pública correspondente, oferecendo um método seguro para verificar se informações não foram alteradas durante a transmissão.",
        p2: "Em uma era onde segurança de dados é crucial, assinaturas digitais RSA tornaram-se padrão do setor para proteger documentos eletrônicos, distribuição de software e comunicações seguras. A ferramenta implementa esquemas PKCS#1 v1.5 e PSS, suportando diversos algoritmos de hash como SHA-1, SHA-256, SHA-384 e SHA-512.",
        p3: "Seja você um desenvolvedor testando implementações criptográficas, um profissional de segurança verificando assinaturas digitais ou um estudante aprendendo sobre criptografia de chave pública, nossa ferramenta oferece uma interface amigável e funcionalidades abrangentes para todas suas necessidades de assinatura digital.",
        p4: "O processo de assinatura/verificação RSA funciona criando um hash criptográfico dos dados, que é então criptografado com a chave privada do remetente. Qualquer pessoa com a chave pública correspondente pode verificar a assinatura, confirmando simultaneamente a integridade dos dados e a identidade do remetente."
    },

    useCases: {
        title: "Aplicações Comuns de Assinatura/Verificação RSA",
        case1: "Verificar autenticidade de downloads de software e atualizações, prevenindo distribuição de malware",
        case2: "Validar certificados digitais em comunicações seguras (HTTPS)",
        case3: "Garantir integridade de documentos eletrônicos e contratos em contextos legais e comerciais",
        case4: "Implementar autenticação segura de mensagens em protocolos e aplicativos"
    },

    tutorial: {
        title: "Como Usar a Ferramenta de Assinatura/Verificação RSA",
        step1: {
            title: "Passo 1: Preparar Chaves",
            description: "Antes de assinar ou verificar, você precisará de chaves RSA:",
            option1: "Gerar novo par diretamente na ferramenta clicando em \"Gerar Par de Chaves\" e selecionando o tamanho desejado (recomendado 2048 bits ou mais para segurança)",
            option2: "Importar chaves existentes em vários formatos (PEM, DER, HEX ou Base64)"
        },
        step2: {
            title: "Passo 2: Configurar Assinatura",
            description: "Selecione configurações apropriadas para sua operação:",
            option1: "Algoritmo Hash: escolha entre SHA-1, SHA-256, SHA-384 ou SHA-512 (recomendado SHA-256 ou superior)",
            option2: "Esquema de Preenchimento: selecione entre PKCS#1 v1.5 (mais comum) ou PSS (mais moderno e seguro)",
            option3: "Formato de Entrada: especifique se sua entrada é texto puro, hexadecimal ou codificado em Base64"
        },
        step3: {
            title: "Passo 3: Assinar ou Verificar Dados",
            description: "Conforme sua necessidade:",
            option1: "Assinar: insira seus dados na seção de assinatura e clique em \"Assinar Dados\" para gerar a assinatura",
            option2: "Verificar: na seção de verificação, insira os dados originais e a assinatura, depois clique em \"Verificar Assinatura\""
        },
        step4: {
            title: "Passo 4: Visualizar Resultados e Exportar",
            description: "Após assinar, você pode copiar a assinatura ou exportá-la em vários formatos (Base64, HEX, DER, PEM). Para verificação, a ferramenta indicará se a assinatura é válida ou inválida."
        },
        note: "Para usuários avançados, a ferramenta também exibe informações detalhadas de pré-processamento, incluindo hash digest e dados com preenchimento, ajudando a entender cada etapa do processo RSA."
    },

    faq: {
        title: "Perguntas Frequentes sobre Assinaturas RSA",
        q1: "Qual a diferença entre PKCS#1 v1.5 e PSS?",
        a1: "PKCS#1 v1.5 é o esquema tradicional de preenchimento para assinaturas RSA, amplamente suportado mas com vulnerabilidades teóricas conhecidas. PSS (Probabilistic Signature Scheme) é um método mais moderno com segurança comprovada e preenchimento aleatório, oferecendo maior resistência a certos ataques criptográficos. Para maioria das aplicações, ambos são seguros quando usados com algoritmos de hash fortes e tamanhos de chave adequados.",

        q2: "Qual algoritmo de hash devo usar para assinaturas RSA?",
        a2: "Para aplicações modernas, recomendamos pelo menos SHA-256 para segurança adequada. SHA-1 é considerado criptograficamente fraco e deve ser usado apenas para compatibilidade com sistemas legados. Para aplicações altamente sensíveis ou ao assinar grandes volumes de dados, SHA-384 ou SHA-512 oferecem margem adicional de segurança.",

        q3: "Qual tamanho de chave RSA é recomendado para assinaturas seguras?",
        a3: "Em 2023, o tamanho mínimo recomendado para chaves RSA é 2048 bits, com 3072 ou 4096 bits preferidos para segurança de longo prazo. Chaves menores que 2048 bits são consideradas vulneráveis a ataques de fatoração com recursos computacionais modernos. Observe que tamanhos maiores aumentam o tempo de processamento para operações de assinatura.",

        q4: "Posso processar dados pré-hashados com esta ferramenta?",
        a4: "Sim, nossa ferramenta suporta assinar e verificar dados pré-hashados. Isso é útil quando você já calculou o hash digest com outra ferramenta, ou ao processar arquivos grandes onde deseja calcular o hash separadamente. Basta selecionar a opção \"Pré-processado\" e fornecer o valor hash em formato hexadecimal.",

        q5: "É seguro usar esta ferramenta online para assinaturas sensíveis?",
        a5: "Esta ferramenta processa todos os dados diretamente no seu navegador - nenhuma informação é enviada aos nossos servidores. Porém, para operações criptográficas altamente sensíveis ou em produção, recomendamos usar hardware dedicado (como HSMs) ou bibliotecas criptográficas consolidadas em ambientes controlados.",
        a5_extra: "Para fins educacionais, testes ou aplicações não críticas, esta ferramenta oferece uma maneira conveniente e segura de trabalhar com assinaturas RSA."
    },

    resources: {
        title: "Ferramentas e Recursos Relacionados",
        description: "Aprimore seu fluxo de trabalho criptográfico com estas ferramentas complementares:",
        tool1: "Gerador de Hash - Crie hash digests com vários algoritmos",
        tool2: "Codificador/Decodificador Base64 - Converta entre dados brutos e formato Base64",
        tool3: "Depurador JWT - Ferramenta online para analisar, verificar e depurar tokens JWT",

        external: {
            title: "Recursos Externos",
            resource1: "RFC 8017 - PKCS #1: Especificações de Criptografia RSA Versão 2.2",
            resource2: "NIST FIPS 186-4 - Padrão de Assinatura Digital (DSS)"
        }
    },

    conclusion: {
        title: "Conclusão",
        p1: "Assinatura/verificação RSA continua sendo um pilar da segurança criptográfica moderna, oferecendo um mecanismo robusto para garantir integridade e autenticidade de dados. Nossa ferramenta torna esta tecnologia poderosa acessível a todos, desde iniciantes em criptografia até profissionais de segurança.",
        p2: "Seja para assinar código, verificar autenticidade de documentos ou aprender sobre criptografia de chave pública, esta ferramenta oferece um conjunto abrangente de funcionalidades para trabalhar com assinaturas RSA em um ambiente seguro baseado em navegador. Comece agora a usar a Ferramenta de Assinatura/Verificação RSA para proteger seus ativos digitais e comunicações."
    }
}
