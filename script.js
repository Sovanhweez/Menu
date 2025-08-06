// --- GLOBAL VARIABLES ---
let menuData = {}
let translations = {}

// --- TRANSLATIONS ---
function getTranslations() {
    return {
        en: {
            // Language Selection
            chooseLanguage: "Choose Your Language",
            selectLanguage: "Select Language",
            
            // Contact Info
            callUs: "Call Us",
            openHours: "Open Hours",
            visitUs: "Visit Us",
            hours: "11:00 AM - 12:00 PM",
            address: "Erbil City Center, Kurdistan",
            
            // Categories
            breakfast: "BREAKFAST",
            salads: "SALADS", 
            sandwiches: "SANDWICHES",
            dessert: "DESSERT",
            coffee: "COFFEE",
            drinks: "DRINKS",
            
            // Menu Items
            menuItems: {
                // Breakfast
                breakfast: "BREAKFAST",
                breakfastDesc: "Egg, Croissant, Yogurt, Tea",
                
                // Salads
                quinoaSalad: "QUINOA SALAD",
                quinoaSaladDesc: "Fresh quinoa with seasonal vegetables and herbs",
                caesarSalad: "CAESAR SALAD", 
                caesarSaladDesc: "Grilled chicken with classic caesar dressing",
                greekSalad: "GREEK SALAD",
                greekSaladDesc: "Roasted beetroot with creamy feta cheese",
                codivaSalad: "CODIVA SALAD",
                codivaSaladDesc: "Premium mixed greens with grilled protein",
                
                // Sandwiches
                chickenSandwich: "CHICKEN SANDWICH",
                chickenSandwichDesc: "Juicy grilled chicken with fresh vegetables",
                beefSandwich: "BEEF SANDWICH", 
                beefSandwichDesc: "Premium beef patty with all the fixings",
                codivaSandwich: "CODIVA SANDWICH",
                codivaSandwichDesc: "Triple layered sandwich with turkey",
                veggieDeluxe: "VEGGIE DELUXE",
                veggieDeluxeDesc: "Fresh vegetables with avocado spread",
                
                // Desserts
                tiramisu: "CLASSIC TIRAMISU",
                tiramisuDesc: "Traditional Italian dessert with coffee and mascarpone",
                cheesecake: "CHEESECAKE",
                cheesecakeDesc: "Rich and creamy cheesecake with berry compote",
                
                // Coffee
                espresso: "ESPRESSO",
                espressoDesc: "Rich Italian espresso shot",
                cappuccino: "CAPPUCCINO", 
                cappuccinoDesc: "Perfect blend of espresso and steamed milk",
                
                // Drinks
                redJuice: "RED JUICE",
                redJuiceDesc: "Premium red juice selection",
                orangeJuice: "FRESH ORANGE JUICE",
                orangeJuiceDesc: "Freshly squeezed orange juice"
            },
            
            // Footer
            allRightsReserved: "All rights reserved",
            followUs: "Follow Us"
        },
        
        ku: {
            // Language Selection
            chooseLanguage: "زمانەکەت هەڵبژێرە",
            selectLanguage: "زمان هەڵبژێرە",
            
            // Contact Info
            callUs: "پەیوەندیمان پێوە بکە",
            openHours: "کاتی کارکردن",
            visitUs: "سەردانمان بکە", 
            hours: "١١:٠٠ بەیانی - ١٢:٠٠ شەو",
            address: "ناوەندی شاری هەولێر، کوردستان",
            
            // Categories
            breakfast: "تەماشای بەیانی",
            salads: "زەڵاتە",
            sandwiches: "سەندویچ", 
            dessert: "شیرینی",
            coffee: "قاوە",
            drinks: "خواردنەوە",
            
            // Menu Items
            menuItems: {
                // Breakfast
                breakfast: "تەماشای بەیانی",
                breakfastDesc: "هێلکە، کڕوێسان، ماست، چا",
                
                // Salads
                quinoaSalad: "زەڵاتەی کوینۆا",
                quinoaSaladDesc: "کوینۆای تازە لەگەڵ سەوزەکانی وەرزی",
                caesarSalad: "زەڵاتەی سیزەر",
                caesarSaladDesc: "مریشکی برژاو لەگەڵ سۆسی سیزەری کلاسیکی",
                greekSalad: "زەڵاتەی یۆنانی", 
                greekSaladDesc: "چوندری برژاو لەگەڵ پەنیری فێتا",
                codivaSalad: "زەڵاتەی کۆدیڤا",
                codivaSaladDesc: "سەوزەی تێکەڵ لەگەڵ گۆشتی برژاو",
                
                // Sandwiches
                chickenSandwich: "سەندویچی مریشک",
                chickenSandwichDesc: "مریشکی برژاو لەگەڵ سەوزەی تازە",
                beefSandwich: "سەندویچی گۆشت",
                beefSandwichDesc: "گۆشتی باشی گای لەگەڵ هەموو پێداویستییەکان",
                codivaSandwich: "سەندویچی کۆدیڤا", 
                codivaSandwichDesc: "سەندویچی سێ ئاستی لەگەڵ بوقەڵەمون",
                veggieDeluxe: "سەوزەی دیلاکس",
                veggieDeluxeDesc: "سەوزەی تازە لەگەڵ ئەڤۆکادۆ",
                
                // Desserts
                tiramisu: "تیرامیسووی کلاسیکی",
                tiramisuDesc: "شیرینی نەریتی ئیتالی لەگەڵ قاوە",
                cheesecake: "کێکی پەنیر",
                cheesecakeDesc: "کێکی پەنیری خامەیی لەگەڵ بەری",
                
                // Coffee
                espresso: "ئێسپرێسۆ",
                espressoDesc: "ئێسپرێسۆی ئیتالی",
                cappuccino: "کاپوچینۆ",
                cappuccinoDesc: "تێکەڵەی تەواوی ئێسپرێسۆ و شیری کڵپەکراو",
                
                // Drinks
                redJuice: "شەربەتی سوور",
                redJuiceDesc: "شەربەتی سووری باش",
                orangeJuice: "شەربەتی پڕتەقاڵی تازە",
                orangeJuiceDesc: "شەربەتی پڕتەقاڵی تازە گوشراو"
            },
            
            // Footer
            allRightsReserved: "هەموو مافەکان پارێزراون",
            followUs: "شوێنمان بکەوە"
        },
        
        ar: {
            // Language Selection  
            chooseLanguage: "اختر لغتك",
            selectLanguage: "اختر اللغة",
            
            // Contact Info
            callUs: "اتصل بنا",
            openHours: "ساعات العمل", 
            visitUs: "زرنا",
            hours: "١١:٠٠ صباحاً - ١٢:٠٠ مساءً",
            address: "مركز مدينة أربيل، كردستان",
            
            // Categories
            breakfast: "الإفطار",
            salads: "السلطات",
            sandwiches: "السندويشات",
            dessert: "الحلويات", 
            coffee: "القهوة",
            drinks: "المشروبات",
            
            // Menu Items
            menuItems: {
                // Breakfast
                breakfast: "الإفطار",
                breakfastDesc: "بيض، كرواسان، زبادي، شاي",
                
                // Salads
                quinoaSalad: "سلطة الكينوا",
                quinoaSaladDesc: "كينوا طازجة مع خضار موسمية وأعشاب",
                caesarSalad: "سلطة السيزر",
                caesarSaladDesc: "دجاج مشوي مع صلصة السيزر الكلاسيكية", 
                greekSalad: "السلطة اليونانية",
                greekSaladDesc: "شمندر مشوي مع جبن الفيتا الكريمي",
                codivaSalad: "سلطة كوديفا",
                codivaSaladDesc: "خضار مشكلة فاخرة مع بروتين مشوي",
                
                // Sandwiches
                chickenSandwich: "سندويش الدجاج",
                chickenSandwichDesc: "دجاج مشوي طري مع خضار طازجة",
                beefSandwich: "سندويش اللحم",
                beefSandwichDesc: "قطعة لحم بقري فاخرة مع جميع الإضافات",
                codivaSandwich: "سندويش كوديفا",
                codivaSandwichDesc: "سندويش ثلاثي الطبقات مع الديك الرومي",
                veggieDeluxe: "الخضار الفاخرة", 
                veggieDeluxeDesc: "خضار طازجة مع دهن الأفوكادو",
                
                // Desserts
                tiramisu: "التيراميسو الكلاسيكي",
                tiramisuDesc: "حلوى إيطالية تقليدية مع القهوة والماسكاربوني",
                cheesecake: "كيك الجبن",
                cheesecakeDesc: "كيك جبن غني وكريمي مع مربى التوت",
                
                // Coffee
                espresso: "إسبريسو",
                espressoDesc: "قطعة إسبريسو إيطالية غنية",
                cappuccino: "كابتشينو", 
                cappuccinoDesc: "مزيج مثالي من الإسبريسو والحليب المبخر",
                
                // Drinks
                redJuice: "عصير أحمر",
                redJuiceDesc: "تشكيلة عصير أحمر فاخرة",
                orangeJuice: "عصير البرتقال الطازج",
                orangeJuiceDesc: "عصير برتقال طازج معصور"
            },
            
            // Footer
            allRightsReserved: "جميع الحقوق محفوظة",
            followUs: "تابعنا"
        }
    };
}

