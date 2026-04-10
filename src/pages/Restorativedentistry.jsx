import React, { useEffect } from 'react';
import './Restorativedentistry.css';
import Ratebar from "../components/Ratebar";
import Contactform from "../components/Contactform";
import Officesection from "../components/Officesection";
import Doctorpanel from "../components/Doctorpanel";


/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */

const BADGES = [
  { ico: '★', label: 'Crowns & Bridges' },
  { ico: '✦', label: 'Dental Implants' },
  { ico: '◈', label: 'Same-Day CEREC®' },
  { ico: '◈', label: 'Full Mouth Rebuild' },
];




const DR_AFFILIATIONS = [
  'American Academy of Implant Dentistry',
  'American Academy of Cosmetic Dentistry',
  'American Dental Association',
];

const TREATMENTS = [
  {
    num: '01',
    tag: 'Permanent Tooth Replacement',
    title: 'Dental',
    titleEm: 'Implants',
    href: '/services/dental-implants',
    img: '/photo-1609840114035-3c981b782dfe.jpg',
    body1: 'A dental implant is a titanium post anchored into your jawbone which is designed to support a prosthetic replacement tooth. Dr. Slaman expertly performs traditional and same-day All-on-4® implant procedures.',
    body2: 'He uses cutting-edge technology, like the GALILEOS ComfortPLUS cone beam 3-D imaging system, to create your precise and effective customized treatment plan. Oral sedation is available for your comfort.',
    highlights: ['All-on-4® Available', 'Same-Day Procedures', '3-D Cone Beam Imaging'],
  },
  {
    num: '02',
    tag: 'Restore Damaged Teeth',
    title: 'Dental',
    titleEm: 'Crowns',
    href: '/services/dental-crowns',
    img: '/photo-1629909615184-74f495363b67.jpg',
    body1: 'Dr. Slaman uses high-quality, lifelike crowns to repair and restore teeth compromised by internal discoloration, cracks, wear, or a cavity. Durable gold crowns are great for hard-working back molars while top-grade IPS e.max® and zirconia crowns are best for more visible areas.',
    body2: 'Dr. Slaman is also proud to offer same-day CEREC® crowns, milled in his office while you relax in comfort — no temporary crown or second appointment needed.',
    highlights: ['Same-Day CEREC® Crowns', 'IPS e.max® & Zirconia', 'Gold for Molars'],
  },
  {
    num: '03',
    tag: 'Fill Gaps in Your Smile',
    title: 'Dental',
    titleEm: 'Bridges',
    href: '/services/dental-bridges',
    img: '/photo-1588776814546-1ffcf47267a5.jpg',
    body1: 'If you\'re missing one or several consecutive teeth, a dental bridge can fill gaps in your smile, restore dental function, and correct bite alignment. Dr. Slaman offers traditional bridges, which attach to your natural teeth, as well as implant-supported bridges.',
    body2: 'Both bridges are constructed from the most durable and lifelike dental materials available, ensuring a natural-looking result that functions just like your original teeth.',
    highlights: ['Traditional Bridges', 'Implant-Supported', 'Corrects Bite Alignment'],
  },
  {
    num: '04',
    tag: 'Extensive Tooth Loss',
    title: 'Dentures &',
    titleEm: 'Partials',
    href: '/services/dentures',
    img: '/74080.jpg',
    body1: 'If you\'ve lost all or most of your teeth, natural-looking dentures can dramatically improve your smile. Dr. Slaman offers both traditional, custom-fitted removable restorations as well as the implant-supported kind.',
    body2: 'Implant-supported dentures are firmly attached to titanium posts anchored into your jawbone — they won\'t move around or fall out when you eat or talk like traditional dentures might, while the titanium posts help prevent jawbone shrinkage.',
    highlights: ['Traditional Dentures', 'Implant-Supported', 'Prevents Bone Loss'],
  },
  {
    num: '05',
    tag: 'Partial Crown Restoration',
    title: 'Inlays &',
    titleEm: 'Onlays',
    href: '/services/inlays-and-onlays',
    img: '/6133.jpg',
    body1: 'Placing an inlay or onlay (known as a partial crown) is a popular restorative procedure used to repair a tooth that\'s damaged but doesn\'t require a full crown. Inlays fill the tooth\'s damaged interior while onlays cover the outside of the tooth.',
    body2: 'Dr. Slaman offers strong, long-lasting gold inlays and onlays for rear molars, and same-day, natural-looking CEREC® inlays and onlays that are milled in our office while you wait.',
    highlights: ['CEREC® Same-Day', 'Gold for Molars', 'Preserves Tooth Structure'],
  },
  {
    num: '06',
    tag: 'Treat Cavities Naturally',
    title: 'Tooth-Colored',
    titleEm: 'Fillings',
    href: '/services/tooth-colored-fillings',
    img: '/wmremove-transformed-2.jpeg',
    body1: 'These long-lasting fillings, customized to match the color of your natural teeth, strengthen and protect teeth damaged by small to medium-sized cavities. The non-metallic material is stronger and safer than old-fashioned metal fillings so they pose less risk to patients with allergies.',
    body2: 'Unlike metal fillings, non-metallic composite fillings don\'t expand and contract with temperature variations — delivering a more stable, comfortable, and lasting result.',
    highlights: ['Color-Matched', 'No Metal Sensitivity', 'Temperature Stable'],
  },
  {
    num: '07',
    tag: 'Comprehensive Restoration',
    title: 'Full Mouth',
    titleEm: 'Reconstruction',
    href: '/services/full-mouth-reconstruction',
    img: '/2149313540.jpg',
    body1: 'Have extensive dental damage or tooth loss caused by disease, injuries, or other oral health issues? Dr. Slaman will prepare a customized treatment plan for you that combines multiple restorative procedures.',
    body2: 'Dr. Slaman can make the movie star smile of your dreams a reality. Combining restorative and cosmetic dentistry, he addresses every concern — from health and function to aesthetics and confidence.',
    highlights: ['Custom Treatment Plans', 'Combines Multiple Procedures', 'Health + Aesthetics'],
  },
];

