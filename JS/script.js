const FORM_ENDPOINT = '';
const CONTACT_EMAIL = 'khalidfr87@gmail.com';

const translations = {
    id: {
        'nav.skip': 'Langsung ke konten',
        'nav.about': 'Tentang',
        'nav.experience': 'Pengalaman',
        'nav.projects': 'Proyek',
        'nav.blog': 'Blog',
        'nav.contact': 'Kontak',
        'hero.hello': 'Halo, saya',
        'hero.role': 'Mahasiswa Software Engineering di Binus University',
        'hero.lead': 'Saya membangun website dari front-end hingga back-end, dengan fokus pada sistem yang scalable, mudah dirawat, dan nyaman digunakan.',
        'hero.cv': 'Unduh CV',
        'hero.contact': 'Hubungi saya',
        'about.eyebrow': 'Kenali lebih jauh',
        'about.title': 'Tentang saya',
        'about.p1': 'Saya mahasiswa Software Engineering di Binus University dengan IPK 3,19. Saya memiliki antusiasme dan dedikasi tinggi dalam mengembangkan kemampuan teknis dan pengetahuan di bidang teknologi. Saya telah mempelajari berbagai bahasa pemrograman seperti C++, Java, JavaScript, dan Python, serta mampu merancang sistem aplikasi yang scalable, mudah dirawat, dan ramah pengguna.',
        'about.p2': 'Saya berpengalaman membangun website, mencakup sisi front-end dan back-end. Saya percaya teknologi dapat mengubah dunia menjadi lebih baik, dan saya berkomitmen untuk berkontribusi dalam perubahan itu.',
        'about.gpa': 'IPK',
        'about.projects': 'Proyek',
        'about.experience': 'Pengalaman',
        'skills.title': 'Tools dan keahlian',
        'exp.eyebrow': 'Pengalaman dan organisasi',
        'exp.title': 'Pengalaman',
        'exp.sub': 'Pengalaman dan organisasi saya selama berkuliah di Binus University.',
        'exp1.desc': 'Sebagai Freshmen Leader, bertanggung jawab membimbing dan mendampingi mahasiswa baru dalam orientasi kampus selama satu pekan.',
        'exp2.desc': 'Membantu mahasiswa baru memahami sistem akademik dan menjadi partner mereka selama satu tahun.',
        'exp3.desc': 'Mengorganisir latihan rutin, mengoordinasi pengurus dan anggota, serta memastikan operasional klub berjalan dengan baik.',
        'exp4.desc': 'Meraih juara 3 lomba UI/UX internasional yang diselenggarakan Binus, dengan peran merancang UI/UX dan membangun sistem.',
        'exp.view': 'Lihat sertifikat',
        'proj.eyebrow': 'Karya terbaru saya',
        'proj.title': 'Proyek',
        'filter.all': 'Semua',
        'filter.web': 'Web',
        'filter.design': 'UI/UX',
        'filter.network': 'Jaringan',
        'p1.desc': 'Final lab project "Jenius Academy" adalah platform edukasi yang menyediakan berbagai kursus online berkualitas untuk membantu mengembangkan keterampilan di era digital.',
        'p2.desc': 'Final project "Rela Berbagi" adalah website yang memudahkan berbagi sumber daya dan bantuan, mendorong semangat kolaborasi dan saling mendukung di masyarakat.',
        'p3.desc': 'Final lab project "Water Guard" adalah platform untuk memantau dan mengelola sumber daya air demi penggunaan yang berkelanjutan.',
        'p4.desc': 'Bersama tim, saya membuat video tutorial cara menginstal VMware Workstation dan memasang sistem operasi Debian Linux di dalamnya.',
        'p5.desc': 'Pada lomba UI/UX, saya berperan membangun sistem dengan membuat use case diagram dan activity diagram.',
        'proj.view': 'Lihat proyek',
        'blog.eyebrow': 'Tulisan',
        'blog.title': 'Blog',
        'blog.sub': 'Catatan seputar jaringan dan administrasi server.',
        'b1.desc': 'Nmap singkatan dari Network Mapper, tool open source untuk network discovery dan audit keamanan.',
        'b2.desc': 'Sistem monitoring jaringan berfungsi untuk memantau aktivitas pada perangkat jaringan.',
        'b3.desc': 'Pembahasan kali ini adalah cara menginstal Proxmox di VMware dan membangun VPS.',
        'b4.desc': 'Hosting adalah jasa penyewaan server internet untuk keperluan website dan email.',
        'blog.read': 'Baca selengkapnya',
        'contact.eyebrow': 'Mari berbincang',
        'contact.title': 'Kontak',
        'contact.sub': 'Punya proyek, peluang, atau sekadar pertanyaan? Kirim pesan kepada saya.',
        'contact.info': 'Informasi kontak',
        'contact.follow': 'Ikuti saya',
        'form.name': 'Nama',
        'form.email': 'Email',
        'form.message': 'Pesan',
        'form.send': 'Kirim pesan',
        'footer.rights': 'Hak cipta dilindungi.',
        'footer.top': 'Kembali ke atas'
    }
};

const statusText = {
    en: {
        invalid: 'Please fill in all fields with a valid email.',
        sending: 'Sending...',
        sent: 'Thanks! Your message has been sent.',
        failed: 'Something went wrong. Please try again or email me directly.',
        mail: 'Opening your email app...'
    },
    id: {
        invalid: 'Mohon isi semua kolom dengan email yang valid.',
        sending: 'Mengirim...',
        sent: 'Terima kasih! Pesan kamu sudah terkirim.',
        failed: 'Terjadi kesalahan. Coba lagi atau kirim email langsung.',
        mail: 'Membuka aplikasi email...'
    }
};

