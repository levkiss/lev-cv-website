// Load header component
async function loadHeader() {
    try {
        const response = await fetch('/components/header.html');
        const html = await response.text();
        const headerPlaceholder = document.getElementById('header-placeholder');
        if (headerPlaceholder) {
            headerPlaceholder.innerHTML = html;
            
            // Initialize theme toggle after header is loaded
            initThemeToggle();

            // Initialize mobile menu
            initMobileMenu();

            // Highlight active page
            highlightActivePage();
        }
    } catch (error) {
        console.error('Error loading header:', error);
    }
}

// Initialize theme toggle functionality
function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const html = document.documentElement;
    
    if (!themeToggle) return;
    
    // Set initial theme
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        html.classList.add('dark');
    } else {
        html.classList.remove('dark');
    }

    // Toggle theme on click
    themeToggle.addEventListener('click', () => {
        html.classList.toggle('dark');
        localStorage.theme = html.classList.contains('dark') ? 'dark' : 'light';
    });
}

// Initialize mobile menu toggle
function initMobileMenu() {
    const menuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const iconOpen = document.getElementById('menuIconOpen');
    const iconClose = document.getElementById('menuIconClose');

    if (!menuBtn || !mobileMenu) return;

    menuBtn.addEventListener('click', () => {
        const isOpen = !mobileMenu.classList.contains('hidden');
        if (isOpen) {
            mobileMenu.classList.add('hidden');
            iconOpen.classList.remove('hidden');
            iconClose.classList.add('hidden');
        } else {
            mobileMenu.classList.remove('hidden');
            iconOpen.classList.add('hidden');
            iconClose.classList.remove('hidden');
        }
    });
}

// Highlight active page in navigation
function highlightActivePage() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav a[data-page], #mobileMenu a[data-page]');
    
    navLinks.forEach(link => {
        const page = link.getAttribute('data-page');
        
        // Check if this link matches the current page
        if (
            (currentPage === 'index.html' && page === 'journey') ||
            (currentPage === 'projects.html' && page === 'projects') ||
            (currentPage === 'blog.html' && page === 'blog') ||
            (currentPage === 'contacts.html' && page === 'contacts')
        ) {
            link.classList.remove('text-zinc-500', 'dark:text-zinc-400');
            link.classList.add('text-zinc-900', 'dark:text-zinc-100');
        }
    });
}

// Load header when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadHeader);
} else {
    loadHeader();
}
