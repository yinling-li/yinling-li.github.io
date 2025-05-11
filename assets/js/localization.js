document.addEventListener('DOMContentLoaded', function() {    
    const i18nElements = document.querySelectorAll('[data-i18n]');
    const currentLang = localStorage.getItem('language') || 'en';
    console.log('Current language setting:', currentLang);

    fetchLanguageData(currentLang);
});

async function fetchLanguageData(lang) {
    try {
        const url = `languages/${lang}.json`;
        console.log('Attempting to load:', url);
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Loaded language data:', data);
        applyTranslations(data);
    } catch (error) {
        console.error('Failed to load language file:', error);
    }
}

function applyTranslations(langData) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (langData[key]) {
            // Clean up the text content before comparing
            const currentText = element.textContent.trim();
            const newText = langData[key];
            element.textContent = newText;
        } else {
            console.warn(`Missing translation for key: ${key}`);
        }
    });
}