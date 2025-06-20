<template>
  <div class="flex flex-col h-full">
    <!-- 工具栏 -->
    <div class="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-4 flex justify-between items-center flex-wrap gap-2">
      <div class="flex space-x-2">
        <button 
          @click="renderDiagram" 
          class="btn bg-primary hover:bg-primary-dark text-white"
          :disabled="isRendering"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          {{ $t('tools.flowchart-generator.renderBtn') }}
        </button>
        <button 
          @click="resetCode" 
          class="btn bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          {{ $t('tools.flowchart-generator.resetBtn') }}
        </button>
      </div>
      
      <div class="flex space-x-2">
        <div class="flex items-center space-x-2">
          <span class="text-sm text-gray-600 dark:text-gray-400">{{ $t('tools.flowchart-generator.options.theme') }}</span>
          <select 
            v-model="theme" 
            class="form-select px-3 py-1.5 text-sm rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200"
          >
            <option value="default">{{ $t('tools.flowchart-generator.themes.default') }}</option>
            <option value="forest">{{ $t('tools.flowchart-generator.themes.forest') }}</option>
            <option value="dark">{{ $t('tools.flowchart-generator.themes.dark') }}</option>
            <option value="neutral">{{ $t('tools.flowchart-generator.themes.neutral') }}</option>
            <option value="base">{{ $t('tools.flowchart-generator.themes.base') }}</option>
          </select>
        </div>
        
        <button 
          @click="downloadSVG" 
          class="btn bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200"
          :disabled="!isSvgReady"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          {{ $t('tools.flowchart-generator.output.downloadSVG') }}
        </button>
        <button 
          @click="copyToClipboard" 
          class="btn bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200"
          :disabled="!isSvgReady"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
          </svg>
          {{ $t('tools.flowchart-generator.output.copySVG') }}
        </button>
      </div>
    </div>
    
    <!-- 主内容区域 -->
    <div class="flex-grow overflow-hidden">
      <div class="grid grid-cols-1 lg:grid-cols-2 h-full divide-y lg:divide-y-0 lg:divide-x divide-gray-200 dark:divide-gray-700">
        <!-- 代码编辑区域 -->
        <div class="h-full flex flex-col">
          <div class="bg-gray-100 dark:bg-gray-800 px-4 py-2 border-b border-gray-200 dark:border-gray-700">
            <h3 class="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              {{ $t('tools.flowchart-generator.output.code') }}
            </h3>
          </div>
          <div class="flex-grow overflow-auto p-4 bg-white dark:bg-gray-800">
            <textarea
              v-model="code"
              class="w-full h-full p-3 font-mono text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
              :placeholder="$t('tools.flowchart-generator.input.placeholder')"
              spellcheck="false"
            ></textarea>
          </div>
          
          <!-- 示例按钮 -->
          <div class="bg-gray-50 dark:bg-gray-750 px-4 py-2 border-t border-gray-200 dark:border-gray-700">
            <div class="flex flex-wrap gap-2">
              <button
                v-for="example in localizedExamples"
                :key="example.nameKey"
                @click="setExample(example.code)"
                class="px-2 py-1 text-xs rounded-md bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
              >
                {{ $t(`tools.flowchart-generator.examples.${example.nameKey}`) }}
              </button>
            </div>
          </div>
        </div>
        
        <!-- 预览区域 -->
        <div class="h-full flex flex-col">
          <div class="bg-gray-100 dark:bg-gray-800 px-4 py-2 border-b border-gray-200 dark:border-gray-700">
            <h3 class="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              {{ $t('tools.flowchart-generator.output.preview') }}
            </h3>
          </div>
          
          <div class="flex-grow overflow-auto p-4 bg-white dark:bg-gray-800 relative">
            <div v-if="isRendering" class="absolute inset-0 flex items-center justify-center bg-white/80 dark:bg-gray-800/80 z-10">
              <svg class="animate-spin h-8 w-8 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </div>
            
            <div v-if="error" class="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md p-4 text-red-700 dark:text-red-300 mb-4">
              <p class="font-medium">{{ $t('tools.flowchart-generator.messages.errorTitle') }}</p>
              <pre class="mt-2 text-xs overflow-auto">{{ error }}</pre>
            </div>
            
            <div id="diagram-container" class="flex items-center justify-center min-h-full"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <!-- 添加文章部分 -->
  <FlowchartGeneratorArticle />
