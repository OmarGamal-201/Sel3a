
// إنشاء جميع عناصر HTML ديناميكياً
function createPageStructure() {
    createMainContent();
}



// إنشاء المحتوى الرئيسي
function createMainContent() {
    const container = document.querySelector('.container');

    // المحتوى النصي
    const textContent = document.createElement('div');
    textContent.className = 'text-content';

    const contentData = [
        {
            type: 'heading',
            text: 'Welcome to Sel3a!'
        },
        {
            type: 'paragraph',
            text: 'We are a comprehensive platform dedicated to facilitating the buying and selling of diverse products online. Established in [Year], we strive to provide an exceptional shopping experience for all our users.'
        },
        {
            type: 'heading',
            text: 'Our Vision'
        },
        {
            type: 'paragraph',
            text: 'We believe that shopping should be easy and enjoyable. Therefore, we work to offer a wide range of products that meet our customers\' needs, from electronics and fashion to home and garden.'
        },
        {
            type: 'heading',
            text: 'Our Services'
        },
        {
            type: 'list',
            items: [
                'Diverse Product Range: We offer a variety of products across many categories.',
                'Easy Shopping Experience: A simple and user-friendly interface.',
                'Secure Payment: We ensure your personal information and payment methods are safe.',
                'Customer Support: A dedicated support team to assist you with any inquiries or issues.'
            ]
        },
        {
            type: 'heading',
            text: 'Why Choose Us?'
        },
        {
            type: 'list',
            items: [
                'Competitive Prices: We offer the best prices on products.',
                'Fast Delivery: We strive to deliver your orders as quickly as possible.',
                'Quality Guarantee: We guarantee high-quality products.'
            ]
        },
        {
            type: 'heading',
            text: 'Join Us'
        },
        {
            type: 'paragraph',
            text: 'We are always looking for ways to improve our services and provide the best. If you have any suggestions or feedback, please feel free to contact us through [Contact Methods].'
        },
        {
            type: 'paragraph',
            text: 'Thank you for visiting our site, and we wish you a wonderful shopping experience!'
        }
    ];

    contentData.forEach(item => {
        switch (item.type) {
            case 'heading':
                const h2 = document.createElement('h2');
                h2.textContent = item.text;
                textContent.appendChild(h2);
                break;
            case 'paragraph':
                const p = document.createElement('p');
                p.textContent = item.text;
                textContent.appendChild(p);
                break;
            case 'list':
                const ul = document.createElement('ul');
                item.items.forEach(listItem => {
                    const li = document.createElement('li');
                    // فصل النص العريض عن النص العادي
                    const parts = listItem.split(':');
                    if (parts.length > 1) {
                        const strong = document.createElement('strong');
                        strong.textContent = parts[0] + ':';
                        li.appendChild(strong);
                        li.appendChild(document.createTextNode(parts[1]));
                    } else {
                        li.textContent = listItem;
                    }
                    ul.appendChild(li);
                });
                textContent.appendChild(ul);
                break;
        }
    });

    // قسم الصورة
    const imageContent = document.createElement('div');
    imageContent.className = 'image-content';

    const img = document.createElement('img');
    img.id = 'mainimage';
    img.src = './imgs/about.jpg';
    img.alt = 'About Sel3a';

    imageContent.appendChild(img);

    // إضافة المحتوى إلى الـ container
    container.appendChild(textContent);
    container.appendChild(imageContent);
}

