import React, { useEffect } from 'react';
import './Teethwhitening.css';
import Ratebar from "../components/Ratebar";
import Contactform from "../components/Contactform";
import Officesection from "../components/Officesection";
import Doctorpanel from "../components/Doctorpanel";

/* ─────────────────────────────────────────
   IMAGE MAP — every section has its own
   unique Unsplash photo, never repeated
───────────────────────────────────────── */
// S1  HERO          → bright confident smile close-up
// S2  OPTIONS       → in-office treatment chair
// S3  OTC COMPARE   → store shelf / pharmacy
// S4  VIDEO / CTA   → Dr. Slaman portrait
// S5  SAFETY        → dental exam / gloves
// S6  INSURANCE     → CareCredit / payment
// S7  INTERNAL DISCOLORATION → veneers/bonding
// S8  SENSITIVITY   → woman touching cheek
// S9  TIMELINE BG   → clean white dental office
// S10 MAINTENANCE   → healthy lifestyle / brushing
// S11 DR. PANEL     → professional headshot different
// All images are distinct — zero cross-section repeats

/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */


const BADGES = [
  { ico: '★', label: '1-Hour Results' },
  { ico: '✦', label: '15% Peroxide Strength' },
  { ico: '◈', label: 'Sensitivity-Safe Options' },
    { ico: '◈', label: 'Take-Home Available' },
];



const OPTIONS = [
  {
    num: '01',
    badge: 'In-Office',
    title: 'Zoom!® Whitening',
    tag: 'Quick · Convenient · Effective',
    body: 'Zoom! in-office whitening treatment is a popular choice because patients can achieve their final results in about an hour. Dr. Slaman will cover your teeth in a hydrogen peroxide-based whitening solution. A special blue light will activate the gel, setting off an oxidation reaction. Three 15-minute rounds of whitening are usually sufficient for stunning results.',
    stat: '8 Shades Whiter',
    statSub: 'in a single visit',
    img: '/original_zoom-box-2024.jpg',
  },
  {
    num: '02',
    badge: 'Take-Home',
    title: 'Opalescence Go™ Kit',
    tag: 'Custom-Fit · Professional Strength',
    body: 'Dr. Slaman will supply you with a set of whitening trays custom-made at our Albuquerque dental office to precisely fit your teeth. You fill the trays with a hydrogen peroxide-based gel and wear them for a prescribed amount of time each day for up to two weeks — delivering professional-grade results from the comfort of home.',
    stat: '2 Weeks',
    statSub: 'to a noticeably brighter smile',
    img: '/original_take-home-trays-2024.jpg',
  },
];

const OTC_DOWNSIDES = [
  {
    img: "/loss.png",
    title: 'Weak Strength',
    desc: 'Most whitening toothpaste and whitening strips only contain a 3% hydrogen peroxide bleaching formula, while our in-office and home treatments use stronger 15% peroxide solutions.',
  },
  {
    img: "/imbalanced-scale.png",
    title: 'Uneven Results',
    desc: "Dr. Slaman's customized dental trays spread peroxide whitening gel evenly for uniform brightness. The one-size-fits-all trays sold in stores can cause uneven spreading and whitening.",
  },
  {
    img: "/broken-tooth.png",
    title: 'Increased Gum Irritation',
    desc: "Dr. Slaman's office treatments and custom trays protect your gums from the whitening gel. Store-bought trays can put your gums in contact with the peroxide, causing irritation.",
  },
  {
    img: "/hourglass.png",
    title: 'Longer Treatment',
    desc: 'Store-bought products like whitening toothpaste or rinses can take up to six weeks before stains begin to lighten. Dr. Slaman\'s in-office and home treatments work much faster.',
  },
];

const PROCEDURE_STEPS = [
  {
    num: '01',
    title: 'Consultation',
    desc: 'You will first have a consultation at our office in Albuquerque, NM, to determine if your teeth are healthy enough for teeth whitening and if this is the right treatment for you.',
  },
  {
    num: '02',
    title: 'Prep',
    desc: 'Your dentist will begin your whitening procedure by prepping your teeth and gums. He will place a barrier along your gum line to prevent the bleaching solution from touching your gums — reducing irritation throughout the procedure.',
  },
  {
    num: '03',
    title: 'Whitening',
    desc: 'Dr. Slaman will apply the bleaching solution to your teeth and use a blue light to activate the gel over the course of 15 minutes. The process repeats — in most cases, three 15-minute rounds are needed to see ideal results.',
  },
  {
    num: '04',
    title: 'Results',
    desc: 'Once all your rounds of whitening are complete, our dentist will remove the whitening gel and the barrier gel from your teeth and gums. Patients typically see results that are several shades whiter — a dazzling smile in as little as one appointment.',
  },
];