// --- MOBILE NAVIGATION FUNCTIONS REMOVED ---
// Back to menu functionality removed - navigation stays visible

// --- DATA MANAGEMENT FUNCTIONS ---
function getDefaultMenuData() {
    const lang = getCurrentLanguage();
    const t = translations[lang] || translations.en;
    
    return {
        coldAppetizers: {
            clubSandwich: { 
                price: "9,500", 
                image: "/img/cold/breackfast.jpg", 
                name: t.menuItems.breakfast, 
                description: t.menuItems.breakfastDesc 
            },
        },
        appetizers: {
            quinoa: { 
                price: "9,500", 
                image: "/img/salads/quinoa-salad.jpg", 
                name: t.menuItems.quinoaSalad, 
                description: t.menuItems.quinoaSaladDesc 
            },
            caesar: { 
                price: "12,000", 
                image: "/img/salads/cesersalad.jpg", 
                name: t.menuItems.caesarSalad, 
                description: t.menuItems.caesarSaladDesc 
            },
            beetroot: { 
                price: "9,500", 
                image: "/img/salads/greek-salad.jpg", 
                name: t.menuItems.greekSalad, 
                description: t.menuItems.greekSaladDesc 
            },
            codiva: { 
                price: "14,000", 
                image: "/img/salads/salad2.jpg", 
                name: t.menuItems.codivaSalad, 
                description: t.menuItems.codivaSaladDesc 
            },
        },
        mainCourses: {
            grilledChicken: { 
                price: "10,000", 
                image: "/img/hotsandwich/hot2.jpg", 
                name: t.menuItems.chickenSandwich, 
                description: t.menuItems.chickenSandwichDesc 
            },
            beefBurger: { 
                price: "12,500", 
                image: "/img/hotsandwich/hot1.jpg", 
                name: t.menuItems.beefSandwich, 
                description: t.menuItems.beefSandwichDesc 
            },
            clubSandwich: { 
                price: "11,500", 
                image: "/img/hotsandwich/CLUB-SANDWICH.jpg", 
                name: t.menuItems.codivaSandwich, 
                description: t.menuItems.codivaSandwichDesc 
            },
            veggieSandwich: { 
                price: "8,500", 
                image: "/img/hotsandwich/VEGGIE-DELUXE.avif", 
                name: t.menuItems.veggieDeluxe, 
                description: t.menuItems.veggieDeluxeDesc 
            },
        },
        desserts: {
            tiramisu: { 
                price: "8,500", 
                image: "/img/desserts/tiramisu.jpg", 
                name: t.menuItems.tiramisu, 
                description: t.menuItems.tiramisuDesc 
            },
            cheesecake: { 
                price: "9,500", 
                image: "/img/desserts/cheesecake.jpg", 
                name: t.menuItems.cheesecake, 
                description: t.menuItems.cheesecakeDesc 
            },
        },
        beverages: {
            espresso: { 
                price: "3,500", 
                image: "/img/coffee/coffee.jpg", 
                name: t.menuItems.espresso, 
                description: t.menuItems.espressoDesc 
            },
            cappuccino: { 
                price: "5,000", 
                image: "/img/coffee/cappuccino.jpg", 
                name: t.menuItems.cappuccino, 
                description: t.menuItems.cappuccinoDesc 
            },
        },
        drinks: {
            wine: { 
                price: "7,000", 
                image: "/img/drinks/red.jpg", 
                name: t.menuItems.redJuice, 
                description: t.menuItems.redJuiceDesc 
            },
            juice: { 
                price: "4,500", 
                image: "/img/drinks/orange.jpg", 
                name: t.menuItems.orangeJuice, 
                description: t.menuItems.orangeJuiceDesc 
            },
        }
    };
}

