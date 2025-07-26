export default {
    title: "Gerador de Código de Crédito Social Unificado - Guia Completo",
    introTitle: "O que é o Gerador de Código de Crédito Social Unificado?",
    introPara1: "O <strong>Gerador de Código de Crédito Social Unificado</strong> é uma ferramenta especializada projetada para criar automaticamente códigos chineses de crédito social unificado válidos, em conformidade com o padrão nacional GB 32107-2015. Esses códigos de 18 caracteres servem como identificadores únicos para empresas, organizações e outras entidades legais que operam na China, semelhantes ao Número de Identificação do Empregador (EIN) nos EUA ou outros números de negócios em outros países.",
    introPara2: "Nosso gerador produz códigos que seguem estritamente as especificações exigidas pelas autoridades reguladoras chinesas, incluindo códigos corretos de autoridade de registro, identificadores de tipo de entidade, códigos de divisão administrativa e um dígito verificador válido calculado usando o algoritmo ISO 7064:1983 MOD 11-2. Se você precisa de dados de teste para desenvolvimento de software, preenchimento de banco de dados ou simplesmente deseja entender a estrutura desses identificadores comerciais essenciais, esta ferramenta oferece uma solução confiável para gerar códigos de crédito social unificado que parecem reais e são estruturalmente válidos.",
    
    scenariosTitle: "Cenários de aplicação do gerador",
    scenariosPara: "Esta ferramenta oferece soluções práticas para diversos cenários profissionais e técnicos:",
    scenario1: "<strong>Desenvolvimento e teste de software</strong>: Gere dados de teste válidos para aplicativos que lidam com registro de empresas chinesas, declarações fiscais ou sistemas de conformidade regulatória, garantindo que seu software processe corretamente a validação de códigos sem usar identificadores reais.",
    scenario2: "<strong>Testes de banco de dados e garantia de qualidade</strong>: Preencha bancos de dados de teste com códigos realistas para testes abrangentes de QA, garantindo que seu sistema possa lidar com identificadores reais de empresas chinesas sem expor dados reais.",
    scenario3: "<strong>Educação e treinamento</strong>: Forneça exemplos reais para cursos sobre registro de empresas, conformidade ou comércio internacional, ajudando os alunos a entender a estrutura e os requisitos de validação.",
    scenario4: "<strong>Verificação de migração de dados</strong>: Teste processos de migração envolvendo entidades empresariais chinesas gerando identificadores estruturados válidos que atendam aos formatos e regras de validação esperados.",
    scenario5: "<strong>Simulação de processos de negócios</strong>: Crie dados simulados realistas para fluxos de trabalho que envolvam documentos regulatórios, registro de empresas ou conformidade fiscal para operações multinacionais na China.",
    
    tutorialTitle: "Como usar o gerador",
    step1Title: "Passo 1: Configurar a autoridade de registro",
    step1Content: "Selecione o código apropriado da lista. Isso representa o órgão governamental responsável pelo registro. Para a maioria das empresas, o código de indústria e comércio (8) é a escolha mais comum.",
    
    step2Title: "Passo 2: Selecionar o tipo de entidade",
    step2Content: "Escolha o tipo que atenda às suas necessidades. As opções incluem empresa (1), negócio individual (2), cooperativa agrícola (3) ou outros (9). Esta escolha determina o segundo caractere do código gerado.",
    
    step3Title: "Passo 3: Escolher o código de divisão administrativa",
    step3Content: "Selecione uma região específica ou escolha \"Seleção aleatória\" para permitir que o gerador atribua um código de área válido aleatoriamente. O código de área representa a localização geográfica onde a entidade está registrada.",
    
    step4Title: "Passo 4: Definir quantidade e gerar",
    step4Content: "Especifique quantos códigos deseja gerar (de 1 a 1000) e clique em \"Gerar códigos\". A ferramenta criará imediatamente códigos válidos que podem ser copiados individualmente, todos de uma vez ou exportados em formatos TXT, CSV ou Excel para seu uso conveniente.",
    
    tipTitle: "Dica profissional:",
    tipContent: "Ao usar códigos gerados para testes, geralmente é útil gerar códigos de área específicos que correspondam ao seu cenário de teste. Por exemplo, se estiver testando um sistema para empresas de Xangai, selecionar o código de área de Xangai (310000) criará dados de teste mais realistas para seu caso de uso específico.",
    
    faqTitle: "Perguntas frequentes sobre o código",
    
    faq1Question: "Qual a diferença entre o código de crédito social unificado e o código de organização?",
    faq1Answer: "O <strong>código de crédito social unificado</strong> é um código de 18 dígitos que substituiu vários identificadores de negócios anteriores como parte da iniciativa chinesa de simplificação regulatória. O código de organização era um identificador de 9 dígitos usado anteriormente para empresas e agora está incorporado ao código unificado (dígitos 9-17). O novo código consolidou informações anteriormente dispersas em números de licença comercial, registro fiscal, código de organização e registro de previdência social em um único identificador que segue o padrão GB 32107-2015.",
    
    faq2Question: "Os códigos gerados por esta ferramenta podem ser usados para registro real de empresas?",
    faq2Answer: "Não. Os códigos gerados são estruturalmente válidos e passariam em verificações de validação de formato, mas são <strong>gerados aleatoriamente apenas para fins de teste e educação</strong>. Usar esses códigos para registro real de empresas, declarações fiscais ou documentos regulatórios constituiria fraude. Na China, códigos legítimos só podem ser emitidos por autoridades governamentais após os devidos procedimentos de registro.",
    
    faq3Question: "Como verificar se um código é válido?",
    faq3Answer: "Para verificar um código, você pode checar seu formato e dígito verificador:<ol><li>Certifique-se de que contém exatamente 18 caracteres</li><li>Confirme que contém apenas números e letras maiúsculas (excluindo I, O, S, V, Z)</li><li>Verifique o dígito verificador usando o algoritmo ISO 7064:1983 MOD 11-2</li><li>Verifique se o código de área corresponde a uma região administrativa válida</li></ol>Para verificação oficial de empresas registradas, consulte o Sistema Nacional de Divulgação de Informações de Crédito Empresarial em <a href='https://www.gsxt.gov.cn' target='_blank' rel='noopener noreferrer'>www.gsxt.gov.cn</a>.",
    
    faq4Question: "O que significam as diferentes partes do código?",
    faq4Answer: "O código de 18 dígitos contém várias partes distintas:<ul><li><strong>1º dígito</strong>: Código da autoridade de registro</li><li><strong>2º dígito</strong>: Código do tipo de entidade</li><li><strong>3º-8º dígitos</strong>: Código de divisão administrativa</li><li><strong>9º-17º dígitos</strong>: Código de organização</li><li><strong>18º dígito</strong>: Dígito verificador</li></ul>Cada parte fornece informações específicas sobre a entidade registrada, formando um sistema abrangente de identificação.",
    
    faq5Question: "Quando a China implementou este sistema?",
    faq5Answer: "O sistema foi formalmente implementado em outubro de 2015 com a publicação do padrão nacional GB 32107-2015. Faz parte de uma reforma mais ampla no registro de empresas e construção do sistema de crédito social. Durante o período de transição (2015-2017), as empresas existentes precisaram atualizar suas informações para obter o novo código. Desde 2018, todas as entidades legalmente registradas na China devem ter um código de crédito social unificado como seu identificador principal para todas as interações governamentais, declarações fiscais e conformidade regulatória.",
    
    standardsTitle: "Padrões e referências",
    standardsPara: "O sistema é baseado em vários padrões nacionais chineses:",
    standard1: "<strong>GB 32107-2015</strong>: Define a estrutura básica, conjunto de caracteres e regras de formato. <a href='https://www.samr.gov.cn' target='_blank' rel='noopener noreferrer'>Fonte: Administração Estatal de Regulação do Mercado</a>",
    standard2: "<strong>GB/T 2260</strong>: Códigos de divisão administrativa, definindo os códigos de região usados nos dígitos 3-8. <a href='http://www.stats.gov.cn' target='_blank' rel='noopener noreferrer'>Fonte: Escritório Nacional de Estatísticas</a>",
    standard3: "<strong>ISO 7064:1983</strong>: Especifica o algoritmo MOD 11-2 usado para calcular o dígito verificador.",
    
    relatedToolsTitle: "Ferramentas relacionadas que podem interessar",
    relatedTool1Title: "Gerador de número de ID chinês",
    relatedTool1Desc: "Gera números de identificação válidos para cidadãos chineses para fins de teste e desenvolvimento.",
    relatedTool2Title: "Calculadora de hash",
    relatedTool2Desc: "Calcula vários hashes incluindo MD5, SHA-1, SHA-256 e outros.",
    relatedTool3Title: "Gerador de senhas",
    relatedTool3Desc: "Gera senhas seguras e aleatórias com opções personalizáveis."
}
