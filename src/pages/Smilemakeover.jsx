import React, { useEffect } from 'react';
import './Smilemakeover.css';
import Ratebar from "../components/Ratebar";
import Contactform from "../components/Contactform";
import Officesection from "../components/Officesection";
import Doctorpanel from "../components/Doctorpanel";

/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */

const BADGES = [
  { ico: '★', label: 'Free Consultation' },
  { ico: '✦', label: 'Fully Customized' },
  { ico: '◈', label: 'CareCredit® Available' },
    { ico: '◈', label: 'Dramatic Results' },
];

const WHY_COMBINE = [
  {
    num: '01',
    title: 'Cost-Effective',
    desc: "At our office, it's less expensive for you to pair cosmetic dentistry treatments in a smile makeover, as opposed to doing them over time. Not to mention, we accept CareCredit® financing, so you can make the cost more manageable.",
  },
  {
    num: '02',
    title: 'Transformative',
    desc: 'With a smile makeover, you have more potential to completely change your smile. It combines treatments like veneers and gum contouring to refine insecurities concerning both your teeth and your gums.',
  },
  {
    num: '03',
    title: 'Targeted',
    desc: "One of the biggest advantages of a cosmetic dental makeover is that it's completely customized to your goals, smile, and budget. Our dentist will work to specifically address your concerns, like discoloration, an uneven gumline, or crooked teeth.",
  },
];

const CONCERNS = [
  { img: "/Dental-Stains.svg", label: 'Dental Stains' },
  { img: "/Chipped-Cracked-Teeth.svg", label: 'Chipped or Cracked Teeth' },
  { img: "/Worn-Teeth.svg", label: 'Worn Teeth' },
  { img: "/Gummy-Smile.svg", label: 'A "Gummy Smile" or Uneven Gum Line' },
  { img: "/Misshapen-Teeth.svg", label: 'Misshapen Teeth' },
  { img: "/Gapped-Smile.svg", label: 'An Uneven or Gapped Smile' },
];

const TREATMENTS = [
  {
    title: 'Porcelain Veneers',
    href: '/services/veneers',
    desc: 'Dr. Slaman will apply thin porcelain shells to the front of your teeth. The veneers will hide surface flaws, like chips and stains. They can also reshape your teeth and conceal minor orthodontic imperfections.',
    img: '/slaman-Photoroom.png',
  },
  {
    title: 'Dental Implants',
    href: '/services/dental-implants',
    desc: 'If you have a missing tooth, a dental implant can replace the tooth root and support a lifelike dental restoration. We complete multiple forms of implant dentistry in Albuquerque, NM.',
    img: '/photo-1579684385127-1ef15d508118.jpg',
  },
  {
    title: 'Dental Bonding',
    href: '/services/dental-bonding',
    desc: 'Dental bonding is a conservative alternative to porcelain veneers. By applying composite resin to flaws in a tooth, Dr. Slaman can address most of the same concerns as he can with veneers.',
    img: '/photo-1606811841689-23dfddce3e95.jpg',
  },
  {
    title: 'Porcelain Crowns',
    href: '/services/dental-crowns',
    desc: 'Dr. Slaman usually places crowns to repair damaged teeth and restore oral health. However, cosmetic dental crowns can also transform the appearance of worn, unusually shaped, or severely stained teeth.',
    img: '/photo-1559839734-2b71ea197ec2.jpg',
  },
  {
    title: 'Gum Contouring',
    href: '/services/gum-contouring',
    desc: 'If you have uneven or excess gum tissue, it can dramatically alter the look of your smile. During gum contouring, Dr. Slaman will use our advanced WaterLase™ laser to gently and precisely remove a small amount of tissue.',
    img: '/about-banner.png',
  },
  {
    title: 'Teeth Whitening',
    href: '/services/whitening',
    desc: 'We provide in-office and take-home whitening. Our team will help you choose the whitening method that best suits your goals and budget. Both treatments can give you a dramatically brighter smile.',
    img: '/18588.jpg',
  },
];

const WHY_SLAMAN = [
  { img: "/calendar-1.png", title: 'Experience',          desc: 'Dr. Slaman has been practicing dentistry in Albuquerque since 1992 — over three decades of crafting beautiful smiles.' },
  { img: "/microscope-1.png", title: 'Technology',          desc: 'We use the most advanced dental technology to plan and execute our treatments, including digital smile simulation.' },
  { img: "/credit-card-2.png", title: 'Financing',           desc: 'Our practice accepts CareCredit® financing and offers in-office payment plans to help patients afford cosmetic dentistry.' },
  { img: "/gift-box-with-a-bow.png", title: 'Free Consultations',  desc: 'Initial smile makeover consultations with our dentist are completely free of charge, with no obligations.' },
  { img: "/shield.png", title: 'Comprehensive Care',  desc: 'We complete all forms of cosmetic dentistry, so we can address any of your smile issues under one roof.' },
];

