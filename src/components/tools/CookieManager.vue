<template>
  <div class="flex flex-col h-full">
    <!-- 功能选项卡 -->
    <div class="mb-6 border-b dark:border-gray-700">
      <div class="flex justify-between items-center mb-4">
        <div class="flex flex-wrap -mb-px">
          <button
            v-for="tab in tabs"
            :key="tab.id"
            class="inline-block px-4 py-2 font-medium"
            :class="activeTab === tab.id ? 'border-b-2 border-blue-500 text-blue-600 dark:text-blue-400' : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'"
            @click="activeTab = tab.id"
          >
            {{ tab.label }}
          </button>
        </div>
      </div>
    </div>

    <!-- 当前Cookie列表 -->
    <div v-if="activeTab === 'current'">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-xl font-semibold">{{ t('tools.cookie-manager.currentCookies') }}</h2>
        <button
          @click="refreshCookies"
          class="px-3 py-1 bg-blue-100 text-blue-600 rounded hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-300 dark:hover:bg-blue-800"
        >
          {{ t('tools.cookie-manager.refresh') }}
        </button>
      </div>

      <div v-if="cookies.length === 0" class="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
        <p>{{ t('tools.cookie-manager.noCookies') }}</p>
      </div>

      <div v-else class="overflow-x-auto">
        <table class="min-w-full border-collapse">
          <thead>
            <tr class="bg-gray-100 dark:bg-gray-800">
              <th class="p-3 text-left">{{ t('tools.cookie-manager.cookieName') }}</th>
              <th class="p-3 text-left">{{ t('tools.cookie-manager.cookieValue') }}</th>
              <th class="p-3 text-left">{{ t('tools.cookie-manager.cookieExpires') }}</th>
              <th class="p-3 text-left">{{ t('tools.cookie-manager.actions') }}</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(cookie, index) in cookies"
              :key="index"
              class="border-t dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              <td class="p-3">{{ cookie.name }}</td>
              <td class="p-3 max-w-xs truncate">{{ cookie.value }}</td>
              <td class="p-3">{{ formatExpires(cookie.expires) }}</td>
              <td class="p-3 flex space-x-2">
                <button
                  @click="editCookie(cookie)"
                  class="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  {{ t('tools.cookie-manager.edit') }}
                </button>
                <button
                  @click="deleteCookie(cookie)"
                  class="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  {{ t('tools.cookie-manager.delete') }}
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- 创建/编辑Cookie表单 -->
    <div v-if="activeTab === 'create'">
      <h2 class="text-xl font-semibold mb-4">
        {{ editingCookie ? t('tools.cookie-manager.editCookie') : t('tools.cookie-manager.addCookie') }}
      </h2>

      <form @submit.prevent="saveCookie" class="space-y-4">
        <!-- 名称和值 -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label class="block mb-1">{{ t('tools.cookie-manager.cookieName') }} <span class="text-red-500">*</span></label>
            <input
              v-model="cookieForm.name"
              type="text"
              class="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
              :placeholder="t('tools.cookie-manager.required')"
              required
            />
          </div>
          <div>
            <label class="block mb-1">{{ t('tools.cookie-manager.cookieValue') }} <span class="text-red-500">*</span></label>
            <input
              v-model="cookieForm.value"
              type="text"
              class="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
              :placeholder="t('tools.cookie-manager.required')"
              required
            />
          </div>
        </div>

        <!-- 域名和路径 -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label class="block mb-1">
              {{ t('tools.cookie-manager.cookieDomain') }}
              <span class="text-xs text-gray-500 ml-1">({{ t('tools.cookie-manager.optional') }})</span>
            </label>
            <input
              v-model="cookieForm.domain"
              type="text"
              class="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
              :placeholder="currentHostname"
            />
            <p class="text-xs text-gray-500 mt-1">{{ t('tools.cookie-manager.domainNote') }}</p>
          </div>
          <div>
            <label class="block mb-1">
              {{ t('tools.cookie-manager.cookiePath') }}
              <span class="text-xs text-gray-500 ml-1">({{ t('tools.cookie-manager.optional') }})</span>
            </label>
            <input
              v-model="cookieForm.path"
              type="text"
              class="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
              placeholder="/"
            />
            <p class="text-xs text-gray-500 mt-1">{{ t('tools.cookie-manager.pathNote') }}</p>
          </div>
        </div>

        <!-- 过期时间 -->
        <div>
          <label class="block mb-1">
            {{ t('tools.cookie-manager.cookieExpires') }}
            <span class="text-xs text-gray-500 ml-1">({{ t('tools.cookie-manager.optional') }})</span>
          </label>
          <div class="grid grid-cols-3 gap-2">
            <div>
              <input
                v-model.number="cookieForm.expiryDays"
                type="number"
                min="0"
                class="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
              />
              <p class="text-xs text-center mt-1">{{ t('tools.cookie-manager.days') }}</p>
            </div>
            <div>
              <input
                v-model.number="cookieForm.expiryHours"
                type="number"
                min="0"
                max="23"
                class="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
              />
              <p class="text-xs text-center mt-1">{{ t('tools.cookie-manager.hours') }}</p>
            </div>
            <div>
              <input
                v-model.number="cookieForm.expiryMinutes"
                type="number"
                min="0"
                max="59"
                class="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
              />
              <p class="text-xs text-center mt-1">{{ t('tools.cookie-manager.minutes') }}</p>
            </div>
          </div>
          <p class="text-xs text-gray-500 mt-1">{{ t('tools.cookie-manager.expiresNote') }}</p>
        </div>

        <!-- 安全选项 -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label class="flex items-center">
              <input v-model="cookieForm.secure" type="checkbox" class="mr-2" />
              {{ t('tools.cookie-manager.cookieSecure') }}
            </label>
            <p class="text-xs text-gray-500 mt-1">{{ t('tools.cookie-manager.secureNote') }}</p>
          </div>
          
          <div>
            <label class="block mb-1">{{ t('tools.cookie-manager.cookieSameSite') }}</label>
            <select
              v-model="cookieForm.sameSite"
              class="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
            >
              <option value="none">{{ t('tools.cookie-manager.none') }}</option>
              <option value="lax">{{ t('tools.cookie-manager.lax') }}</option>
              <option value="strict">{{ t('tools.cookie-manager.strict') }}</option>
            </select>
            <p class="text-xs text-gray-500 mt-1">{{ t('tools.cookie-manager.sameSiteNote') }}</p>
          </div>
        </div>

        <!-- 按钮组 -->
        <div class="flex space-x-2">
          <button
            type="submit"
            class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            {{ t('tools.cookie-manager.save') }}
          </button>
          <button
            type="button"
            @click="resetForm"
            class="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            {{ t('tools.cookie-manager.cancel') }}
          </button>
        </div>
      </form>
    </div>

    <!-- 导入/导出 -->
    <div v-if="activeTab === 'import-export'">
      <h2 class="text-xl font-semibold mb-4">{{ t('tools.cookie-manager.importExport') }}</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- 导出 -->
        <div class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <h3 class="text-lg font-medium mb-3">{{ t('tools.cookie-manager.export') }}</h3>
          <div class="mb-4">
            <label class="block mb-2">{{ t('tools.cookie-manager.exportAs') }}</label>
            <div class="flex space-x-2">
              <button
                @click="exportCookies('json')"
                class="px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                {{ t('tools.cookie-manager.jsonFormat') }}
              </button>
              <button
                @click="exportCookies('text')"
                class="px-3 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              >
                {{ t('tools.cookie-manager.textFormat') }}
              </button>
            </div>
          </div>
        </div>
        
        <!-- 导入 -->
        <div class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <h3 class="text-lg font-medium mb-3">{{ t('tools.cookie-manager.import') }}</h3>
          <div class="mb-4">
            <label class="block mb-2">{{ t('tools.cookie-manager.textFormat') }}</label>
            <textarea
              v-model="importData"
              class="w-full h-40 p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
              :placeholder="t('tools.cookie-manager.importFormat')"
            ></textarea>
          </div>
          <button
            @click="importCookies"
            class="px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            {{ t('tools.cookie-manager.import') }}
          </button>
        </div>
      </div>
    </div>

    <!-- 操作提示 -->
    <div v-if="notification" class="fixed bottom-4 right-4 p-4 rounded-md shadow-lg" :class="notificationClass">
      {{ notification }}
    </div>
    
    <!-- 添加文章组件 -->
    <CookieManagerArticle />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import CookieManagerArticle from './CookieManagerArticle.vue'