const MAINTENANCE_TIPS = [
  { img: "/toothbrush.png", title: 'Maintain Oral Hygiene', desc: 'Practice good at-home and professional dental hygiene, including brushing, flossing, and regular trips to the dentist to protect your investment.' },
  { img: "/healthy-food.png", title: 'Mind Staining Foods', desc: 'Try to enjoy stain-producing foods like berries and tomato sauce in moderation. Be sure to drink plenty of water with them, and brush your teeth when finished.' },
  { img: "/tooth-2.png", title: 'Schedule Touch-Ups', desc: 'Perform regular touch-ups at home, or visit our Albuquerque office for additional whitening. Dr. Slaman will advise you about how often to repeat treatments.' },
];

const FAQS = [
  {
    q: 'What are the requirements for teeth whitening treatments?',
    a: 'Good candidates for teeth whitening have surface stains, not intrinsic stains. Patients must also be in good oral health and free from tooth decay and gum disease before any cosmetic dentistry treatments.',
  },
  {
    q: 'I have veneers or other porcelain restorations. Will teeth whitening treatment work on them?',
    a: 'No. Dental veneers or dental crowns are made of porcelain and do not respond to the whitening solution like natural teeth do. If you have stained or discolored restorations, it may be time to replace them.',
  },
  {
    q: 'Can I whiten my natural teeth if I have restorations on other teeth?',
    a: 'Yes. As long as your natural teeth are healthy, your dentist can whiten them to blend with your veneers or other restorations. Many patients combine whitening with veneers in a custom smile makeover.',
  },
  {
    q: 'Does teeth whitening hurt?',
    a: "No. Teeth whitening treatment is painless. If you have sensitive teeth, be sure to let your dentist know ahead of time so he can make adjustments. Some patients may experience minor sensitivity for a few days, which should resolve quickly.",
  },
];

const REVIEWS = [
  {
    initial: 'C', name: 'Catherine A.', year: '2024',
    text: 'Our family has been going to Dr. Slaman for years. He\'s a skilled professional and cares about your comfort. The staff there is friendly, professional and customer service oriented.',
  },
  {
    initial: 'C', name: 'Cathi Gardner', year: '2024',
    text: 'Dr. Slaman is so consciousness and caring. He is almost always on time. His office is so clean and well taken care of and has the most up to date equipment. I adore his staff!!',
  },
  {
    initial: 'S', name: 'Samantha Sanchez', year: '2024',
    text: "It's hard to put into words just how wonderful Dr. Slaman and all of his staff are. I've been a patient for over 10 years and I can say they have truly changed my life for the better!",
  },
  {
    initial: 'L', name: 'Lee Maschoff', year: '2024',
    text: 'Very professional and friendly staff. Very latest in technology and procedures.',
  },
];


