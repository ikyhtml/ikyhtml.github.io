
document.addEventListener("DOMContentLoaded", () => {
    const preloader = document.getElementById("preloader");
    const progressBar = preloader.querySelector(".progress-bar");
    const mainContent = document.getElementById("main-content");
    const body = document.body;

    progressBar.style.width = "100%";

    window.addEventListener("load", () => {
        setTimeout(() => {
            preloader.classList.add("hidden");
            body.classList.add("loaded");
            body.style.cursor = "";
        }, 500);
    });

    const customCursor = document.querySelector('.custom-cursor');
    if (window.matchMedia("(pointer: fine)").matches) {
        document.addEventListener('mousemove', e => {
            customCursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        });
        document.querySelectorAll('a, button, .btn, .social-icons a, #theme-toggle, .info-item').forEach(el => {
            el.addEventListener('mouseenter', () => body.classList.add('link-hover'));
            el.addEventListener('mouseleave', () => body.classList.remove('link-hover'));
        });
    } else {
        customCursor.style.display = 'none';
    }
    
    const canvas = document.getElementById('particle-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let particlesArray;

    class Particle {
        constructor(x, y, dirX, dirY, size, color) {
            this.x = x; this.y = y; this.dirX = dirX; this.dirY = dirY;
            this.size = size; this.color = color;
        }
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
        }
        update() {
            if (this.x > canvas.width || this.x < 0) this.dirX = -this.dirX;
            if (this.y > canvas.height || this.y < 0) this.dirY = -this.dirY;
            this.x += this.dirX; this.y += this.dirY;
            this.draw();
        }
    }

    function initParticles() {
        particlesArray = [];
        const numParticles = (canvas.width * canvas.height) / 9000;
        for (let i = 0; i < numParticles; i++) {
            let size = Math.random() * 2 + 1;
            let x = Math.random() * (innerWidth - size * 2) + size;
            let y = Math.random() * (innerHeight - size * 2) + size;
            let dirX = (Math.random() - 0.5) * 0.4;
            let dirY = (Math.random() - 0.5) * 0.4;
            let color = 'rgba(0, 170, 255, 0.4)';
            particlesArray.push(new Particle(x, y, dirX, dirY, size, color));
        }
    }

    function connectParticles() {
        for (let a = 0; a < particlesArray.length; a++) {
            for (let b = a; b < particlesArray.length; b++) {
                let dx = particlesArray[a].x - particlesArray[b].x;
                let dy = particlesArray[a].y - particlesArray[b].y;
                let distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < 120) {
                    ctx.strokeStyle = `rgba(0, 170, 255, ${1 - distance / 120})`;
                    ctx.lineWidth = 0.2;
                    ctx.beginPath();
                    ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                    ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                    ctx.stroke();
                }
            }
        }
    }

    function animateParticles() {
        requestAnimationFrame(animateParticles);
        ctx.clearRect(0, 0, innerWidth, innerHeight);
        particlesArray.forEach(p => p.update());
        connectParticles();
    }

    initParticles();
    animateParticles();
    window.addEventListener('resize', () => {
        canvas.width = innerWidth;
        canvas.height = innerHeight;
        initParticles();
    });

    const themeToggle = document.getElementById("theme-toggle");
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme) {
        body.setAttribute("data-theme", currentTheme);
    }
    themeToggle.addEventListener("click", () => {
        let theme = body.getAttribute("data-theme") === "dark" ? "light" : "dark";
        body.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    });

    const menuIcon = document.querySelector("#menu-icon");
    const navbar = document.querySelector(".navbar");
    menuIcon.onclick = () => {
        menuIcon.classList.toggle("bx-x");
        navbar.classList.toggle("active");
    };

    const textRotator = document.querySelector(".text-rotator");
    const roles = ["Full Stack Developer", "Prompt Engineer", "Game Dev"];
    let roleIndex = 0, charIndex = 0, isDeleting = false;
    
    function type() {
        const currentRole = roles[roleIndex];
        let typeSpeed = isDeleting ? 75 : 150;

        if (!isDeleting) {
            textRotator.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
            if (charIndex === currentRole.length) {
                isDeleting = true;
                typeSpeed = 2000;
            }
        } else {
            textRotator.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
            if (charIndex === 0) {
                isDeleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
            }
        }
        setTimeout(type, typeSpeed);
    }
    type();

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("header nav a");
    const scrollToTopBtn = document.querySelector(".scroll-to-top");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                const id = entry.target.getAttribute("id");

                if(id === 'skills') {
                    const skillBars = document.querySelectorAll('.skill-progress-line span');
                    skillBars.forEach(bar => bar.style.width = bar.dataset.progress);
                }

                navLinks.forEach(link => {
                    link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
                });
            }
        });
    }, { rootMargin: "-50% 0px -50% 0px" });

    sections.forEach(sec => observer.observe(sec));
    
    window.addEventListener('scroll', () => {
        let header = document.querySelector(".header");
        header.classList.toggle("sticky", window.scrollY > 100);

        scrollToTopBtn.classList.toggle('active', window.scrollY > 300);

        menuIcon.classList.remove("bx-x");
        navbar.classList.remove("active");
    });

    const journeySection = document.getElementById('journey');
    const timelineProgress = document.querySelector('.timeline-line-progress');
    const journeyTimelineContainer = document.querySelector('.journey-timeline-container');
    
    function updateTimelineProgress() {
        const rect = journeyTimelineContainer.getBoundingClientRect();
        const a = -rect.top + (window.innerHeight / 2);
        const b = rect.height;
        let percentage = (a / b) * 100;
        percentage = Math.max(0, Math.min(100, percentage));
        timelineProgress.style.height = `${percentage}%`;
    }
    window.addEventListener('scroll', updateTimelineProgress);
    window.addEventListener('resize', updateTimelineProgress);
});