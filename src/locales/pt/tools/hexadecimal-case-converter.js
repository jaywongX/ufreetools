export default {
    name: 'Conversor de Caixa Hexadecimal',
    description: 'Converte e formata strings hexadecimais entre maiúsculas e minúsculas, com suporte a diferentes prefixos, separadores e opções de agrupamento',
    
    input: {
      title: 'Entrada Hexadecimal',
      placeholder: 'Insira o valor hexadecimal...'
    },
    
    output: {
      title: 'Resultado da Conversão',
      placeholder: 'O resultado da conversão aparecerá aqui...'
    },
    
    prefix: {
      title: 'Prefixo',
      none: 'Nenhum',
    },
    
    format: {
      title: 'Formato de Caixa',
      uppercase: 'Maiúsculas',
      lowercase: 'Minúsculas'
    },
    
    separator: {
      title: 'Separador',
      none: 'Nenhum',
      space: 'Espaço',
      comma: 'Vírgula',
      colon: 'Dois pontos',
      semicolon: 'Ponto e vírgula'
    },
    
    grouping: {
      title: 'Agrupamento (bytes)',
      none: 'Nenhum'
    },
    
    actions: {
      copy: 'Copiar',
      clear: 'Limpar',
      convert: 'Converter'
    },
    
    messages: {
      copied: 'Copiado para a área de transferência',
      copyFailed: 'Falha ao copiar',
      invalidHex: 'Valor hexadecimal inválido'
    },
    
    examples: {
      title: 'Exemplos',
      example1: {
        title: '"Hello World" em hexadecimal',
      },
      example2: {
        title: 'ASCII Hello com prefixo 0x',
      },
      example3: {
        title: 'DEADBEEF (valor comum para debug)',
      },
      example4: {
        title: 'Formato de endereço MAC',
      }
    },
    
    tips: {
      title: 'Dicas',
      tip1: 'Valores hexadecimais usam caracteres 0-9 e A-F (ou a-f)',
      tip2: 'Diferentes prefixos são usados em diferentes contextos: 0x em programação, # para cores, etc',
      tip3: 'Usar agrupamento e separadores melhora a legibilidade de strings hexadecimais longas',
      tip4: 'Endereços MAC normalmente usam separador de dois pontos e agrupamento de 1 byte'
    },
    
    article: {
      title: 'Conversor de Caixa Hexadecimal: Guia Completo para Conversão de Formato Hexadecimal',
      
      introduction: {
        title: 'O que é um Conversor de Caixa Hexadecimal?',
        p1: 'Nosso <strong>Conversor de Caixa Hexadecimal</strong> é uma ferramenta projetada especificamente para converter strings hexadecimais entre formatos maiúsculos e minúsculos, além de oferecer opções adicionais de formatação. Seja para converter <strong>hexadecimal para minúsculas</strong> para manter consistência na programação, ou alterar hexadecimal minúsculo para maiúsculo para melhorar a legibilidade, esta ferramenta oferece uma solução abrangente para todas as suas necessidades de conversão de caixa hexadecimal.',
        p2: 'A notação hexadecimal (base 16) usa números de 0-9 e letras A-F (ou a-f) para representar valores. A escolha entre <strong>hexadecimal minúsculo</strong> e maiúsculo pode impactar significativamente a legibilidade do código, compatibilidade e, em alguns casos, até o comportamento do sistema. Nosso conversor não apenas realiza conversões simples de caixa, mas também formatações complexas com prefixos, separadores e agrupamentos personalizados.',
        p3: 'O debate sobre usar <strong>hexadecimal em minúsculas ou maiúsculas</strong> é comum entre desenvolvedores. Embora ambos os formatos representem o mesmo valor, diferentes linguagens de programação, protocolos e sistemas podem preferir ou exigir formatos específicos. Esta ferramenta preenche essa lacuna oferecendo conversão instantânea entre caixas e opções adicionais de formatação que se adaptam a várias especificações técnicas e guias de estilo.'
      },
      
      applications: {
        title: 'Aplicações Práticas e Cenários de Uso',
        scenario1: {
          title: 'Programação e Desenvolvimento',
          content: 'Desenvolvedores frequentemente precisam converter <strong>hexadecimal para representação alfanumérica</strong> ou alternar formatos de caixa em bases de código para manter consistência. Ao usar Java, desenvolvedores geralmente precisam converter <strong>hexadecimal para long em Java</strong>, onde a consistência de caixa é crucial para legibilidade. Nossa ferramenta simplifica esse processo enquanto segue guias de estilo de código.'
        },
        scenario2: {
          title: 'Redes e Protocolos de Comunicação',
          content: 'Engenheiros de rede trabalhando com endereços MAC, IPv6 ou outros protocolos que usam notação hexadecimal podem manter consistência ao documentar ou implementar sistemas. Muitos protocolos têm requisitos específicos para formato <strong>hexadecimal minúsculo</strong> com separadores e agrupamentos particulares, que nossa ferramenta pode atender facilmente.'
        },
        scenario3: {
          title: 'Formatação de Códigos de Cor',
          content: 'Designers web e artistas gráficos que usam códigos de cor hexadecimais (#RRGGBB) frequentemente precisam converter <strong>hexadecimal para letras em caixa específica</strong> para diferentes ferramentas de design ou especificações CSS. Alguns sistemas de design exigem maiúsculas para manter consistência de marca, enquanto outros preferem minúsculas para seguir convenções HTML/CSS.'
        },
        scenario4: {
          title: 'Análise e Conversão de Dados',
          content: 'Analistas de dados frequentemente precisam converter formatos de caixa de texto em várias ferramentas. Por exemplo, você pode precisar converter células contendo valores hexadecimais no Excel <strong>de texto minúsculo para maiúsculo</strong>, ou converter saídas de comandos Linux <strong>de minúsculas para maiúsculas</strong> para processamento adicional.'
        },
        scenario5: {
          title: 'Computação Forense e Segurança',
          content: 'Profissionais de segurança analisando dumps hexadecimais, arquivos binários ou dados criptografados frequentemente precisam de formato consistente para documentação, comparação e análise. Converter entre formatos permite integração mais suave com várias ferramentas de segurança, muitas das quais exigem converter <strong>hexadecimal para minúsculas</strong> para processamento consistente.'
        }
      },
      
      guide: {
        title: 'Como Usar o Conversor de Caixa Hexadecimal',
        step1: {
          title: 'Passo 1: Insira Seu Valor Hexadecimal',
          content: 'Primeiro, insira qualquer valor hexadecimal no campo de entrada. Nossa ferramenta aceita caracteres hexadecimais válidos (0-9, A-F, a-f) e separadores comuns. Seja para converter <strong>hexadecimal para letras em caixa diferente</strong> ou formatar strings existentes, comece inserindo seu valor hexadecimal.'
        },
        step2: {
          title: 'Passo 2: Selecione o Formato de Caixa Desejado',
          content: 'Escolha entre formatos maiúsculos (ABCDEF) e minúsculos (abcdef). Esta opção determina se sua conversão de <strong>hexadecimal minúsculo vs maiúsculo</strong> usará letras maiúsculas ou minúsculas para representar a parte alfabética do valor hexadecimal.'
        },
        step3: {
          title: 'Passo 3: Escolha Opções de Prefixo',
          content: 'Se necessário, selecione um prefixo para seu valor hexadecimal. Opções comuns incluem 0x (para programação), # (para cores), \\x (para sequências de escape) ou h (sufixo assembly). Isso é especialmente útil quando você precisa converter <strong>hexadecimal para formato alfanumérico específico de linguagem ou sistema</strong>.'
        },
        step4: {
          title: 'Passo 4: Configure Separadores e Agrupamento',
          content: 'Escolha caracteres separadores (espaço, vírgula, dois pontos, ponto e vírgula) e tamanho de agrupamento para formatar sua saída. Por exemplo, endereços MAC normalmente usam separador de dois pontos e agrupamento de 1 byte. Este passo é essencial quando você precisa converter <strong>hexadecimal para formato longo</strong> com agrupamento específico para melhor legibilidade.'
        },
        step5: {
          title: 'Passo 5: Copie e Use Seu Resultado Convertido',
          content: 'Após a conversão, seu valor hexadecimal formatado aparecerá no campo de saída. Clique no botão "Copiar" para copiar o resultado para a área de transferência, pronto para uso em seu código, documentação ou outros aplicativos. Seja para converter <strong>hexadecimal para minúsculas</strong> ou implementar formato específico com agrupamento e prefixo, agora você tem hexadecimal perfeitamente formatado.'
        }
      },
      
      faq: {
        title: 'Perguntas Frequentes',
        q1: 'Qual a diferença entre hexadecimal minúsculo e maiúsculo?',
        a1: 'A diferença entre <strong>hexadecimal minúsculo vs maiúsculo</strong> está em como as letras A-F (usadas para valores 10-15) são exibidas. Funcionalmente, "1a2b3c" e "1A2B3C" representam o mesmo valor. Porém, muitas linguagens e sistemas têm convenções ou requisitos específicos sobre caixa. Por exemplo, códigos de cor CSS tradicionalmente usam minúsculas, enquanto algumas linguagens assembly preferem maiúsculas para melhor legibilidade.',
        
        q2: 'Como converter hexadecimal para caracteres alfanuméricos?',
        a2: 'Hexadecimal já é alfanumérico, usando números (0-9) e letras (A-F). Se você quer converter <strong>hexadecimal para letras além de A-F</strong>, pode estar se referindo a conversão ASCII ou Unicode, que é um processo diferente interpretando valores hexadecimais como códigos de caracteres. Esta ferramenta foca em conversão de caixa e formatação de notação hexadecimal padrão, não codificação/decodificação de texto.',
        
        q3: 'Por que eu precisaria converter hexadecimal para minúsculas ou maiúsculas?',
        a3: 'Há várias razões para converter <strong>hexadecimal para minúsculas</strong> ou maiúsculas:<ul><li>Conformidade com estilo de código (muitas linguagens têm guias especificando caixa)</li><li>Requisitos de sistema (algumas APIs ou protocolos exigem formato específico)</li><li>Preferência de legibilidade (maiúsculas são mais visíveis em documentação)</li><li>Processamento consistente de dados (ao comparar ou analisar valores hexadecimais)</li></ul>Nossa ferramenta torna essas conversões simples e eficientes.',
  
        q4: 'Como usar o conversor para converter hexadecimal para long em Java?',
        a4: 'Para converter <strong>hexadecimal para long em Java</strong>, primeiro use nossa ferramenta para garantir que sua string hexadecimal esteja formatada corretamente (normalmente com prefixo 0x e letras minúsculas). Então você pode copiar o resultado e usar <code>Long.parseLong(hexString.substring(2), 16)</code> para analisar strings com prefixo 0x, ou <code>Long.parseLong(hexString, 16)</code> para strings sem prefixo. Nossa ferramenta ajuda a garantir que sua string hexadecimal esteja formatada corretamente antes do processamento em Java.',
  
        q5: 'Posso converter múltiplos valores hexadecimais de uma vez?',
        a5: 'Sim, você pode processar múltiplos valores hexadecimais de uma vez inserindo separadores apropriados no campo de entrada. Se precisar converter <strong>texto minúsculo com muitos valores hexadecimais no Excel para maiúsculas</strong>, você pode copiar a coluna inteira, convertê-la aqui e colar os resultados de volta. A ferramenta aplicará o formato escolhido (caixa, prefixo, separador e agrupamento) a todos os caracteres hexadecimais válidos na entrada.'
      },
  
      resources: {
        title: 'Recursos Adicionais',
        resource1: '<a href="https://en.wikipedia.org/wiki/Hexadecimal" target="_blank" rel="noopener noreferrer">Wikipedia: Notação Hexadecimal</a> - Informações abrangentes sobre notação hexadecimal.',
        resource2: '<a href="https://www.ietf.org/rfc/rfc5952.txt" target="_blank" rel="noopener noreferrer">IETF RFC 5952</a> - Recomendações para representação textual de endereços IPv6, incluindo uso de hexadecimal minúsculo.'
      },  
      
      conclusion: {
        title: 'Conclusão',
        content: 'Nosso <strong>Conversor de Caixa Hexadecimal</strong> oferece uma solução versátil para todas as necessidades de conversão de formato hexadecimal. Seja para converter <strong>hexadecimal para minúsculas</strong>, aplicar prefixos específicos, formatar strings ou usar separadores e agrupamentos personalizados, nossa ferramenta atende suas necessidades.'
      }
    }
  };