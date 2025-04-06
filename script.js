document.addEventListener('DOMContentLoaded', function() {
    // تغيير لون شريط التنقل عند التمرير
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.style.backgroundColor = '#1a3a5a';
            navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        } else {
            navbar.style.backgroundColor = '#2C5E92';
            navbar.style.boxShadow = 'none';
        }
    });

    // تأثيرات الصور في المعرض
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.querySelector('img').style.transform = 'scale(1.05)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.querySelector('img').style.transform = 'scale(1)';
        });
    });

    // محاكاة إرسال نموذج الاتصال
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('شكراً لتواصلكم! سنرد عليكم في أقرب وقت.');
            this.reset();
        });
    }

    // زر عرض الشجرة التفاعلية
    const viewButton = document.querySelector('.view-button');
    if (viewButton) {
        viewButton.addEventListener('click', function() {
            alert('سيتم فتح الشجرة التفاعلية في نافذة جديدة. يمكنك استخدام مكتبة مثل D3.js لإنشاء شجرة تفاعلية حقيقية.');
        });
    }
});