// تطبيق الأنماط باستخدام JavaScript بدلاً من CSS
function applyStylesWithJS() {
    // تطبيق الأنماط على body
    document.body.style.fontFamily = 'Poppins, Arial, sans-serif';
    document.body.style.lineHeight = '1.6';
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.backgroundColor = '#f4f4f4';
    document.body.style.minHeight = '100vh';
    document.body.style.display = 'flex';
    document.body.style.flexDirection = 'column';

    // تطبيق الأنماط على المحتوى الرئيسي
    const container = document.querySelector('.container');
    container.style.width = '90%';
    container.style.maxWidth = '1200px';
    container.style.margin = '30px auto';
    container.style.padding = '30px 20px';
    container.style.background = '#ffffff';
    container.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
    container.style.display = 'flex';
    container.style.alignItems = 'flex-start';
    container.style.gap = '40px';
    container.style.flexGrow = '1';

    // تطبيق الأنماط على المحتوى النصي
    const textContent = document.querySelector('.text-content');
    textContent.style.flex = '1';

    // تطبيق الأنماط على العناوين
    const headings = document.querySelectorAll('h2');
    headings.forEach(heading => {
        heading.style.color = '#35424a';
        heading.style.margin = '25px 0 15px 0';
        heading.style.fontFamily = 'Playfair Display, serif';
    });

    // تطبيق الأنماط على الفقرات
    const paragraphs = document.querySelectorAll('p');
    paragraphs.forEach(p => {
        p.style.marginBottom = '15px';
        p.style.color = '#555';
    });


    // تطبيق الأنماط على قسم الصورة
    const imageContent = document.querySelector('.image-content');
    imageContent.style.flex = '1';
    imageContent.style.textAlign = 'center';
    imageContent.style.display = 'flex';
    imageContent.style.alignItems = 'center';
    imageContent.style.justifyContent = 'center';
    imageContent.style.height = 'fit-content';
    imageContent.style.position = 'sticky';
    imageContent.style.top = '100px';

    // تطبيق الأنماط على الصور
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.style.maxWidth = '100%';
        img.style.height = 'auto';
        img.style.borderRadius = '8px';
        img.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        img.style.cursor = 'pointer';
        img.style.transition = 'transform 0.3s';

        // إضافة تأثير hover على الصور
        img.addEventListener('mouseenter', function () {
            this.style.transform = 'scale(1.02)';
        });

        img.addEventListener('mouseleave', function () {
            this.style.transform = 'scale(1)';
        });
    });

}

// التعامل مع التصميم المتجاوب
function handleResponsiveDesign() {
    function updateLayout() {
        const screenWidth = window.innerWidth;
        const container = document.querySelector('.container');
        const imageContent = document.querySelector('.image-content');

        if (screenWidth <= 768) {
            // تصميم الهواتف
            hamburger.style.display = 'flex';
            navMenu.style.position = 'fixed';
            navMenu.style.top = '70px';
            navMenu.style.right = '-100%';
            navMenu.style.flexDirection = 'column';
            navMenu.style.backgroundColor = '#333';
            navMenu.style.width = '100%';
            navMenu.style.textAlign = 'center';
            navMenu.style.transition = '0.3s';
            navMenu.style.boxShadow = '0 10px 27px rgba(0, 0, 0, 0.05)';
            navMenu.style.padding = '20px 0';

            container.style.flexDirection = 'column';
            imageContent.style.position = 'static';

            // تحديث أنماط عناصر القائمة
            const navItems = document.querySelectorAll('.nav-menu li');
            navItems.forEach(item => {
                item.style.width = '100%';
            });

            const navLinks = document.querySelectorAll('.nav-menu a');
            navLinks.forEach(link => {
                link.style.padding = '15px';
                link.style.borderBottom = '1px solid rgba(255, 255, 255, 0.1)';
            });
        } else {
            // تصميم الشاشات الكبيرة
            hamburger.style.display = 'none';
            navMenu.style.position = 'static';
            navMenu.style.flexDirection = 'row';
            navMenu.style.backgroundColor = 'transparent';
            navMenu.style.width = 'auto';
            navMenu.style.padding = '0';

            container.style.flexDirection = 'row';
            imageContent.style.position = 'sticky';
            imageContent.style.top = '100px';

            // إعادة تعيين أنماط عناصر القائمة
            const navItems = document.querySelectorAll('.nav-menu li');
            navItems.forEach(item => {
                item.style.width = 'auto';
            });

            const navLinks = document.querySelectorAll('.nav-menu a');
            navLinks.forEach(link => {
                link.style.padding = '20px 15px';
                link.style.borderBottom = 'none';
            });
        }
    }

    // استدعاء الدالة عند التحميل وعند تغيير الحجم
    updateLayout();
    window.addEventListener('resize', updateLayout);
}

const images = [
    'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80./',
    'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
];

let currentImageIndex = 0;

function changeImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    document.getElementById('mainimage').src = images[currentImageIndex];
}

// بدء التبديل التلقائي فوراً
setInterval(changeImage, 3000);

// تنفيذ جميع الدوال عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function () {
    createPageStructure();
    applyStylesWithJS();
    handleResponsiveDesign();

    // تعيين الصورة الأولى فوراً
    document.getElementById('mainimage').src = images[0];
});
