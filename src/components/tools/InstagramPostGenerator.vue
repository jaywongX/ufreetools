<template>
    <div class="w-full">
      <!-- Main Tool Container -->
      <div class="grid grid-cols-1 lg:grid-cols-5 gap-6">
        <!-- Left Column: Controls and Options -->
        <div class="lg:col-span-2 bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700">
          <h2 class="text-lg font-medium text-gray-900 dark:text-gray-100 mb-4">
            {{ $t('tools.instagram-post-generator.designOptions') }}
          </h2>
          
          <!-- User Profile Settings -->
          <div class="mb-6">
            <h3 class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {{ $t('tools.instagram-post-generator.userProfile.title') }}
            </h3>
            <div class="grid grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium mb-1">{{ $t('tools.instagram-post-generator.userProfile.username') }}</label>
                <input 
                  type="text" 
                  v-model="username" 
                  class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                  placeholder="username"
                >
              </div>
              <div>
                <label class="block text-sm font-medium mb-1">{{ $t('tools.instagram-post-generator.userProfile.location') }}</label>
                <input 
                  type="text" 
                  v-model="locationText" 
                  class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                  placeholder="location"
                >
              </div>
              <div>
                <label class="block text-sm font-medium mb-1">{{ $t('tools.instagram-post-generator.userProfile.postedTime') }}</label>
                <input 
                  type="datetime-local" 
                  v-model="postDateTime" 
                  class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                  @change="updatePostTimes"
                >
              </div>
              <div>
                <label class="block text-sm font-medium mb-1">{{ $t('tools.instagram-post-generator.userProfile.verifiedAccount') }}</label>
                <div class="flex items-center h-10">
                  <input type="checkbox" id="is-verified" v-model="isVerified" class="mr-2">
                  <label for="is-verified">{{ $t('tools.instagram-post-generator.userProfile.isVerified') }}</label>
                </div>
              </div>
            </div>
            
            <!-- Profile Picture Upload -->
            <div class="mt-4">
              <label class="block text-sm font-medium mb-1">{{ $t('tools.instagram-post-generator.userProfile.avatar') }}</label>
              <div class="flex items-center space-x-4">
                <div class="w-12 h-12 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                  <img v-if="avatarPreview" :src="avatarPreview" class="w-full h-full object-cover" alt="Profile">
                  <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                  </svg>
                </div>
                
                <div>
                  <label for="avatar-upload" class="cursor-pointer bg-blue-50 text-blue-700 px-3 py-1.5 text-sm rounded-md hover:bg-blue-100">
                    {{ $t('tools.instagram-post-generator.userProfile.uploadAvatar') }}
                    <input id="avatar-upload" type="file" accept="image/*" class="hidden" @change="onAvatarSelected">
                  </label>
                  <button 
                    v-if="avatarPreview" 
                    @click="removeAvatar" 
                    class="ml-2 text-red-600 text-sm hover:underline"
                  >
                    {{ $t('tools.instagram-post-generator.userProfile.removeAvatar') }}
                  </button>
                </div>
              </div>
            </div>

            <!-- Engagement Simulator -->
            <div class="engagement-simulator p-4 bg-white dark:bg-gray-800 rounded-lg border">
                <h3 class="text-lg font-medium mb-3">{{ $t('tools.instagram-post-generator.engagement.title') }}</h3>
                
                <!-- 比竞品更直观的互动统计设置 -->
                <div class="grid grid-cols-1 gap-4 mb-4">
                <div>
                    <label class="block text-sm mb-1">{{ $t('tools.instagram-post-generator.engagement.likeCount') }}</label>
                    <div class="flex items-center">
                    <input 
                        type="range" 
                        v-model="likeCount" 
                        min="0" 
                        max="999999" 
                        class="flex-1 mr-2"
                    >
                    <div class="w-32 text-center">
                        <input 
                        type="text" 
                        v-model="likeCount" 
                        class="w-full text-center border rounded px-2 py-1 text-sm"
                        @input="validateNumberInput('likeCount')"
                        />
                    </div>
                    </div>
                </div>
                
                <div>
                    <label class="block text-sm mb-1">{{ $t('tools.instagram-post-generator.engagement.commentCount') }}</label>
                    <div class="flex items-center">
                    <input 
                        type="range" 
                        v-model="commentCount" 
                        min="0" 
                        max="99999" 
                        class="flex-1 mr-2"
                    >
                    <div class="w-32 text-center">
                        <input 
                        type="text" 
                        v-model="commentCount" 
                        class="w-full text-center border rounded px-2 py-1 text-sm"
                        @input="validateNumberInput('commentCount')"
                        />
                    </div>
                    </div>
                </div>
                
                <div>
                    <label class="block text-sm mb-1">{{ $t('tools.instagram-post-generator.engagement.viewCount') }}</label>
                    <div class="flex items-center">
                    <input 
                        type="range" 
                        v-model="viewCount" 
                        min="0" 
                        max="9999999" 
                        class="flex-1 mr-2"
                    >
                    <div class="w-32 text-center">
                        <input 
                        type="text" 
                        v-model="viewCount" 
                        class="w-full text-center border rounded px-2 py-1 text-sm"
                        @input="validateNumberInput('viewCount')"
                        />
                    </div>
                    </div>
                </div>
                </div>
                
                <!-- 高级互动选项 - 比竞品更全面 -->
                <div class="grid grid-cols-2 gap-x-4 gap-y-2">
                <div class="flex items-center">
                    <input type="checkbox" id="is-liked" v-model="isLiked" class="mr-2">
                    <label for="is-liked">{{ $t('tools.instagram-post-generator.engagement.isLiked') }}</label>
                </div>
                
                <div class="flex items-center">
                    <input type="checkbox" id="is-saved" v-model="isSaved" class="mr-2">
                    <label for="is-saved">{{ $t('tools.instagram-post-generator.engagement.isSaved') }}</label>
                </div>
                
                <div class="flex items-center">
                    <input type="checkbox" id="has-story" v-model="hasStory" class="mr-2">
                    <label for="has-story">{{ $t('tools.instagram-post-generator.engagement.hasStory') }}</label>
                </div>
                
                <div class="flex items-center">
                    <input type="checkbox" id="show-comments" v-model="showComments" class="mr-2">
                    <label for="show-comments">{{ $t('tools.instagram-post-generator.engagement.showComments') }}</label>
                </div>
                
                <div class="flex items-center">
                    <input type="checkbox" id="is-tagged" v-model="isTagged" class="mr-2">
                    <label for="is-tagged">{{ $t('tools.instagram-post-generator.engagement.isTagged') }}</label>
                </div>
                
                <div class="flex items-center">
                    <input type="checkbox" id="is-sponsored" v-model="isSponsored" class="mr-2">
                    <label for="is-sponsored">{{ $t('tools.instagram-post-generator.engagement.isSponsored') }}</label>
                </div>
                </div>
                
                <!-- 模拟评论区（竞品没有） -->
                <div v-if="showComments" class="mt-4">
                <div class="flex justify-between items-center mb-2">
                    <label class="text-sm font-medium">{{ $t('tools.instagram-post-generator.comments.title') }}</label>
                </div>
                
                <!-- Comment 1 -->
                    <div class="grid grid-cols-2 gap-3">
                    <div>
                        <label class="block text-xs font-medium text-gray-600 mb-1">{{ $t('tools.instagram-post-generator.comments.username') }} 1</label>
                        <input 
                        type="text" 
                        v-model="commentUsername1" 
                        class="w-full px-2 py-1 text-sm border rounded"
                        :placeholder="$t('tools.instagram-post-generator.prompts.enterCommentUsername')"
                        />
                    </div>
                    <div>
                        <label class="block text-xs font-medium text-gray-600 mb-1">{{ $t('tools.instagram-post-generator.comments.text') }} 1</label>
                        <input 
                        type="text" 
                        v-model="commentText1" 
                        class="w-full px-2 py-1 text-sm border rounded"
                        :placeholder="$t('tools.instagram-post-generator.prompts.enterComment')"
                        />
                    </div>
                    </div>
                
                <!-- Comment 2 -->
                    <div class="grid grid-cols-2 gap-3">
                    <div>
                        <label class="block text-xs font-medium text-gray-600 mb-1">{{ $t('tools.instagram-post-generator.comments.username') }} 2</label>
                        <input 
                        type="text" 
                        v-model="commentUsername2" 
                        class="w-full px-2 py-1 text-sm border rounded"
                        :placeholder="$t('tools.instagram-post-generator.prompts.enterCommentUsername')"
                        />
                    </div>
                    <div>
                        <label class="block text-xs font-medium text-gray-600 mb-1">{{ $t('tools.instagram-post-generator.comments.text') }} 2</label>
                        <input 
                        type="text" 
                        v-model="commentText2" 
                        class="w-full px-2 py-1 text-sm border rounded"
                        :placeholder="$t('tools.instagram-post-generator.prompts.enterComment')"
                        />
                    </div>
                    </div>
                </div>
            </div>
          </div>
          
          <!-- Content Type Tabs -->
          <div class="mb-6">
            <h3 class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {{ $t('tools.instagram-post-generator.contentType') }}
            </h3>
            <div class="flex border border-gray-300 dark:border-gray-600 rounded-md overflow-hidden">
              <button 
                v-for="type in contentTypes" 
                :key="type"
                @click="selectedContentType = type"
                class="flex-1 py-2 text-sm"
                :class="selectedContentType === type ? 'bg-primary text-white' : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200'"
              >
                {{ $t(`tools.instagram-post-generator.contentTypes.${type}`) }}
              </button>
            </div>
          </div>
          
          <!-- Text Content -->
          <div v-if="selectedContentType === 'text' || selectedContentType === 'mixed'" class="mb-6">
            <h3 class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {{ $t('tools.instagram-post-generator.textContent') }}
            </h3>
            <div class="content-editor">
              <!-- 高级文本编辑器 -->
              <div class="mb-4">
                <label class="block text-sm font-medium mb-1">{{ $t('tools.instagram-post-generator.postText') }}</label>
                <div class="relative">
                  <!-- 支持格式化输入，非纯文本 -->
                  <div 
                    class="rich-text-editor border rounded-md p-3" 
                    contenteditable 
                    @input="onTextInput"
                    ref="richTextEditor"
                  ></div>
                  <!-- 实时字符计数，发光提示 -->
                  <div class="absolute bottom-2 right-2 text-xs" :class="{'text-red-500': textLength > 1500}">
                    {{ textLength }}/2200
                  </div>
                </div>
                
                <!-- 智能输入工具栏（竞品没有） -->
                <div class="flex mt-2 space-x-2">
                  <button @click="insertHashtag" class="px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded">
                    # {{ $t('tools.instagram-post-generator.addHashtag') }}
                  </button>
                  <button @click="insertMention" class="px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded">
                    @ {{ $t('tools.instagram-post-generator.mentionUser') }}
                  </button>
                  <button @click="showEmojiPickerFunc($event)" class="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded relative emoji-button">
                    😊 {{ $t('tools.instagram-post-generator.insertEmoji') }}
                    <!-- Emoji Picker -->
                    <div v-if="showEmojiPicker" class="absolute z-10 top-full left-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg p-2 w-64 emoji-picker">
                      <div class="grid grid-cols-8 gap-1">
                        <button 
                          v-for="emoji in commonEmojis" 
                          :key="emoji" 
                          @click.stop="addEmoji(emoji)" 
                          class="text-lg hover:bg-gray-100 rounded p-1"
                        >
                          {{ emoji }}
                        </button>
                      </div>
                      <div class="mt-2 text-xs text-gray-500">{{ $t('tools.instagram-post-generator.commonEmojis') }}</div>
                    </div>
                  </button>
                </div>
                
                <!-- 智能建议（竞品完全没有） -->
                <div v-if="hashtags.length > 0" class="mt-2">
                  <div class="text-xs text-gray-500 mb-1">{{ $t('tools.instagram-post-generator.recommendedHashtags') }}</div>
                  <div class="flex flex-wrap gap-1">
                    <span 
                      v-for="tag in hashtags" 
                      @click="addTag(tag)"
                      class="px-2 py-1 text-xs bg-gray-100 hover:bg-gray-200 rounded cursor-pointer"
                    >
                      #{{ tag }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Text Formatting -->
            <div class="grid grid-cols-2 gap-4 mt-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {{ $t('tools.instagram-post-generator.fontFamily') }}
                </label>
                <select
                  v-model="textStyle.fontFamily"
                  class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                >
                  <option v-for="font in fontOptions" :key="font.value" :value="font.value">
                    {{ font.label }}
                  </option>
                </select>
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {{ $t('tools.instagram-post-generator.fontSize') }}
                </label>
                <select
                  v-model="textStyle.fontSize"
                  class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                >
                  <option v-for="size in fontSizes" :key="size.value" :value="size.value">
                    {{ size.label }}
                  </option>
                </select>
              </div>
            </div>
            
            <div class="grid grid-cols-2 gap-4 mt-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {{ $t('tools.instagram-post-generator.textAlign') }}
                </label>
                <div class="flex border border-gray-300 dark:border-gray-600 rounded-md overflow-hidden">
                  <button
                    v-for="align in ['left', 'center', 'right']"
                    :key="align"
                    @click="textStyle.textAlign = align"
                    class="flex-1 py-2 flex justify-center"
                    :class="textStyle.textAlign === align ? 'bg-primary text-white' : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200'"
                  >
                    <span v-if="align === 'left'">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h9a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                      </svg>
                    </span>
                    <span v-if="align === 'center'">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3 5a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm-2 5a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1z" clip-rule="evenodd" />
                      </svg>
                    </span>
                    <span v-if="align === 'right'">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm5 5a1 1 0 011-1h6a1 1 0 110 2H9a1 1 0 01-1-1zm3 5a1 1 0 011-1h3a1 1 0 110 2h-3a1 1 0 01-1-1z" clip-rule="evenodd" />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {{ $t('tools.instagram-post-generator.textColor') }}
                </label>
                <input
                  type="color"
                  v-model="textStyle.color"
                  class="w-full h-10 px-1 py-1 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700"
                />
              </div>
            </div>
          </div>
          
          <!-- Image Upload -->
          <div v-if="selectedContentType === 'image' || selectedContentType === 'mixed'" class="mb-6">
            <h3 class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {{ $t('tools.instagram-post-generator.backgroundImage') }}
            </h3>
            <div 
              class="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-md p-6 flex flex-col items-center justify-center"
              :class="{'bg-gray-50 dark:bg-gray-900': !imagePreview, 'p-2': imagePreview}"
            >
              <div v-if="!imagePreview" class="text-center">
                <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                  <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <div class="mt-2 flex text-sm text-gray-600 dark:text-gray-400">
                  <label for="file-upload" class="relative cursor-pointer bg-white dark:bg-gray-800 rounded-md font-medium text-primary hover:text-primary-dark">
                    <span>{{ $t('tools.instagram-post-generator.uploadImage') }}</span>
                    <input id="file-upload" name="file-upload" type="file" accept="image/*" class="sr-only" @change="onImageSelected">
                  </label>
                  <p class="pl-1">{{ $t('tools.instagram-post-generator.dragAndDrop') }}</p>
                </div>
                <p class="text-xs text-gray-500 dark:text-gray-400">
                  {{ $t('tools.instagram-post-generator.imageFormats') }}
                </p>
              </div>
              <div v-else class="relative w-full">
                <img :src="imagePreview" class="w-full h-auto rounded-md">
                <button 
                  @click="removeImage" 
                  class="absolute top-2 right-2 bg-red-600 text-white rounded-full p-1"
                  title="Remove Image"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          
          <!-- Background Options -->
          <div v-if="!imagePreview || selectedContentType === 'text'" class="mb-6">
            <h3 class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {{ $t('tools.instagram-post-generator.background') }}
            </h3>
            <div class="grid grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {{ $t('tools.instagram-post-generator.backgroundColor') }}
                </label>
                <input
                  type="color"
                  v-model="background.color"
                  class="w-full h-10 px-1 py-1 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {{ $t('tools.instagram-post-generator.backgroundType') }}
                </label>
                <select
                  v-model="background.type"
                  class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                >
                  <option value="solid">{{ $t('tools.instagram-post-generator.backgroundTypes.solid') }}</option>
                  <option value="gradient">{{ $t('tools.instagram-post-generator.backgroundTypes.gradient') }}</option>
                  <option value="pattern">{{ $t('tools.instagram-post-generator.backgroundTypes.pattern') }}</option>
                </select>
              </div>
            </div>
            
            <!-- Gradient Options -->
            <div v-if="background.type === 'gradient'" class="mt-4">
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    {{ $t('tools.instagram-post-generator.gradientStartColor') }}
                  </label>
                  <input
                    type="color"
                    v-model="background.gradientStart"
                    class="w-full h-10 px-1 py-1 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    {{ $t('tools.instagram-post-generator.gradientEndColor') }}
                  </label>
                  <input
                    type="color"
                    v-model="background.gradientEnd"
                    class="w-full h-10 px-1 py-1 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700"
                  />
                </div>
              </div>
              <div class="mt-2">
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {{ $t('tools.instagram-post-generator.gradientDirection') }}
                </label>
                <select
                  v-model="background.gradientDirection"
                  class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                >
                  <option value="to right">{{ $t('tools.instagram-post-generator.gradientDirections.horizontal') }}</option>
                  <option value="to bottom">{{ $t('tools.instagram-post-generator.gradientDirections.vertical') }}</option>
                  <option value="to bottom right">{{ $t('tools.instagram-post-generator.gradientDirections.diagonal') }}</option>
                  <option value="to bottom left">{{ $t('tools.instagram-post-generator.gradientDirections.diagonalReverse') }}</option>
                </select>
              </div>
            </div>
            
            <!-- Pattern Options -->
            <div v-if="background.type === 'pattern'" class="mt-4">
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {{ $t('tools.instagram-post-generator.patternType') }}
              </label>
              <div class="grid grid-cols-3 gap-2">
                <button
                  v-for="pattern in patterns"
                  :key="pattern"
                  @click="background.pattern = pattern"
                  class="border rounded-md p-2 h-16"
                  :class="background.pattern === pattern ? 'border-primary-500 ring-2 ring-primary-500' : 'border-gray-300 dark:border-gray-600'"
                  :style="getPatternStyle(pattern)"
                ></button>
              </div>
            </div>
          </div>
          
          <!-- Post Format Options -->
          <div class="mb-6">
            <h3 class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {{ $t('tools.instagram-post-generator.postFormat') }}
            </h3>
            <div class="grid grid-cols-3 gap-2">
              <button
                v-for="format in postFormats"
                :key="format.id"
                @click="selectedFormat = format.id"
                class="border p-2 flex flex-col items-center justify-center"
                :class="selectedFormat === format.id ? 'border-primary-500 bg-primary-50 dark:bg-primary-900 text-primary-700 dark:text-primary-300' : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200'"
              >
                <div 
                  class="mb-1 border border-gray-300 dark:border-gray-500"
                  :style="`width: ${format.width}px; height: ${format.height}px;`"
                ></div>
                <span class="text-xs">{{ format.name }}</span>
              </button>
            </div>
          </div>
          
          <!-- Action Buttons -->
          <div class="flex justify-between space-x-4 mt-6">
            <button 
              @click="resetDesign"
              class="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              {{ $t('tools.instagram-post-generator.resetDesign') }}
            </button>
          </div>
        </div>
        
        <!-- Right Column: Preview and Export -->
        <div class="lg:col-span-3">
          <!-- Preview Area -->
          <div class="bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700 mb-6">
            <h2 class="text-lg font-medium text-gray-900 dark:text-gray-100 mb-4">
              {{ $t('tools.instagram-post-generator.preview') }}
            </h2>
            
            <!-- 完整的Instagram帖子预览 -->
            <div class="instagram-post-preview shadow-lg rounded-xl overflow-hidden max-w-md mx-auto">
              <!-- 帖子头部 -->
              <div class="flex items-center p-3 border-b border-gray-100" :class="'bg-white text-gray-900'">
                <div class="relative">
                  <!-- 故事环 -->
                  <div v-if="hasStory" class="absolute inset-0 rounded-full bg-gradient-to-tr from-yellow-400 to-fuchsia-600 p-0.5 animate-pulse"></div>
                  
                  <div class="w-8 h-8 rounded-full overflow-hidden" :class="{'border-2 border-white': hasStory}">
                    <img v-if="avatarPreview" :src="avatarPreview" class="w-full h-full object-cover" alt="Profile">
                    <div v-else class="w-full h-full flex items-center justify-center bg-gray-200">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                <div class="ml-3 flex-1">
                  <div class="flex items-center">
                    <span class="font-semibold text-sm">{{ username }}</span>
                    <span v-if="isVerified" class="ml-1">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="#3897f0" class="h-3.5 w-3.5">
                        <path d="M8 0L9.95 1.7L12.3 1.04L13.4 3.3L15.75 3.94L15.55 6.4L17.4 8L15.55 9.6L15.75 12.06L13.4 12.7L12.3 14.96L9.95 14.3L8 16L6.05 14.3L3.7 14.96L2.6 12.7L0.25 12.06L0.45 9.6L-1.4 8L0.45 6.4L0.25 3.94L2.6 3.3L3.7 1.04L6.05 1.7L8 0Z" />
                        <path fill="#fff" d="M7.3 11.8l5-5c.2-.2.2-.5 0-.7l-.7-.7c-.2-.2-.5-.2-.7 0L6.6 9.7 5 8.1c-.2-.2-.5-.2-.7 0l-.7.7c-.2.2-.2.5 0 .7l2.4 2.4c.4.2.8.2 1.3-.1z" />
                      </svg>
                    </span>
                    <span class="ml-1 text-xs text-gray-500">• {{ timePosted }}</span>
                  </div>
                  <div class="text-xs text-gray-500">{{ locationText }}</div>
                </div>
                
                <button class="text-gray-700 dark:text-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                  </svg>
                </button>
              </div>
              
              <!-- 帖子内容 -->
              <div ref="postPreview" class="relative" :style="getPostStyle()">
                <!-- 背景层 -->
                <div class="absolute inset-0" :style="getBackgroundStyle()"></div>
                
                <!-- 图片层 -->
                <img 
                  v-if="imagePreview && (selectedContentType === 'image' || selectedContentType === 'mixed')" 
                  :src="imagePreview" 
                  class="absolute inset-0 w-full h-full object-cover"
                >
                
                <!-- 标记的人图标 -->
                <div v-if="isTagged" class="absolute bottom-3 left-3 bg-black bg-opacity-50 rounded-full p-1">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                  </svg>
                </div>
                
                <!-- 文字层 -->
                <div 
                  v-if="postText && (selectedContentType === 'text' || selectedContentType === 'mixed')" 
                  class="absolute inset-0 flex items-center justify-center p-8"
                >
                  <div :style="getTextStyle()">{{ postText }}</div>
                </div>
              </div>
              
              <!-- 帖子互动区域 -->
              <div class="p-3" :class="'bg-white text-gray-900'">
                <!-- 互动按钮 -->
                <div class="flex justify-between mb-2">
                  <div class="flex space-x-4">
                    <button :class="isLiked ? 'text-red-500' : ''">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" :fill="isLiked ? 'currentColor' : 'none'" viewBox="0 0 24 24" :stroke="isLiked ? 'none' : 'currentColor'">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>
                    <button>
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </button>
                    <button>
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </button>
                  </div>
                  <button>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" :fill="isSaved ? 'currentColor' : 'none'" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                    </svg>
                  </button>
                </div>
                
                <!-- 点赞数 -->
                <div class="font-semibold text-sm mb-1">
                  {{ formatLikes(likeCount) }} likes
                </div>
                
                <!-- 帖子描述 -->
                <div class="text-sm mb-1">
                  <span class="font-semibold mr-1">{{ username }}</span>
                  <span v-if="isSponsored" class="text-xs text-gray-500 mr-1">Paid partnership</span>
                  <span v-html="formatPostText(postText)"></span>
                </div>
                
                <!-- 评论 -->
                <div v-if="showComments" class="text-sm mb-1">
                  <div v-if="commentUsername1 && commentText1" class="mb-1">
                    <span class="font-semibold mr-1">{{ commentUsername1 }}</span>
                    <span>{{ commentText1 }}</span>
                  </div>
                  <div v-if="commentUsername2 && commentText2" class="mb-1">
                    <span class="font-semibold mr-1">{{ commentUsername2 }}</span>
                    <span>{{ commentText2 }}</span>
                  </div>
                  <div v-if="commentCount > 2" class="text-gray-500 text-xs">
                    View all {{ commentCount }} comments
                  </div>
                </div>
                
                <!-- 发布时间 -->
                <div class="text-gray-500 text-xs uppercase mt-1">
                  {{ postDate }}
                </div>
              </div>
            </div>
          </div>
          
          <!-- Export Options -->
          <div class="bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700">
            <h2 class="text-lg font-medium text-gray-900 dark:text-gray-100 mb-4">
              {{ $t('tools.instagram-post-generator.export') }}
            </h2>
            
            <div class="flex flex-wrap gap-4">
              <button 
                @click="downloadPost('png')" 
                class="flex items-center px-4 py-2 bg-primary text-white rounded-md text-sm hover:bg-primary-dark"
                :disabled="isGenerating"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                </svg>
                {{ $t('tools.instagram-post-generator.downloadAsPNG') }}
              </button>
              
              <button 
                @click="downloadPost('jpg')" 
                class="flex items-center px-4 py-2 bg-gray-600 text-white rounded-md text-sm hover:bg-gray-700"
                :disabled="isGenerating"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                </svg>
                {{ $t('tools.instagram-post-generator.downloadAsJPG') }}
              </button>
              
              <button 
                @click="copyToClipboard" 
                class="flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md text-sm hover:bg-gray-200 dark:hover:bg-gray-600"
                :disabled="isGenerating"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                  <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                </svg>
                {{ copyStatus ? $t('tools.instagram-post-generator.copied') : $t('tools.instagram-post-generator.copyToClipboard') }}
              </button>
            </div>
            
            <p v-if="isGenerating" class="mt-4 text-sm text-gray-600 dark:text-gray-400">
              {{ $t('tools.instagram-post-generator.generating') }}
            </p>
          </div>
        </div>
      </div>
      
      <!-- Tool Documentation for SEO -->
      <div class="mt-12 prose dark:prose-invert max-w-none">
        <h2 class="text-2xl font-bold mb-6">{{ $t('tools.instagram-post-generator.documentation.title') }}</h2>
        
        <div class="article-content space-y-6 text-gray-700 dark:text-gray-300">
          <h3 class="text-xl font-semibold mt-8" id="what-is-instagram-post-generator">{{ $t('tools.instagram-post-generator.documentation.whatIs.title') }}</h3>
          <p>{{ $t('tools.instagram-post-generator.documentation.whatIs.paragraph1') }}</p>
          <p>{{ $t('tools.instagram-post-generator.documentation.whatIs.paragraph2') }}</p>

          <h3 class="text-xl font-semibold mt-8" id="why-use-instagram-post-generator">{{ $t('tools.instagram-post-generator.documentation.whyUse.title') }}</h3>
          <p>{{ $t('tools.instagram-post-generator.documentation.whyUse.paragraph1') }}</p>
          <p>{{ $t('tools.instagram-post-generator.documentation.whyUse.paragraph2') }}</p>
          
          <ul>
            <li>
              <strong>{{ $t('tools.instagram-post-generator.documentation.whyUse.reasons.contentPlanning.title') }}:</strong> 
              {{ $t('tools.instagram-post-generator.documentation.whyUse.reasons.contentPlanning.description') }}
            </li>
            <li>
              <strong>{{ $t('tools.instagram-post-generator.documentation.whyUse.reasons.educational.title') }}:</strong> 
              {{ $t('tools.instagram-post-generator.documentation.whyUse.reasons.educational.description') }}
            </li>
            <li>
              <strong>{{ $t('tools.instagram-post-generator.documentation.whyUse.reasons.marketing.title') }}:</strong> 
              {{ $t('tools.instagram-post-generator.documentation.whyUse.reasons.marketing.description') }}
            </li>
            <li>
              <strong>{{ $t('tools.instagram-post-generator.documentation.whyUse.reasons.experimentation.title') }}:</strong> 
              {{ $t('tools.instagram-post-generator.documentation.whyUse.reasons.experimentation.description') }}
            </li>
            <li>
              <strong>{{ $t('tools.instagram-post-generator.documentation.whyUse.reasons.consistency.title') }}:</strong> 
              {{ $t('tools.instagram-post-generator.documentation.whyUse.reasons.consistency.description') }}
            </li>
          </ul>

          <h3 class="text-xl font-semibold mt-8" id="key-features">{{ $t('tools.instagram-post-generator.documentation.keyFeatures.title') }}</h3>
          <p>{{ $t('tools.instagram-post-generator.documentation.keyFeatures.intro') }}</p>
          
          <h4 class="text-lg font-medium mt-6">{{ $t('tools.instagram-post-generator.documentation.keyFeatures.profile.title') }}</h4>
          <p>{{ $t('tools.instagram-post-generator.documentation.keyFeatures.profile.description') }}</p>
          <ul>
            <li><strong>{{ $t('tools.instagram-post-generator.documentation.keyFeatures.profile.items.username.title') }}:</strong> {{ $t('tools.instagram-post-generator.documentation.keyFeatures.profile.items.username.description') }}</li>
            <li><strong>{{ $t('tools.instagram-post-generator.documentation.keyFeatures.profile.items.verification.title') }}:</strong> {{ $t('tools.instagram-post-generator.documentation.keyFeatures.profile.items.verification.description') }}</li>
            <li><strong>{{ $t('tools.instagram-post-generator.documentation.keyFeatures.profile.items.location.title') }}:</strong> {{ $t('tools.instagram-post-generator.documentation.keyFeatures.profile.items.location.description') }}</li>
            <li><strong>{{ $t('tools.instagram-post-generator.documentation.keyFeatures.profile.items.timing.title') }}:</strong> {{ $t('tools.instagram-post-generator.documentation.keyFeatures.profile.items.timing.description') }}</li>
          </ul>
          
          <h4 class="text-lg font-medium mt-6">{{ $t('tools.instagram-post-generator.documentation.keyFeatures.content.title') }}</h4>
          <p>{{ $t('tools.instagram-post-generator.documentation.keyFeatures.content.description') }}</p>
          <ul>
            <li><strong>{{ $t('tools.instagram-post-generator.documentation.keyFeatures.content.items.textOnly.title') }}:</strong> {{ $t('tools.instagram-post-generator.documentation.keyFeatures.content.items.textOnly.description') }}</li>
            <li><strong>{{ $t('tools.instagram-post-generator.documentation.keyFeatures.content.items.imageOnly.title') }}:</strong> {{ $t('tools.instagram-post-generator.documentation.keyFeatures.content.items.imageOnly.description') }}</li>
            <li><strong>{{ $t('tools.instagram-post-generator.documentation.keyFeatures.content.items.mixed.title') }}:</strong> {{ $t('tools.instagram-post-generator.documentation.keyFeatures.content.items.mixed.description') }}</li>
            <li><strong>{{ $t('tools.instagram-post-generator.documentation.keyFeatures.content.items.richText.title') }}:</strong> {{ $t('tools.instagram-post-generator.documentation.keyFeatures.content.items.richText.description') }}</li>
            <li><strong>{{ $t('tools.instagram-post-generator.documentation.keyFeatures.content.items.hashtags.title') }}:</strong> {{ $t('tools.instagram-post-generator.documentation.keyFeatures.content.items.hashtags.description') }}</li>
          </ul>
          
          <h4 class="text-lg font-medium mt-6">{{ $t('tools.instagram-post-generator.documentation.keyFeatures.design.title') }}</h4>
          <p>{{ $t('tools.instagram-post-generator.documentation.keyFeatures.design.description') }}</p>
          <ul>
            <li><strong>{{ $t('tools.instagram-post-generator.documentation.keyFeatures.design.items.typography.title') }}:</strong> {{ $t('tools.instagram-post-generator.documentation.keyFeatures.design.items.typography.description') }}</li>
            <li><strong>{{ $t('tools.instagram-post-generator.documentation.keyFeatures.design.items.background.title') }}:</strong> {{ $t('tools.instagram-post-generator.documentation.keyFeatures.design.items.background.description') }}</li>
            <li><strong>{{ $t('tools.instagram-post-generator.documentation.keyFeatures.design.items.gradient.title') }}:</strong> {{ $t('tools.instagram-post-generator.documentation.keyFeatures.design.items.gradient.description') }}</li>
            <li><strong>{{ $t('tools.instagram-post-generator.documentation.keyFeatures.design.items.pattern.title') }}:</strong> {{ $t('tools.instagram-post-generator.documentation.keyFeatures.design.items.pattern.description') }}</li>
            <li><strong>{{ $t('tools.instagram-post-generator.documentation.keyFeatures.design.items.format.title') }}:</strong> {{ $t('tools.instagram-post-generator.documentation.keyFeatures.design.items.format.description') }}</li>
          </ul>
          
          <h4 class="text-lg font-medium mt-6">{{ $t('tools.instagram-post-generator.documentation.keyFeatures.engagement.title') }}</h4>
          <p>{{ $t('tools.instagram-post-generator.documentation.keyFeatures.engagement.description') }}</p>
          <ul>
            <li><strong>{{ $t('tools.instagram-post-generator.documentation.keyFeatures.engagement.items.likes.title') }}:</strong> {{ $t('tools.instagram-post-generator.documentation.keyFeatures.engagement.items.likes.description') }}</li>
            <li><strong>{{ $t('tools.instagram-post-generator.documentation.keyFeatures.engagement.items.comments.title') }}:</strong> {{ $t('tools.instagram-post-generator.documentation.keyFeatures.engagement.items.comments.description') }}</li>
            <li><strong>{{ $t('tools.instagram-post-generator.documentation.keyFeatures.engagement.items.views.title') }}:</strong> {{ $t('tools.instagram-post-generator.documentation.keyFeatures.engagement.items.views.description') }}</li>
            <li><strong>{{ $t('tools.instagram-post-generator.documentation.keyFeatures.engagement.items.interactions.title') }}:</strong> {{ $t('tools.instagram-post-generator.documentation.keyFeatures.engagement.items.interactions.description') }}</li>
            <li><strong>{{ $t('tools.instagram-post-generator.documentation.keyFeatures.engagement.items.story.title') }}:</strong> {{ $t('tools.instagram-post-generator.documentation.keyFeatures.engagement.items.story.description') }}</li>
            <li><strong>{{ $t('tools.instagram-post-generator.documentation.keyFeatures.engagement.items.tags.title') }}:</strong> {{ $t('tools.instagram-post-generator.documentation.keyFeatures.engagement.items.tags.description') }}</li>
            <li><strong>{{ $t('tools.instagram-post-generator.documentation.keyFeatures.engagement.items.sponsored.title') }}:</strong> {{ $t('tools.instagram-post-generator.documentation.keyFeatures.engagement.items.sponsored.description') }}</li>
          </ul>
          
          <h4 class="text-lg font-medium mt-6">{{ $t('tools.instagram-post-generator.documentation.keyFeatures.export.title') }}</h4>
          <p>{{ $t('tools.instagram-post-generator.documentation.keyFeatures.export.description') }}</p>
          <ul>
            <li><strong>{{ $t('tools.instagram-post-generator.documentation.keyFeatures.export.items.png.title') }}:</strong> {{ $t('tools.instagram-post-generator.documentation.keyFeatures.export.items.png.description') }}</li>
            <li><strong>{{ $t('tools.instagram-post-generator.documentation.keyFeatures.export.items.jpg.title') }}:</strong> {{ $t('tools.instagram-post-generator.documentation.keyFeatures.export.items.jpg.description') }}</li>
            <li><strong>{{ $t('tools.instagram-post-generator.documentation.keyFeatures.export.items.clipboard.title') }}:</strong> {{ $t('tools.instagram-post-generator.documentation.keyFeatures.export.items.clipboard.description') }}</li>
          </ul>

          <!-- Enhanced Step-by-Step How-to Guide -->
          <h3 class="text-xl font-semibold mt-8" id="how-to-use">{{ $t('tools.instagram-post-generator.documentation.howTo.title') }}</h3>
          <p>{{ $t('tools.instagram-post-generator.documentation.howTo.description') }}</p>
          
          <!-- Step 1: Profile Setup -->
          <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 my-4">
            <h4 class="text-lg font-medium">{{ $t('tools.instagram-post-generator.documentation.howTo.profileSetup.title') }}</h4>
            <p class="mb-2">{{ $t('tools.instagram-post-generator.documentation.howTo.profileSetup.description') }}</p>
            <ol class="list-decimal pl-5 space-y-1">
              <li>{{ $t('tools.instagram-post-generator.documentation.howTo.profileSetup.step1') }}</li>
              <li>{{ $t('tools.instagram-post-generator.documentation.howTo.profileSetup.step2') }}</li>
              <li>{{ $t('tools.instagram-post-generator.documentation.howTo.profileSetup.step3') }}</li>
              <li>{{ $t('tools.instagram-post-generator.documentation.howTo.profileSetup.step4') }}</li>
              <li>{{ $t('tools.instagram-post-generator.documentation.howTo.profileSetup.step5') }}</li>
            </ol>
          </div>
          
          <!-- Step 2: Content Selection -->
          <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 my-4">
            <h4 class="text-lg font-medium">{{ $t('tools.instagram-post-generator.documentation.howTo.contentSelection.title') }}</h4>
            <p class="mb-2">{{ $t('tools.instagram-post-generator.documentation.howTo.contentSelection.description') }}</p>
            <ol class="list-decimal pl-5 space-y-1">
              <li>{{ $t('tools.instagram-post-generator.documentation.howTo.contentSelection.step1') }}</li>
              <li>{{ $t('tools.instagram-post-generator.documentation.howTo.contentSelection.step2') }}</li>
              <li>{{ $t('tools.instagram-post-generator.documentation.howTo.contentSelection.step3') }}</li>
              <li>{{ $t('tools.instagram-post-generator.documentation.howTo.contentSelection.step4') }}</li>
              <li>{{ $t('tools.instagram-post-generator.documentation.howTo.contentSelection.step5') }}</li>
            </ol>
          </div>
          
          <!-- Step 3: Styling Content -->
          <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 my-4">
            <h4 class="text-lg font-medium">{{ $t('tools.instagram-post-generator.documentation.howTo.stylingContent.title') }}</h4>
            <p class="mb-2">{{ $t('tools.instagram-post-generator.documentation.howTo.stylingContent.description') }}</p>
            <ol class="list-decimal pl-5 space-y-1">
              <li>{{ $t('tools.instagram-post-generator.documentation.howTo.stylingContent.step1') }}</li>
              <li>{{ $t('tools.instagram-post-generator.documentation.howTo.stylingContent.step2') }}</li>
              <li>{{ $t('tools.instagram-post-generator.documentation.howTo.stylingContent.step3') }}</li>
              <li>{{ $t('tools.instagram-post-generator.documentation.howTo.stylingContent.step4') }}</li>
              <li>{{ $t('tools.instagram-post-generator.documentation.howTo.stylingContent.step5') }}</li>
              <li>{{ $t('tools.instagram-post-generator.documentation.howTo.stylingContent.step6') }}</li>
              <li>{{ $t('tools.instagram-post-generator.documentation.howTo.stylingContent.step7') }}</li>
              <li>{{ $t('tools.instagram-post-generator.documentation.howTo.stylingContent.step8') }}</li>
            </ol>
          </div>
          
          <!-- Step 4: Post Format -->
          <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 my-4">
            <h4 class="text-lg font-medium">{{ $t('tools.instagram-post-generator.documentation.howTo.postFormat.title') }}</h4>
            <p class="mb-2">{{ $t('tools.instagram-post-generator.documentation.howTo.postFormat.description') }}</p>
            <ol class="list-decimal pl-5 space-y-1">
              <li>{{ $t('tools.instagram-post-generator.documentation.howTo.postFormat.step1') }}</li>
              <li>{{ $t('tools.instagram-post-generator.documentation.howTo.postFormat.step2') }}</li>
              <li>{{ $t('tools.instagram-post-generator.documentation.howTo.postFormat.step3') }}</li>
            </ol>
          </div>
          
          <!-- Step 5: Engagement Settings -->
          <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 my-4">
            <h4 class="text-lg font-medium">{{ $t('tools.instagram-post-generator.documentation.howTo.engagementSettings.title') }}</h4>
            <p class="mb-2">{{ $t('tools.instagram-post-generator.documentation.howTo.engagementSettings.description') }}</p>
            <ol class="list-decimal pl-5 space-y-1">
              <li>{{ $t('tools.instagram-post-generator.documentation.howTo.engagementSettings.step1') }}</li>
              <li>{{ $t('tools.instagram-post-generator.documentation.howTo.engagementSettings.step2') }}</li>
              <li>{{ $t('tools.instagram-post-generator.documentation.howTo.engagementSettings.step3') }}</li>
              <li>{{ $t('tools.instagram-post-generator.documentation.howTo.engagementSettings.step4') }}</li>
              <li>{{ $t('tools.instagram-post-generator.documentation.howTo.engagementSettings.step5') }}</li>
              <li>{{ $t('tools.instagram-post-generator.documentation.howTo.engagementSettings.step6') }}</li>
              <li>{{ $t('tools.instagram-post-generator.documentation.howTo.engagementSettings.step7') }}</li>
              <li>{{ $t('tools.instagram-post-generator.documentation.howTo.engagementSettings.step8') }}</li>
              <li>{{ $t('tools.instagram-post-generator.documentation.howTo.engagementSettings.step9') }}</li>
              <li>{{ $t('tools.instagram-post-generator.documentation.howTo.engagementSettings.step10') }}</li>
              <li>{{ $t('tools.instagram-post-generator.documentation.howTo.engagementSettings.step11') }}</li>
            </ol>
          </div>
          
          <!-- Step 6: Comment Simulation -->
          <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 my-4">
            <h4 class="text-lg font-medium">{{ $t('tools.instagram-post-generator.documentation.howTo.commentSimulation.title') }}</h4>
            <p class="mb-2">{{ $t('tools.instagram-post-generator.documentation.howTo.commentSimulation.description') }}</p>
            <ol class="list-decimal pl-5 space-y-1">
              <li>{{ $t('tools.instagram-post-generator.documentation.howTo.commentSimulation.step1') }}</li>
              <li>{{ $t('tools.instagram-post-generator.documentation.howTo.commentSimulation.step2') }}</li>
              <li>{{ $t('tools.instagram-post-generator.documentation.howTo.commentSimulation.step3') }}</li>
              <li>{{ $t('tools.instagram-post-generator.documentation.howTo.commentSimulation.step4') }}</li>
            </ol>
          </div>
          
          <!-- Step 7: Preview and Export -->
          <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 my-4">
            <h4 class="text-lg font-medium">{{ $t('tools.instagram-post-generator.documentation.howTo.previewExport.title') }}</h4>
            <p class="mb-2">{{ $t('tools.instagram-post-generator.documentation.howTo.previewExport.description') }}</p>
            <ol class="list-decimal pl-5 space-y-1">
              <li>{{ $t('tools.instagram-post-generator.documentation.howTo.previewExport.step1') }}</li>
              <li>{{ $t('tools.instagram-post-generator.documentation.howTo.previewExport.step2') }}</li>
              <li>{{ $t('tools.instagram-post-generator.documentation.howTo.previewExport.step3') }}</li>
              <li>{{ $t('tools.instagram-post-generator.documentation.howTo.previewExport.step4') }}</li>
              <li>{{ $t('tools.instagram-post-generator.documentation.howTo.previewExport.step5') }}</li>
              <li>{{ $t('tools.instagram-post-generator.documentation.howTo.previewExport.step6') }}</li>
              <li>{{ $t('tools.instagram-post-generator.documentation.howTo.previewExport.step7') }}</li>
              <li>{{ $t('tools.instagram-post-generator.documentation.howTo.previewExport.step8') }}</li>
            </ol>
          </div>
          
          <!-- Enhanced Pro Tips Section -->
          <h3 class="text-xl font-semibold mt-8" id="pro-tips">{{ $t('tools.instagram-post-generator.documentation.tips.title') }}</h3>
          <p>{{ $t('tools.instagram-post-generator.documentation.tips.description') }}</p>
          
          <div class="mt-4">
            <h4 class="text-lg font-medium">{{ $t('tools.instagram-post-generator.documentation.tips.contentStrategy.title') }}</h4>
            <ul class="list-disc pl-5 space-y-1 mt-2">
              <li>{{ $t('tools.instagram-post-generator.documentation.tips.contentStrategy.tip1') }}</li>
              <li>{{ $t('tools.instagram-post-generator.documentation.tips.contentStrategy.tip2') }}</li>
              <li>{{ $t('tools.instagram-post-generator.documentation.tips.contentStrategy.tip3') }}</li>
              <li>{{ $t('tools.instagram-post-generator.documentation.tips.contentStrategy.tip4') }}</li>
              <li>{{ $t('tools.instagram-post-generator.documentation.tips.contentStrategy.tip5') }}</li>
            </ul>
          </div>
          
          <div class="mt-4">
            <h4 class="text-lg font-medium">{{ $t('tools.instagram-post-generator.documentation.tips.visualDesign.title') }}</h4>
            <ul class="list-disc pl-5 space-y-1 mt-2">
              <li>{{ $t('tools.instagram-post-generator.documentation.tips.visualDesign.tip1') }}</li>
              <li>{{ $t('tools.instagram-post-generator.documentation.tips.visualDesign.tip2') }}</li>
              <li>{{ $t('tools.instagram-post-generator.documentation.tips.visualDesign.tip3') }}</li>
              <li>{{ $t('tools.instagram-post-generator.documentation.tips.visualDesign.tip4') }}</li>
              <li>{{ $t('tools.instagram-post-generator.documentation.tips.visualDesign.tip5') }}</li>
            </ul>
          </div>
          
          <div class="mt-4">
            <h4 class="text-lg font-medium">{{ $t('tools.instagram-post-generator.documentation.tips.engagementOptimization.title') }}</h4>
            <ul class="list-disc pl-5 space-y-1 mt-2">
              <li>{{ $t('tools.instagram-post-generator.documentation.tips.engagementOptimization.tip1') }}</li>
              <li>{{ $t('tools.instagram-post-generator.documentation.tips.engagementOptimization.tip2') }}</li>
              <li>{{ $t('tools.instagram-post-generator.documentation.tips.engagementOptimization.tip3') }}</li>
              <li>{{ $t('tools.instagram-post-generator.documentation.tips.engagementOptimization.tip4') }}</li>
              <li>{{ $t('tools.instagram-post-generator.documentation.tips.engagementOptimization.tip5') }}</li>
            </ul>
          </div>
          
          <!-- Enhanced FAQ Section -->
          <h3 class="text-xl font-semibold mt-8" id="faq">{{ $t('tools.instagram-post-generator.documentation.faq.title') }}</h3>
          
          <div class="space-y-4 mt-4">
            <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
              <h4 class="text-lg font-medium">{{ $t('tools.instagram-post-generator.documentation.faq.question1') }}</h4>
              <p class="mt-2">{{ $t('tools.instagram-post-generator.documentation.faq.answer1') }}</p>
            </div>
            
            <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
              <h4 class="text-lg font-medium">{{ $t('tools.instagram-post-generator.documentation.faq.question2') }}</h4>
              <p class="mt-2">{{ $t('tools.instagram-post-generator.documentation.faq.answer2') }}</p>
            </div>
            
            <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
              <h4 class="text-lg font-medium">{{ $t('tools.instagram-post-generator.documentation.faq.question3') }}</h4>
              <p class="mt-2">{{ $t('tools.instagram-post-generator.documentation.faq.answer3') }}</p>
            </div>
            
            <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
              <h4 class="text-lg font-medium">{{ $t('tools.instagram-post-generator.documentation.faq.question4') }}</h4>
              <p class="mt-2">{{ $t('tools.instagram-post-generator.documentation.faq.answer4') }}</p>
            </div>
            
            <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
              <h4 class="text-lg font-medium">{{ $t('tools.instagram-post-generator.documentation.faq.question5') }}</h4>
              <p class="mt-2">{{ $t('tools.instagram-post-generator.documentation.faq.answer5') }}</p>
            </div>
            
            <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
              <h4 class="text-lg font-medium">{{ $t('tools.instagram-post-generator.documentation.faq.question6') }}</h4>
              <p class="mt-2">{{ $t('tools.instagram-post-generator.documentation.faq.answer6') }}</p>
            </div>
            
            <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
              <h4 class="text-lg font-medium">{{ $t('tools.instagram-post-generator.documentation.faq.question7') }}</h4>
              <p class="mt-2">{{ $t('tools.instagram-post-generator.documentation.faq.answer7') }}</p>
            </div>
            
            <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
              <h4 class="text-lg font-medium">{{ $t('tools.instagram-post-generator.documentation.faq.question8') }}</h4>
              <p class="mt-2">{{ $t('tools.instagram-post-generator.documentation.faq.answer8') }}</p>
            </div>
            
            <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
              <h4 class="text-lg font-medium">{{ $t('tools.instagram-post-generator.documentation.faq.question9') }}</h4>
              <p class="mt-2">{{ $t('tools.instagram-post-generator.documentation.faq.answer9') }}</p>
            </div>
            
            <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
              <h4 class="text-lg font-medium">{{ $t('tools.instagram-post-generator.documentation.faq.question10') }}</h4>
              <p class="mt-2">{{ $t('tools.instagram-post-generator.documentation.faq.answer10') }}</p>
            </div>
            
            <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
              <h4 class="text-lg font-medium">{{ $t('tools.instagram-post-generator.documentation.faq.question11') }}</h4>
              <p class="mt-2">{{ $t('tools.instagram-post-generator.documentation.faq.answer11') }}</p>
            </div>
            
            <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
              <h4 class="text-lg font-medium">{{ $t('tools.instagram-post-generator.documentation.faq.question12') }}</h4>
              <p class="mt-2">{{ $t('tools.instagram-post-generator.documentation.faq.answer12') }}</p>
            </div>
          </div>
          
          <h3 class="text-xl font-semibold mt-8" id="conclusion">{{ $t('tools.instagram-post-generator.documentation.conclusion.title') }}</h3>
          <div>
            <p class="mt-4">{{ $t('tools.instagram-post-generator.documentation.conclusion.paragraph1') }}</p>
            <p class="mt-4">{{ $t('tools.instagram-post-generator.documentation.conclusion.paragraph2') }}</p>
            <p class="mt-4">{{ $t('tools.instagram-post-generator.documentation.conclusion.paragraph3') }}</p>
            <p class="mt-4">{{ $t('tools.instagram-post-generator.documentation.conclusion.paragraph4') }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, onMounted } from 'vue'
  import { useI18n } from 'vue-i18n'
  import html2canvas from 'html2canvas'
  
  const { t } = useI18n()
  
  // Content type options
  const contentTypes = ['text', 'image', 'mixed']
  const selectedContentType = ref('image')
  
  // Post format options (aspect ratios)
  const postFormats = [
    { id: 'square', name: t('tools.instagram-post-generator.formats.square'), width: 40, height: 40, realWidth: 1080, realHeight: 1080 },
    { id: 'portrait', name: t('tools.instagram-post-generator.formats.portrait'), width: 40, height: 50, realWidth: 1080, realHeight: 1350 },
    { id: 'landscape', name: t('tools.instagram-post-generator.formats.landscape'), width: 40, height: 22, realWidth: 1080, realHeight: 608 }
  ]
  const selectedFormat = ref('square')
  
  // Font options
  const fontOptions = [
    { value: "'Inter', sans-serif", label: 'Inter' },
    { value: "'Roboto', sans-serif", label: 'Roboto' },
    { value: "'Playfair Display', serif", label: 'Playfair' },
    { value: "'Montserrat', sans-serif", label: 'Montserrat' },
    { value: "'Poppins', sans-serif", label: 'Poppins' },
    { value: "'Open Sans', sans-serif", label: 'Open Sans' }
  ]
  
  // Font size options
  const fontSizes = [
    { value: '18px', label: 'Small' },
    { value: '24px', label: 'Medium' },
    { value: '32px', label: 'Large' },
    { value: '48px', label: 'X-Large' }
  ]
  
  // Pattern options
  const patterns = [
    'dots',
    'lines',
    'crosshatch',
    'zigzag',
    'waves',
    'triangles'
  ]
  
  // Emoji options
  const commonEmojis = [
    '😀', '😊', '🥰', '😂', '🤣', '😍', '🙌', '👍', '��', '❤️', 
    '💯', '✨', '🎉', '🌟', '💪', '🤩', '🌈', '☀️', '🌴', '🏖️',
    '🍕', '🍦', '🍷', '📸', '📱', '💻', '✈️', '🚗', '🏆', '💰',
    '👑', '💄', '👗', '👓', '🧢', '🎵', '🎬', '🎮', '⚽', '🏀'
  ]
  const showEmojiPicker = ref(false)
  
  // State
  const postText = ref('Your inspirational text here. Make it catchy and engaging!')
  const imagePreview = ref('/instagram.png')
  const imageFile = ref(null)
  const copyStatus = ref(false)
  const isGenerating = ref(false)
  const postPreview = ref(null)
  
  // Style settings
  const textStyle = ref({
    fontFamily: "'Inter', sans-serif",
    fontSize: '32px',
    color: '#ffffff',
    textAlign: 'center'
  })
  
  const background = ref({
    type: 'gradient',
    color: '#4F46E5',
    gradientStart: '#4F46E5',
    gradientEnd: '#7C3AED',
    gradientDirection: 'to bottom right',
    pattern: 'dots'
  })
  
  // Initialize necessary state variables
  const textLength = ref(0)
  const hashtags = ref([])
  const username = ref('johndoe')
  const isVerified = ref(true)
  const locationText = ref('New York, USA')
  const timePosted = ref('25m')
  const hasStory = ref(false)
  const likeCount = ref(1234)
  const commentCount = ref(42)
  const viewCount = ref(0)
  const isLiked = ref(false)
  const isSaved = ref(false)
  const showComments = ref(false)
  const isTagged = ref(false)
  const isSponsored = ref(false)
  const comments = ref([])
  const avatarPreview = ref(null)
  const postDate = ref('April 10, 2023 9:09 PM')
  const postDateTime = ref('')
  const richTextEditor = ref(null)
  
  // Comment input fields
  const commentUsername1 = ref('traveler123')
  const commentText1 = ref('Looks amazing! 😍')
  const commentUsername2 = ref('photoexpert')
  const commentText2 = ref('Great composition!')
  
  // Computed properties
  const selectedFormatObj = computed(() => {
    return postFormats.find(format => format.id === selectedFormat.value)
  })
  
  // Methods
  function onImageSelected(event) {
    const file = event.target.files[0]
    if (file) {
      imageFile.value = file
      const reader = new FileReader()
      reader.onload = e => {
        imagePreview.value = e.target.result
      }
      reader.readAsDataURL(file)
    }
  }
  
  function removeImage() {
    imagePreview.value = null
    imageFile.value = null
  }
  
  function resetDesign() {
    selectedContentType.value = 'mixed'
    postText.value = 'Your inspirational text here. Make it catchy and engaging!'
    imagePreview.value = null
    imageFile.value = null
    textStyle.value = {
      fontFamily: "'Inter', sans-serif",
      fontSize: '32px',
      color: '#ffffff',
      textAlign: 'center'
    }
    background.value = {
      type: 'gradient',
      color: '#4F46E5',
      gradientStart: '#4F46E5',
      gradientEnd: '#7C3AED',
      gradientDirection: 'to bottom right',
      pattern: 'dots'
    }
    selectedFormat.value = 'square'
  }
  
  function getPostContainerStyle() {
    return {
      width: '100%',
      maxWidth: '500px',
      margin: '0 auto'
    }
  }
  
  function getPostStyle() {
    const format = selectedFormatObj.value
    const aspectRatio = format.realHeight / format.realWidth
    
    return {
      width: '100%',
      paddingBottom: `${aspectRatio * 100}%`,
      position: 'relative',
      borderRadius: '4px',
      overflow: 'hidden'
    }
  }
  
  function getBackgroundStyle() {
    if (background.value.type === 'solid') {
      return {
        backgroundColor: background.value.color
      }
    } else if (background.value.type === 'gradient') {
      return {
        background: `linear-gradient(${background.value.gradientDirection}, ${background.value.gradientStart}, ${background.value.gradientEnd})`
      }
    } else if (background.value.type === 'pattern') {
      return getPatternStyle(background.value.pattern)
    }
    
    return {}
  }
  
  function getPatternStyle(pattern) {
    const baseColor = background.value.color
    const size = '20px'
    const patternStyles = {
      dots: {
        backgroundColor: baseColor,
        backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.3) 2px, transparent 2px)`,
        backgroundSize: size,
      },
      lines: {
        backgroundColor: baseColor,
        backgroundImage: `linear-gradient(0deg, transparent 50%, rgba(255,255,255,0.3) 50%)`,
        backgroundSize: `10px 10px`,
      },
      crosshatch: {
        backgroundColor: baseColor,
        backgroundImage: `linear-gradient(0deg, transparent 50%, rgba(255,255,255,0.3) 50%), linear-gradient(90deg, transparent 50%, rgba(255,255,255,0.3) 50%)`,
        backgroundSize: `10px 10px`,
      },
      zigzag: {
        backgroundColor: baseColor,
        backgroundImage: `linear-gradient(135deg, rgba(255,255,255,0.3) 25%, transparent 25%), linear-gradient(225deg, rgba(255,255,255,0.3) 25%, transparent 25%)`,
        backgroundSize: `20px 20px`,
      },
      waves: {
        backgroundColor: baseColor,
        backgroundImage: `linear-gradient(45deg, rgba(255,255,255,0.3) 25%, transparent 25%), linear-gradient(-45deg, rgba(255,255,255,0.3) 25%, transparent 25%)`,
        backgroundSize: `20px 20px`,
      },
      triangles: {
        backgroundColor: baseColor,
        backgroundImage: `linear-gradient(45deg, rgba(255,255,255,0.3) 50%, transparent 50%)`,
        backgroundSize: `20px 20px`,
      }
    }
    
    return patternStyles[pattern] || {}
  }
  
  function getTextStyle() {
    return {
      fontFamily: textStyle.value.fontFamily,
      fontSize: textStyle.value.fontSize,
      color: textStyle.value.color,
      textAlign: textStyle.value.textAlign,
      width: '100%',
      textShadow: '0px 2px 4px rgba(0,0,0,0.3)'
    }
  }
  
  async function generatePost() {
    if (!postPreview.value) return
    
    isGenerating.value = true
    
    try {
      // Allow a brief moment for rendering
      await new Promise(resolve => setTimeout(resolve, 100))
      
      // Get the parent post element that includes the entire Instagram post
      const postElement = postPreview.value.closest('.instagram-post-preview')
      
      const canvas = await html2canvas(postElement, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: null
      })
      
      isGenerating.value = false
      return canvas
    } catch (error) {
      console.error('Error generating image:', error)
      isGenerating.value = false
      return null
    }
  }
  
  async function downloadPost(format = 'png') {
    const canvas = await generatePost()
    if (!canvas) return
    
    const link = document.createElement('a')
    const mimeType = format === 'jpg' ? 'image/jpeg' : 'image/png'
    const quality = format === 'jpg' ? 0.9 : undefined
    
    link.download = `instagram-post.${format}`
    link.href = canvas.toDataURL(mimeType, quality)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }
  
  async function copyToClipboard() {
    const canvas = await generatePost()
    if (!canvas) return
    
    try {
      canvas.toBlob(async (blob) => {
        await navigator.clipboard.write([
          new ClipboardItem({
            [blob.type]: blob
          })
        ])
        
        copyStatus.value = true
        setTimeout(() => {
          copyStatus.value = false
        }, 2000)
      })
    } catch (error) {
      console.error('Error copying to clipboard:', error)
    }
  }
  
  // Initialize when component is mounted
  onMounted(() => {
    // Load Google Fonts
    const linkElement = document.createElement('link')
    linkElement.rel = 'stylesheet'
    linkElement.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Montserrat:wght@400;500;700&family=Open+Sans:wght@400;600;700&family=Playfair+Display:wght@400;500;700&family=Poppins:wght@400;500;700&family=Roboto:wght@400;500;700&display=swap'
    document.head.appendChild(linkElement)
    
    // 设置默认示例内容
    postText.value = 'Enjoying a beautiful day in New York! ☀️ #travel #newyork #vacation'
    
    // Update the content editable div with initial text
    if (richTextEditor.value) {
      richTextEditor.value.innerText = postText.value
      textLength.value = postText.value.length
    }
    
    background.value = {
      type: 'gradient',
      color: '#4F46E5',
      gradientStart: '#5B21B6',
      gradientEnd: '#EC4899',
      gradientDirection: 'to bottom right',
      pattern: 'dots'
    }
    
    // 添加默认推荐标签
    hashtags.value = ['nyc', 'manhattan', 'citylife', 'photography', 'urban', 'travelphotography']
    
    // Set default date time to current time
    const now = new Date()
    postDateTime.value = now.toISOString().slice(0, 16) // Format: YYYY-MM-DDTHH:MM
    updatePostTimes()
    
    // 默认显示评论
    showComments.value = true
    
    // 默认开启验证标记
    isVerified.value = true
    
    // 默认设置Instagram故事
    hasStory.value = true
  })

  // 添加标签功能
  function addTag(tag) {
    const text = postText.value
    postText.value = `${text} #${tag}`
    
    // Also update the contenteditable div
    if (richTextEditor.value) {
      richTextEditor.value.innerText = postText.value
      textLength.value = postText.value.length
    }
  }

  // 插入标签功能
  function insertHashtag() {
    // 显示标签选择面板或添加标签提示
    const tag = prompt(t('tools.instagram-post-generator.prompts.enterHashtag'), 'instagram')
    if (tag) {
      addTag(tag.replace(/\s+/g, ''))
    }
  }

  // 提及用户功能
  function insertMention() {
    const mentionUsername = prompt(t('tools.instagram-post-generator.prompts.enterUsername'), 'instagram')
    if (mentionUsername) {
      const text = postText.value
      postText.value = `${text} @${mentionUsername.replace(/\s+/g, '')}`
      
      // Also update the contenteditable div
      if (richTextEditor.value) {
        richTextEditor.value.innerText = postText.value
        textLength.value = postText.value.length
      }
    }
  }

  // 表情符号功能
  function addEmoji(emoji) {
    postText.value += emoji
    showEmojiPicker.value = false
    
    // Also update the contenteditable div
    if (richTextEditor.value) {
      richTextEditor.value.innerText = postText.value
      textLength.value = postText.value.length
    }
  }

  // 文本输入处理
  function onTextInput(event) {
    // 从contenteditable div获取内容
    const content = event.target.innerText
    postText.value = content
    textLength.value = content.length
  }

  // 验证数字输入
  function validateNumberInput(field) {
    if (field === 'likeCount') {
      const value = parseInt(likeCount.value, 10)
      if (isNaN(value)) {
        likeCount.value = 0
      }
    } else if (field === 'commentCount') {
      const value = parseInt(commentCount.value, 10)
      if (isNaN(value)) {
        commentCount.value = 0
      }
    } else if (field === 'viewCount') {
      const value = parseInt(viewCount.value, 10)
      if (isNaN(value)) {
        viewCount.value = 0
      }
    }
  }

  // Calculate relative time for display
  function updatePostTimes() {
    if (!postDateTime.value) return
    
    const postTime = new Date(postDateTime.value)
    const now = new Date()
    
    // Calculate difference in milliseconds
    const diffMs = now - postTime
    
    // Convert to minutes, hours, days
    const diffMinutes = Math.floor(diffMs / 60000)
    const diffHours = Math.floor(diffMs / 3600000)
    const diffDays = Math.floor(diffMs / 86400000)
    
    // Format relative time for Instagram style
    if (diffMinutes < 60) {
      timePosted.value = `${diffMinutes}m`
    } else if (diffHours < 24) {
      timePosted.value = `${diffHours}h`
    } else if (diffDays < 7) {
      timePosted.value = `${diffDays}d`
    } else {
      // For older posts, use week count
      timePosted.value = `${Math.floor(diffDays / 7)}w`
    }
    
    // Format the full date for the bottom of the post
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' }
    postDate.value = postTime.toLocaleDateString('en-US', options)
  }

  // Avatar handler methods
  function onAvatarSelected(event) {
    const file = event.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = e => {
        avatarPreview.value = e.target.result
      }
      reader.readAsDataURL(file)
    }
  }

  function removeAvatar() {
    avatarPreview.value = null
  }

  // Ensure the emoji picker button works correctly
  function showEmojiPickerFunc(event) {
    event.stopPropagation()
    showEmojiPicker.value = !showEmojiPicker.value
  }

  // 数字格式化
  const formatLikes = (num) => {
    const numVal = Number(num)
    if (numVal >= 1000000) {
      return (numVal / 1000000).toFixed(1) + 'M'
    } else if (numVal >= 1000) {
      return (numVal / 1000).toFixed(1) + 'K'
    }
    return numVal.toString()
  }

  // Add the formatPostText function in the <script setup> section
  // This should be placed in the methods or setup section of the component

  /**
   * Format post text by processing hashtags, mentions, and emojis
   * @param {string} text - The raw post text to be formatted
   * @return {string} - HTML formatted text with proper styling for hashtags and mentions
   */
  const formatPostText = (text) => {
    if (!text) return '';
    
    // Process hashtags - replace #word with styled span
    let formatted = text.replace(/#(\w+)/g, '<span class="hashtag">#$1</span>');
    
    // Process mentions - replace @user with styled span
    formatted = formatted.replace(/@(\w+)/g, '<span class="mention">@$1</span>');
    
    // Convert line breaks to <br> tags
    formatted = formatted.replace(/\n/g, '<br>');
    
    return formatted;
  };
  </script>

<style scoped>
.instagram-post {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}
</style>