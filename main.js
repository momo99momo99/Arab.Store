
// بيانات المنتجات
const products = [
    // لابتوبات
    {
        id: 11,
         name: "لابتوب TOSHIBA-Black",
        price: 12000,
        category: "laptops",
        image: "assets/Tosheba.jpg",
        description: "لابتوب عالي الأداء مع معالج Intel Core i3",
        detailedSpecs: {
            processor: "Intel Core i3-3120M ",
            ram: "4GB LPDDR4x",
            storage: "512GB HDD",
            display: "16.5 بوصة 4K UHD+ (3840 x 2400)",
            graphics: "بيشغل PES19 تمام",
            battery: "30Wh، حتى نصف ساعة",
            weight: "100 كيلو",
            os: "Windows 10 Pro",
            ports: "2x Thunderbolt 4، 3.5mm سماعات",
            warranty: "ولا ثانية واحدة"
        }
    },
    {
        id: 1,
        name: "لابتوب Dell XPS 13",
        price: 4500,
        category: "laptops",
        image: "assets/photo-1588872657578-7efd1f1555ed.avif",
        description: "لابتوب عالي الأداء مع معالج Intel Core i7",
        detailedSpecs: {
            processor: "Intel Core i7-1165G7",
            ram: "16GB LPDDR4x",
            storage: "512GB SSD NVMe",
            display: "13.3 بوصة 4K UHD+ (3840 x 2400)",
            graphics: "Intel Iris Xe Graphics",
            battery: "52Wh، حتى 12 ساعة",
            weight: "1.2 كيلو",
            os: "Windows 11 Pro",
            ports: "2x Thunderbolt 4، 3.5mm سماعات",
            warranty: "سنة واحدة"
        }
    },
    {
        id: 10,
        name: "لابتوب ASUS ROG Gaming",
        price: 6500,
        category: "laptops",
        image: "assets/photo-1603302576837-37561b2e2302.avif",
        description: " لابتوب عالي الأداء مع معالج خارق Intel Core i9",
        detailedSpecs: {
            processor: "Intel Core i9-1190G9",
            ram: "32GB LPDDR4x",
            storage: "1024GB SSD NVMe",
            display: "14.3 بوصة 4K UHD+ (3840 x 2400)",
            graphics: "Intel Iris Xe Graphics",
            battery: "52Wh، حتى 8 ساعة",
            weight: "1.1 كيلو",
            os: "Windows 11 Pro",
            ports: "2x Thunderbolt 4، 3.5mm سماعات",
            warranty: "سنة واحدة"
        }
    },
    {
        id: 2,
        name: "لابتوب MacBook Pro",
        price: 7200,
        category: "laptops",
        image:"assets/photo-1517336714731-489689fd1ca8.avif",
        description: "MacBook Pro بمعالج M2 وذاكرة 16GB",
        detailedSpecs: {
            processor: "Apple M2 Pro 10-Core",
            ram: "16GB Unified Memory",
            storage: "512GB SSD",
            display: "14.2 بوصة Liquid Retina XDR",
            graphics: "16-Core GPU",
            battery: "70Wh، حتى 17 ساعة",
            weight: "1.6 كيلو",
            os: "macOS Ventura",
            ports: "3x Thunderbolt 4، HDMI، SD card",
            warranty: "سنة واحدة"
        }
    },
    {
        id: 3,
        name: "لابتوب HP Pavilion",
        price: 3200,
        category: "laptops",
        image: "assets/photo-1496181133206-80ce9b88a853.avif",
        description: "لابتوب متوسط بأداء ممتاز للاستخدام اليومي",
        detailedSpecs: {
            processor: "AMD Ryzen 5 5500U",
            ram: "8GB DDR4",
            storage: "256GB SSD + 1TB HDD",
            display: "15.6 بوصة Full HD IPS",
            graphics: "AMD Radeon Graphics",
            battery: "41Wh، حتى 8 ساعات",
            weight: "1.75 كيلو",
            os: "Windows 11 Home",
            ports: "USB-A، USB-C، HDMI، SD card",
            warranty: "سنة واحدة"
        }
    },
    
    // إكسسوارات
    {
        id: 4,
        name: "ماوس لاسلكي Logitech",
        price: 150,
        category: "accessories",
        image: "assets/photo-1527864550417-7fd91fc51a46.avif",
        description: "ماوس لاسلكي عالي الدقة",
        detailedSpecs: {
            type: "ماوس لاسلكي",
            connectivity: "Bluetooth + USB Receiver",
            dpi: "1000-4000 DPI قابل للتعديل",
            battery: "بطارية AA، تدوم 18 شهر",
            compatibility: "Windows، Mac، ChromeOS",
            features: "مقاوم للماء والغبار",
            color: "أسود",
            weight: "99 جرام",
            warranty: "سنتان"
        }
    },
    {
        id: 12,
          name: "كاميرا ويب عالية الدقة",
        price: 280,
        category: "accessories",
        image: "assets/photo-1587825140708-dfaf72ae4b04.avif",
        description: "كاميرا ويب عالية الدقة",
        detailedSpecs: {
            type: "كاميرا ويب",
            connectivity: " USB Receiver",
            dpi: "100 بيكسل",
            battery: "بطارية AA، تدوم 18 شهر",
            compatibility: "Windows، Mac، ChromeOS",
            features: "مقاومة للماء والغبار",
            color: "أسود",
            weight: "230 جرام",
            warranty: "سنتان"
        }
    },
    {
        id: 5,
        name: "كيبورد ميكانيكي",
        price: 320,
        category: "accessories",
        image: "assets/photo-1541140532154-b024d705b90a.avif",
        description: "كيبورد ميكانيكي بإضاءة RGB",
        detailedSpecs: {
            type: "كيبورد ميكانيكي",
            switches: "Cherry MX Blue",
            layout: "تخطيط عربي/إنجليزي",
            backlight: "RGB بـ 16.8 مليون لون",
            connectivity: "USB-C مع كابل منفصل",
            keycaps: "Double-shot PBT",
            features: "Anti-ghosting، N-Key Rollover",
            software: "برنامج تخصيص متقدم",
            warranty: "3 سنوات"
        }
    },
    {
        id: 6,
        name: "سماعات JBL متميزة",
        price: 280,
        category: "accessories",
        image: "assets/JpL.JPG",
        description: "سماعات لاسلكية بجودة صوت عالية",
        detailedSpecs: {
            type: "سماعات فوق الأذن",
            connectivity: "Bluetooth 5.0 + 3.5mm",
            battery: "30 ساعة تشغيل",
            charging: "USB-C، شحن سريع",
            features: "إلغاء الضوضاء النشط",
            drivers: "40mm Dynamic Drivers",
            frequency: "20Hz - 20kHz",
            microphone: "مايك مدمج لالمكالمات",
            warranty: "سنتان"
        }
    },
    
    // قطع غيار
    {
        id: 7,
        name: "ذاكرة RAM 16GB",
        price: 450,
        category: "parts",
        image: "assets/photo-1591799264318-7e6ef8ddb7ea.avif",
        description: "ذاكرة عشوائية DDR4 بسرعة 3200MHz",
        detailedSpecs: {
            type: "DDR4 SODIMM",
            capacity: "16GB (1x16GB)",
            speed: "3200MHz (PC4-25600)",
            voltage: "1.2V",
            latency: "CL22",
            compatibility: "معظم لابتوبات DDR4",
            features: "غير ECC، Unbuffered",
            brand: "Kingston FURY",
            warranty: "مدى الحياة المحدود"
        }
    },
    {
        id: 8,
        name: "قرص SSD 1TB",
        price: 580,
        category: "parts",
        image: "assets/photo-1597872200969-2b65d56bd16b.avif",
        description: "قرص صلب SSD بسعة 1 تيرابايت",
        detailedSpecs: {
            type: "M.2 NVMe SSD",
            capacity: "1TB (1000GB)",
            interface: "PCIe 3.0 x4",
            readSpeed: "3500 MB/s",
            writeSpeed: "3000 MB/s",
            formFactor: "2280 (22x80mm)",
            controller: "Phison E12",
            nand: "3D TLC NAND",
            warranty: "5 سنوات"
        }
    },
    {
        id: 9,
        name: "شاحن لابتوب عالمي",
        price: 120,
        category: "parts",
        image: "assets/Capture.PNG",
        description: "شاحن متوافق مع معظم أجهزة اللابتوب",
        detailedSpecs: {
            type: "شاحن عالمي",
            power: "65W",
            input: "100-240V AC 50/60Hz",
            output: "15V-20V DC قابل للتعديل",
            connectors: "8 أطراف مختلفة",
            cable: "1.5 متر",
            protection: "حماية من الجهد الزائد",
            compatibility: "HP، Dell، Acer، Asus وأكثر",
            warranty: "سنة واحدة"
        }
    }
];