const REVIEWS = [
  {
    initial: 'D', name: 'Diana Boyd', year: '2020',
    text: 'The staff is friendly and efficient. They all work as a team. Dr. Slaman is proactive regarding the future of my teeth to ensure I don\'t have problems as I continue to age.',
  },
  {
    initial: 'L', name: 'Lisa Bagnoli', year: '2019',
    text: "I will never be able to say I love going to 'the dentist', however I will say I have never been disappointed by the professionalism, efficiency and caring of this dental team from front to back. Dr Slaman is a perfectionist — I appreciate that!",
  },
];

const INSURANCE_OPTIONS = [
  {
    img: "/insurance.png",
    title: 'Insurance Accepted',
    desc: 'Insurance usually covers restorative dentistry treatments as they are considered medical procedures. However, cosmetic procedures that might be performed as well usually are not covered. Check with your carrier to see what your plan allows.',
  },
  {
    img: "/credit-card.png",
    title: 'CareCredit® Financing',
    desc: "Dr. Slaman offers qualifying patients financing through CareCredit®. This allows you to break the cost of treatment into no or low-interest monthly payments — so you can get the dental care you need without financial stress.",
  },
  {
    img: "/plan.png",
    title: 'In-Office Payment Plans',
    desc: "Dr. Slaman also offers in-office payment plans tailored to your individual financial needs. Our friendly, knowledgeable staff will work with you to create a plan that fits your budget and gets you on a manageable timeline.",
  },
];

