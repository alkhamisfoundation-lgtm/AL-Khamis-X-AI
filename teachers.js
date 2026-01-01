const ownerProfile = {
    name: "M. C. Kabir",
    role: "AL KHAMIS / NGO(Owner)",
    icon: "fas fa-user-tie",
    instagram: "https://www.instagram.com/alkhamisfoundation?igsh=MTAxMmd5dnBpdHBhOA==",
    facebook: "https://www.facebook.com/share/1BsTfRNyNi/",
    twitter: "https://x.com/ALKHAMISFNDTION"
};

const teachersList = [
    {
        name: "Adding Soon",
        role: "English Department Head",
        icon: "fas fa-chalkboard-teacher",
        instagram: "#",
        facebook: "#"
    },
    {
        name: "Ziaul Rahman",
        role: "اللغة العربية والدراسات الإسلامية",
        icon: "fas fa-user-graduate",
        instagram: "#",
        facebook: "#"
    },
    {
        name: "Adding Soon",
        role: "Computer Science Expert",
        icon: "fas fa-laptop-code",
        instagram: "#",
        facebook: "#"
    },
    {
        name: "Adding Soon",
        role: "हिंदी भाषा विशेषज्ञ",
        icon: "fas fa-om",
        instagram: "#",
        facebook: "#"
    },
    {
        name: "Adding Soon",
        role: "اردو ادب کے ماہر",
        icon: "fas fa-pen-nib",
        instagram: "#",
        facebook: "#"
    }
];

const ngoList = [
    {
        name: "Adv. Arif ALI Khan",
        role: "Supreme Court of India",
        icon: "fas fa-gavel",
        instagram: "#",
        facebook: "#"
    },
    {
        name: "Adv. Afreen Begun",
        role: "High Court",
        icon: "fas fa-balance-scale",
        instagram: "#",
        facebook: "#"
    },
    {
        name: "ALL",
        role: "Trial Court",
        icon: "fas fa-landmark",
        instagram: "#",
        facebook: "#"
    }
];

function loadTeachersContent() {
    const container = document.getElementById('teachers-content-area');
    if (!container) return;
    
    // Remove grid class from parent to allow sections to stack vertically
    container.classList.remove('teacher-grid');
    container.innerHTML = '';

    // 1. Render Owner Section (Centered)
    const ownerTitle = document.createElement('h2');
    ownerTitle.innerText = "Owner of AL KHAMIS / NGO";
    ownerTitle.style.cssText = "width: 100%; color: #00ffff; text-align: center; margin-bottom: 1rem; letter-spacing: 2px;";
    container.appendChild(ownerTitle);

    const ownerWrapper = document.createElement('div');
    ownerWrapper.style.cssText = "display: flex; justify-content: center; margin-bottom: 3rem;";
    
    const ownerCard = document.createElement('div');
    ownerCard.className = 'teacher-card';
    ownerCard.innerHTML = `
        <div class="teacher-icon"><i class="${ownerProfile.icon}"></i></div>
        <h3>${ownerProfile.name}</h3>
        <p class="teacher-role">${ownerProfile.role}</p>
        <div class="teacher-socials">
            <a href="${ownerProfile.instagram}" target="_blank" class="social-btn insta"><i class="fab fa-instagram"></i></a>
            <a href="${ownerProfile.facebook}" target="_blank" class="social-btn fb"><i class="fab fa-facebook-f"></i></a>
            ${ownerProfile.twitter ? `<a href="${ownerProfile.twitter}" target="_blank" class="social-btn tw"><i class="fab fa-twitter"></i></a>` : ''}
        </div>
    `;
    ownerWrapper.appendChild(ownerCard);
    container.appendChild(ownerWrapper);

    const createSection = (title, list) => {
        // Section Header
        const sectionTitle = document.createElement('h2');
        sectionTitle.id = title.toLowerCase().replace(/[^a-z0-9]/g, '-'); // Create ID for scrolling (e.g., ngo---advocates)
        sectionTitle.innerText = title;
        sectionTitle.style.cssText = "width: 100%; color: #00ffff; margin: 2rem 0 1rem 0; border-bottom: 1px solid #333; padding-bottom: 0.5rem;";
        container.appendChild(sectionTitle);

        // Grid for this section
        const grid = document.createElement('div');
        grid.className = 'teacher-grid';
        
        list.forEach(person => {
            const card = document.createElement('div');
            card.className = 'teacher-card';
            card.innerHTML = `
                <div class="teacher-icon"><i class="${person.icon}"></i></div>
                <h3>${person.name}</h3>
                <p class="teacher-role">${person.role}</p>
                <div class="teacher-socials">
                    <a href="${person.instagram}" target="_blank" class="social-btn insta"><i class="fab fa-instagram"></i></a>
                    <a href="${person.facebook}" target="_blank" class="social-btn fb"><i class="fab fa-facebook-f"></i></a>
                    ${person.twitter ? `<a href="${person.twitter}" target="_blank" class="social-btn tw"><i class="fab fa-twitter"></i></a>` : ''}
                </div>
            `;
            grid.appendChild(card);
        });
        container.appendChild(grid);
    };

    createSection('TEACHERS', teachersList);
    createSection('NGO & ADVOCATES', ngoList);
}

document.addEventListener('DOMContentLoaded', loadTeachersContent);