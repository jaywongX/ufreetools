<template>
  <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
    <div class="mb-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
      <!-- 生成设置 -->
      <div class="space-y-4">
        <h2 class="text-lg font-semibold text-gray-800 dark:text-gray-200">{{ $t('tools.id-number-generator.settings') }}</h2>
        
        <!-- 地区选择 -->
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            {{ $t('tools.id-number-generator.region') }}
          </label>
          <div class="relative space-y-2">
            <input 
              type="text" 
              v-model="regionSearch" 
              class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary dark:bg-gray-700 dark:text-white" 
              :placeholder="$t('tools.id-number-generator.searchRegion')" 
            />
            
            <div class="flex items-center mb-2">
              <label class="inline-flex items-center">
                <input type="checkbox" v-model="multiSelectEnabled" class="form-checkbox text-primary focus:ring-primary" />
                <span class="ml-2 text-sm text-gray-700 dark:text-gray-300">{{ $t('tools.id-number-generator.multiSelect') }}</span>
              </label>
              <button 
                v-if="selectedRegions.length > 0" 
                @click="clearSelectedRegions" 
                class="ml-auto text-xs text-primary hover:text-primary-dark focus:outline-none"
              >
                {{ $t('tools.id-number-generator.clearSelection') }}
              </button>
            </div>
            
            <div class="flex flex-wrap gap-1 mb-2" v-if="selectedRegions.length > 0">
              <div 
                v-for="(regionName, index) in selectedRegionsNames" 
                :key="index" 
                class="bg-blue-100 dark:bg-blue-800/30 px-2 py-1 rounded-full text-xs text-blue-700 dark:text-blue-300 flex items-center"
              >
                <span>{{ regionName }}</span>
                <button @click="removeSelectedRegion(index)" class="ml-1 text-blue-700 dark:text-blue-300 hover:text-blue-900 dark:hover:text-blue-100 focus:outline-none">
                  &times;
                </button>
              </div>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
              <div>
                <label class="text-xs text-gray-500 dark:text-gray-400">{{ $t('tools.id-number-generator.province') }}</label>
                <select 
                  v-model="selectedProvince" 
                  class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary dark:bg-gray-700 dark:text-white"
                  size="5"
                >
                  <option value="">{{ $t('tools.id-number-generator.selectProvince') }}</option>
                  <option v-for="province in filteredProvinces" :key="province" :value="province">
                    {{ $t(`tools.id-number-generator.regions.${province}`) }}
                  </option>
                </select>
              </div>
              <div>
                <label class="text-xs text-gray-500 dark:text-gray-400">{{ $t('tools.id-number-generator.city') }}</label>
                <select 
                  v-model="selectedCity" 
                  class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary dark:bg-gray-700 dark:text-white"
                  size="5"
                  :disabled="!selectedProvince"
                >
                  <option value="">{{ $t('tools.id-number-generator.selectCity') }}</option>
                  <option v-for="[city, code] in Object.entries(filteredCities)" :key="code" :value="city">
                    {{ $t(`tools.id-number-generator.regions.${city}`) }}
                  </option>
          </select>
              </div>
            </div>
            
            <div class="mt-2">
              <label class="inline-flex items-center mb-2">
                <input type="radio" v-model="regionMode" value="random" class="form-radio text-primary focus:ring-primary" />
                <span class="ml-2 text-gray-700 dark:text-gray-300">{{ $t('tools.id-number-generator.randomRegion') }}</span>
              </label>
            </div>
          </div>
        </div>
        
        <!-- 出生日期范围 -->
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            {{ $t('tools.id-number-generator.birthDateRange') }}
          </label>
          <div class="grid grid-cols-2 gap-2">
            <div>
              <label class="text-xs text-gray-500 dark:text-gray-400">{{ $t('tools.id-number-generator.from') }}</label>
              <input type="date" v-model="startDate" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary dark:bg-gray-700 dark:text-white" />
            </div>
            <div>
              <label class="text-xs text-gray-500 dark:text-gray-400">{{ $t('tools.id-number-generator.to') }}</label>
              <input type="date" v-model="endDate" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary dark:bg-gray-700 dark:text-white" />
            </div>
          </div>
        </div>
        
        <!-- 性别选择 -->
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            {{ $t('tools.id-number-generator.gender') }}
          </label>
          <div class="flex flex-wrap space-x-4">
            <label class="inline-flex items-center mb-2">
              <input type="radio" v-model="gender" value="random" class="form-radio text-primary focus:ring-primary" />
              <span class="ml-2 text-gray-700 dark:text-gray-300">{{ $t('tools.id-number-generator.randomGender') }}</span>
            </label>
            <label class="inline-flex items-center mb-2">
              <input type="radio" v-model="gender" value="male" class="form-radio text-primary focus:ring-primary" />
              <span class="ml-2 text-gray-700 dark:text-gray-300">{{ $t('tools.id-number-generator.male') }}</span>
            </label>
            <label class="inline-flex items-center mb-2">
              <input type="radio" v-model="gender" value="female" class="form-radio text-primary focus:ring-primary" />
              <span class="ml-2 text-gray-700 dark:text-gray-300">{{ $t('tools.id-number-generator.female') }}</span>
            </label>
          </div>
        </div>
        
        <!-- 生成数量 -->
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            {{ $t('tools.id-number-generator.quantity') }}
          </label>
          <div class="flex items-center">
            <input 
              type="range" 
              v-model.number="quantity" 
              min="1" 
              max="100" 
              class="w-2/3 mr-3"
            />
            <input 
              type="number" 
              v-model.number="quantity" 
              min="1" 
              max="100" 
              class="w-1/3 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary dark:bg-gray-700 dark:text-white" 
            />
          </div>
        </div>
        
        <!-- 生成按钮 -->
        <button @click="generateIds" class="w-full bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
          {{ $t('tools.id-number-generator.generate') }}
        </button>
      </div>
      
      <!-- 生成结果 -->
      <div class="space-y-4 h-full flex flex-col">
        <h2 class="text-lg font-semibold text-gray-800 dark:text-gray-200">{{ $t('tools.id-number-generator.results') }}</h2>
        
        <div class="flex flex-wrap gap-2 mb-4" v-if="generatedIds.length > 0">
          <button 
            @click="exportData('txt')" 
            class="px-3 py-1.5 bg-blue-500 text-white rounded-md text-sm font-medium hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            {{ $t('tools.id-number-generator.exportAsTxt') }}
          </button>
          
          <button 
            @click="exportData('csv')" 
            class="px-3 py-1.5 bg-green-500 text-white rounded-md text-sm font-medium hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            {{ $t('tools.id-number-generator.exportAsCsv') }}
          </button>
          
          <button 
            @click="exportData('excel')" 
            class="px-3 py-1.5 bg-indigo-500 text-white rounded-md text-sm font-medium hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {{ $t('tools.id-number-generator.exportAsExcel') }}
          </button>
        </div>
        
        <div v-if="generatedIds.length > 0" class="bg-gray-50 dark:bg-gray-700 p-4 rounded-md flex-grow overflow-y-auto">
          <div class="flex justify-between mb-2">
            <h3 class="text-sm font-medium text-gray-700 dark:text-gray-300">{{ $t('tools.id-number-generator.generatedIds') }}</h3>
            <button @click="copyAll" class="text-sm text-primary hover:text-primary-dark focus:outline-none">
              {{ $t('tools.id-number-generator.copyAll') }}
            </button>
          </div>
          
          <div class="space-y-2">
            <div v-for="(id, index) in generatedIds" :key="index" class="flex justify-between items-center p-2 bg-white dark:bg-gray-800 rounded border border-gray-200 dark:border-gray-600">
              <span class="font-mono text-gray-800 dark:text-gray-200">{{ id }}</span>
              <button @click="copyId(id)" class="text-xs text-primary hover:text-primary-dark focus:outline-none">
                {{ $t('tools.id-number-generator.copy') }}
              </button>
            </div>
          </div>
        </div>
        
        <div v-else class="flex-grow flex items-center justify-center bg-gray-50 dark:bg-gray-700 rounded-md">
          <p class="text-center text-gray-500 dark:text-gray-400">
          {{ $t('tools.id-number-generator.noResults') }}
          </p>
        </div>
      </div>
    </div>
    
    <IdNumberGeneratorArticle />
  </div>
    <Toast ref="toastRef" />
