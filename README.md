<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Iky Vortex | Portfolio</title>
    <link rel="stylesheet" href="ikyvrtx.css">
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
</head>
<body data-theme="dark">

    <div id="preloader">
        <div class="preloader-content">
            <div class="preloader-logo-container">
                <svg class="preloader-logo" viewBox="0 0 100 100">
                    <path d="M20,20 L80,20 L80,80 L20,80 Z" stroke-width="8" fill="none" />
                </svg>
            </div>
            <div class="preloader-text">
                <h2>Iky Vortex</h2>
                <p>Loading Portofolio...</p>
            </div>
            <div class="progress-bar-container">
                <div class="progress-bar"></div>
            </div>
        </div>
    </div>

    <div class="custom-cursor"></div>

    <canvas id="particle-canvas"></canvas>

    <header class="header">
        <a href="#" class="logo">Iky<span>Vortex</span></a>
        <nav class="navbar">
            <a href="#home" class="active">Home</a>
            <a href="#about">About</a>
            <a href="#kisah">Kisah</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
        </nav>
        <div class="header-right">
            <div id="theme-toggle">
                <i class='bx bxs-moon'></i>
                <i class='bx bxs-sun'></i>
            </div>
            <i class='bx bx-menu' id="menu-icon"></i>
        </div>
    </header>

    <main id="main-content">
        <section class="home" id="home">
            <div class="home-content">
                <h1>IkyWangsaff<span class="typing-cursor">|</span></h1>
                <h3>
                    <span class="text-rotator"></span>
                </h3>
                <p>"Code is poetry, and I'm here to write beautiful verses that solve real-world problems."</p>
                <div class="btn-group">
                    <a href="#skills" class="btn">Explore My Work</a>
                    <a href="#" class="btn btn-secondary">
                        <i class='bx bx-download'></i> Review CV
                    </a>
                </div>
                <div class="social-icons">
                    <a href="#"><i class='bx bxl-github'></i></a>
                    <a href="#"><i class='bx bxl-linkedin'></i></a>
                    <a href="mailto:ikyvortex@gmail.com"><i class='bx bxs-envelope'></i></a>
                </div>
            </div>
            <div class="scroll-down-indicator">
                <a href="#about"><i class='bx bx-chevron-down'></i></a>
            </div>
        </section>

        <section class="about" id="about">
            <h2 class="section-title">About <span>Me</span></h2>
            <div class="about-container">
                <div class="about-img">
                    <img src="https://files.catbox.moe/t5y8ui.jpg" alt="ikyWangsaff">
                </div>
                <div class="about-content">
                    <h3>Hi there! I'm Iky Vortex 👋</h3>
                    <p>just a beginner developer who is just learning how to tinker with HTML code, don't criticize me, bro, I'm still far below 😭.</p>
                    <ul class="about-details">
                        <li><i class='bx bxs-user'></i> <span>19 Years Old</span></li>
                        <li><i class='bx bxs-map'></i> <span>South Sumatra, Indonesia 🇮🇩</span></li>
                        <li><i class='bx bxs-heart'></i> <span>Coding & Analysis</span></li>
                        <li><i class='bx bx-code-alt'></i> <span>2+ Years Experience</span></li>
                    </ul>
                    <p class="quote">"The best way to predict the future is to create it through code."</p>
                </div>
            </div>
        </section>

        <section class="kisah" id="kisah">
            <h2 class="section-title">My <span>Kisah Gueh Bjirr</span></h2>
            <div class="kisah-timeline-container">
                <div class="kisah-timeline">
                    <div class="timeline-line">
                        <div class="timeline-line-progress"></div>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-icon"><i class='bx bx-code-alt'></i></div>
                        <div class="timeline-content">
                            <h4>2022</h4>
                            <h3>Awal Belajar</h3>
                            <p>Baru belajar coding dari beberapa medsos seperti YouTube dan belum tau apa-apa</p>
                        </div>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-icon"><i class='bx bx-layer'></i></div>
                        <div class="timeline-content">
                            <h4>2023</h4>
                            <h3>Dah Mayan lah ya</h3>
                            <p>Baru sekedar coba-coba di laptop</p>
                        </div>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-icon"><i class='bx bxs-game'></i></div>
                        <div class="timeline-content">
                            <h4>2024</h4>
                            <h3>Developer rinem loh ya 🗿</h3>
                            <p>Baru sekedar pasang pasang script hasil nyolong</p>
                        </div>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-icon"><i class='bx bx-chip'></i></div>
                        <div class="timeline-content">
                            <h4>2025</h4>
                            <h3>Coba bikin fitur MD</h3>
                            <p>Not bad lah (walaupun banyak nyolong fitur orang 😂) </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="skills" id="skills">
            <h2 class="section-title">Skill <span>Basic</span></h2>
            <p class="section-subtitle">A comprehensive overview of my technical expertise and proficiency levels.</p>
            <div class="skills-container">
                <div class="skill-category">
                    <h3>Script</h3>
                    <div class="skill-bar">
                        <div class="skill-info"><span><i class='bx bxl-Script MD'></i>Script MD</span> <span>95%</span></div>
                        <div class="skill-progress-line"><span data-progress="95%"></span></div>
                    </div>
                    <div class="skill-bar">
                        <div class="skill-info"><span><i class='bx bxl-Script Bug'></i>Script Bug</span> <span>54%</span></div>
                        <div class="skill-progress-line"><span data-progress="54%"></span></div>
                    </div>
                    <div class="skill-bar">
                        <div class="skill-info"><span><i class='bx bxl-Script Ddos'></i>Script Ddos</span> <span>0%</span></div>
                        <div class="skill-progress-line"><span data-progress="0%"></span></div>
                    </div>
                    <div class="skill-bar">
                        <div class="skill-info"><span><i class='bx bxl-virus/ransomware'></i> virus/ransomware</span> <span>-000%</span></div>
                        <div class="skill-progress-line"><span data-progress="-000%"></span></div>
                    </div>
                </div>
                <div class="skill-category">
                    <h3>Pengembangan fitur</h3>
                    <div class="skill-bar">
                        <div class="skill-info"><span><i class='bx bxl-Cpanel'></i> Cpanel</span> <span>67%</span></div>
                        <div class="skill-progress-line"><span data-progress="67%"></span></div>
                    </div>
                    <div class="skill-bar">
                        <div class="skill-info"><span><i class='bx bx-RPG'></i>RPG</span> <span>30%</span></div>
                        <div class="skill-progress-line"><span data-progress="30%"></span></div>
                    </div>
                    <div class="skill-bar">
                        <div class="skill-info"><span><i class='bx bxl-AI'></i>AI</span> <span>85%</span></div>
                        <div class="skill-progress-line"><span data-progress="85%"></span></div>
                    </div>
                    <div class="skill-bar">
                        <div class="skill-info"><span><i class='bx bxl-tools dan maker'></i>tools dan maker</span> <span>90%</span></div>
                        <div class="skill-progress-line"><span data-progress="90%"></span></div>
                    </div>
                </div>
            </div>
        </section>

        <section class="contact" id="contact">
            <h2 class="section-title">Let's Work <span>Together</span></h2>
            <p class="section-subtitle">Ready to bring your ideas to life? Get in touch and let's create something amazing together.</p>
            <div class="contact-container">
                <h3>Get In Touch</h3>
                <p>I'm always interested in new opportunities and exciting projects. Whether you need a full-stack developer, game developer, or AI integration specialist, I'd love to hear from you.</p>
                <div class="contact-info">
                    <a href="mailto:ikyvortex@gmail.com" class="info-item">
                        <i class='bx bxs-envelope'></i>
                        <div>
                            <h4>Email</h4>
                            <p>ikyvortex@gmail.com</p>
                        </div>
                    </a>
                    <a href="tel:+6283144627535" class="info-item">
                        <i class='bx bxs-phone'></i>
                        <div>
                            <h4>Phone</h4>
                            <p>+62 831 4462 7535</p>
                        </div>
                    </a>
                    <div class="info-item">
                        <i class='bx bxs-map'></i>
                        <div>
                            <h4>Location</h4>
                            <p>South Sumatra, Indonesia</p>
                        </div>
                    </div>
                </div>
                <div class="contact-socials">
                    <h4>Follow Me</h4>
                    <div class="social-icons">
                         <a href="#"><i class='bx bxl-github'></i></a>
                         <a href="#"><i class='bx bxl-linkedin'></i></a>
                         <a href="ikyoffc"><i class='bx bxl-twitter'></i></a>
                         <a href="#"><i class='bx bxl-instagram-alt'></i></a>
                    </div>
                </div>
            </div>
        </section>
    </main>
    
    <footer class="footer">
        <div class="footer-content">
             <div class="footer-about">
                 <a href="#" class="logo">Iky<span>Vortex</span></a>
                 <p>Full Stack Developer passionate about creating innovative solutions through clean code, creative design, and cutting-edge technology.</p>
                 <q>"Code is like humor. When you have to explain it, it's bad."</q>
                 <span>- Cory House</span>
             </div>
             <div class="footer-links">
                 <h4>Quick Links</h4>
                 <ul>
                     <li><a href="#home">Home</a></li>
                     <li><a href="#about">About</a></li>
                     <li><a href="#kisah">Kisah</a></li>
                     <li><a href="#skills">Skills</a></li>
                     <li><a href="#contact">Contact</a></li>
                 </ul>
             </div>
             <div class="footer-services">
                 <h4>Barang Digital</h4>
                 <ul>
                     <li>Script Bot WhatsApp</li>
                     <li>Jasa Rename Script</li>
                     <li>Panel ptredactyl</li>
                     <li>Nokos WhatsApp</li>
                     <li>Sewa Bot Jaga Gruphttps://files.catbox.moe/t5y8ui.jpg</li>
                 </ul>
             </div>
        </div>
        <div class="footer-bottom">
            <p>© 2025 IKY VORTEX. All Rights Reserved.</p>
        </div>
    </footer>

    <a href="#home" class="scroll-to-top"><i class='bx bx-up-arrow-alt'></i></a>

    <script src="ikyvrtx.js"></script>
</body>
</html>
