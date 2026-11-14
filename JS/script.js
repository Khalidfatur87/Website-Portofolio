const FORM_ENDPOINT = '';
const CONTACT_EMAIL = 'khalidfr87@gmail.com';

const translations = {
    id: {
        'nav.skip': 'Langsung ke konten',
        'nav.about': 'Tentang',
        'nav.skills': 'Keahlian',
        'nav.experience': 'Pengalaman',
        'nav.projects': 'Proyek',
        'nav.education': 'Pendidikan',
        'nav.blog': 'Blog',
        'nav.contact': 'Kontak',
        'hero.hello': 'Halo, saya',
        'hero.role': 'Fullstack Developer dan lulusan Software Engineering Binus University',
        'hero.lead': 'Freelance Fullstack Developer di PT JAPFA Comfeed Indonesia Tbk, setelah satu tahun sebagai Web Developer Intern. Saya membangun layanan backend, RESTful API, dan dashboard internal.',
        'hero.cv': 'Unduh CV',
        'hero.contact': 'Hubungi saya',
        'about.eyebrow': 'Kenali lebih jauh',
        'about.title': 'Tentang saya',
        'about.p1': 'Saya lulusan Ilmu Komputer (Software Engineering) Binus University dengan IPK 3,48 dan hampir dua tahun di PT JAPFA Comfeed Indonesia Tbk, dari Web Developer Intern hingga kini freelance fullstack developer.',
        'about.p2': 'Saya membangun dashboard keuangan internal dengan Oracle APEX dan PL/SQL, RESTful API dengan Python (Flask), serta layanan backend dengan Node.js dan PostgreSQL. Saya juga memiliki pengalaman memimpin organisasi mahasiswa dan meraih juara 3 kompetisi UI/UX internasional.',
        'about.years': 'Tahun di JAPFA',
        'about.projects': 'Proyek profesional',
        'about.gpa': 'IPK',
        'skills.eyebrow': 'Yang saya kuasai',
        'skills.title': 'Keahlian',
        'skills.languages': 'Bahasa pemrograman',
        'skills.frameworks': 'Framework dan platform',
        'skills.databases': 'Database',
        'skills.tools': 'Tools',
        'exp.eyebrow': 'Karier dan kepemimpinan',
        'exp.title': 'Pengalaman',
        'exp.sub': 'Pengalaman profesional dan organisasi mahasiswa saya.',
        'exp.work': 'Pengalaman profesional',
        'exp.orgs': 'Organisasi dan kepemimpinan',
        'exp0.tag': 'Freelance',
        'exp0.date': 'Feb 2026 - Sekarang',
        'exp0.b1': 'Floxx (aplikasi manajemen peternakan): mengoptimalkan performa backend dengan Redis, melakukan debugging, serta membantu mengembangkan mekanisme sinkronisasi data untuk mode offline.',
        'exp0.b2': 'Membuat unit test dengan Vitest dan melakukan functional testing dengan Katalon untuk menjaga stabilitas rilis Floxx.',
        'exp0.b3': 'VMS ONE (visitor management system): membangun dan memelihara platform dengan Nuxt.js dan NestJS, serta menerapkan AI-Driven Development Lifecycle (AI-DLC) dalam proses pengembangannya.',
        'exp0.b4': 'Mengimplementasikan CI/CD dengan Jenkins dan Docker untuk otomatisasi build dan deployment.',
        'exp5.tag': 'Magang',
        'exp5.date': 'Feb 2025 - Feb 2026',
        'exp5.b1': 'BCA Host-to-Host (H2H) Integration: membangun dashboard monitoring keuangan internal dengan Oracle APEX, didukung query SQL dan blok PL/SQL kompleks untuk mengambil, menyaring, dan mengolah data transaksi dari Oracle Database.',
        'exp5.b2': 'Membuat laporan rekonsiliasi otomatis untuk tim finance, mengurangi pekerjaan rekonsiliasi manual.',
        'exp5.b3': 'Japfa for Kids (platform edukasi CSR): merancang ERD dan skema database PostgreSQL, serta membangun RESTful API dengan Python (Flask) yang mendukung sinkronisasi offline agar data tetap konsisten saat perangkat kembali online.',
        'exp5.b4': 'Mengoptimalkan performa database agar mendukung aktivitas pengguna yang terus bertambah dan pengambilan data yang efisien.',
        'exp5.b5': 'Floxx (aplikasi manajemen peternakan): membangun layanan backend modular dengan Node.js dan PostgreSQL, serta menguji dan men-debug API dengan Postman untuk mengurangi bug yang lolos ke production.',
        'exp1.desc': 'Sebagai Freshmen Leader, bertanggung jawab membimbing dan mendampingi mahasiswa baru dalam orientasi kampus selama satu pekan.',
        'exp2.desc': 'Membantu mahasiswa baru memahami sistem akademik dan menjadi partner mereka selama satu tahun.',
        'exp3.desc': 'Memimpin UKM Binus Badminton regional Bekasi dan mengoordinasi seluruh kegiatan regional. Menjadi penanggung jawab Binus Badminton Cup 2024 (turnamen tingkat nasional), ketua acara ulang tahun UKM 2024 dan kompetisi internal anggota, serta mengorganisir studi banding dengan Universitas Esa Unggul Bekasi.',
        'exp4.desc': 'Meraih juara 3 lomba UI/UX internasional yang diselenggarakan Binus, dengan peran merancang UI/UX dan membangun sistem.',
        'exp.view': 'Lihat sertifikat',
        'proj.eyebrow': 'Karya terbaru saya',
        'proj.title': 'Proyek',
        'proj.pro': 'Profesional',
        'filter.all': 'Semua',
        'filter.work': 'Profesional',
        'filter.web': 'Web',
        'filter.design': 'UI/UX',
        'filter.network': 'Jaringan',
        'wp1.date': 'Feb 2025 - Sekarang',
        'wp1.desc': 'Aplikasi manajemen peternakan. Membangun layanan backend modular dengan Node.js dan PostgreSQL, mengoptimalkan performa dengan Redis, membantu mengembangkan sinkronisasi data mode offline, dan menjaga stabilitas rilis dengan pengujian Postman, Vitest, dan Katalon.',
        'wp2.date': 'Feb 2026 - Sekarang',
        'wp2.desc': 'Visitor management system yang dibangun dan dipelihara dengan Nuxt.js dan NestJS, dikembangkan dengan AI-Driven Development Lifecycle (AI-DLC) dan dirilis lewat pipeline CI/CD dengan Jenkins dan Docker.',
        'wp3.desc': 'Dashboard monitoring keuangan internal untuk integrasi BCA Host-to-Host, dibangun dengan Oracle APEX serta SQL dan PL/SQL kompleks di atas Oracle Database. Dilengkapi laporan rekonsiliasi otomatis yang mengurangi pekerjaan manual tim finance.',
        'wp4.desc': 'Platform edukasi CSR. Merancang ERD dan skema database PostgreSQL, membangun RESTful API dengan Python (Flask) yang mendukung sinkronisasi offline agar data konsisten saat perangkat kembali online, serta mengoptimalkan performa database untuk pengguna yang terus bertambah.',
        'p1.desc': 'Final lab project "Jenius Academy" adalah platform edukasi yang menyediakan berbagai kursus online berkualitas untuk membantu mengembangkan keterampilan di era digital.',
        'p2.desc': 'Final project "Rela Berbagi" adalah website yang memudahkan berbagi sumber daya dan bantuan, mendorong semangat kolaborasi dan saling mendukung di masyarakat.',
        'p3.desc': 'Final lab project "Water Guard" adalah platform untuk memantau dan mengelola sumber daya air demi penggunaan yang berkelanjutan.',
        'p4.desc': 'Bersama tim, saya membuat video tutorial cara menginstal VMware Workstation dan memasang sistem operasi Debian Linux di dalamnya.',
        'p5.desc': 'Pada lomba UI/UX, saya berperan membangun sistem dengan membuat use case diagram dan activity diagram.',
        'proj.view': 'Lihat proyek',
        'edu.eyebrow': 'Latar belakang',
        'edu.title': 'Pendidikan dan prestasi',
        'edu.heading': 'Pendidikan',
        'edu.ach': 'Prestasi',
        'edu1.desc': 'Sarjana Ilmu Komputer (S.Kom), Software Engineering',
        'edu1.gpa': 'IPK 3,48 / 4,00',
        'edu2.desc': 'Teknik Komputer dan Jaringan',
        'ach2.tag': 'Penghargaan',
        'ach2.desc': 'Meraih Mahasiswa Berprestasi atas kontribusi untuk Binus University.',
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
        'footer.top': 'Kembali ke atas',
        'dialog.close': 'Tutup'
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

const i18nLabelNodes = document.querySelectorAll('[data-i18n-label]');
i18nLabelNodes.forEach((node) => {
    node.dataset.enLabel = node.getAttribute('aria-label') || '';
});

function applyLang(lang) {
    currentLang = lang;
    root.lang = lang;
    i18nNodes.forEach((node) => {
        const translated = lang === 'id' ? translations.id[node.dataset.i18n] : null;
        node.textContent = translated || node.dataset.en;
    });
    i18nLabelNodes.forEach((node) => {
        const translated = lang === 'id' ? translations.id[node.dataset.i18nLabel] : null;
        node.setAttribute('aria-label', translated || node.dataset.enLabel);
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

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const chips = document.querySelectorAll('.chip');
const projects = document.querySelectorAll('#project-grid .project');

function balanceShots() {
    const shots = document.querySelectorAll('#project-grid .pcard-shot');
    const visible = [...shots].filter((card) => !card.hidden);
    shots.forEach((card) => card.classList.remove('pcard-wide'));
    if (visible.length % 3 === 2) {
        visible.slice(-2).forEach((card) => card.classList.add('pcard-wide'));
    }
}

balanceShots();

chips.forEach((chip) => {
    chip.addEventListener('click', () => {
        const filter = chip.dataset.filter;
        chips.forEach((other) => {
            const active = other === chip;
            other.classList.toggle('is-active', active);
            other.setAttribute('aria-pressed', String(active));
        });
        projects.forEach((card) => {
            const hide = filter !== 'all' && card.dataset.category !== filter;
            const wasHidden = card.hidden;
            card.hidden = hide;
            if (!hide && wasHidden && !reduceMotion.matches && card.animate) {
                card.animate(
                    [{ opacity: 0, transform: 'translateY(14px) scale(0.98)' }, { opacity: 1, transform: 'none' }],
                    { duration: 380, easing: 'cubic-bezier(.2,.7,.2,1)' }
                );
            }
        });
        balanceShots();
    });
});

projects.forEach((card) => {
    card.addEventListener('pointermove', (event) => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--mx', (event.clientX - rect.left) + 'px');
        card.style.setProperty('--my', (event.clientY - rect.top) + 'px');
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
