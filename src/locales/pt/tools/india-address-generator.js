export default {
   name: 'Gerador de Endereços Índia - Gere Endereços Indianos Reais, Informações de Identidade e Dados de Contato Online',
   description: 'Gerador de endereços indiano gratuito online que cria endereços indianos em formato real, números de identificação, números de telefone, números de cartão de crédito e perfis de identidade completos. Suporta filtro por estado, formatos de exportação JSON/CSV e é executado inteiramente no navegador para proteção de privacidade.',
   inputTitle: 'Configurações de Geração',
   outputTitle: 'Resultados Gerados',
   generateBtn: 'Gerar Dados',
   loadSampleBtn: 'Carregar Amostra e Gerar',
   clearAll: 'Limpar Tudo',
   noOutput: 'Nenhum resultado gerado ainda',
   preview: 'Pré-visualização de Dados',
   
   // Filtro Geográfico
   locationTitle: 'Filtro Geográfico',
   selectRegion: 'Selecionar Estado',
   allRegions: 'Todos os Estados',
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
   bankBin: 'BIN do Banco',
   
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
   idCardTitle: 'Cartão de Identidade Indiano',
   idCardNumber: 'Número do Cartão de Identidade',
   aadhaarNumber: 'Número Aadhaar',
   
   // Digital Fingerprint
   fingerprintTitle: 'Impressão Digital',
   os: 'Sistema Operacional',
   osVersion: 'Versão do Sistema',
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
   quantityPlaceholder: 'Digite a quantidade (1-100)',
   
   // Mensagens de Notificação
   generating: 'Gerando...',
   generated: 'Geração Completa',
   copySuccess: 'Copiado para a área de transferência',
   downloadSuccess: 'Download bem-sucedido',
   invalidQuantity: 'Por favor, digite um número entre 1 e 100',
   
   // Exibição de Resultados
   resultCount: '{count} registros gerados',
   resultSummary: 'Resumo dos Resultados',
   showAll: 'Mostrar Todos',
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
   regionLabel: 'Estado',
   postalCode: 'Código Postal',
   
   // Formato de Endereço
   addressNumber: 'Nº',
   addressFloor: 'Andar',
   addressUnit: 'Unidade',
   commercialUnit: '(Unidade Comercial)',
   india: 'Índia',
   postOfficeBox: 'Caixa Postal',
   studentDormitory: 'Estudantil',
   teachingBuilding: 'Prédio de Ensino',
   library: 'Biblioteca',
   buildingUnit: 'Bloco',
   apartment: 'Apartamento',
   
   // Nomes dos Regiões (Estados Indianos)
   regions: {
       'Maharashtra': 'Maharashtra',
       'Karnataka': 'Karnataka',
       'Tamil Nadu': 'Tamil Nadu',
       'Delhi': 'Delhi',
       'Gujarat': 'Gujarat',
       'Rajasthan': 'Rajasthan',
       'Uttar Pradesh': 'Uttar Pradesh',
       'West Bengal': 'Bengala Ocidental',
       'Kerala': 'Kerala',
       'Andhra Pradesh': 'Andhra Pradesh',
       'Telangana': 'Telangana',
       'Madhya Pradesh': 'Madhya Pradesh',
       'Bihar': 'Bihar',
       'Punjab': 'Punjab',
       'Haryana': 'Haryana',
       'Odisha': 'Odisha',
       'Chhattisgarh': 'Chhattisgarh',
       'Jharkhand': 'Jharkhand',
       'Assam': 'Assam',
       'Jammu and Kashmir': 'Jammu e Cachemira'
   },
   
   // Nomes das Universidades
   universities: {
       'IIT': 'Instituto Indiano de Tecnologia',
       'IISc': 'Instituto Indiano de Ciências',
       'IIM': 'Instituto Indiano de Gestão',
       'AIIMS': 'Instituto Indiano de Ciências Médicas',
       'JNU': 'Universidade Jawaharlal Nehru',
       'DU': 'Universidade de Delhi',
       'BHU': 'Universidade Hindu de Banaras',
       'Jadavpur': 'Universidade Jadavpur',
       'Anna': 'Universidade Anna',
       'Osmania': 'Universidade Osmania'
   },
   
   // Nomes das Colunas CSV
   csv: {
       fullAddress: 'Endereço Completo',
       street: 'Rua',
       houseNumber: 'Número da Casa',
       building: 'Prédio',
       floor: 'Andar',
       unit: 'Unidade',
       region: 'Estado',
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