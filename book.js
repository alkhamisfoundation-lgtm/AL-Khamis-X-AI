const bookData = [
    {
        title: "Computer Science Engineering",
        icon: "fas fa-laptop-code",
        level: "Expert Level",
        description: "Dive deep into the world of binary, algorithms, and system architecture. Our curriculum covers Full Stack Development, AI integration, and Cybersecurity basics. Students will build real-world applications using Python, JavaScript, and C++.",
        modules: ["Data Structures", "Web Development", "Machine Learning Basics", "Cloud Computing"]
    },
    {
        title: "English Literature & Linguistics",
        icon: "fas fa-language",
        level: "High Level",
        description: "A comprehensive study of the English language, focusing on advanced grammar, phonetics, and creative writing. Analyze classic literature and master the art of global communication with native-level fluency.",
        modules: ["Advanced Grammar", "Creative Writing", "Public Speaking", "Classic Literature"]
    },
    {
        title: "الدراسات العربية",
        icon: "ALLAH.png",
        level: "المستوى الأصلي",
        description: "استمتع بجمال اللغة العربية. من الفصحى إلى اللهجات الحديثة، نضمن لك فهمًا عميقًا للنصوص والخط والتعبير الشفهي على يد علماء معتمدين.",
        modules: ["أحكام التجويد", "النحو والصرف", "الخط العربي", "اللهجات المعاصرة"]
    },
    {
        title: "اردو ادب اور شاعری",
        icon: "Allah-Urdu.png",
        level: "اعلیٰ سطح",
        description: "اردو شاعری کی گہرائی کو دریافت کریں۔ یہ کورس اردو ادب کی تاریخ، اقبال اور غالب کی شاعری، اور ابھرتے ہوئے مصنفین کے لیے جدید تحریری مہارتوں کا احاطہ کرتا ہے۔",
        modules: ["تاریخ اردو", "تجزیہ شاعری", "نثر نگاری", "ادبی تنقید"]
    },
    {
        title: "हिंदी भाषा और साहित्य",
        icon: "Allah-Hindi.png",
        level: "मूल स्तर",
        description: "देवनागरी लिपि, व्याकरण और बोलने के प्रवाह पर ध्यान केंद्रित करते हुए हिंदी भाषा में महारत हासिल करें। भारतीय साहित्य और सांस्कृतिक बारीकियों को जानें।",
        modules: ["देवनागरी लिपि", "हिंदी व्याकरण", "मौखिक हिंदी", "भारतीय साहित्य"]
    },
    {
        title: "NGO",
        icon: "fas fa-hand-holding-heart",
        level: "Social Impact",
        description: "Our NGO wing is dedicated to serving humanity. We focus on poverty alleviation, educational support for the underprivileged, and emergency relief efforts.",
        modules: ["Community Service", "Fundraising", "Crisis Management", "Social Outreach"]
    },
    {
        title: "Legal Advocates Team",
        icon: "fas fa-balance-scale",
        level: "Professional Legal Aid",
        description: "A team of expert advocates providing legal consultancy and fighting for justice. We cover constitutional law, family law, and human rights advocacy.",
        modules: ["Legal Counseling", "Civil Rights", "Court Representation", "Legal Drafting"]
    },
    {
        title: "Free Blood Donation camp",
        icon: "fas fa-heartbeat",
        level: "Humanitarian Service",
        description: "We organize free blood donation camps and maintain a network of voluntary donors to assist patients in emergencies. Join us in this life-saving mission.",
        modules: ["Blood Camps", "Donor Registration", "Emergency Support", "Health Checkups"]
    }
];

function loadBookContent() {
    const container = document.getElementById('book-content-area');
    container.innerHTML = ''; // Clear existing

    bookData.forEach(subject => {
        const subjectDiv = document.createElement('div');
        subjectDiv.className = 'detailed-card';
        
        let modulesHtml = '<ul class="module-list">';
        subject.modules.forEach(m => modulesHtml += `<li><i class="fas fa-check-circle"></i> ${m}</li>`);
        modulesHtml += '</ul>';

        let iconHtml;
        if (subject.icon.includes('.')) {
            // It's an image file (like ALLAH.png)
            iconHtml = `<img src="${subject.icon}" class="custom-icon-img" alt="${subject.title}">`;
        } else {
            // It's a FontAwesome class
            iconHtml = `<i class="${subject.icon}"></i>`;
        }

        subjectDiv.innerHTML = `
            <div class="detail-header">
                ${iconHtml}
                <div>
                    <h2>${subject.title}</h2>
                    <span class="detail-badge">${subject.level}</span>
                </div>
            </div>
            <p class="detail-desc">${subject.description}</p>
            <div class="modules-section">
                <h4>Core Modules:</h4>
                ${modulesHtml}
            </div>
            <button class="enroll-btn">View Syllabus</button>
        `;
        
        container.appendChild(subjectDiv);
    });
}

// Load content when file loads
document.addEventListener('DOMContentLoaded', () => {
    loadBookContent();
});