</template>

<script setup>
import { ref, computed, onMounted, watch, onUnmounted } from 'vue';
import * as XLSX from 'xlsx';
import { useI18n } from 'vue-i18n';
import IdNumberGeneratorArticle from './IdNumberGeneratorArticle.vue'

import Toast from '../common/Toast.vue'

const toastRef = ref(null)
const { t } = useI18n();

// 地区编码数据
const regionCodes = {
  "beijing": { "beijing": "110000", "dongcheng": "110101", "xicheng": "110102", "chaoyang_bj": "110105", "fengtai": "110106", "shijingshan": "110107", "haidian": "110108", "mentougou": "110109", "fangshan": "110111", "tongzhou": "110112", "shunyi": "110113", "changping": "110114", "daxing": "110115", "huairou": "110116", "pinggu": "110117", "miyun": "110118", "yanqing": "110119" },
  "tianjin": { "tianjin": "120000", "heping": "120101", "hedong": "120102", "hexi": "120103", "nankai": "120104", "hebei_tj": "120105", "hongqiao": "120106", "dongli": "120110", "xiqing": "120111", "jinnan": "120112", "beichen": "120113", "wuqing": "120114", "baodi": "120115", "binhai": "120116", "ninghe": "120117", "jinghai": "120118", "jizhou": "120119" },
  "hebei": { "shijiazhuang": "130100", "tangshan": "130200", "qinhuangdao": "130300", "handan": "130400", "xingtai": "130500", "baoding": "130600", "zhangjiakou": "130700", "chengde": "130800", "cangzhou": "130900", "langfang": "131000", "hengshui": "131100" },
  "shanxi": { "taiyuan": "140100", "datong": "140200", "yangquan": "140300", "changzhi": "140400", "jincheng": "140500", "shuozhou": "140600", "jinzhong": "140700", "yuncheng": "140800", "xinzhou": "140900", "linfen": "141000", "lvliang": "141100" },
  "inner_mongolia": { "hohhot": "150100", "baotou": "150200", "wuhai": "150300", "chifeng": "150400", "tongliao": "150500", "ordos": "150600", "hulunbuir": "150700", "bayannur": "150800", "ulanqab": "150900", "xingan": "152200", "xilingol": "152500", "alxa": "152900" },
  "liaoning": { "shenyang": "210100", "dalian": "210200", "anshan": "210300", "fushun": "210400", "benxi": "210500", "dandong": "210600", "jinzhou": "210700", "yingkou": "210800", "fuxin": "210900", "liaoyang": "211000", "panjin": "211100", "tieling": "211200", "chaoyang_ln": "211300", "huludao": "211400" },
  "jilin": { "changchun": "220100", "jilin_city": "220200", "siping": "220300", "liaoyuan": "220400", "tonghua": "220500", "baishan": "220600", "songyuan": "220700", "baicheng": "220800", "yanbian": "222400" },
  "heilongjiang": { "harbin": "230100", "qiqihar": "230200", "jixi": "230300", "hegang": "230400", "shuangyashan": "230500", "daqing": "230600", "yichun_hlj": "230700", "jiamusi": "230800", "qitaihe": "230900", "mudanjiang": "231000", "heihe": "231100", "suihua": "231200", "daxinganling": "232700" },
  "shanghai": { "shanghai": "310000", "huangpu": "310101", "xuhui": "310104", "changning": "310105", "jingan": "310106", "putuo": "310107", "hongkou": "310109", "yangpu": "310110", "minhang": "310112", "baoshan": "310113", "jiading": "310114", "pudong": "310115", "jinshan": "310116", "songjiang": "310117", "qingpu": "310118", "fengxian": "310120", "chongming": "310151" },
  "jiangsu": { "nanjing": "320100", "wuxi": "320200", "xuzhou": "320300", "changzhou": "320400", "suzhou": "320500", "nantong": "320600", "lianyungang": "320700", "huaian": "320800", "yancheng": "320900", "yangzhou": "321000", "zhenjiang": "321100", "taizhou_js": "321200", "suqian": "321300" },
  "zhejiang": { "hangzhou": "330100", "ningbo": "330200", "wenzhou": "330300", "jiaxing": "330400", "huzhou": "330500", "shaoxing": "330600", "jinhua": "330700", "quzhou": "330800", "zhoushan": "330900", "taizhou_zj": "331000", "lishui": "331100" },
  "anhui": { "hefei": "340100", "wuhu": "340200", "bengbu": "340300", "huainan": "340400", "maanshan": "340500", "huaibei": "340600", "tongling": "340700", "anqing": "340800", "huangshan": "341000", "chuzhou": "341100", "fuyang": "341200", "suzhou_ah": "341300", "bozhou": "341600", "chizhou": "341700", "xuancheng": "341800" },
  "fujian": { "fuzhou": "350100", "xiamen": "350200", "putian": "350300", "sanming": "350400", "quanzhou": "350500", "zhangzhou": "350600", "nanping": "350700", "longyan": "350800", "ningde": "350900" },
  "jiangxi": { "nanchang": "360100", "jingdezhen": "360200", "pingxiang": "360300", "jiujiang": "360400", "xinyu": "360500", "yingtan": "360600", "ganzhou": "360700", "jian": "360800", "yichun_jx": "360900", "fuzhou_jx": "361000", "shangrao": "361100" },
  "shandong": { "jinan": "370100", "qingdao": "370200", "zibo": "370300", "zaozhuang": "370400", "dongying": "370500", "yantai": "370600", "weifang": "370700", "jining": "370800", "taian": "370900", "weihai": "371000", "rizhao": "371100", "laiwu": "371200", "linyi": "371300", "dezhou": "371400", "liaocheng": "371500", "binzhou": "371600", "heze": "371700" },
  "henan": { "zhengzhou": "410100", "kaifeng": "410200", "luoyang": "410300", "pingdingshan": "410400", "anyang": "410500", "hebi": "410600", "xinxiang": "410700", "jiaozuo": "410800", "puyang": "410900", "xuchang": "411000", "luohe": "411100", "sanmenxia": "411200", "nanyang": "411300", "shangqiu": "411400", "xinyang": "411500", "zhoukou": "411600", "zhumadian": "411700" },
  "hubei": { "wuhan": "420100", "huangshi": "420200", "shiyan": "420300", "yichang": "420500", "xiangyang": "420600", "ezhou": "420700", "jingmen": "420800", "xiaogan": "420900", "jingzhou": "421000", "huanggang": "421100", "xianning": "421200", "suizhou": "421300", "enshi": "422800" },
  "hunan": { "changsha": "430100", "zhuzhou": "430200", "xiangtan": "430300", "hengyang": "430400", "shaoyang": "430500", "yueyang": "430600", "changde": "430700", "zhangjiajie": "430800", "yiyang": "430900", "chenzhou": "431000", "yongzhou": "431100", "huaihua": "431200", "loudi": "431300", "xiangxi": "433100" },
  "guangdong": { "guangzhou": "440100", "shaoguan": "440200", "shenzhen": "440300", "zhuhai": "440400", "shantou": "440500", "foshan": "440600", "jiangmen": "440700", "zhanjiang": "440800", "maoming": "440900", "zhaoqing": "441200", "huizhou": "441300", "meizhou": "441400", "shanwei": "441500", "heyuan": "441600", "yangjiang": "441700", "qingyuan": "441800", "dongguan": "441900", "zhongshan": "442000", "chaozhou": "445100", "jieyang": "445200", "yunfu": "445300" },
  "guangxi": { "nanning": "450100", "liuzhou": "450200", "guilin": "450300", "wuzhou": "450400", "beihai": "450500", "fangchenggang": "450600", "qinzhou": "450700", "guigang": "450800", "yulin_gx": "450900", "baise": "451000", "hezhou": "451100", "hechi": "451200", "laibin": "451300", "chongzuo": "451400" },
  "hainan": { "haikou": "460100", "sanya": "460200", "sansha": "460300", "danzhou": "460400" },
  "chongqing": { "wanzhou": "500101", "fuling": "500102", "yuzhong": "500103", "dadukou": "500104", "jiangbei": "500105", "shapingba": "500106", "jiulongpo": "500107", "nanan": "500108", "beibei": "500109", "yubei": "500112", "banan": "500113", "qijiang": "500114", "dazu": "500115", "bishan": "500120", "tongliang": "500151", "tongnan": "500152", "rongchang": "500153", "kaizhou": "500154", "liangping": "500155", "wulong": "500156", "zhongxian": "500228", "fengdu": "500230", "dianjiang": "500231", "wushan": "500237", "wuxi_cq": "500238", "fengjie": "500236", "yunyang": "500235", "chengkou": "500229" },
  "sichuan": { "chengdu": "510100", "zigong": "510300", "panzhihua": "510400", "luzhou": "510500", "deyang": "510600", "mianyang": "510700", "guangyuan": "510800", "suining": "510900", "neijiang": "511000", "leshan": "511100", "nanchong": "511300", "meishan": "511400", "yibin": "511500", "guangan": "511600", "dazhou": "511700", "yaan": "511800", "bazhong": "511900", "ziyang": "512000", "aba": "513200", "ganzi": "513300", "liangshan": "513400" },
  "guizhou": { "guiyang": "520100", "liupanshui": "520200", "zunyi": "520300", "anshun": "520400", "bijie": "520500", "tongren": "520600", "qianxinan": "522300", "qiandongnan": "522600", "qiannan": "522700" },
  "yunnan": { "kunming": "530100", "qujing": "530300", "yuxi": "530400", "baoshan_yn": "530500", "zhaotong": "530600", "lijiang": "530700", "puer": "530800", "lincang": "530900", "chuxiong": "532300", "honghe": "532500", "wenshan": "532600", "xishuangbanna": "532800", "dali": "532900", "dehong": "533100", "nujiang": "533300", "diqing": "533400" },
  "tibet": { "lhasa": "540100", "shigatse": "540200", "chamdo": "540300", "nyingchi": "540400", "shannan": "540500", "nagqu": "540600", "ali": "542500" },
  "shaanxi": { "xian": "610100", "tongchuan": "610200", "baoji": "610300", "xianyang": "610400", "weinan": "610500", "yanan": "610600", "hanzhong": "610700", "yulin_sx": "610800", "ankang": "610900", "shangluo": "611000" },
  "gansu": { "lanzhou": "620100", "jiayuguan": "620200", "jinchang": "620300", "baiyin": "620400", "tianshui": "620500", "wuwei": "620600", "zhangye": "620700", "pingliang": "620800", "jiuquan": "620900", "qingyang": "621000", "dingxi": "621100", "longnan": "621200", "linxia": "622900", "gannan": "623000" },
  "qinghai": { "xining": "630100", "haidong": "630200", "haibei": "632200", "huangnan": "632300", "hainan_qh": "632500", "golog": "632600", "yushu": "632700", "haixi": "632800" },
  "ningxia": { "yinchuan": "640100", "shizuishan": "640200", "wuzhong": "640300", "guyuan": "640400", "zhongwei": "640500" },
  "xinjiang": { "urumqi": "650100", "karamay": "650200", "turpan": "650400", "hami": "650500", "changji": "652300", "bortala": "652700", "bayingolin": "652800", "aksu": "652900", "kizilsu": "653000", "kashgar": "653100", "hotan": "653200", "ili": "654000", "tacheng": "654200", "altay": "654300" }
};

