// تفعيل القائمة المنسدلة للموبايل
document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    // تأثيرات التمرير السلس للروابط
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // إضافة تأثيرات عند التمرير
    window.addEventListener('scroll', function() {
        const serviceCards = document.querySelectorAll('.service-card');
        const blogCards = document.querySelectorAll('.blog-card');
        
        serviceCards.forEach(card => {
            const position = card.getBoundingClientRect();
            
            // إذا كان العنصر في نطاق الشاشة
            if(position.top < window.innerHeight - 100) {
                card.classList.add('fade-in');
            }
        });
        
        blogCards.forEach(card => {
            const position = card.getBoundingClientRect();
            
            // إذا كان العنصر في نطاق الشاشة
            if(position.top < window.innerHeight - 100) {
                card.classList.add('fade-in');
            }
        });
    });
    
    // إضافة تأثيرات للنماذج
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // هنا يمكن إضافة كود إرسال النموذج
            alert('شكراً لتواصلك معنا! سنرد عليك في أقرب وقت ممكن.');
            this.reset();
        });
    }
    
    // تأثيرات للصور والأيقونات
    const icons = document.querySelectorAll('.bg-blue-100, .bg-green-100, .bg-purple-100, .bg-yellow-100, .bg-red-100, .bg-indigo-100');
    icons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.classList.add('transform', 'scale-110');
        });
        
        icon.addEventListener('mouseleave', function() {
            this.classList.remove('transform', 'scale-110');
        });
    });
});