const TIMELINE_STEPS = [
  {
    num: '01',
    title: 'Consultation',
    desc: 'During your free consultation at our Albuquerque office, Dr. Slaman will examine your teeth and gums, analyze your overall oral health, and ask questions about your cosmetic goals before recommending treatments.',
  },
  {
    num: '02',
    title: 'Simulation',
    desc: 'We believe it is important for patients to visualize their results. Dr. Slaman will use simulation software to show you an image of what your smile will look like. He can also create a 3D wax-up or temporary restoration you can try on.',
  },
  {
    num: '03',
    title: 'Treatment',
    desc: 'Once you and our dentist settle on a treatment plan, we will schedule your procedures. Some treatments, like whitening, may be completed on the same day as your consultation, while others require more time.',
  },
  {
    num: '04',
    title: 'Smile!',
    desc: 'At the end of your smile makeover journey, you will have a stunning new smile that you can be excited to share with your friends and family. The investment in yourself pays dividends every single day.',
  },
];

const CANDIDACY = [
  {
    img: "/check-mark-1.png",
    title: 'No Unresolved TMJ Problems',
    desc: 'Because the grinding and clenching from TMD can damage both natural teeth and cosmetic dentistry treatments like bonding and veneers, you have to address any temporomandibular joint problems before seeking a smile makeover.',
  },
  {
    img: "/teeth.png",
    title: 'Strong, Well-Maintained Teeth',
    desc: 'Healthy teeth are a crucial foundation for a smile makeover. After all, you want to have the best possible foundation for treatments like dental bonding, porcelain veneers, or orthodontics.',
  },
  {
    img: "/gum.png",
    title: 'Healthy Gum Tissue',
    desc: "The health of your gums is just as important as the health of your teeth. Before we can plan treatments like gum contouring, we will ensure that your gums are free from common but treatable dental conditions like gum disease.",
  },
];

const REVIEWS_SET1 = [
  {
    initial: 'L', name: 'Lee Maschoff', year: '2024',
    text: 'Very professional and friendly staff. Very latest in technology and procedures.',
  },
  {
    initial: 'J', name: 'Jennifer C', year: '2024',
    text: "I have always had a great experience with Dr. Slaman and his team. They truly care about their patients dental health and everyone is so welcoming!",
  },
];

const REVIEWS_SET2 = [
  {
    initial: 'K', name: 'Kim Gilbreath', year: '2024',
    text: 'Wonderful first appointment from beginning to end! Everyone was so kind, helpful, and informative. I am confident I am in excellent hands! A pleasure to be in this practice!',
  },
  {
    initial: 'D', name: 'Donna Haltom', year: '2024',
    text: 'Absolutely wonderful office. Drs are amazing, everything is clean and well appointed! Care and skill of everyone is top notch!! Would meet approval of the most discerning patient.',
  },
];

const DR_MEMS = [
  'American Dental Association', 'Academy of General Dentistry',
  'American Academy of Cosmetic Dentistry', 'American Academy of Implant Dentistry',
  'American Academy of Sleep Medicine', 'Spear Faculty Club',
];

const RELATED_SERVICES = [
  { label: 'Cosmetic Dentistry',  href: '/services/cosmetic' },
  { label: 'Porcelain Veneers',   href: '/services/veneers' },
  { label: 'Teeth Whitening',     href: '/services/whitening' },
  { label: 'Gum Contouring',      href: '/services/gum-contouring' },
  { label: 'Dental Bonding',      href: '/services/dental-bonding' },
  { label: 'Dental Implants',     href: '/services/dental-implants' },
];

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
   REVIEW CARD component
