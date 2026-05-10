export default {
   name: 'Gerador de Endereços Paquistão - Gere Endereços Paquistaneses Reais, Informações de Identidade e Dados de Contato Online',
   description: 'Gerador de endereços paquistaneses gratuito online que cria endereços paquistaneses com formato real, números de identificação, números de telefone, números de cartão de crédito e perfis de identidade completos. Suporta filtragem por província, formatos de exportação JSON/CSV e é executado completamente no navegador para proteção de privacidade.',
   inputTitle: 'Configurações de Geração',
   outputTitle: 'Resultados Gerados',
   generateBtn: 'Gerar Dados',
   loadSampleBtn: 'Carregar Exemplo e Gerar',
   clearAll: 'Limpar Tudo',
   noOutput: 'Nenhum resultado gerado ainda',
   preview: 'Pré-visualização de Dados',
   
   // Filtragem Geográfica
   locationTitle: 'Filtragem Geográfica',
   selectRegion: 'Selecionar Província/Região',
   allRegions: 'Todas as Províncias/Regiões',
   postalCodeLabel: 'Código Postal',
   validatePostalCode: 'Validar Código Postal',
   
   // Tipos de Endereço
   addressTypeTitle: 'Tipo de Endereço',
   addressTypeResidential: 'Endereço Residencial',
   addressTypeCommercial: 'Endereço Comercial',
   addressTypeVirtual: 'Caixa Postal Virtual',
   addressTypeCampus: 'Campus Universitário',
   
   // Informações de Identidade
   identityTitle: 'Informações de Identidade',
   fullName: 'Nome Completo',
   gender: 'Gênero',
   genderMale: 'Masculino',
   genderFemale: 'Feminino',
   age: 'Idade',
   birthDate: 'Data de Nascimento',
   zodiac: 'Signo',
   height: 'Altura',
   weight: 'Peso',
   
   // Informações de Contato
   contactTitle: 'Informações de Contato',
   phoneNumber: 'Número de Telefone',
   phoneType: 'Tipo de Telefone',
   phoneTypeMobile: 'Celular',
   phoneTypeLandline: 'Fixo',
   areaCode: 'Código de Área',
   email: 'Endereço de E-mail',
   tempEmail: 'E-mail Temporário',
   
   // Cartão de Crédito
   creditCardTitle: 'Informações do Cartão de Crédito',
   cardType: 'Tipo de Cartão',
   cardNumber: 'Número do Cartão',
   expiryDate: 'Data de Validade',
   cvv: 'CVV',
   bankBin: 'BIN Bancário',
   
   // Carreira
   careerTitle: 'Perfil Profissional',
   jobTitle: 'Cargo',
   salary: 'Salário',
   companyName: 'Nome da Empresa',
   companySize: 'Tamanho da Empresa',
   industry: 'Indústria',
   employmentStatus: 'Status de Emprego',
   employmentFullTime: 'Tempo Integral',
   employmentPartTime: 'Meio Período',
   
   // Cartão de Identidade
   idCardTitle: 'Cartão de Identidade Paquistanês',
   idCardNumber: 'Número do Cartão de Identidade',
   
   // Digital Impressão Digital
   fingerprintTitle: 'Impressão Digital',
   os: 'Sistema Operacional',
   osVersion: 'Versão do SO',
   browser: 'Navegador',
   userAgent: 'Agente do Usuário',
   screenResolution: 'Resolução da Tela',
   timezone: 'Fuso Horário',
   guid: 'GUID',
   ipAddress: 'Endereço IP',
   macAddress: 'Endereço MAC',
   cookiePolicy: 'Política de Cookies',
   
   // Opções de Exportação
   exportTitle: 'Formato de Exportação',
   exportJson: 'Exportar JSON',
   exportCsv: 'Exportar CSV',
   downloadBtn: 'Baixar',
   copyBtn: 'Copiar',
   viewDetails: 'Ver Detalhes',
   
   // Geração em Lote
   batchTitle: 'Geração em Lote',
   quantityLabel: 'Quantidade',
   quantityPlaceholder: 'Insira a quantidade (1-100)',
   
   // Mensagens de Notificação
   generating: 'Gerando...',
   generated: 'Geração Concluída',
   copySuccess: 'Copiado para a área de transferência',
   downloadSuccess: 'Download bem-sucedido',
   invalidQuantity: 'Por favor, insira um número entre 1 e 100',
   
   // Exibição de Resultados
   resultCount: '{count} registros gerados',
   resultSummary: 'Resumo dos Resultados',
   showAll: 'Mostrar Tudo',
   collapse: 'Recolher',
   
   // Opções de Geração
   generateOptionsTitle: 'Opções de Geração',
   
   // Exibição de Registros
   recordLabel: 'Registro #{num}',
   addressLabel: 'Endereço',
   streetLabel: 'Rua',
   houseNumberLabel: 'Número da Casa',
   buildingLabel: 'Prédio',
   floorLabel: 'Andar',
   unitLabel: 'Unidade',
   regionLabel: 'Província/Região',
   postalCode: 'Código Postal',
   
   // Formato de Endereço
   addressNumber: 'N°',
   addressFloor: 'Andar',
   addressUnit: 'Unidade',
   commercialUnit: '(Unidade Comercial)',
   pakistan: 'Paquistão',
   postOfficeBox: 'Caixa Postal',
   studentDormitory: 'Residência Estudantil',
   teachingBuilding: 'Prédio de Ensino',
   library: 'Biblioteca',
   buildingUnit: 'Prédio',
   apartment: 'Apartamento',
   
   // Nomes de Províncias/Regiões (4 províncias + território do Paquistão)
   regions: {
       'Punjab': 'Punjab',
       'Sindh': 'Sind',
       'Khyber Pakhtunkhwa': 'Khyber Pakhtunkhwa',
       'Balochistan': 'Balochistão',
       'Islamabad Capital Territory': 'Território Capital de Islamabad'
   },
   
   // Nomes de Universidades
   universities: {
       'LUMS': 'Universidade de Gestão e Ciências de Lahore',
       'PU': 'Universidade do Punjab',
       'KU': 'Universidade de Karachi',
       'QAU': 'Universidade Quaid-i-Azam',
       'COMSATS': 'Universidade COMSATS de Islamabad',
       'NUST': 'Universidade Nacional de Ciências e Tecnologia',
       'IBA': 'Instituto de Administração de Empresas',
       'PIDE': 'Instituto Paquistanês de Economia do Desenvolvimento',
       'NCA': 'Faculdade Nacional de Artes'
   },
   
   // Nomes das Colunas CSV
   csv: {
       fullAddress: 'Endereço Completo',
       street: 'Rua',
       houseNumber: 'Número da Casa',
       building: 'Prédio',
       floor: 'Andar',
       unit: 'Unidade',
       region: 'Província/Região',
       postalCode: 'Código Postal',
       fullName: 'Nome Completo',
       gender: 'Gênero',
       age: 'Idade',
       birthDate: 'Data de Nascimento',
       phone: 'Telefone',
       email: 'E-mail',
       cardType: 'Tipo de Cartão',
       cardNumber: 'Número do Cartão',
       idCardNumber: 'Número do Cartão de Identidade'
   }
};