// 表单数据
const regionMode = ref('random'); // 'random' or 'selected'
const selectedProvince = ref('');
const selectedCity = ref('');
const selectedRegions = ref([]); // For storing multiple selected regions
const selectedRegionsNames = ref([]); // For displaying region names
const multiSelectEnabled = ref(false);
const startDate = ref('1950-01-01');
const endDate = ref('2005-12-31');
const gender = ref('random');
const quantity = ref(5);
const regionSearch = ref('');

// 生成结果
const generatedIds = ref([]);

// 获取所有省份
const provinces = computed(() => {
  return Object.keys(regionCodes);
});

// 根据搜索过滤省份
const filteredProvinces = computed(() => {
  if (!regionSearch.value) return provinces.value;
  
  return provinces.value.filter(province => {
    const provinceName = t(`tools.id-number-generator.regions.${province}`);
    return provinceName.toLowerCase().includes(regionSearch.value.toLowerCase());
  });
});

// 根据选择的省份获取城市
const filteredCities = computed(() => {
  if (!selectedProvince.value) return {};
  
  const cities = regionCodes[selectedProvince.value] || {};
  
  if (!regionSearch.value) return cities;
  
  const filtered = {};
  for (const [city, code] of Object.entries(cities)) {
    const cityName = t(`tools.id-number-generator.regions.${city}`);
    if (cityName.toLowerCase().includes(regionSearch.value.toLowerCase())) {
      filtered[city] = code;
    }
  }
  return filtered;
});

