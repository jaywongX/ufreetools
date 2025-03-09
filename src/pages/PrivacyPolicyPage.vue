<template>
  <div class="max-w-4xl mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-6">隐私政策</h1>
    
    <div class="prose dark:prose-invert max-w-none">
      <p class="mb-4">最后更新日期: {{ new Date().toLocaleDateString() }}</p>
      
      <section class="mb-8">
        <h2 class="text-2xl font-semibold mb-4">我们的隐私承诺</h2>
        <p class="mb-4">
          在 ufreetools，我们非常重视您的隐私。我们的核心原则是：
          <span class="font-bold">您的数据属于您，不属于我们</span>。
        </p>
        <div class="bg-green-50 dark:bg-green-900 p-4 rounded-lg mb-6">
          <h3 class="font-bold text-green-800 dark:text-green-200 mb-2">零数据收集承诺</h3>
          <p class="text-green-700 dark:text-green-300">
            我们的工具完全在您的浏览器中运行，不会将您上传或输入的任何数据发送到我们的服务器。
            您的文件、文本和所有工具输入都完全留在您的设备上。
          </p>
        </div>
      </section>
      
      <section class="mb-8">
        <h2 class="text-2xl font-semibold mb-4">本地处理</h2>
        <p>
          所有数据处理都在您的浏览器本地进行：
        </p>
        <ul class="list-disc pl-8 mb-4">
          <li>您上传的文件不会离开您的设备</li>
          <li>您输入的文本仅在您的浏览器中处理</li>
          <li>生成的结果仅存储在您的浏览器中</li>
        </ul>
      </section>
      
      <section class="mb-8">
        <h2 class="text-2xl font-semibold mb-4">网站分析</h2>
        <p>
          我们可能使用基本的匿名网站分析来了解访问量和使用模式，但这些数据不会与您的个人信息关联。
          我们不会：
        </p>
        <ul class="list-disc pl-8 mb-4">
          <li>跟踪您的个人身份</li>
          <li>存储您的工具使用内容</li>
          <li>向第三方出售访问数据</li>
        </ul>
      </section>
      
      <section class="mb-8">
        <h2 class="text-2xl font-semibold mb-4">Cookie使用</h2>
        <ul class="list-disc pl-8 mb-4">
          <li>不使用任何 Cookie</li>
          <li>不使用第三方 Cookie</li>
          <li>所有数据处理都在本地完成</li>
        </ul>
      </section>
      
      <section class="mb-8">
        <h2 class="text-2xl font-semibold mb-4">安全使用建议</h2>
        <p>
          虽然我们不收集您的数据，但我们仍建议：
        </p>
        <ul class="list-disc pl-8">
          <li>对于极为敏感的数据，请考虑使用离线工具</li>
          <li>定期清除浏览器缓存以删除暂时保存的结果</li>
        </ul>
      </section>
      
      <section class="mb-8">
        <h2 class="text-2xl font-semibold mb-4">联系我们</h2>
        <p>
          如果您对我们的隐私政策有任何疑问，请随时通过以下电子邮件地址与我们联系：
          <a href="mailto:support@ufreetools.com" class="text-primary dark:text-primary-light">
            support@ufreetools.com
          </a>
        </p>
      </section>
    </div>
  </div>
</template>

<script setup>
// 页面组件不需要额外的逻辑
</script> 