const root = document.documentElement;

function readStore(key) {
    try {
        return localStorage.getItem(key);
    } catch (e) {
        return null;
    }
}

function writeStore(key, value) {
    try {
        localStorage.setItem(key, value);
    } catch (e) {}
}

const themeToggle = document.getElementById('theme-toggle');
const themeMeta = document.querySelector('meta[name="theme-color"]');

function applyTheme(theme) {
    root.dataset.theme = theme;
    if (themeMeta) {
        themeMeta.setAttribute('content', theme === 'dark' ? '#0b0f14' : '#f7f8fa');
    }
}

applyTheme(root.dataset.theme === 'light' ? 'light' : 'dark');

themeToggle.addEventListener('click', () => {
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    writeStore('theme', next);
});

const i18nNodes = document.querySelectorAll('[data-i18n]');
const langToggle = document.getElementById('lang-toggle');
let currentLang = 'en';

i18nNodes.forEach((node) => {
    node.dataset.en = node.textContent;
});

function applyLang(lang) {
    currentLang = lang;
    root.lang = lang;
    i18nNodes.forEach((node) => {
        const translated = lang === 'id' ? translations.id[node.dataset.i18n] : null;
        node.textContent = translated || node.dataset.en;
    });
    langToggle.textContent = lang === 'id' ? 'EN' : 'ID';
    langToggle.setAttribute('aria-label', lang === 'id' ? 'Switch to English' : 'Ganti ke Bahasa Indonesia');
}

const savedLang = readStore('lang');
const browserLang = (navigator.language || '').toLowerCase().startsWith('id') ? 'id' : 'en';
applyLang(savedLang === 'en' || savedLang === 'id' ? savedLang : browserLang);

langToggle.addEventListener('click', () => {
    const next = currentLang === 'en' ? 'id' : 'en';
    applyLang(next);
    writeStore('lang', next);
});

const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');

function setMenu(open) {
    navLinks.classList.toggle('open', open);
    menuBtn.setAttribute('aria-expanded', String(open));
}

menuBtn.addEventListener('click', () => {
    setMenu(!navLinks.classList.contains('open'));
});

navLinks.addEventListener('click', (event) => {
    if (event.target.closest('a')) {
        setMenu(false);
    }
});

document.addEventListener('click', (event) => {
    if (!navLinks.contains(event.target) && !menuBtn.contains(event.target)) {
        setMenu(false);
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        setMenu(false);
    }
});

const sections = document.querySelectorAll('main section[id]');
const links = document.querySelectorAll('.nav-links a');
const revealNodes = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
    const spy = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) {
                return;
            }
            links.forEach((link) => {
                link.classList.toggle('is-active', link.getAttribute('href') === '#' + entry.target.id);
            });
        });
    }, { rootMargin: '-45% 0px -50% 0px' });

    sections.forEach((section) => spy.observe(section));

    const reveal = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    revealNodes.forEach((node) => reveal.observe(node));
} else {
    revealNodes.forEach((node) => node.classList.add('in'));
}

const chips = document.querySelectorAll('.chip');
const projects = document.querySelectorAll('#project-grid .project');

chips.forEach((chip) => {
    chip.addEventListener('click', () => {
        const filter = chip.dataset.filter;
        chips.forEach((other) => {
            const active = other === chip;
            other.classList.toggle('is-active', active);
            other.setAttribute('aria-pressed', String(active));
        });
        projects.forEach((card) => {
            card.hidden = filter !== 'all' && card.dataset.category !== filter;
        });
    });
});

const dialog = document.getElementById('cert-dialog');
const certImg = document.getElementById('cert-img');
const certCaption = document.getElementById('cert-caption');

document.querySelectorAll('[data-cert]').forEach((button) => {
    button.addEventListener('click', () => {
        if (typeof dialog.showModal !== 'function') {
            window.open(button.dataset.cert, '_blank', 'noopener');
            return;
        }
        certImg.src = button.dataset.cert;
        certImg.alt = button.dataset.title;
        certCaption.textContent = button.dataset.title;
        dialog.showModal();
    });
});

dialog.addEventListener('click', (event) => {
    if (event.target === dialog) {
        dialog.close();
    }
});

const form = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

function setStatus(key, type) {
    formStatus.textContent = statusText[currentLang][key];
    formStatus.className = 'form-status' + (type ? ' ' + type : '');
}

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const fields = form.querySelectorAll('input, textarea');
    let valid = true;
    fields.forEach((field) => {
        const ok = field.value.trim() !== '' && field.validity.valid;
        field.classList.toggle('is-invalid', !ok);
        valid = valid && ok;
    });

    if (!valid) {
        setStatus('invalid', 'error');
        return;
    }

    const data = new FormData(form);

    if (!FORM_ENDPOINT) {
        const subject = encodeURIComponent('Portfolio message from ' + data.get('name'));
        const body = encodeURIComponent(data.get('message') + '\n\n' + data.get('name') + '\n' + data.get('email'));
        setStatus('mail');
        window.location.href = 'mailto:' + CONTACT_EMAIL + '?subject=' + subject + '&body=' + body;
        return;
    }

    setStatus('sending');
    try {
        const response = await fetch(FORM_ENDPOINT, {
            method: 'POST',
            body: data,
            headers: { Accept: 'application/json' }
        });
        if (!response.ok) {
            throw new Error('Request failed');
        }
        form.reset();
        setStatus('sent', 'ok');
    } catch (e) {
        setStatus('failed', 'error');
    }
});

form.addEventListener('input', (event) => {
    event.target.classList.remove('is-invalid');
});

document.getElementById('year').textContent = new Date().getFullYear();