// 选择区域
watch(selectedCity, (newValue) => {
  if (newValue && selectedProvince.value) {
    const regionCode = regionCodes[selectedProvince.value][newValue];
    const regionName = `${t(`tools.id-number-generator.regions.${selectedProvince.value}`)} - ${t(`tools.id-number-generator.regions.${newValue}`)}`;
    
    if (multiSelectEnabled.value) {
      // 多选模式：添加到已选区域列表
      if (!selectedRegions.value.includes(regionCode)) {
        selectedRegions.value.push(regionCode);
        selectedRegionsNames.value.push(regionName);
      }
    } else {
      // 单选模式：替换已选区域
      selectedRegions.value = [regionCode];
      selectedRegionsNames.value = [regionName];
      regionMode.value = 'selected';
    }
  }
});

// 清除选择的区域
function clearSelectedRegions() {
  selectedRegions.value = [];
  selectedRegionsNames.value = [];
  selectedCity.value = '';
}

// 移除特定区域
function removeSelectedRegion(index) {
  selectedRegions.value.splice(index, 1);
  selectedRegionsNames.value.splice(index, 1);
}

// 随机获取地区编码
function getRandomRegionCode() {
  if (regionMode.value === 'selected' && selectedRegions.value.length > 0) {
    // 从已选择的区域中随机选择一个
    const randomIndex = Math.floor(Math.random() * selectedRegions.value.length);
    return selectedRegions.value[randomIndex];
  }
  
  // 从所有区域编码中随机选择一个
  const provinces = Object.keys(regionCodes);
  const randomProvince = provinces[Math.floor(Math.random() * provinces.length)];
  const cities = Object.keys(regionCodes[randomProvince]);
  const randomCity = cities[Math.floor(Math.random() * cities.length)];
  return regionCodes[randomProvince][randomCity];
}

