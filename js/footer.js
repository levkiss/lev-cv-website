// Load footer component
async function loadFooter() {
    try {
        const response = await fetch('/components/footer.html');
        const html = await response.text();
        const footerPlaceholder = document.getElementById('footer-placeholder');
        if (footerPlaceholder) {
            footerPlaceholder.innerHTML = html;
        }
    } catch (error) {
        console.error('Error loading footer:', error);
    }
}

// Load footer when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadFooter);
} else {
    loadFooter();
}
