<template>
    <div class="w-full flex flex-col items-center py-6 mb-8">
        <div class="featured-scroll-outer">
            <span class="featured-title">Featured in:</span>
            <div class="featured-scroll-inner" ref="scrollInner">
                <!-- Product Hunt -->
                <!-- <a href="https://www.producthunt.com/posts/ufreetools" target="_blank" rel="noopener"
                    class="featured-badge group">
                    <span class="icon-bg">
                        <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                            <circle cx="16" cy="16" r="16" fill="#DA552F" />
                            <text x="16" y="22" text-anchor="middle" font-size="18" font-family="Arial" fill="white"
                                font-weight="bold">P</text>
                        </svg>
                    </span>
                    <span class="featured-label">Product Hunt</span>
                </a> -->
                <!-- Y Combinator -->
                <a href="https://news.ycombinator.com/item?id=43585750" target="_blank" rel="noopener"
                    class="featured-badge group">
                    <span class="icon-bg">
                        <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                            <circle cx="16" cy="16" r="16" fill="#FF6600" />
                            <text x="16" y="22" text-anchor="middle" font-size="18" font-family="Arial" fill="white"
                                font-weight="bold">Y</text>
                        </svg>
                    </span>
                    <span class="featured-label">Y Combinator</span>
                </a>
                <!-- Indie Hackers -->
                <a href="https://www.indiehackers.com/post/i-built-a-free-dev-tools-collection-to-solve-my-own-frustrations-looking-for-feedback-gPsprVENf8vZdzGfYntD"
                    target="_blank" rel="noopener" class="featured-badge group">
                    <span class="icon-bg">
                        <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                            <rect width="32" height="32" rx="16" fill="#14213D" />
                            <text x="16" y="22" text-anchor="middle" font-size="16" font-family="Arial" fill="white"
                                font-weight="bold">IH</text>
                        </svg>
                    </span>
                    <span class="featured-label">Indie Hackers</span>
                </a>
                <!-- Reddit -->
                <!-- <a href="https://www.reddit.com/" target="_blank" rel="noopener" class="featured-badge group">
                    <span class="icon-bg">
                        <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                            <circle cx="16" cy="16" r="16" fill="#FF4500" />
                            <circle cx="16" cy="16" r="7" fill="white" />
                            <circle cx="13" cy="15" r="1.2" fill="#FF4500" />
                            <circle cx="19" cy="15" r="1.2" fill="#FF4500" />
                            <ellipse cx="16" cy="18" rx="3" ry="1.2" fill="#FF4500" />
                        </svg>
                    </span>
                    <span class="featured-label">Reddit</span>
                </a> -->
                <!-- SitePoint -->
                <!-- <a href="https://www.sitepoint.com/" target="_blank" rel="noopener" class="featured-badge group">
                    <span class="icon-bg">
                        <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                            <rect width="32" height="32" rx="16" fill="#2D9CDB" />
                            <polygon points="16,8 24,16 16,24 8,16" fill="white" />
                        </svg>
                    </span>
                    <span class="featured-label">SitePoint</span>
                </a> -->
                <!-- LinkedIn -->
                <!-- <a href="https://www.linkedin.com" target="_blank" rel="noopener" class="featured-badge group">
                    <span class="icon-bg">
                        <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                            <rect width="32" height="32" rx="16" fill="#0077B5" />
                            <text x="16" y="22" text-anchor="middle" font-size="14" font-family="Arial" fill="white"
                                font-weight="bold">in</text>
                        </svg>
                    </span>
                    <span class="featured-label">LinkedIn</span>
                </a> -->
                <!-- BetaList -->
                <a href="https://betalist.com/startups/ufreetools" target="_blank" rel="noopener"
                    class="featured-badge group">
                    <span class="icon-bg">
                        <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                            <rect width="32" height="32" rx="16" fill="#1A1A1A" />
                            <text x="16" y="22" text-anchor="middle" font-size="14" font-family="Arial" fill="white"
                                font-weight="bold">β</text>
                        </svg>
                    </span>
                    <span class="featured-label">BetaList</span>
                </a>
                <!-- Tweet -->
                <a href="https://twitter.com/search?q=ufreetools" target="_blank" rel="noopener"
                    class="featured-badge group">
                    <span class="icon-bg">
                        <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                            <circle cx="16" cy="16" r="16" fill="#1DA1F2" />
                            <text x="16" y="22" text-anchor="middle" font-size="16" font-family="Arial" fill="white"
                                font-weight="bold">t</text>
                        </svg>
                    </span>
                    <span class="featured-label">Tweet</span>
                </a>
                <!-- Huzzler -->
                <a href="https://huzzler.so/products/lqftrD1alr/ufreetools" target="_blank" rel="noopener"
                    class="featured-badge group">
                    <span class="icon-bg">
                        <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                            <rect width="32" height="32" rx="16" fill="#6C63FF" />
                            <text x="16" y="22" text-anchor="middle" font-size="14" font-family="Arial" fill="white"
                                font-weight="bold">Hz</text>
                        </svg>
                    </span>
                    <span class="featured-label">Huzzler</span>
                </a>
                <!-- Fazier -->
                <a href="https://fazier.com/launches/ufreetools" target="_blank" rel="noopener"
                    class="featured-badge group">
                    <span class="icon-bg">
                        <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                            <rect width="32" height="32" rx="16" fill="#00B894" />
                            <text x="16" y="22" text-anchor="middle" font-size="14" font-family="Arial" fill="white"
                                font-weight="bold">Fz</text>
                        </svg>
                    </span>
                    <span class="featured-label">Fazier</span>
                </a>
                <!-- Twelve.tools -->
                <!-- <a href="https://twelve.tools/" target="_blank" rel="noopener" class="featured-badge group">
                    <span class="icon-bg">
                        <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                            <rect width="32" height="32" rx="16" fill="#F9A825" />
                            <text x="16" y="22" text-anchor="middle" font-size="14" font-family="Arial" fill="white"
                                font-weight="bold">12</text>
                        </svg>
                    </span>
                    <span class="featured-label">Twelve.tools</span>
                </a> -->
                <!-- FMHY Wiki -->
                <a href="https://github.com/fmhy/FMHY/wiki/%F0%9F%93%82-Miscellaneous " target="_blank" rel="noopener"
                    class="featured-badge group">
                    <span class="icon-bg">
                        <!-- GitHub 官方 Logo SVG -->
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12 .297c-6.502 0-11.75 5.243-11.75 11.75 0 5.22.329 9.643 2.247 13.452.164.305.299.407.499.407.223 0 .36-.114.497-.399.967-1.96 2.467-3.18 4.358-3.18 1.05 0 1.96.37 2.61 1.01.65.64 1.01 1.55 1.01 2.61 0 1.89-1.22 3.39-3.18 4.36-.3.164-.407.3-.407.5 0 .223.114.36.399.497 1.96.967 3.18 2.467 3.18 4.358 0 6.502-5.243 11.75-11.75 11.75C5.243 24 0 18.757 0 12.255 0 5.75 5.243.297 12 .297z" />
                            <path
                                d="M12 2.713c-5.073 0-9.25 4.117-9.25 9.25 0 4.123 2.662 7.67 6.498 8.85.47.086.63-.21.63-.467 0-.233-.01-.84-.01-1.68-2.73.597-3.316-1.316-3.316-1.316-.447-1.13-1.09-1.427-1.09-1.427-.897-.61.068-.6.068-.6 1.0.07 1.523 1.03 1.523 1.03.897 1.53 2.34 1.09 2.91.833.09-.647.35-1.09.63-1.337-2.213-.25-4.527-1.113-4.527-4.947 0-1.09.39-1.983 1.03-2.683-.107-.253-.447-1.27.097-2.65 0 0 .84-.27 2.75 1.027A9.577 9.577 0 0 1 12 6.71a9.533 9.533 0 0 1 2.893.387c1.91-1.3 2.75-1.027 2.75-1.027.543 1.38.203 2.4.097 2.65.64.7 1.03 1.593 1.03 2.683 0 3.847-2.317 4.693-4.53 4.94.357.307.673.92.673 1.853 0 1.337-.013 2.417-.013 2.747 0 .267.16.57.647.467A9.96 9.96 0 0 0 21.25 12c0-5.134-4.177-9.25-9.25-9.25z" />
                        </svg>
                    </span>
                    <span class="featured-label">FMHY Wiki</span>
                </a>
                <!-- F6S -->
                <a href="https://www.f6s.com/ufreetools" target="_blank" rel="noopener" class="featured-badge group">
                    <span class="icon-bg">
                        <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                            <rect width="32" height="32" rx="16" fill="#00B1B1" />
                            <text x="16" y="22" text-anchor="middle" font-size="14" font-family="Arial" fill="white"
                                font-weight="bold">F6S</text>
                        </svg>
                    </span>
                    <span class="featured-label">F6S</span>
                </a>
                <slot />
            </div>
        </div>
    </div>
