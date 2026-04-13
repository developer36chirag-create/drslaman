import React, { useEffect } from 'react';
import './Dentalimplants.css';
import Ratebar from "../components/Ratebar";
import Contactform from "../components/Contactform";
import Officesection from "../components/Officesection";
import Doctorpanel from "../components/Doctorpanel";

/* ─────────────────────────────────────────
   IMAGE MAP — every section UNIQUE, never repeated
   S1  HERO             → mature man confident smile
   S2  WHAT ARE         → titanium implant model / anatomy
   S3  TOP 3 ADVANTAGES → full-bleed outdoor confident person
   S4  VIDEO            → dental chair consultation
   S5  ORAL HEALTH      → jaw bone structure / anatomy
   S6  BONE RECESSION   → before/after facial structure
   S7  RESTORATION TYPES→ each card has own image
       Crown            → implant crown close-up
       Bridge           → bridge prosthetic
       Denture          → older woman smiling
   S8  SAME-DAY         → modern clinic / tech
   S9  TECHNOLOGY       → GALILEOS 3D scanner
   S10 WHY DR SLAMAN    → Dr portrait / award
   S11 REVIEWS SET 1    → card section
   S12 COST             → financial planning
   S13 CANDIDACY        → consultation examination
   S14 TIMELINE BG      → surgical / lab tools
   S15 COMFORTABLE      → warm inviting office
   S16 ALL-ON-4         → implant-supported dentures
   S17 REVIEWS SET 2    → card section
   S18 DR PANEL         → professional headshot
─────────────────────────────────────────── */


const BADGES = [
  { ico: '★', label: '95% Success Rate' },
  { ico: '✦', label: 'Same-Day Available' },
  { ico: '◈', label: 'Triple Award Winner' },
  { ico: '◈', label: '3D GALILEOS® Imaging' },
];


const HERO_CHIPS = [
  { ico: '🔩', label: '95% Success Rate' },
  { ico: '⚡', label: 'Same-Day Available' },
  { ico: '🏆', label: 'Triple Award Winner' },
  { ico: '🔬', label: '3D GALILEOS® Imaging' },
];

const ADVANTAGES = [
  {
    num: '01',
    title: 'Superior Stability',
    desc: 'Unlike traditional restorations that rest on top of the gums, titanium dental implants fuse to your jawbone and hold restorations in place so they function just like natural teeth. With dental implants, you won\'t ever worry about your dentures shifting out of place.',
  },
  {
    num: '02',
    title: 'Lasting Results',
    desc: 'Although your restorations may eventually need to be replaced, your implants can last the rest of your life with proper care. Meanwhile, implants stop the loss of bone tissue in the jaw that otherwise follows tooth loss. Implants are truly a long-term solution.',
  },
  {
    num: '03',
    title: 'Better Confidence',
    desc: 'Implant-supported restorations look virtually indistinguishable from natural teeth, giving you the confidence to show off your smile, laugh out loud, and make a good first impression — every single day.',
  },
];

const ORAL_HEALTH_BENEFITS = [
  {
    img: "/dental-implant-icon.png", title: 'Protect Your Jawbone',
    desc: 'Traditional dental crowns, bridges, and dentures only replace the visible part of the tooth. Without a tooth root, the jaw will begin to atrophy. Dental implants act as prosthetic tooth roots, providing the stimulation necessary to prevent bone recession.',
  },
  {
    img: "/user.png", title: 'Maintain a Youthful Appearance',
    desc: 'Patients who have been missing teeth for a long time may develop a sunken, aged facial appearance. Dental implants can help you retain a healthy-looking facial structure for years to come.',
  },
  {
    img: "/insurance-icon.png", title: 'Prevent Oral Health Issues',
    desc: 'Dental implants can correct your occlusion and prevent temporomandibular joint (TMJ) disorder and the loss of other teeth — keeping your entire oral ecosystem healthy and intact.',
  },
];

const RESTORATION_TYPES = [
  {
    title: 'Crown', href: '/services/implant-crown',
    desc: 'If you are missing one tooth as the result of trauma or infection, an implant-supported dental crown can fill the gap in your smile naturally and permanently.',
    img: '/26385.jpg',
  },
  {
    title: 'Bridge', href: '/services/implant-bridge',
    desc: 'Large gaps left behind by two or more consecutive missing teeth can be restored with an implant-supported dental bridge for a stable, permanent result.',
    img: '/6133.jpg',
  },
  {
    title: 'Denture', href: '/services/implant-dentures',
    desc: 'If you are missing an entire dental arch, Dr. Slaman can provide a traditional implant-supported denture or a life-changing All-on-4® denture solution.',
    img: '/2149206258.jpg',
  },
];

