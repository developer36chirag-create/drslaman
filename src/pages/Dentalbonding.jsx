import React, { useEffect } from 'react';
import './Dentalbonding.css';

/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */

const BADGES = [
  { ico: '★', label: '5-Star Rated' },
  { ico: '✦', label: 'Since 1992' },
  { ico: '◈', label: 'Accepting New Patients' },
];


const ADVANTAGES = [
  {
    ico: '💰',
    num: '01',
    title: 'It\'s Affordable',
    desc: 'Bonding is one of the most affordable cosmetic dentistry treatments available and costs substantially less than porcelain veneers. Plus, it conceals stains, closes gaps between teeth, and hides other imperfections marring your smile.',
  },
  {
    ico: '⚡',
    num: '02',
    title: 'It\'s Quick',
    desc: 'Because there is minimal preparation needed for dental bonding, you\'re typically in and out in one visit of less than an hour. In contrast, veneers require temporary restorations and multiple visits over a couple of weeks to complete.',
  },
  {
    ico: '↩️',
    num: '03',
    title: 'It\'s Reversible',
    desc: 'Unlike veneers, enamel does not need to be removed and teeth do not need to be reshaped for bonding. Instead, the tooth is only gently etched before applying the composite resin material. And, if you change your mind, bonding is reversible.',
  },
];

const PROBLEMS_SOLVED = [
  'Repair chipped or cracked teeth',
  'Mask discolored teeth',
  'Close gaps between teeth',
  'Make stubby teeth look longer',
  'Make misshapen teeth look symmetrical',
  'Protect exposed tooth roots',
  'Repair cavities with a tooth-colored filling',
  'Build up teeth worn down by erosion',
];

const PROCESS_STEPS = [
  {
    num: '01',
    title: 'Color Matching',
    desc: 'Dr. Slaman will color match the composite resin to the shade of your teeth to create a perfectly natural-looking restoration that blends seamlessly.',
  },
  {
    num: '02',
    title: 'Surface Preparation',
    desc: 'The dentist will apply a solution that slightly roughens the surface of the tooth. This allows the resin to properly adhere to the tooth for a lasting bond.',
  },
  {
    num: '03',
    title: 'Resin Application',
    desc: 'The resin will be applied to the tooth and carefully shaped and molded by Dr. Slaman\'s expert hands to achieve your smile goals.',
  },
  {
    num: '04',
    title: 'Bonding & Hardening',
    desc: 'Using a special curing light, the composite resin is hardened and bonded to the tooth. Final adjustments are made to ensure your complete satisfaction.',
  },
  {
    num: '05',
    title: 'Polish & Finish',
    desc: 'The final step is polishing the tooth and resin to achieve the most natural-looking, beautifully finished results possible.',
  },
];

const DR_QUALITIES = [
  {
    ico: '🏅',
    title: 'Highest Standards',
    desc: 'Dr. Slaman is a distinguished restorative and cosmetic dentist who has been serving the needs of his hometown for more than two decades, always setting the bar higher.',
  },
  {
    ico: '🔍',
    title: 'Attention to Detail',
    desc: 'His attention to detail extends to the dental practice, which offers thoughtful amenities such as warm blankets, headphones, specialty coffee, and filtered water.',
  },
  {
    ico: '💳',
    title: 'Sensitive to Costs',
    desc: 'Dr. Slaman accepts a variety of insurance plans and offers CareCredit® financing and in-office payment plans to make dental services available to the widest range of people.',
  },
];

const REVIEWS = [
  {
    initial: 'S',
    name: 'Sandra Kutarnia',
    year: '2019',
    text: 'Dr. Slaman and his staff are so professional and caring. Dr. Slaman made time to fix a chip in a front tooth during a routine exam. He could have asked me to schedule another time to get this done, but instead he took care of this for me during the exam. I appreciated his respect for my time and left feeling, and looking so much better.',
  },
  {
    initial: 'F',
    name: 'Forrest Scott Brinkley',
    year: '2019',
    text: 'Having a former dental assistant for a mother will cause one to have high standards for his or her dentist. Mom would approve. From state-of-the-art equipment and methodology to an impeccably organized and professional office staff, one would have an extremely hard time doing better in Albuquerque — or anywhere else.',
  },
];