const DR_MEMS = [
  'American Dental Association', 'Academy of General Dentistry',
  'American Academy of Cosmetic Dentistry', 'American Academy of Implant Dentistry',
  'American Academy of Sleep Medicine', 'Spear Faculty Club',
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
   RESTORATIVE DENTISTRY PAGE
───────────────────────────────────────── */
export default function RestorativeDentistry() {
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
            Restorative<br /><em>Dentistry</em>
          </h1>
          <p className="ab-banner-body">
            Cracked, missing, decayed, or chipped teeth can compromise your smile, giving you an aged, unhealthy look. Restorative dentistry can give you back your healthy smile using strong and lifelike crowns, dentures, bridges, inlays, onlays, and more.
          </p>
          <div className="ab-banner-badges">
            {BADGES.map((b) => (
              <span className="ab-banner-badge" key={b.label}>
                <i>{b.ico}</i> {b.label}
              </span>
            ))}
          </div>
          <div className="ab-banner-btns">
            <a href="#contact" className="btn btn-fill">I Want to Restore My Smile</a>
            <a href="#about-section" className="btn btn-line">Call (505) 226-8598</a>
          </div>
        </div>
        <div className="ab-banner-right">
          <img
            src="/23491.jpg"
            alt="Dr. Slaman's modern dental practice interior"
            loading="eager"
          />
          <div className="ab-banner-chip">
            <strong>30+</strong>
            <span>Years Restoring Albuquerque Smiles</span>
          </div>
        </div>
      </section>

      

      {/* ══════════════════════════════════
          S2 — WHAT IS RESTORATIVE DENTISTRY
          UNIQUE: dental tools / equipment
      ══════════════════════════════════ */}
      <section className="rd-what-section">
        <div className="rd-what-copy sr-left">
          <p className="sec-tag">The Basics</p>
          <h2 className="sec-h">
            What Is Restorative<br /><em>Dentistry?</em>
          </h2>
          <p className="sec-body">
            This advanced branch of dentistry specializes in the repair or replacement of
            teeth that are damaged, decayed, or missing. Restorative dental care can also
            be combined with cosmetic dentistry to improve the appearance of your smile.
          </p>
          <p className="sec-body">
            Dr. Slaman is extensively trained in both these fields and performs all
            procedures in his modern Albuquerque, NM, office — meaning you receive
            comprehensive care without the need for outside referrals.
          </p>

          <div className="rd-what-pillars">
            <div className="rd-what-pillar">
              <span className="rd-what-pillar-ico">
                <img src="/dental-treatment.png" alt="" />
              </span>
              <div>
                <strong>Repair</strong>
                <p>Restore damaged, cracked, or decayed teeth back to full health and function.</p>
              </div>
            </div>
            <div className="rd-what-pillar">
              <span className="rd-what-pillar-ico">
                <img src="/dental-implant.png" alt="" />
              </span>
              <div>
                <strong>Replace</strong>
                <p>Fill gaps from missing teeth with natural-looking, permanent solutions.</p>
              </div>
            </div>
            <div className="rd-what-pillar">
              <span className="rd-what-pillar-ico">
                <img src="/whitening-1.png" alt="" />
              </span>
              <div>
                <strong>Renew</strong>
                <p>Combine with cosmetic treatments for both a healthy and beautiful smile.</p>
              </div>
            </div>
          </div>

          <a href="#rd-treatments" className="btn btn-fill" style={{ marginTop: '1.2rem' }}>
            Explore All Treatments →
          </a>
        </div>

        <div className="rd-what-photo sr-right">
          <div className="tw-video-wrap sr-left">
            <div className="tw-video-frame">
              <video controls
                poster="/thumbnail_0_01.png">
                <source
                  src="/shutterstock_v22489555.mp4"
                  type="video/mp4"
                />
                Your browser does not support video.
              </video>
            </div>
            <div className="tw-video-deco">
              <strong>30+</strong>
              <span>Years of Excellence</span>
            </div>
          </div>
          {/* <img
            src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=900&q=80"
            alt="Modern dental equipment and tools"
          />
          <div className="rd-what-overlay" />
          <div className="rd-what-badge">
            <strong>All Procedures</strong>
            <span>Performed in our Albuquerque office</span>
          </div> */}
        </div>
      </section>

      {/* ══════════════════════════════════
          S3 — MEET DR. SLAMAN  (dark split)
          UNIQUE: Dr. Slaman portrait
      ══════════════════════════════════ */}
      <section className="rd-dr-section">
        <div className="rd-dr-photo sr-left">
          <img
            src="/download-main.png"
            alt="Dr. James Slaman"
          />
          <div className="rd-dr-photo-overlay" />
          <div className="rd-dr-photo-badge">
            <strong>Dr. James Slaman</strong>
            <span>DDS, PC · Albuquerque, NM</span>
          </div>
        </div>

        <div className="rd-dr-copy sr-right">
          <p className="sec-tag" style={{ color: 'var(--c-sand)' }}>Your Restorative Dentist</p>
          <h2 className="sec-h" style={{ color: '#fff' }}>
            Meet Dr.<br /><em style={{ color: 'var(--c-sand)' }}>James Slaman</em>
          </h2>
          <p className="sec-body" style={{ color: 'rgba(245,240,232,.58)'}}>
            Dr. Slaman was born and raised in Albuquerque, where he has practiced since
            1992. He is an award-winning, compassionate dentist who treats his patients
            like family, offering warm blankets, headphones, and fresh coffee.
          </p>
          <p className="sec-body" style={{ color: 'rgba(245,240,232,.58)' }}>
            Today's a great day to set up a no-pressure restorative dentistry consultation
            with Dr. Slaman and discuss your dental care. We look forward to giving you a
            smile that will light up the world like New Mexico sunshine.
          </p>

          <div className="rd-dr-affiliations">
            <p className="rd-dr-affil-label">His affiliations include:</p>
            <div className="rd-dr-affil-pills">
              {DR_AFFILIATIONS.map((a) => (
                <span className="rd-dr-affil-pill" key={a}>
                  <span className="rd-dr-affil-dot" />
                  {a}
                </span>
              ))}
            </div>
          </div>

          <div className="rd-dr-cta">
            <p className="rd-dr-phone"><a href="tel:5052268598">(505) 226-8598</a></p>
            <a href="#rd-contact" className="btn btn-fill">
              I Want to Restore My Smile
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          S4 — REVIEWS
      ══════════════════════════════════ */}
      <section className="rd-reviews-section">
        <div className="rd-reviews-header sr">
          <div className='rd-reviews-content-box'>
            <p className="sec-tag">Patient Reviews</p>
            <h2 className="sec-h">
              "Dr Slaman Is a Perfectionist —<br /><em>I Appreciate That!"</em>
            </h2>
          </div>
          <a href="https://maps.google.com/maps?cid=13452876912051634118"
            target="_blank" rel="noopener noreferrer"
            className="btn btn-line">
            View All on Google →
          </a>
        </div>
        <div className="rd-reviews-grid">
          {REVIEWS.map((r) => (
            <div className="rd-review-card sr" key={r.name}>
              <div className="rd-review-stars">★★★★★</div>
              <p className="rd-review-text">&ldquo;{r.text}&rdquo;</p>
              <div className="rd-review-person">
                <div className="rd-review-avatar">{r.initial}</div>
                <div>
                  <div className="rd-review-name">{r.name}</div>
                  <div className="rd-review-year">Albuquerque, NM · {r.year}</div>
                </div>
                <span className="rd-review-via">Google</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════
          S5 — TREATMENTS (alternating)
          Each treatment has its own UNIQUE image
      ══════════════════════════════════ */}
      <section className="rd-treatments-section" id="rd-treatments">
        <div className="rd-treatments-header sr">
          <p className="sec-tag">What We Offer</p>
          <h2 className="sec-h">
            Treatments<br /><em>We Offer</em>
          </h2>
          <p className="sec-body">
            Dr. James Slaman, a highly-regarded dentist in Albuquerque, NM, can dramatically
            improve your smile using the latest restorative dentistry technology.
          </p>
        </div>

        <div className="rd-treatments-list">
          {TREATMENTS.map((t, idx) => (
            <div
              className={`rd-treatment-item${idx % 2 !== 0 ? ' rd-treatment-item--reverse' : ''}`}
              key={t.num}
            >
              <div className="rd-treatment-copy">
                <span className="rd-treatment-num">{t.num}</span>
                <p className="rd-treatment-tag">
                  <span className="rd-treatment-tag-line" />
                  {t.tag}
                </p>
                <h3 className="rd-treatment-name">
                  {t.title} <em>{t.titleEm}</em>
                </h3>
                <p className="rd-treatment-body">{t.body1}</p>
                <p className="rd-treatment-body">{t.body2}</p>

                {/* highlight pills */}
                <div className="rd-treatment-pills">
                  {t.highlights.map((h) => (
                    <span className="rd-treatment-pill" key={h}>{h}</span>
                  ))}
                </div>

                <a href={t.href} className="btn btn-fill" style={{ marginTop: '1.4rem' }}>
                  Learn More About {t.titleEm} →
                </a>
              </div>
              <div className="rd-treatment-img">
                <img src={t.img} alt={`${t.title} ${t.titleEm}`} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════
          S6 — INSURANCE / PAYMENT
          UNIQUE: insurance/payment document
      ══════════════════════════════════ */}
      <section className="rd-insurance-section">
        <div className="rd-insurance-header sr">
          <p className="sec-tag">Affordability</p>
          <h2 className="sec-h">
            Does Insurance Cover<br /><em>Restorative Dentistry?</em>
          </h2>
          <p className="sec-body" >
            Insurance <strong>usually covers</strong> restorative dentistry treatments as
            they are considered medical procedures. However, cosmetic procedures that
            might be performed as well usually are <em>not</em> covered. Check with your
            carrier to see what your plan allows.
          </p>
        </div>

        <div className="rd-insurance-grid">
          {INSURANCE_OPTIONS.map((o, i) => (
            <div className="rd-insurance-card sr" key={o.title} style={{ transitionDelay: `${i * 0.12}s` }}>
              <div className="rd-insurance-ico">
                <img src={o.img} alt={o.title} />
              </div>
              <h3 className="rd-insurance-title">{o.title}</h3>
              <p className="rd-insurance-desc">{o.desc}</p>
            </div>
          ))}
        </div>

        <div className="rd-insurance-cta sr">
          <a href="#rd-contact" className="btn btn-fill">
            Speak With Our Team About Financing
          </a>
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