// 生成随机出生日期
function getRandomBirthDate() {
  const start = new Date(startDate.value).getTime();
  const end = new Date(endDate.value).getTime();
  const randomTimestamp = start + Math.random() * (end - start);
  const date = new Date(randomTimestamp);
  
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  
  return `${year}${month}${day}`;
}

// 生成随机序列号
function getRandomSequence() {
  // 生成三位数的随机序列号
  const sequenceNumber = Math.floor(Math.random() * 999).toString().padStart(3, '0');
  
  // 根据性别设置最后一位奇偶性
  if (gender.value !== 'random') {
    // 男性为奇数，女性为偶数
    const lastDigit = parseInt(sequenceNumber.charAt(2));
    let newLastDigit;
    
    if (gender.value === 'male') {
      // 确保是奇数
      newLastDigit = lastDigit % 2 === 0 ? lastDigit + 1 : lastDigit;
    } else {
      // 确保是偶数
      newLastDigit = lastDigit % 2 === 1 ? lastDigit + 1 : lastDigit;
      if (newLastDigit > 9) newLastDigit = 8; // 处理可能超出范围的情况
    }
    
    return sequenceNumber.substring(0, 2) + newLastDigit;
  }
  
  return sequenceNumber;
}

// 计算校验码
function calculateCheckDigit(idWithoutCheck) {
  // 计算权重因子
  const weightFactor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
  // 校验码对应值
  const checkCodeMap = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'];
  
  let sum = 0;
  for (let i = 0; i < 17; i++) {
    sum += parseInt(idWithoutCheck.charAt(i)) * weightFactor[i];
  }
  
  const mod = sum % 11;
  return checkCodeMap[mod];
}

