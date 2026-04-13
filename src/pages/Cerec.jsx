import React, { useEffect } from 'react';
import './Cerec.css';
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
  { ico: '★', label: 'Single Appointment' },
  { ico: '✦', label: 'No Temporaries' },
  { ico: '◈', label: '3D Digital Impressions' },
  { ico: '◈', label: 'Porcelain Block Quality' },
];


const CEREC_STATS = [
  { num: '1', unit: 'Visit', lbl: 'Crown completed in a single appointment' },
  { num: '<1', unit: 'Hour', lbl: 'Time to mill your custom restoration' },
  { num: '0', unit: 'Temp', lbl: 'No temporary crown needed' },
  { num: '10+', unit: 'Yrs',  lbl: 'Long-lasting with proper care' },
];

const CROWN_CONDITIONS = [
  'Unable to be treated with a dental filling, inlay, or onlay',
  'Worn down due to teeth grinding and jaw clenching',
  'Cracked, chipped, or broken',
  'Discolored or stained',
  'Crooked or misshapen',
];

const BENEFITS = [
  {
    num: '01',
    title: 'Time Saver',
    desc: 'Compared to traditional dental crowns, same-day crowns save our patients valuable time. Creating a custom crown chairside means all the necessary work can be completed in a single visit.',
  },
  {
    num: '02',
    title: 'Greater Convenience',
    desc: 'With CEREC, there is no need for temporary crowns, a two-week wait for the finished crown, or additional follow-up care. All you need is one trip to our Albuquerque practice for your dental work.',
  },
  {
    num: '03',
    title: 'Affordability',
    desc: 'Many patients find the overall process of same-day crowns not just more convenient but more affordable. There\'s no need to take additional time off from work or other activities thanks to CEREC.',
  },
];

const PROCESS_STEPS = [
  {
    num: '01',
    title: 'Initial Consultation',
    desc: 'During your office visit, Dr. Slaman will first perform a thorough examination to determine the extent of any damage and the state of your oral health. Once he has determined that there is decay or damage requiring intervention, he will discuss all treatment options available to you in detail before crown placement. This process may include tooth decay removal, root canal therapy, or tooth reshaping.',
  },
  {
    num: '02',
    title: 'Taking 3-D Digital Impressions',
    desc: 'If you qualify for a same-day dental crown, Dr. Slaman will use advanced technology to take 3-D digital impressions of your teeth and gums. The images will be immediately uploaded to a computer in the exam room for easy display. As he designs and customizes your crown for a precise fit, Dr. Slaman will be able to show you the finished design before completing the restoration.',
  },
  {
    num: '03',
    title: 'Milling the Restoration',
    desc: 'Once both you and the doctor are satisfied, Dr. Slaman will send the 3-D impressions to the CEREC machine to carve your crown from a single block of porcelain that matches the natural look and shape of your tooth. Typically, it will take less than an hour for your natural-looking crown to be fabricated on-site.',
  },
  {
    num: '04',
    title: 'Placing the Finished Crown',
    desc: 'Once completed, Dr. Slaman can attach the crown in place and check your bite to ensure proper placement and a comfortable fit. In a single, convenient appointment you can leave our office with a fully restored tooth — no follow-up needed.',
  },
];

const REVIEWS = [
  {
    initial: 'C', name: 'Cliff Bates', year: '2021',
    text: 'I have been going to Dr. Slaman for around 12 years now. He and his staff are very professional. I go to where I enjoy going, and the office has a very nice atmosphere. I have never left his office without everything being just perfect and feeling good about my teeth. Dr. Slaman asked me if I ever looked for another dentist. I said, "Why would I want to?"',
  },
  {
    initial: 'S', name: 'Silvia Eastman', year: '2021',
    text: 'Oh My Goodness! You need to know that Dr. Slaman and his dental team are the best in the city. They are compassionate, and sincerely caring. My husband and I are so blessed to have found them. I do not know how they are so perfect in their craft, but they truly are. I love the entire team, especially my hygienist, Lori. Thank you, everyone.',
  },
];

const TRADITIONAL_VS_CEREC = [
  { label: 'Appointments needed',  trad: '2+', cerec: '1' },
  { label: 'Temporary crown',       trad: 'Required', cerec: 'Not needed' },
  { label: 'Wait time',             trad: '2 weeks', cerec: '< 1 hour' },
  { label: 'Digital impressions',   trad: 'Optional', cerec: 'Standard' },
  { label: 'Messy impression trays',trad: 'Often required', cerec: 'Eliminated' },
  { label: 'Time off work',         trad: 'Multiple days', cerec: 'Same day' },
];