</template>

<style scoped>
.featured-badge {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background: transparent;
    border-radius: 9999px;
    padding: 0.25rem 1rem 0.25rem 0.25rem;
    transition: box-shadow 0.2s, transform 0.2s;
    text-decoration: none;
    color: #2563eb;
    font-weight: 500;
    font-size: 1rem;
}

.featured-badge:hover,
.featured-badge:focus {
    box-shadow: 0 4px 16px 0 rgba(59, 130, 246, 0.10);
    background: #f0f4ff;
    transform: translateY(-2px) scale(1.04);
    color: #1d4ed8;
}

.icon-bg {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.25rem;
    height: 2.25rem;
    border-radius: 9999px;
    background: white;
    box-shadow: 0 2px 8px 0 rgba(59, 130, 246, 0.06);
    margin-right: 0.25rem;
}

.featured-label {
    white-space: nowrap;
    font-size: 1rem;
    color: #2563eb;
    transition: color 0.2s;
}

.dark .featured-badge {
    color: #60a5fa;
}

.dark .featured-badge:hover,
.dark .featured-badge:focus {
    background: #1e293b;
    color: #3b82f6;
}

.dark .icon-bg {
    background: #111827;
}

.dark .featured-label {
    color: #60a5fa;
}

.featured-scroll-outer {
    width: 100%;
    max-width: 100vw;
    overflow: hidden;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    /* background: #f2f3fa; */
    border-radius: 0.75rem;
    padding: 0.5rem 1rem;
    /* 适配暗色模式 */
}

