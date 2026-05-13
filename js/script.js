// مقالات عينة للبحث (تم إضافة رابط لكل مقال)
const blogPosts = [
    {
        id: 1,
        title: "ربح البيتكوين من صنابير البيتكوين - دليل شامل 2026",
        description: "شرح مفصل عن كيفية ربح البيتكوين من صنابير البيتكوين (Faucets) - أفضل طرق الحصول على عملات رقمية مجانية وأماكن موثوقة وآمنة",
        keywords: ["ربح", "بيتكوين", "صنابير","عملة"],
        link: "posts/bitcoin-faucets.html", // رابط المقال
        content: "صنابير البيتكوين (Bitcoin Faucets) هي مواقع وتطبيقات إلكترونية توفر للمستخدمين فرصة الحصول على كميات صغيرة من البيتكوين بشكل مجاني..."
    }
];

// دالة البحث الرئيسية
function performSearch() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    
    if (searchInput.trim() === '') {
        document.getElementById('searchResults').style.display = 'none';
        return;
    }
    
    const results = blogPosts.filter(post => {
        return post.title.toLowerCase().includes(searchInput) ||
               post.description.toLowerCase().includes(searchInput) ||
               post.keywords.some(keyword => keyword.toLowerCase().includes(searchInput));
    });
    
    displayResults(results, searchInput);
}

// عرض نتائج البحث
function displayResults(results, searchTerm) {
    const resultsContainer = document.getElementById('resultsContainer');
    const searchResults = document.getElementById('searchResults');
    
    if (results.length === 0) {
        resultsContainer.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #999;">لم يتم العثور على نتائج</p>';
        searchResults.style.display = 'block';
        return;
    }
    
    resultsContainer.innerHTML = results.map(post => {
        const highlightedTitle = highlightText(post.title, searchTerm);
        const highlightedDescription = highlightText(post.description, searchTerm);
        
        return `
            <div class="result-card">
                <h3>${highlightedTitle}</h3>
                <p>${highlightedDescription}</p>
                <div style="margin-top: 1rem; display: flex; justify-content: space-between; align-items: center;">
                    <small style="color: #999;">الكلمات المفتاحية: ${post.keywords.join(', ')}</small>
                    <a href="${post.link}" class="read-more" style="text-decoration: none; color: #f2a900; font-weight: bold;">اقرأ المقال ←</a>
                </div>
            </div>
        `;
    }).join('');
    
    searchResults.style.display = 'block';
}

// تمييز النصوص في النتائج
function highlightText(text, term) {
    const regex = new RegExp(`(${term})`, 'gi');
    return text.replace(regex, '<span class="highlight">$1</span>');
}

// البحث عند الضغط على Enter
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }
});