const RELATED_SERVICES = [
  { label: 'Porcelain Veneers',    href: '/services/veneers' },
  { label: 'Teeth Whitening',      href: '/services/whitening' },
  { label: 'Gum Contouring',       href: '/services/gum-contouring' },
  { label: 'Smile Makeover',       href: '/services/smile-makeover' },
  { label: 'Dental Crowns',        href: '/services/crowns' },
  { label: 'Cosmetic Dentistry',   href: '/services/cosmetic' },
];

const DR_MEMS = [
  'American Dental Association','American Academy of Implant Dentistry',
  'Academy of General Dentistry','American Academy of Sleep Medicine',
  'American Academy of Cosmetic Dentistry','Spear Faculty Club',
]

/* ─────────────────────────────────────────
   SCROLL REVEAL HOOK
───────────────────────────────────────── */
function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.sr, .sr-left, .sr-right');
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ─────────────────────────────────────────
   DENTAL BONDING PAGE
───────────────────────────────────────── */
export default function DentalBonding() {
  useScrollReveal();

  return (
    <main>


      {/* ══════════════════════════════════
          S1 — HERO / BANNER
      ══════════════════════════════════ */}
      <section className="ab-banner-section">
        <div className="ab-banner-left">
          <p className="ab-banner-eyebrow">Albuquerque, New Mexico</p>
          <h1 className="ab-banner-h1">
            Dental<br /><em>Bonding</em>
          </h1>
          <p className="ab-banner-body">
            Do stains, chips, or gaps in your smile steal all the attention when you talk? Then it's time to consider dental bonding — a simple, affordable procedure that enhances your smile and restores your confidence in a single visit.
          </p>
          <div className="ab-banner-badges">
            {BADGES.map((b) => (
              <span className="ab-banner-badge" key={b.label}>
                <i>{b.ico}</i> {b.label}
              </span>
            ))}
          </div>
          <div className="ab-banner-btns">
            <a href="#contact" className="btn btn-fill">Schedule a Consultation</a>
            <a href="#about-section" className="btn btn-line">Call (505) 226-8598</a>
          </div>
        </div>
        <div className="ab-banner-right">
          <img
            src="/photo-1588776814546-1ffcf47267a5.jpg"
            alt="Dr. Slaman's modern dental practice interior"
            loading="eager"
          />
          <div className="ab-banner-chip">
            <strong>1hr</strong>
            <span>Average Treatment Time In & out in a single visit</span>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          S2 — ADVANTAGES  (3-col cards)
      ══════════════════════════════════ */}
      <section className="db-wrap db-advantages-section">
        <div className="db-advantages-header sr">
          <p className="sec-tag">Why Bonding?</p>
          <h2 className="sec-h">
            Dental Bonding Is a Versatile,<br /><em>Popular Solution</em>
          </h2>
        </div>

        <div className="db-advantages-grid">
          {ADVANTAGES.map((a, i) => (
            <div
              className="db-advantage-card sr"
              key={a.num}
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              <div className="db-advantage-top">
                <span className="db-advantage-num">{a.num}</span>
                <span className="db-advantage-ico">{a.ico}</span>
              </div>
              <h3 className="db-advantage-title">{a.title}</h3>
              <p className="db-advantage-desc">{a.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════
          S3 — BEFORE & AFTER  dark split
      ══════════════════════════════════ */}
      <section className="db-ba-section">
        <div className="db-ba-inner">
          <div className="db-ba-copy sr-left">
            <p className="sec-tag" style={{ color: 'var(--c-sand)' }}>Real Results</p>
            <h2 className="sec-h" style={{ color: '#fff' }}>
              Create a More Beautiful<br />
              <em style={{ color: 'var(--c-sand)' }}>Smile With Dental Bonding</em>
            </h2>
            <p className="sec-body" style={{ color: 'rgba(245,240,232,.58)', marginTop: '.8rem' }}>
              Cosmetic dentist James Slaman in Albuquerque, NM, skillfully applies bonding material to close gaps between teeth and create a more beautiful smile.  
            </p>
            <a href="#db-contact" className="btn btn-fill"
              style={{ marginTop: '.6rem', alignSelf: 'flex-start' }}>
              View Before &amp; After Photos
            </a>
          </div>

          <div className="db-ba-cards sr-right">
            <div className="db-ba-card">
              <div className="db-ba-img">
                <img
                  src="/original-1593553158.jpg"
                  alt="Before dental bonding"
                />
              </div>
              <div className="db-ba-footer">
                <span className="db-ba-badge">Before</span>
                <p>Chipped &amp; discolored teeth with visible gaps</p>
              </div>
            </div>
            <div className="db-ba-card">
              <div className="db-ba-img">
                <img
                  src="/original-1593553188.jpg"
                  alt="After dental bonding"
                />
              </div>
              <div className="db-ba-footer">
                <span className="db-ba-badge db-ba-badge--after">After</span>
                <p>Smooth, uniform smile with seamless color match</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          S4 — WHAT PROBLEMS IT SOLVES
             split: copy left | list right
      ══════════════════════════════════ */}
      <section className="db-problems-section">
        <div className="db-problems-copy sr-left">
          <p className="sec-tag">Versatility</p>
          <h2 className="sec-h">
            What Problems Can<br /><em>Dental Bonding Solve?</em>
          </h2>
          <p className="sec-body" style={{ marginTop: '.8rem' }}>
            Dental bonding is a simple cosmetic dentistry procedure in which a tooth-colored
            resin is applied to your tooth. It is shaped and then hardened with a special light.
            This step "bonds" the material to the tooth.
          </p>
          <p className="sec-body">
            Because composite resin is so easily molded, Dr. Slaman uses it in a variety of
            situations to mask imperfections and improve your smile. Bonding can address an
            impressive range of concerns in a single, comfortable visit.
          </p>
          <a href="#db-contact" className="btn btn-fill" style={{ marginTop: '1.2rem' }}>
            Schedule a Consultation
          </a>
        </div>

        <div className="db-problems-list sr-right">
          <div className="db-problems-list-inner">
            <div className="db-problems-label">Bonding Can Treat:</div>
            <ul>
              {PROBLEMS_SOLVED.map((p, i) => (
                <li key={i} className="db-problem-item">
                  <span className="db-problem-dot" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          S5 — VIDEO  (about dental bonding)
      ══════════════════════════════════ */}
      <section className="db-video-section">
        <div className="db-video-header sr">
          <p className="sec-tag">About Dental Bonding</p>
          <h2 className="sec-h">
            Hear It From<br /><em>Dr. Slaman Himself</em>
          </h2>
        </div>

        <div className="db-video-layout">
          <div className="db-video-wrap sr-left">
            <div className="db-video-frame">
              <video
                controls
                poster="/bonding.jpg"
              >
                <source
                  src="/Dental_Bonding_1646341974.mp4"
                  type="video/mp4"
                />
                Your browser does not support video.
              </video>
            </div>
            <div className="db-video-deco">
              <strong>30+</strong>
              <span>Years of Excellence</span>
            </div>
          </div>

          <div className="db-video-copy sr-right">
            <p className="sec-body">
              In this video, Dr. James Slaman discusses dental bonding. This material can be
              used to address a variety of dental needs, from filling cavities to cosmetic
              enhancement. The dental bonding process is much simpler than it was in the past.
            </p>
            <p className="sec-body">
              Dr. Slaman walks you through the entire process so you know exactly what to
              expect before, during, and after your treatment — because an informed patient
              is a confident patient.
            </p>
            <a
              href="https://www.drslaman.com/video/61109-about-dental-bonding/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="db-video-link"
            >
              Visit Our Video Gallery <span>→</span>
            </a>
            <a href="#db-contact" className="btn btn-fill" style={{ marginTop: '.6rem' }}>
              Book Your Visit →
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          S6 — DR. QUALITIES  (why choose)
      ══════════════════════════════════ */}
      <section className="db-dr-section">
        <div className="db-dr-inner">
          <div className="db-dr-photo sr-left">
            <img
              src="/download-main.png"
              alt="Dr. James Slaman"
            />
            <div className="db-dr-photo-overlay" />
            <div className="db-dr-photo-badge">
              <strong>Dr. James Slaman</strong>
              <span>DDS, PC · Albuquerque, NM</span>
            </div>
          </div>

          <div className="db-dr-copy sr-right">
            <p className="sec-tag" style={{ color: 'var(--c-sand)' }}>Your Cosmetic Dentist</p>
            <h2 className="sec-h" style={{ color: '#fff' }}>
              Put Your Smile in the<br />
              <em style={{ color: 'var(--c-sand)' }}>Hands of a Cosmetic Dentist</em>
            </h2>
            <p className="sec-body" style={{ color: 'rgba(245,240,232,.58)', marginTop: '.6rem' }}>
              People aspiring to a more beautiful smile should look to a cosmetic dentist who
              holds himself to the highest standards. Dr. Slaman in Albuquerque, NM, is a
              distinguished restorative and cosmetic dentist who has been{' '}
              <strong style={{ color: 'rgba(245,240,232,.8)' }}>
                serving the needs of his hometown for more than two decades.
              </strong>
            </p>

            <div className="db-dr-qualities">
              {DR_QUALITIES.map((q, i) => (
                <div
                  className="db-dr-quality sr"
                  key={q.title}
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  <span className="db-dr-quality-ico">{q.ico}</span>
                  <div>
                    <div className="db-dr-quality-title">{q.title}</div>
                    <p className="db-dr-quality-desc">{q.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="db-dr-cta">
              <p className="db-dr-phone"><a href="tel:5052268598">(505) 226-8598</a></p>
              <a href="#db-contact" className="btn btn-fill">Learn More at a Consultation</a>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          S7 — REVIEWS
      ══════════════════════════════════ */}
      <section className="db-reviews-section">
        <div className="db-reviews-header sr">
          <div>
            <p className="sec-tag">Patient Reviews</p>
            <h2 className="sec-h">
              "Hard to Beat<br /><em>in Albuquerque or Anywhere Else"</em>
            </h2>
          </div>
          <a
            href="https://maps.google.com/maps?cid=13452876912051634118"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-line"
          >
            View All on Google →
          </a>
        </div>

        <div className="db-reviews-grid">
          {REVIEWS.map((r) => (
            <div className="db-review-card sr" key={r.name}>
              <div className="db-review-stars">★★★★★</div>
              <p className="db-review-text">&ldquo;{r.text}&rdquo;</p>
              <div className="db-review-person">
                <div className="db-review-avatar">{r.initial}</div>
                <div>
                  <div className="db-review-name">{r.name}</div>
                  <div className="db-review-year">Albuquerque, NM · {r.year}</div>
                </div>
                <span className="db-review-via">Google</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════
          S8 — TREATMENT PROCESS  (steps)
      ══════════════════════════════════ */}
      <section className="db-process-section">
        <div className="db-process-bg" />
        <div className="db-process-overlay" />

        <div className="db-process-inner">
          <div className="db-process-header sr">
            <p className="sec-tag" style={{ color: 'var(--c-sand)' }}>Step by Step</p>
            <h2 className="sec-h" style={{ color: '#fff' }}>
              The Dental Bonding<br /><em style={{ color: 'var(--c-sand)' }}>Treatment Process</em>
            </h2>
            <p className="sec-body" style={{ color: 'rgba(245,240,232,.55)', marginTop: '.8rem' }}>
              The first step is scheduling a consultation to discuss your goals. During this
              visit, Dr. Slaman will examine your teeth and gums and go over your options.
              The treatment itself is simple, straightforward, and among the easiest and least
              expensive cosmetic dental procedures available.
            </p>
          </div>

          <div className="db-steps">
            {PROCESS_STEPS.map((s, i) => (
              <div
                className="db-step sr"
                key={s.num}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="db-step-num">{s.num}</div>
                <div className="db-step-connector" />
                <div className="db-step-body">
                  <h3 className="db-step-title">{s.title}</h3>
                  <p className="db-step-desc">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="db-process-cta sr">
            <a href="#db-contact" className="btn btn-fill">
              Schedule Your Bonding Appointment
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          S9 — RELATED SERVICES  (dark band)
      ══════════════════════════════════ */}
      <section className="db-related-section">
        <div className="db-related-inner sr">
          <div className="db-related-left">
            <p className="sec-tag" style={{ color: 'var(--c-sand)' }}>Explore More</p>
            <h2 className="sec-h" style={{ color: '#fff' }}>
              Related<br /><em style={{ color: 'var(--c-sand)' }}>Services</em>
            </h2>
            <p className="sec-body" style={{ color: 'rgba(245,240,232,.5)', marginTop: '.8rem' }}>
              Dental bonding is one of many cosmetic treatments Dr. Slaman offers to help
              you achieve your perfect smile.
            </p>
          </div>
          <div className="db-related-links">
            {RELATED_SERVICES.map((s) => (
              <a className="db-related-link" href={s.href} key={s.label}>
                <span className="db-related-link-dot" />
                <span className="db-related-link-label">{s.label}</span>
                <span className="db-related-link-arr">→</span>
              </a>
            ))}
          </div>
        </div>
      </section>


       {/* ══════════════════════════════════
          DR PANEL — ABOUT
      ══════════════════════════════════ */}
      <div className="dr-panel">
        <div className="dr-panel-img">
          <img src="/Dr. James Slaman DDS.png" alt="" />
        </div>
        <div className="dr-panel-body">
          <p className="sec-tag">About the Doctor</p>
          <h2>James Slaman, DDS, PC</h2>
          <p className="spec">Cosmetic &amp; Restorative Dentistry · Albuquerque, NM</p>
          <p>
            <strong>Dr. James Slaman</strong> specializes in{' '}
            <em style={{ color: 'var(--c-terra)' }}>cosmetic dentistry</em> and offers a full selection
            of <strong>general</strong> and <strong>restorative treatments</strong>. Dr. Slaman is a
            member of various professional associations, including:
          </p>
          <div className="dr-mems">
            {DR_MEMS.map((m) => <span className="dr-mem" key={m}>{m}</span>)}
          </div>
          <p className="dr-contact">
            To request an appointment at our <strong>Albuquerque, NM dental office</strong>,{' '}
            <a href="#contact">contact us online</a> or call{' '}
            <a href="tel:5052268598">(505) 226-8598</a>.
          </p>
        </div>
      </div>

      {/* ══════════════════════════════════
          OFFICE — SPLIT
      ══════════════════════════════════ */}
      <section id="office" className="office-split">
        <div className="office-copy">
          <p className="sec-tag">Visit Us</p>
          <h2 className="sec-h">Albuquerque<br /><em>Office</em></h2>
          <div className="o-row">
            <span className="o-ico">📍</span>
            <div>
              <div className="o-lbl">Address</div>
              <div className="o-val">8650 Alameda Blvd NE, Ste 104E<br />Albuquerque, NM 87122</div>
            </div>
          </div>
          <div className="o-row">
            <span className="o-ico">🕐</span>
            <div>
              <div className="o-lbl">Hours</div>
              <div className="o-val">Open Today 7:30 AM – 4:30 PM</div>
            </div>
          </div>
          <div className="o-row">
            <span className="o-ico">📞</span>
            <div>
              <div className="o-lbl">Phone</div>
              <div className="o-val"><a href="tel:5052268598">(505) 226-8598</a></div>
            </div>
          </div>
          <div className="office-btns">
            <a href="#" className="o-btn fill">About Our Office</a>
            <a href="https://maps.google.com/?q=8650+Alameda+Blvd+NE+Albuquerque+NM+87122" target="_blank" rel="noopener noreferrer" className="o-btn ghost">Directions →</a>
            <a href="tel:5052268598" className="o-btn ghost">(505) 226-8598</a>
          </div>
        </div>
        <div className="office-map" />
      </section>

      {/* ══════════════════════════════════
          CONTACT FORM
      ══════════════════════════════════ */}
      <section id="contact" className="contact-wrap">
        <div className="contact-bg" />
        <div className="contact-inner">
          <p className="sec-tag">Reach Out</p>
          <h2 className="sec-h" style={{ color: '#fff' }}>Contact Us<br /><em>Today</em></h2>
          <p className="sec-sub">Our friendly team is ready to answer your questions and help you schedule your visit.</p>
          <form className="c-form" onSubmit={(e) => e.preventDefault()}>
            <div className="c-row">
              <div className="c-field"><label>Name</label><input type="text" placeholder="Your full name" /></div>
              <div className="c-field"><label>Email</label><input type="email" placeholder="your@email.com" /></div>
            </div>
            <div className="c-field"><label>Phone Number</label><input type="tel" placeholder="(505) 000-0000" /></div>
            <div className="c-field">
              <label>Message</label>
              <textarea rows={4} placeholder="Tell us about your smile goals or any questions you have…" />
            </div>
            <button className="c-submit" type="submit">Send Message →</button>
          </form>
        </div>
      </section>

      {/* ══════════════════════════════════
          RATE BAR
      ══════════════════════════════════ */}
      <section className="rate-bar">
        <h3>Rate, Review &amp; Explore</h3>
        <div className="rate-icons">
          <a href="#" className="rate-ico" title="Google Reviews">G</a>
          <a href="#" className="rate-ico" title="Yelp">Y</a>
          <a href="#" className="rate-ico" title="Healthgrades">HG</a>
        </div>
      </section>


    </main>
  );
}