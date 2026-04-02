import React, { useEffect } from 'react';
import './Gumcontouring.css';
import Ratebar from "../components/Ratebar";
import Contactform from "../components/Contactform";
import Officesection from "../components/Officesection";
import Doctorpanel from "../components/Doctorpanel";

/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */
const HERO_CHIPS = [
  { ico: '⚡', label: 'Laser Precision' },
  { ico: '😌', label: 'Virtually Pain-Free' },
  { ico: '🔄', label: 'Faster Recovery' },
  { ico: '🎨', label: 'Dramatic Results' },
];

const BADGES = [
  { ico: '★', label: 'Laser Precision' },
  { ico: '✦', label: 'Virtually Pain-Free' },
  { ico: '◈', label: 'Faster Recovery' },
    { ico: '◈', label: 'Dramatic Results' },
];

const BASICS = [
  {
    ico: '🔬',
    title: 'Reshaping the Gums',
    desc: 'Gum contouring safely reshapes your gums to produce a healthy and beautiful frame for your teeth. Once performed with a scalpel, advanced technology now allows us to complete the sculpting process with a soft tissue dental laser — safer, faster, and with minimal recovery.',
  },
  {
    ico: '✨',
    title: 'Improving Smile Aesthetics',
    desc: 'Thanks to periodontal contouring, we can improve the tooth-to-gum ratio of your smile. This leads to a more balanced, proportionate appearance. Treatment can also be combined with veneers or whitening for a more comprehensive smile makeover.',
  },
];

const CANDIDATES = [
  {
    num: '01',
    ico: '🦷',
    title: 'Good Dental Health',
    desc: 'Healthy teeth and gums are necessary to undergo any cosmetic treatment. During a consultation, Dr. Slaman will ensure that you do not have active tooth decay or gum disease before proceeding.',
  },
  {
    num: '02',
    ico: '😁',
    title: 'Gummy Smiles',
    desc: 'If you have a gummy smile, undergoing this dental procedure can effectively lengthen each affected tooth. Gum contouring reduces gum prominence for a more natural-looking, confident appearance.',
  },
  {
    num: '03',
    ico: '📐',
    title: 'Asymmetrical Gum Line',
    desc: 'An asymmetrical gum line can make your teeth appear uneven and poorly shaped. Gum contouring will sculpt your gums, making your smile appear more uniform and balanced in the process.',
  },
  {
    num: '04',
    ico: '👑',
    title: 'Crown Lengthening',
    desc: 'In some cases, additional tooth structure must be uncovered to prep for a restoration, such as a dental crown. Gum therapy is useful in removing small amounts of soft tissue for a proper fit.',
  },
];

const EXPERIENCE_CARDS = [
  {
    ico: '🔬',
    title: 'Laser Technology',
    desc: 'Laser dentistry with Waterlase allows for very precise removal of excess gum tissue. With no scalpel needed, the contouring procedure is safer and faster, and recovery is easier than ever before.',
  },
  {
    ico: '😴',
    title: 'Sedation Dentistry',
    desc: 'Some patients may feel stressed during dental visits. That\'s why we offer oral conscious sedation. This sedation method helps patients feel completely relaxed during procedures for a truly comfortable experience.',
  },
  {
    ico: '💳',
    title: 'Payment Options',
    desc: 'To make cosmetic gum reshaping affordable, we\'re proud to accept CareCredit® financing and offer in-office payment plans. These options will help you get the smile you deserve without financial stress.',
  },
];

const LASER_BENEFITS = [
  {
    ico: '🩹',
    title: 'Reduced Discomfort',
    desc: 'Laser gum contouring is safe and virtually pain-free. In fact, for many patients, local anesthetic is not even necessary.',
  },
  {
    ico: '🩸',
    title: 'Less Bleeding',
    desc: 'The soft tissue laser cauterizes while making an incision, which means less bleeding both during and after the surgery.',
  },
  {
    ico: '🎯',
    title: 'Greater Accuracy',
    desc: 'Dental lasers give dentists more control and precision than scalpels, meaning an even lower risk of human error.',
  },
  {
    ico: '🛡️',
    title: 'Low Infection Risk',
    desc: 'Since dental lasers cauterize tissue while making cuts, the procedure is extremely sterile, with low risk of infection.',
  },
  {
    ico: '💨',
    title: 'Minimal Side Effects',
    desc: 'When recovering from laser contouring, patients experience less severe swelling, discomfort, and other side effects.',
  },
  {
    ico: '⚡',
    title: 'Faster Healing',
    desc: 'With no stitches and less bleeding, laser contouring patients heal faster than gum reshaping patients of the past.',
  },
];