function getCurrentLanguage() {
    // Get language from URL or default to English
    const path = window.location.pathname;
    const filename = path.split('/').pop() || 'index.html';
    
    console.log('Current page:', filename);
    
    if (filename.includes('ar.html') || path.includes('/ar/')) return 'ar';
    if (filename.includes('ku.html') || path.includes('/ku/')) return 'ku'; 
    return 'en';
}

// Set correct language selection based on current page
function setCurrentLanguageSelection() {
    const currentLang = getCurrentLanguage();
    const languageOptions = document.querySelectorAll('.language-option');
    
    console.log('Setting current language selection to:', currentLang);
    
    // Update language option selection
    languageOptions.forEach(option => {
        option.classList.remove('selected');
        if (option.dataset.lang === currentLang) {
            option.classList.add('selected');
            console.log('✅ Set selected language option:', option.dataset.text);
        }
    });
    
    // Update language display text
    const selectedLanguageText = document.getElementById('selectedLanguageText');
    const navbarSelectedLanguage = document.getElementById('navbarSelectedLanguage');
    const mobileSelectedLanguage = document.getElementById('mobileSelectedLanguage');
    
    const langMap = {
        'en': { text: 'English', short: 'EN' },
        'ku': { text: 'کوردی', short: 'کو' },
        'ar': { text: 'العربية', short: 'ع' }
    };
    
    const currentLangData = langMap[currentLang];
    
    if (selectedLanguageText && currentLangData) {
        selectedLanguageText.textContent = currentLangData.text;
    }
    if (navbarSelectedLanguage && currentLangData) {
        navbarSelectedLanguage.textContent = currentLangData.short;
    }
    if (mobileSelectedLanguage && currentLangData) {
        mobileSelectedLanguage.textContent = currentLangData.text;
    }
}