// 生成身份证号码
function generateIds() {
  generatedIds.value = [];
  
  for (let i = 0; i < quantity.value; i++) {
    const regionCode = getRandomRegionCode();
    const birthDate = getRandomBirthDate();
    const sequence = getRandomSequence();
    
    const idWithoutCheck = `${regionCode}${birthDate}${sequence}`;
    const checkDigit = calculateCheckDigit(idWithoutCheck);
    
    generatedIds.value.push(`${idWithoutCheck}${checkDigit}`);
  }
}

// 复制单个ID
function copyId(id) {
  navigator.clipboard.writeText(id)
    .then(() => {
      toastRef.value.show($t('tools.id-number-generator.copiedToClipboard'));
    })
    .catch(err => {
      console.error('复制失败:', err);
    });
}

// 复制所有ID
function copyAll() {
  const allIds = generatedIds.value.join('\n');
  navigator.clipboard.writeText(allIds)
    .then(() => {
      toastRef.value.show($t('tools.id-number-generator.allCopiedToClipboard'));
    })
    .catch(err => {
      console.error('复制失败:', err);
    });
}

// 导出数据
function exportData(format) {
  if (generatedIds.value.length === 0) return;
  
  switch (format) {
    case 'txt':
      exportAsTxt();
      break;
    case 'csv':
      exportAsCsv();
      break;
    case 'excel':
      exportAsExcel();
      break;
  }
}