// عربة التسوق
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// عناصر DOM
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const cartModal = document.getElementById('cart-modal');
const cartLink = document.querySelector('.cart-link');
const closeModal = document.querySelector('.close');
const productsGrid = document.getElementById('products-grid');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const cartCount = document.querySelector('.cart-count');
const categoryTabs = document.querySelectorAll('.tab-button');

// تهيئة الموقع
document.addEventListener('DOMContentLoaded', function() {
    initializeWebsite();
});

function initializeWebsite() {
    setupEventListeners();
    displayProducts('all');
    updateCartUI();
    animateOnScroll();
}

function setupEventListeners() {
    // Navigation
    hamburger.addEventListener('click', toggleMobileMenu);
    
    // Category tabs
    categoryTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            switchCategory(this, category);
        });
    });
    
    // Cart modal
    cartLink.addEventListener('click', openCartModal);
    closeModal.addEventListener('click', closeCartModal);
    window.addEventListener('click', function(event) {
        if (event.target === cartModal) {
            closeCartModal();
        }
    });
    
    // Contact form
    const contactForm = document.querySelector('.contact-form');
    contactForm.addEventListener('submit', handleContactForm);
    
    // Smooth scrolling for navigation
    document.querySelectorAll('.nav-link[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
                if (navMenu.classList.contains('active')) {
                    toggleMobileMenu();
                }
            }
        });
    });
}

