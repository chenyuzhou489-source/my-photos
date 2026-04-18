const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    multiplier: 0.7, // 极其缓慢的电影步调
    lerp: 0.03
});

// 图片入场：从上至下缓慢柔化淡入
gsap.utils.toArray(".reveal").forEach((box) => {
    gsap.from(box, {
        scrollTrigger: {
            trigger: box,
            scroller: "[data-scroll-container]"
        },
        opacity: 0,
        y: 80,
        filter: "blur(30px)",
        duration: 3,
        ease: "power2.out"
    });
});

// 打字机式文字渐入
scroll.on('scroll', (obj) => {
    // 简单的滚动触发逻辑
    const items = document.querySelectorAll('.typewriter-text');
    items.forEach(item => {
        const position = item.getBoundingClientRect().top;
        if(position < window.innerHeight * 0.85) {
            gsap.to(item, { opacity: 0.7, y: 0, duration: 2, ease: "power1.out" });
        }
    });
});

// 自定义光标：文艺极简
const cursor = document.querySelector('.cursor-dot');
document.addEventListener('mousemove', e => {
    gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.5, ease: "expo.out" });
});
// 定义你的 GitHub 基础路径
const baseURL = "https://raw.githubusercontent.com/陈宇舟489-来源/我的照片/main/";

// 那么第一张图的地址就是：
src: baseURL + "1.jpg"
// 第二张就是：
src: baseURL + "2.jpg"