import React, { useEffect } from 'react';
import './Bonegrafting.css';
import Ratebar from "../components/Ratebar";
import Contactform from "../components/Contactform";
import Officesection from "../components/Officesection";
import Doctorpanel from "../components/Doctorpanel";

/* ─────────────────────────────────────────
   IMAGE MAP — unique image per section
   S1  HERO           → jaw / dental X-ray model (dark)
   S2  WHY GRAFT      → confident mature woman profile
   S3  BONE ATROPHY   → anatomical jaw structure
   S4  WHY DR SLAMAN  → modern dental office / cone beam
   S5  TIMELINE BG    → surgical tools / clinical
   S6  HEALING        → nature / regeneration concept
   S7  REVIEWS        → card section (no hero image)
   S8  RESEARCH       → laboratory / science
   S9  DR PANEL       → professional headshot
─────────────────────────────────────────── */


const BADGES = [
  { ico: '★', label: 'GALILEOS® Cone Beam' },
  { ico: '✦', label: 'Sedation Available' },
  { ico: '◈', label: 'All Under One Roof' },
    { ico: '◈', label: '98% Success Rate*' },
];

const WHY_GRAFT = [
  {
    num: '01',
    title: 'Strengthen Your Jaw',
    desc: 'When your jawbone deteriorates due to tooth loss, it can compromise the health of remaining teeth and cause other issues. A bone graft restores the strength and health of the jaw, providing a solid foundation for your oral health.',
  },
  {
    num: '02',
    title: 'Preserve Your Appearance',
    desc: 'Jawbone deterioration can result in a sunken, soft appearance that makes you look aged and unhealthy. Bone graft surgery keeps your jawline looking full and youthful by maintaining the natural volume of your face.',
  },
  {
    num: '03',
    title: 'Qualify for Implants',
    desc: 'A lack of sufficient bone density initially disqualifies many patients from dental implant surgery. Bone grafting restores tissue so your jaw can support implants — giving you access to the best tooth replacement option available.',
  },
];

const PROCEDURE_STEPS = [
  {
    num: '01',
    title: 'Sedation & Anesthesia',
    desc: 'Sedation will be administered for your comfort, and local anesthesia will be used to numb the treatment area. Dr. Slaman\'s priority is ensuring you feel nothing but relaxed throughout the entire procedure.',
  },
  {
    num: '02',
    title: 'Incision',
    desc: 'A small incision is created in the gums so the underlying bone ridge can be accessed. Dr. Slaman uses meticulous surgical technique to minimize trauma and promote faster healing.',
  },
  {
    num: '03',
    title: 'Graft Placement',
    desc: 'Bone graft material will be added to the deficient area. The graft may be obtained from another part of the jaw (autogenous) or purchased from a bone and tissue bank (non-autogenous) — Dr. Slaman will recommend the best option for your case.',
  },
  {
    num: '04',
    title: 'Sutures & Closure',
    desc: 'Your incision will be closed with stitches. Dr. Slaman and his team will provide detailed aftercare instructions and schedule follow-up visits to monitor your healing and bone regeneration progress.',
  },
];

const WHY_CHOOSE = [
  {
    img: "/target.png",
    title: 'Passion & Expertise',
    desc: "Dentistry is more than just a job to Dr. Slaman — it is his passion. Patients who choose our practice in Albuquerque, NM, can feel confident they are receiving the highest quality of care possible.",
  },
  {
    img: "/graduate-hat.png",
    title: 'Continuing Education',
    desc: 'Because methods and technologies are constantly evolving, Dr. Slaman is dedicated to attending courses in continuing education. This allows him to stay up-to-date on the latest bone graft innovations and offer the most accurate, predictable care.',
  },
  {
    img: "/hospital.png",
    title: 'All Under One Roof',
    desc: 'We understand the importance of convenience. Depending on the complexity of your case, you may be eligible to complete bone grafting, implant surgery, and placement of final restorations all in one single location.',
  },
  {
    img: "/microscope.png",
    title: 'GALILEOS® Cone Beam',
    desc: "Dr. Slaman uses the GALILEOS® ComfortPLUS cone beam scanner to assess the quality and density of your jawbone with incredible 3-D precision — ensuring accurate treatment planning and predictable outcomes.",
  },
];

