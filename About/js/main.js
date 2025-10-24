
function createPageStructure() {
    createNavigation();
    createMainContent();
    createFooter();
}

// إنشاء شريط التنقل
function createNavigation() {
    const navContainer = document.querySelector('.nav-container');
    
    // قسم الشعار
    const logoSection = document.createElement('div');
    logoSection.className = 'logo-section';
    
    const logoImg = document.createElement('img');
    logoImg.src = './logo2.jpg';
    logoImg.alt = 'sel3a Logo';
    logoImg.className = 'logo-img';
    
    const logoText = document.createElement('div');
    logoText.className = 'logo-text';
    logoText.textContent = 'SEL3A';
    
    logoSection.appendChild(logoImg);
    logoSection.appendChild(logoText);
    
    // قائمة التنقل
    const navMenu = document.createElement('ul');
    navMenu.className = 'nav-menu';
    navMenu.id = 'nav-menu';
    
    const menuItems = [
        { text: 'Home', href: '../Home/home.html' },
        { text: 'About', href: '../About/about.html' },
        { text: 'products', href: '#menu' },
        { text: 'Gallery', href: '#gallery' },
        { text: 'Contact', href: '#contact' },
        { text: 'Cart (0)', href: '../cart/cart.html' },
        { text: 'Customer Service', href: '#service' }
    ];
    
    menuItems.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = item.href;
        a.textContent = item.text;
        li.appendChild(a);
        navMenu.appendChild(li);
    });
    
    // أيقونة الهامبرجر
    const hamburger = document.createElement('div');
    hamburger.className = 'hamburger';
    hamburger.id = 'hamburger';
    
    for (let i = 0; i < 3; i++) {
        const span = document.createElement('span');
        hamburger.appendChild(span);
    }
    
    // إضافة جميع العناصر إلى الـ nav
    navContainer.appendChild(logoSection);
    navContainer.appendChild(navMenu);
    navContainer.appendChild(hamburger);
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
        switch(item.type) {
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

// إنشاء الفوتر
function createFooter() {
    const footer = document.querySelector('footer');
    
    // شعار الفوتر
    const footerLogo = document.createElement('div');
    footerLogo.className = 'footer-logo';
    
    const footerLogoImg = document.createElement('img');
    footerLogoImg.src = './logo2.jpg';
    footerLogoImg.alt = 'sel3a Logo';
    footerLogoImg.className = 'footer-logo-img';
    
    const footerH3 = document.createElement('h3');
    footerH3.textContent = 'SEL3A';
    
    footerLogo.appendChild(footerLogoImg);
    footerLogo.appendChild(footerH3);
    
    // روابط السوشيال ميديا
    const socialLinks = document.createElement('div');
    socialLinks.className = 'social-links';
    
    const socialPlatforms = [
        { icon: 'fab fa-facebook', href: '#' },
        { icon: 'fab fa-twitter', href: '#' },
        { icon: 'fab fa-instagram', href: '#' },
        { icon: 'fab fa-snapchat', href: '#' }
    ];
    
    socialPlatforms.forEach(platform => {
        const a = document.createElement('a');
        a.href = platform.href;
        
        const i = document.createElement('i');
        i.className = platform.icon;
        
        a.appendChild(i);
        socialLinks.appendChild(a);
    });
    
    // حقوق النشر
    const copyright = document.createElement('p');
    copyright.className = 'copyright';
    copyright.textContent = '© 2025 Sel3a Website. All Rights Reserved.';
    
    // إضافة جميع العناصر إلى الفوتر
    footer.appendChild(footerLogo);
    footer.appendChild(socialLinks);
    footer.appendChild(copyright);
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
    
    // تطبيق الأنماط على navigation
    const nav = document.querySelector('nav');
    nav.style.backgroundColor = '#333';
    nav.style.position = 'sticky';
    nav.style.top = '0';
    nav.style.zIndex = '100';
    nav.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
    nav.style.padding = '0 20px';
    
    const navContainer = document.querySelector('.nav-container');
    navContainer.style.display = 'flex';
    navContainer.style.justifyContent = 'space-between';
    navContainer.style.alignItems = 'center';
    navContainer.style.maxWidth = '1200px';
    navContainer.style.margin = '0 auto';
    navContainer.style.position = 'relative';
    
    // تطبيق الأنماط على الشعار
    const logoImg = document.querySelector('.logo-img');
    logoImg.style.width = '50px';
    logoImg.style.height = '50px';
    logoImg.style.marginRight = '15px';
    logoImg.style.borderRadius = '50%';
    
    const logoText = document.querySelector('.logo-text');
    logoText.style.color = '#F5F5DC';
    logoText.style.fontSize = '1.8rem';
    logoText.style.fontWeight = 'bold';
    logoText.style.fontFamily = 'Playfair Display, serif';
    
    // تطبيق الأنماط على قائمة التنقل
    const navMenu = document.querySelector('.nav-menu');
    navMenu.style.display = 'flex';
    navMenu.style.listStyle = 'none';
    navMenu.style.margin = '0';
    
    // تطبيق الأنماط على عناصر القائمة
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.style.color = '#fff';
        link.style.textDecoration = 'none';
        link.style.padding = '20px 15px';
        link.style.display = 'block';
        link.style.transition = 'all 0.3s';
        link.style.fontSize = '1rem';
        
        // إضافة تأثير hover
        link.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#36d4e9';
            this.style.color = '#35424a';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.backgroundColor = 'transparent';
            this.style.color = '#fff';
        });
    });
    
    // تطبيق الأنماط على الهامبرجر
    const hamburger = document.querySelector('.hamburger');
    hamburger.style.display = 'none';
    hamburger.style.flexDirection = 'column';
    hamburger.style.cursor = 'pointer';
    hamburger.style.padding = '5px';
    
    const hamburgerSpans = document.querySelectorAll('.hamburger span');
    hamburgerSpans.forEach(span => {
        span.style.width = '25px';
        span.style.height = '3px';
        span.style.backgroundColor = '#fff';
        span.style.margin = '3px 0';
        span.style.transition = '0.3s';
        span.style.borderRadius = '2px';
    });
    
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
    
    // تطبيق الأنماط على القوائم
    const lists = document.querySelectorAll('ul');
    lists.forEach(ul => {
        ul.style.margin = '15px 0';
        ul.style.paddingLeft = '20px';
    });
    
    const listItems = document.querySelectorAll('li');
    listItems.forEach(li => {
        li.style.marginBottom = '10px';
        li.style.color = '#555';
    });
    
    const strongElements = document.querySelectorAll('strong');
    strongElements.forEach(strong => {
        strong.style.color = '#35424a';
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
        img.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
        });
        
        img.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    // تطبيق الأنماط على الفوتر
    const footer = document.querySelector('footer');
    footer.style.backgroundColor = '#333';
    footer.style.color = '#fff';
    footer.style.textAlign = 'center';
    footer.style.padding = '30px';
    footer.style.marginTop = '60px';
    
    const footerLogo = document.querySelector('.footer-logo');
    footerLogo.style.display = 'flex';
    footerLogo.style.justifyContent = 'center';
    footerLogo.style.alignItems = 'center';
    footerLogo.style.marginBottom = '15px';
    
    const footerLogoImg = document.querySelector('.footer-logo-img');
    footerLogoImg.style.width = '50px';
    footerLogoImg.style.height = '50px';
    footerLogoImg.style.marginRight = '10px';
    footerLogoImg.style.borderRadius = '50%';
    
    const socialLinks = document.querySelector('.social-links');
    socialLinks.style.margin = '20px 0';
    
    const socialIcons = document.querySelectorAll('.social-links a');
    socialIcons.forEach(icon => {
        icon.style.color = '#fff';
        icon.style.margin = '0 10px';
        icon.style.fontSize = '1.5rem';
        icon.style.transition = 'color 0.3s';
        
        icon.addEventListener('mouseenter', function() {
            this.style.color = '#36d4e9';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.color = '#fff';
        });
    });
    
    const copyright = document.querySelector('.copyright');
    copyright.style.marginTop = '15px';
    copyright.style.fontSize = '0.9rem';
    copyright.style.color = '#aaa';
}

