import React, { useEffect, useState } from 'react';
import './Dentalcrowns.css';
import Ratebar from "../components/Ratebar";
import Contactform from "../components/Contactform";
import Officesection from "../components/Officesection";
import Doctorpanel from "../components/Doctorpanel";

/* ─────────────────────────────────────────

─────────────────────────────────────────── */

/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */

const BADGES = [
  { ico: '★', label: 'Same-Day Available' },
  { ico: '✦', label: 'IPS e.max® & Zirconia' },
  { ico: '◈', label: 'CEREC® Technology' },
  { ico: '◈', label: 'Implant-Supported' },
];


const ABQ_REASONS = [
  {
    img: "/tooth-2.png",
    title: 'Crowns for All Needs',
    desc: 'Whether you\'re replacing a missing tooth, restoring a damaged tooth, or seeking a cosmetic upgrade, Dr. James Slaman offers a crown solution tailored to you. He coordinates with the area\'s best oral surgeons for dental implant cases.',
  },
  {
    img: "/award.png",
    title: 'Care by a Leader in Dentistry',
    desc: 'In practice since 1992, Dr. Slaman provides excellent results thanks to decades of experience and ongoing education. Patients can also expect warm blankets, headphones, and gourmet coffee.',
  },
  {
    img: "/clock.png",
    title: 'Same-Day Crowns',
    desc: 'Why wait weeks for a permanent crown? In many cases, Dr. Slaman can use advanced CEREC® technology to craft and place custom crowns in a single appointment — no temporary crowns, no return visits.',
  },
];

const BENEFITS = [
  { num: '01',  title: 'Boosted Confidence',    desc: 'Many dental concerns can detract from your appearance. A dental crown often improves the look of a damaged tooth, allowing you to flaunt a healthier-looking smile.' },
  { num: '02',  title: 'Durable Protection',   desc: 'Dental crowns can protect a compromised tooth that is decayed, broken, or chipped by providing extra strength and structure that lasts for years.' },
  { num: '03',  title: 'Long-Lasting Effects',  desc: 'With proper maintenance and care, crowns can last for 10 years or more, allowing patients to bite and chew without worry.' },
  { num: '04',  title: 'Natural-Looking Results', desc: 'Designed to look and function like natural teeth, a dental crown matches your surrounding teeth to blend into your smile seamlessly.' },
];

const CONCERNS = [
  { img: "/Damaged-Teeth.svg", title: 'Damaged Teeth',          desc: 'Whether it\'s broken, fractured, or chipped, a crown can help strengthen and protect a compromised tooth from further damage.' },
  { img: "/Missing-Teeth.svg", title: 'Missing Teeth',          desc: 'Paired with a dental implant, a crown can replace a missing tooth. Implants are considered the gold standard in tooth replacement.' },
  { img: "/Root-Canal-Infection.svg", title: 'Root Canal Infection',   desc: 'If you\'ve had root canal treatment, a dental crown can protect the weakened tooth with a strong material such as porcelain or gold.' },
  { img: "/Discoloration-1.svg", title: 'Discoloration',          desc: 'Designed to match and blend in with your natural teeth, a crown easily conceals discoloration. Our dentist will find the shade that best fits your smile.' },
  { img: "/Disproportionate-Teeth.svg", title: 'Disproportionate Teeth', desc: 'If a tooth is smaller than your other teeth, a dental crown can provide the harmonious smile you\'ve always dreamed of having.' },
];

const CROWN_TYPES = [
  {

    badge: 'Most Popular',
    title: 'Porcelain',
    desc: 'A porcelain crown is virtually impossible to distinguish from a natural tooth. Made to match any shade flawlessly, porcelain is an excellent option for patients who want results that are both aesthetic and reliable in strength and durability.',
    img: '/12534.jpg',
  },
  {

    badge: 'For Molars',
    title: 'Gold',
    desc: 'Dr. Slaman is renowned for his skill with gold crowns. Typically recommended for back molars, gold is incredibly strong and can withstand tremendous force. An excellent option if you chronically clench your teeth.',
    img: '/photo-1606811841689-23dfddce3e95.jpg',
  },
  {

    badge: 'Most Lifelike',
    title: 'IPS e.max®',
    desc: 'IPS e.max® has a slight translucence, allowing the material to interact with light as natural enamel does. This results in a sparkle that will leave you with a brighter smile and healthier-looking teeth.',
    img: '/9355.jpg',
  },
  {

    badge: 'Ultra Durable',
    title: 'Zirconia',
    desc: 'Similar to IPS e.max, zirconia is an advanced ceramic that comes in a variety of shades. Extremely durable, it may be a good option for strengthening back teeth while maintaining a natural appearance.',
    img: '/18588.jpg',
  },
];