const REVIEWS = [
  {
    initial: 'T', name: 'Triesch Voelker', year: '2020',
    text: "Dr. Slaman and his staff are incredibly thorough and does an amazingly detailed job. Very happy with how I was treated and his office is very nice.",
  },
  {
    initial: 'M', name: 'Melanie Bennett', year: '2020',
    text: "This is the first time in 50 years that I love going to the dentist. Dr. Slaman is so caring. His associates all professional and fun. Always have great results.",
  },
];

const RELATED = [
  { label: 'Dental Implants',          href: '/services/dental-implants' },
  { label: 'Restorative Dentistry',    href: '/services/restorative' },
  { label: 'Dental Crowns',            href: '/services/dental-crowns' },
  { label: 'Full Mouth Reconstruction',href: '/services/full-mouth-reconstruction' },
  { label: 'Dentures',                 href: '/services/dentures' },
  { label: 'Dental Bridges',           href: '/services/dental-bridges' },
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

export default function BoneGrafting() {
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
            Bone<br /><em>Grafting</em>
          </h1>
          <p className="ab-banner-body">
            Dental implants are usually the best option for tooth replacement. However, some patients do not qualify due to bone deterioration. Dr. James Slaman in Albuquerque, NM, can perform or coordinate bone grafting to help patients with bone deterioration qualify for implants.
          </p>
          <div className="ab-banner-badges">
            {BADGES.map((b) => (
              <span className="ab-banner-badge" key={b.label}>
                <i>{b.ico}</i> {b.label}
              </span>
            ))}
          </div>
          <div className="ab-banner-btns">
            <a href="#contact" className="btn btn-fill">Request a Bone Graft Consultation</a>
            <a href="#about-section" className="btn btn-line">Call (505) 226-8598</a>
          </div>
        </div>
        <div className="ab-banner-right">
          <img
            src="/3124.jpg"
            alt="Dr. Slaman's modern dental practice interior"
            loading="eager"
          />
          <div className="ab-banner-chip">
            <strong>Did You Know?</strong>
            <span>In some cases, patients may lose as much as
25%
of their bone height within the first year of losing a tooth.</span>
          </div>
        </div>
      </section>


        


      {/* ══════════════════════════════════
          S2 — WHY UNDERGO A BONE GRAFT
          UNIQUE: confident mature woman profile
      ══════════════════════════════════ */}
      <section className="bg-wrap bg-why-section">
        <div className="bg-why-header sr">
          <p className="sec-tag">Why It Matters</p>
          <h2 className="sec-h">
            Why Undergo a<br /><em>Bone Graft?</em>
          </h2>
        </div>

        <div className="bg-why-layout">
          <div className="bg-why-cards">
            {WHY_GRAFT.map((w, i) => (
              <div className="bg-why-card sr" key={w.num} style={{ transitionDelay: `${i * 0.12}s` }}>
                <div className="bg-why-card-top">
                  <span className="bg-why-card-num">{w.num}</span>
                </div>
                <h3 className="bg-why-card-title">{w.title}</h3>
                <p className="bg-why-card-desc">{w.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-why-photo sr-right">
            <img
              src="/download-main.png"
              alt="Patient confident after bone graft procedure"
            />
            <div className="bg-why-photo-overlay" />
            <div className="bg-why-stat">
              <span className="bg-why-stat-num">4–6</span>
              <span className="bg-why-stat-lbl">Months<br />Healing Time</span>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          S3 — BONE ATROPHY  (dark split)
          UNIQUE: anatomical jaw structure
      ══════════════════════════════════ */}
      <section className="bg-atrophy-section">
        <div className="bg-atrophy-photo sr-left">
          <img
            src="/66909.jpg"
            alt="Jaw bone anatomy and structure"
          />
          <div className="bg-atrophy-overlay" />
          <div className="bg-atrophy-badge">
            <strong>Bone Atrophy</strong>
            <span>Begins immediately after tooth loss</span>
          </div>
        </div>

        <div className="bg-atrophy-copy sr-right">
          <p className="sec-tag" style={{ color: 'var(--c-sand)' }}>Understanding the Problem</p>
          <h2 className="sec-h" style={{ color: '#fff' }}>
            Tooth Loss Leads<br />
            <em style={{ color: 'var(--c-sand)' }}>to Bone Atrophy</em>
          </h2>

          <p className="sec-body" style={{ color: 'rgba(245,240,232,.58)' }}>
            When natural tooth roots are present, they actively stimulate nerves within
            the jaw, keeping the bone dense and healthy. Once the tooth is gone, there is
            no stimulation. As a result, the bone tissue slowly deteriorates.
          </p>

          <blockquote className="bg-atrophy-quote">
            <p>
              In some cases, patients may lose as much as 25 percent of their bone height
              within the first year of losing a tooth.
            </p>
          </blockquote>

          <p className="sec-body" style={{ color: 'rgba(245,240,232,.58)' }}>
            Inadequate density makes it difficult to predictably place a dental implant
            because the implant post must be completely embedded into strong, healthy bone
            tissue for adequate support. A dental bone grafting procedure (also known as a
            "sinus lift" when performed near the sinuses on the upper jaw) can restore your
            eligibility for implant treatment.
          </p>

          <a href="#bg-contact" className="btn btn-fill" style={{ alignSelf: 'flex-start', marginTop: '.6rem' }}>
            Talk to Dr. Slaman →
          </a>
        </div>
      </section>

      {/* ══════════════════════════════════
          S4 — WHY CHOOSE DR. SLAMAN
          UNIQUE: modern office / cone beam
      ══════════════════════════════════ */}
      <section className="bg-wrap bg-choose-section">
        <div className="bg-choose-header sr">
          <div className='bg-choose-header-content-box'>
            <p className="sec-tag">Your Specialist</p>
            <h2 className="sec-h">
              Why Choose Dr. James Slaman<br /><em>for Bone Grafting?</em>
            </h2>
          </div>
        </div>

        <div className="bg-choose-grid">
          {WHY_CHOOSE.map((w, i) => (
            <div className="bg-choose-card sr" key={w.title} style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="bg-choose-ico">
                <img src={w.img} alt={w.title} />
              </div>
              <h3 className="bg-choose-title">{w.title}</h3>
              <p className="bg-choose-desc">{w.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-choose-note sr">
          <div className="bg-choose-note-ico">
            <img src="/premium-badge.png" alt="" />
          </div>
          <div>
            <strong>Member: New Mexico Implant Study Club</strong>
            <p>
              Dr. Slaman has extensive knowledge regarding dental implants and preparation
              surgery and is a proud member of the New Mexico Implant Study Club — staying
              at the forefront of implant care for Albuquerque patients.
            </p>
          </div>
        </div>

        <div className="bg-choose-cta sr">
          <a href="#bg-contact" className="btn btn-fill">
            Request a Bone Graft Consultation
          </a>
        </div>
      </section>

      {/* ══════════════════════════════════
          S5 — TREATMENT TIMELINE  (dark)
          UNIQUE: surgical tools / clinical
      ══════════════════════════════════ */}
      <section className="bg-timeline-section">
        <div className="bg-timeline-bg" />
        <div className="bg-timeline-overlay" />

        <div className="bg-timeline-inner">
          <div className="bg-timeline-header sr">
            <p className="sec-tag" style={{ color: 'var(--c-sand)' }}>Step by Step</p>
            <h2 className="sec-h" style={{ color: '#fff' }}>
              Timeline of the<br /><em style={{ color: 'var(--c-sand)' }}>Bone Grafting Process</em>
            </h2>
            <p className="sec-body" style={{ color: 'rgba(245,240,232,.55)', marginTop: '.8rem', maxWidth: '52ch' }}>
              When you inquire about implants at our comfortable office in Albuquerque, NM,
              Dr. Slaman will use our GALILEOS® ComfortPLUS cone beam scanner to assess the
              quality and density of your jawbone. If he determines that you lack sufficient
              tissue to support implants, he will likely recommend a bone graft.
            </p>
          </div>

          <div className="bg-steps">
            {PROCEDURE_STEPS.map((s, i) => (
              <div className="bg-step sr" key={s.num} style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="bg-step-num">{s.num}</div>
                <div className="bg-step-connector">
                  <div className="bg-step-dot" />
                  {i < PROCEDURE_STEPS.length - 1 && <div className="bg-step-line" />}
                </div>
                <div className="bg-step-body">
                  <h3 className="bg-step-title">{s.title}</h3>
                  <p className="bg-step-desc">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-timeline-cta sr">
            <a href="#bg-contact" className="btn btn-fill">
              Ask About Your Eligibility →
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          S6 — HEALING & RECOVERY  (split)
          UNIQUE: nature/regeneration concept
      ══════════════════════════════════ */}
      <section className="bg-healing-section">
        <div className="bg-healing-photo sr-left">
          <img
            src="/download-main.png"
            alt="Healing and recovery process"
          />
          <div className="bg-healing-overlay" />
          <div className="bg-healing-stat">
            <span className="bg-healing-stat-num">4–6</span>
            <span className="bg-healing-stat-lbl">Months for Full Bone Integration</span>
          </div>
        </div>

        <div className="bg-healing-copy sr-right">
          <p className="sec-tag">Recovery</p>
          <h2 className="sec-h">
            Healing, Recovery &amp;<br /><em>New Bone Generation</em>
          </h2>
          <p className="sec-body" style={{ marginTop: '.8rem' }}>
            In most cases, approximately four to six months of healing is required following
            a bone graft procedure. During this time, the graft will serve as a matrix while
            your body regenerates bone tissue.
          </p>
          <p className="sec-body">
            It is important to avoid smoking during the healing phase, since tobacco products
            can seriously hinder the success of your treatment as well as the placement of
            dental implants.
          </p>

          <div className="bg-healing-tips">
            <div className="bg-healing-tip">
              <span className="bg-healing-tip-ico">
                <img src="/no-smoking.png" alt="" />
              </span>
              <div>
                <strong>Avoid Tobacco</strong>
                <p>Smoking or tobacco use significantly slows healing and can compromise graft success.</p>
              </div>
            </div>
            <div className="bg-healing-tip">
              <span className="bg-healing-tip-ico">
                <img src="/capsules.png" alt="" />
              </span>
              <div>
                <strong>Follow Instructions</strong>
                <p>Take prescribed medications and follow all post-operative care instructions provided by Dr. Slaman.</p>
              </div>
            </div>
            <div className="bg-healing-tip">
              <span className="bg-healing-tip-ico">
                <img src="/calendar.png" alt="" />
              </span>
              <div>
                <strong>Attend Follow-Ups</strong>
                <p>Regular check-ins allow Dr. Slaman to monitor bone regeneration and plan your implant timeline.</p>
              </div>
            </div>
          </div>

          <a href="#bg-contact" className="btn btn-fill" style={{ marginTop: '1.2rem' }}>
            Discuss Recovery With Dr. Slaman
          </a>
        </div>
      </section>

      {/* ══════════════════════════════════
          S7 — REVIEWS
      ══════════════════════════════════ */}
      <section className="bg-reviews-section">
        <div className="bg-reviews-header sr">
          <div className='bg-reviews-header-content-box'>
            <p className="sec-tag">5-Star Reviews</p>
            <h2 className="sec-h">
              Happy Patients Share<br /><em>Their Experiences</em>
            </h2>
          </div>
          <a href="https://maps.google.com/maps?cid=13452876912051634118"
            target="_blank" rel="noopener noreferrer"
            className="btn btn-line">
            View All on Google →
          </a>
        </div>
        <div className="bg-reviews-grid">
          {REVIEWS.map((r) => (
            <div className="bg-review-card sr" key={r.name}>
              <div className="bg-review-stars">★★★★★</div>
              <p className="bg-review-text">&ldquo;{r.text}&rdquo;</p>
              <div className="bg-review-person">
                <div className="bg-review-avatar">{r.initial}</div>
                <div>
                  <div className="bg-review-name">{r.name}</div>
                  <div className="bg-review-year">Albuquerque, NM · {r.year}</div>
                </div>
                <span className="bg-review-via">Google</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════
          S8 — CLINICAL RESEARCH  (dark)
          UNIQUE: laboratory / science
      ══════════════════════════════════ */}
      <section className="bg-research-section">
        <div className="bg-research-photo">
          <img
            src="/40926.jpg"
            alt="Clinical research and dental science"
          />
          <div className="bg-research-overlay" />
        </div>
        <div className="bg-research-inner">
          <div className="bg-research-content sr">
            <p className="sec-tag" style={{ color: 'var(--c-sand)' }}>Evidence-Based Care</p>
            <h2 className="sec-h" style={{ color: '#fff' }}>
              Clinical<br /><em style={{ color: 'var(--c-sand)' }}>Research</em>
            </h2>
            <p className="sec-body" style={{ color: 'rgba(245,240,232,.62)', marginTop: '.8rem', maxWidth: '52ch' }}>
              Many patients are surprised to hear they may require a preparatory procedure
              before receiving implants. However, bone grafting is a common treatment and
              incredibly effective.
            </p>
            <div className="bg-research-stat-block">
              <div className="bg-research-stat-icon">
                <img src="/rating.png" alt="" />
              </div>
              <div>
                <div className="bg-research-stat-figure">Equal Success Rates</div>
                <p className="bg-research-stat-desc">
                  A study published in 2016 concluded that survival rates of dental implants
                  are the same in patients with native bone tissue as patients with bone grafts.
                  This means a bone graft doesn't compromise your long-term outcome — it
                  enables it.
                </p>
              </div>
            </div>
            <div className="bg-research-btns">
              <a href="#bg-contact" className="btn btn-fill">
                I'm Ready to Learn More
              </a>
              <a href="/services/dental-implants" className="btn btn-line"
                style={{ color: '#fff', borderColor: 'rgba(255,255,255,.3)' }}>
                Explore Dental Implants →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          S9 — RELATED SERVICES  (dark band)
      ══════════════════════════════════ */}
      <section className="bg-related-section">
        <div className="bg-related-inner sr">
          <div className="bg-related-left">
            <p className="sec-tag" style={{ color: 'var(--c-sand)' }}>Next Steps</p>
            <h2 className="sec-h" style={{ color: '#fff' }}>
              Related<br /><em style={{ color: 'var(--c-sand)' }}>Services</em>
            </h2>
            <p className="sec-body" style={{ color: 'rgba(245,240,232,.5)', marginTop: '.8rem', maxWidth: '28ch' }}>
              Bone grafting is often the first step toward a complete smile restoration.
              Explore what comes next.
            </p>
          </div>
          <div className="bg-related-links">
            {RELATED.map((s) => (
              <a className="bg-related-link" href={s.href} key={s.label}>
                <span className="bg-related-dot" />
                <span className="bg-related-label">{s.label}</span>
                <span className="bg-related-arr">→</span>
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