function initializeMenuData() {
    menuData = getDefaultMenuData();
}

// --- SIMPLE & DIRECT CATEGORY NAVIGATION ---
function initializeCategoryNavigation() {
    const categoryButtons = document.querySelectorAll('.category-nav-button');
    const categoriesContainer = document.querySelector('.categories-grid');
    
    console.log('Found category buttons:', categoryButtons.length);
    
    function isMobileDevice() {
        return window.innerWidth <= 768;
    }
    
    // Simple, direct scroll function
    function scrollToSection(sectionId) {
        const targetSection = document.getElementById(sectionId);
        
        if (!targetSection) {
            console.error('❌ Section not found:', sectionId);
            alert(`Section "${sectionId}" not found!`);
            return;
        }
        
        console.log('✅ Scrolling to section:', sectionId);
        console.log('Section position:', targetSection.offsetTop);
        
        // Calculate offset for fixed headers
        const header = document.querySelector('header');
        const categoryNav = document.querySelector('.category-navigation-section');
        
        let offset = 20; // base padding
        if (header) offset += 80; // header height
        if (categoryNav) offset += 120; // category nav height
        
        const targetY = targetSection.offsetTop - offset;
        const finalY = Math.max(0, targetY);
        
        console.log('Calculated scroll position:', finalY);
        
        // Add visual feedback
        targetSection.style.backgroundColor = '#fff3cd';
        targetSection.style.border = '2px solid #dda15e';
        targetSection.style.transition = 'all 0.3s ease';
        
        window.scrollTo({
            top: finalY,
            behavior: 'smooth'
        });
        
        // Remove visual feedback after scrolling
        setTimeout(() => {
            targetSection.style.backgroundColor = '';
            targetSection.style.border = '';
        }, 2000);
        
        console.log('✅ Scroll command sent to Y position:', finalY);
    }
    
    // Add click handlers to all category buttons
    categoryButtons.forEach((button, index) => {
        console.log(`Setting up button ${index}:`, button.getAttribute('data-target'));
        
        button.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const targetId = this.getAttribute('data-target');
            console.log('=== CATEGORY CLICKED ===');
            console.log('Button clicked:', this);
            console.log('Target ID:', targetId);
            console.log('Button text:', this.querySelector('.category-name')?.textContent);
            
            // Special check for drinks
            if (targetId === 'drinks') {
                console.log('🍹 DRINKS CATEGORY CLICKED!');
                const drinksSection = document.getElementById('drinks');
                console.log('Drinks section exists:', !!drinksSection);
                console.log('Drinks section position:', drinksSection?.offsetTop);
            }
            
            // Update active state
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            this.classList.add('user-clicked'); // Prevent auto-highlighting interference
            
            if (isMobileDevice()) {
                // Mobile: Same as desktop - just scroll to section
                scrollToSection(targetId);
            } else {
                // Desktop: Immediate scroll
                scrollToSection(targetId);
            }
            
            // Scroll category button into view
            scrollToActiveCategory(this);
        });
    });
    
    function scrollToActiveCategory(activeButton) {
        if (!activeButton || !categoriesContainer) return;
        
        const containerRect = categoriesContainer.getBoundingClientRect();
        const buttonRect = activeButton.getBoundingClientRect();
        const containerScrollLeft = categoriesContainer.scrollLeft;
        
        const buttonRelativeLeft = buttonRect.left - containerRect.left + containerScrollLeft;
        const buttonRelativeRight = buttonRelativeLeft + buttonRect.width;
        
        if (buttonRelativeLeft < containerScrollLeft) {
            categoriesContainer.scrollTo({
                left: buttonRelativeLeft - 20,
                behavior: 'smooth'
            });
        } else if (buttonRelativeRight > containerScrollLeft + containerRect.width) {
            categoriesContainer.scrollTo({
                left: buttonRelativeRight - containerRect.width + 20,
                behavior: 'smooth'
            });
        }
    }
    
    // Simple intersection observer for auto-highlighting visible sections
    const sections = document.querySelectorAll('.menu-section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
                const sectionId = entry.target.id;
                const correspondingButton = document.querySelector(`[data-target="${sectionId}"]`);
                
                if (correspondingButton) {
                    // Only update if no button is currently user-clicked
                    const hasUserClicked = Array.from(categoryButtons).some(btn => 
                        btn.classList.contains('user-clicked')
                    );
                    
                    if (!hasUserClicked) {
                        categoryButtons.forEach(btn => btn.classList.remove('active'));
                        correspondingButton.classList.add('active');
                        scrollToActiveCategory(correspondingButton);
                    }
                }
            }
        });
    }, {
        threshold: [0.3, 0.5, 0.7],
        rootMargin: '-100px 0px -200px 0px'
    });
    
    sections.forEach(section => observer.observe(section));
    
    // Clear user-clicked flags after scrolling stops
    let clearTimer;
    window.addEventListener('scroll', () => {
        clearTimeout(clearTimer);
        clearTimer = setTimeout(() => {
            categoryButtons.forEach(btn => btn.classList.remove('user-clicked'));
        }, 1500);
    });
    
    // Debug: Check all sections and buttons exist
    console.log('=== DEBUGGING CATEGORY NAVIGATION ===');
    const sectionIds = ['coldAppetizers', 'appetizers', 'mainCourses', 'desserts', 'beverages', 'drinks'];
    sectionIds.forEach(id => {
        const section = document.getElementById(id);
        const button = document.querySelector(`[data-target="${id}"]`);
        console.log(`${id}:`, {
            hasSection: !!section,
            hasButton: !!button,
            sectionTop: section?.offsetTop || 'N/A',
            buttonText: button?.querySelector('.category-name')?.textContent || 'N/A'
        });
    });
    
    // Specific check for drinks mapping
    const drinksSection = document.getElementById('drinks');
    const drinksButton = document.querySelector('[data-target="drinks"]');
    console.log('=== DRINKS MAPPING CHECK ===');
    console.log('Drinks section found:', !!drinksSection);
    console.log('Drinks button found:', !!drinksButton);
    console.log('Drinks section position:', drinksSection?.offsetTop);
    console.log('Drinks button text:', drinksButton?.querySelector('.category-name')?.textContent);
    
    // Test function - call manually from console: testCategoryScroll('drinks')
    window.testCategoryScroll = function(sectionId) {
        console.log('=== MANUAL TEST ===');
        console.log('Testing scroll to:', sectionId);
        const section = document.getElementById(sectionId);
        if (section) {
            console.log('Section found at position:', section.offsetTop);
            scrollToSection(sectionId);
            
            // Highlight the section temporarily for visual confirmation
            section.style.border = '3px solid red';
            setTimeout(() => {
                section.style.border = '';
            }, 2000);
        } else {
            console.error('Section not found:', sectionId);
        }
    };
    
    // Test all sections function
    window.testAllSections = function() {
        console.log('=== TESTING ALL SECTIONS ===');
        sectionIds.forEach((id, index) => {
            setTimeout(() => {
                console.log(`Testing ${id}...`);
                testCategoryScroll(id);
            }, index * 3000); // 3 second delay between each test
        });
    };
    
    // Test language switching function
    window.testLanguageSwitch = function(langCode) {
        console.log('=== TESTING LANGUAGE SWITCH ===');
        console.log('Testing switch to:', langCode);
        console.log('Current page:', getCurrentLanguage());
        
        const langMap = {
            'en': 'English',
            'ku': 'کوردی', 
            'ar': 'العربية'
        };
        
        const langText = langMap[langCode];
        if (langText) {
            selectLanguage(langCode, langText);
        } else {
            console.error('Invalid language code:', langCode);
            console.log('Valid codes: en, ku, ar');
        }
    };
    
    // Quick language switch buttons for testing
    window.switchToEnglish = () => testLanguageSwitch('en');
    window.switchToKurdish = () => testLanguageSwitch('ku');
    window.switchToArabic = () => testLanguageSwitch('ar');
    
    console.log('🌍 Language testing functions ready:');
    console.log('- switchToEnglish() → index.html');
    console.log('- switchToKurdish() → ku.html'); 
    console.log('- switchToArabic() → ar.html');
    console.log('- testLanguageSwitch("ku") or testLanguageSwitch("ar")');
    console.log('Current page language:', getCurrentLanguage());
}

