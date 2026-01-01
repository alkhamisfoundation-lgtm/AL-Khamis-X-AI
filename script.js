// Navigation Logic
document.addEventListener('DOMContentLoaded', () => {
    const navHome = document.getElementById('nav-home');
    const navBook = document.getElementById('nav-book');
    const navSetting = document.getElementById('nav-setting');
    const navTeacher = document.getElementById('nav-teacher');
    const homeView = document.getElementById('home-view');
    const bookView = document.getElementById('book-view');
    const settingView = document.getElementById('setting-view');
    const teacherView = document.getElementById('teacher-view');

    // Splash Screen Logic
    const splashScreen = document.getElementById('splash-screen');
    if (splashScreen) {
        setTimeout(() => {
            splashScreen.classList.add('fade-out');
            // Remove from display after transition to allow clicking elements behind it
            setTimeout(() => splashScreen.style.display = 'none', 1000);
        }, 3000); // Screen stays for 3 seconds
    }

    // Switch to Home
    navHome.addEventListener('click', () => {
        homeView.classList.remove('hidden');
        bookView.classList.add('hidden');
        settingView.classList.add('hidden');
        teacherView.classList.add('hidden');
        
        navHome.classList.add('active');
        navBook.classList.remove('active');
        navSetting.classList.remove('active');
        navTeacher.classList.remove('active');
    });

    // Switch to Book (Courses)
    navBook.addEventListener('click', () => {
        homeView.classList.add('hidden');
        bookView.classList.remove('hidden');
        settingView.classList.add('hidden');
        teacherView.classList.add('hidden');
        
        navBook.classList.add('active');
        navHome.classList.remove('active');
        navSetting.classList.remove('active');
        navTeacher.classList.remove('active');
    });

    // Switch to Settings
    navSetting.addEventListener('click', () => {
        homeView.classList.add('hidden');
        bookView.classList.add('hidden');
        settingView.classList.remove('hidden');
        teacherView.classList.add('hidden');

        navSetting.classList.add('active');
        navHome.classList.remove('active');
        navBook.classList.remove('active');
        navTeacher.classList.remove('active');
    });

    // Switch to Teachers
    navTeacher.addEventListener('click', () => {
        homeView.classList.add('hidden');
        bookView.classList.add('hidden');
        settingView.classList.add('hidden');
        teacherView.classList.remove('hidden');

        navTeacher.classList.add('active');
        navHome.classList.remove('active');
        navBook.classList.remove('active');
        navSetting.classList.remove('active');
    });

    // Special Navigation for Advocates Card
    const advocatesCard = document.querySelector('.card[data-id="advocates"]');
    if (advocatesCard) {
        advocatesCard.addEventListener('click', (e) => {
            e.stopImmediatePropagation(); // Prevent the info modal from opening
            navTeacher.click(); // Switch to Teachers View
            // Scroll to NGO section after a short delay to allow view transition
            setTimeout(() => {
                const ngoSection = document.getElementById('ngo---advocates');
                if (ngoSection) ngoSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
        });
    }
});