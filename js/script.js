// مقالات عينة للبحث
const blogPosts = [
    {
        id: 1,
        title: "ربح البيتكوين من صنابير البيتكوين - دليل شامل 2026",
        description: "شرح مفصل عن كيفية ربح البيتكوين من صنابير البيتكوين (Faucets) - أفضل طرق الحصول على عملات رقمية مجانية وأماكن موثوقة وآمنة",
        keywords: ["HTML", "ويب", "أساسيات", "برمجة"],
        content: "صنابير البيتكوين (Bitcoin Faucets) هي مواقع وتطبيقات إلكترونية توفر للمستخدمين فرصة الحصول على كميات صغيرة من البيتكوين بشكل مجاني. تعتمد هذه الصنابير على نموذج إعلاني حيث تحصل المواقع على رسوم من الشركات المعلنة، وبالمقابل توزع جزءاً من هذه الأرباح على المستخدمين. الفكرة الأساسية بسيطة: أنت تزور الموقع، تشاهد إعلانات، تحل كابتشا، وتقوم ببعض المهام البسيطة، وفي المقابل تحصل على كسور من البيتكوين (Satoshi)."
    },
    {
        id: 2,
        title: "CSS متقدم وتقنيات التصميم",
        description: "دليل شامل لتعلم CSS المتقدم والتصميم الاحترافي والاستجابة",
        keywords: ["CSS", "تصميم", "ويب", "متقدم"],
        content: "محتوى المقالة..."
    },
    {
        id: 3,
        title: "جافاسكريبت من الصفر إلى الاحتراف",
        description: "تعلم JavaScript الحديث والبرمجة بشكل احترافي والتطبيقات الويب",
        keywords: ["JavaScript", "برمجة", "ويب", "ES6"],
        content: "محتوى المقالة..."
    },
    {
        id: 4,
        title: "تطوير التطبيقات باستخدام Python",
        description: "شرح مفصل لتعلم Python وتطوير التطبيقات والعمل مع البيانات",
        keywords: ["Python", "برمجة", "تطبيقات", "تطوير"],
        content: "محتوى المقالة..."
    },
    {
        id: 5,
        title: "الذكاء الاصطناعي والتعلم الآلي",
        description: "مقدمة شاملة للذكاء الاصطناعي والتعلم الآلي وتطبيقاتهما",
        keywords: ["AI", "تعلم آلي", "ذكاء", "تقنية"],
        content: "محتوى المقالة..."
    },
    {
        id: 6,
        title: "تطوير تطبيقات الويب الحديثة",
        description: "تعلم كيفية تطوير تطبيقات ويب حديثة وسريعة وآمنة باستخدام أحدث التقنيات",
        keywords: ["ويب", "تطبيقات", "تطوير", "حديث"],
        content: "محتوى المقالة..."
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
                <div style="margin-top: 1rem;">
                    <small style="color: #999;">الكلمات المفتاحية: ${post.keywords.join(', ')}</small>
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

// إغلاق نتائج البحث عند النقر خارجها
document.addEventListener('click', function(e) {
    const searchContainer = document.querySelector('.search-container');
    const searchResults = document.getElementById('searchResults');
    
    if (searchContainer && !searchContainer.contains(e.target) && 
        searchResults && !searchResults.contains(e.target)) {
        // يمكن إضافة منطق إغلاق إذا لزم الأمر
    }
});