// --- RENDERING FUNCTIONS ---
function renderAllMenuItems() {
    document.querySelectorAll('.menu-items-grid').forEach(grid => grid.innerHTML = '');

    for (const categoryId in menuData) {
        const categoryItems = menuData[categoryId];
        const container = document.querySelector(`#${categoryId} .menu-items-grid`);
        const section = document.getElementById(categoryId);
        
        if (container && section) {
            if (Object.keys(categoryItems).length > 0) {
                section.style.display = 'block';
                for (const itemId in categoryItems) {
                    const item = categoryItems[itemId];
                    const itemCard = createMenuItemCard(item, categoryId, itemId);
                    container.appendChild(itemCard);
                }
            } else {
                section.style.display = 'none';
            }
        }
    }
}

function createMenuItemCard(item, categoryId, itemId) {
    const card = document.createElement('div');
    card.className = 'menu-item-card scroll-reveal';
    card.setAttribute('data-category-id', categoryId);
    card.setAttribute('data-item-id', itemId);

    card.innerHTML = `
        <div class="card-image-container">
            <img src="${item.image}" alt="${item.name}" class="menu-item-image">
        </div>
        <div class="card-content">
            <div class="card-info">
                <h3 class="item-name">${item.name}</h3>
                <p class="item-price">${item.price}</p>
            </div>
        </div>
    `;
    
    card.addEventListener('click', (e) => {
        openFoodModal({
            image: item.image,
            alt: item.name,
            title: item.name,
            description: item.description,
            price: item.price
        });
    });

    return card;
}