───────────────────────────────────────── */
function ReviewCard({ r }) {
  return (
    <div className="sm-review-card sr" key={r.name}>
      <div className="sm-review-stars">★★★★★</div>
      <p className="sm-review-text">&ldquo;{r.text}&rdquo;</p>
      <div className="sm-review-person">
        <div className="sm-review-avatar">{r.initial}</div>
        <div>
          <div className="sm-review-name">{r.name}</div>
          <div className="sm-review-year">Albuquerque, NM · {r.year}</div>
        </div>
        <span className="sm-review-via">Google</span>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   SMILE MAKEOVER PAGE
───────────────────────────────────────── */
export default function SmileMakeover() {
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
            Smile<br /><em>Makeover</em>
          </h1>
          <p className="ab-banner-body">
            Do you avoid smiling because you are embarrassed about the appearance of your teeth? A smile makeover could change your life. At our dental practice in Albuquerque, NM, our experienced dentist can combine multiple treatments to address all your cosmetic concerns.
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
            src="/23491.jpg"
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
          S2 — WHAT IS A SMILE MAKEOVER
          Image: patient consulting dentist (unique)
      ══════════════════════════════════ */}
      <section className="sm-what-section">
        <div className="sm-what-photo sr-left">
          <img
            src="/photo-1598256989800-fe5f95da9787.jpg"
            alt="Patient consulting with Dr. Slaman"
          />
          <div className="sm-what-photo-overlay" />
          <div className="sm-what-badge">
            <strong>Free Consultation</strong>
            <span>No obligations — just possibilities</span>
          </div>
        </div>

        <div className="sm-what-copy sr-right">
          <p className="sec-tag">The Basics</p>
          <h2 className="sec-h">
            What Is a<br /><em>Smile Makeover?</em>
          </h2>
          <p className="sec-body" >
            A smile makeover is a custom-designed treatment plan that combines multiple
            cosmetic procedures to fully enhance the appearance of your smile. At our
            Albuquerque dental office, a smile makeover can use treatments targeting your
            teeth and gums, like dental bonding, teeth whitening, and gum contouring.
          </p>
          <p className="sec-body">
            Dr. James Slaman can combine cosmetic treatments for a custom smile makeover
            plan that dramatically enhances the appearance of your smile. During your free
            consultation, he will evaluate the health and appearance of your smile to
            determine which treatments would most benefit you.
          </p>
          <a href="#sm-contact" className="btn btn-fill" style={{ marginTop: '1.2rem' }}>
            Schedule Your Free Consultation
          </a>
        </div>
      </section>

      {/* ══════════════════════════════════
          S3 — WHY COMBINE  (3 cards)
      ══════════════════════════════════ */}
      <section className="sm-wrap sm-why-combine-section">
        <div className="sm-why-header sr">
          <p className="sec-tag">The Advantage</p>
          <h2 className="sec-h">
            Why Combine Multiple<br /><em>Cosmetic Dentistry Procedures?</em>
          </h2>
          <p className="sec-body">
            Our Albuquerque patients often decide to bundle together several cosmetic
            procedures at once. That's because a smile makeover from our team is more:
          </p>
        </div>

        <div className="sm-why-grid">
          {WHY_COMBINE.map((w, i) => (
            <div className="sm-why-card sr" key={w.num} style={{ transitionDelay: `${i * 0.12}s` }}>
              <div className="sm-why-top">
                <span className="sm-why-num">{w.num}</span>
              </div>
              <h3 className="sm-why-title">{w.title}</h3>
              <p className="sm-why-desc">{w.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════
          S4 — CONCERNS WE ADDRESS
      ══════════════════════════════════ */}
      <section className="sm-concerns-section">
        <div className="sm-concerns-photo">
          <img
            src="/19645.jpg"
            alt="Smile transformation"
          />
          <div className="sm-concerns-overlay" />
        </div>

        <div className="sm-concerns-inner">
          <div className="sm-concerns-copy sr">
            <p className="sec-tag" style={{ color: 'var(--c-sand)' }}>Is This You?</p>
            <h2 className="sec-h" style={{ color: '#fff' }}>
              What Can We Refine<br />
              <em style={{ color: 'var(--c-sand)' }}>With a Smile Makeover?</em>
            </h2>
            <p className="sec-body" style={{ color: 'rgba(245,240,232,.55)' }}>
              If your smile is affected by any of the following aesthetic concerns, you may
              be a good candidate for a smile makeover.
            </p>
          </div>

          <div className="sm-concerns-grid sr">
            {CONCERNS.map((c, i) => (
              <div className="sm-concern-item" key={c.label} style={{ transitionDelay: `${i * 0.08}s` }}>
                <span className="sm-concern-ico">
                    <img src={c.img} alt={c.label} />
                </span>
                <span className="sm-concern-label">{c.label}</span>
              </div>
            ))}
          </div>

          <a href="#sm-contact" className="btn btn-fill sr" style={{ marginTop: '1.2rem', alignSelf: 'flex-start' }}>
            Find Out If You Qualify →
          </a>
        </div>
      </section>

      {/* ══════════════════════════════════
          S5 — TREATMENTS  (alternating)
          Each card has its own unique image
      ══════════════════════════════════ */}
      <section className="sm-treatments-section" id="sm-treatments">
        <div className="sm-treatments-header sr">
          <p className="sec-tag">What We Combine</p>
          <h2 className="sec-h">
            Commonly Combined<br /><em>Treatments</em>
          </h2>
          <p className="sec-body" >
            A smile makeover is different for each patient. Dr. Slaman will help you select
            cosmetic procedures to address your specific needs and goals.
          </p>
        </div>

        <div className="sm-treatments-list">
          {TREATMENTS.map((t, idx) => (
            <div
              className={`sm-treatment-item${idx % 2 !== 0 ? ' sm-treatment-item--reverse' : ''}`}
              key={t.title}
            >
              <div className="sm-treatment-copy">
                <span className="sm-treatment-num">0{idx + 1}</span>
                <div className="sm-treatment-tag-row">
                  <p className="sm-treatment-tag">Featured Treatment</p>
                </div>
                <h3 className="sm-treatment-name">{t.title}</h3>
                <p className="sm-treatment-body">{t.desc}</p>
                <a href={t.href} className="btn btn-fill" style={{ marginTop: '1.4rem' }}>
                  Explore {t.title} →
                </a>
              </div>
              <div className="sm-treatment-img">
                <img src={t.img} alt={t.title} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════
          S6 — REVIEWS SET 1
      ══════════════════════════════════ */}
      <section className="sm-reviews-section">
        <div className="sm-reviews-header sr">
          <div>
            <p className="sec-tag">Patient Reviews</p>
            <h2 className="sec-h">
              You Come First at Our<br /><em>Welcoming Dental Office</em>
            </h2>
          </div>
          <a href="https://maps.google.com/maps?cid=13452876912051634118"
            target="_blank" rel="noopener noreferrer"
            className="btn btn-line">
            View All on Google →
          </a>
        </div>
        <div className="sm-reviews-grid">
          {REVIEWS_SET1.map((r) => <ReviewCard key={r.name} r={r} />)}
        </div>
      </section>

      {/* ══════════════════════════════════
          S7 — WHY CHOOSE DR. SLAMAN
      ══════════════════════════════════ */}
      <section className="sm-why-section">
        <div className="sm-why-section-photo">
          <img
            src="/photo-1629909613654-28e377c37b09.jpg"
            alt="Modern dental office technology"
          />
          <div className="sm-why-section-overlay" />
          <div className="sm-why-section-badge">
            <span className="sm-why-stat-num">30+</span>
            <span className="sm-why-stat-lbl">Years in Albuquerque</span>
          </div>
        </div>

        <div className="sm-why-section-copy sr-right">
          <p className="sec-tag" style={{ color: 'var(--c-sand)' }}>The Right Choice</p>
          <h2 className="sec-h" style={{ color: '#fff' }}>
            Why Choose<br /><em style={{ color: 'var(--c-sand)' }}>Dr. Slaman?</em>
          </h2>
          <div className="sm-why-cards">
            {WHY_SLAMAN.map((w, i) => (
              <div className="sm-why-item sr" key={w.title} style={{ transitionDelay: `${i * 0.09}s` }}>
                <span className="sm-why-item-ico">
                    <img src={w.img} alt={w.title} />
                </span>
                <div>
                  <div className="sm-why-item-title">{w.title}</div>
                  <p className="sm-why-item-desc">{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          S8 — VIDEO + PERSONALIZE
          Image: unique — dental simulation
      ══════════════════════════════════ */}
      <section className="sm-wrap sm-video-section">
        <div className="sm-video-header sr">
          <p className="sec-tag">Planning Your Makeover</p>
          <h2 className="sec-h">
            How We Personalize Smile Makeovers<br /><em>to Help You Reach Your Goals</em>
          </h2>
        </div>

        <div className="sm-video-layout">
          <div className="sm-video-wrap sr-left">
            <div className="sm-video-frame">
              <video
                controls
                poster="/smile-video-image.jpg"
              >
                <source
                  src="/Smile_Makeover_1646342550.mp4"
                  type="video/mp4"
                />
                Your browser does not support video.
              </video>
            </div>
            <div className="sm-video-deco">
              <strong>FREE</strong>
              <span>Consultation</span>
            </div>
          </div>

          <div className="sm-video-copy sr-right">
            <p className="sec-body">
              With the assistance of wax-ups and digital technology, we can plan your
              smile makeover and help you envision your results. After all, you play a
              huge role in your treatment — and it's our goal to give you a strong,
              healthy smile that you'll be proud to share.
            </p>
            <p className="sec-body">
              Dr. Slaman has been providing the patients of Albuquerque, NM, and
              surrounding communities with high-quality dental care since 1992. Average
              care is not good enough for Dr. Slaman.
            </p>
            <a href="https://www.drslaman.com/video/61101-smile-makeover-candidates-treatment-options-planning/index.html"
              target="_blank" rel="noopener noreferrer"
              className="sm-video-link">
              Visit Our Video Gallery <span>→</span>
            </a>
            <a href="#sm-contact" className="btn btn-fill" style={{ marginTop: '.6rem' }}>
              Request a Consultation →
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          S9 — BEFORE & AFTER
          Unique images — not reused
      ══════════════════════════════════ */}
      <section className="sm-ba-section">
        <div className="sm-ba-inner">
          <div className="sm-ba-copy sr-left">
            <p className="sec-tag" style={{ color: 'var(--c-sand)' }}>Real Results</p>
            <h2 className="sec-h" style={{ color: '#fff' }}>
              Real Smile Makeover Results<br />
              <em style={{ color: 'var(--c-sand)' }}>Made Possible by Dr. Slaman</em>
            </h2>
            <p className="sec-body" style={{ color: 'rgba(245,240,232,.58)', marginTop: '.8rem' }}>
              This patient came to us with worn enamel and some dental discoloration. After
              examining their smile and listening to their goals, our dentist put together a
              tailored plan. With a personalized smile makeover, we were able to make this
              patient's teeth appear brighter and more uniform. The results are beautiful
              and entirely natural-looking.
            </p>
            <a href="#sm-contact" className="btn btn-fill"
              style={{ marginTop: '.8rem', alignSelf: 'flex-start' }}>
              View Before &amp; After Gallery
            </a>
          </div>

          <div className="sm-ba-cards sr-right">
            <div className="sm-ba-card">
              <div className="sm-ba-img">
                <img
                  src="/original_before-smile-makeover.jpeg"
                  alt="Before smile makeover"
                />
              </div>
              <div className="sm-ba-footer">
                <span className="sm-ba-badge">Before</span>
                <p>Worn enamel with dental discoloration and uneven surface</p>
              </div>
            </div>
            <div className="sm-ba-card">
              <div className="sm-ba-img">
                <img
                  src="/original_after-smile-makeover.jpeg"
                  alt="After smile makeover"
                />
              </div>
              <div className="sm-ba-footer">
                <span className="sm-ba-badge sm-ba-badge--after">After</span>
                <p>Bright, uniform, and completely natural-looking new smile</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          S10 — CANDIDACY
      ══════════════════════════════════ */}
      <section className="sm-wrap sm-candidacy-section">
        <div className="sm-candidacy-header sr">
          <p className="sec-tag">Are You a Candidate?</p>
          <h2 className="sec-h">
            How Do I Know If I'm a<br /><em>Smile Makeover Candidate?</em>
          </h2>
          <p className="sec-body" >
            The only way to find out for sure is to visit Dr. Slaman for a free consultation.
            Until then, it can help to know what we look for in an eligible smile makeover patient:
          </p>
        </div>

        <div className="sm-candidacy-grid">
          {CANDIDACY.map((c, i) => (
            <div className="sm-candidacy-card sr" key={c.title} style={{ transitionDelay: `${i * 0.12}s` }}>
              <div className="sm-candidacy-ico">
                <img src={c.img} alt={c.title} />
              </div>
              <h3 className="sm-candidacy-title">{c.title}</h3>
              <p className="sm-candidacy-desc">{c.desc}</p>
            </div>
          ))}
        </div>

        {/* ineligible note */}
        <div className="sm-ineligible-note sr">
          <div className="sm-ineligible-ico"><img src="/info.png" alt="" /></div>
          <div>
            <h3 className="sm-ineligible-title">Ineligible for a Smile Makeover?</h3>
            <p className="sm-ineligible-desc">
              Even if you're dealing with problems like missing teeth, gingivitis, or teeth
              grinding, you've met an Albuquerque team that can help. Our dentist is known
              for offering comprehensive care, including dental implants, periodontal
              treatment, and mouth guards. Once your oral health is under control, he can
              safely begin planning your custom smile makeover.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          S11 — TIMELINE  (dark process)
          Unique BG image
      ══════════════════════════════════ */}
      <section className="sm-timeline-section">
        <div className="sm-timeline-bg" />
        <div className="sm-timeline-overlay" />

        <div className="sm-timeline-inner">
          <div className="sm-timeline-header sr">
            <p className="sec-tag" style={{ color: 'var(--c-sand)' }}>Step by Step</p>
            <h2 className="sec-h" style={{ color: '#fff' }}>
              Smile Makeover<br /><em style={{ color: 'var(--c-sand)' }}>Timeline</em>
            </h2>
            <p className="sec-body" style={{ color: 'rgba(245,240,232,.55)' }}>
              Because each treatment plan is unique, different patients experience different
              treatment timelines. Regardless, every patient can expect these stages.
            </p>
          </div>

          <div className="sm-steps">
            {TIMELINE_STEPS.map((s, i) => (
              <div className="sm-step sr" key={s.num} style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="sm-step-num">{s.num}</div>
                <div className="sm-step-connector">
                  <div className="sm-step-dot" />
                  <div className="sm-step-line" />
                </div>
                <div className="sm-step-body">
                  <h3 className="sm-step-title">{s.title}</h3>
                  <p className="sm-step-desc">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="sm-timeline-cta sr">
            <a href="#sm-contact" className="btn btn-fill">
              Request a Smile Makeover Consultation
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          S12 — REVIEWS SET 2
      ══════════════════════════════════ */}
      <section className="sm-reviews-section sm-reviews-section--warm">
        <div className="sm-reviews-header sr">
          <div>
            <p className="sec-tag">More Happy Patients</p>
            <h2 className="sec-h">
              Albuquerque Patients Are Happy<br /><em>to Visit Our Office</em>
            </h2>
          </div>
          <a href="https://maps.google.com/maps?cid=13452876912051634118"
            target="_blank" rel="noopener noreferrer"
            className="btn btn-line">
            View All on Google →
          </a>
        </div>
        <div className="sm-reviews-grid">
          {REVIEWS_SET2.map((r) => <ReviewCard key={r.name} r={r} />)}
        </div>
      </section>

      {/* ══════════════════════════════════
          S13 — FINANCING CTA  (split)
          Unique image
      ══════════════════════════════════ */}
      <section className="sm-financing-section">
        <div className="sm-financing-photo">
          <img
            src="/photo-1554224155-8d04cb21cd6c.jpg"
            alt="Financing options for smile makeover"
          />
          <div className="sm-financing-overlay" />
        </div>

        <div className="sm-financing-copy sr-right">
          <p className="sec-tag">Affordability</p>
          <h2 className="sec-h">
            Financing Options<br /><em>Available</em>
          </h2>
          <p className="sec-body" style={{ marginTop: '.8rem' }}>
            Because smile makeovers are considered cosmetic, most insurance providers will
            not cover treatment. However, our Albuquerque dental practice accepts CareCredit®
            and offers in-office financing plans to help patients pay for treatment.
          </p>
          <p className="sec-body">
            Contact us today to learn more about your financing options — because you
            deserve a smile you love without financial stress getting in the way.
          </p>
          <div className="sm-financing-btns">
            <a href="#sm-contact" className="btn btn-fill">Learn About Financing</a>
            <a href="tel:5052268598" className="btn btn-line">Call Us Today</a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          S14 — RELATED SERVICES  (dark)
      ══════════════════════════════════ */}
      <section className="sm-related-section">
        <div className="sm-related-inner sr">
          <div className="sm-related-left">
            <p className="sec-tag" style={{ color: 'var(--c-sand)' }}>Explore More</p>
            <h2 className="sec-h" style={{ color: '#fff' }}>
              Related<br /><em style={{ color: 'var(--c-sand)' }}>Services</em>
            </h2>
            <p className="sec-body" style={{ color: 'rgba(245,240,232,.5)' }}>
              A smile makeover draws from many cosmetic treatments. Explore each one in detail.
            </p>
          </div>
          <div className="sm-related-links">
            {RELATED_SERVICES.map((s) => (
              <a className="sm-related-link" href={s.href} key={s.label}>
                <span className="sm-related-dot" />
                <span className="sm-related-label">{s.label}</span>
                <span className="sm-related-arr">→</span>
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