const TREATMENT_STEPS = [
  {
    num: '01', title: 'Anesthetic & Sedation',
    desc: 'Local anesthetic is used to minimize any discomfort at the treatment site. Oral conscious sedation might also be used to help patients achieve a deeply relaxed state of near-sleep throughout the procedure.',
  },
  {
    num: '02', title: 'Implant Surgery',
    desc: 'Incisions are placed in the gums and the titanium implants are placed in the jawbone. As you heal over the next four to six months, the implants will fuse to the jaw in a process called osseointegration.',
  },
  {
    num: '03', title: 'Temporary Restoration',
    desc: 'While you are healing, you will wear a temporary restoration. In the meantime, Dr. Slaman will work with our partner lab to craft your permanent, custom restoration.',
  },
  {
    num: '04', title: 'Abutments',
    desc: 'After osseointegration is complete, you will undergo a second minor surgery to place abutments — the connectors between your implant-supported restoration and the titanium implants.',
  },
  {
    num: '05', title: 'Final Placement',
    desc: 'In a few weeks, after your gums have healed, you will be ready for your permanent restoration. Dr. Slaman will check the appearance and fit, make any necessary adjustments, and attach the restoration securely to your abutments.',
  },
];

const CANDIDACY_FACTORS = [
  { img: "/skull.png", title: 'Bone Density',  desc: 'It is essential that patients have enough bone tissue to support dental implants. If your jaw has started to recede, a bone graft can often restore your candidacy.' },
  { img: "/no-smoking.png", title: 'Smoking',        desc: 'Smoking can interfere with your body\'s ability to heal after surgery, which increases the chance of implant failure. Smokers should quit several months before surgery.' },
  { img: "/health-care.png", title: 'Overall Health', desc: 'Issues with your oral and overall health, such as gum disease or uncontrolled diabetes, can impact the success of your implants. Dr. Slaman will review your medical history during your consultation.' },
];

const REVIEWS_1 = [
  { initial: 'R', name: 'Randy Powers',   year: '2023', text: 'My dentist for years. Always has a great staff, and does a great job.' },
  { initial: 'D', name: 'Diana Manning',  year: '2023', text: 'Incredible staff and Dr Slaman takes every step possible to save my teeth. I so appreciate this team.' },
  { initial: 'C', name: 'Carlos Ortiz',   year: '2023', text: 'Dr. Slaman and his staff are top notch. I have recommended him to coworkers and will continue to do so.' },
  { initial: 'J', name: 'Jack M',         year: '2023', text: 'You are not going to find a better dentist anywhere in Albuquerque. Dr. Slaman is extremely talented! He\'s also very proactive and vested in his patients dental health. I recommend him 100%.' },
];

const REVIEWS_2 = [
  {
    initial: 'J', name: 'Jeff Schaefer', year: '2023',
    text: 'Team Slaman can not be beat. Friendly, kind, and always professional. Dr Slaman is a Craftsman!! Team Slaman is the best in Albuquerque!!! Nuff said',
  },
  {
    initial: 'I', name: 'Irw Shea', year: '2023',
    text: 'I had a fantastic experience at Dr. James Slaman DDS, PC office! The staff was incredibly friendly and welcoming. The procedure was virtually painless, and their attention to detail was impressive. I left with the confidence that I\'m in good hands for my dental care.',
  },
];

const RELATED = [
  { label: 'Implant-Supported Crowns',   href: '/services/implant-crown' },
  { label: 'Implant-Supported Bridges',  href: '/services/implant-bridge' },
  { label: 'Implant-Supported Dentures', href: '/services/implant-dentures' },
  { label: 'Bone Grafting',             href: '/services/bone-grafting' },
  { label: 'Dental Crowns',             href: '/services/dental-crowns' },
  { label: 'Restorative Dentistry',     href: '/services/restorative' },
];

const DR_MEMS = [
  'American Dental Association', 'Academy of General Dentistry',
  'American Academy of Cosmetic Dentistry', 'American Academy of Implant Dentistry',
  'American Academy of Sleep Medicine', 'Spear Faculty Club',
];

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