// --- MODAL FUNCTIONS ---
function openFoodModal(itemData) {
    const modal = document.getElementById('foodModal');
    document.getElementById('modalImage').src = itemData.image;
    document.getElementById('modalImage').alt = itemData.alt;
    document.getElementById('modalTitle').textContent = itemData.title;
    document.getElementById('modalDescription').textContent = itemData.description;
    document.getElementById('modalPrice').textContent = itemData.price;
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeFoodModal() {
    const modal = document.getElementById('foodModal');
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
}

// --- INITIALIZATION & EVENT LISTENERS ---
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Content Loaded'); // Debug log
    
    // Initialize translations
    translations = getTranslations();
    
    // Set correct language selection based on current page
    setTimeout(() => {
        setCurrentLanguageSelection();
    }, 100);
    
    // Initialize data and content
    initializeMenuData();
    renderAllMenuItems();
    
    // Initialize category navigation immediately
    initializeCategoryNavigation();
    console.log('Category navigation initialized immediately');

    // Immediate test for drinks section
    setTimeout(() => {
        console.log('=== IMMEDIATE DRINKS TEST ===');
        const drinksSection = document.getElementById('drinks');
        const drinksButton = document.querySelector('[data-target="drinks"]');
        
        if (drinksSection && drinksButton) {
            console.log('✅ Drinks section and button both found!');
            console.log('🍹 Try clicking DRINKS or run: testCategoryScroll("drinks")');
        } else {
            console.error('❌ Drinks section or button missing!');
            console.log('Section exists:', !!drinksSection);
            console.log('Button exists:', !!drinksButton);
        }
    }, 200);

    // Language Selection Screen
    const languageSelectionScreen = document.getElementById('languageSelectionScreen');
    const languageSelectBtn = document.getElementById('languageSelectBtn');
    
    document.body.style.overflow = 'hidden';
    
    if (languageSelectBtn) {
        languageSelectBtn.addEventListener('click', () => {
            openLanguagePopup();
        });
    }

    // Language Popup
    const languagePopupOverlay = document.getElementById('languagePopupOverlay');
    const languagePopupClose = document.getElementById('languagePopupClose');
    const languageOptions = document.querySelectorAll('.language-option');
    const navbarLanguageBtn = document.getElementById('navbarLanguageBtn');
    const mobileLanguageBtn = document.getElementById('mobileLanguageBtn');

    function openLanguagePopup() {
        languagePopupOverlay.classList.add('show');
        document.body.classList.add('language-popup-open');
    }

    function closeLanguagePopup() {
        languagePopupOverlay.classList.remove('show');
        document.body.classList.remove('language-popup-open');
    }

    function selectLanguage(langCode, langText) {
        console.log('=== LANGUAGE SELECTION ===');
        console.log('Language selected:', langCode, langText);
        console.log('Current page:', getCurrentLanguage());
        
        // Update all language selectors
        const selectedLanguageText = document.getElementById('selectedLanguageText');
        const navbarSelectedLanguage = document.getElementById('navbarSelectedLanguage');
        const mobileSelectedLanguage = document.getElementById('mobileSelectedLanguage');
        
        if (selectedLanguageText) selectedLanguageText.textContent = langText;
        if (navbarSelectedLanguage) {
            if (langCode === 'en') navbarSelectedLanguage.textContent = 'EN';
            else if (langCode === 'ku') navbarSelectedLanguage.textContent = 'کو';
            else if (langCode === 'ar') navbarSelectedLanguage.textContent = 'ع';
        }
        if (mobileSelectedLanguage) mobileSelectedLanguage.textContent = langText;

        // Update selected state in popup
        languageOptions.forEach(option => {
            option.classList.remove('selected');
            if (option.dataset.lang === langCode) {
                option.classList.add('selected');
            }
        });

        // Close popup
        closeLanguagePopup();
        
        // If this is from the initial language selection screen, hide it
        if (languageSelectionScreen && !languageSelectionScreen.classList.contains('hidden')) {
            languageSelectionScreen.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }

        // Navigate to appropriate page based on language
        const currentLang = getCurrentLanguage();
        
        if (langCode !== currentLang) {
            // Show loading message
            const loadingMsg = document.createElement('div');
            loadingMsg.style.cssText = `
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: #dda15e;
                color: white;
                padding: 1rem 2rem;
                border-radius: 10px;
                z-index: 10001;
                font-weight: bold;
                box-shadow: 0 4px 20px rgba(0,0,0,0.3);
            `;
            
            if (langCode === 'ku') {
                console.log('🔄 Navigating to Kurdish page...');
                loadingMsg.innerHTML = `
                    <div style="text-align: center;">
                        <div style="margin-bottom: 0.5rem;">🔄</div>
                        <div>زمان کوردی دەبارگیرێت...</div>
                        <div style="font-size: 0.8rem; opacity: 0.8;">Loading Kurdish...</div>
                    </div>
                `;
                document.body.appendChild(loadingMsg);
                
                setTimeout(() => {
                    window.location.href = 'ku.html';
                }, 800);
                
            } else if (langCode === 'ar') {
                console.log('🔄 Navigating to Arabic page...');
                loadingMsg.style.direction = 'rtl';
                loadingMsg.innerHTML = `
                    <div style="text-align: center;">
                        <div style="margin-bottom: 0.5rem;">🔄</div>
                        <div>جاري تحميل العربية...</div>
                        <div style="font-size: 0.8rem; opacity: 0.8;">Loading Arabic...</div>
                    </div>
                `;
                document.body.appendChild(loadingMsg);
                
                setTimeout(() => {
                    window.location.href = 'ar.html';
                }, 800);
                
            } else {
                console.log('🔄 Navigating to English page...');
                loadingMsg.innerHTML = `
                    <div style="text-align: center;">
                        <div style="margin-bottom: 0.5rem;">🔄</div>
                        <div>Loading English...</div>
                    </div>
                `;
                document.body.appendChild(loadingMsg);
                
                setTimeout(() => {
                    window.location.href = 'index.html';
                }, 800);
            }
        } else {
            console.log('✅ Already on correct language page');
        }
    }

    // Language popup event listeners
    if (languagePopupClose) {
        languagePopupClose.addEventListener('click', closeLanguagePopup);
    }

    if (languagePopupOverlay) {
        languagePopupOverlay.addEventListener('click', (e) => {
            if (e.target === languagePopupOverlay) {
                closeLanguagePopup();
            }
        });
    }

    languageOptions.forEach(option => {
        option.addEventListener('click', () => {
            const langCode = option.dataset.lang;
            const langText = option.dataset.text;
            selectLanguage(langCode, langText);
        });
    });

    if (navbarLanguageBtn) {
        navbarLanguageBtn.addEventListener('click', openLanguagePopup);
    }

    if (mobileLanguageBtn) {
        mobileLanguageBtn.addEventListener('click', () => {
            openLanguagePopup();
            if (mobileMenuOverlay && !mobileMenuOverlay.classList.contains('hidden')) {
                closeMobileMenuFunc();
            }
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && languagePopupOverlay.classList.contains('show')) {
            closeLanguagePopup();
        }
    });

    // Mobile Menu
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
    const mobileMenuIcon = mobileMenuToggle?.querySelector('i');
    
    function openMobileMenu() {
        mobileMenuOverlay.classList.remove('hidden');
        document.body.classList.add('mobile-menu-open');
        if (mobileMenuIcon) {
            mobileMenuIcon.className = 'fas fa-times';
        }
    }
    
    function closeMobileMenuFunc() {
        mobileMenuOverlay.classList.add('hidden');
        document.body.classList.remove('mobile-menu-open');
        if (mobileMenuIcon) {
            mobileMenuIcon.className = 'fas fa-bars';
        }
    }
    
    if (mobileMenuToggle && mobileMenuOverlay) {
        mobileMenuToggle.addEventListener('click', () => {
            if (mobileMenuOverlay.classList.contains('hidden')) {
                openMobileMenu();
            } else {
                closeMobileMenuFunc();
            }
        });
        
        mobileMenuOverlay.addEventListener('click', (e) => {
            if (e.target === mobileMenuOverlay) {
                closeMobileMenuFunc();
            }
        });
        
        const socialLinks = mobileMenuOverlay.querySelectorAll('.social-link-mobile');
        const phoneLink = mobileMenuOverlay.querySelector('a[href^="tel:"]');
        
        socialLinks.forEach(link => {
            link.addEventListener('click', () => {
                closeMobileMenuFunc();
            });
        });
        
        if (phoneLink) {
            phoneLink.addEventListener('click', () => {
                closeMobileMenuFunc();
            });
        }
    }

    // Modal event listener
    document.getElementById('foodModal').addEventListener('click', (e) => {
        if (e.target.id === 'foodModal' || e.target.classList.contains('close-modal')) {
            closeFoodModal();
        }
    });

    // Window resize event - simplified
    window.addEventListener('resize', () => {
        // Re-initialize navigation on resize
        setTimeout(() => {
            initializeCategoryNavigation();
        }, 100);
    });
    
    // Scroll reveal animation observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));
});