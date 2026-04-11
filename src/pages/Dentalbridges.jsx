import React, { useEffect } from 'react';
import './Dentalbridges.css';
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
  { ico: '★', label: 'Traditional Bridges' },
  { ico: '✦', label: 'Implant-Supported' },
  { ico: '◈', label: 'IPS e.max® Material' },
  { ico: '◈', label: 'Insurance Accepted' },
];

const ADVANTAGES = [
  {
    num: '01',
    title: 'Appearance',
    desc: 'Missing teeth can give your face a sunken-in, unhealthy appearance, making you look older than you are. A dental bridge restores full facial volume for a youthful, healthy look.'
  },
  {
    num: '02',
    title: 'Speaking',
    desc: 'Your tongue works with your teeth to pronounce certain words. Missing teeth could lead to lisping, garbled speech — a dental bridge restores clear, confident communication.',
  },
  {
    num: '03',
    title: 'Chewing',
    desc: 'Your molars are used for chewing and grinding. If they\'re missing, eating foods can be difficult and painful. A bridge brings back full chewing function and dietary freedom.',
  },
  {
    num: '04',
    title: 'Biting',
    desc: 'Missing front teeth can make biting into foods like corn on the cob and apples a dental challenge. A dental bridge restores the comfortable, natural bite you deserve.',
  },
    {
    num: '05',
    title: 'Teeth Alignment',
    desc: 'A dental bridge can realign your bite, restoring long-term comfort and improving quality of life by preventing adjacent teeth from drifting out of position.',
  },
];

const TRAD_STEPS = [
  {
    num: '01',
    title: 'Reshaping the Teeth',
    desc: 'The teeth on either side of the gap (abutment teeth) will be expertly reshaped. Dr. Slaman uses advanced air abrasion instruments to prep teeth, removing as little tooth structure as possible — no unpleasant noises or vibrations.',
  },
  {
    num: '02',
    title: 'Impressions',
    desc: 'Precise impressions will be made and sent to our high-quality partner lab to create your custom bridge with exact color-matching and fit.',
  },
  {
    num: '03',
    title: 'Temporary Crowns',
    desc: 'You\'ll be fitted with temporary crowns created in-office to fill the empty space until your permanent bridge is ready — so you\'re never without a complete smile.',
  },
  {
    num: '04',
    title: 'Bridge Fabrication',
    desc: 'A skilled dental ceramist will create your bridge over approximately two weeks, making sure it matches the color and shape of your existing teeth perfectly.',
  },
  {
    num: '05',
    title: 'Placing the Custom Bridge',
    desc: 'Dr. Slaman removes your temporary crowns, makes any needed adjustments, then secures your dental bridge with long-lasting dental cement. The pontic tooth and new crowns blend naturally with your existing teeth.',
  },
];

const IMPLANT_STEPS = [
  {
    appt: '1st Appointment',
    items: [
      'Our GALILEOS® ComfortPLUS cone beam scanner creates a detailed 3D image of your jaw.',
      'If Dr. Slaman finds bone shrinkage or signs of disease, you may need a bone graft in order to receive implants.',
    ],
  },
  {
    appt: '2nd Appointment',
    items: [
      'Dr. Slaman performs your dental implant surgery in our Albuquerque, NM, office, permanently anchoring ultra-strong titanium rods into your jawbone.',
      'Impressions for your bridge are made and sent to our lab. Over the next few months, your jaw heals around the titanium implants.',
    ],
  },
  {
    appt: '3rd Appointment',
    items: [
      'Dr. Slaman attaches your natural-looking bridge to your implants.',
      'Now get out there and show off your newly restored smile!',
    ],
  },
];

const MATERIALS = [
  {
    title: 'IPS e.max®',
    sub: 'Most Visible Teeth',
    desc: 'The most lifelike, state-of-the-art material available. IPS e.max® delivers an unmatched combination of translucency, strength, and natural-looking aesthetics for front and visible teeth.',
    badge: 'Premium',
  },
  {
    title: 'Porcelain & Zirconia',
    sub: 'Back & Side Teeth',
    desc: 'Perfect for less visible back and side teeth. Zirconia offers exceptional durability and strength while maintaining excellent color-matching qualities for a seamless smile.',
    badge: 'Durable',
  },
];

