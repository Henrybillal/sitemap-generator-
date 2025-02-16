// Add real-time URL validation
document.getElementById('blogUrl').addEventListener('input', function(e) {
    const urlPattern = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
    this.style.borderColor = urlPattern.test(e.target.value) ? '#2ecc71' : '#e74c3c';
});

// Add loading state
function toggleLoading(state) {
    const btn = document.querySelector('.generate-btn');
    btn.innerHTML = state ? '⏳ Generating...' : '🚀 Generate Sitemap';
    btn.disabled = state;
}

// Add schema markup generator
function generateSchemaMarkup() {
    return JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        "url": document.getElementById('blogUrl').value,
        "potentialAction": {
            "@type": "SearchAction",
            "target": "{search_term_string}",
            "query-input": "required name=search_term_string"
        }
    });
}

// Real-time validation with debouncing
let timeout;
document.getElementById('blogUrl').addEventListener('input', (e) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => validateUrl(e.target.value), 500);
});

// Enhanced loading state with progress
async function generateSitemap() {
    try {
        showLoading(true);
        const sitemap = await fetchSitemapData();
        updatePreview(sitemap);
        showSuccess('Sitemap generated successfully');
    } catch (error) {
        showError(error.message);
    } finally {
        showLoading(false);
    }
}

// Visual feedback functions
function showLoading(show) {
    document.querySelector('.progress-indicator').style.opacity = show ? 1 : 0;
    document.querySelector('.generate-btn').disabled = show;
}

function showSuccess(message) {
    const status = document.querySelector('.status-message');
    status.textContent = message;
    status.style.color = var(--success);
}

function showError(message) {
    const status = document.querySelector('.status-message');
    status.textContent = message;
    status.style.color = var(--error);
} 