function toggleMobileMenu() {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
}

function switchCategory(clickedTab, category) {
    // Remove active class from all tabs
    categoryTabs.forEach(tab => tab.classList.remove('active'));
    // Add active class to clicked tab
    clickedTab.classList.add('active');
    // Display products for selected category
    displayProducts(category);
}

function displayProducts(category) {
    const filteredProducts = category === 'all' 
        ? products 
        : products.filter(product => product.category === category);
    
    productsGrid.innerHTML = '';
    
    filteredProducts.forEach((product, index) => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
        
        // Add animation delay
        setTimeout(() => {
            productCard.classList.add('fade-in-up');
        }, index * 100);
    });
}

function createProductCard(product) {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-image">
        <h3>${product.name}</h3>
        <p class="product-price">${product.price} جنيه</p>
        <p style="color: #ccc; font-size: 0.9rem; margin-bottom: 1rem;">${product.description}</p>
        <div class="product-buttons">
            <button class="details-btn" onclick="showProductDetails(${product.id})">
                <i class="fas fa-info-circle"></i> تفاصيل المنتج
            </button>
            <button class="add-to-cart" onclick="addToCart(${product.id})">
                <i class="fas fa-cart-plus"></i> إضافة للسلة
            </button>
        </div>
    `;
    return productCard;
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    updateCartUI();
    saveCartToStorage();
    showNotification('تم إضافة المنتج إلى السلة!');
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
    saveCartToStorage();
}

function updateQuantity(productId, newQuantity) {
    if (newQuantity <= 0) {
        removeFromCart(productId);
        return;
    }
    
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity = newQuantity;
        updateCartUI();
        saveCartToStorage();
    }
}

function updateCartUI() {
    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    // Update cart items
    cartItems.innerHTML = '';
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p style="text-align: center; color: #ccc; padding: 2rem;">السلة فارغة</p>';
    } else {
        cart.forEach(item => {
            const cartItem = createCartItem(item);
            cartItems.appendChild(cartItem);
        });
    }
    
    // Update total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = total.toLocaleString();
}

function createCartItem(item) {
    const cartItem = document.createElement('div');
    cartItem.className = 'cart-item';
    cartItem.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <div class="cart-item-info">
            <h4>${item.name}</h4>
            <p>${item.price} جنيه</p>
            <div class="quantity-controls">
                <button onclick="updateQuantity(${item.id}, ${item.quantity - 1})">-</button>
                <span>${item.quantity}</span>
                <button onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
            </div>
            <button class="remove-item" onclick="removeFromCart(${item.id})">
                <i class="fas fa-trash"></i> حذف
            </button>
        </div>
    `;
    return cartItem;
}