// التعامل مع التصميم المتجاوب
function handleResponsiveDesign() {
    function updateLayout() {
        const screenWidth = window.innerWidth;
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('nav-menu');
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

// إعداد القائمة الهامبرجر
function setupHamburgerMenu() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
            
            if (navMenu.classList.contains('active')) {
                navMenu.style.right = '0';
            } else {
                navMenu.style.right = '-100%';
            }
        });
        
        // إغلاق القائمة عند النقر على رابط
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
                navMenu.style.right = '-100%';
            });
        });
    }
}

// إعداد تغيير الصور
function setupImageRotation() {
    const images = [
        './imgs/about.jpg',
        './imgs/about1.jpg',
        './imgs/about2.jpg',
        './imgs/about3.jpg',
        './imgs/about4.jpg',
    ];
    
    let currentImageIndex = 0;
    
    function changeImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        const mainImage = document.getElementById('mainimage');
        if (mainImage) {
            mainImage.src = images[currentImageIndex];
            
            // إضافة animation عند تغيير الصورة
            mainImage.animate([
                { opacity: 0 },
                { opacity: 1 }
            ], {
                duration: 500,
                iterations: 1
            });
        }
    }
    
    // تغيير الصورة عند النقر
    const mainImage = document.getElementById('mainimage');
    if (mainImage) {
        mainImage.addEventListener('click', changeImage);
    }
      }

createPageStructure();
applyStylesWithJS();
handleResponsiveDesign();
setupHamburgerMenu();
setupImageRotation();
