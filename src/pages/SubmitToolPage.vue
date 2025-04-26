<template>
  <div class="max-w-2xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <!-- Header -->
      <h1 class="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">{{ $t('suggestTool.title') }}</h1>
      
      <!-- Success Message -->
      <div v-if="submitted" class="text-center py-8">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
        <h3 class="text-lg font-medium text-gray-800 dark:text-gray-100 mb-2">{{ $t('suggestTool.thankYou') }}</h3>
        <p class="text-gray-600 dark:text-gray-400 mb-6">{{ $t('suggestTool.successMessage') }}</p>
        
        <div class="flex justify-center space-x-4">
          <router-link :to="localizedRoute('/')" class="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
            {{ $t('common.backToHome') }}
          </router-link>
          
          <button @click="resetForm" class="px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark transition-colors">
            {{ $t('suggestTool.submitAnother') }}
          </button>
        </div>
      </div>
      
      <!-- Form -->
      <form v-else @submit.prevent="submitFormWithRecaptcha" class="space-y-6">
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{{ $t('suggestTool.toolName') }} *</label>
          <input 
            type="text" 
            v-model="form.toolName" 
            :placeholder="$t('suggestTool.toolNamePlaceholder')" 
            class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary dark:bg-gray-700 dark:text-white"
            maxlength="100"
            required
          />
          <div v-if="errors.toolName" class="text-red-500 text-xs mt-1">{{ errors.toolName }}</div>
        </div>
        
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{{ $t('suggestTool.email') }} *</label>
          <input 
            type="email" 
            v-model="form.email" 
            :placeholder="$t('suggestTool.emailPlaceholder')" 
            class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary dark:bg-gray-700 dark:text-white"
            maxlength="100"
            required
          />
          <div v-if="errors.email" class="text-red-500 text-xs mt-1">{{ errors.email }}</div>
        </div>
        
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{{ $t('suggestTool.description') }} *</label>
          <textarea 
            v-model="form.description" 
            :placeholder="$t('suggestTool.descriptionPlaceholder')" 
            class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary dark:bg-gray-700 dark:text-white"
            rows="6"
            maxlength="500"
            required
          ></textarea>
          <div class="text-xs text-gray-500 mt-1">{{ form.description.length }}/500</div>
          <div v-if="errors.description" class="text-red-500 text-xs mt-1">{{ errors.description }}</div>
        </div>
        
        <!-- reCAPTCHA badge notice -->
        <div class="text-xs text-gray-500">
          {{ $t('suggestTool.recaptchaDisclaimer') }}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" class="text-primary dark:text-primary-light hover:underline">
            {{ $t('suggestTool.privacyPolicy') }}
          </a> & 
          <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" class="text-primary dark:text-primary-light hover:underline">
            {{ $t('suggestTool.termsOfService') }}
          </a>
        </div>
        
        <div v-if="recaptchaError" class="p-3 bg-red-100 dark:bg-red-900 border border-red-400 dark:border-red-700 text-red-700 dark:text-red-200 rounded text-sm">
          {{ $t('suggestTool.errors.recaptchaFailed') }}
        </div>
        
        <div v-if="submitError" class="p-4 bg-red-100 dark:bg-red-900 border border-red-400 dark:border-red-700 text-red-700 dark:text-red-200 rounded">
          {{ submitError }}
        </div>
        
        <div class="flex justify-end">
          <router-link 
            :to="localizedRoute('/')" 
            class="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 mr-3"
          >
            {{ $t('common.cancel') }}
          </router-link>
          
          <button 
            type="submit" 
            class="px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark transition-colors"
            :disabled="isSubmitting"
          >
            <span v-if="isSubmitting" class="flex items-center">
              <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              {{ $t('common.submitting') }}
            </span>
            <span v-else>{{ $t('common.submit') }}</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useInternationalizedRoute } from '../composables/useInternationalizedRoute'