const { t } = useI18n();

// 状态
const cookies = ref([]);
const activeTab = ref('current');
const editingCookie = ref(null);
const notification = ref('');
const notificationClass = ref('');
const importData = ref('');
const currentHostname = ref('');

// 表单状态
const cookieForm = ref({
  name: '',
  value: '',
  domain: '',
  path: '/',
  expiryDays: 0,
  expiryHours: 0,
  expiryMinutes: 0,
  secure: false,
  sameSite: 'lax',
});

// 可用的选项卡
const tabs = computed(() => [
  { id: 'current', label: t('tools.cookie-manager.currentCookies') },
  { id: 'create', label: t('tools.cookie-manager.createCookie') },
  { id: 'import-export', label: t('tools.cookie-manager.importExport') },
]);

// 初始化
onMounted(() => {
  // 安全地获取主机名
  currentHostname.value = typeof window !== 'undefined' ? window.location.hostname : '';
  
  // 设置安全标志默认值
  cookieForm.value.secure = typeof window !== 'undefined' && window.location.protocol === 'https:';
  
  // 刷新 cookies
  refreshCookies();
});

// 刷新Cookie列表
function refreshCookies() {
  cookies.value = [];
  const cookieStr = document.cookie;
  
  if (cookieStr) {
    const cookieParts = cookieStr.split(';');
    
    cookieParts.forEach(cookie => {
      const [name, value] = cookie.trim().split('=');
      if (name && value) {
        cookies.value.push({
          name: decodeURIComponent(name),
          value: decodeURIComponent(value),
          expires: null, // 无法直接获取过期时间
        });
      }
    });
  }
}

