<template>
  <div class="cash-app-fee-calculator">
    <div class="card bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
      <h2 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
        <span class="flex items-center">
          {{ $t('tools.cash-app-fee-calculator.title') }}
          <span class="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100">
            <svg class="w-4 h-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path d="M3 6a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V6z"></path>
            </svg>
            US
          </span>
        </span>
      </h2>
      <p class="text-gray-600 dark:text-gray-400 mb-2">{{ $t('tools.cash-app-fee-calculator.description') }}</p>
      <p class="text-xs text-gray-500 dark:text-gray-500 mb-6">{{ $t('tools.cash-app-fee-calculator.updatedDate') }}</p>
      
      <!-- Transaction Type tabs -->
      <div class="mb-6">
        <div class="flex flex-wrap border-b border-gray-200 dark:border-gray-700">
          <button 
            v-for="tab in transactionTabs" 
            :key="tab.value"
            @click="activeTab = tab.value"
            :class="[
              'px-4 py-2 text-sm font-medium -mb-px',
              activeTab === tab.value 
                ? 'border-b-2 border-primary text-primary dark:text-primary-light' 
                : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
            ]"
          >
            {{ $t(`tools.cash-app-fee-calculator.tabs.${tab.value}`) }}
          </button>
        </div>
      </div>
      
      <!-- Account Type Selection (only show for relevant transactions) -->
      <div class="mb-6" v-if="showAccountTypeSelector">
        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          {{ $t('tools.cash-app-fee-calculator.accountType.label') }}
        </label>
        <div class="flex space-x-2 sm:space-x-4">
          <button 
            @click="accountType = 'personal'"
            :class="[
              'py-2 px-4 rounded-md text-sm font-medium flex-1 transition-colors',
              accountType === 'personal' 
                ? 'bg-primary text-white' 
                : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600'
            ]"
          >
            {{ $t('tools.cash-app-fee-calculator.accountType.personal') }}
          </button>
          <button 
            @click="accountType = 'business'"
            :class="[
              'py-2 px-4 rounded-md text-sm font-medium flex-1 transition-colors',
              accountType === 'business' 
                ? 'bg-primary text-white' 
                : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600'
            ]"
          >
            {{ $t('tools.cash-app-fee-calculator.accountType.business') }}
          </button>
        </div>
      </div>
      
      <!-- Calculation Type Selection -->
      <div class="mb-6">
        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          {{ $t('tools.cash-app-fee-calculator.calculationType.label') }}
        </label>
        <div class="flex space-x-2 sm:space-x-4">
          <button 
            @click="calculationType = 'direct'"
            :class="[
              'py-2 px-4 rounded-md text-sm font-medium flex-1 transition-colors',
              calculationType === 'direct' 
                ? 'bg-primary text-white' 
                : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600'
            ]"
          >
            {{ $t('tools.cash-app-fee-calculator.calculationType.direct') }}
          </button>
          <button 
            @click="calculationType = 'inverse'"
            :class="[
              'py-2 px-4 rounded-md text-sm font-medium flex-1 transition-colors',
              calculationType === 'inverse' 
                ? 'bg-primary text-white' 
                : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600'
            ]"
          >
            {{ $t('tools.cash-app-fee-calculator.calculationType.inverse') }}
          </button>
        </div>
      </div>
      
      <!-- Transaction Amount -->
      <div class="mb-6">
        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          {{ calculationType === 'direct' 
            ? $t('tools.cash-app-fee-calculator.amount.label') 
            : $t('tools.cash-app-fee-calculator.amount.desiredLabel') }}
        </label>
        <div class="mt-1 relative rounded-md shadow-sm">
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span class="text-gray-500 sm:text-sm">$</span>
          </div>
          <input
            type="text"
            v-model="amountInput"
            @input="formatAmount"
            @blur="validateAmount"
            class="block w-full pl-7 pr-12 py-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-primary focus:border-primary text-right font-mono text-lg"
            placeholder="0.00"
            aria-describedby="amount-currency"
          />
          <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <span class="text-gray-500 sm:text-sm" id="amount-currency">USD</span>
          </div>
        </div>
        <p v-if="amountError" class="mt-2 text-sm text-red-600">
          {{ amountError }}
        </p>
      </div>
      
      <!-- Transaction-specific options -->
      <!-- Money Transfer Options -->
      <div v-if="activeTab === 'moneyTransfer'">
        <!-- Transaction Type Selection -->
        <div class="mb-6">
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            {{ $t('tools.cash-app-fee-calculator.transactionType.label') }}
          </label>
          <div class="relative">
            <select
              v-model="transactionType"
              class="block w-full py-3 pl-3 pr-10 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary text-gray-700 dark:text-gray-200 appearance-none"
            >
              <option v-for="type in availableTransactionTypes" :key="type" :value="type">
                {{ $t(`tools.cash-app-fee-calculator.transactionType.options.${type}`) }}
              </option>
            </select>
            <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
        
        <!-- Payment Source Selection -->
        <div class="mb-8" v-if="showPaymentSourceSelector">
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            {{ $t('tools.cash-app-fee-calculator.paymentSource.label') }}
          </label>
          <div class="relative">
            <select
              v-model="paymentSource"
              class="block w-full py-3 pl-3 pr-10 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary text-gray-700 dark:text-gray-200 appearance-none"
            >
              <option v-for="source in availablePaymentSources" :key="source" :value="source">
                {{ $t(`tools.cash-app-fee-calculator.paymentSource.options.${source}`) }}
              </option>
            </select>
            <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Deposit Options -->
      <div v-if="activeTab === 'deposit'">
        <div class="mb-6">
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            {{ $t('tools.cash-app-fee-calculator.depositType.label') }}
          </label>
          <div class="relative">
            <select
              v-model="depositType"
              class="block w-full py-3 pl-3 pr-10 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary text-gray-700 dark:text-gray-200 appearance-none"
            >
              <option v-for="type in depositTypes" :key="type" :value="type">
                {{ $t(`tools.cash-app-fee-calculator.depositType.options.${type}`) }}
              </option>
            </select>
            <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Bitcoin Transaction Options -->
      <div v-if="activeTab === 'bitcoin'">
        <div class="mb-6">
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            {{ $t('tools.cash-app-fee-calculator.bitcoinTransactionType.label') }}
          </label>
          <div class="relative">
            <select
              v-model="bitcoinTransactionType"
              class="block w-full py-3 pl-3 pr-10 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary text-gray-700 dark:text-gray-200 appearance-none"
            >
              <option v-for="type in bitcoinTransactionTypes" :key="type" :value="type">
                {{ $t(`tools.cash-app-fee-calculator.bitcoinTransactionType.options.${type}`) }}
              </option>
            </select>
            <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Stock Transaction Options -->
      <div v-if="activeTab === 'stocks'">
        <div class="mb-6">
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            {{ $t('tools.cash-app-fee-calculator.stockTransactionType.label') }}
          </label>
          <div class="relative">
            <select
              v-model="stockTransactionType"
              class="block w-full py-3 pl-3 pr-10 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary text-gray-700 dark:text-gray-200 appearance-none"
            >
              <option v-for="type in stockTransactionTypes" :key="type" :value="type">
                {{ $t(`tools.cash-app-fee-calculator.stockTransactionType.options.${type}`) }}
              </option>
            </select>
            <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Cash In Options -->
      <div v-if="activeTab === 'cashIn'">
        <div class="mb-6">
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            {{ $t('tools.cash-app-fee-calculator.cashInLocation.label') }}
          </label>
          <div class="relative">
            <select
              v-model="cashInLocation"
              class="block w-full py-3 pl-3 pr-10 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary text-gray-700 dark:text-gray-200 appearance-none"
            >
              <option v-for="location in cashInLocations" :key="location" :value="location">
                {{ $t(`tools.cash-app-fee-calculator.cashInLocation.options.${location}`) }}
              </option>
            </select>
            <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      <!-- International Transaction Options -->
      <div v-if="activeTab === 'international'">
        <div class="mb-6">
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            {{ $t('tools.cash-app-fee-calculator.internationalType.label') }}
          </label>
          <div class="relative">
            <select
              v-model="internationalType"
              class="block w-full py-3 pl-3 pr-10 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary text-gray-700 dark:text-gray-200 appearance-none"
            >
              <option v-for="type in internationalTypes" :key="type" :value="type">
                {{ $t(`tools.cash-app-fee-calculator.internationalType.options.${type}`) }}
              </option>
            </select>
            <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      <!-- ATM提款选项 -->
      <div v-if="activeTab === 'atm'">
        <div class="mb-6">
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            {{ $t('tools.cash-app-fee-calculator.atmType.label') }}
          </label>
          <div class="relative">
            <select
              v-model="atmType"
              class="block w-full py-3 pl-3 pr-10 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary text-gray-700 dark:text-gray-200 appearance-none"
            >
              <option v-for="type in atmTypes" :key="type" :value="type">
                {{ $t(`tools.cash-app-fee-calculator.atmType.options.${type}`) }}
              </option>
            </select>
            <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
        
        <div class="mb-6" v-if="atmType === 'outOfNetwork'">
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            {{ $t('tools.cash-app-fee-calculator.additionalAtmFee.label') }}
          </label>
          <div class="mt-1 relative rounded-md shadow-sm">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span class="text-gray-500 sm:text-sm">$</span>
            </div>
            <input
              type="text"
              v-model="additionalAtmFeeInput"
              class="block w-full pl-7 pr-12 py-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-primary focus:border-primary text-right font-mono text-lg"
              placeholder="0.00"
            />
            <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <span class="text-gray-500 sm:text-sm">USD</span>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Calculation Button -->
      <div class="mb-6">
        <button
          @click="calculateFee"
          class="w-full py-3 px-4 bg-primary text-white font-medium rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
        >
          {{ $t('tools.cash-app-fee-calculator.calculateButton') }}
        </button>
      </div>
    </div>
    
    <!-- Results Section -->
    <div v-if="showResults" class="card bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <h3 class="text-lg font-medium text-gray-900 dark:text-gray-100 mb-4">
        {{ $t('tools.cash-app-fee-calculator.results.title') }}
      </h3>
      
      <div class="space-y-4">
        <!-- 金额信息 -->
        <div class="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
          <p class="text-sm text-gray-500 dark:text-gray-400">
            {{ calculationType === 'direct' 
              ? $t('tools.cash-app-fee-calculator.results.amountInput') 
              : $t('tools.cash-app-fee-calculator.results.desiredAmount') }}
          </p>
          <p class="text-lg font-semibold text-gray-900 dark:text-gray-100">${{ formatCurrency(amount) }}</p>
        </div>
        
        <!-- 费用信息 -->
        <div class="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
          <p class="text-sm text-gray-500 dark:text-gray-400">
            {{ $t('tools.cash-app-fee-calculator.results.fee') }}
          </p>
          <div class="flex items-center justify-between">
            <p class="text-lg font-semibold text-gray-900 dark:text-gray-100">
              ${{ calculationType === 'direct' ? formatCurrency(calculatedFee) : formatCurrency(inverseFee) }}
            </p>
            <span class="bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs" v-if="showFeePercentage">
              {{ feePercentage }}%
            </span>
          </div>
        </div>
        
        <!-- 最终金额/发送金额 -->
        <div class="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
          <p class="text-sm text-gray-500 dark:text-gray-400">
            {{ calculationType === 'direct'
              ? (activeTab === 'moneyTransfer' && transactionType === 'receive' 
                  ? $t('tools.cash-app-fee-calculator.results.amountReceived')
                  : $t('tools.cash-app-fee-calculator.results.finalAmount'))
              : $t('tools.cash-app-fee-calculator.results.amountToSend') }}
          </p>
          <p class="text-xl font-bold text-green-600 dark:text-green-400">
            ${{ calculationType === 'direct' ? formatCurrency(finalAmount) : formatCurrency(inverseTotal) }}
          </p>
        </div>
        
        <!-- 注释信息 -->
        <div v-if="resultNote" class="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
          <p class="text-sm text-gray-700 dark:text-gray-300">
            <span class="font-medium text-blue-600 dark:text-blue-400">{{ $t('tools.cash-app-fee-calculator.results.note') }}: </span>
            {{ resultNote }}
          </p>
        </div>
      </div>
    </div>
    
    <!-- Fee Information -->
    <div class="mt-8 text-sm text-gray-600 dark:text-gray-400">
      <h4 class="font-medium text-gray-800 dark:text-gray-200 mb-2">{{ $t('tools.cash-app-fee-calculator.feeInfo.title') }}</h4>
      <ul class="list-disc pl-5 space-y-1">
        <li>{{ $t('tools.cash-app-fee-calculator.feeInfo.personal.receiving') }}</li>
        <li>{{ $t('tools.cash-app-fee-calculator.feeInfo.personal.sendingCredit') }}</li>
        <li>{{ $t('tools.cash-app-fee-calculator.feeInfo.personal.sendingOther') }}</li>
        <li>{{ $t('tools.cash-app-fee-calculator.feeInfo.personal.standardDeposit') }}</li>
        <li>{{ $t('tools.cash-app-fee-calculator.feeInfo.personal.instantDeposit') }}</li>
        <li>{{ $t('tools.cash-app-fee-calculator.feeInfo.business.receiving') }}</li>
        <li>{{ $t('tools.cash-app-fee-calculator.feeInfo.bitcoin') }}</li>
        <li>{{ $t('tools.cash-app-fee-calculator.feeInfo.stocks') }}</li>
        <li>{{ $t('tools.cash-app-fee-calculator.feeInfo.cashIn') }}</li>
        <li>{{ $t('tools.cash-app-fee-calculator.feeInfo.international') }}</li>
      </ul>
    </div>
    
    <!-- 文章部分 -->
    <div class="mt-10 pt-6 border-t dark:border-gray-700">
      <CashAppFeeCalculatorArticle />
    </div>
  </div>