const { t } = useI18n()
const { localizedRoute } = useInternationalizedRoute()

const form = reactive({
  toolName: '',
  email: '',
  description: ''
})

const errors = reactive({
  toolName: '',
  email: '',
  description: ''
})

const isSubmitting = ref(false)
const submitError = ref('')
const submitted = ref(false)
const recaptchaError = ref(false)
const recaptchaLoaded = ref(false)

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Load Google reCAPTCHA v3
onMounted(() => {
  const recaptchaScript = document.createElement('script')
  const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY
  if (!siteKey) {
    console.error('Missing reCAPTCHA site key')
    recaptchaError.value = true
    return
  }
  recaptchaScript.setAttribute('src', `https://www.google.com/recaptcha/api.js?render=${siteKey}`)
  recaptchaScript.onload = () => {
    recaptchaLoaded.value = true
  }
  document.head.appendChild(recaptchaScript)
})

const validateForm = () => {
  let isValid = true
  
  // Reset errors
  errors.toolName = ''
  errors.email = ''
  errors.description = ''
  recaptchaError.value = false
  
  // Validate tool name
  if (!form.toolName.trim()) {
    errors.toolName = t('suggestTool.errors.requiredField')
    isValid = false
  } else if (form.toolName.length < 3) {
    errors.toolName = t('suggestTool.errors.toolNameTooShort')
    isValid = false
  }
  
  // Validate email
  if (!form.email.trim()) {
    errors.email = t('suggestTool.errors.requiredField')
    isValid = false
  } else if (!emailRegex.test(form.email)) {
    errors.email = t('suggestTool.errors.invalidEmail')
    isValid = false
  }
  
  // Validate description
  if (!form.description.trim()) {
    errors.description = t('suggestTool.errors.requiredField')
    isValid = false
  } else if (form.description.length < 10) {
    errors.description = t('suggestTool.errors.descriptionTooShort')
    isValid = false
  }
  
  return isValid
}

const submitFormWithRecaptcha = async () => {
  if (!validateForm()) return
  
  if (!recaptchaLoaded.value) {
    recaptchaError.value = true
    return
  }
  
  isSubmitting.value = true
  submitError.value = ''
  
  try {
    // Execute reCAPTCHA with site key
    const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY
    const token = await new Promise((resolve, reject) => {
      window.grecaptcha.ready(() => {
        window.grecaptcha.execute(siteKey, { action: 'submit_tool' })
          .then(resolve)
          .catch(reject)
      })
    })
    
    if (!token) {
      recaptchaError.value = true
      throw new Error(t('suggestTool.errors.recaptchaFailed'))
    }
    
    // Sanitize inputs to prevent XSS
    const sanitizedData = {
      toolName: form.toolName.trim(),
      email: form.email.trim(),
      description: form.description.trim(),
      recaptchaToken: token,
      timestamp: new Date().toISOString()
    }
    
    const response = await fetch('https://ufreetools-submit-tool.jaywong001011.workers.dev/suggest-tool', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(sanitizedData)
    })
    
    // 获取响应文本和JSON
    const responseText = await response.text(); 
    let result;
    
    try {
      result = JSON.parse(responseText);
    } catch (e) {
      console.error('无法解析响应JSON:', responseText);
    }
    
    if (!response.ok) {
      if (result && result.recaptchaFailed) {
        recaptchaError.value = true;
        throw new Error(t('suggestTool.errors.recaptchaFailed'));
      } else if (result && result.error) {
        throw new Error(result.error);
      } else {
        throw new Error(t('suggestTool.errors.submissionFailed'));
      }
    }
    
    submitted.value = true;
  } catch (error) {
    console.error(error);
    submitError.value = error;
  } finally {
    isSubmitting.value = false;
  }
}

const resetForm = () => {
  form.toolName = ''
  form.email = ''
  form.description = ''
  submitted.value = false
  submitError.value = ''
  recaptchaError.value = false
}
</script>