const CEREC_STEPS = [
  {
    num: '01', title: 'Consultation',
    desc: 'Our dentist uses digital X-rays and an intraoral camera to evaluate your tooth and determine if a crown is the right option. We\'ll work with you to select a restorative material that best fits your functional and aesthetic needs.',
  },
  {
    num: '02', title: 'Preparation',
    desc: 'If extensive decay is present or a tooth root is compromised, root canal treatment is required before a crown can be placed.',
  },
  {
    num: '03', title: 'Digital Impressions',
    desc: 'For same-day crowns, our dentist uses a scanner to take 3D impressions of your tooth. The models are incredibly precise and eliminate the need for messy impression trays.',
  },
  {
    num: '04', title: 'In-Office Fabrication',
    desc: 'Information is sent to our in-office CEREC® machine. It creates your restoration based on digital impressions — guiding automated tools to shape a porcelain block. The process usually takes less than an hour.',
  },
  {
    num: '05', title: 'Placement & Bonding',
    desc: 'After the crown is ready, it is placed over the tooth and examined for comfort. Your dentist will make any necessary adjustments before securely bonding the crown to your tooth.',
  },
];

const CARE_TIPS = [
  { img: "/ice-cube.png", tip: 'Avoid chewing ice and biting your nails.' },
  { img: "/tooth.png", tip: 'When flossing, slide the floss to the side instead of lifting it up and out.' },
  { img: "/toothbrush.png", tip: 'Practice good dental hygiene to keep your teeth, gums, and crown healthy.' },
  { img: "/calendar.png", tip: 'Schedule twice-yearly dental appointments for checkups and cleanings.' },
];

const FAQS = [
  {
    q: 'What do dental crowns cost?',
    a: 'Basic insurance plans contribute to at least a portion of the cost of crowns when used to address a medical need such as a decayed or damaged tooth. If you want a crown for purely cosmetic reasons, you can expect to pay out of pocket. The materials used are also an important cost factor. The best way to determine your cost is to schedule a consultation with Dr. Slaman.',
  },
  {
    q: 'How long do crowns last?',
    a: 'By brushing twice and flossing at least once daily, and visiting your dentist for a checkup every six months, you can expect your crown to last 10 years or longer.',
  },
  {
    q: 'Can I have an MRI done if I have a dental crown?',
    a: "The crowns Dr. Slaman provides (made of gold, porcelain, e.max, or zirconia) will not interfere with an MRI. If you need an MRI and have a crown made from a metal other than gold, get in touch with us about replacing it with something that looks great and also allows you to get the diagnostics you need.",
  },
];

const REVIEWS = [
  { name: 'Tim',     text: 'This is the type of place everyone needs to go for dentistry. A great staff — everyone has a great attitude.' },
  { name: 'Kareem',  text: 'Dr. Slaman provides a comprehensive evaluation and treatment plan. Recommended for anyone in Albuquerque needing dental services.' },
  { name: 'Terrie',  text: "I went in to see Dr Slaman for a consultation. I was so impressed with his honesty and the time that he spent with me. I have never had a dentist in all my years of going to the dentist be as thorough as he was." },
  { name: 'Anthony', text: 'Excellent work from the receptionist, to the hygienist, to the examination by the dentist. Extremely professional, courteous, and friendly.' },
];

const DR_MEMS = [
  'American Dental Association', 'Academy of General Dentistry',
  'American Academy of Cosmetic Dentistry', 'American Academy of Implant Dentistry',
  'American Academy of Sleep Medicine', 'Spear Faculty Club',
];