</template>

<script>
import CashAppFeeCalculatorArticle from './CashAppFeeCalculatorArticle.vue'

export default {
  name: 'CashAppFeeCalculator',
  components: {
    CashAppFeeCalculatorArticle
  },
  data() {
    return {
      activeTab: 'moneyTransfer',
      accountType: 'personal',
      amountInput: '',
      amount: 0,
      transactionType: 'send',
      paymentSource: 'credit',
      depositType: 'standard',
      bitcoinTransactionType: 'buy',
      stockTransactionType: 'buy',
      cashInLocation: 'retail',
      internationalType: 'send',
      calculatedFee: 0,
      finalAmount: 0,
      feePercentage: 0,
      amountError: '',
      showResults: false,
      resultNote: '',
      calculationType: 'direct',
      inverseTotal: 0,
      inverseFee: 0,
      transactionTabs: [
        { value: 'moneyTransfer', },
        { value: 'deposit' },
        { value: 'bitcoin' },
        { value: 'stocks' },
        { value: 'cashIn' },
        { value: 'international' },
        { value: 'atm' }
      ],
      depositTypes: ['standard', 'instant'],
      bitcoinTransactionTypes: ['buy', 'sell', 'send'],
      stockTransactionTypes: ['buy', 'sell'],
      cashInLocations: ['retail', 'other'],
      internationalTypes: ['send', 'receive', 'convert'],
      atmType: 'inNetwork',
      additionalAtmFeeInput: '0.00',
      additionalAtmFee: 0,
      atmTypes: ['inNetwork', 'outOfNetwork']
    };
  },
  computed: {
    availableTransactionTypes() {
      if (this.accountType === 'personal') {
        return ['send', 'receive'];
      } else {
        return ['send', 'receive'];
      }
    },
    availablePaymentSources() {
      if (this.transactionType === 'send') {
        return ['credit', 'debit', 'bank', 'balance'];
      }
      return [];
    },
    showPaymentSourceSelector() {
      return this.transactionType === 'send';
    },
    showAccountTypeSelector() {
      return this.activeTab === 'moneyTransfer';
    },
    showFeePercentage() {
      return this.feePercentage > 0;
    }
  },
  methods: {
    formatAmount() {
      // Remove non-numeric characters except dots
      this.amountInput = this.amountInput.replace(/[^\d.]/g, '');
      
      // Ensure only one decimal point
      const parts = this.amountInput.split('.');
      if (parts.length > 2) {
        this.amountInput = parts[0] + '.' + parts.slice(1).join('');
      }
      
      // Limit to 2 decimal places
      if (parts.length > 1 && parts[1].length > 2) {
        this.amountInput = parts[0] + '.' + parts[1].substring(0, 2);
      }
    },
    
    validateAmount() {
      this.amountError = '';
      
      if (!this.amountInput) {
        this.amountError = this.$t('tools.cash-app-fee-calculator.errors.amountRequired');
        return false;
      }
      
      const numAmount = parseFloat(this.amountInput);
      if (isNaN(numAmount)) {
        this.amountError = this.$t('tools.cash-app-fee-calculator.errors.invalidAmount');
        return false;
      }
      
      if (numAmount <= 0) {
        this.amountError = this.$t('tools.cash-app-fee-calculator.errors.positiveAmount');
        return false;
      }
      
      if (numAmount > 999999) {
        this.amountError = this.$t('tools.cash-app-fee-calculator.errors.amountTooLarge');
        return false;
      }
      
      this.amount = numAmount;
      return true;
    },
    
    calculateFee() {
      if (!this.validateAmount()) {
        return;
      }
      
      this.resultNote = '';
      
      // Calculate fee based on transaction type, payment source, and account type
      if (this.activeTab === 'moneyTransfer') {
        this.calculateMoneyTransferFee();
      } else if (this.activeTab === 'deposit') {
        this.calculateDepositFee();
      } else if (this.activeTab === 'bitcoin') {
        this.calculateBitcoinFee();
      } else if (this.activeTab === 'stocks') {
        this.calculateStocksFee();
      } else if (this.activeTab === 'cashIn') {
        this.calculateCashInFee();
      } else if (this.activeTab === 'international') {
        this.calculateInternationalFee();
      } else if (this.activeTab === 'atm') {
        this.calculateAtmFee();
      }
      
      this.showResults = true;
    },
    
    calculateMoneyTransferFee() {
      let feeRate = 0;
      
      if (this.accountType === 'personal') {
        if (this.transactionType === 'receive') {
          feeRate = 0; // 0% fee for receiving on personal account
        } else if (this.transactionType === 'send') {
          if (this.paymentSource === 'credit') {
            feeRate = 3; // 3% fee for sending with credit card
          } else {
            feeRate = 0; // 0% for debit, bank, balance
          }
        }
      } else { // Business account
        if (this.transactionType === 'receive') {
          feeRate = 2.75; // 2.75% fee for receiving on business account
        } else if (this.transactionType === 'send') {
          if (this.paymentSource === 'credit') {
            feeRate = 3; // 3% fee for sending with credit card
          } else {
            feeRate = 0; // 0% for debit, bank, balance
          }
        }
      }
      
      this.feePercentage = feeRate;
      
      if (this.calculationType === 'direct') {
        this.calculatedFee = (this.amount * feeRate / 100);
        this.finalAmount = this.amount - this.calculatedFee;
      } else {
        this.inverseTotal = this.amount / (1 - feeRate/100);
        this.inverseFee = this.inverseTotal - this.amount;
      }
      
      if (this.paymentSource === 'credit' && this.transactionType === 'send') {
        this.resultNote = this.$t('tools.cash-app-fee-calculator.notes.creditCardFee');
      }
    },
    
    calculateDepositFee() {
      let feeRate = 0;
      let minFee = 0;
      let maxFee = 0;
      
      if (this.depositType === 'instant') {
        feeRate = 1.5; // 1.5% for instant deposits (average of 0.5-1.75%)
        minFee = 0.25; // $0.25 minimum
        maxFee = 9.99; // $9.99 maximum
      }
      
      let calculatedFee = (this.amount * feeRate / 100);
      
      // Apply min/max limits for instant deposits
      if (this.depositType === 'instant') {
        if (calculatedFee < minFee) calculatedFee = minFee;
        if (calculatedFee > maxFee) calculatedFee = maxFee;
      }
      
      this.feePercentage = feeRate;
      this.calculatedFee = calculatedFee;
      this.finalAmount = this.amount - calculatedFee;
      
      if (this.depositType === 'instant') {
        this.resultNote = this.$t('tools.cash-app-fee-calculator.notes.instantDepositFee');
      }
    },
    
    calculateBitcoinFee() {
      let feeRate = 0;
      let flatFee = 0;
      
      // Bitcoin fees are more complex, typically involving a spread plus network fees
      if (this.bitcoinTransactionType === 'buy') {
        feeRate = 1.75; // Approximate spread
        this.resultNote = this.$t('tools.cash-app-fee-calculator.notes.bitcoinBuyFee');
      } else if (this.bitcoinTransactionType === 'sell') {
        feeRate = 1.75; // Approximate spread
        this.resultNote = this.$t('tools.cash-app-fee-calculator.notes.bitcoinSellFee');
      } else if (this.bitcoinTransactionType === 'send') {
        flatFee = 0; // Free to send via Lightning Network
        this.resultNote = this.$t('tools.cash-app-fee-calculator.notes.bitcoinSendFee');
      }
      
      this.feePercentage = feeRate;
      
      if (this.calculationType === 'direct') {
        if (flatFee > 0) {
          this.calculatedFee = flatFee;
        } else {
          this.calculatedFee = (this.amount * feeRate / 100);
        }
        this.finalAmount = this.amount - this.calculatedFee;
      } else {
        if (flatFee > 0) {
          this.inverseFee = flatFee;
          this.inverseTotal = this.amount + flatFee;
        } else {
          this.inverseTotal = this.amount / (1 - feeRate/100);
          this.inverseFee = this.inverseTotal - this.amount;
        }
      }
    },
    
    calculateStocksFee() {
      let feeRate = 0;
      
      if (this.stockTransactionType === 'buy') {
        feeRate = 0; // Free to buy stocks
        this.resultNote = this.$t('tools.cash-app-fee-calculator.notes.stockBuyFee');
      } else if (this.stockTransactionType === 'sell') {
        feeRate = 0.5; // Small fee when selling (approximate)
        this.resultNote = this.$t('tools.cash-app-fee-calculator.notes.stockSellFee');
      }
      
      this.feePercentage = feeRate;
      
      if (this.calculationType === 'direct') {
        this.calculatedFee = (this.amount * feeRate / 100);
        this.finalAmount = this.amount - this.calculatedFee;
      } else {
        this.inverseTotal = this.amount / (1 - feeRate/100);
        this.inverseFee = this.inverseTotal - this.amount;
      }
    },
    
    calculateCashInFee() {
      if (this.calculationType === 'direct') {
        if (this.cashInLocation === 'retail') {
          // For retail cash-in, fees range from $1 to $3.50 based on amount
          if (this.amount <= 20) {
            this.calculatedFee = 0.99;
          } else if (this.amount <= 100) {
            this.calculatedFee = 1.99;
          } else {
            this.calculatedFee = 2.99;
          }
          
          this.feePercentage = (this.calculatedFee / this.amount) * 100;
          this.resultNote = this.$t('tools.cash-app-fee-calculator.notes.cashInRetailFee');
        } else {
          this.calculatedFee = 0;
          this.feePercentage = 0;
          this.resultNote = this.$t('tools.cash-app-fee-calculator.notes.cashInOtherFee');
        }
        
        this.finalAmount = this.amount - this.calculatedFee;
      } else {
        if (this.cashInLocation === 'retail') {
          // 反向计算略复杂，因为费用是固定的
          if (this.amount <= 20) {
            this.inverseFee = 0.99;
          } else if (this.amount <= 100) {
            this.inverseFee = 1.99;
          } else {
            this.inverseFee = 2.99;
          }
          
          this.feePercentage = (this.inverseFee / (this.amount + this.inverseFee)) * 100;
          this.resultNote = this.$t('tools.cash-app-fee-calculator.notes.cashInRetailFee');
        } else {
          this.inverseFee = 0;
          this.feePercentage = 0;
          this.resultNote = this.$t('tools.cash-app-fee-calculator.notes.cashInOtherFee');
        }
        
        this.inverseTotal = this.amount + this.inverseFee;
      }
    },
    
    calculateInternationalFee() {
      let feeRate = 0;
      
      if (this.internationalType === 'send' || this.internationalType === 'receive') {
        feeRate = 3; // Higher fees for international transfers
        this.resultNote = this.$t('tools.cash-app-fee-calculator.notes.internationalTransferFee');
      } else if (this.internationalType === 'convert') {
        feeRate = 2; // Currency conversion fee
        this.resultNote = this.$t('tools.cash-app-fee-calculator.notes.currencyConversionFee');
      }
      
      this.feePercentage = feeRate;
      
      if (this.calculationType === 'direct') {
        this.calculatedFee = (this.amount * feeRate / 100);
        this.finalAmount = this.amount - this.calculatedFee;
      } else {
        this.inverseTotal = this.amount / (1 - feeRate/100);
        this.inverseFee = this.inverseTotal - this.amount;
      }
    },
    
    calculateAtmFee() {
      // Cash App ATM费用固定为$2.50
      const cashAppFee = 2.50;
      this.calculatedFee = cashAppFee;
      
      // 如果是网络外ATM，可能有额外费用
      if (this.atmType === 'outOfNetwork' && this.additionalAtmFeeInput) {
        this.additionalAtmFee = parseFloat(this.additionalAtmFeeInput) || 0;
        this.calculatedFee += this.additionalAtmFee;
      }
      
      this.finalAmount = this.amount - this.calculatedFee;
      
      if (this.atmType === 'outOfNetwork') {
        this.resultNote = this.$t('tools.cash-app-fee-calculator.notes.atmOutOfNetworkFee');
      } else {
        this.resultNote = this.$t('tools.cash-app-fee-calculator.notes.atmInNetworkFee');
      }
    },
    
    formatCurrency(value) {
      return value.toFixed(2);
    }
  },
  watch: {
    activeTab() {
      this.showResults = false;
    },
    accountType() {
      // When account type changes, reset transaction type to default
      this.transactionType = 'send';
      this.paymentSource = 'credit';
      this.showResults = false;
    },
    transactionType() {
      // When transaction type changes, reset payment source if needed
      if (this.transactionType === 'send') {
        this.paymentSource = 'credit';
      }
      this.showResults = false;
    },
    calculationType() {
      this.showResults = false;
    }
  }
};
</script> 