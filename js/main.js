// 1. Хранилище текстов (База данных переводов)
const translations = {
    'ru': {
        'link-home': 'Главная',
        'main-title': '12 СТУЛЬЕВ',
        'link-menu': 'Меню',
        'link-about': 'О нас',
        'link-contacts': 'Контакты',
        'hero-subtitle': 'Эстетика вне времени. Вкус, достойный великих комбинаторов.',
        'about-title': 'О Кафе',
        'about-text': '12 Стульев — это тихая гавань для ценителей изысканности в самом сердце Таллинна. Здесь строгость черного гранита встречается с теплым сиянием золота, создавая атмосферу закрытого клуба. Каждая чашка кофе — это ритуал, а каждое блюдо — маленькое приключение.',
        'contacts-title': 'Контакты',
        'label-address': 'Адрес:',
        'label-hours': 'Время работы:',
        'work-hours': 'Пн-Вс: 09:00 - 21:00',
        'menu-title': 'Наше Меню',
        'dish-1': 'Завтрак Остапа',
        'dish-2': 'Кофе "Киса"',
        'item-1': 'Кофе по-восточному',
        'item-2': 'Завтрак Остапа'
    },
    'et': {
        'link-home': 'Avaleht',
        'main-title': '12 TOOLI',
        'link-menu': 'Menüü',
        'link-about': 'Meist',
        'link-contacts': 'Kontaktid',
        'hero-subtitle': 'Ajatu esteetika. Suurte kombinaatorite vääriline maitse.',
        'about-title': 'Kohvikust',
        'about-text': '12 Tooli on rahulik sadam rafineeritud maitsete austajatele Tallinna südames. Siin kohtub musta graniidi rangus kulla sooja sära, luues suletud klubi atmosfääri. Iga tass kohvi on rituaal ja iga roog on väike seiklus.',
        'contacts-title': 'Kontaktid',
        'label-address': 'Aadress:',
        'label-hours': 'Lahtiolekuajad:',
        'work-hours': 'E-P: 09:00 - 21:00',
        'menu-title': 'Meie Menüü',
        'dish-1': 'Ostapi hommikusöök',
        'dish-2': 'Kohv "Kisa"',
        'item-1': 'Idamaine kohv',
        'item-2': 'Ostapi hommikusöök'
    },
    'en': {
        'link-home': 'Home',
        'main-title': '12 CHAIRS',
        'link-menu': 'Menu',
        'link-about': 'About Us',
        'link-contacts': 'Contacts',
        'hero-subtitle': 'Timeless aesthetics. A taste worthy of the Great Schemers.',
        'about-title': 'About Us',
        'about-text': '12 Chairs is a quiet haven for connoisseurs of sophistication in the heart of Tallinn. Here, the austerity of black granite meets the warm glow of gold, creating a private club atmosphere. Every cup of coffee is a ritual, and every dish is a small adventure.',
        'contacts-title': 'Contacts',
        'label-address': 'Address:',
        'label-hours': 'Opening hours:',
        'work-hours': 'Mon-Sun: 09:00 - 21:00',
        'menu-title': 'Our Menu',
        'dish-1': 'Ostap\'s Breakfast',
        'dish-2': 'Coffee "Kisa"',
        'item-1': 'Oriental Coffee',
        'item-2': 'Ostap\'s Breakfast'
    }
};

// 2. Функция смены языка
function changeLang(lang) {
    for (let id in translations[lang]) {
        const element = document.getElementById(id);
        if (element) {
            element.innerText = translations[lang][id];
        }
    }
    // Сохраняем выбор, чтобы при переходе между страницами язык не сбрасывался
    localStorage.setItem('preferredLang', lang);
}

// 3. Загрузка при открытии страницы
window.onload = () => {
    const savedLang = localStorage.getItem('preferredLang') || 'ru';
    changeLang(savedLang);
};

function changeLang(lang) {
    // 1. Проверка: существует ли вообще такой язык в нашей базе?
    if (!translations[lang]) {
        console.error(`Language ${lang} not found!`);
        return;
    }

    // 2. Безопасный цикл перевода
    for (let id in translations[lang]) {
        const element = document.getElementById(id);
        
        // Проверяем, нашли ли мы элемент на странице, прежде чем менять текст
        if (element) {
            element.innerText = translations[lang][id];
        } else {
            // Это поможет тебе при разработке видеть, какие ID ты забыл добавить в HTML
            console.warn(`Element with id "${id}" not found on this page.`);
        }
    }
    
    localStorage.setItem('preferredLang', lang);
}
function openMap(link)
{
window.location.href=link
}