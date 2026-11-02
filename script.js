// ===== MOBILE MENU TOGGLE =====
const mobileToggle = document.querySelector('.mobile-toggle');
const navLinks = document.querySelector('.nav-links');

if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
}

// ===== CERTIFICATES DATA =====
// relevance: true = shown by default, false = hidden behind "Show all" button
const certificates = [
    // --- MOST RELEVANT (shown by default) ---
    { name: "AWS", platform: "Cursa", url: "https://cursa.app/en/my-certificate/certe43332a6f12d57506a9f131f3af1b230", icon: "☁", relevance: true },
    { name: "Microsoft Azure Fundamentals (AZ-900)", platform: "Cursa", url: "https://cursa.app/en/my-certificate/cert8c2d5a089b684789426fbd6758d75f69", icon: "☁", relevance: true },
    { name: "Operating Systems & Systems Programming", platform: "Cursa", url: "https://cursa.app/en/my-certificate/certaf68eb6d5d9cf0aeacbb709c04f9dfd7", icon: "💻", relevance: true },
    { name: "Complete MongoDB Tutorial", platform: "Cursa", url: "https://cursa.app/en/my-certificate/certf2025318a03c36686bf1e00ea306ef64", icon: "🗄", relevance: true },
    { name: "Java Intermediate", platform: "SoloLearn", url: "https://api2.sololearn.com/v2/certificates/CC-KSZLZ65W/image/png?t=639159123981254640", icon: "☕", relevance: true },
    { name: "Introduction to C++", platform: "SoloLearn", url: "https://api2.sololearn.com/v2/certificates/CC-WTJJGRZU/image/png?t=639159148717828710", icon: "⚙", relevance: true },

    // --- OTHER CERTIFICATES (hidden by default) ---
    { name: "Copywriting", platform: "Cursa", url: "https://cursa.app/en/my-certificate/certefeeefe951bce78c94859578e62c4cb3", icon: "✍", relevance: false },
    { name: "Photoshop Full Course", platform: "Cursa", url: "https://cursa.app/en/my-certificate/certbf9567add0eaa86be3ae54aaf81dead3", icon: "🎨", relevance: false },
    { name: "Supply Chain Management", platform: "Cursa", url: "https://cursa.app/en/my-certificate/cert290aca559204b8995f417b70fd9079a9", icon: "📦", relevance: false },
    { name: "Mobile Phone Repair", platform: "Cursa", url: "https://cursa.app/en/my-certificate/certeb2cc46da0e410dba727b216ff78c374", icon: "📱", relevance: false },
    { name: "Call Center Customer Service", platform: "Cursa", url: "https://cursa.app/en/my-certificate/certed5b2308cc192a3ea753ccca2f14e86e", icon: "🎧", relevance: false },
    { name: "Unity Game Development", platform: "Cursa", url: "https://cursa.app/en/my-certificate/cert4c0a5c059bd75e3a37617fff037a07b0", icon: "🎮", relevance: false },
    { name: "Kali Linux: Beginner to Advanced", platform: "Cursa", url: "https://cursa.app/en/my-certificate/cert71db20d6e85cb30af13f1ad3dc30a448", icon: "🛡", relevance: false },
    { name: "Flutter 3.0 Masterclass", platform: "Cursa", url: "https://cursa.app/en/my-certificate/certe75fed4945204774605a81dc7be49985", icon: "📲", relevance: false },
    { name: "Power BI Full Course", platform: "Cursa", url: "https://cursa.app/en/my-certificate/certbcde8658314a742325e78ea71b60c402", icon: "📊", relevance: false },
    { name: "WordPress — Basic to Advanced", platform: "Cursa", url: "https://cursa.app/en/my-certificate/cert0b1807bdd39eb411b8cf966040dc1f8b", icon: "🌐", relevance: false },
    { name: "Godot 4.3 2D Farming Game Tutorial", platform: "Cursa", url: "https://cursa.app/en/my-certificate/cert690d60fbdcce9083938d1a3534038f46", icon: "🎮", relevance: false },
    { name: "Generative AI in Practice", platform: "SoloLearn", url: "https://api2.sololearn.com/v2/certificates/CC-VSIHCWNE/image/png?t=638857558880578750", icon: "🤖", relevance: false },
    { name: "Data Analytics with AI", platform: "SoloLearn", url: "https://api2.sololearn.com/v2/certificates/CC-LLJ09CPB/image/png?t=638857607290247740", icon: "📈", relevance: false },
    { name: "AI in Data Analysis", platform: "SoloLearn", url: "https://api2.sololearn.com/v2/certificates/CC-VMY8WJIU/image/png?t=638859235383502650", icon: "🤖", relevance: false },
    { name: "Ethical AI Foundation", platform: "SoloLearn", url: "https://api2.sololearn.com/v2/certificates/CC-X37FRQOK/image/png?t=638875139147878210", icon: "⚖", relevance: false },
    { name: "Prompt Engineering", platform: "SoloLearn", url: "https://api2.sololearn.com/v2/certificates/CC-YPJABPLK/image/png?t=638884669206338610", icon: "💬", relevance: false },
    { name: "AI-Powered A/B Testing", platform: "SoloLearn", url: "https://api2.sololearn.com/v2/certificates/CC-I12MVX8I/image/png?t=638885402776124520", icon: "🧪", relevance: false },
    { name: "Introduction to LLMs", platform: "SoloLearn", url: "https://api2.sololearn.com/v2/certificates/CC-WSTEK300/image/png?t=638886856120284580", icon: "🧠", relevance: false },
    { name: "Machine Learning for Beginners", platform: "SoloLearn", url: "https://api2.sololearn.com/v2/certificates/CC-SUAUAFME/image/png?t=638888644299273520", icon: "📚", relevance: false },
    { name: "Research with AI", platform: "SoloLearn", url: "https://api2.sololearn.com/v2/certificates/CC-DJOX2I8T/image/png?t=638891228138220140", icon: "🔬", relevance: false }
];

// ===== RENDER CERTIFICATES =====
const certsGrid = document.getElementById('certsGrid');
const certsToggle = document.getElementById('certsToggle');
let showingAll = false;

function createCertCard(cert) {
    const card = document.createElement('a');
    card.href = cert.url;
    card.target = '_blank';
    card.rel = 'noopener';
    card.className = 'cert-card';
    card.innerHTML = `
        <span class="cert-icon">${cert.icon}</span>
        <div class="cert-info">
            <h4>${cert.name}</h4>
            <span>${cert.platform}</span>
        </div>
        <span class="cert-link">View ↗</span>
    `;
    return card;
}

function renderCerts() {
    if (!certsGrid) return;
    certsGrid.innerHTML = '';

    const toShow = showingAll
        ? certificates
        : certificates.filter(c => c.relevance);

    toShow.forEach(cert => {
        certsGrid.appendChild(createCertCard(cert));
    });

    if (certsToggle) {
        certsToggle.textContent = showingAll
            ? 'Show only relevant certificates'
            : `Show all ${certificates.length} certificates`;
    }
}

if (certsToggle) {
    certsToggle.addEventListener('click', () => {
        showingAll = !showingAll;
        renderCerts();
    });
}

renderCerts();

// ===== SMOOTH SCROLL FOR SAFARI =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});