export default {
    title: 'Gerador de Endereços MAC: Gerar Endereços MAC Aleatórios e Identificadores de Dispositivos de Rede Online',
    functionTitle: 'Como o Gerador de Endereços MAC pode ajudá-lo a gerar rapidamente identificadores válidos de dispositivos de rede?',

    useCasesTitle: 'Casos de Uso Típicos do Gerador de Endereços MAC',
    useCase1: '<strong>Teste de Dispositivos de Rede:</strong> O gerador de endereços MAC fornece aos engenheiros de rede e desenvolvedores uma grande quantidade de endereços MAC em conformidade com o IEEE para testes de configuração e verificação funcional de dispositivos de rede como roteadores, switches e firewalls.',
    useCase2: '<strong>Desenvolvimento e Depuração de Software:</strong> O gerador de endereços MAC pode gerar em lote dados estruturados de endereços MAC para testes e depuração no desenvolvimento de aplicações de rede, projetos IoT e simulação de dispositivos Bluetooth.',
    useCase3: '<strong>Simulação de Dispositivos IoT:</strong> O gerador de endereços MAC ajuda desenvolvedores a criar identificadores de dispositivos virtuais para gerenciamento de dispositivos e testes de comunicação em projetos de casas inteligentes, IoT industrial e veículos conectados.',
    useCase4: '<strong>Testes e Pesquisa de Segurança:</strong> O gerador de endereços MAC fornece endereços MAC anonimizados para pesquisadores de segurança usarem em testes de segurança de rede, testes de penetração e pesquisa de bypass de filtragem MAC.',
    useCase5: '<strong>Educação e Treinamento:</strong> O gerador de endereços MAC gera endereços MAC em formato padrão para ajudar professores e estudantes a entender a estrutura de endereços de camada de rede, regras de alocação OUI e diferenciação unicast vs multicast.',
    useCase6: '<strong>Preenchimento de Banco de Dados:</strong> O gerador de endereços MAC cria dados de endereços MAC em conformidade com padrões do mundo real para bancos de dados de desenvolvimento e teste de sistemas de gerenciamento de rede, plataformas de monitoramento de dispositivos e sistemas de gerenciamento de ativos.',

    tipTitle: 'Dicas de Uso Profissional',
    tipContent: 'Ao usar o gerador de endereços MAC, recomenda-se escolher formatos e prefixos de fabricantes apropriados com base nas necessidades reais. Para cenários que requerem simulação de dispositivos reais, selecione prefixos OUI de fabricantes específicos. Para cenários de testes de segurança, use endereços administrados localmente (LAA) para evitar conflitos com dispositivos reais.',

    conclusion: '<p>Seja para engenharia de rede, desenvolvimento de software ou pesquisa de segurança, o <strong>Gerador de Endereços MAC</strong> fornece endereços MAC de alta qualidade em conformidade com os padrões IEEE. O gerador de endereços MAC suporta múltiplos formatos de saída incluindo formatos separados por dois pontos, hífen e ponto, enquanto oferece seleção de prefixo OUI do fabricante para tornar os endereços gerados mais realistas. Todo o processamento é feito localmente no navegador, garantindo que não haja risco de vazamento de dados.</p>',

    faqTitle: 'Perguntas Frequentes sobre o Gerador de Endereços MAC',
    faq1Question: 'Os endereços gerados pelo gerador de endereços MAC são reais e válidos?',
    faq1Answer: 'Os endereços MAC gerados pelo gerador de endereços MAC estão totalmente em conformidade com o formato padrão IEEE 802, garantindo a validade do endereço através de configurações de bits apropriadas. No entanto, esses são endereços virtuais gerados aleatoriamente não associados a nenhum dispositivo de rede real. O gerador de endereços MAC destina-se apenas a fins de teste e desenvolvimento, não para uso como identificadores de dispositivos reais em ambientes de produção.',

    faq2Question: 'O que é um prefixo OUI? Como usar a função de prefixo de fabricante?',
    faq2Answer: 'OUI (Organizationally Unique Identifier) são os primeiros 3 bytes de um endereço MAC, atribuídos pelo IEEE aos fabricantes de dispositivos de rede. O gerador de endereços MAC fornece prefixos OUI para fabricantes comuns. Ao selecionar um fabricante específico, os endereços MAC gerados usarão o OUI desse fabricante, fazendo com que os endereços pareçam mais como dispositivos reais. Você também pode inserir um prefixo OUI personalizado.',

    faq3Question: 'Quais formatos de saída o gerador de endereços MAC suporta?',
    faq3Answer: 'O gerador de endereços MAC suporta múltiplos formatos comuns: formato separado por dois pontos (XX:XX:XX:XX:XX:XX) para sistemas Linux/Unix, formato separado por hífen (XX-XX-XX-XX-XX-XX) para sistemas Windows, formato separado por ponto (XXXX.XXXX.XXXX) para dispositivos Cisco, e formato sem separador (XXXXXXXXXXXX) para alguns sistemas embarcados.',

    faq4Question: 'Qual é a diferença entre endereços unicast e multicast?',
    faq4Answer: 'O bit menos significativo do primeiro byte de um endereço MAC determina o tipo de endereço. Um endereço unicast tem esse bit definido como 0, usado para comunicação ponto a ponto para identificar um dispositivo de rede específico. Um endereço multicast tem esse bit definido como 1, usado para comunicação em grupo para identificar um grupo de dispositivos de rede. O gerador de endereços MAC suporta a geração de ambos os tipos.',

    faq5Question: 'Qual é a diferença entre endereços globalmente únicos (UAA) e endereços administrados localmente (LAA)?',
    faq5Answer: 'Endereços globalmente únicos (UAA, Universally Administered Address) são atribuídos por fabricantes de dispositivos, com o segundo bit menos significativo do primeiro byte definido como 0. Endereços administrados localmente (LAA, Locally Administered Address) são atribuídos por administradores de rede, com esse bit definido como 1. O gerador de endereços MAC suporta ambos os tipos, com LAA comumente usado em máquinas virtuais e ambientes de teste.',

    tutorialTitle: 'Guia de Uso do Gerador de Endereços MAC',
    step1Title: 'Passo 1: Selecionar Formato do Endereço MAC',
    step1Description: 'No gerador de endereços MAC, primeiro selecione o formato de saída. O formato separado por dois pontos é adequado para a maioria dos sistemas Linux/Unix, formato separado por hífen para sistemas Windows, e formato separado por ponto para dispositivos de rede Cisco. Você também pode escolher saída em maiúsculas ou minúsculas.',
    step1Note: 'Diferentes sistemas e dispositivos podem exigir diferentes formatos; por favor, escolha o formato apropriado com base no seu caso de uso.',

    step2Title: 'Passo 2: Selecionar Tipo de Endereço',
    step2Description: 'No gerador de endereços MAC, selecione o tipo de endereço: endereços unicast para identificar dispositivos individuais, endereços multicast para identificar grupos de dispositivos; endereços globalmente únicos (UAA) simulam dispositivos reais, endereços administrados localmente (LAA) para ambientes virtuais. Escolha a combinação apropriada com base nas necessidades de teste.',
    step2Note: 'A maioria dos cenários de teste usa combinação unicast + endereço globalmente único; ambientes de máquinas virtuais geralmente usam combinação unicast + endereço administrado localmente.',

    step3Title: 'Passo 3: Selecionar Prefixo do Fabricante (Opcional)',
    step3Description: 'O gerador de endereços MAC fornece prefixos OUI para fabricantes comuns de dispositivos de rede como Apple, Cisco, Intel, Huawei, etc. Ao selecionar um fabricante específico, os endereços MAC gerados usarão o prefixo OUI real desse fabricante, tornando os dados de teste mais realistas. Você também pode inserir um prefixo OUI personalizado.',
    step3Note: 'Se você não precisa simular dispositivos de fabricantes específicos, selecione "Fabricante Aleatório" para gerar endereços MAC completamente aleatórios.',

    step4Title: 'Passo 4: Definir Quantidade de Geração',
    step4Description: 'No gerador de endereços MAC, insira o número de endereços MAC a serem gerados (1-1000), depois clique no botão "Gerar Endereço". O sistema gerará rapidamente todos os endereços localmente no navegador sem esperar resposta do servidor.',
    step4Note: 'Ao gerar grandes quantidades em lote, primeiro teste uma pequena quantidade para confirmar se o formato e tipo atendem aos seus requisitos.',

    step5Title: 'Passo 5: Visualizar e Verificar Resultados',
    step5Description: 'Após a conclusão da geração, o gerador de endereços MAC exibe todos os endereços gerados na área de saída. Você pode expandir cada registro para ver informações detalhadas incluindo nome do fabricante, tipo de endereço, formato, etc. Verifique se o formato e tipo de endereço atendem aos seus requisitos.',
    step5Note: 'Todos os endereços gerados pelo gerador de endereços MAC estão em conformidade com os padrões IEEE 802 e podem ser usados diretamente para teste e desenvolvimento.',

    step6Title: 'Passo 6: Exportar Dados',
    step6Description: 'Após confirmar que os dados estão corretos, selecione o formato de exportação no gerador de endereços MAC: JSON para processamento de programa, CSV para análise de planilha. Você também pode copiar endereços individuais ou todos os endereços para a área de transferência para colar em outras aplicações.',
    step6Note: 'Os arquivos exportados contêm todos os campos gerados para facilitar o processamento posterior de dados e importação em lote.',

    successTitle: 'Geração Concluída!',
    successContent: 'Parabéns, você dominou com sucesso o gerador de endereços MAC! Agora você pode gerar rapidamente endereços MAC em conformidade com o IEEE para teste de dispositivos de rede, desenvolvimento de software, simulação IoT e vários outros cenários.',

    relatedToolsTitle: 'Ferramentas Relacionadas que Você Pode Querer Experimentar',
    relatedTool1Name: 'Gerador de UUID',
    relatedTool1Description: 'Gerar identificadores únicos (UUID) para chaves primárias de banco de dados e identificação única.',
    relatedTool1Url: 'https://www.ufreetools.com/tool/uuid-generator',

    relatedTool2Name: 'Gerador de Endereços de Hong Kong',
    relatedTool2Description: 'Gerar endereços realistas de Hong Kong, informações de identidade e dados de contato online.',
    relatedTool2Url: 'https://www.ufreetools.com/tool/hk-address-generator',

    relatedTool3Name: 'Gerador de Senhas Aleatórias',
    relatedTool3Description: 'Gerar senhas aleatórias seguras e confiáveis para proteger a segurança de contas.',
    relatedTool3Url: 'https://www.ufreetools.com/tool/password-generator',

    relatedTool4Name: 'Formatador JSON',
    relatedTool4Description: 'Embelezar e validar dados JSON para fácil leitura e depuração.',
    relatedTool4Url: 'https://www.ufreetools.com/tool/json-formatter',

    reference1Name: 'Banco de Dados IEEE OUI',
    reference1Description: 'Consultar informações oficiais de alocação OUI e listas de fabricantes.',
    reference1Url: 'https://standards-oui.ieee.org/',

    reference2Name: 'Endereço MAC - Wikipedia',
    reference2Description: 'Aprender sobre estrutura de endereço MAC, tipos e cenários de aplicação.',
    reference2Url: 'https://en.wikipedia.org/wiki/MAC_address',

    reference3Name: 'Padrões IEEE 802',
    reference3Description: 'Aprofundar-se nos padrões e especificações de endereços de rede.',
    reference3Url: 'https://standards.ieee.org/ieee/802/10328/'
};
