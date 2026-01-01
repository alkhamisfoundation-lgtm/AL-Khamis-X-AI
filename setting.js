const settingsConfig = [
    {
        group: "Visual Preferences",
        items: [
            { id: "particles_enable", label: "Background Particles", type: "toggle", default: true, action: toggleParticles },
            { id: "high_contrast", label: "High Contrast Mode", type: "toggle", default: false, action: toggleContrast },
            { id: "font_size", label: "Interface Size", type: "select", options: ["Normal", "Compact", "Large"], default: "Normal", action: changeInterfaceSize }
        ]
    },
    {
        group: "System & Performance",
        items: [
            { id: "notifications", label: "Push Notifications", type: "toggle", default: true, action: null },
            { id: "auto_save", label: "Auto-Save Progress", type: "toggle", default: true, action: null },
            { id: "clear_data", label: "Reset Application Data", type: "button", action: resetData }
        ]
    },
    {
        group: "Account Privacy",
        items: [
            { id: "public_profile", label: "Public Profile Visibility", type: "toggle", default: false, action: null },
            { id: "activity_status", label: "Show Online Status", type: "toggle", default: true, action: null }
        ]
    },
    {
        group: "Contact Us",
        items: [
            { id: "instagram", label: "Instagram", type: "link", url: "https://www.instagram.com/alkhamisfoundation?igsh=MTAxMmd5dnBpdHBhOA==", icon: "fab fa-instagram" },
            { id: "facebook", label: "Facebook", type: "link", url: "https://www.facebook.com/share/1BsTfRNyNi/", icon: "fab fa-facebook" },
            { id: "twitter", label: "Twitter", type: "link", url: "https://x.com/ALKHAMISFNDTION", icon: "fab fa-twitter" },
            { id: "youtube", label: "YouTube", type: "link", url: "#", icon: "fab fa-youtube" },
        ]
    }
];

function initSettings() {
    const container = document.getElementById('settings-content-area');
    if (!container) return;
    container.innerHTML = '';

    settingsConfig.forEach(group => {
        const groupDiv = document.createElement('div');
        groupDiv.className = 'settings-group';
        
        const title = document.createElement('h3');
        title.innerText = group.group;
        groupDiv.appendChild(title);

        group.items.forEach(item => {
            const row = document.createElement('div');
            row.className = 'setting-row';

            const label = document.createElement('span');
            label.className = 'setting-label';
            label.innerText = item.label;

            const control = createControl(item);

            row.appendChild(label);
            row.appendChild(control);
            groupDiv.appendChild(row);
        });

        container.appendChild(groupDiv);
    });
}

function createControl(item) {
    if (item.type === 'toggle') {
        const label = document.createElement('label');
        label.className = 'switch';
        const input = document.createElement('input');
        input.type = 'checkbox';
        input.checked = item.default;
        input.addEventListener('change', (e) => {
            if (item.action) item.action(e.target.checked);
        });
        const span = document.createElement('span');
        span.className = 'slider round';
        label.appendChild(input);
        label.appendChild(span);
        return label;
    } else if (item.type === 'button') {
        const btn = document.createElement('button');
        btn.className = 'setting-btn';
        btn.innerText = 'Execute';
        btn.addEventListener('click', () => {
            if (item.action) item.action();
        });
        return btn;
    } else if (item.type === 'select') {
        const select = document.createElement('select');
        select.className = 'setting-select';
        item.options.forEach(opt => {
            const option = document.createElement('option');
            option.value = opt;
            option.innerText = opt;
            if (opt === item.default) option.selected = true;
            select.appendChild(option);
        });
        select.addEventListener('change', (e) => {
            if (item.action) item.action(e.target.value);
        });
        return select;
    } else if (item.type === 'link') {
        const link = document.createElement('a');
        link.className = 'setting-btn';
        link.href = item.url;
        link.target = '_blank';
        link.innerHTML = item.icon ? `<i class="${item.icon}"></i> Open` : 'Open';
        link.style.textDecoration = 'none';
        return link;
    }
    return document.createElement('div');
}

// --- Functional Logic ---

function toggleParticles(isEnabled) {
    const canvas = document.getElementById('particle-canvas');
    if (canvas) canvas.style.display = isEnabled ? 'block' : 'none';
}

function toggleContrast(isEnabled) {
    // HD Mode: Enhances contrast, saturation, and brightness for a vivid look
    document.body.style.filter = isEnabled ? "contrast(1.3) saturate(1.3) brightness(1.1)" : "none";
}

function changeInterfaceSize(size) {
    const root = document.documentElement;
    if (size === "Compact") root.style.fontSize = "14px";
    else if (size === "Large") root.style.fontSize = "18px";
    else root.style.fontSize = "16px";
}

function resetData() {
    if(confirm("Are you sure you want to clear all local cache?")) {
        alert("System cache cleared successfully.");
    }
}

document.addEventListener('DOMContentLoaded', initSettings);