const REVIEWS = [
  {
    initial: 'S',
    name: 'Sky Blue',
    year: '2020',
    text: 'After doing much research looking for a dentist, I luckily found Dr. Slaman. Numerous positive reviews about him was the reason I decided to see him. He has a modern office with the most up to date advanced dental technology. Dr. Slaman and his staff are warm, friendly and professional. I only wish I had known about Dr. James Slaman DDS, PC a long time ago. I highly recommend Dr. Slaman.',
  },
  {
    initial: 'M',
    name: 'Mike Salmon',
    year: '2019',
    text: 'Without a doubt the best dental practice in the Albuquerque area. Dr. Slaman is highly competent and personable. His staff is, without exception, kind, considerate and just plain nice! The whole experience is geared to putting the patient at ease knowing care is first rate. I felt like I was treated to the VIP level at all times.',
  },
];

const RELATED_SERVICES = [
  { label: 'Cosmetic Dentistry',  href: '/services/cosmetic' },
  { label: 'Porcelain Veneers',   href: '/services/veneers' },
  { label: 'Teeth Whitening',     href: '/services/whitening' },
  { label: 'Smile Makeover',      href: '/services/smile-makeover' },
  { label: 'Dental Bonding',      href: '/services/dental-bonding' },
  { label: 'Laser Dentistry',     href: '/services/laser-dentistry' },
];


/* ─────────────────────────────────────────
   SCROLL REVEAL HOOK
───────────────────────────────────────── */
function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.sr, .sr-left, .sr-right');
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible');
        }),
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ─────────────────────────────────────────
   GUM CONTOURING PAGE
