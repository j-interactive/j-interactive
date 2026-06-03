const toggleBtn = document.getElementById('theme-toggle');
const sunIcon = document.getElementById('sun-icon');
const moonIcon = document.getElementById('moon-icon');
const body = document.body;

function updateIcons(isDark) {
    if (isDark) {
        sunIcon.classList.remove('hidden');
        moonIcon.classList.add('hidden');
    } else {
        sunIcon.classList.add('hidden');
        moonIcon.classList.remove('hidden');
    }
}

// Dark is default; only switch to light if explicitly saved
if (localStorage.getItem('theme') === 'light') {
    body.classList.remove('dark-mode');
    updateIcons(false);
}

toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const isDark = body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateIcons(isDark);
});