function openCartModal() {
    cartModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeCartModal() {
    cartModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function saveCartToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function handleContactForm(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    // هنا يمكن إرسال البيانات إلى الخادم
    showNotification('تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.');
    e.target.reset();
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(45deg, #4CAF50, #66BB6A);
        color: white;
        padding: 1rem 2rem;
        border-radius: 10px;
        box-shadow: 0 4px 20px rgba(76, 175, 80, 0.3);
        z-index: 3000;
        font-weight: 500;
        animation: slideInRight 0.3s ease-out;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-in';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

function animateOnScroll() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    });
    
    document.querySelectorAll('.product-card, .feature, .about-text, .contact-item').forEach(el => {
        observer.observe(el);
    });
}

// Checkout function
function showProductDetails(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    // إنشاء modal التفاصيل
    const detailsModal = document.createElement('div');
    detailsModal.className = 'modal product-details-modal';
    detailsModal.innerHTML = `
        <div class="modal-content product-details-content">
            <div class="modal-header">
                <h2>تفاصيل المنتج</h2>
                <span class="close-details" onclick="closeProductDetails()">&times;</span>
            </div>
            <div class="product-details-body">
                <div class="product-details-left">
                    <img src="${product.image}" alt="${product.name}" class="details-image">
                    <div class="product-info">
                        <h3>${product.name}</h3>
                        <p class="details-price">${product.price} جنيه</p>
                        <p class="details-description">${product.description}</p>
                        <button class="add-to-cart-details" onclick="addToCart(${product.id}); closeProductDetails();">
                            <i class="fas fa-cart-plus"></i> إضافة للسلة
                        </button>
                    </div>
                </div>
                <div class="product-details-right">
                    <h4>المواصفات التفصيلية</h4>
                    <div class="specs-list">
                        ${generateSpecsList(product.detailedSpecs)}
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(detailsModal);
    detailsModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function generateSpecsList(specs) {
    return Object.entries(specs).map(([key, value]) => {
        const arabicLabels = {
            processor: 'المعالج',
            ram: 'الذاكرة العشوائية',
            storage: 'التخزين',
            display: 'الشاشة',
            graphics: 'كرت الرسوميات',
            battery: 'البطارية',
            weight: 'الوزن',
            os: 'نظام التشغيل',
            ports: 'المنافذ',
            warranty: 'الضمان',
            type: 'النوع',
            connectivity: 'التوصيل',
            dpi: 'دقة المؤشر',
            compatibility: 'التوافق',
            features: 'المميزات',
            color: 'اللون',
            switches: 'نوع المفاتيح',
            layout: 'التخطيط',
            backlight: 'الإضاءة الخلفية',
            keycaps: 'أغطية المفاتيح',
            software: 'البرنامج',
            drivers: 'السماعات',
            frequency: 'النطاق الترددي',
            microphone: 'المايكروفون',
            charging: 'الشحن',
            capacity: 'السعة',
            speed: 'السرعة',
            voltage: 'الجهد',
            latency: 'زمن الاستجابة',
            brand: 'العلامة التجارية',
            interface: 'الواجهة',
            readSpeed: 'سرعة القراءة',
            writeSpeed: 'سرعة الكتابة',
            formFactor: 'الحجم',
            controller: 'المتحكم',
            nand: 'نوع الذاكرة',
            power: 'القدرة',
            input: 'الدخل',
            output: 'الخرج',
            connectors: 'الموصلات',
            cable: 'الكابل',
            protection: 'الحماية'
        };
        
        const label = arabicLabels[key] || key;
        return `
            <div class="spec-item">
                <span class="spec-label">${label}:</span>
                <span class="spec-value">${value}</span>
            </div>
        `;
    }).join('');
}

function closeProductDetails() {
    const modal = document.querySelector('.product-details-modal');
    if (modal) {
        modal.style.display = 'none';
        document.body.removeChild(modal);
        document.body.style.overflow = 'auto';
    }
}

function checkout() {
    if (cart.length === 0) {
        showNotification('السلة فارغة! أضف منتجات للمتابعة.');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const message = `مرحباً، أريد الاستفسار عن المنتجات التالية:\n\n` +
        cart.map(item => `• ${item.name} - الكمية: ${item.quantity} - السعر: ${item.price * item.quantity} جنيه`).join('\n') +
        `\n\nالمجموع الكلي: ${total.toLocaleString()} جنيه`;
    
    const whatsappUrl = `https://wa.me/201118328190?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// Add checkout event listener
document.addEventListener('DOMContentLoaded', function() {
    const checkoutBtn = document.querySelector('.checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', checkout);
    }
});

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .hamburger.active span:nth-child(1) {
        transform: rotate(-45deg) translate(-5px, 6px);
    }
    
    .hamburger.active span:nth-child(2) {
        opacity: 0;
    }
    
    .hamburger.active span:nth-child(3) {
        transform: rotate(45deg) translate(-5px, -6px);
    }
`;
document.head.appendChild(style);