───────────────────────────────────────── */
export default function GumContouring() {
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
            Gum<br /><em>Contouring</em>
          </h1>
          <p className="ab-banner-body">
            Your gums have a major impact on the appearance of your smile. Excess or uneven gum tissue can lead to self-consciousness. Thanks to modern laser gum contouring techniques, Dr. James Slaman can reshape gum tissue and enhance dental aesthetics — transforming your smile at our Albuquerque, NM practice.
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
            src="/photo-1629909613654-28e377c37b09.jpg"
            alt="Dr. Slaman's modern dental practice interior"
            loading="eager"
          />
          <div className="ab-banner-chip">
            <strong>Waterlase® Laser</strong>
            <span>No scalpels. No stitches. A faster, more comfortable gum reshaping experience.</span>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          S2 — WHAT IS GUM CONTOURING
               split: copy left | cards right
      ══════════════════════════════════ */}
      <section className="gc-basics-section">
        <div className="gc-basics-copy sr-left">
          <p className="sec-tag">The Basics of Treatment</p>
          <h2 className="sec-h">
            What Is<br /><em>Gum Contouring?</em>
          </h2>
          <p className="sec-body" style={{ marginTop: '.8rem' }}>
            A prominent gum line can affect the appearance of your smile. Prominent gums can
            also harbor bacteria, making your gums red and swollen, and increasing your risk
            for gum disease. Gum contouring can address both of these issues — and more.
          </p>
          <p className="sec-body">
            Using state-of-the-art laser technology, Dr. Slaman sculpts the gum tissue with
            precision and minimal discomfort, giving you a beautifully balanced smile that
            looks and feels completely natural.
          </p>
          <a href="#gc-contact" className="btn btn-fill" style={{ marginTop: '1.2rem' }}>
            Schedule a Consultation
          </a>
        </div>

        <div className="gc-basics-cards sr-right">
          {BASICS.map((b, i) => (
            <div
              className="gc-basics-card"
              key={b.title}
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              <div className="gc-basics-card-ico">{b.ico}</div>
              <h3 className="gc-basics-card-title">{b.title}</h3>
              <p className="gc-basics-card-desc">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════
          S3 — CANDIDATES
      ══════════════════════════════════ */}
      <section className="gc-wrap gc-candidates-section">
        <div className="gc-candidates-header sr">
          <div>
            <p className="sec-tag">Is It Right for You?</p>
            <h2 className="sec-h">
              Good Candidates for<br /><em>Gum Contouring</em>
            </h2>
          </div>
          <p className="sec-body" style={{ alignSelf: 'flex-end' }}>
            During your visit to our Albuquerque dental practice, Dr. Slaman will assess your
            candidacy for periodontal treatment. Ideal candidates share some common traits.
          </p>
        </div>

        <div className="gc-candidates-grid">
          {CANDIDATES.map((c, i) => (
            <div
              className="gc-candidate-card sr"
              key={c.num}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="gc-candidate-top">
                <span className="gc-candidate-num">{c.num}</span>
                <span className="gc-candidate-ico">{c.ico}</span>
              </div>
              <h3 className="gc-candidate-title">{c.title}</h3>
              <p className="gc-candidate-desc">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════
          S4 — DRAMATIC RESULTS  dark split
      ══════════════════════════════════ */}
      <section className="gc-results-section">
        <div className="gc-results-photo sr-left">
          <img
            src="/photo-1606811841689-23dfddce3e95.jpg"
            alt="Laser gum contouring results"
          />
          <div className="gc-results-photo-overlay" />
          <div className="gc-results-stat">
            <span className="gc-results-stat-num">25+</span>
            <span className="gc-results-stat-lbl">Years of Experience</span>
          </div>
        </div>

        <div className="gc-results-copy sr-right">
          <p className="sec-tag" style={{ color: 'var(--c-sand)' }}>
            Before &amp; After
          </p>
          <h2 className="sec-h" style={{ color: '#fff' }}>
            Laser Gum Contouring<br />
            <em style={{ color: 'var(--c-sand)' }}>Produces Dramatic Results</em>
          </h2>
          <p
            className="sec-body"
            style={{ color: 'rgba(245,240,232,.58)', marginTop: '.8rem'}}
          >
            Dr. Slaman has high standards and more than 25 years of experience. His
            Albuquerque dental center is committed to advanced, patient-centered dentistry.
            The laser approach allows for incredibly precise, natural-looking results that
            frame each tooth beautifully.
          </p>

          {/* before/after mini cards */}
          {/* <div className="gc-ba-mini">
            <div className="gc-ba-mini-card">
              <div className="gc-ba-mini-img">
                <img
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=500&q=80"
                  alt="Before gum contouring"
                />
              </div>
              <span className="gc-ba-badge">Before</span>
            </div>
            <div className="gc-ba-mini-card">
              <div className="gc-ba-mini-img">
                <img
                  src="https://images.unsplash.com/photo-1629909615184-74f495363b67?w=500&q=80"
                  alt="After gum contouring"
                />
              </div>
              <span className="gc-ba-badge gc-ba-badge--after">After</span>
            </div>
          </div> */}

          <a
            href="#gc-contact"
            className="btn btn-fill"
            style={{ alignSelf: 'flex-start', marginTop: '.8rem' }}
          >
            View Before &amp; After Photos
          </a>
        </div>
      </section>

      {/* ══════════════════════════════════
          S5 — IMPROVING PATIENT EXPERIENCE
      ══════════════════════════════════ */}
      <section className="gc-wrap gc-experience-section">
        <div className="gc-experience-header sr">
          <p className="sec-tag">Patient-Centered Care</p>
          <h2 className="sec-h">
            Improving Patient Experience<br /><em>During Treatment</em>
          </h2>
          <p className="sec-body" style={{ marginTop: '.8rem' }}>
            Dr. Slaman has high standards and more than 25 years of experience. His Albuquerque
            dental center is committed to advanced, patient-centered dentistry. In addition to
            blankets, headphones, and other amenities in the waiting room, here are three ways we
            make the gum contouring process easier for everyone.
          </p>
        </div>

        <div className="gc-experience-grid">
          {EXPERIENCE_CARDS.map((e, i) => (
            <div
              className="gc-experience-card sr"
              key={e.title}
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              <div className="gc-experience-ico">{e.ico}</div>
              <h3 className="gc-experience-title">{e.title}</h3>
              <p className="gc-experience-desc">{e.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════
          S6 — LASER BENEFITS  (dark grid)
      ══════════════════════════════════ */}
      <section className="gc-laser-section">
        <div className="gc-laser-header sr">
          <p className="sec-tag" style={{ color: 'var(--c-sand)' }}>
            Why Laser?
          </p>
          <h2 className="sec-h" style={{ color: '#fff' }}>
            The Benefits of<br />
            <em style={{ color: 'var(--c-sand)' }}>Laser Gum Contouring</em>
          </h2>
          <p
            className="sec-body"
            style={{
              color: 'rgba(245,240,232,.52)',
              marginTop: '.8rem',
            }}
          >
            Laser gum contouring boasts many advantages over the techniques of the past.
            Here are some reasons why dentists and patients prefer laser dentistry for
            periodontal contouring.
          </p>
        </div>

        <div className="gc-laser-grid">
          {LASER_BENEFITS.map((b, i) => (
            <div
              className="gc-laser-card sr"
              key={b.title}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="gc-laser-card-ico">{b.ico}</div>
              <div className="gc-laser-card-num">0{i + 1}</div>
              <h3 className="gc-laser-card-title">{b.title}</h3>
              <p className="gc-laser-card-desc">{b.desc}</p>
            </div>
          ))}
        </div>

        <div className="gc-laser-cta sr">
          <a href="#gc-contact" className="btn btn-fill">
            Request Your Gum Contouring Consultation
          </a>
        </div>
      </section>

      {/* ══════════════════════════════════
          S7 — REVIEWS
      ══════════════════════════════════ */}
      <section className="gc-reviews-section">
        <div className="gc-reviews-header sr">
          <div>
            <p className="sec-tag">5-Star Reviews</p>
            <h2 className="sec-h">
              100s of 5-Star<br /><em>Google Reviews</em>
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

        <div className="gc-reviews-grid">
          {REVIEWS.map((r) => (
            <div className="gc-review-card sr" key={r.name}>
              <div className="gc-review-stars">★★★★★</div>
              <p className="gc-review-text">&ldquo;{r.text}&rdquo;</p>
              <div className="gc-review-person">
                <div className="gc-review-avatar">{r.initial}</div>
                <div>
                  <div className="gc-review-name">{r.name}</div>
                  <div className="gc-review-year">
                    Albuquerque, NM · {r.year}
                  </div>
                </div>
                <span className="gc-review-via">Google</span>
              </div>
            </div>
          ))}
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