const RELATED = [
  { label: 'Cosmetic Dentistry',  href: '/services/cosmetic' },
  { label: 'Porcelain Veneers',   href: '/services/veneers' },
  { label: 'Smile Makeover',      href: '/services/smile-makeover' },
  { label: 'Dental Bonding',      href: '/services/dental-bonding' },
  { label: 'Gum Contouring',      href: '/services/gum-contouring' },
  { label: 'Dental Crowns',       href: '/services/dental-crowns' },
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
   TEETH WHITENING PAGE
───────────────────────────────────────── */
export default function TeethWhitening() {
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
            Teeth<br /><em>Whitening</em>
          </h1>
          <p className="ab-banner-body">
            Discolored teeth can give you an unhealthy appearance, making you hesitant to smile or laugh. Dr. James Slaman uses cutting-edge teeth whitening technology that can renew your smile, appearance, and self-esteem — helping you light up the world every time you flash your confident smile.
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
            src="/4077.jpg"
            alt="Dr. Slaman's modern dental practice interior"
            loading="eager"
          />
          <div className="ab-banner-chip">
            <strong>8× Shades Whiter</strong>
            <span>In a single Zoom!® appointment</span>
          </div>
        </div>
      </section>

     

      {/* ══════════════════════════════════
          S2 — VIDEO — Dr. Slaman explains Zoom!
          Image: Dr. portrait (unique poster)
      ══════════════════════════════════ */}
      <section className="tw-wrap tw-video-section">
        <div className="tw-video-header sr">
          <p className="sec-tag">Dr. Slaman Explains</p>
          <h2 className="sec-h">
            Zoom!® Teeth Whitening —<br /><em>Quick. Convenient. Effective.</em>
          </h2>
        </div>

        <div className="tw-video-layout">
          <div className="tw-video-wrap sr-left">
            <div className="tw-video-frame">
              <video controls
                poster="/original-teeth-whitening.jpg">
                <source
                  src="/Zoom_Whitening.mp4"
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

          <div className="tw-video-copy sr-right">
            <p className="sec-body">
              In this video, Dr. Slaman explains why he recommends the Zoom!® teeth
              whitening system to his Albuquerque patients who want to whiten teeth
              quickly, safely, and effectively.
            </p>
            <p className="sec-body">
              Whether you choose the in-office Zoom!® treatment or the custom take-home
              Opalescence Go™ kit, Dr. Slaman will walk you through every option so you
              can choose the whitening method that best suits your goals, timeline,
              and budget.
            </p>
            <a href="https://www.drslaman.com/video/index.html"
              target="_blank" rel="noopener noreferrer"
              className="tw-video-link">
              View More Videos <span>→</span>
            </a>
            <a href="#tw-contact" className="btn btn-fill" style={{ marginTop: '.6rem' }}>
              Book Your Whitening Appointment →
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          S3 — WHITENING OPTIONS
          Two alternating cards, each unique image
      ══════════════════════════════════ */}
      <section className="tw-options-section">
        <div className="tw-options-header sr">
          <p className="sec-tag">Your Choices</p>
          <h2 className="sec-h">
            Our Teeth Whitening<br /><em>Options</em>
          </h2>
        </div>

        <div className="tw-options-list">
          {OPTIONS.map((o, idx) => (
            <div
              className={`tw-option-item${idx % 2 !== 0 ? ' tw-option-item--reverse' : ''}`}
              key={o.num}
            >
              <div className="tw-option-copy">
                <span className="tw-option-ghost-num">{o.num}</span>
                <div className="tw-option-badge-row">
                  <span className="tw-option-badge">{o.badge}</span>
                  <span className="tw-option-ico">{o.ico}</span>
                </div>
                <h3 className="tw-option-title">{o.title}</h3>
                <p className="tw-option-tag">{o.tag}</p>
                <p className="tw-option-body">{o.body}</p>
                <div className="tw-option-stat">
                  <span className="tw-option-stat-num">{o.stat}</span>
                  <span className="tw-option-stat-sub">{o.statSub}</span>
                </div>
                <a href="#tw-contact" className="btn btn-fill" style={{ marginTop: '1.4rem' }}>
                  Ask About {o.badge} Whitening →
                </a>
              </div>
              <div className="tw-option-img">
                <img src={o.img} alt={o.title} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════
          S4 — OTC vs PROFESSIONAL  (dark)
          Image: pharmacy/store shelf (unique)
      ══════════════════════════════════ */}
      <section className="tw-otc-section">
        <div className="tw-otc-photo sr-left">
          <img
            src="/2148778649.jpg"
            alt="Over-the-counter vs professional whitening"
          />
          <div className="tw-otc-overlay" />
          <div className="tw-otc-badge">
            <strong>Professional</strong>
            <span>15% Peroxide Strength</span>
            <div className="tw-otc-vs">
              <span>vs</span>
              <small>OTC 3% Peroxide</small>
            </div>
          </div>
        </div>

        <div className="tw-otc-copy sr-right">
          <p className="sec-tag" style={{ color: 'var(--c-sand)' }}>The Real Difference</p>
          <h2 className="sec-h" style={{ color: '#fff' }}>
            Can't I Use<br />
            <em style={{ color: 'var(--c-sand)' }}>Over-the-Counter Products?</em>
          </h2>
          <p className="sec-body" style={{ color: 'rgba(245,240,232,.58)' }}>
            Your local market's dental care section is stocked with tooth whitening products
            that promise results without dental appointments. Unfortunately, they just don't
            work as well as professional whitening from our practice. Here's why:
          </p>

          <div className="tw-otc-reasons">
            {OTC_DOWNSIDES.map((d, i) => (
              <div className="tw-otc-reason sr" key={d.title} style={{ transitionDelay: `${i * 0.09}s` }}>
                <span className="tw-otc-reason-ico">
                    <img src={d.img} alt={d.title} />
                </span>
                <div>
                  <div className="tw-otc-reason-title">{d.title}</div>
                  <p className="tw-otc-reason-desc">{d.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <a href="#tw-contact" className="btn btn-fill" style={{ alignSelf: 'flex-start', marginTop: '1rem' }}>
            Get Professional Results →
          </a>
        </div>
      </section>

      {/* ══════════════════════════════════
          S5 — REVIEWS SET 1
      ══════════════════════════════════ */}
      <section className="tw-reviews-section">
        <div className="tw-reviews-header sr">
          <div>
            <p className="sec-tag">5-Star Reviews</p>
            <h2 className="sec-h">
              What Albuquerque Patients<br /><em>Say About Our Practice</em>
            </h2>
          </div>
          <a href="https://maps.google.com/maps?cid=13452876912051634118"
            target="_blank" rel="noopener noreferrer"
            className="btn btn-line">
            View All on Google →
          </a>
        </div>
        <div className="tw-reviews-grid">
          {REVIEWS.slice(0, 2).map((r) => (
            <div className="tw-review-card sr" key={r.name}>
              <div className="tw-review-stars">★★★★★</div>
              <p className="tw-review-text">&ldquo;{r.text}&rdquo;</p>
              <div className="tw-review-person">
                <div className="tw-review-avatar">{r.initial}</div>
                <div>
                  <div className="tw-review-name">{r.name}</div>
                  <div className="tw-review-year">Albuquerque, NM · {r.year}</div>
                </div>
                <span className="tw-review-via">Google</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════
          S6 — SAFETY  split
          Image: dental exam close-up (unique)
      ══════════════════════════════════ */}
      <section className="tw-safety-section">
        <div className="tw-safety-copy sr-left">
          <p className="sec-tag">Your Safety First</p>
          <h2 className="sec-h">
            Is Professional Tooth<br /><em>Whitening Safe?</em>
          </h2>
          <p className="sec-body" >
            Professional whitening is performed under the supervision of your dentist.
            Dr. Slaman has over 30 years of experience providing safe and effective
            treatments to his patients. Before treatment, Dr. Slaman will examine your
            mouth to ensure your teeth and gums are healthy enough for treatment.
          </p>
          <p className="sec-body">
            You can rest assured that our entire team will keep your dental health at
            the forefront, only suggesting treatments that are safe and beneficial for
            your unique dental needs.
          </p>

          {/* Insurance note */}
          <div className="tw-insurance-note">
            <div className="tw-insurance-note-label">
              <strong>Insurance &amp; Financing</strong>
            </div>
            <p>
              Teeth whitening is not covered by insurance. Dr. Slaman proudly accepts
              CareCredit® financing and in-office payment plans to make whitening more
              accessible to our Albuquerque patients.
            </p>
            <a href="#tw-contact" className="tw-insurance-link">
              Learn More About Financing →
            </a>
          </div>

          <a href="#tw-contact" className="btn btn-fill" style={{ marginTop: '1rem' }}>
            Request an Initial Consultation
          </a>
        </div>

        <div className="tw-safety-photo sr-right">
          <img
            src="/2148380356.jpg"
            alt="Professional dental whitening safety"
          />
          <div className="tw-safety-overlay" />
          <div className="tw-safety-chip">
            <strong>High Standards</strong>
            <span>Average is not good enough for Dr. Slaman</span>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          S7 — INTERNAL DISCOLORATION
          Image: porcelain / veneers (unique)
      ══════════════════════════════════ */}
      <section className="tw-wrap tw-internal-section">
        <div className="tw-internal-inner sr">
          <div className="tw-internal-copy">
            <p className="sec-tag">When Whitening Isn't Enough</p>
            <h2 className="sec-h">
              What About Internal<br /><em>Tooth Discoloration?</em>
            </h2>
            <p className="sec-body">
              Teeth whitening systems — both professional and over-the-counter — only work
              on external tooth stains, not discoloration beneath your enamel. If external
              treatments can't whiten your teeth and give you the smile of your dreams,
              Dr. Slaman offers effective options such as porcelain veneers, crowns, and
              dental bonding.
            </p>
            <p className="sec-body">
              During your initial consultation, Dr. Slaman will examine your teeth and
              discuss your history and cosmetic goals to help you determine if tooth
              whitening is right for you, or if another approach would serve you better.
            </p>
            <div className="tw-internal-links">
              <a href="/services/veneers" className="tw-internal-link">
                <span className="tw-internal-link-dot" />
                Porcelain Veneers
                <span className="tw-internal-link-arr">→</span>
              </a>
              <a href="/services/dental-crowns" className="tw-internal-link">
                <span className="tw-internal-link-dot" />
                Dental Crowns
                <span className="tw-internal-link-arr">→</span>
              </a>
              <a href="/services/dental-bonding" className="tw-internal-link">
                <span className="tw-internal-link-dot" />
                Dental Bonding
                <span className="tw-internal-link-arr">→</span>
              </a>
            </div>
          </div>

          <div className="tw-internal-photo">
            <img
              src="/original_stained-front-tooth.jpg"
              alt="Internal discoloration alternatives"
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          S8 — SENSITIVITY  split
          Image: woman touching cheek (unique)
      ══════════════════════════════════ */}
      <section className="tw-sensitivity-section">
        <div className="tw-sensitivity-photo sr-left">
          <img
            src="/17777.jpg"
            alt="Tooth sensitivity treatment"
          />
          <div className="tw-sensitivity-overlay" />
        </div>

        <div className="tw-sensitivity-copy sr-right">
          <p className="sec-tag">Sensitive Teeth?</p>
          <h2 className="sec-h">
            Can I Still Undergo<br /><em>Whitening Treatment?</em>
          </h2>
          <p className="sec-body" >
            <strong>Yes.</strong> It is important to discuss these concerns with Dr. Slaman
            during your initial consultation so he can tailor treatment to fit your needs
            and account for tooth sensitivity.
          </p>
          <p className="sec-body">
            This may mean adjusting how long he leaves the whitening solution on your teeth
            or adjusting the strength of the bleaching solution. Your comfort is important
            to us. We will monitor you throughout the entire process, and we will do
            everything we can to ensure you do not feel any discomfort during treatment.
          </p>

          <blockquote className="tw-sensitivity-quote">
            <p>
              "Experience a dazzlingly whiter smile in as little as an hour with a
              professional whitening treatment conducted by Dr. James Slaman."
            </p>
          </blockquote>

          <a href="#tw-contact" className="btn btn-fill" style={{ marginTop: '.6rem' }}>
            Discuss Sensitivity Options →
          </a>
        </div>
      </section>

      {/* ══════════════════════════════════
          S9 — TREATMENT TIMELINE  (dark process)
          BG Image: clean white dental office (unique)
      ══════════════════════════════════ */}
      <section className="tw-timeline-section">
        <div className="tw-timeline-bg" />
        <div className="tw-timeline-overlay" />

        <div className="tw-timeline-inner">
          <div className="tw-timeline-header sr">
            <p className="sec-tag" style={{ color: 'var(--c-sand)' }}>Step by Step</p>
            <h2 className="sec-h" style={{ color: '#fff' }}>
              Teeth Whitening<br /><em style={{ color: 'var(--c-sand)' }}>Treatment Timeline</em>
            </h2>
            <p className="sec-body" style={{ color: 'rgba(245,240,232,.55)' }}>
              Experience a dazzlingly whiter smile in as little as an hour with a
              professional whitening treatment conducted by Dr. James Slaman.
            </p>
          </div>

          <div className="tw-steps">
            {PROCEDURE_STEPS.map((s, i) => (
              <div className="tw-step sr" key={s.num} style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="tw-step-num">{s.num}</div>
                <div className="tw-step-connector">
                  <div className="tw-step-dot" />
                  {i < PROCEDURE_STEPS.length - 1 && <div className="tw-step-line" />}
                </div>
                <div className="tw-step-body">
                  <h3 className="tw-step-title">{s.title}</h3>
                  <p className="tw-step-desc">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="tw-timeline-cta sr">
            <a href="#tw-contact" className="btn btn-fill">
              Schedule Your Whitening Appointment
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          S10 — REVIEWS SET 2
      ══════════════════════════════════ */}
      <section className="tw-reviews-section tw-reviews-section--warm">
        <div className="tw-reviews-header sr">
          <div>
            <p className="sec-tag">More Happy Patients</p>
            <h2 className="sec-h">
              "They Have Truly Changed<br /><em>My Life for the Better!"</em>
            </h2>
          </div>
          <a href="https://maps.google.com/maps?cid=13452876912051634118"
            target="_blank" rel="noopener noreferrer"
            className="btn btn-line">
            View All on Google →
          </a>
        </div>
        <div className="tw-reviews-grid">
          {REVIEWS.slice(2, 4).map((r) => (
            <div className="tw-review-card sr" key={r.name}>
              <div className="tw-review-stars">★★★★★</div>
              <p className="tw-review-text">&ldquo;{r.text}&rdquo;</p>
              <div className="tw-review-person">
                <div className="tw-review-avatar">{r.initial}</div>
                <div>
                  <div className="tw-review-name">{r.name}</div>
                  <div className="tw-review-year">Albuquerque, NM · {r.year}</div>
                </div>
                <span className="tw-review-via">Google</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════
          S11 — MAINTENANCE TIPS
          Image: healthy lifestyle / brushing (unique)
      ══════════════════════════════════ */}
      <section className="tw-maintenance-section">
        <div className="tw-maintenance-photo sr-left">
          <img
            src="/2147855460.jpg"
            alt="Maintaining teeth whitening results"
          />
          <div className="tw-maintenance-overlay" />
          <div className="tw-maintenance-stat">
            <span className="tw-maintenance-stat-num">Many</span>
            <span className="tw-maintenance-stat-lbl">Years of Bright Results</span>
            <span className="tw-maintenance-stat-sub">with proper care</span>
          </div>
        </div>

        <div className="tw-maintenance-copy sr-right">
          <p className="sec-tag">Keep Your Results</p>
          <h2 className="sec-h">
            Maintaining Your<br /><em>Whitening Results</em>
          </h2>
          <p className="sec-body" >
            After teeth whitening, your smile could be several shades lighter, giving you
            an overall younger, rejuvenated appearance. Keep in mind that whitening will
            not prevent future stains from developing. However, proper care can extend
            the results of your treatment.
          </p>

          <div className="tw-maintenance-cards">
            {MAINTENANCE_TIPS.map((m, i) => (
              <div className="tw-maintenance-card sr" key={m.title}
                style={{ transitionDelay: `${i * 0.1}s` }}>
                <span className="tw-maintenance-ico">
                    <img src={m.img} alt={m.title} />
                </span>
                <div>
                  <div className="tw-maintenance-title">{m.title}</div>
                  <p className="tw-maintenance-desc">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="tw-maintenance-note">
            <strong>With this level of care, your enhanced smile could last for many years.</strong>
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════
          S12 — FAQ  (dark)
      ══════════════════════════════════ */}
      <section className="tw-faq-section">
        <div className="tw-faq-header sr">
          <p className="sec-tag" style={{ color: 'var(--c-sand)' }}>Common Questions</p>
          <h2 className="sec-h" style={{ color: '#fff' }}>
            Frequently Asked Questions<br /><em style={{ color: 'var(--c-sand)' }}>About Teeth Whitening</em>
          </h2>
        </div>

        <div className="tw-faq-grid">
          {FAQS.map((f, i) => (
            <div className="tw-faq-item sr" key={i} style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="tw-faq-q-row">
                <span className="tw-faq-q-ico">Q.</span>
                <h3 className="tw-faq-q">{f.q}</h3>
              </div>
              <div className="tw-faq-a-row">
                <span className="tw-faq-a-ico">A.</span>
                <p className="tw-faq-a">{f.a}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="tw-faq-cta sr">
          <p className="sec-body" style={{ color: 'rgba(245,240,232,.55)', textAlign: 'center' }}>
            Have more questions? We're happy to help.
          </p>
          <div className="tw-faq-cta-btns">
            <a href="#tw-contact" className="btn btn-fill">Message Us</a>
            <a href="tel:5052268598" className="btn btn-line"
              style={{ color: '#fff', borderColor: 'rgba(255,255,255,.3)' }}>
              Call (505) 226-8598
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          S13 — RELATED SERVICES  (dark band)
      ══════════════════════════════════ */}
      <section className="tw-related-section">
        <div className="tw-related-inner sr">
          <div className="tw-related-left">
            <p className="sec-tag" style={{ color: 'var(--c-sand)' }}>Explore More</p>
            <h2 className="sec-h" style={{ color: '#fff' }}>
              Related<br /><em style={{ color: 'var(--c-sand)' }}>Services</em>
            </h2>
            <p className="sec-body" style={{ color: 'rgba(245,240,232,.5)'}}>
              Teeth whitening pairs beautifully with these other cosmetic treatments for
              a complete smile transformation.
            </p>
          </div>
          <div className="tw-related-links">
            {RELATED.map((s) => (
              <a className="tw-related-link" href={s.href} key={s.label}>
                <span className="tw-related-dot" />
                <span className="tw-related-label">{s.label}</span>
                <span className="tw-related-arr">→</span>
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