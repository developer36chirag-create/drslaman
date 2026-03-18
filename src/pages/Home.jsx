import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    const nav = document.querySelector("nav");

    const handleScroll = () => {
      if (nav) {
        nav.classList.toggle("scrolled", window.scrollY > 40);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Scroll reveal
    const elements = document.querySelectorAll(".sr");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el, i) => {
      el.style.transitionDelay = `${(i % 4) * 0.07}s`;
      observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Albuquerque, New Mexico</p>

          <h1 className="hero-h1">
            An Award-Winning,<br />
            <em>Hometown Dentist</em>
          </h1>

          <p className="hero-lead">
            At the practice of James Slaman DDS, PC we combine advanced cosmetic
            and restorative dentistry with genuine, patient-first care.
          </p>

          <div className="hero-btns">
            <a href="#contact" className="btn btn-fill">
              Schedule a Consultation
            </a>
            <a href="#services" className="btn btn-line">
              Explore Services →
            </a>
          </div>

          <div className="hero-trust">
            <span className="tbadge">★ 5-Star Rated Practice</span>
            <span className="tbadge">✦ 30+ Years Experience</span>
            <span className="tbadge">◈ Accepting New Patients</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-photo"></div>

          <div className="hero-chip">
            <strong>New Patient Special</strong>
            <span>Complimentary smile consultation</span>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div className="stats-strip">
        <div className="stat-block sr">
          <div className="stat-n">30+</div>
          <div className="stat-l">Years of Excellence</div>
        </div>

        <div className="stat-block sr">
          <div className="stat-n">5★</div>
          <div className="stat-l">Patient Satisfaction</div>
        </div>

        <div className="stat-block sr">
          <div className="stat-n">5K+</div>
          <div className="stat-l">Smiles Transformed</div>
        </div>

        <div className="stat-block sr">
          <div className="stat-n">1</div>
          <div className="stat-l">Visit Crowns</div>
        </div>
      </div>

      {/* SMILE SECTION */}
      <section className="smile-split">
        <div className="smile-photo"></div>

        <div className="smile-copy">
          <p className="sec-tag">Transform Your Smile</p>

          <h2 className="sec-h">
            A Superior General,<br />
            <em>Cosmetic Dentistry Office</em>
          </h2>

          <p className="sec-body">
            We provide state-of-the-art dental care designed to enhance your
            confidence and improve your overall health.
          </p>

          <ul className="bullet-list">
            <li>Boost your confidence</li>
            <li>Restore your smile</li>
            <li>Enjoy long-lasting results</li>
          </ul>

          <a href="#contact" className="btn btn-fill">
            Start Your Smile Journey →
          </a>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section
        id="reviews"
        className="wrap"
        style={{ background: "var(--c-cream)" }}
      >
        <div className="t-header">
          <div>
            <p className="sec-tag">Learn Why Patients Love Us</p>
            <h2 className="sec-h">
              Patients Love Our <em>Care</em>
            </h2>
          </div>
        </div>

        <div className="testimonials__grid">
          <div className="testimonials__card sr">
            <div className="testimonials__stars">★★★★★</div>
            <p className="testimonials__txt">
              "Amazing dentist! Friendly staff and excellent care."
            </p>
            <div className="testimonials__who">— Patient</div>
          </div>

          <div className="testimonials__card sr">
            <div className="testimonials__stars">★★★★★</div>
            <p className="testimonials__txt">
              "Best dental experience I’ve ever had."
            </p>
            <div className="testimonials__who">— Patient</div>
          </div>
        </div>
      </section>

      {/* BEFORE & AFTER */}
      <section
        className="wrap"
        style={{ display: "flex", gap: "20px" }}
      >
        <div style={{ width: "50%" }}>
          <p className="sec-tag">Real Results</p>

          <h2 className="sec-h">
            Stunning Before & <em>After</em>
          </h2>

          <p className="sec-body">
            See the transformations we create for our patients.
          </p>
        </div>

        <div className="ba-grid">
          <div className="ba-card sr">
            <div className="ba-img">
                <img src="../public/before\ and\ after\ of\ Dental\ Bonding.png" alt=""></img>
            </div>
            <div className="ba-info">
              <div className="ba-title">Porcelain Veneers</div>
            </div>
          </div>

          <div className="ba-card sr">
            <div className="ba-img">
                <img src="../public/before\ and\ after\ of\ porcelain\ veneers.png" alt="" />
            </div>
            <div className="ba-info">
              <div className="ba-title">Dental Bonding</div>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO */}
      <section className="wrap" style={{ background: "var(--c-cream)" }}>
        <div className="video-header">
          <p className="sec-tag">Patient Experience</p>

          <h2 className="sec-h">
            Top-Notch <em>Dental Care</em>
          </h2>
        </div>

        <div className="video-content">
          <div className="video-wrapper">
            <video controls>
              <source
                src="../public/original.jpg"
                type="video/mp4"
              />
            </video>
          </div>

          <p className="video-description">
            Learn about our patient-first philosophy and care approach.
          </p>

          <a href="#contact" className="btn btn-fill">
            Visit Video Gallery
          </a>
        </div>
      </section>
    </>
  );
}