const REVIEWS = [
  {
    initial: 'R', name: 'Rudi Backart', year: '2020',
    text: '1 crown. 1 implant. Safely re-opened in the new norm. Dr. Slaman and staff are the best in Albuquerque when it comes to dental care and their patients comfort. I could not recommend more highly.',
  },
  {
    initial: 'M', name: 'Mark Doherty', year: '2016',
    text: 'Dr. Slaman and his staff are second to none. Dr. Slaman has improved my smile and put me on a plan that improved my overall oral health and will have me keep my own teeth for decades to come.',
  },
];

const RELATED = [
  { label: 'Dental Implants',           href: '/services/dental-implants' },
  { label: 'Dental Crowns',             href: '/services/dental-crowns' },
  { label: 'Bone Grafting',             href: '/services/bone-grafting' },
  { label: 'Restorative Dentistry',     href: '/services/restorative' },
  { label: 'Dentures',                  href: '/services/dentures' },
  { label: 'Full Mouth Reconstruction', href: '/services/full-mouth-reconstruction' },
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
   DENTAL BRIDGES PAGE
───────────────────────────────────────── */
export default function DentalBridges() {
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
            Dental<br /><em>Bridges</em>
          </h1>
          <p className="ab-banner-body">
            Missing teeth result in noticeable gaps in your smile and can decrease your ability to bite, chew, and speak properly. A customized dental bridge can bring your smile back to life — improving your appearance, oral health, and quality of life.
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
            src="/65670.jpg"
            alt="Dr. Slaman's modern dental practice interior"
            loading="eager"
          />
          <div className="ab-banner-chip">
            <strong>10+</strong>
            <span>Years Average Bridge Lifespan with proper care</span>
          </div>
        </div>
      </section>



      {/* ══════════════════════════════════
          S2 — ADVANTAGES  (3-col cards)
      ══════════════════════════════════ */}
      <section className="db-wrap db-advantages-section">
        <div className="db-advantages-header sr">
          <p className="sec-tag">The Impact of Missing Teeth</p>
          <h2 className="sec-h">
            Why Should I Replace<br /><em>My Missing Teeth?</em>
          </h2>
          <p className="sec-body" >
            Millions of people lose some or all of their teeth over time due to dental
            decay, injuries, or disease. Replacing missing teeth can dramatically improve
            multiple aspects of your daily life and long-term oral health.
          </p>
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
              </div>
              <h3 className="db-advantage-title">{a.title}</h3>
              <p className="db-advantage-desc">{a.desc}</p>
            </div>
          ))}
        </div>
      </section>

      

      {/* ══════════════════════════════════
          S3 — WHY DR. SLAMAN  (dark split)
          UNIQUE: Dr. portrait
      ══════════════════════════════════ */}
      <section className="dbridge-dr-section">
        <div className="dbridge-dr-photo sr-left">
          <img
            src="/original_DrSlaman.jpg"
            alt="Dr. James Slaman — Award-winning Albuquerque dentist"
          />
          <div className="dbridge-dr-overlay" />
          <div className="dbridge-dr-badge">
            <strong>Dr. James Slaman</strong>
            <span>DDS, PC · Albuquerque Native</span>
          </div>
        </div>

        <div className="dbridge-dr-copy sr-right">
          <p className="sec-tag" style={{ color: 'var(--c-sand)' }}>Albuquerque's Top Dentist</p>
          <h2 className="sec-h" style={{ color: '#fff' }}>
            Why Choose<br /><em style={{ color: 'var(--c-sand)' }}>Albuquerque's Top Dentist?</em>
          </h2>
          <p className="sec-body" style={{ color: 'rgba(245,240,232,.58)' }}>
            Albuquerque native Dr. James Slaman is regarded as the best cosmetic dentist
            by his fellow dental professionals. He's won many local "Top Dentist" awards
            and volunteers his dentistry skills throughout New Mexico.
          </p>
          <p className="sec-body" style={{ color: 'rgba(245,240,232,.58)' }}>
            Dr. Slaman is a dentistry perfectionist who isn't satisfied until his patients'
            dental bridges look, feel, and function just like healthy, natural teeth. He is
            skilled in the use of state-of-the-art technology, enabling him to diagnose
            issues more accurately, plan treatment more effectively, and improve comfort,
            recovery, and outcomes.
          </p>

          <div className="dbridge-dr-awards">
            {['Top Dentist Award Winner', 'Community Volunteer', 'State-of-the-Art Technology', '30+ Years Experience'].map((a) => (
              <div className="dbridge-dr-award" key={a}>
                <span className="dbridge-dr-award-dot" />
                <span>{a}</span>
              </div>
            ))}
          </div>

          <div className="dbridge-dr-cta">
            <p className="dbridge-dr-phone"><a href="tel:5052268598">(505) 226-8598</a></p>
            <a href="/doctor" className="btn btn-fill">Meet Dr. Slaman</a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          S4 — REVIEWS
      ══════════════════════════════════ */}
      <section className="dbridge-reviews-section">
        <div className="dbridge-reviews-header sr">
          <div className='dbridge-reviews-header-content-box'>
            <p className="sec-tag">Patient Reviews</p>
            <h2 className="sec-h">
              "The Best in Albuquerque<br /><em>for Dental Care"</em>
            </h2>
          </div>
          <a href="https://maps.google.com/maps?cid=13452876912051634118"
            target="_blank" rel="noopener noreferrer"
            className="btn btn-line">
            View All on Google →
          </a>
        </div>
        <div className="dbridge-reviews-grid">
          {REVIEWS.map((r) => (
            <div className="dbridge-review-card sr" key={r.name}>
              <div className="dbridge-review-stars">★★★★★</div>
              <p className="dbridge-review-text">&ldquo;{r.text}&rdquo;</p>
              <div className="dbridge-review-person">
                <div className="dbridge-review-avatar">{r.initial}</div>
                <div>
                  <div className="dbridge-review-name">{r.name}</div>
                  <div className="dbridge-review-year">Albuquerque, NM · {r.year}</div>
                </div>
                <span className="dbridge-review-via">Google</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════
          S5 — TYPES + TRADITIONAL PROCESS
          BG UNIQUE: dental lab / ceramics
      ══════════════════════════════════ */}
      <section className="dbridge-types-section">
        <div className="dbridge-types-header sr">
          <p className="sec-tag">Your Options</p>
          <h2 className="sec-h">
            Types of<br /><em>Dental Bridges</em>
          </h2>
          <p className="sec-body" style={{ maxWidth: '52ch' }}>
            Dr. Slaman offers two kinds of superior-quality bridges to his patients based
            on individual dental health goals. Before each procedure, Dr. Slaman will
            administer a numbing anesthetic, or if requested, oral sedation, so you'll be
            pain-free and relaxed.
          </p>
        </div>

        {/* Traditional Bridge */}
        <div className="dbridge-bridge-block" id="traditional">
          <div className="dbridge-bridge-label sr">
            <span className="dbridge-bridge-label-badge">Option 1</span>
            <h3 className="dbridge-bridge-label-title">Traditional Bridges</h3>
            <p className="dbridge-bridge-label-sub">Attached to your natural abutment teeth</p>
          </div>

          <div className="dbridge-bridge-content">
            <div className="dbridge-bridge-copy sr-left">
              <p className="sec-body">
                Traditional dental bridges are attached directly to your natural teeth.
                A realistic dental crown is placed on either end of the bridge with a full
                replacement tooth in the middle. The replacement tooth or span of teeth is
                known as a pontic tooth.
              </p>
              <div className="dbridge-trad-steps">
                {TRAD_STEPS.map((s, i) => (
                  <div className="dbridge-trad-step sr" key={s.num} style={{ transitionDelay: `${i * 0.09}s` }}>
                    <div className="dbridge-trad-step-num">{s.num}</div>
                    <div className="dbridge-trad-step-connector">
                      <div className="dbridge-trad-step-dot" />
                      {i < TRAD_STEPS.length - 1 && <div className="dbridge-trad-step-line" />}
                    </div>
                    <div className="dbridge-trad-step-body">
                      <h4 className="dbridge-trad-step-title">{s.title}</h4>
                      <p className="dbridge-trad-step-desc">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <a href="#dbridge-contact" className="btn btn-fill" style={{ marginTop: '1.4rem' }}>
                Request a Consultation →
              </a>
            </div>

            <div className="dbridge-bridge-photo sr-right">
              <img
                src="/bridge-800x600.jpg"
                alt="Traditional dental bridge ceramics and fabrication"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          S6 — IMPLANT-SUPPORTED BRIDGE
          UNIQUE: titanium implant model
      ══════════════════════════════════ */}
      <section className="dbridge-implant-section" id="implant">
        <div className="dbridge-implant-photo sr-left">
          <img
            src="/dental-bridge-implants.webp"
            alt="Implant-supported dental bridge titanium post"
          />
          <div className="dbridge-implant-overlay" />
          <div className="dbridge-implant-badge">
            <strong>Implant-Supported</strong>
            <span>Stronger &amp; longer-lasting than traditional bridges</span>
          </div>
        </div>

        <div className="dbridge-implant-copy sr-right">
          <span className="dbridge-implant-option-tag">Option 2</span>
          <p className="sec-tag" style={{ color: 'var(--c-sand)' }}>Premium Solution</p>
          <h2 className="sec-h" style={{ color: '#fff' }}>
            Implant-Supported<br /><em style={{ color: 'var(--c-sand)' }}>Bridges</em>
          </h2>
          <p className="sec-body" style={{ color: 'rgba(245,240,232,.58)' }}>
            If you're missing up to three teeth in a row, an implant-supported bridge may
            be recommended. Bridges that are implant-supported are considered{' '}
            <strong style={{ color: 'rgba(245,240,232,.8)' }}>
              stronger and longer-lasting than traditional ones.
            </strong>
          </p>

          <div className="dbridge-implant-steps">
            {IMPLANT_STEPS.map((step, i) => (
              <div className="dbridge-implant-step sr" key={step.appt} style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="dbridge-implant-step-header">
                  <strong className="dbridge-implant-step-appt">{step.appt}</strong>
                </div>
                <ul className="dbridge-implant-step-list">
                  {step.items.map((item, j) => (
                    <li key={j}>
                      <span className="dbridge-implant-step-dot" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <a href="/services/dental-implants" className="btn btn-fill"
            style={{ marginTop: '.8rem', alignSelf: 'flex-start' }}>
            Learn More About Dental Implants →
          </a>
        </div>
      </section>

      {/* ══════════════════════════════════
          S7 — BRIDGE MATERIALS
          UNIQUE: porcelain/zirconia close-up
      ══════════════════════════════════ */}
      <section className="dbridge-wrap dbridge-materials-section">
        <div className="dbridge-materials-header sr">
          <p className="sec-tag">The Best Materials</p>
          <h2 className="sec-h">
            Dental Bridge<br /><em>Materials</em>
          </h2>
          <p className="sec-body" style={{ maxWidth: '52ch' }}>
            Dr. Slaman only uses high-quality, natural-looking materials known for their
            lifelike appearance, strength, and long-lasting durability.
          </p>
        </div>

        <div className="dbridge-materials-layout">
          <div className="dbridge-materials-cards">
            {MATERIALS.map((m, i) => (
              <div className="dbridge-material-card sr" key={m.title} style={{ transitionDelay: `${i * 0.14}s` }}>
                <div className="dbridge-material-top">
                  <span className="dbridge-material-badge">{m.badge}</span>
                </div>
                <h3 className="dbridge-material-title">{m.title}</h3>
                <p className="dbridge-material-sub">{m.sub}</p>
                <p className="dbridge-material-desc">{m.desc}</p>
              </div>
            ))}
          </div>

          <div className="dbridge-materials-photo sr-right">
            <img
              src="/photo-1516841273335-e39b37888115.jpg"
              alt="High-quality dental porcelain and zirconia materials"
            />
            <div className="dbridge-materials-photo-deco">
              <strong>IPS e.max®</strong>
              <span>State-of-the-art, most lifelike material available</span>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          S8 — INSURANCE & FINANCING
          UNIQUE: financial planning document
      ══════════════════════════════════ */}
      <section className="dbridge-insurance-section">
        <div className="dbridge-insurance-copy sr-left">
          <p className="sec-tag">Affordability</p>
          <h2 className="sec-h">
            Insurance Coverage<br /><em>and Financing</em>
          </h2>
          <p className="sec-body">
            <strong>Most insurance plans do cover dental bridges,</strong> but not the
            cost of dental implants. Dr. Slaman's warm, knowledgeable staff can do the
            legwork for you and find out your exact coverage.
          </p>
          <p className="sec-body">
            Dr. Slaman believes financial constraints should never get in the way of
            having a first-class smile. That's why we offer multiple ways to make your
            treatment affordable.
          </p>

          <div className="dbridge-financing-cards">
            <div className="dbridge-financing-card">
              <span className="dbridge-financing-ico">
                <img src="/insurance.png" alt="" />
              </span>
              <div>
                <strong>Insurance Accepted</strong>
                <p>Most dental insurance plans cover bridges. Our staff handles verification so you know exactly what's covered before treatment begins.</p>
              </div>
            </div>
            <div className="dbridge-financing-card">
              <span className="dbridge-financing-ico">
                <img src="/credit-card.png" alt="" />
              </span>
              <div>
                <strong>CareCredit® Financing</strong>
                <p>We offer affordable financing through CareCredit®, allowing you to break treatment costs into manageable, low-interest monthly payments.</p>
              </div>
            </div>
            <div className="dbridge-financing-card">
              <span className="dbridge-financing-ico">
                <img src="/plan.png" alt="" />
              </span>
              <div>
                <strong>In-Office Payment Plans</strong>
                <p>Convenient in-office payment plans for qualifying patients — tailored to your unique budget so you can get the care you need today.</p>
              </div>
            </div>
          </div>

          <a href="#dbridge-contact" className="btn btn-fill" style={{ marginTop: '1.2rem' }}>
            Ask About Your Coverage →
          </a>
        </div>

        <div className="dbridge-insurance-photo sr-right">
          <img
            src="/511.jpg"
            alt="Dental insurance and financing options"
          />
          <div className="dbridge-insurance-overlay" />
          <div className="dbridge-insurance-chip">
            <strong>Insurance Covered</strong>
            <span>Most plans cover traditional dental bridges</span>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          S9 — RELATED SERVICES (dark)
      ══════════════════════════════════ */}
      <section className="dbridge-related-section">
        <div className="dbridge-related-inner sr">
          <div className="dbridge-related-left">
            <p className="sec-tag" style={{ color: 'var(--c-sand)' }}>Explore More</p>
            <h2 className="sec-h" style={{ color: '#fff' }}>
              Related<br /><em style={{ color: 'var(--c-sand)' }}>Services</em>
            </h2>
            <p className="sec-body" style={{ color: 'rgba(245,240,232,.5)', marginTop: '.8rem', maxWidth: '28ch' }}>
              Dental bridges pair beautifully with these other restorative treatments for
              a complete oral health overhaul.
            </p>
          </div>
          <div className="dbridge-related-links">
            {RELATED.map((s) => (
              <a className="dbridge-related-link" href={s.href} key={s.label}>
                <span className="dbridge-related-dot" />
                <span className="dbridge-related-label">{s.label}</span>
                <span className="dbridge-related-arr">→</span>
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