// 格式化过期时间
function formatExpires(expires) {
  if (!expires) return '-';
  return new Date(expires).toLocaleString();
}

// 设置Cookie
function setCookie(cookie) {
  let cookieString = `${encodeURIComponent(cookie.name)}=${encodeURIComponent(cookie.value)}`;
  
  // 添加过期时间
  if (cookie.expiryDays > 0 || cookie.expiryHours > 0 || cookie.expiryMinutes > 0) {
    const expires = new Date();
    expires.setTime(
      expires.getTime() +
      (cookie.expiryDays * 24 * 60 * 60 * 1000) +
      (cookie.expiryHours * 60 * 60 * 1000) +
      (cookie.expiryMinutes * 60 * 1000)
    );
    cookieString += `; expires=${expires.toUTCString()}`;
  }
  
  // 添加路径
  if (cookie.path) {
    cookieString += `; path=${cookie.path}`;
  }
  
  // 添加域名
  if (cookie.domain) {
    cookieString += `; domain=${cookie.domain}`;
  }
  
  // 添加安全标志
  if (cookie.secure) {
    cookieString += '; secure';
  }
  
  // 添加SameSite
  if (cookie.sameSite) {
    cookieString += `; samesite=${cookie.sameSite}`;
  }
  
  try {
    document.cookie = cookieString;
    return true;
  } catch (error) {
    console.error('设置Cookie失败:', error);
    return false;
  }
}

// 保存Cookie
function saveCookie() {
  // 表单验证
  if (!cookieForm.value.name || !cookieForm.value.value) {
    showNotification(t('tools.cookie-manager.createError'), 'error');
    return;
  }
  
  const success = setCookie(cookieForm.value);
  
  if (success) {
    showNotification(
      editingCookie.value 
        ? t('tools.cookie-manager.cookieUpdated') 
        : t('tools.cookie-manager.cookieCreated'),
      'success'
    );
    refreshCookies();
    resetForm();
    activeTab.value = 'current';
  } else {
    showNotification(
      editingCookie.value 
        ? t('tools.cookie-manager.updateError') 
        : t('tools.cookie-manager.createError'),
      'error'
    );
  }
}

// 编辑Cookie
function editCookie(cookie) {
  editingCookie.value = cookie;
  
  // 填充表单
  cookieForm.value = {
    name: cookie.name,
    value: cookie.value,
    domain: '',
    path: '/',
    expiryDays: 30, // 默认30天
    expiryHours: 0,
    expiryMinutes: 0,
    secure: typeof window !== 'undefined' && window.location.protocol === 'https:',
    sameSite: 'lax',
  };
  
  activeTab.value = 'create';
}

