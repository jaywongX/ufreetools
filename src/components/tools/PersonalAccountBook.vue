<template>
  <div class="personal-account-book-container">
    <!-- 工具栏 -->
    <div class="toolbar flex justify-between mb-4">
      <h2 class="text-xl font-bold">{{ $t('tools.personal-account-book.name') }}</h2>
      <div class="flex space-x-2">
        <button 
          @click="exportData" 
          class="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          {{ $t('tools.personal-account-book.ui.exportData') }}
        </button>
        <button 
          @click="importData" 
          class="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
        >
          {{ $t('tools.personal-account-book.ui.importData') }}
        </button>
      </div>
    </div>

    <!-- 主体区域 -->
    <div class="main-content grid grid-cols-1 md:grid-cols-4 gap-4">
      <!-- 左侧控制面板 -->
      <div class="control-panel md:col-span-1 bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
        <button 
          @click="addNewTransaction" 
          class="w-full mb-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          {{ $t('tools.personal-account-book.ui.addTransaction') }}
        </button>
        
        <div class="date-filter mb-4">
          <h3 class="font-medium mb-2">{{ $t('tools.personal-account-book.ui.filterByDate') }}</h3>
          <select 
            v-model="dateFilter" 
            class="w-full p-2 border rounded bg-white dark:bg-gray-700"
          >
            <option value="today">{{ $t('tools.personal-account-book.ui.today') }}</option>
            <option value="thisWeek">{{ $t('tools.personal-account-book.ui.thisWeek') }}</option>
            <option value="thisMonth">{{ $t('tools.personal-account-book.ui.thisMonth') }}</option>
            <option value="thisYear">{{ $t('tools.personal-account-book.ui.thisYear') }}</option>
            <option value="custom">{{ $t('tools.personal-account-book.ui.custom') }}</option>
          </select>
          
          <div v-if="dateFilter === 'custom'" class="mt-2 space-y-2">
            <div>
              <label class="block text-sm">{{ $t('tools.personal-account-book.ui.from') }}</label>
              <input 
                type="date" 
                v-model="customDateRange.from" 
                class="w-full p-2 border rounded"
              >
            </div>
            <div>
              <label class="block text-sm">{{ $t('tools.personal-account-book.ui.to') }}</label>
              <input 
                type="date" 
                v-model="customDateRange.to" 
                class="w-full p-2 border rounded"
              >
            </div>
          </div>
        </div>
        
        <div class="category-filter mb-4">
          <h3 class="font-medium mb-2">{{ $t('tools.personal-account-book.ui.category') }}</h3>
          <select 
            v-model="categoryFilter" 
            class="w-full p-2 border rounded bg-white dark:bg-gray-700"
          >
            <option value="all">{{ $t('tools.personal-account-book.ui.allCategories') }}</option>
            <optgroup :label="$t('tools.personal-account-book.ui.income')">
              <option key="income-salary" value="income-salary">
              {{ $t('tools.personal-account-book.categories.income.salary') }}
              </option>
              <option key="income-freelance" value="income-freelance">
              {{ $t('tools.personal-account-book.categories.income.freelance') }}
              </option>
              <option key="income-investments" value="income-investments">
              {{ $t('tools.personal-account-book.categories.income.investments') }}
              </option>
              <option key="income-gifts" value="income-gifts">
              {{ $t('tools.personal-account-book.categories.income.gifts') }}
              </option>
              <option key="income-refunds" value="income-refunds">
              {{ $t('tools.personal-account-book.categories.income.refunds') }}
              </option>
              <option key="income-other" value="income-other">
              {{ $t('tools.personal-account-book.categories.income.other') }}
              </option>
            </optgroup>
            
            <optgroup :label="$t('tools.personal-account-book.ui.expense')">
              <option key="expense-food" value="expense-food">{{ $t('tools.personal-account-book.categories.expense.food') }}
              </option>
              <option key="expense-groceries" value="expense-groceries">{{ $t('tools.personal-account-book.categories.expense.groceries') }}
              </option>
              <option key="expense-rent" value="expense-rent">{{ $t('tools.personal-account-book.categories.expense.rent') }}
              </option>
              <option key="expense-utilities" value="expense-utilities">{{ $t('tools.personal-account-book.categories.expense.utilities') }}
              </option>
              <option key="expense-transportation" value="expense-transportation">{{ $t('tools.personal-account-book.categories.expense.transportation') }}
              </option>
              <option key="expense-entertainment" value="expense-entertainment">{{ $t('tools.personal-account-book.categories.expense.entertainment') }}
              </option>
              <option key="expense-shopping" value="expense-shopping">{{ $t('tools.personal-account-book.categories.expense.shopping') }}
              </option>
              <option key="expense-health" value="expense-health">{{ $t('tools.personal-account-book.categories.expense.health') }}
              </option>
              <option key="expense-education" value="expense-education">{{ $t('tools.personal-account-book.categories.expense.education') }}
              </option>
              <option key="expense-personal" value="expense-personal">{{ $t('tools.personal-account-book.categories.expense.personal') }}
              </option>
              <option key="expense-travel" value="expense-travel">{{ $t('tools.personal-account-book.categories.expense.travel') }}
              </option>
              <option key="expense-insurance" value="expense-insurance">{{ $t('tools.personal-account-book.categories.expense.insurance') }}
              </option>
              <option key="expense-taxes" value="expense-taxes">{{ $t('tools.personal-account-book.categories.expense.taxes') }}
              </option>
              <option key="expense-debt" value="expense-debt">{{ $t('tools.personal-account-book.categories.expense.debt') }}
              </option>
              <option key="expense-subscription" value="expense-subscription">{{ $t('tools.personal-account-book.categories.expense.subscription') }}
              </option>
              <option key="expense-charity" value="expense-charity">{{ $t('tools.personal-account-book.categories.expense.charity') }}
              </option>
              <option key="expense-business" value="expense-business">{{ $t('tools.personal-account-book.categories.expense.business') }}
              </option>
              <option key="expense-other" value="expense-other">{{ $t('tools.personal-account-book.categories.expense.other') }}
              </option>
            </optgroup>
            
            <optgroup :label="$t('tools.personal-account-book.ui.transfer')">
              <option key="transfer-bank_transfer" value="transfer-bank_transfer">{{ $t('tools.personal-account-book.categories.transfer.bank_transfer') }}
              </option>
              <option key="transfer-savings" value="transfer-savings">{{ $t('tools.personal-account-book.categories.transfer.savings') }}
              </option>
              <option key="transfer-investment" value="transfer-investment">{{ $t('tools.personal-account-book.categories.transfer.investment') }}
              </option>
              <option key="transfer-debt_payment" value="transfer-debt_payment">{{ $t('tools.personal-account-book.categories.transfer.debt_payment') }}
              </option>
              <option key="transfer-other" value="transfer-other">{{ $t('tools.personal-account-book.categories.transfer.other') }}
              </option>
            </optgroup>
          </select>
        </div>
        
        <div class="budget-section mb-4">
          <h3 class="font-medium mb-2">{{ $t('tools.personal-account-book.ui.budget') }}</h3>
          <button 
            @click="showBudgetModal = true" 
            class="w-full py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
          >
            {{ $t('tools.personal-account-book.ui.setBudget') }}
          </button>
        </div>
        
        <!-- 清空交易记录按钮 -->
        <div class="clear-transactions-section">
          <button 
            @click="clearTransactionsConfirm" 
            class="w-full py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            {{ $t('tools.personal-account-book.ui.clearTransactions') || '清空交易记录' }}
          </button>
        </div>
      </div>

      <!-- 中间交易列表 -->
      <div class="transactions-panel md:col-span-2 bg-white dark:bg-gray-800 p-4 rounded-lg">
        <div class="transactions-header flex justify-between items-center mb-4">
          <h2 class="text-lg font-semibold">{{ $t('tools.personal-account-book.ui.transactions') }}</h2>
          <div class="search-box">
            <input 
              type="text" 
              v-model="searchQuery" 
              :placeholder="$t('tools.personal-account-book.ui.search')" 
              class="px-3 py-1 border rounded"
            >
          </div>
        </div>
        
        <div class="transactions-list space-y-2">
          <div 
            v-if="filteredTransactions.length === 0" 
            class="text-center py-8 text-gray-500"
          >
            {{ $t('tools.personal-account-book.ui.noTransactions') }}
          </div>
          
          <div 
            v-for="transaction in filteredTransactions" 
            :key="transaction.id" 
            class="transaction-item p-3 border rounded hover:bg-gray-50 dark:hover:bg-gray-700 flex justify-between items-center"
            @click="editTransaction(transaction)"
          >
            <div class="transaction-info">
              <div class="flex items-center">
                <span 
                  class="transaction-type-indicator w-3 h-3 rounded-full mr-2"
                  :class="{
                    'bg-green-500': transaction.type === 'income',
                    'bg-red-500': transaction.type === 'expense',
                    'bg-blue-500': transaction.type === 'transfer'
                  }"
                ></span>
                <span class="font-medium">{{ transaction.description || getCategoryName(transaction) }}</span>
              </div>
              <div class="text-sm text-gray-500">
                {{ formatDate(transaction.date) }} · {{ getCategoryName(transaction) }}
              </div>
            </div>
            <div 
              class="transaction-amount font-medium"
              :class="{
                'text-green-600': transaction.type === 'income',
                'text-red-600': transaction.type === 'expense',
                'text-blue-600': transaction.type === 'transfer'
              }"
            >
              {{ transaction.type === 'income' ? '+' : transaction.type === 'expense' ? '-' : '' }}
              {{ formatCurrency(transaction.amount) }}
            </div>
          </div>
        </div>
      </div>

      <!-- 右侧数据分析 -->
      <div class="analytics-panel md:col-span-1 bg-white dark:bg-gray-800 p-4 rounded-lg">
        <h2 class="text-lg font-semibold mb-4">{{ $t('tools.personal-account-book.ui.overview') }}</h2>
        
        <div class="summary-cards grid grid-cols-2 gap-2 mb-4">
          <div class="summary-card p-3 bg-green-50 dark:bg-green-900 rounded">
            <div class="text-sm text-green-700 dark:text-green-300">{{ $t('tools.personal-account-book.ui.totalIncome') }}</div>
            <div class="text-lg font-bold text-green-700 dark:text-green-300">{{ formatCurrency(totalIncome) }}</div>
          </div>
          
          <div class="summary-card p-3 bg-red-50 dark:bg-red-900 rounded">
            <div class="text-sm text-red-700 dark:text-red-300">{{ $t('tools.personal-account-book.ui.totalExpense') }}</div>
            <div class="text-lg font-bold text-red-700 dark:text-red-300">{{ formatCurrency(totalExpense) }}</div>
          </div>
          
          <div class="summary-card p-3 bg-blue-50 dark:bg-blue-900 rounded">
            <div class="text-sm text-blue-700 dark:text-blue-300">{{ $t('tools.personal-account-book.ui.balance') }}</div>
            <div class="text-lg font-bold text-blue-700 dark:text-blue-300">{{ formatCurrency(totalIncome - totalExpense) }}</div>
          </div>
          
          <div class="summary-card p-3 bg-purple-50 dark:bg-purple-900 rounded">
            <div class="text-sm text-purple-700 dark:text-purple-300">{{ $t('tools.personal-account-book.ui.budgetUsage') }}</div>
            <div class="text-lg font-bold text-purple-700 dark:text-purple-300">{{ budgetUsagePercentage }}%</div>
          </div>
        </div>
        
        <div class="chart-wrapper mt-6">
          <h3 class="text-md font-medium mb-2">{{ $t('tools.personal-account-book.charts.incomeVsExpense') }}</h3>
          <div class="income-expense-chart p-4 bg-gray-50 dark:bg-gray-700 rounded" style="height: 250px;">
            <div class="flex h-full items-end justify-around">
              <!-- 收入柱状图 -->
              <div class="bar-container flex flex-col items-center">
                <div class="bar-value mb-2 font-medium">{{ formatCurrency(totalIncomeForChart) }}</div>
                <div 
                  class="bar w-24 bg-green-400 dark:bg-green-500 rounded-t-md transition-all duration-500"
                  :style="{ height: incomeBarHeight + 'px' }"
                ></div>
                <div class="bar-label mt-2 text-sm">{{ $t('tools.personal-account-book.ui.income') }}</div>
              </div>
              
              <!-- 支出柱状图 -->
              <div class="bar-container flex flex-col items-center">
                <div class="bar-value mb-2 font-medium">{{ formatCurrency(totalExpenseForChart) }}</div>
                <div 
                  class="bar w-24 bg-red-400 dark:bg-red-500 rounded-t-md transition-all duration-500"
                  :style="{ height: expenseBarHeight + 'px' }"
                ></div>
                <div class="bar-label mt-2 text-sm">{{ $t('tools.personal-account-book.ui.expense') }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 添加/编辑交易模态框 -->
    <div v-if="showAddTransactionModal" class="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="modal-content bg-white dark:bg-gray-800 p-6 rounded-lg w-full max-w-md">
        <h2 class="text-lg font-semibold mb-4">
          {{ editingTransaction ? $t('tools.personal-account-book.ui.editTransaction') : $t('tools.personal-account-book.ui.addTransaction') }}
        </h2>
        
        <div class="transaction-form space-y-4">
          <!-- Type -->
          <div class="form-group">
            <label class="block text-sm font-medium mb-1">{{ $t('tools.personal-account-book.ui.type') }}</label>
            <div class="flex space-x-2">
              <button 
                @click="currentTransaction.type = 'income'" 
                class="flex-1 py-2 rounded"
                :class="currentTransaction.type === 'income' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700'"
              >
                {{ $t('tools.personal-account-book.ui.income') }}
              </button>
              <button 
                @click="currentTransaction.type = 'expense'" 
                class="flex-1 py-2 rounded"
                :class="currentTransaction.type === 'expense' ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-700'"
              >
                {{ $t('tools.personal-account-book.ui.expense') }}
              </button>
              <button 
                @click="currentTransaction.type = 'transfer'" 
                class="flex-1 py-2 rounded"
                :class="currentTransaction.type === 'transfer' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'"
              >
                {{ $t('tools.personal-account-book.ui.transfer') }}
              </button>
            </div>
          </div>
          
          <!-- Amount -->
          <div class="form-group">
            <label class="block text-sm font-medium mb-1">{{ $t('tools.personal-account-book.ui.amount') }}</label>
            <input 
              type="number" 
              v-model="currentTransaction.amount" 
              class="w-full p-2 border rounded"
              min="0"
              step="0.01"
            >
          </div>
          
          <!-- Date -->
          <div class="form-group">
            <label class="block text-sm font-medium mb-1">{{ $t('tools.personal-account-book.ui.date') }}</label>
            <input 
              type="date" 
              v-model="currentTransaction.date" 
              class="w-full p-2 border rounded"
            >
          </div>
          
          <!-- Category -->
          <div class="form-group">
            <label class="block text-sm font-medium mb-1">{{ $t('tools.personal-account-book.ui.category') }}</label>
            <select 
              v-model="currentTransaction.category" 
              class="w-full p-2 border rounded"
            >
              <!-- 收入分类选项 -->
              <option v-if="currentTransaction.type === 'income'" 
                value="salary">{{ $t('tools.personal-account-book.categories.income.salary') }}
              </option>
              <option v-if="currentTransaction.type === 'income'" 
                value="freelance">{{ $t('tools.personal-account-book.categories.income.freelance') }}
              </option>
              <option v-if="currentTransaction.type === 'income'" 
                value="investments">{{ $t('tools.personal-account-book.categories.income.investments') }}
              </option>
              <option v-if="currentTransaction.type === 'income'" 
                value="gifts">{{ $t('tools.personal-account-book.categories.income.gifts') }}
              </option>
              <option v-if="currentTransaction.type === 'income'" 
                value="refunds">{{ $t('tools.personal-account-book.categories.income.refunds') }}
              </option>
              <option v-if="currentTransaction.type === 'income'" 
                value="other">{{ $t('tools.personal-account-book.categories.income.other') }}
              </option>

              <!-- 支出分类选项 -->
              <option v-if="currentTransaction.type === 'expense'" 
                value="food">{{ $t('tools.personal-account-book.categories.expense.food') }}
              </option>
              <option v-if="currentTransaction.type === 'expense'" 
                value="groceries">{{ $t('tools.personal-account-book.categories.expense.groceries') }}
              </option>
              <option v-if="currentTransaction.type === 'expense'" 
                value="rent">{{ $t('tools.personal-account-book.categories.expense.rent') }}
              </option>
              <option v-if="currentTransaction.type === 'expense'" 
                value="utilities">{{ $t('tools.personal-account-book.categories.expense.utilities') }}
              </option>
              <option v-if="currentTransaction.type === 'expense'" 
                value="transportation">{{ $t('tools.personal-account-book.categories.expense.transportation') }}
              </option>
              <option v-if="currentTransaction.type === 'expense'" 
                value="entertainment">{{ $t('tools.personal-account-book.categories.expense.entertainment') }}
              </option>
              <option v-if="currentTransaction.type === 'expense'" 
                value="shopping">{{ $t('tools.personal-account-book.categories.expense.shopping') }}
              </option>
              <option v-if="currentTransaction.type === 'expense'" 
                value="health">{{ $t('tools.personal-account-book.categories.expense.health') }}
              </option>
              <option v-if="currentTransaction.type === 'expense'" 
                value="education">{{ $t('tools.personal-account-book.categories.expense.education') }}
              </option>
              <option v-if="currentTransaction.type === 'expense'" 
                value="personal">{{ $t('tools.personal-account-book.categories.expense.personal') }}
              </option>
              <option v-if="currentTransaction.type === 'expense'" 
                value="travel">{{ $t('tools.personal-account-book.categories.expense.travel') }}
              </option>
              <option v-if="currentTransaction.type === 'expense'" 
                value="insurance">{{ $t('tools.personal-account-book.categories.expense.insurance') }}
              </option>
              <option v-if="currentTransaction.type === 'expense'" 
                value="taxes">{{ $t('tools.personal-account-book.categories.expense.taxes') }}
              </option>
              <option v-if="currentTransaction.type === 'expense'" 
                value="debt">{{ $t('tools.personal-account-book.categories.expense.debt') }}
              </option>
              <option v-if="currentTransaction.type === 'expense'" 
                value="subscription">{{ $t('tools.personal-account-book.categories.expense.subscription') }}
              </option>
              <option v-if="currentTransaction.type === 'expense'" 
                value="charity">{{ $t('tools.personal-account-book.categories.expense.charity') }}
              </option>
              <option v-if="currentTransaction.type === 'expense'" 
                value="business">{{ $t('tools.personal-account-book.categories.expense.business') }}
              </option>
              <option v-if="currentTransaction.type === 'expense'" 
                value="other">{{ $t('tools.personal-account-book.categories.expense.other') }}
              </option>
              
              <!-- 转账分类选项 -->
              <option v-if="currentTransaction.type === 'transfer'" 
                value="bank_transfer">{{ $t('tools.personal-account-book.categories.transfer.bank_transfer') }}
              </option>
              <option v-if="currentTransaction.type === 'transfer'" 
                value="savings">{{ $t('tools.personal-account-book.categories.transfer.savings') }}
              </option>
              <option v-if="currentTransaction.type === 'transfer'" 
                value="investment">{{ $t('tools.personal-account-book.categories.transfer.investment') }}
              </option>
              <option v-if="currentTransaction.type === 'transfer'" 
                value="debt_payment">{{ $t('tools.personal-account-book.categories.transfer.debt_payment') }}
              </option>
              <option v-if="currentTransaction.type === 'transfer'" 
                value="other">{{ $t('tools.personal-account-book.categories.transfer.other') }}
              </option>
            </select>
          </div>
          
          <!-- Description -->
          <div class="form-group">
            <label class="block text-sm font-medium mb-1">{{ $t('tools.personal-account-book.ui.description') }}</label>
            <input 
              type="text" 
              v-model="currentTransaction.description" 
              class="w-full p-2 border rounded"
            >
          </div>
          
          <div class="form-actions flex justify-between mt-6">
            <button 
              @click="showAddTransactionModal = false" 
              class="px-4 py-2 border rounded"
            >
              {{ $t('tools.personal-account-book.ui.cancel') }}
            </button>
            <div class="space-x-2">
              <button 
                v-if="editingTransaction" 
                @click="deleteTransactionConfirm" 
                class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                {{ $t('tools.personal-account-book.ui.deleteTransaction') }}
              </button>
              <button 
                @click="saveTransaction" 
                class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                {{ $t('tools.personal-account-book.ui.save') }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 预算设置模态框 -->
    <div v-if="showBudgetModal" class="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="modal-content bg-white dark:bg-gray-800 p-6 rounded-lg w-full max-w-md">
        <h2 class="text-lg font-semibold mb-4">{{ $t('tools.personal-account-book.ui.setBudget') }}</h2>
        
        <div class="budget-form space-y-4">
          <!-- Budget Amount -->
          <div class="form-group">
            <label class="block text-sm font-medium mb-1">{{ $t('tools.personal-account-book.ui.budgetLimit') }}</label>
            <input 
              type="number" 
              v-model="budget.amount" 
              class="w-full p-2 border rounded"
              min="0"
              step="0.01"
            >
          </div>
          
          <!-- Budget Period -->
          <div class="form-group">
            <label class="block text-sm font-medium mb-1">{{ $t('tools.personal-account-book.ui.budgetPeriod') }}</label>
            <select 
              v-model="budget.period" 
              class="w-full p-2 border rounded"
            >
              <option value="weekly">{{ $t('tools.personal-account-book.ui.weekly') }}</option>
              <option value="monthly">{{ $t('tools.personal-account-book.ui.monthly') }}</option>
              <option value="yearly">{{ $t('tools.personal-account-book.ui.yearly') }}</option>
            </select>
          </div>
          
          <!-- Budget Category -->
          <div class="form-group">
            <label class="block text-sm font-medium mb-1">{{ $t('tools.personal-account-book.ui.budgetCategory') }}</label>
            <select 
              v-model="budget.category" 
              class="w-full p-2 border rounded"
            >
              <option value="all">{{ $t('tools.personal-account-book.ui.allCategories') }}</option>
              
              <option key="food" value="food">{{ $t('tools.personal-account-book.categories.expense.food') }}
              </option>
              <option key="groceries" value="groceries">{{ $t('tools.personal-account-book.categories.expense.groceries') }}
              </option>
              <option key="rent" value="rent">{{ $t('tools.personal-account-book.categories.expense.rent') }}
              </option>
              <option key="utilities" value="utilities">{{ $t('tools.personal-account-book.categories.expense.utilities') }}
              </option>
              <option key="transportation" value="transportation">{{ $t('tools.personal-account-book.categories.expense.transportation') }}
              </option>
              <option key="entertainment" value="entertainment">{{ $t('tools.personal-account-book.categories.expense.entertainment') }}
              </option>
              <option key="shopping" value="shopping">{{ $t('tools.personal-account-book.categories.expense.shopping') }}
              </option>
              <option key="health" value="health">{{ $t('tools.personal-account-book.categories.expense.health') }}
              </option>
              <option key="education" value="education">{{ $t('tools.personal-account-book.categories.expense.education') }}
              </option>
              <option key="personal" value="personal">{{ $t('tools.personal-account-book.categories.expense.personal') }}
              </option>
              <option key="travel" value="travel">{{ $t('tools.personal-account-book.categories.expense.travel') }}
              </option>
              <option key="insurance" value="insurance">{{ $t('tools.personal-account-book.categories.expense.insurance') }}
              </option>
              <option key="taxes" value="taxes">{{ $t('tools.personal-account-book.categories.expense.taxes') }}
              </option>
              <option key="debt" value="debt">{{ $t('tools.personal-account-book.categories.expense.debt') }}
              </option>
              <option key="subscription" value="subscription">{{ $t('tools.personal-account-book.categories.expense.subscription') }}
              </option>
              <option key="charity" value="charity">{{ $t('tools.personal-account-book.categories.expense.charity') }}
              </option>
              <option key="business" value="business">{{ $t('tools.personal-account-book.categories.expense.business') }}
              </option>
              <option key="other" value="other">{{ $t('tools.personal-account-book.categories.expense.other') }}
              </option>
            </select>
          </div>
          
          <div class="form-actions flex justify-between mt-6">
            <button 
              @click="showBudgetModal = false" 
              class="px-4 py-2 border rounded"
            >
              {{ $t('tools.personal-account-book.ui.cancel') }}
            </button>
            <button 
              @click="saveBudget" 
              class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              {{ $t('tools.personal-account-book.ui.save') }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- 在底部添加文章部分 -->
    <PersonalAccountBookArticle />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { v4 as uuidv4 } from 'uuid';
import PersonalAccountBookArticle from './PersonalAccountBookArticle.vue';

export default defineComponent({
  name: 'PersonalAccountBook',
  components: {
    PersonalAccountBookArticle
  },
  data() {
    return {
      transactions: [],
      currentTransaction: {
        type: 'expense',
        amount: '',
        category: '',
        date: new Date().toISOString().slice(0, 10),
        note: ''
      },
      showAddTransactionModal: false,
      showBudgetModal: false,
      editingTransaction: null,
      dateFilter: 'thisMonth',
      customDateRange: {
        from: new Date().toISOString().slice(0, 10),
        to: new Date().toISOString().slice(0, 10)
      },
      categoryFilter: 'all',
      searchQuery: '',
      budget: {
        amount: 1000,
        period: 'monthly',
        category: 'all'
      }
    };
  },
  computed: {
    filteredTransactions() {
      let result = [...this.transactions];
      
      const today = new Date();
      let startDate, endDate;
      
      switch (this.dateFilter) {
        case 'today':
          startDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
          endDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
          break;
        case 'thisWeek':
          const dayOfWeek = today.getDay() || 7;
          startDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() - dayOfWeek + 1);
          endDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + (7 - dayOfWeek) + 1);
          break;
        case 'thisMonth':
          startDate = new Date(today.getFullYear(), today.getMonth(), 1);
          endDate = new Date(today.getFullYear(), today.getMonth() + 1, 0);
          break;
        case 'thisYear':
          startDate = new Date(today.getFullYear(), 0, 1);
          endDate = new Date(today.getFullYear() + 1, 0, 0);
          break;
        case 'custom':
          startDate = new Date(this.customDateRange.from);
          endDate = new Date(this.customDateRange.to);
          endDate.setDate(endDate.getDate() + 1);
          break;
      }
      
      if (startDate && endDate) {
        result = result.filter(t => {
          const transactionDate = new Date(t.date);
          return transactionDate >= startDate && transactionDate < endDate;
        });
      }
      
      if (this.categoryFilter !== 'all') {
        const [type, category] = this.categoryFilter.split('-');
        result = result.filter(t => t.type === type && t.category === category);
      }
      
      if (this.searchQuery) {
        const query = this.searchQuery.toLowerCase();
        result = result.filter(t => 
          t.description?.toLowerCase().includes(query) || 
          this.getCategoryName(t)?.toLowerCase().includes(query)
        );
      }
      
      return result.sort((a, b) => new Date(b.date) - new Date(a.date));
    },
    totalIncome() {
      return this.transactions
        .filter(t => t.type === 'income')
        .reduce((sum, t) => sum + Number(t.amount), 0);
    },
    totalExpense() {
      return this.transactions
        .filter(t => t.type === 'expense')
        .reduce((sum, t) => sum + Number(t.amount), 0);
    },
    budgetUsagePercentage() {
      if (!this.budget.amount) return 0;
      
      let relevantExpenses = this.filteredTransactions
        .filter(t => t.type === 'expense');
        
      if (this.budget.category !== 'all') {
        relevantExpenses = relevantExpenses.filter(t => t.category === this.budget.category);
      }
      
      const totalExpenseForBudget = relevantExpenses.reduce((sum, t) => sum + Number(t.amount), 0);
      const percentage = Math.round((totalExpenseForBudget / this.budget.amount) * 100);
      
      return Math.min(percentage, 100);
    },
    totalIncomeForChart() {
      return this.filteredTransactions
        .filter(t => t.type === 'income')
        .reduce((sum, t) => sum + Number(t.amount || 0), 0);
    },
    totalExpenseForChart() {
      return this.filteredTransactions
        .filter(t => t.type === 'expense')
        .reduce((sum, t) => sum + Number(Math.abs(t.amount) || 0), 0);
    },
    maxChartValue() {
      return Math.max(this.totalIncomeForChart, this.totalExpenseForChart, 1000);
    },
    incomeBarHeight() {
      // 计算收入柱状图高度，最大高度160px
      const maxHeight = 160;
      return this.totalIncomeForChart / this.maxChartValue * maxHeight;
    },
    expenseBarHeight() {
      // 计算支出柱状图高度，最大高度160px
      const maxHeight = 160;
      return this.totalExpenseForChart / this.maxChartValue * maxHeight;
    }
  },
  mounted() {
    this.loadTransactions();
  },
  methods: {
    loadTransactions() {
      const savedTransactions = localStorage.getItem('personalAccountBook_transactions');
      const savedBudget = localStorage.getItem('personalAccountBook_budget');
      
      if (savedTransactions) {
        try {
          this.transactions = JSON.parse(savedTransactions);
        } catch (e) {
          console.error('Error parsing transactions:', e);
          this.transactions = [];
        }
      } else {
        this.transactions = this.generateSampleData();
        this.saveData();
      }
      
      if (savedBudget) {
        try {
          this.budget = JSON.parse(savedBudget);
        } catch (e) {
          console.error('Error parsing budget:', e);
        }
      }
    },
    saveData() {
      localStorage.setItem('personalAccountBook_transactions', JSON.stringify(this.transactions));
      localStorage.setItem('personalAccountBook_budget', JSON.stringify(this.budget));
    },
    generateSampleData() {
      const today = new Date();
      const yesterday = new Date(today);
      yesterday.setDate(yesterday.getDate() - 1);
      const lastWeek = new Date(today);
      lastWeek.setDate(lastWeek.getDate() - 7);
      
      return [
        {
          id: 1,
          type: 'income',
          amount: 3000,
          date: new Date(today.getFullYear(), today.getMonth(), 1).toISOString().slice(0, 10),
          category: 'salary',
          description: ''
        },
        {
          id: 2,
          type: 'expense',
          amount: 50,
          date: yesterday.toISOString().slice(0, 10),
          category: 'food',
          description: ''
        },
        {
          id: 3,
          type: 'expense',
          amount: 25,
          date: today.toISOString().slice(0, 10),
          category: 'transportation',
          description: ''
        },
        {
          id: 4,
          type: 'expense',
          amount: 800,
          date: lastWeek.toISOString().slice(0, 10),
          category: 'rent',
          description: ''
        }
      ];
    },
    editTransaction(transaction) {
      this.editingTransaction = transaction;
      this.currentTransaction = { ...transaction };
      this.showAddTransactionModal = true;
    },
    addNewTransaction() {
      this.editingTransaction = null;
      this.currentTransaction = {
        id: null,
        type: 'expense',
        amount: 0,
        date: new Date().toISOString().slice(0, 10),
        category: 'food',
        description: ''
      };
      
      this.$watch('currentTransaction.type', (newType) => {
        if (newType === 'income') {
          this.currentTransaction.category = 'salary';
        } else if (newType === 'expense') {
          this.currentTransaction.category = 'food';
        } else if (newType === 'transfer') {
          this.currentTransaction.category = 'bank_transfer';
        }
      }, { immediate: false });
      
      this.showAddTransactionModal = true;
    },
    saveTransaction() {
      const transaction = { ...this.currentTransaction };
      
      if (!transaction.amount || transaction.amount <= 0) {
        alert(this.$t('tools.personal-account-book.ui.enterValidAmount') || 'Please enter a valid amount');
        return;
      }
      
      if (!transaction.date) {
        alert(this.$t('tools.personal-account-book.ui.selectDate') || 'Please select a date');
        return;
      }
      
      if (!transaction.category) {
        alert(this.$t('tools.personal-account-book.ui.selectCategory') || 'Please select a category');
        return;
      }
      
      if (this.editingTransaction) {
        const index = this.transactions.findIndex(t => t.id === transaction.id);
        if (index !== -1) {
          this.transactions[index] = transaction;
        }
      } else {
        transaction.id = Date.now();
        this.transactions.push(transaction);
      }
      
      this.saveData();
      this.showAddTransactionModal = false;
    },
    deleteTransactionConfirm() {
      if (confirm(this.$t('tools.personal-account-book.ui.confirmDelete'))) {
        this.deleteTransaction();
      }
    },
    deleteTransaction() {
      const index = this.transactions.findIndex(t => t.id === this.currentTransaction.id);
      if (index !== -1) {
        this.transactions.splice(index, 1);
        this.saveData();
      }
      this.showAddTransactionModal = false;
    },
    saveBudget() {
      if (!this.budget.amount || this.budget.amount <= 0) {
        alert('Please enter a valid budget amount');
        return;
      }
      
      this.saveData();
      this.showBudgetModal = false;
    },
    exportData() {
      try {
        const data = {
          transactions: this.transactions,
          budget: this.budget,
          exportDate: new Date().toISOString()
        };
        
        const json = JSON.stringify(data, null, 2);
        const blob = new Blob([json], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        
        const a = document.createElement('a');
        a.href = url;
        a.download = `personal-account-book-export-${new Date().toISOString().slice(0, 10)}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        alert(this.$t('tools.personal-account-book.ui.successfullyExported'));
      } catch (e) {
        console.error('Export error:', e);
        alert(this.$t('tools.personal-account-book.ui.errorExporting'));
      }
    },
    importData() {
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = 'application/json';
      
      input.onchange = e => {
        const file = e.target.files[0];
        if (!file) return;
        
        const reader = new FileReader();
        reader.onload = event => {
          try {
            const data = JSON.parse(event.target.result);
            
            if (data.transactions && Array.isArray(data.transactions)) {
              this.transactions = data.transactions;
            }
            
            if (data.budget && typeof data.budget === 'object') {
              this.budget = data.budget;
            }
            
            this.saveData();
            alert(this.$t('tools.personal-account-book.ui.successfullyImported'));
          } catch (e) {
            console.error('Import error:', e);
            alert(this.$t('tools.personal-account-book.ui.errorImporting'));
          }
        };
        
        reader.readAsText(file);
      };
      
      input.click();
    },
    getCategoryName(transaction) {
      if (!transaction || !transaction.category) return '';
      
      let categoryType;
      if (transaction.type === 'income') {
        categoryType = 'income';
      } else if (transaction.type === 'expense') {
        categoryType = 'expense';
      } else if (transaction.type === 'transfer') {
        categoryType = 'transfer';
      } else {
        return transaction.category;
      }
      
      try {
        const translationKey = `tools.personal-account-book.categories.${categoryType}.${transaction.category}`;
        const translated = this.$t(translationKey);
        
        if (translated !== translationKey) {
          return translated;
        }
        return transaction.category;
      } catch (error) {
        console.error('Error getting category name:', error);
        return transaction.category;
      }
    },
    formatDate(dateString) {
      if (!dateString) return '';
      
      const date = new Date(dateString);
      return new Intl.DateTimeFormat(this.$i18n.locale, { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
      }).format(date);
    },
    formatCurrency(amount) {
      return new Intl.NumberFormat('zh-CN', {
        style: 'currency',
        currency: 'CNY',
        minimumFractionDigits: 2
      }).format(amount);
    },
    clearTransactionsConfirm() {
      if (confirm(this.$t('tools.personal-account-book.ui.confirmClearTransactions'))) {
        this.clearTransactions();
      }
    },
    clearTransactions() {
      this.transactions = [];
      this.saveData();
      alert(this.$t('tools.personal-account-book.ui.transactionsCleared'));
    },
  }
});
</script>

<style scoped>
.personal-account-book-container {
  max-width: 100%;
  margin: 0 auto;
  padding: 1rem;
}

@media (min-width: 768px) {
  .personal-account-book-container {
    padding: 2rem;
  }
}

.income-expense-chart {
  position: relative;
  min-height: 250px;
}

.bar {
  min-height: 2px;
  transition: height 0.5s ease;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.chart-wrapper {
  background-color: white;
  border-radius: 0.5rem;
  padding: 1rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  margin-bottom: 1rem;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
}

.modal-content {
  background-color: white;
  padding: 2rem;
  border-radius: 0.5rem;
  max-width: 500px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
}

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style> 