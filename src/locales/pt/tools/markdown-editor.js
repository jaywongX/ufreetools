export default {
  name: 'Editor Markdown',
  description: 'Edite e visualize documentos Markdown em tempo real',

  options: {
    mode: 'Modo',
    syntaxHighlighting: 'Destaque de sintaxe',
    autoSave: 'Salvamento automático',
    lineNumbers: 'Números de linha',
    spellCheck: 'Verificação ortográfica',
    wordWrap: 'Quebra de linha automática'
  },

  modes: {
    split: 'Visualização dividida',
    edit: 'Somente edição',
    preview: 'Somente visualização'
  },

  actions: {
    bold: 'Negrito',
    italic: 'Itálico',
    strikethrough: 'Tachado',
    heading: 'Título',
    link: 'Link',
    image: 'Imagem',
    list: 'Lista',
    quote: 'Citação',
    code: 'Código',
    table: 'Tabela',
    hr: 'Linha horizontal',
    preview: 'Visualizar',
    copy: 'Copiar',
    clear: 'Limpar',
    download: 'Baixar Markdown',
    downloadHTML: 'Baixar HTML',
    upload: 'Carregar Markdown'
  },

  messages: {
    copied: 'Conteúdo Markdown copiado para a área de transferência!',
    copyError: 'Falha ao copiar - copie manualmente',
    clearConfirm: 'Tem certeza que deseja limpar o editor?',
    templateConfirm: 'Aplicar este modelo substituirá o conteúdo atual. Continuar?',
    templateApplied: 'Modelo "{name}" aplicado',
    saved: 'Documento salvo',
    uploadSuccess: 'Documento carregado com sucesso',
    uploadError: 'Erro ao carregar documento',
    wordCount: '{count} palavras',
    charCount: '{count} caracteres'
  },

  placeholder: 'Digite seu conteúdo Markdown aqui...',

  placeholders: {
    linkText: 'Texto do link',
    imageAlt: 'Descrição da imagem'
  },

  templates: {
    title: 'Modelos rápidos',
    apply: 'Aplicar modelo',
    confirm: 'Confirmar aplicação',
    
    simple: {
      name: 'Documento simples',
      description: 'Inclui títulos, listas, citações etc.',
      content: `# Título do Documento

## Introdução
Este é um exemplo simples de documento Markdown.

## Recursos
- Suporta títulos e parágrafos
- Suporta **negrito** e *itálico*
- Suporta listas ordenadas e não ordenadas

> Este é um bloco de citação, usado para destacar observações importantes.

## Conclusão
Markdown é uma linguagem de marcação simples e eficiente.`
    },
    
    readme: {
      name: 'README de projeto',
      description: 'Estrutura padrão para documentação de projetos',
      content: `# Nome do Projeto

## Descrição
Breve descrição das funcionalidades e objetivos do projeto.

## Funcionalidades
- Funcionalidade principal 1
- Funcionalidade principal 2
- Funcionalidade principal 3

## Instalação
\`\`\`
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev
\`\`\`

## Exemplo de Uso
\`\`\`
// Código de exemplo
const exemplo = new Exemplo();
exemplo.iniciar();
\`\`\`

## Documentação
Consulte o link para documentação detalhada.

## Contribuição
Contribuições são bem-vindas - veja o guia de contribuição.

## Licença
Este projeto está licenciado sob MIT - veja o arquivo LICENSE.`
    },
    
    resume: {
      name: 'Currículo',
      description: 'Modelo para currículo profissional',
      content: `# Currículo Profissional

## Dados Pessoais
- Nome: João Silva
- Telefone: (11) 98765-4321
- Email: joao.silva@exemplo.com
- Objetivo: Desenvolvedor Front-end

## Formação Acadêmica
Universidade XYZ, Ciência da Computação, 2016-2020

## Experiência Profissional
### Empresa Tech, Desenvolvedor Front-end, 2020-Presente
- Desenvolvimento da interface principal do produto
- Implementação de features com Vue.js
- Otimização de performance em 30%

### Empresa Solutions, Estagiário, 2019-2020
- Participação no redesign do site corporativo
- Auxílio na refatoração de código

## Habilidades Técnicas
- Front-end: HTML, CSS, JavaScript, React
- Back-end: Node.js
- Ferramentas: Git, Docker

## Projetos
### Sistema de Gerenciamento
- Desenvolvido com React
- Features: dashboard, relatórios
- Melhorias de performance

## Idiomas
- Inglês (fluente)
- Espanhol (intermediário)`
    },
    
    meeting: {
      name: 'Ata de Reunião',
      description: 'Modelo para registro de reuniões',
      content: `# Ata de Reunião

## Informações
- Tema: Andamento do Projeto
- Data: 15/05/2023
- Horário: 14h-16h
- Local: Sala de Reuniões
- Coordenador: Gerente de Projeto
- Relator: Assistente

## Participantes
- Gerente (Produto)
- Engenheiro (Desenvolvimento)
- Designer (UX)
- Testador (QA)

## Pauta
1. Revisão do sprint anterior
2. Planejamento do próximo ciclo
3. Resolução de impedimentos
4. Definição de próximos passos

## Discussões
### 1. Revisão
- Documentação de requisitos concluída
- Design 60% finalizado
- Base do front-end implementada

### 2. Planejamento
- Finalizar designs restantes
- Iniciar desenvolvimento do core
- Preparar casos de teste

### 3. Problemas
- Problema: Design de API inadequado
- Solução: Redesenhar até quarta-feira

## Próxima Reunião
- Data: 22/05/2023
- Horário: 14h-15h`
    }
  },

  dialogs: {
    clear: {
      title: 'Limpar Editor',
      message: 'Isso removerá todo o conteúdo. Confirmar?'
    },
    template: {
      title: 'Aplicar Modelo',
      message: 'O conteúdo atual será substituído. Continuar?'
    }
  },

  defaultContent: `# Bem-vindo ao Editor Markdown

Este é um editor Markdown simples com visualização em tempo real e destaque de sintaxe.

## Sintaxe Básica

### Títulos
Use # para títulos:
# Título Nível 1
## Título Nível 2
### Título Nível 3

### Ênfase
**negrito** ou __negrito__
*itálico* ou _itálico_
~~tachado~~

### Listas
Lista não ordenada:
- Item 1
- Item 2
- Item 3

Lista ordenada:
1. Primeiro item
2. Segundo item
3. Terceiro item

### Links e Imagens
[texto do link](https://exemplo.com)


### Código
Código inline: \`var exemplo = "olá";\`

### Citação
> Este é um bloco de citação.

### Tabela
| Cabeçalho 1 | Cabeçalho 2 | Cabeçalho 3 |
|-------------|-------------|-------------|
| Célula 1    | Célula 2    | Célula 3    |
| Célula 4    | Célula 5    | Célula 6    |

### Linha Horizontal
---

Comece a editar! Use a barra de ferramentas acima para inserir elementos Markdown rapidamente.`
};