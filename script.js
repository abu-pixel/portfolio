(function () {
  const root = document.documentElement;

  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    const isDark = root.getAttribute('data-theme') === 'dark';
    themeToggle.setAttribute('aria-pressed', String(isDark));
    themeToggle.setAttribute('aria-label', isDark ? 'Switch to light theme' : 'Switch to dark theme');
    themeToggle.addEventListener('click', function () {
      const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('aa-theme', next); } catch (e) {}
      themeToggle.setAttribute('aria-pressed', String(next === 'dark'));
      themeToggle.setAttribute('aria-label', next === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
    });
  }

  const menuBtn = document.getElementById('menuBtn');
  const navLinks = document.getElementById('navLinks');
  if (menuBtn && navLinks) {
    const setOpen = function (open) {
      navLinks.classList.toggle('is-open', open);
      menuBtn.setAttribute('aria-expanded', String(open));
      menuBtn.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
    };
    setOpen(false);
    menuBtn.addEventListener('click', function () {
      setOpen(menuBtn.getAttribute('aria-expanded') !== 'true');
    });
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () { setOpen(false); });
    });
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && menuBtn.getAttribute('aria-expanded') === 'true') {
        setOpen(false);
        menuBtn.focus();
      }
    });
    document.addEventListener('click', function (event) {
      if (menuBtn.getAttribute('aria-expanded') !== 'true') return;
      if (!navLinks.contains(event.target) && !menuBtn.contains(event.target)) setOpen(false);
    });
    window.addEventListener('resize', function () {
      if (window.innerWidth > 820) setOpen(false);
    });
  }

  const certificates = [
    { name: 'AWS', platform: 'Cursa', url: 'https://cursa.app/en/my-certificate/certe43332a6f12d57506a9f131f3af1b230', icon: '01', relevance: true },
    { name: 'Microsoft Azure Fundamentals (AZ-900)', platform: 'Cursa', url: 'https://cursa.app/en/my-certificate/cert8c2d5a089b684789426fbd6758d75f69', icon: '02', relevance: true },
    { name: 'Operating Systems & Systems Programming', platform: 'Cursa', url: 'https://cursa.app/en/my-certificate/certaf68eb6d5d9cf0aeacbb709c04f9dfd7', icon: '03', relevance: true },
    { name: 'Complete MongoDB Tutorial', platform: 'Cursa', url: 'https://cursa.app/en/my-certificate/certf2025318a03c36686bf1e00ea306ef64', icon: '04', relevance: true },
    { name: 'Java Intermediate', platform: 'SoloLearn', url: 'https://api2.sololearn.com/v2/certificates/CC-KSZLZ65W/image/png?t=639159123981254640', icon: '05', relevance: true },
    { name: 'Introduction to C++', platform: 'SoloLearn', url: 'https://api2.sololearn.com/v2/certificates/CC-WTJJGRZU/image/png?t=639159148717828710', icon: '06', relevance: true },
    { name: 'Copywriting', platform: 'Cursa', url: 'https://cursa.app/en/my-certificate/certefeeefe951bce78c94859578e62c4cb3', icon: '07', relevance: false },
    { name: 'Photoshop Full Course', platform: 'Cursa', url: 'https://cursa.app/en/my-certificate/certbf9567add0eaa86be3ae54aaf81dead3', icon: '08', relevance: false },
    { name: 'Supply Chain Management', platform: 'Cursa', url: 'https://cursa.app/en/my-certificate/cert290aca559204b8995f417b70fd9079a9', icon: '09', relevance: false },
    { name: 'Mobile Phone Repair', platform: 'Cursa', url: 'https://cursa.app/en/my-certificate/certeb2cc46da0e410dba727b216ff78c374', icon: '10', relevance: false },
    { name: 'Call Center Customer Service', platform: 'Cursa', url: 'https://cursa.app/en/my-certificate/certed5b2308cc192a3ea753ccca2f14e86e', icon: '11', relevance: false },
    { name: 'Unity Game Development', platform: 'Cursa', url: 'https://cursa.app/en/my-certificate/cert4c0a5c059bd75e3a37617fff037a07b0', icon: '12', relevance: false },
    { name: 'Kali Linux: Beginner to Advanced', platform: 'Cursa', url: 'https://cursa.app/en/my-certificate/cert71db20d6e85cb30af13f1ad3dc30a448', icon: '13', relevance: false },
    { name: 'Flutter 3.0 Masterclass', platform: 'Cursa', url: 'https://cursa.app/en/my-certificate/certe75fed4945204774605a81dc7be49985', icon: '14', relevance: false },
    { name: 'Power BI Full Course', platform: 'Cursa', url: 'https://cursa.app/en/my-certificate/certbcde8658314a742325e78ea71b60c402', icon: '15', relevance: false },
    { name: 'WordPress — Basic to Advanced', platform: 'Cursa', url: 'https://cursa.app/en/my-certificate/cert0b1807bdd39eb411b8cf966040dc1f8b', icon: '16', relevance: false },
    { name: 'Godot 4.3 2D Farming Game Tutorial', platform: 'Cursa', url: 'https://cursa.app/en/my-certificate/cert690d60fbdcce9083938d1a3534038f46', icon: '17', relevance: false },
    { name: 'Generative AI in Practice', platform: 'SoloLearn', url: 'https://api2.sololearn.com/v2/certificates/CC-VSIHCWNE/image/png?t=638857558880578750', icon: '18', relevance: false },
    { name: 'Data Analytics with AI', platform: 'SoloLearn', url: 'https://api2.sololearn.com/v2/certificates/CC-LLJ09CPB/image/png?t=638857607290247740', icon: '19', relevance: false },
    { name: 'AI in Data Analysis', platform: 'SoloLearn', url: 'https://api2.sololearn.com/v2/certificates/CC-VMY8WJIU/image/png?t=638859235383502650', icon: '20', relevance: false },
    { name: 'Ethical AI Foundation', platform: 'SoloLearn', url: 'https://api2.sololearn.com/v2/certificates/CC-X37FRQOK/image/png?t=638875139147878210', icon: '21', relevance: false },
    { name: 'Prompt Engineering', platform: 'SoloLearn', url: 'https://api2.sololearn.com/v2/certificates/CC-YPJABPLK/image/png?t=638884669206338610', icon: '22', relevance: false },
    { name: 'AI-Powered A/B Testing', platform: 'SoloLearn', url: 'https://api2.sololearn.com/v2/certificates/CC-I12MVX8I/image/png?t=638885402776124520', icon: '23', relevance: false },
    { name: 'Introduction to LLMs', platform: 'SoloLearn', url: 'https://api2.sololearn.com/v2/certificates/CC-WSTEK300/image/png?t=638886856120284580', icon: '24', relevance: false },
    { name: 'Machine Learning for Beginners', platform: 'SoloLearn', url: 'https://api2.sololearn.com/v2/certificates/CC-SUAUAFME/image/png?t=638888644299273520', icon: '25', relevance: false },
    { name: 'Research with AI', platform: 'SoloLearn', url: 'https://api2.sololearn.com/v2/certificates/CC-DJOX2I8T/image/png?t=638891228138220140', icon: '26', relevance: false }
  ];

  const certsGrid = document.getElementById('certsGrid');
  const certsToggle = document.getElementById('certsToggle');
  let showingAll = false;

  function certCard(cert) {
    const link = document.createElement('a');
    link.href = cert.url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.className = 'cert-card';
    link.setAttribute('aria-label', 'View certificate: ' + cert.name + ' on ' + cert.platform + ' (opens in a new tab)');

    const icon = document.createElement('span');
    icon.className = 'cert-icon';
    icon.setAttribute('aria-hidden', 'true');
    icon.textContent = cert.icon;

    const info = document.createElement('div');
    info.className = 'cert-info';
    const name = document.createElement('h4');
    name.textContent = cert.name;
    const platform = document.createElement('span');
    platform.textContent = cert.platform;
    info.append(name, platform);

    const view = document.createElement('span');
    view.className = 'cert-link';
    view.setAttribute('aria-hidden', 'true');
    view.textContent = 'View ↗';

    link.append(icon, info, view);
    return link;
  }

  function renderCerts() {
    if (!certsGrid) return;
    certsGrid.replaceChildren();
    const list = showingAll ? certificates : certificates.filter(function (c) { return c.relevance; });
    if (!list.length) {
      const empty = document.createElement('div');
      empty.className = 'state-box';
      empty.innerHTML = '<strong>No certificates to show</strong><p>Check back later or view the full list.</p>';
      certsGrid.appendChild(empty);
      return;
    }
    list.forEach(function (cert) { certsGrid.appendChild(certCard(cert)); });
    if (certsToggle) {
      certsToggle.textContent = showingAll
        ? 'Show only the most relevant'
        : 'Show all certificates';
      certsToggle.setAttribute('aria-expanded', String(showingAll));
    }
    certsGrid.setAttribute('aria-busy', 'false');
  }

  if (certsGrid) {
    renderCerts();
    if (certsToggle) {
      certsToggle.addEventListener('click', function () {
        showingAll = !showingAll;
        renderCerts();
      });
    }
  }

  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    const status = document.getElementById('formStatus');
    const email = 'abubeker.ahmedel.dev@gmail.com';

    function setError(field, message) {
      const error = document.getElementById(field.id + 'Error');
      if (error) error.textContent = message;
      if (message) field.setAttribute('aria-invalid', 'true');
      else field.removeAttribute('aria-invalid');
    }

    contactForm.addEventListener('submit', function (event) {
      event.preventDefault();
      const fields = ['name', 'email', 'topic', 'message'].map(function (id) {
        return document.getElementById(id);
      });
      let firstInvalid = null;
      fields.forEach(function (field) {
        if (!field) return;
        const value = field.value.trim();
        let message = '';
        if (!value) message = 'This field is required.';
        else if (field.id === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) message = 'Enter a valid email address.';
        else if (field.id === 'message' && value.length < 12) message = 'Please write at least 12 characters.';
        setError(field, message);
        if (message && !firstInvalid) firstInvalid = field;
      });

      if (firstInvalid) {
        if (status) status.hidden = true;
        firstInvalid.focus();
        return;
      }

      const name = document.getElementById('name').value.trim();
      const from = document.getElementById('email').value.trim();
      const topic = document.getElementById('topic').value;
      const body = document.getElementById('message').value.trim();
      const subject = '[Portfolio] ' + topic + ' — ' + name;
      const mailBody = 'Name: ' + name + '\nEmail: ' + from + '\nTopic: ' + topic + '\n\n' + body + '\n\nSent from abubeker-ahmedel.com';
      window.location.href = 'mailto:' + email + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(mailBody);
      if (status) {
        status.textContent = 'Your email app should open with the message ready to send. If it did not, email ' + email + ' directly — the link is on the right.';
        status.hidden = false;
        status.setAttribute('role', 'status');
      }
    });

    ['name', 'email', 'topic', 'message'].forEach(function (id) {
      const field = document.getElementById(id);
      if (field) field.addEventListener('input', function () { setError(field, ''); });
    });
  }

  const revealItems = document.querySelectorAll('.reveal');
  if (revealItems.length && 'IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.classList.add('js-motion');
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    revealItems.forEach(function (item) { observer.observe(item); });
  }

  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (event) {
      const href = anchor.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
      history.replaceState(null, '', href);
    });
  });

  document.querySelectorAll('[data-print]').forEach(function (button) {
    button.addEventListener('click', function () { window.print(); });
  });

  document.querySelectorAll('[data-year]').forEach(function (node) {
    node.textContent = String(new Date().getFullYear());
  });
})();