function ReviewCard({ r }) {
  return (
    <div className="dimplant-review-card sr" key={r.name}>
      <div className="dimplant-review-stars">★★★★★</div>
      <p className="dimplant-review-text">&ldquo;{r.text}&rdquo;</p>
      <div className="dimplant-review-person">
        <div className="dimplant-review-avatar">{r.initial}</div>
        <div>
          <div className="dimplant-review-name">{r.name}</div>
          <div className="dimplant-review-year">Albuquerque, NM · {r.year}</div>
        </div>
        <span className="dimplant-review-via">Google</span>
      </div>
    </div>
  );
}

export default function DentalImplants() {
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
            Dental<br /><em>Implants</em>
          </h1>
          <p className="ab-banner-body">
            Tooth loss can seriously affect your smile, making important functions like eating, speaking, and smiling difficult. Fortunately, Dr. James Slaman in Albuquerque, NM, coordinates dental implant treatment — the single best tooth replacement solution.
          </p>
          <div className="ab-banner-badges">
            {BADGES.map((b) => (
              <span className="ab-banner-badge" key={b.label}>
                <i>{b.ico}</i> {b.label}
              </span>
            ))}
          </div>
          <div className="ab-banner-btns">
            <a href="#contact" className="btn btn-fill">Request a Consultation</a>
            <a href="#about-section" className="btn btn-line">Call (505) 226-8598</a>
          </div>
        </div>
        <div className="ab-banner-right">
          <img
            src="/74153.jpg"
            alt="Dr. Slaman's modern dental practice interior"
            loading="eager"
          />
        </div>
      </section>



      {/* ══════════════════════════════════
          S2 — WHAT ARE DENTAL IMPLANTS  (split)
          UNIQUE: titanium implant model
      ══════════════════════════════════ */}
      <section className="dimplant-what-section">
        <div className="dimplant-what-photo sr-left">
          <img
            src="/dental-implants.avif"
            alt="Titanium dental implant model"
          />
          <div className="dimplant-what-overlay" />
          <div className="dimplant-what-badge">
            <strong>Three Components</strong>
            <span>Implant · Abutment · Restoration</span>
          </div>
        </div>

        <div className="dimplant-what-copy sr-right">
          <p className="sec-tag">The Gold Standard</p>
          <h2 className="sec-h">
            What Exactly Are<br /><em>Dental Implants?</em>
          </h2>
          <p className="sec-body">
            Dental implants are a time-tested solution for replacing missing teeth. They
            provide the highest level of stability and support of any dental restoration.
            The implant itself is an artificial titanium tooth root that is surgically
            inserted into the jawbone.
          </p>
          <p className="sec-body">
            This root is then topped by your choice of a crown, bridge, or dentures.
            Replacing a tooth using this solution involves three components: implants,
            abutments, and restorations — replacing the entire tooth from root to crown.
          </p>

          <div className="dimplant-what-stats">
            <div className="dimplant-what-stat-item">
              <span className="dimplant-what-stat-num">3M</span>
              <span className="dimplant-what-stat-lbl">Americans currently have implants</span>
            </div>
            <div className="dimplant-what-stat-item">
              <span className="dimplant-what-stat-num">+500K</span>
              <span className="dimplant-what-stat-lbl">New implants placed each year</span>
            </div>
          </div>

          <a href="#dimplant-contact" className="btn btn-fill" style={{ marginTop: '1.2rem' }}>
            Schedule a Consultation
          </a>
        </div>
      </section>

      {/* ══════════════════════════════════
          S3 — TOP 3 ADVANTAGES  (dark full-bleed)
          UNIQUE: outdoor confident man smiling
      ══════════════════════════════════ */}
      <section className="dimplant-advantages-section">
        <div className="dimplant-advantages-bg" />
        <div className="dimplant-advantages-overlay" />
        <div className="dimplant-advantages-inner">
          <div className="dimplant-advantages-header sr">
            <p className="sec-tag" style={{ color: 'var(--c-sand)' }}>Why Implants?</p>
            <h2 className="sec-h" style={{ color: '#fff' }}>
              The Top 3 Advantages<br /><em style={{ color: 'var(--c-sand)' }}>of Dental Implants</em>
            </h2>
          </div>
          <div className="dimplant-advantages-grid">
            {ADVANTAGES.map((a, i) => (
              <div className="dimplant-advantage-card sr" key={a.num} style={{ transitionDelay: `${i * 0.14}s` }}>
                <div className="dimplant-advantage-top">
                  <span className="dimplant-advantage-num">{a.num}</span>
                </div>
                <h3 className="dimplant-advantage-title">{a.title}</h3>
                <p className="dimplant-advantage-desc">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          S4 — VIDEO + CTA
          UNIQUE: dental chair poster
      ══════════════════════════════════ */}
      <section className="dimplant-wrap dimplant-video-section">
        <div className="dimplant-video-header sr">
          <p className="sec-tag">From the Doctor</p>
          <h2 className="sec-h">
            Dr. Slaman Discusses<br /><em>the Basics of Dental Implants</em>
          </h2>
        </div>
        <div className="dimplant-video-layout">
          <div className="dimplant-video-wrap sr-left">
            <div className="dimplant-video-frame">
              <video controls
                poster="/dental_implants.jpg">
                <source
                  src="/Dental_Implants_1646342092.mp4"
                  type="video/mp4"
                />
                Your browser does not support video.
              </video>
            </div>
            <div className="dimplant-video-deco">
              <strong>25+</strong>
              <span>Years Serving ABQ</span>
            </div>
          </div>
          <div className="dimplant-video-copy sr-right">
            <p className="sec-body">
              Replacing a tooth using this solution involves three components: implants,
              abutments, and restorations. Implant-supported restorations are the most
              stable solution for missing teeth because they replace the entire tooth
              from root to crown.
            </p>
            <p className="sec-body">
              For the right candidates, dental implants are the very best teeth
              replacement solution, providing excellent support and aesthetics that
              are virtually indistinguishable from natural teeth.
            </p>
            <blockquote className="dimplant-pullquote">
              <p>If you are struggling with missing teeth, know you are not alone. The average 50-year-old American has lost 12 teeth.</p>
            </blockquote>
            <a href="https://www.drslaman.com/video/61107-dental-implant-candidacy-placement-recovery/index.html"
              target="_blank" rel="noopener noreferrer"
              className="dimplant-video-link">
              Visit Our Video Gallery <span>→</span>
            </a>
            <a href="#dimplant-contact" className="btn btn-fill" style={{ marginTop: '.6rem' }}>
              Write to Our Albuquerque Team →
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          S5 — REVIEWS SET 1
      ══════════════════════════════════ */}
      <section className="dimplant-reviews-section">
        <div className="dimplant-reviews-header sr">
          <div className='dimplant-reviews-header-content-box'>
            <p className="sec-tag">Patient Reviews</p>
            <h2 className="sec-h">
              "Incredible" &amp; Other Thoughts<br /><em>From Our Patients</em>
            </h2>
          </div>
          <a href="https://maps.google.com/maps?cid=13452876912051634118"
            target="_blank" rel="noopener noreferrer"
            className="btn btn-line">
            View All on Google →
          </a>
        </div>
        <div className="dimplant-reviews-grid">
          {REVIEWS_1.map((r) => <ReviewCard key={r.name} r={r} />)}
        </div>
      </section>

      {/* ══════════════════════════════════
          S6 — ORAL HEALTH BENEFITS  (split)
          UNIQUE: jaw bone anatomy
      ══════════════════════════════════ */}
      <section className="dimplant-health-section">
        <div className="dimplant-health-copy sr-left">
          <p className="sec-tag">Long-Term Health</p>
          <h2 className="sec-h">
            Implants Help You<br /><em>Protect Your Oral Health</em>
          </h2>
          <p className="sec-body" >
            Did you know tooth loss can cause serious oral health problems? Many patients
            hesitate at the thought of dental implants when nonsurgical alternatives are
            available. However, you must consider the important long-term health benefits
            that come with implant treatment:
          </p>
          <div className="dimplant-health-cards">
            {ORAL_HEALTH_BENEFITS.map((b, i) => (
              <div className="dimplant-health-card sr" key={b.title} style={{ transitionDelay: `${i * 0.1}s` }}>
                <span className="dimplant-health-ico">
                    <img src={b.img} alt={b.title} />
                </span>
                <div>
                  <div className="dimplant-health-title">{b.title}</div>
                  <p className="dimplant-health-desc">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="dimplant-health-photo sr-right">
          <img
            src="/illustrating-dental-implant.avif"
            alt="Jaw bone health and anatomy"
          />
          <div className="dimplant-health-overlay" />
          <div className="dimplant-health-stat">
            <span className="dimplant-health-stat-num">1</span>
            <span className="dimplant-health-stat-lbl">Only Solution Proven<br />to Stop Bone Loss</span>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          S7 — BONE RECESSION  (dark)
          UNIQUE: facial structure / side profile
      ══════════════════════════════════ */}
      <section className="dimplant-bone-section">
        <div className="dimplant-bone-photo sr-left">
          <img
            src="/original_DrSlaman.jpg"
            alt="Facial structure preserved with implants"
          />
          <div className="dimplant-bone-overlay" />
        </div>

        <div className="dimplant-bone-copy sr-right">
          <p className="sec-tag" style={{ color: 'var(--c-sand)' }}>Critical Information</p>
          <h2 className="sec-h" style={{ color: '#fff' }}>
            Preventing Bone<br /><em style={{ color: 'var(--c-sand)' }}>Recession Is Critical</em>
          </h2>
          <p className="sec-body" style={{ color: 'rgba(245,240,232,.58)' }}>
            The importance of preventing jawbone recession cannot be stressed enough. When
            you are missing natural teeth, you lose the nourishment and stimulation they
            provide to your jaw health. This leads to shrinking and bone loss.
          </p>

          <div className="dimplant-bone-effects">
            <div className="dimplant-bone-effect">
              <div className="dimplant-bone-effect-header">
                <h3 className="dimplant-bone-effect-title">The Effects of Bone Loss in the Jaw</h3>
              </div>
              <p className="dimplant-bone-effect-desc">
                Over time, these side effects cause drastic changes to your face such as
                wrinkling and sunken-looking cheeks and mouth. Jawbone atrophy endangers
                other teeth and heightens your risk of oral infection, gum disease, and
                even heart disease.
              </p>
            </div>
            <div className="dimplant-bone-effect">
              <div className="dimplant-bone-effect-header">
                <h3 className="dimplant-bone-effect-title">The Only Solution</h3>
              </div>
              <p className="dimplant-bone-effect-desc">
                There is only one restorative dentistry solution that can prevent jawbone
                recession by providing the stimulation your jaw needs — dental implants. By
                receiving implants, you can maintain the appearance of your facial features
                and increase the likelihood of avoiding many critical health conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          S8 — RESTORATION TYPES  (3 cards)
          Each type has its own unique image
      ══════════════════════════════════ */}
      <section className="dimplant-wrap dimplant-types-section">
        <div className="dimplant-types-header sr">
          <p className="sec-tag">Choose Your Restoration</p>
          <h2 className="sec-h">
            Types of Implant-Supported<br /><em>Restorations</em>
          </h2>
          <p className="sec-body" style={{ maxWidth: '52ch' }}>
            Dental implants can support a variety of restorations depending on how many
            teeth you are missing. Dr. Slaman will recommend the best option for your case.
          </p>
        </div>
        <div className="dimplant-types-grid">
          {RESTORATION_TYPES.map((t, i) => (
            <div className="dimplant-type-card sr" key={t.title} style={{ transitionDelay: `${i * 0.12}s` }}>
              <div className="dimplant-type-img">
                <img src={t.img} alt={`Implant-supported ${t.title}`} />
              </div>
              <div className="dimplant-type-body">
                <div className="dimplant-type-top">
                  <span className="dimplant-type-ico">{t.ico}</span>
                  <a href={t.href} className="dimplant-type-link-badge">Explore →</a>
                </div>
                <h3 className="dimplant-type-title">{t.title}</h3>
                <p className="dimplant-type-desc">{t.desc}</p>
                <a href={t.href} className="btn btn-fill" style={{ marginTop: '1rem' }}>
                  Explore Implant {t.title} →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════
          S9 — SAME-DAY IMPLANTS  (split)
          UNIQUE: modern clinic / technology
      ══════════════════════════════════ */}
      <section className="dimplant-sameday-section">
        <div className="dimplant-sameday-photo sr-left">
          <img
            src="/about-banner.png"
            alt="Same-day dental implant technology"
          />
          <div className="dimplant-sameday-overlay" />
          <div className="dimplant-sameday-badge">
            <strong>Same-Day Option</strong>
            <span>Skip the months-long wait for select candidates</span>
          </div>
        </div>

        <div className="dimplant-sameday-copy sr-right">
          <p className="sec-tag">Convenience</p>
          <h2 className="sec-h">
            We Restore Teeth With<br /><em>Same-Day Implants</em>
          </h2>
          <p className="sec-body" >
            Often, Dr. Slaman can place an implant-supported restoration on the same day
            as your implant surgery. Traditionally, placing and restoring dental implants
            is a process that can span more than six months. However, if we find that you
            are a candidate for same-day implants, we can coordinate with area specialists
            to both place your implant and attach a restoration in one day.
          </p>
          <p className="sec-body">
            During your consultation with Dr. Slaman, we will assess your oral health,
            your specific needs, and other factors to determine if you qualify for a
            same-day implant and restoration.
          </p>
          <a href="#dimplant-contact" className="btn btn-fill" style={{ marginTop: '1.2rem' }}>
            Find Out If You Qualify →
          </a>
        </div>
      </section>

      {/* ══════════════════════════════════
          S10 — TECHNOLOGY  (dark split)
          UNIQUE: GALILEOS 3D scanner
      ══════════════════════════════════ */}
      <section className="dimplant-tech-section">
        <div className="dimplant-tech-copy sr-left">
          <p className="sec-tag" style={{ color: 'var(--c-sand)' }}>Precision Planning</p>
          <h2 className="sec-h" style={{ color: '#fff' }}>
            Using the Latest Technology<br /><em style={{ color: 'var(--c-sand)' }}>to Plan Implant Placement</em>
          </h2>
          <p className="sec-body" style={{ color: 'rgba(245,240,232,.58)' }}>
            From the start of your dental implant treatment, we begin planning with the
            utmost care and with the use of high-tech dentistry tools.
          </p>

          <div className="dimplant-tech-items">
            <div className="dimplant-tech-item sr">
              <div>
                <div className="dimplant-tech-item-title">3D Imaging and Diagnostic Scanning</div>
                <p className="dimplant-tech-item-desc">
                  Dr. Slaman uses our advanced GALILEOS® ComfortPLUS cone beam imaging system
                  to capture 3D images of your jaw, providing high-definition images of each
                  tooth, your jaws, and other oral structures for accurate assessment and
                  treatment planning.
                </p>
              </div>
            </div>
            <div className="dimplant-tech-item sr">
              <div>
                <div className="dimplant-tech-item-title">Digital Previews of Treatment Results</div>
                <p className="dimplant-tech-item-desc">
                  Dr. Slaman also provides advanced smile preview technology. This allows
                  patients to see accurate simulations of their smiles after implants and
                  restoration have been placed — helping you make the right choice.
                </p>
              </div>
            </div>
          </div>

          <a href="/dental-technology" className="dimplant-tech-link">
            Read More on Our Technology →
          </a>
        </div>

        <div className="dimplant-tech-photo sr-right">
          <img
            src="/young-dentist-doctor.avif"
            alt="GALILEOS 3D cone beam scanner"
          />
          <div className="dimplant-tech-overlay" />
          <div className="dimplant-tech-badge">
            <strong>GALILEOS® ComfortPLUS</strong>
            <span>Cone beam 3-D imaging for precise treatment planning</span>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          S11 — WHY DR. SLAMAN  (split)
          UNIQUE: Dr portrait / awards
      ══════════════════════════════════ */}
      <section className="dimplant-why-section">
        <div className="dimplant-why-photo sr-left">
          <img
            src="/download-main.png"
            alt="Dr. James Slaman — Award-winning implant dentist"
          />
          <div className="dimplant-why-overlay" />
          <div className="dimplant-why-badge">
            <strong>Dr. James Slaman</strong>
            <span>3× "Top Cosmetic Dentist" — Albuquerque Magazine</span>
          </div>
        </div>

        <div className="dimplant-why-copy sr-right">
          <p className="sec-tag">Your Implant Specialist</p>
          <h2 className="sec-h">
            Why Choose<br /><em>Dr. Slaman?</em>
          </h2>
          <p className="sec-body" >
            Dr. James Slaman has served the Albuquerque, NM, community with exceptional
            dental care since 1992. Dedicated to improving his craft and continuing
            education, Dr. Slaman stays on the cutting edge of his field to help patients
            experience the best possible benefits of dental implants.
          </p>
          <p className="sec-body">
            Dr. Slaman has been recognized time and again for his spectacular dental work.
            He is a <strong>three-time recipient</strong> of Albuquerque The Magazine's
            "Top Cosmetic Dentist" award. His skill and knowledge have made him an
            in-demand dental mentor at Spear Education in Scottsdale, AZ.
          </p>

          <blockquote className="dimplant-why-quote">
            <p>Dr. Slaman's stellar results and comfortable environment inspire loyalty among patients in Albuquerque, NM. In fact, many people in the region are willing to pay out-of-network rates to continue receiving their dental care from him.</p>
          </blockquote>

          <div className="dimplant-why-cta">
            <a href="tel:5052268598" className="dimplant-why-phone">
              <a href="tel:5052268598">(505) 226-8598</a>
            </a>
            <a href="#dimplant-contact" className="btn btn-fill">
              I Want to Talk to Dr. Slaman
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          S12 — COST  (split)
          UNIQUE: financial planning image
      ══════════════════════════════════ */}
      <section className="dimplant-cost-section">
        <div className="dimplant-cost-copy sr-left">
          <p className="sec-tag">Investment</p>
          <h2 className="sec-h">
            What Do Dental<br /><em>Implants Cost?</em>
          </h2>
          <p className="sec-body" >
            The price of dental implants can vary significantly from one patient to the
            next, depending on several factors: the number of implants you need, the type
            of restoration you require, and any treatments that will have to be performed
            prior to receiving your implants.
          </p>
          <p className="sec-body">
            Implants are not covered by insurance, but your restorations and any necessary
            bone grafting might qualify. We offer CareCredit® financing to help you budget
            for any out-of-pocket costs.
          </p>

          <div className="dimplant-cost-roi">
            <div>
              <strong>Are Dental Implants Worth the Money?</strong>
              <p>
                In a 2021 study, nearly 100 dental implant recipients were surveyed a full
                10 years after receiving their implants. Every single one reported a high
                level of satisfaction, with an average general satisfaction rate of 93%.
              </p>
            </div>
          </div>

          <a href="#dimplant-contact" className="btn btn-fill" style={{ marginTop: '1.2rem' }}>
            Get a Cost Estimate →
          </a>
        </div>

        <div className="dimplant-cost-photo sr-right">
          <img
            src="/65670.jpg"
            alt="Dental implant financing and cost"
          />
          <div className="dimplant-cost-overlay" />
          <div className="dimplant-cost-chip">
            <strong>CareCredit® Available</strong>
            <span>Flexible financing for qualified patients</span>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          S13 — CANDIDACY  (3 cards)
          UNIQUE: consultation / examination
      ══════════════════════════════════ */}
      <section className="dimplant-wrap dimplant-candidacy-section">
        <div className="dimplant-candidacy-header sr">
          <div className='dimplant-candidacy-header-content-box'>
            <p className="sec-tag">Are You a Candidate?</p>
            <h2 className="sec-h">
              Am I a Candidate for<br /><em>Dental Implants?</em>
            </h2>
          </div>
        </div>
        <div className="dimplant-candidacy-grid">
          {CANDIDACY_FACTORS.map((c, i) => (
            <div className="dimplant-candidacy-card sr" key={c.title} style={{ transitionDelay: `${i * 0.12}s` }}>
              <div className="dimplant-candidacy-ico">
                <img src={c.img} alt={c.title} />
              </div>
              <h3 className="dimplant-candidacy-title">{c.title}</h3>
              <p className="dimplant-candidacy-desc">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════
          S14 — TREATMENT TIMELINE  (dark)
          UNIQUE: surgical tools bg
      ══════════════════════════════════ */}
      <section className="dimplant-timeline-section">
        <div className="dimplant-timeline-bg" />
        <div className="dimplant-timeline-overlay" />

        <div className="dimplant-timeline-inner">
          <div className="dimplant-timeline-header sr">
            <p className="sec-tag" style={{ color: 'var(--c-sand)' }}>Step by Step</p>
            <h2 className="sec-h" style={{ color: '#fff' }}>
              The Treatment<br /><em style={{ color: 'var(--c-sand)' }}>Timeline</em>
            </h2>
            <p className="sec-body" style={{ color: 'rgba(245,240,232,.55)', maxWidth: '50ch' }}>
              In some cases, Dr. Slaman can place an implant-supported restoration on the
              same day as your implant surgery — but here is the full standard process:
            </p>
          </div>

          <div className="dimplant-steps">
            {TREATMENT_STEPS.map((s, i) => (
              <div className="dimplant-step sr" key={s.num} style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="dimplant-step-num">{s.num}</div>
                <div className="dimplant-step-connector">
                  <div className="dimplant-step-dot" />
                  {i < TREATMENT_STEPS.length - 1 && <div className="dimplant-step-line" />}
                </div>
                <div className="dimplant-step-body">
                  <h3 className="dimplant-step-title">{s.title}</h3>
                  <p className="dimplant-step-desc">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="dimplant-timeline-cta sr">
            <a href="#dimplant-contact" className="btn btn-fill">
              Request a Consultation for Dental Implants →
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          S15 — ALL-ON-4  (split)
          UNIQUE: denture/implant model
      ══════════════════════════════════ */}
      <section className="dimplant-allon4-section">
        <div className="dimplant-allon4-copy sr-left">
          <p className="sec-tag">Skip Preparatory Treatment</p>
          <h2 className="sec-h">
            Consider<br /><em>All-on-4 Implants</em>
          </h2>
          <p className="sec-body" >
            Some patients may require preparatory procedures before they can receive
            implants. If you have already suffered significant jaw recession from tooth
            loss, you may be able to forgo a bone graft thanks to All-on-4 dental implants.
          </p>
          <p className="sec-body">
            Taking this approach, four implants can support a complete denture; they are
            placed at special angles to achieve maximum contact with remaining bone tissue.
            An added advantage is the fact that they can often support a denture
            immediately following placement — a life-changing same-day transformation.
          </p>

          <div className="dimplant-allon4-perks">
            {['No bone graft required for many patients', 'Same-day denture attachment possible', 'Permanent, stable solution', 'Prevents further bone loss'].map((p) => (
              <div className="dimplant-allon4-perk" key={p}>
                <span className="dimplant-allon4-perk-dot" />
                <span>{p}</span>
              </div>
            ))}
          </div>

          <a href="#dimplant-contact" className="btn btn-fill" style={{ marginTop: '1.2rem' }}>
            Ask About All-on-4 Eligibility →
          </a>
        </div>

        <div className="dimplant-allon4-photo sr-right">
          <img
            src="/2151053293.jpg"
            alt="All-on-4 dental implants Albuquerque"
          />
          <div className="dimplant-allon4-overlay" />
          <div className="dimplant-allon4-stat">
            <strong>All-on-4®</strong>
            <span>4 implants · full arch · same-day option</span>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          S16 — REVIEWS SET 2
      ══════════════════════════════════ */}
      <section className="dimplant-reviews-section dimplant-reviews-section--warm">
        <div className="dimplant-reviews-header sr">
          <div className='dimplant-reviews-header-content-box'>
            <p className="sec-tag">More Happy Patients</p>
            <h2 className="sec-h">
              "Team Slaman Is the Best<br /><em>in Albuquerque!!!"</em>
            </h2>
          </div>
          <a href="https://maps.google.com/maps?cid=13452876912051634118"
            target="_blank" rel="noopener noreferrer"
            className="btn btn-line">
            View All on Google →
          </a>
        </div>
        <div className="dimplant-reviews-grid">
          {REVIEWS_2.map((r) => <ReviewCard key={r.name} r={r} />)}
        </div>
      </section>

      {/* ══════════════════════════════════
          S17 — RELATED SERVICES
      ══════════════════════════════════ */}
      <section className="dimplant-related-section">
        <div className="dimplant-related-inner sr">
          <div className="dimplant-related-left">
            <p className="sec-tag" style={{ color: 'var(--c-sand)' }}>Explore More</p>
            <h2 className="sec-h" style={{ color: '#fff' }}>
              Related<br /><em style={{ color: 'var(--c-sand)' }}>Services</em>
            </h2>
            <p className="sec-body" style={{ color: 'rgba(245,240,232,.5)', marginTop: '.8rem', maxWidth: '28ch' }}>
              Dental implants work with a range of restorations and supporting treatments.
            </p>
          </div>
          <div className="dimplant-related-links">
            {RELATED.map((s) => (
              <a className="dimplant-related-link" href={s.href} key={s.label}>
                <span className="dimplant-related-dot" />
                <span className="dimplant-related-label">{s.label}</span>
                <span className="dimplant-related-arr">→</span>
              </a>
            ))}
          </div>
        </div>
      </section>

                  {/* ══════════════════════════════════
          DR PANEL — ABOUT
      ══════════════════════════════════ */}

      <Doctorpanel />



      {/* ══════════════════════════════════
          OFFICE — SPLIT
      ══════════════════════════════════ */}

      <Officesection />



      {/* ══════════════════════════════════
          CONTACT FORM
      ══════════════════════════════════ */}

      <Contactform />


      {/* ══════════════════════════════════
          RATE BAR
      ══════════════════════════════════ */}

      <Ratebar />

    </main>
  );
}