const RELATED = [
  { label: 'Dental Crowns',         href: '/services/dental-crowns' },
  { label: 'Dental Implants',       href: '/services/dental-implants' },
  { label: 'Dental Bridges',        href: '/services/dental-bridges' },
  { label: 'Restorative Dentistry', href: '/services/restorative' },
  { label: 'Inlays & Onlays',       href: '/services/inlays-and-onlays' },
  { label: 'Dental Technology',     href: '/dental-technology' },
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
   CEREC CROWNS PAGE
───────────────────────────────────────── */
export default function CerecCrowns() {
  useScrollReveal();

  return (
    <main>


      {/* ══════════════════════════════════
          S1 — HERO / BANNER
      ══════════════════════════════════ */}
      <section className="ab-banner-section">
        <div className="ab-banner-left">
          <p className="ab-banner-eyebrow">Same-Day Dental Technology</p>
          <h1 className="ab-banner-h1">
            CEREC®<br /><em>Crowns</em>
          </h1>
          <p className="ab-banner-body">
            A traditional dental crown takes two trips to the dentist. With CEREC®, Dr. James Slaman can prepare your tooth, take impressions, and design and place your restoration in a single appointment — without compromising quality.
          </p>
          <div className="ab-banner-badges">
            {BADGES.map((b) => (
              <span className="ab-banner-badge" key={b.label}>
                <i>{b.ico}</i> {b.label}
              </span>
            ))}
          </div>
          <div className="ab-banner-btns">
            <a href="#contact" className="btn btn-fill">Get Expert Care Today</a>
            <a href="#about-section" className="btn btn-line">Call (505) 226-8598</a>
          </div>
        </div>
        <div className="ab-banner-right">
          <img
            src="/close-up-implan.png"
            alt="Dr. Slaman's modern dental practice interior"
            loading="eager"
          />
          <div className="ab-banner-chip">
            <strong>What Does CEREC Stand For?</strong>
            <span>Chairside Economical Restoration of Esthetic Ceramics</span>
          </div>
        </div>
      </section>


      {/* STATS STRIP */}
      <div className="cerec-stats-strip">
        {CEREC_STATS.map((s, i) => (
          <div className="cerec-stat" key={i}>
            <span className="cerec-stat-num">{s.num}</span>
            <span className="cerec-stat-unit">{s.unit}</span>
            <span className="cerec-stat-lbl">{s.lbl}</span>
          </div>
        ))}
      </div>

      {/* ══════════════════════════════════
          S2 — ABOUT CEREC TECHNOLOGY  (split)
          UNIQUE: precision milling machine
      ══════════════════════════════════ */}
      <section className="cerec-about-section">
        <div className="cerec-about-copy sr-left">
          <p className="sec-tag">The Technology</p>
          <h2 className="sec-h">
            About CEREC Technology —<br /><em>A Convenient, Time-Saving Innovation</em>
          </h2>
          <p className="sec-body">
            CEREC® computer technology allows dentists to take high-quality digital
            impressions of a patient's tooth. A dentist can then create a custom dental
            crown at their office — right in the chair.
          </p>
          <p className="sec-body">
            Digital impressions of your teeth and gums are sent directly to the machine
            that will design your restoration. Your restoration will be milled on-site in
            one visit as opposed to a partner dental lab that takes two weeks to fabricate
            your restoration.
          </p>
          <p className="sec-body">
            The CEREC crown is made from an incredibly strong and durable porcelain block.
            The finished crown looks extremely lifelike and can last for many years with
            proper care.
          </p>

          <div className="cerec-about-highlight">
            <div className="cerec-about-highlight-icon">💡</div>
            <p>
              Thanks to CEREC dental technology, you can have a custom crown created and
              placed in just a single visit to the dentist.
            </p>
          </div>

          <a href="#cerec-contact" className="btn btn-fill" style={{ marginTop: '1.2rem' }}>
            Schedule Your CEREC Appointment
          </a>
        </div>

        <div className="cerec-about-photo sr-right">
          <img
            src="/19647.jpg"
            alt="CEREC milling machine and technology"
          />
          <div className="cerec-about-overlay" />
          <div className="cerec-about-badge">
            <strong>On-Site Milling</strong>
            <span>Your crown is crafted right in the exam room</span>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          S3 — WHAT IS A DENTAL CROWN  (split dark)
          UNIQUE: dental crown close-up porcelain
      ══════════════════════════════════ */}
      <section className="cerec-crown-section">
        <div className="cerec-crown-photo sr-left">
          <img
            src="/original_dental-crowns-hero-mobile.jpg"
            alt="Close-up of porcelain dental crown"
          />
          <div className="cerec-crown-overlay" />
          <div className="cerec-crown-badge">
            <strong>Ceramic Porcelain Block</strong>
            <span>Comparable strength to traditional lab crowns</span>
          </div>
        </div>

        <div className="cerec-crown-copy sr-right">
          <p className="sec-tag" style={{ color: 'var(--c-sand)' }}>Crown Basics</p>
          <h2 className="sec-h" style={{ color: '#fff' }}>
            What Is a<br /><em style={{ color: 'var(--c-sand)' }}>Dental Crown?</em>
          </h2>
          <p className="sec-body" style={{ color: 'rgba(245,240,232,.58)', }}>
            A dental crown is a cap that is placed over damaged teeth to reinforce the
            structural integrity of the tooth. Crowns are typically made from porcelain,
            ceramic, zirconia, or metal. A CEREC dental crown is milled from a full block
            of ceramic porcelain, which is of comparable strength to the materials listed above.
          </p>

          <div className="cerec-crown-conditions">
            <p className="cerec-crown-conditions-label">
              This type of restoration helps strengthen teeth that are:
            </p>
            <ul>
              {CROWN_CONDITIONS.map((c, i) => (
                <li key={i} className="cerec-crown-condition">
                  <span className="cerec-crown-dot" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>

          <a href="/services/dental-crowns" className="cerec-link">
            Learn More About Dental Crowns →
          </a>
        </div>
      </section>

      {/* ══════════════════════════════════
          S4 — BENEFITS  (full-bleed dark)
          UNIQUE: modern clinic interior
      ══════════════════════════════════ */}
      <section className="cerec-benefits-section">
        <div className="cerec-benefits-bg" />
        <div className="cerec-benefits-overlay" />
        <div className="cerec-benefits-inner">
          <div className="cerec-benefits-header sr">
            <p className="sec-tag" style={{ color: 'var(--c-sand)' }}>Why CEREC®?</p>
            <h2 className="sec-h" style={{ color: '#fff' }}>
              The Benefits of<br /><em style={{ color: 'var(--c-sand)' }}>CEREC Crowns</em>
            </h2>
          </div>

          <div className="cerec-benefits-grid">
            {BENEFITS.map((b, i) => (
              <div className="cerec-benefit-card sr" key={b.num} style={{ transitionDelay: `${i * 0.14}s` }}>
                <div className="cerec-benefit-top">
                  <span className="cerec-benefit-num">{b.num}</span>
                </div>
                <h3 className="cerec-benefit-title">{b.title}</h3>
                <p className="cerec-benefit-desc">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          S5 — REVIEWS
      ══════════════════════════════════ */}
      <section className="cerec-reviews-section">
        <div className="cerec-reviews-header sr">
          <div className='cerec-reviews-header-content-box'>
            <p className="sec-tag">Patient Reviews</p>
            <h2 className="sec-h">
              "The Best in the City —<br /><em>A Trusted Dentist in Albuquerque"</em>
            </h2>
          </div>
          <a href="https://maps.google.com/maps?cid=13452876912051634118"
            target="_blank" rel="noopener noreferrer"
            className="btn btn-line">
            View All on Google →
          </a>
        </div>
        <div className="cerec-reviews-grid">
          {REVIEWS.map((r) => (
            <div className="cerec-review-card sr" key={r.name}>
              <div className="cerec-review-stars">★★★★★</div>
              <p className="cerec-review-text">&ldquo;{r.text}&rdquo;</p>
              <div className="cerec-review-person">
                <div className="cerec-review-avatar">{r.initial}</div>
                <div>
                  <div className="cerec-review-name">{r.name}</div>
                  <div className="cerec-review-year">Albuquerque, NM · {r.year}</div>
                </div>
                <span className="cerec-review-via">Google</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════
          S6 — THE CEREC PROCESS  (dark timeline)
          UNIQUE: surgical lab tools / dark bg
      ══════════════════════════════════ */}
      <section className="cerec-process-section">
        <div className="cerec-process-bg" />
        <div className="cerec-process-overlay" />

        <div className="cerec-process-inner">
          <div className="cerec-process-header sr">
            <p className="sec-tag" style={{ color: 'var(--c-sand)' }}>Step by Step</p>
            <h2 className="sec-h" style={{ color: '#fff' }}>
              The CEREC Crown<br /><em style={{ color: 'var(--c-sand)' }}>Process</em>
            </h2>
            <p className="sec-body" style={{ color: 'rgba(245,240,232,.55)', maxWidth: '50ch' }}>
              Let's walk you through the CEREC process step-by-step. Thanks to CEREC
              technology, you can have a custom dental crown created and placed in just a
              single visit to the dentist.
            </p>
          </div>

          <div className="cerec-steps">
            {PROCESS_STEPS.map((s, i) => (
              <div className="cerec-step sr" key={s.num} style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="cerec-step-num">{s.num}</div>
                <div className="cerec-step-connector">
                  <div className="cerec-step-dot" />
                  {i < PROCESS_STEPS.length - 1 && <div className="cerec-step-line" />}
                </div>
                <div className="cerec-step-body">
                  <h3 className="cerec-step-title">{s.title}</h3>
                  <p className="cerec-step-desc">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="cerec-process-cta sr">
            <a href="#cerec-contact" className="btn btn-fill">
              Get In Touch for Expert Care →
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          S7 — TRADITIONAL vs CEREC  (split)
          UNIQUE: dental comparison / modern office
      ══════════════════════════════════ */}
      <section className="cerec-compare-section">
        <div className="cerec-compare-photo sr-left">
          <img
            src="/15279.jpg"
            alt="Dr. Slaman with advanced dental technology"
          />
          <div className="cerec-compare-overlay" />
          <div className="cerec-compare-badge">
            <strong>CEREC® vs Traditional</strong>
            <span>See the difference at a glance</span>
          </div>
        </div>

        <div className="cerec-compare-copy sr-right">
          <p className="sec-tag">The Comparison</p>
          <h2 className="sec-h">
            Traditional Crown<br /><em>vs. CEREC® Crown</em>
          </h2>
          <p className="sec-body">
            See why so many Albuquerque patients are choosing the CEREC® same-day crown
            experience over the traditional two-appointment process.
          </p>

          <div className="cerec-compare-table">
            <div className="cerec-compare-table-header">
              <span />
              <span className="cerec-compare-col-label cerec-compare-col-trad">Traditional</span>
              <span className="cerec-compare-col-label cerec-compare-col-cerec">CEREC®</span>
            </div>
            {TRADITIONAL_VS_CEREC.map((row, i) => (
              <div className="cerec-compare-row" key={i}>
                <span className="cerec-compare-row-label">{row.label}</span>
                <span className="cerec-compare-row-trad">{row.trad}</span>
                <span className="cerec-compare-row-cerec">{row.cerec}</span>
              </div>
            ))}
          </div>

          <a href="#cerec-contact" className="btn btn-fill" style={{ marginTop: '1.4rem' }}>
            Request a CEREC Consultation →
          </a>
        </div>
      </section>

      {/* ══════════════════════════════════
          S8 — RELATED SERVICES  (dark band)
      ══════════════════════════════════ */}
      <section className="cerec-related-section">
        <div className="cerec-related-inner sr">
          <div className="cerec-related-left">
            <p className="sec-tag" style={{ color: 'var(--c-sand)' }}>Explore More</p>
            <h2 className="sec-h" style={{ color: '#fff' }}>
              Related<br /><em style={{ color: 'var(--c-sand)' }}>Services</em>
            </h2>
            <p className="sec-body" style={{ color: 'rgba(245,240,232,.5)', marginTop: '.8rem', maxWidth: '28ch' }}>
              CEREC® technology supports a wide range of restorative treatments at our
              Albuquerque office.
            </p>
          </div>
          <div className="cerec-related-links">
            {RELATED.map((s) => (
              <a className="cerec-related-link" href={s.href} key={s.label}>
                <span className="cerec-related-dot" />
                <span className="cerec-related-label">{s.label}</span>
                <span className="cerec-related-arr">→</span>
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