/* .dark .featured-scroll-outer {
    background: #181e2a;
} */

.featured-title {
    flex: 0 0 auto;
    color: #3b82f6;
    font-weight: 600;
    font-size: 1rem;
    margin-right: 1.5rem;
    letter-spacing: 0.02em;
    white-space: nowrap;
}

.featured-scroll-inner {
    display: inline-flex;
    align-items: center;
    white-space: nowrap;
    transition: transform 0.1s linear;
    will-change: transform;
}
</style>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const scrollInner = ref(null)
let animationFrame
let pos = 0
let direction = 1 // 1: 右, -1: 左

const speed = 0.5 // px per frame, 可调整

function animate() {
    if (!scrollInner.value) return
    const outer = scrollInner.value.parentElement
    const inner = scrollInner.value
    const maxScroll = inner.scrollWidth - outer.clientWidth

    if (maxScroll <= 0) {
        inner.style.transform = `translateX(0px)`
        return // 不滚动
    }

    pos += speed * direction
    if (pos >= maxScroll) {
        direction = -1
        pos = maxScroll
    } else if (pos <= 0) {
        direction = 1
        pos = 0
    }
    inner.style.transform = `translateX(${-pos}px)`
    animationFrame = requestAnimationFrame(animate)
}

onMounted(() => {
    animationFrame = requestAnimationFrame(animate)
})
onBeforeUnmount(() => {
    cancelAnimationFrame(animationFrame)
})
</script>