// 删除Cookie
function deleteCookie(cookie) {
  if (confirm(t('tools.cookie-manager.delete') + ' ' + cookie.name + '?')) {
    try {
      // 删除Cookie (设置过期时间为过去)
      document.cookie = `${encodeURIComponent(cookie.name)}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
      
      // 也尝试从根路径删除
      document.cookie = `${encodeURIComponent(cookie.name)}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=`;
      
      showNotification(t('tools.cookie-manager.cookieDeleted'), 'success');
      refreshCookies();
    } catch (error) {
      console.error('删除Cookie时出错:', error);
      showNotification(t('tools.cookie-manager.deleteError'), 'error');
    }
  }
}

// 重置表单
function resetForm() {
  editingCookie.value = null;
  cookieForm.value = {
    name: '',
    value: '',
    domain: '',
    path: '/',
    expiryDays: 0,
    expiryHours: 0,
    expiryMinutes: 0,
    secure: typeof window !== 'undefined' && window.location.protocol === 'https:',
    sameSite: 'lax',
  };
}

// 导出Cookie
function exportCookies(format) {
  if (cookies.value.length === 0) {
    showNotification(t('tools.cookie-manager.noCookies'), 'info');
    return;
  }
  
  let output = '';
  let filename = '';
  
  if (format === 'json') {
    output = JSON.stringify(cookies.value, null, 2);
    filename = 'cookies.json';
    downloadFile(output, filename, 'application/json');
  } else if (format === 'text') {
    cookies.value.forEach(cookie => {
      output += `${cookie.name}=${cookie.value}; `;
      if (cookie.expires) {
        output += `expires=${new Date(cookie.expires).toUTCString()}; `;
      }
      output += 'path=/;\n';
    });
    filename = 'cookies.txt';
    downloadFile(output, filename, 'text/plain');
  }
  
  showNotification(t('tools.cookie-manager.exportSuccess'), 'success');
}

// 导入Cookie
function importCookies() {
  if (!importData.value.trim()) {
    showNotification(t('tools.cookie-manager.invalidFormat'), 'error');
    return;
  }
  
  try {
    let cookiesToImport = [];
    const data = importData.value.trim();
    
    // 尝试解析为JSON
    if (data.startsWith('[') || data.startsWith('{')) {
      try {
        const jsonData = JSON.parse(data);
        if (Array.isArray(jsonData)) {
          cookiesToImport = jsonData;
        } else {
          cookiesToImport = [jsonData];
        }
      } catch {
        // 不是有效的JSON，尝试文本格式
      }
    }
    
    // 如果JSON解析失败，尝试文本格式
    if (cookiesToImport.length === 0) {
      const cookieStrings = data.split(/;\s*\n/);
      cookieStrings.forEach(cookieStr => {
        if (!cookieStr.trim()) return;
        
        const cookie = {
          name: '',
          value: '',
          path: '/',
          secure: false,
          sameSite: 'lax',
          expiryDays: 30,
          expiryHours: 0,
          expiryMinutes: 0,
        };
        
        const parts = cookieStr.split(/;\s*/);
        parts.forEach(part => {
          if (!part.trim()) return;
          
          if (part.includes('=')) {
            const [key, val] = part.split('=');
            if (key.trim().toLowerCase() === 'expires') {
              const expiryDate = new Date(val);
              const now = new Date();
              const diffMs = expiryDate - now;
              if (diffMs > 0) {
                const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
                const diffHours = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const diffMinutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
                
                cookie.expiryDays = diffDays;
                cookie.expiryHours = diffHours;
                cookie.expiryMinutes = diffMinutes;
              }
            } else if (key.trim().toLowerCase() === 'path') {
              cookie.path = val.trim();
            } else if (key.trim().toLowerCase() === 'domain') {
              cookie.domain = val.trim();
            } else if (key.trim().toLowerCase() === 'samesite') {
              cookie.sameSite = val.trim().toLowerCase();
            } else if (!cookie.name) {
              cookie.name = key.trim();
              cookie.value = val;
            }
          } else if (part.trim().toLowerCase() === 'secure') {
            cookie.secure = true;
          }
        });
        
        if (cookie.name) {
          cookiesToImport.push(cookie);
        }
      });
    }
    
    // 设置导入的Cookie
    let successCount = 0;
    cookiesToImport.forEach(cookie => {
      if (cookie.name && setCookie(cookie)) {
        successCount++;
      }
    });
    
    if (successCount > 0) {
      showNotification(
        t('tools.cookie-manager.importSuccess', { count: successCount }),
        'success'
      );
      refreshCookies();
      importData.value = '';
    } else {
      showNotification(t('tools.cookie-manager.importError'), 'error');
    }
  } catch (error) {
    console.error('导入Cookie时出错:', error);
    showNotification(t('tools.cookie-manager.importError'), 'error');
  }
}

// 下载文件
function downloadFile(content, filename, contentType) {
  const blob = new Blob([content], { type: contentType });
  const url = URL.createObjectURL(blob);
  
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.click();
  
  setTimeout(() => {
    URL.revokeObjectURL(url);
  }, 100);
}

// 显示通知
function showNotification(message, type) {
  notification.value = message;
  
  if (type === 'success') {
    notificationClass.value = 'bg-green-500 text-white';
  } else if (type === 'error') {
    notificationClass.value = 'bg-red-500 text-white';
  } else {
    notificationClass.value = 'bg-blue-500 text-white';
  }
  
  setTimeout(() => {
    notification.value = '';
  }, 3000);
}
</script>

<CookieManagerArticle /> 