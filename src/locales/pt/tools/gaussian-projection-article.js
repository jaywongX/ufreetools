export default {
  title: "Calculadora de Projeção Gauss: Conversão entre coordenadas geográficas e planas",
  introTitle: "O que é a projeção Gauss e por que você precisa desta ferramenta",
  introPara1: "A <strong>Calculadora de Projeção Gauss</strong> (também conhecida como projeção transversa de Mercator) é uma ferramenta essencial para engenheiros de agrimensura, cartógrafos, profissionais de GIS e qualquer pessoa que trabalhe com sistemas de informação geográfica. Esta poderosa ferramenta de conversão de coordenadas permite converter entre coordenadas geográficas (latitude e longitude) e coordenadas planas (X e Y) usando o método de projeção Gauss.",
  introPara2: "Nosso <strong>conversor de projeção Gauss</strong> realiza com alta precisão tanto a transformação direta (geográficas para planas) quanto a inversa (planas para geográficas). Ele suporta vários modelos de elipsoide, incluindo WGS84, CGCS2000, Krasovsky (Pequim 54) e outros. A ferramenta aplica automaticamente as fórmulas matemáticas apropriadas e termos de correção, garantindo conversões precisas para seus projetos de medição e mapeamento.",
  
  scenariosTitle: "Aplicações práticas da projeção Gauss",
  scenario1: "<strong>Agrimensura e gestão territorial:</strong> Agrimensores usam a projeção Gauss para converter coordenadas GPS em sistemas de coordenadas locais, para medições precisas de terrenos, demarcação de propriedades e planejamento de construções.",
  scenario2: "<strong>Cartografia topográfica:</strong> Cartógrafos e profissionais de mapeamento dependem da projeção Gauss para criar mapas topográficos precisos, mantendo relações angulares e minimizando distorções em áreas específicas.",
  scenario3: "<strong>Integração de dados GIS:</strong> Analistas de GIS usam cálculos de projeção Gauss para integrar dados de diferentes fontes e sistemas de coordenadas em um quadro de referência unificado para análise espacial.",
  scenario4: "<strong>Projetos de engenharia:</strong> Engenheiros civis e equipes de construção utilizam a projeção Gauss no design de infraestrutura, garantindo posicionamento preciso de estradas, pontes, túneis e serviços públicos em relação a características existentes.",
  scenario5: "<strong>Aplicações militares e de defesa:</strong> Operações militares utilizam coordenadas de projeção Gauss para planejamento tático, navegação e posicionamento de alvos, onde precisão é crítica.",
  scenariosConclusion: "A versatilidade dos <strong>cálculos de projeção Gauss</strong> os torna indispensáveis em muitos campos profissionais que requerem posicionamento espacial preciso. Nossa ferramenta simplifica este complexo processo matemático em uma interface intuitiva, adequada tanto para profissionais quanto para iniciantes.",
  
  faqTitle: "Perguntas frequentes sobre projeção Gauss",
  faq1q: "Qual a diferença entre projeção Gauss e UTM?",
  faq1a: "A projeção Gauss é a base matemática do sistema UTM (Universal Transversa de Mercator). As principais diferenças incluem:<ul><li>UTM usa um sistema padronizado de fusos, com fusos de 6° e parâmetros específicos</li><li>A projeção Gauss é mais flexível, permitindo meridianos centrais e larguras de fuso personalizados (3° ou 6°)</li><li>UTM inclui um falso leste padrão de 500.000m e fator de escala 0.9996</li><li>Nossa <strong>calculadora de projeção Gauss</strong> permite mais opções de personalização de parâmetros do elipsoide do que calculadoras UTM típicas</li></ul>",
  
  faq2q: "Qual modelo de elipsoide devo escolher para cálculos de projeção Gauss?",
  faq2a: "A escolha do elipsoide depende da sua região geográfica e do padrão do sistema de coordenadas utilizado:<ul><li><strong>WGS84:</strong> Padrão global usado com GPS e mapeamento internacional</li><li><strong>CGCS2000:</strong> Sistema oficial de coordenadas da China desde 2000</li><li><strong>Krasovsky/Pequim 54:</strong> Historicamente usado na China e partes da Europa Oriental</li><li><strong>Xi'an 80:</strong> Padrão nacional chinês antes do CGCS2000</li></ul>Para a maioria das aplicações modernas, recomenda-se WGS84 ou CGCS2000, a menos que você esteja especificamente trabalhando com dados legados que requerem um elipsoide diferente. Nosso <strong>conversor de projeção Gauss</strong> suporta todos esses modelos e mais.",
  
  faq3q: "Qual a precisão dos cálculos de projeção Gauss desta ferramenta?",
  faq3a: "Nossa <strong>calculadora de projeção Gauss</strong> implementa o modelo matemático completo e inclui termos de correção apropriados para garantir alta precisão. Para a maioria das aplicações práticas, a ferramenta alcança precisão submilimétrica, excedendo os requisitos de projetos típicos de agrimensura e cartografia. A precisão depende da entrada correta dos parâmetros do elipsoide e da especificação adequada do fuso. Para trabalhos geodésicos de altíssima precisão (requerendo precisão submilimétrica), pode ser necessário software especializado com termos de correção adicionais.",
  
  faq4q: "Posso usar esta ferramenta para processamento em lote de coordenadas?",
  faq4a: "Sim, nosso <strong>conversor de projeção Gauss</strong> inclui funcionalidade completa para processamento em lote. Você pode:<ul><li>Inserir múltiplos pares de coordenadas (latitude/longitude ou X/Y)</li><li>Carregar arquivos CSV, TXT ou Excel contendo dados de coordenadas</li><li>Processar centenas ou milhares de pontos simultaneamente</li><li>Exportar resultados em vários formatos, incluindo CSV, Excel, GeoJSON, KML e TXT</li></ul>Isso torna a ferramenta ideal para projetos com grandes conjuntos de dados que seriam demorados para processar individualmente.",
  
  faq5q: "O que são fusos de 3° e 6° na projeção Gauss?",
  faq5a: "A projeção Gauss divide a Terra em fusos de longitude para minimizar distorções:<ul><li><strong>Fusos de 3°:</strong> Mais estreitos, proporcionam maior precisão e menos distorção, normalmente usados para mapeamento em grande escala e medições detalhadas. Os números dos fusos variam de 1 a 120.</li><li><strong>Fusos de 6°:</strong> Mais largos, cobrem áreas maiores com distorção ligeiramente maior nas bordas, comumente usados para mapeamento regional e coordenadas UTM. Os números dos fusos variam de 1 a 60.</li></ul>Nossa <strong>ferramenta de cálculo de projeção Gauss</strong> suporta ambos os sistemas de fusos e calcula automaticamente o meridiano central com base na sua seleção de fuso.",
  
  tutorialTitle: "Guia passo a passo para usar a calculadora de projeção Gauss",
  forwardCalcTitle: "Transformação direta (geográficas → planas)",
  step1: "<strong>Selecione o tipo de cálculo:</strong> Escolha \"Transformação direta\" nas opções no topo da ferramenta.",
  step2: "<strong>Selecione os parâmetros do elipsoide:</strong> Escolha o tipo de elipsoide adequado (WGS84, CGCS2000, Pequim 54 etc.) de acordo com os requisitos do seu sistema de coordenadas.",
  step3: "<strong>Configure os parâmetros de projeção:</strong> Selecione fuso de 3° ou 6° e insira o número do fuso. O meridiano central será calculado automaticamente, ou você pode inseri-lo manualmente se necessário.",
  step4: "<strong>Insira as coordenadas geográficas:</strong> Insira valores de latitude e longitude em graus decimais. Você também pode usar o campo de entrada DMS (graus-minutos-segundos) para inserir notação tradicional.",
  
  inverseCalcTitle: "Transformação inversa (planas → geográficas)",
  step5: "<strong>Selecione o tipo de cálculo:</strong> Escolha \"Transformação inversa\".",
  step6: "<strong>Configure elipsoide e projeção:</strong> Selecione os mesmos parâmetros de elipsoide e configurações de projeção do sistema de coordenadas original.",
  step7: "<strong>Insira as coordenadas planas:</strong> Insira os valores X (norte) e Y (leste) em metros.",
  step8: "<strong>Visualize os resultados:</strong> As latitudes e longitudes calculadas serão exibidas em formato decimal e DMS para referência fácil.",
  
  batchTitle: "Processamento em lote de múltiplos conjuntos de coordenadas",
  step9: "<strong>Prepare os dados:</strong> Formate os pares de coordenadas, um por linha (latitude,longitude para transformação direta; X,Y para inversa). Você também pode usar o botão \"Carregar CSV\" para importar dados de arquivos.",
  step10: "<strong>Processe os dados em lote:</strong> Clique em \"Processar em lote\" para converter todas as coordenadas de uma vez.",
  step11: "<strong>Exporte os resultados:</strong> Use os botões \"Copiar tudo\" ou \"Baixar CSV\" para salvar os resultados convertidos para uso em outros aplicativos.",
  
  tutorialConclusion: "Com esta <strong>calculadora de projeção Gauss</strong>, você pode converter rapidamente coordenadas entre sistemas geográficos e planos sem cálculos manuais complexos. A interface intuitiva da ferramenta torna a conversão de coordenadas em nível profissional acessível para usuários de todos os níveis.",
  
  relatedToolsTitle: "Ferramentas relacionadas",
  relatedTool1: "Conversor de coordenadas",
  relatedTool1Desc: "Converta entre diferentes sistemas de coordenadas, incluindo UTM, MGRS e várias grades nacionais.",
  relatedTool2: "Reprodutor de trajetórias GPS",
  relatedTool2Desc: "Visualize e analise trajetórias GPS com dados de coordenadas em um mapa interativo.",
  
  referencesTitle: "Referências técnicas e recursos",
  reference1: "Sistema Geodésico Mundial 1984 (WGS84) - Agência Nacional de Inteligência Geoespacial",
  reference2: "Projeção transversa de Mercator - Wikipedia",
  reference3: "Sistema de Coordenadas Planas de 1983 - Serviço Nacional de Geodésia"
}
