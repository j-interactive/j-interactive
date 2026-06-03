const toggleBtn = document.getElementById('theme-toggle');
const sunIcon = document.getElementById('sun-icon');
const moonIcon = document.getElementById('moon-icon');
const body = document.body;

function applyTheme(isDark) {
    body.classList.toggle('dark-mode', isDark);
    sunIcon.classList.toggle('hidden', !isDark);
    moonIcon.classList.toggle('hidden', isDark);
}

// Default dark; respect saved preference
const saved = localStorage.getItem('theme');
applyTheme(saved !== 'light');

toggleBtn.addEventListener('click', () => {
    const isDark = !body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    applyTheme(isDark);
});