// 导出为TXT
function exportAsTxt() {
  const content = generatedIds.value.join('\n');
  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
  downloadFile(blob, 'id_numbers.txt');
}

// 导出为CSV
function exportAsCsv() {
  let content = 'ID Number\n';
  generatedIds.value.forEach(id => {
    content += id + '\n';
  });
  
  const blob = new Blob([content], { type: 'text/csv;charset=utf-8' });
  downloadFile(blob, 'id_numbers.csv');
}

// 导出为Excel
function exportAsExcel() {
  const worksheet = XLSX.utils.aoa_to_sheet([
    [$t('tools.id-number-generator.idNumber')], 
    ...generatedIds.value.map(id => [id])
  ]);
  
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'ID Numbers');
  
  // 生成Excel文件并下载
  const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
  const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
  downloadFile(blob, 'id_numbers.xlsx');
}

// 通用下载函数
function downloadFile(blob, fileName) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

// 组件挂载时
onMounted(() => {
  // 生成一组初始值
  generateIds();
});

// 监听日期输入，确保开始日期不大于结束日期
watch(startDate, (newValue) => {
  if (newValue > endDate.value) {
    endDate.value = newValue;
  }
});

watch(endDate, (newValue) => {
  if (newValue < startDate.value) {
    startDate.value = newValue;
  }
});
</script> 

<style scoped>
/* 响应式调整 */
@media (max-width: 640px) {
  .export-options-menu {
    width: 100%;
    left: 0;
    right: 0;
  }
}
</style>