</template>

<script setup>
import { ref, onMounted, watch, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import mermaid from 'mermaid'
import FlowchartGeneratorArticle from './FlowchartGeneratorArticle.vue'

const { t } = useI18n()

// 状态变量
const code = ref('')
const error = ref('')
const isRendering = ref(false)
const isSvgReady = ref(false)
const theme = ref('default')

// 示例代码定义
const examples = [
  { nameKey: 'flowchart' },
  { nameKey: 'sequenceDiagram' },
  { nameKey: 'gantt' },
  { nameKey: 'stateDiagram' },
  { nameKey: 'pieChart' },
  { nameKey: 'classDiagram' }
]

// 修改示例代码部分，直接在组件中定义硬编码的示例
const exampleCodesByLocale = {
  en: {
    flowchart: `graph TD
    A[Start] --> B{Is it correct?}
    B -->|Yes| C[Correct Result]
    B -->|No| D[Incorrect Result]
    C --> E[End]
    D --> E`,
    sequenceDiagram: `sequenceDiagram
    participant Client
    participant Server
    Client->>Server: Request data
    Server-->>Client: Respond with data
    Client->>Server: Submit form
    Server-->>Client: Confirm submission`,
    gantt: `gantt
    title Project Progress Schedule
    dateFormat  YYYY-MM-DD
    section Planning Phase
    Requirement Collection           :a1, 2023-01-01, 30d
    System Design                  :after a1, 20d
    section Development Phase
    Backend Development            :2023-02-20, 45d
    Frontend Development           :2023-02-25, 40d
    section Testing Phase
    System Testing                :2023-04-05, 20d
    User Testing                  :2023-04-20, 15d
    section Deployment Phase
    Deployment                    :2023-05-05, 10d`,
    stateDiagram: `stateDiagram-v2
    [*] --> Editing
    Editing --> Reviewing: Submit for review
    Reviewing --> Rejected: Reject
    Reviewing --> Published: Approve
    Rejected --> Editing: Revise and resubmit
    Published --> [*]`,
    pieChart: `pie
    title Website Traffic Sources Distribution
    "Search Engines" : 42.7
    "Direct Access" : 28.9
    "Social Media" : 18.5
    "Other Channels" : 9.9`,
    classDiagram: `classDiagram
    class Animal {
        +String name
        +int age
        +makeSound() void
    }
    class Dog {
        +String breed
        +fetch() void
    }
    class Cat {
        +String color
        +climb() void
    }
    Animal <|-- Dog
    Animal <|-- Cat`
  },
  zh: {
    flowchart: `graph TD
    A[开始] --> B{是否正确?}
    B -->|是| C[结果正确]
    B -->|否| D[结果错误]
    C --> E[结束]
    D --> E`,
    sequenceDiagram: `sequenceDiagram
    participant 客户端
    participant 服务器
    客户端->>服务器: 请求数据
    服务器-->>客户端: 响应数据
    客户端->>服务器: 提交表单
    服务器-->>客户端: 确认提交`,
    gantt: `gantt
    title 项目进度计划
    dateFormat  YYYY-MM-DD
    section 规划阶段
    需求收集           :a1, 2023-01-01, 30d
    系统设计           :after a1, 20d
    section 开发阶段
    后端开发           :2023-02-20, 45d
    前端开发           :2023-02-25, 40d
    section 测试阶段
    系统测试           :2023-04-05, 20d
    用户测试           :2023-04-20, 15d
    section 上线阶段
    部署上线           :2023-05-05, 10d`,
    stateDiagram: `stateDiagram-v2
    [*] --> 编辑中
    编辑中 --> 审核中: 提交审核
    审核中 --> 已拒绝: 拒绝
    审核中 --> 已发布: 通过
    已拒绝 --> 编辑中: 修改后重新提交
    已发布 --> [*]`,
    pieChart: `pie
    title 网站访问来源分布
    "搜索引擎" : 42.7
    "直接访问" : 28.9
    "社交媒体" : 18.5
    "其他渠道" : 9.9`,
    classDiagram: `classDiagram
    class Animal {
        +String name
        +int age
        +makeSound() void
    }
    class Dog {
        +String breed
        +fetch() void
    }
    class Cat {
        +String color
        +climb() void
    }
    Animal <|-- Dog
    Animal <|-- Cat`
  },
  es: {
    flowchart: `graph TD
    A[Inicio] --> B{¿Es correcto?}
    B -->|Sí| C[Resultado Correcto]
    B -->|No| D[Resultado Incorrecto]
    C --> E[Fin]
    D --> E`,
    sequenceDiagram: `sequenceDiagram
    participant Cliente
    participant Servidor
    Cliente->>Servidor: Solicitar datos
    Servidor-->>Cliente: Responder con datos
    Cliente->>Servidor: Enviar formulario
    Servidor-->>Cliente: Confirmar envío`,
    gantt: `gantt
    title Cronograma de Progreso del Proyecto
    dateFormat  YYYY-MM-DD
    section Fase de Planificación
    Recopilación de Requisitos           :a1, 2023-01-01, 30d
    Diseño del Sistema                  :after a1, 20d
    section Fase de Desarrollo
    Desarrollo del Backend            :2023-02-20, 45d
    Desarrollo del Frontend           :2023-02-25, 40d
    section Fase de Pruebas
    Pruebas del Sistema                :2023-04-05, 20d
    Pruebas del Usuario               :2023-04-20, 15d
    section Fase de Implementación
    Implementación                    :2023-05-05, 10d`,
    stateDiagram: `stateDiagram-v2
    [*] --> Editando
    Editando --> Revisión: Enviar para revisión
    Revisión --> Rechazado: Rechazar
    Revisión --> Publicado: Aprobar
    Rechazado --> Editando: Revisar y reenviar
    Publicado --> [*]`,
    pieChart: `pie
    title Distribución de Fuentes de Tráfico Web
    "Motores de Búsqueda" : 42.7
    "Acceso Directo" : 28.9
    "Redes Sociales" : 18.5
    "Otros Canales" : 9.9`,
    classDiagram: `classDiagram
    class Animal {
        +String nombre
        +int edad
        +hacerSonido() void
    }
    class Perro {
        +String raza
        +buscar() void
    }
    class Gato {
        +String color
        +trepar() void
    }
    Animal <|-- Perro
    Animal <|-- Gato`
  },
  fr: {
    flowchart: `graph TD
    A[Début] --> B{Est-ce correct?}
    B -->|Oui| C[Résultat Correct]
    B -->|Non| D[Résultat Incorrect]
    C --> E[Fin]
    D --> E`,
    sequenceDiagram: `sequenceDiagram
    participant Client
    participant Serveur
    Client->>Serveur: Demande de données
    Serveur-->>Client: Réponse avec données
    Client->>Serveur: Soumission du formulaire
    Serveur-->>Client: Confirmation de soumission`,
    gantt: `gantt
    title Calendrier d'Avancement du Projet
    dateFormat  YYYY-MM-DD
    section Phase de Planification
    Collecte des Besoins           :a1, 2023-01-01, 30d
    Conception du Système          :after a1, 20d
    section Phase de Développement
    Développement Backend          :2023-02-20, 45d
    Développement Frontend         :2023-02-25, 40d
    section Phase de Test
    Test du Système                :2023-04-05, 20d
    Test Utilisateur               :2023-04-20, 15d
    section Phase de Déploiement
    Déploiement                    :2023-05-05, 10d`,
    stateDiagram: `stateDiagram-v2
    [*] --> Édition
    Édition --> Révision: Soumettre pour révision
    Révision --> Rejeté: Rejeter
    Révision --> Publié: Approuver
    Rejeté --> Édition: Réviser et resoumettre
    Publié --> [*]`,
    pieChart: `pie
    title Distribution des Sources de Trafic Web
    "Moteurs de Recherche" : 42.7
    "Accès Direct" : 28.9
    "Médias Sociaux" : 18.5
    "Autres Canaux" : 9.9`,
    classDiagram: `classDiagram
    class Animal {
        +String nom
        +int âge
        +faireBruit() void
    }
    class Chien {
        +String race
        +rapporter() void
    }
    class Chat {
        +String couleur
        +grimper() void
    }
    Animal <|-- Chien
    Animal <|-- Chat`
  },
  hi: {
    flowchart: `graph TD
    A[प्रारंभ] --> B{क्या यह सही है?}
    B -->|हां| C[सही परिणाम]
    B -->|नहीं| D[गलत परिणाम]
    C --> E[समाप्त]
    D --> E`,
    sequenceDiagram: `sequenceDiagram
    participant क्लाइंट
    participant सर्वर
    क्लाइंट->>सर्वर: डेटा अनुरोध
    सर्वर-->>क्लाइंट: डेटा के साथ प्रतिक्रिया
    क्लाइंट->>सर्वर: फॉर्म सबमिट करें
    सर्वर-->>क्लाइंट: सबमिशन की पुष्टि करें`,
    gantt: `gantt
    title परियोजना प्रगति अनुसूची
    dateFormat  YYYY-MM-DD
    section योजना चरण
    आवश्यकता संग्रह           :a1, 2023-01-01, 30d
    सिस्टम डिजाइन           :after a1, 20d
    section विकास चरण
    बैकएंड विकास           :2023-02-20, 45d
    फ्रंटएंड विकास           :2023-02-25, 40d
    section परीक्षण चरण
    सिस्टम परीक्षण           :2023-04-05, 20d
    उपयोगकर्ता परीक्षण           :2023-04-20, 15d
    section तैनाती चरण
    तैनाती           :2023-05-05, 10d`,
    stateDiagram: `stateDiagram-v2
    [*] --> संपादन
    संपादन --> समीक्षा: समीक्षा के लिए सबमिट करें
    समीक्षा --> अस्वीकृत: अस्वीकार
    समीक्षा --> प्रकाशित: स्वीकृत
    अस्वीकृत --> संपादन: संशोधित करें और पुनः सबमिट करें
    प्रकाशित --> [*]`,
    pieChart: `pie
    title वेबसाइट ट्रैफिक स्रोत वितरण
    "खोज इंजन" : 42.7
    "प्रत्यक्ष पहुंच" : 28.9
    "सोशल मीडिया" : 18.5
    "अन्य चैनल" : 9.9`,
    classDiagram: `classDiagram
    class जानवर {
        +String नाम
        +int उम्र
        +आवाज() void
    }
    class कुत्ता {
        +String नस्ल
        +लाना() void
    }
    class बिल्ली {
        +String रंग
        +चढ़ना() void
    }
    जानवर <|-- कुत्ता
    जानवर <|-- बिल्ली`
  },
  ar: {
    flowchart: `graph TD
    A[البداية] --> B{هل هذا صحيح؟}
    B -->|نعم| C[نتيجة صحيحة]
    B -->|لا| D[نتيجة خاطئة]
    C --> E[النهاية]
    D --> E`,
    sequenceDiagram: `sequenceDiagram
    participant العميل
    participant الخادم
    العميل->>الخادم: طلب البيانات
    الخادم-->>العميل: الرد بالبيانات
    العميل->>الخادم: إرسال النموذج
    الخادم-->>العميل: تأكيد الإرسال`,
    gantt: `gantt
    title جدول تقدم المشروع
    dateFormat  YYYY-MM-DD
    section مرحلة التخطيط
    جمع المتطلبات           :a1, 2023-01-01, 30d
    تصميم النظام           :after a1, 20d
    section مرحلة التطوير
    تطوير الواجهة الخلفية            :2023-02-20, 45d
    تطوير الواجهة الأمامية           :2023-02-25, 40d
    section مرحلة الاختبار
    اختبار النظام                :2023-04-05, 20d
    اختبار المستخدم                  :2023-04-20, 15d
    section مرحلة النشر
    النشر                    :2023-05-05, 10d`,
    stateDiagram: `stateDiagram-v2
    [*] --> تحرير
    تحرير --> مراجعة: إرسال للمراجعة
    مراجعة --> مرفوض: رفض
    مراجعة --> منشور: موافقة
    مرفوض --> تحرير: تعديل وإعادة الإرسال
    منشور --> [*]`,
    pieChart: `pie
    title توزيع مصادر حركة المرور للموقع
    "محركات البحث" : 42.7
    "وصول مباشر" : 28.9
    "وسائل التواصل الاجتماعي" : 18.5
    "قنوات أخرى" : 9.9`,
    classDiagram: `classDiagram
    class حيوان {
        +String اسم
        +int عمر
        +إصدارصوت() void
    }
    class كلب {
        +String سلالة
        +إحضار() void
    }
    class قطة {
        +String لون
        +تسلق() void
    }
    حيوان <|-- كلب
    حيوان <|-- قطة`
  },
  ru: {
    flowchart: `graph TD
    A[Начало] --> B{Это правильно?}
    B -->|Да| C[Правильный Результат]
    B -->|Нет| D[Неправильный Результат]
    C --> E[Конец]
    D --> E`,
    sequenceDiagram: `sequenceDiagram
    participant Клиент
    participant Сервер
    Клиент->>Сервер: Запрос данных
    Сервер-->>Клиент: Ответ с данными
    Клиент->>Сервер: Отправка формы
    Сервер-->>Клиент: Подтверждение отправки`,
    gantt: `gantt
    title График Выполнения Проекта
    dateFormat  YYYY-MM-DD
    section Фаза Планирования
    Сбор Требований           :a1, 2023-01-01, 30d
    Проектирование Системы    :after a1, 20d
    section Фаза Разработки
    Разработка Бэкенда        :2023-02-20, 45d
    Разработка Фронтенда      :2023-02-25, 40d
    section Фаза Тестирования
    Тестирование Системы      :2023-04-05, 20d
    Пользовательское Тестирование :2023-04-20, 15d
    section Фаза Внедрения
    Внедрение                 :2023-05-05, 10d`,
    stateDiagram: `stateDiagram-v2
    [*] --> Редактирование
    Редактирование --> Проверка: Отправить на проверку
    Проверка --> Отклонено: Отклонить
    Проверка --> Опубликовано: Одобрить
    Отклонено --> Редактирование: Исправить и повторно отправить
    Опубликовано --> [*]`,
    pieChart: `pie
    title Распределение Источников Трафика
    "Поисковые системы" : 42.7
    "Прямой доступ" : 28.9
    "Социальные сети" : 18.5
    "Другие каналы" : 9.9`,
    classDiagram: `classDiagram
    class Животное {
        +String имя
        +int возраст
        +издатьЗвук() void
    }
    class Собака {
        +String порода
        +принести() void
    }
    class Кошка {
        +String цвет
        +лазить() void
    }
    Животное <|-- Собака
    Животное <|-- Кошка`
  },
  // 可以添加更多语言...
};

// 替换原来的 localizedExamples 计算属性
const { locale } = useI18n();
const localizedExamples = computed(() => {
  // 使用当前语言或回退到英语
  const codesByLocale = exampleCodesByLocale[locale.value] || exampleCodesByLocale.en;

  return examples.map(example => {
    return {
      ...example,
      code: codesByLocale[example.nameKey] || ''
    };
  });
});

// 初始化 Mermaid
onMounted(() => {
  mermaid.initialize({
    startOnLoad: false,
    theme: theme.value,
    fontFamily: 'sans-serif',
    securityLevel: 'loose',
    logLevel: 'error'
  })
  
  // 设置默认代码示例
  setExample(localizedExamples.value[0].code)
})

// 监听主题变化，重新渲染图表
watch(theme, () => {
  mermaid.initialize({
    startOnLoad: false,
    theme: theme.value,
    fontFamily: 'sans-serif',
    securityLevel: 'loose'
  })
  renderDiagram()
})

// 渲染流程图
async function renderDiagram() {
  if (!code.value.trim()) {
    error.value = t('tools.flowchart-generator.messages.emptyCode')
    return
  }
  
  isRendering.value = true
  error.value = ''
  isSvgReady.value = false
  
  try {
    const container = document.getElementById('diagram-container')
    container.innerHTML = ''
    
    // 根据图表类型添加简单的布局调整
    const codeType = code.value.trim().split('\n')[0].toLowerCase()
    if (codeType.includes('gantt')) {
      container.style.height = '500px'  // 为甘特图提供更大的高度
      container.style.overflow = 'auto' // 允许滚动
    } else if (codeType.includes('classDiagram')) {
      container.style.height = '600px'  // 为类图提供更大的高度
      container.style.overflow = 'auto' // 允许滚动
    } else {
      container.style.height = ''       // 重置高度
      container.style.overflow = ''     // 重置滚动
    }
    
    // 使用Mermaid渲染图表
    const { svg } = await mermaid.render('diagram', code.value.trim())
    container.innerHTML = svg
    isSvgReady.value = true
  } catch (err) {
    error.value = err.message || t('tools.flowchart-generator.messages.renderError', { error: 'Unknown error' })
    console.error('Mermaid渲染错误:', err)
  } finally {
    isRendering.value = false
  }
}

// 设置示例代码
function setExample(exampleCode) {
  code.value = exampleCode
  renderDiagram()
}

// 重置代码
function resetCode() {
  code.value = ''
  error.value = ''
  document.getElementById('diagram-container').innerHTML = ''
  isSvgReady.value = false
}

// 下载SVG
function downloadSVG() {
  if (!isSvgReady.value) return
  
  try {
    const svgEl = document.querySelector('#diagram-container svg')
    const svgData = new XMLSerializer().serializeToString(svgEl)
    const blob = new Blob([svgData], { type: 'image/svg+xml' })
    const url = URL.createObjectURL(blob)
    
    const link = document.createElement('a')
    link.href = url
    link.download = `diagram-${new Date().getTime()}.svg`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  } catch (error) {
    console.error('下载SVG失败:', error)
  }
}

// 复制SVG到剪贴板
async function copyToClipboard() {
  if (!isSvgReady.value) return
  
  try {
    const svgEl = document.querySelector('#diagram-container svg')
    const svgData = new XMLSerializer().serializeToString(svgEl)
    
    await navigator.clipboard.writeText(svgData)
    alert(t('tools.flowchart-generator.messages.copied'))
  } catch (error) {
    console.error('复制SVG失败:', error)
    alert(t('tools.flowchart-generator.messages.copyFailed'))
  }
}
</script>

<style scoped>
.btn {
  @apply px-3 py-1.5 rounded text-sm font-medium flex items-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors duration-200;
}

/* 暗色模式下SVG样式调整 */
:deep(svg) {
  max-width: 100%;
}

/* 为了确保SVG在暗色模式下可见 */
:deep(.dark svg) {
  background-color: #1F2937;
}

/* 自定义背景 */
.dark .bg-gray-750 {
  background-color: #1c2431;
}
</style> 