const RELATED = [
  { label: 'Dental Implants',        href: '/services/dental-implants' },
  { label: 'Dental Bridges',         href: '/services/dental-bridges' },
  { label: 'CEREC® Same-Day Crowns', href: '/services/cerec' },
  { label: 'Restorative Dentistry',  href: '/services/restorative' },
  { label: 'Bone Grafting',          href: '/services/bone-grafting' },
  { label: 'Porcelain Veneers',      href: '/services/veneers' },
];

/* ─────────────────────────────────────────
   SCROLL REVEAL
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
   DENTAL CROWNS PAGE
───────────────────────────────────────── */
export default function DentalCrowns() {
  useScrollReveal();
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <main>




        {/* ══════════════════════════════════
          S1 — HERO / BANNER
      ══════════════════════════════════ */}
      <section className="ab-banner-section">
        <div className="ab-banner-left">
          <p className="ab-banner-eyebrow">Albuquerque, New Mexico</p>
          <h1 className="ab-banner-h1">
            Dental<br /><em>Crowns</em>
          </h1>
          <p className="ab-banner-body">
            Custom dental crowns crafted from quality materials — protecting damaged teeth, replacing missing ones, and upgrading your smile. Dr. James Slaman offers traditional and same-day CEREC® crowns from his modern Albuquerque, NM, office.
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
            src="/74151.jpg"
            alt="Dr. Slaman's modern dental practice interior"
            loading="eager"
          />
          <div className="ab-banner-chip">
            <strong>10+</strong>
            <span>Years Average Crown Lifespan with proper care</span>
          </div>
        </div>
      </section>



      {/* ══════════════════════════════════
          S2 — WHAT IS A SMILE MAKEOVER
          Image: patient consulting dentist (unique)
      ══════════════════════════════════ */}
      <section className="sm-what-section">
        <div className="sm-what-photo sr-left">
          <img
            src="/photo-1629909613654-28e377c37b09.jpg"
            alt="Patient consulting with Dr. Slaman"
          />
          <div className="sm-what-photo-overlay" />
          <div className="sm-what-badge">
            <strong>In Practice Since 1992</strong>
            <span>30+ Years Serving Albuquerque</span>
          </div>
        </div>

        <div className="sm-what-copy sr-right">
          <p className="sec-tag">Albuquerque's First Choice</p>
          <h2 className="sec-h">
            ABQ's First Choice<br /><em>for Dental Crowns</em>
          </h2>

          <div className="dcrown-abq-cards">
            {ABQ_REASONS.map((r, i) => (
              <div className="dcrown-abq-card sr" key={r.title} style={{ transitionDelay: `${i * 0.1}s` }}>
                <span className="dcrown-abq-ico">
                    <img src={r.img} alt={r.title} />
                </span>
                <div>
                  <div className="dcrown-abq-title">{r.title}</div>
                  <p className="dcrown-abq-desc">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
          
          <a href="#sm-contact" className="btn btn-fill" style={{ marginTop: '1.2rem' }}>
            I'd Love to Learn More
          </a>
        </div>
      </section>


      


      {/* ══════════════════════════════════
          S3 — BENEFITS  (dark full-bleed)
          UNIQUE: smiling patient outdoors
      ══════════════════════════════════ */}
      <section className="dcrown-benefits-section">
        <div className="dcrown-benefits-bg" />
        <div className="dcrown-benefits-overlay" />
        <div className="dcrown-benefits-inner">
          <div className="dcrown-benefits-header sr">
            <p className="sec-tag" style={{ color: 'var(--c-sand)' }}>Why Crowns?</p>
            <h2 className="sec-h" style={{ color: '#fff' }}>
              Dental Crowns Provide<br /><em style={{ color: 'var(--c-sand)' }}>Many Benefits</em>
            </h2>
          </div>
          <div className="dcrown-benefits-grid">
            {BENEFITS.map((b, i) => (
              <div className="dcrown-benefit-card sr" key={b.num} style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="dcrown-benefit-top">
                  <span className="dcrown-benefit-num">{b.num}</span>
                </div>
                <h3 className="dcrown-benefit-title">{b.title}</h3>
                <p className="dcrown-benefit-desc">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          S4 — VIDEO + DR. STANDARDS
          UNIQUE: dental chair / consultation
      ══════════════════════════════════ */}
      <section className="dcrown-wrap dcrown-video-section">
        <div className="dcrown-video-header sr">
          <p className="sec-tag">From the Doctor</p>
          <h2 className="sec-h">
            Dr. Slaman<br /><em>Explains Crowns</em>
          </h2>
        </div>

        <div className="dcrown-video-layout">
          <div className="dcrown-video-wrap sr-left">
            <div className="dcrown-video-frame">
              <video controls
                poster="/original_computer-showing-dental-scans.jpg">
                <source
                  src="/Crowns_1646341865.mp4"
                  type="video/mp4"
                />
                Your browser does not support video.
              </video>
            </div>
            <div className="dcrown-video-deco">
              <strong>1 hr</strong>
              <span>Same-Day CEREC®</span>
            </div>
          </div>

          <div className="dcrown-video-copy sr-right">
            <p className="sec-body">
              In this video, Dr. James Slaman discusses the purpose of dental crowns,
              candidacy requirements, and how long a crown lasts. You may need a dental
              crown if you have a broken or decayed tooth, or a tooth with a large filling
              that needs replacing.
            </p>
            <p className="sec-body">
              In practice since 1992, Dr. Slaman considers himself a perfectionist.
              He is passionate about providing the best care to all his patients by keeping
              up with continuing education. His office is equipped with not just the latest
              state-of-the-art technology, but also perks to make your visit as comfortable
              as possible.
            </p>

            <blockquote className="dcrown-pullquote">
              <p>"This is the type of place everyone needs to go for dentistry. A great staff — everyone has a great attitude."</p>
              <cite>— Tim, 5-Star Review</cite>
            </blockquote>

            <a href="https://www.drslaman.com/video/61111-dental-crowns/index.html"
              target="_blank" rel="noopener noreferrer"
              className="dcrown-video-link">
              Visit Our Video Gallery <span>→</span>
            </a>
            <a href="#dcrown-contact" className="btn btn-fill" style={{ marginTop: '.6rem' }}>
              Request a Consultation →
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          S5 — WHAT CROWNS TREAT  (dark)
          UNIQUE: dark tooth concept
      ══════════════════════════════════ */}
      <section className="dcrown-concerns-section">
        <div className="dcrown-concerns-bg" />
        <div className="dcrown-concerns-overlay" />
        <div className="dcrown-concerns-inner">
          <div className="dcrown-concerns-header sr">
            <p className="sec-tag" style={{ color: 'var(--c-sand)' }}>Is This You?</p>
            <h2 className="sec-h" style={{ color: '#fff' }}>
              Dental Crowns Can<br /><em style={{ color: 'var(--c-sand)' }}>Treat a Range of Concerns</em>
            </h2>
          </div>
          <div className="dcrown-concerns-grid">
            {CONCERNS.map((c, i) => (
              <div className="dcrown-concern-item sr" key={c.title} style={{ transitionDelay: `${i * 0.08}s` }}>
                <div className="dcrown-concern-ico-wrap">
                    <img src={c.img} alt={c.title} />
                </div>
                <h3 className="dcrown-concern-title">{c.title}</h3>
                <p className="dcrown-concern-desc">{c.desc}</p>
              </div>
            ))}
          </div>
          <div className="dcrown-concerns-cta sr">
            <a href="#dcrown-contact" className="btn btn-fill">Find Out If a Crown Is Right for You →</a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          S6 — TYPES OF CROWNS
          Each type card has its own image
      ══════════════════════════════════ */}
      <section className="dcrown-wrap dcrown-types-section">
        <div className="dcrown-types-header sr">
          <p className="sec-tag">Choose the Right Material</p>
          <h2 className="sec-h">
            Types of Crowns Offered<br /><em>at Our Dental Office</em>
          </h2>
          <p className="sec-body" style={{ maxWidth: '52ch' }}>
            We offer a range of crowns including porcelain, gold, and ceramic. Dr. Slaman
            will work with you to recommend the crown type that best fits your individual
            dental needs and goals.
          </p>
        </div>

        <div className="dcrown-types-grid">
          {CROWN_TYPES.map((t, i) => (
            <div className="dcrown-type-card sr" key={t.title} style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="dcrown-type-img">
                <img src={t.img} alt={`${t.title} dental crown material`} />
              </div>
              <div className="dcrown-type-body">
                <div className="dcrown-type-header-row">
                  <span className="dcrown-type-badge">{t.badge}</span>
                </div>
                <h3 className="dcrown-type-title">{t.title}</h3>
                <p className="dcrown-type-desc">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════
          S7 — CEREC SYSTEM  (split)
          UNIQUE: hi-tech dental scanner
      ══════════════════════════════════ */}
      <section className="dcrown-cerec-section">
        <div className="dcrown-cerec-photo sr-left">
          <img
            src="/20952.jpg"
            alt="CEREC same-day crown technology"
          />
          <div className="dcrown-cerec-overlay" />
          <div className="dcrown-cerec-badge">
            <strong>CEREC® System</strong>
            <span>Say goodbye to temporary crowns</span>
          </div>
        </div>

        <div className="dcrown-cerec-copy sr-right">
          <p className="sec-tag">State-of-the-Art Technology</p>
          <h2 className="sec-h">
            The CEREC® System —<br /><em>Same-Day Crown Technology</em>
          </h2>
          <p className="sec-body" >
            Whenever possible, Dr. Slaman will use our CEREC® system to provide
            natural-looking permanent crowns in a single appointment at our Albuquerque,
            NM, office. By using a high-tech scanner to take impressions of your tooth,
            we're able to create custom designs that fit your tooth like a glove.
          </p>
          <p className="sec-body">
            Patients can enjoy results in just one dental visit without worrying about
            repeat trips to the dentist or temporary crowns. Creating crowns on-site
            allows us to closely oversee every step, from design to placement.
          </p>

          <div className="dcrown-cerec-benefits">
            {['No temporary crowns', 'No second appointment', 'Ultra-precise fit', '3D digital impressions', 'Less than 1 hour', 'Lab quality on-site'].map((b) => (
              <span className="dcrown-cerec-pill" key={b}>{b}</span>
            ))}
          </div>

          <a href="/services/cerec" className="btn btn-fill" style={{ marginTop: '1.2rem' }}>
            Learn More About CEREC® →
          </a>
        </div>
      </section>

      {/* ══════════════════════════════════
          S8 — TREATMENT STEPS  (dark)
          UNIQUE: clinical/surgical tools
      ══════════════════════════════════ */}
      <section className="dcrown-steps-section">
        <div className="dcrown-steps-bg" />
        <div className="dcrown-steps-overlay" />
        <div className="dcrown-steps-inner">
          <div className="dcrown-steps-header sr">
            <p className="sec-tag" style={{ color: 'var(--c-sand)' }}>Step by Step</p>
            <h2 className="sec-h" style={{ color: '#fff' }}>
              What to Expect<br /><em style={{ color: 'var(--c-sand)' }}>During Treatment</em>
            </h2>
          </div>

          <div className="dcrown-steps-list">
            {CEREC_STEPS.map((s, i) => (
              <div className="dcrown-step sr" key={s.num} style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="dcrown-step-num">{s.num}</div>
                <div className="dcrown-step-connector">
                  <div className="dcrown-step-dot" />
                  {i < CEREC_STEPS.length - 1 && <div className="dcrown-step-line" />}
                </div>
                <div className="dcrown-step-body">
                  <h3 className="dcrown-step-title">{s.title}</h3>
                  <p className="dcrown-step-desc">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="dcrown-steps-cta sr">
            <a href="#dcrown-contact" className="btn btn-fill">
              Message Us to Get Started →
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          S9 — CARE TIPS  (split)
          UNIQUE: oral hygiene / brushing
      ══════════════════════════════════ */}
      <section className="dcrown-care-section">
        <div className="dcrown-care-copy sr-left">
          <p className="sec-tag">Crown Longevity</p>
          <h2 className="sec-h">
            How to Care for<br /><em>Your Dental Crown</em>
          </h2>
          <p className="sec-body" >
            To ensure the longevity of your new crown, we recommend several tips that will
            help protect your investment and keep your smile healthy for years to come.
          </p>
          <div className="dcrown-care-tips">
            {CARE_TIPS.map((t, i) => (
              <div className="dcrown-care-tip sr" key={i} style={{ transitionDelay: `${i * 0.08}s` }}>
                <span className="dcrown-care-tip-ico">
                    <img src={t.img} alt="Care Tip" />
                </span>
                <span className="dcrown-care-tip-text">{t.tip}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="dcrown-care-photo sr-right">
          <img
            src="/24397.jpg"
            alt="Proper dental hygiene for crown care"
          />
          <div className="dcrown-care-overlay" />
          <div className="dcrown-care-stat">
            <span className="dcrown-care-stat-num">10+</span>
            <span className="dcrown-care-stat-lbl">Years with proper care</span>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          S10 — IMPLANT CROWNS & BRIDGES  (dark split)
          UNIQUE: titanium implant post
      ══════════════════════════════════ */}
      <section className="dcrown-implant-section">
        <div className="dcrown-implant-photo sr-left">
          <img
            src="/2148104970.jpg"
            alt="Implant-supported dental crown"
          />
          <div className="dcrown-implant-overlay" />
        </div>

        <div className="dcrown-implant-copy sr-right">
          <p className="sec-tag" style={{ color: 'var(--c-sand)' }}>Replace Missing Teeth</p>
          <h2 className="sec-h" style={{ color: '#fff' }}>
            Implant-Supported Crowns<br /><em style={{ color: 'var(--c-sand)' }}>&amp; Dental Bridges</em>
          </h2>
          <p className="sec-body" style={{ color: 'rgba(245,240,232,.58)' }}>
            Losing a tooth can have an impact on your self-esteem, oral function, and oral
            health. Our dentist can restore your bite, boost your self-confidence, and
            improve your oral health.
          </p>

          <div className="dcrown-implant-options">
            <div className="dcrown-implant-option">
              <div className="dcrown-implant-option-header">
                <h3 className="dcrown-implant-option-title">Implant-Supported Crowns</h3>
              </div>
              <p className="dcrown-implant-option-desc">
                When a tooth is lost, the lack of dental roots causes the bone tissue in
                your jaw to deteriorate. Dental implants act like tooth roots and are the
                only treatment proven to stop jawbone atrophy. Dr. Slaman can fill the gap
                with an implant-supported crown that acts, feels, and looks just like a
                natural tooth.
              </p>
              <a href="/services/dental-implants" className="dcrown-implant-link">
                Explore Dental Implants →
              </a>
            </div>

            <div className="dcrown-implant-option">
              <div className="dcrown-implant-option-header">
                <h3 className="dcrown-implant-option-title">Dental Bridges</h3>
              </div>
              <p className="dcrown-implant-option-desc">
                A traditional dental bridge uses the two teeth on either side of the gap as
                anchor points capped with dental crowns to support replacement teeth. While
                a traditional bridge does not offer the same jawbone protection as an
                implant, it can keep teeth from shifting and restore function more affordably.
              </p>
              <a href="/services/dental-bridges" className="dcrown-implant-link">
                Explore Dental Bridges →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          S11 — COSMETIC CROWNS  (split)
          UNIQUE: before/after cosmetic smile
      ══════════════════════════════════ */}
      <section className="dcrown-cosmetic-section">
        <div className="dcrown-cosmetic-copy sr-left">
          <p className="sec-tag">Beyond Restoration</p>
          <h2 className="sec-h">
            Crowns as a<br /><em>Cosmetic Treatment</em>
          </h2>
          <p className="sec-body" >
            Crowns are primarily known as a restorative solution, but in some cases, crowns
            can provide exactly the cosmetic upgrade a patient needs. For example, if you
            have a severely misshapen tooth, or if a veneer would not adequately hide the
            imperfection you want to address, a custom crown can completely cover the tooth.
          </p>
          <p className="sec-body">
            In some instances, a tooth may be severely discolored in a way that whitening
            cannot improve, and would be visible through a thin porcelain veneer. In these
            cases, Dr. Slaman may determine that a crown is the best way to make your smile
            more attractive and provide a boost in confidence.
          </p>
          <div className="dcrown-cosmetic-btns">
            <a href="#dcrown-contact" className="btn btn-fill">
              Let's Find the Solution You Need
            </a>
            <a href="tel:5052268598" className="btn btn-line">
              Call (505) 226-8598
            </a>
          </div>
        </div>

        <div className="dcrown-cosmetic-photo sr-right">
          <img
            src="/19645.jpg"
            alt="Cosmetic crown results — confident smile"
          />
          <div className="dcrown-cosmetic-overlay" />
        </div>
      </section>

      {/* ══════════════════════════════════
          S12 — REVIEWS WALL
      ══════════════════════════════════ */}
      <section className="dcrown-reviews-section">
        <div className="dcrown-reviews-header sr">
          <div className='dcrown-reviews-header-content-box'>
            <p className="sec-tag">What Patients Say</p>
            <h2 className="sec-h">
              Why Patients<br /><em>Trust Us</em>
            </h2>
          </div>
          <a href="https://maps.google.com/maps?cid=13452876912051634118"
            target="_blank" rel="noopener noreferrer"
            className="btn btn-line">
            View All on Google →
          </a>
        </div>
        <div className="dcrown-reviews-grid">
          {REVIEWS.map((r) => (
            <div className="dcrown-review-card sr" key={r.name}>
              <div className="dcrown-review-stars">★★★★★</div>
              <p className="dcrown-review-text">&ldquo;{r.text}&rdquo;</p>
              <div className="dcrown-review-person">
                <div className="dcrown-review-avatar">{r.name[0]}</div>
                <div>
                  <div className="dcrown-review-name">{r.name}</div>
                  <div className="dcrown-review-year">Albuquerque, NM · Google Review</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════
          S13 — FAQ  (dark accordion)
      ══════════════════════════════════ */}
      <section className="dcrown-faq-section">
        <div className="dcrown-faq-header sr">
          <p className="sec-tag" style={{ color: 'var(--c-sand)' }}>Common Questions</p>
          <h2 className="sec-h" style={{ color: '#fff' }}>
            Dental Crowns<br /><em style={{ color: 'var(--c-sand)' }}>FAQ</em>
          </h2>
        </div>
        <div className="dcrown-faq-list">
          {FAQS.map((f, i) => (
            <div
              className={`dcrown-faq-item ${openFaq === i ? ' dcrown-faq-item--open' : ''}`}
              key={i}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <button className="dcrown-faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                <span>{f.q}</span>
                <span className="dcrown-faq-arrow">{openFaq === i ? '−' : '+'}</span>
              </button>
              <div className="dcrown-faq-a"><p>{f.a}</p></div>
            </div>
          ))}
        </div>
        <div className="dcrown-faq-cta sr">
          <a href="#dcrown-contact" className="btn btn-fill">Ask Us a Question</a>
        </div>
      </section>

      {/* ══════════════════════════════════
          S14 — RELATED SERVICES
      ══════════════════════════════════ */}
      <section className="dcrown-related-section">
        <div className="dcrown-related-inner sr">
          <div className="dcrown-related-left">
            <p className="sec-tag" style={{ color: 'var(--c-sand)' }}>Explore More</p>
            <h2 className="sec-h" style={{ color: '#fff' }}>
              Related<br /><em style={{ color: 'var(--c-sand)' }}>Services</em>
            </h2>
            <p className="sec-body" style={{ color: 'rgba(245,240,232,.5)', maxWidth: '28ch' }}>
              Dental crowns pair with a wide range of restorative and cosmetic treatments.
            </p>
          </div>
          <div className="dcrown-related-links">
            {RELATED.map((s) => (
              <a className="dcrown-related-link" href={s.href} key={s.label}>
                <span className="dcrown-related-dot" />
                <span className="dcrown-related-label">{s.label}</span>
                <span className="dcrown-related-arr">→</span>
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