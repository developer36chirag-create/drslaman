import React, { useEffect, useState } from 'react';
import './Veneers.css';
import Ratebar from "../components/Ratebar";
import Contactform from "../components/Contactform";
import Officesection from "../components/Officesection";
import Doctorpanel from "../components/Doctorpanel";

/* ─────────────────────────────────────────
   IMAGE MAP — every section uses a UNIQUE
   Unsplash photo, never repeated elsewhere
   S1  HERO          → woman brilliant smile profile
   S2  WHY CHOOSE    → modern dental office interior
   S3  BEFORE/AFTER  → before/after smile close-ups
   S4  BENEFITS      → confident woman smiling outdoors
   S5  WHAT ARE      → dental ceramics / lab work
   S6  VIDEO         → Dr Slaman portrait (poster)
   S7  FLAWS FIXED   → smile gap/chip reference
   S8  CANDIDACY     → young man smiling
   S9  COST          → consultation planning
   S10 PATIENT VIDEO → patient testimonial poster
   S11 TIMELINE BG   → clinic hallway / tools
   S12 AFTERCARE     → woman brushing teeth
   S13 ALTERNATIVES  → bonding/veneers comparison
   S14 COMBINE       → whitening treatment
   S15 DR PANEL      → professional headshot (unique)
─────────────────────────────────────────── */

/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */
const STATS = [
  { num: '30+', lbl: 'Years of Experience' },
  { num: '450+', lbl: '5-Star Reviews' },
  { num: '2wks', lbl: 'Final Results' },
  { num: '10+', lbl: 'Years Durability' },
];

const WHY_CHOOSE = [
  {
    img: "/accountant.png",
    title: 'A Perfectionist Approach',
    desc: "To Dr. Slaman, average isn't good enough. With an artistic eye, premium dental materials, and over 30 years of experience, our dentist creates lifelike veneers that are indistinguishable from natural teeth.",
  },
  {
    img: "/people.png",
    title: 'Part of the Community',
    desc: "Dr. Slaman grew up in Albuquerque and is proud to offer his services to the place he's always called home. As a part of your community, he and his team strive to provide consistently stunning results.",
  },
  {
    img: "/diagram.png",
    title: 'A High Bar',
    desc: "With constant new developments, the field of dentistry sets a higher bar every year. Dr. Slaman is committed to continuing education so he can learn about new techniques and technology.",
  },
  {
    img: "/lounge-3.png",
    title: 'Comfortable Care',
    desc: "We understand many patients have had poor experiences with dentists in the past, and we aim to change that. Our team offers warm blankets, coffee, headphones, and more.",
  },
];

const BENEFITS = [
  {
    num: '01',
    title: 'Natural-Looking',
    desc: "Over the years, dental materials' appearance has improved dramatically. Patients can achieve a beautiful result and a lifelike smile that no one will be able to tell apart from natural teeth.",
  },
  {
    num: '02',
    title: 'Versatile',
    desc: 'Unlike a procedure like teeth whitening, veneers can address virtually every aesthetic aspect of a tooth, including shape, color, and size — all in one elegant, custom-crafted shell.',
  },
  {
    num: '03',
    title: 'Durable',
    desc: 'Compared to dental bonding, veneers are more resistant to fractures. Most patients can maintain their porcelain veneers for 10 years or more with proper care.',
  },
];

const FLAWS_FIXED = [
  { img: "/Chips.svg", label: 'Chips' },
  { img: "/Cracks.svg", label: 'Cracks' },
  { img: "/Discoloration.svg", label: 'Discoloration' },
  { img: "/Misshapen-Teeth-2.svg", label: 'Misshapen Teeth' },
  { img: "/Misalignment.svg", label: 'Misalignment' },
  { img: "/Overcrowding.svg", label: 'Overcrowding' },
  { img: "/Gaps.svg", label: 'Gaps Between Teeth' },
];

const CANDIDACY = [
  {
    img: "/tooth.png",
    title: 'Sufficient Enamel',
    desc: 'Dental veneers require the removal of some tooth enamel. If for any reason you cannot afford to have enamel removed without threatening the health of your tooth, you will need to consider an alternative solution such as dental bonding.',
  },
  {
    img: "/tooth-2.png",
    title: 'Minor Imperfections',
    desc: 'Porcelain veneers are designed to cover imperfections that are cosmetic in nature. An issue such as pronounced misalignment might be better treated with orthodontics before or instead of veneers.',
  },
  {
    img: "/gingivitis.png",
    title: 'Excellent Oral Health',
    desc: 'A healthy foundation is essential for a long-lasting aesthetic upgrade. If you have tooth decay, gum disease, or other issues affecting your oral health, they must be resolved before receiving porcelain veneers.',
  },
];

const COST_FACTORS = [
  {
    num: '01',
    title: 'Number of Veneers',
    desc: 'Concealing a small chip in one tooth will cost less than using several veneers to conceal staining that will not respond to teeth whitening. You can depend on us to only recommend the number necessary to meet your goals.',
  },
  {
    num: '02',
    title: 'Preliminary Treatments',
    desc: 'If you are suffering from tooth decay or other conditions affecting your oral health, they will need to be resolved first. Insured patients can expect that at least a portion of these preliminary treatments will be covered.',
  },
  {
    num: '03',
    title: 'Materials',
    desc: 'Veneers can be made from a variety of materials. In general, the more durable and realistic-looking the material, the more it will cost. Dr. Slaman uses high-quality IPS e.max® porcelain for exceptional results.',
  },
];

const TIMELINE_STEPS = [
  {
    num: '01',
    title: 'Initial Consultation',
    desc: "Before treatment can begin, Dr. Slaman must see you for a consultation. During this visit, he will talk to you about your personal cosmetic goals and assess the health of your teeth and gums to confirm that veneers are right for you.",
  },
  {
    num: '02',
    title: 'Preparing the Teeth',
    desc: 'To begin the treatment process, Dr. Slaman will remove a small amount of enamel from each treated tooth. This will make room for your restoration and prepare the tooth surface for the veneer.',
  },
  {
    num: '03',
    title: 'Digital Impressions',
    desc: 'Once preparation is complete, we will take digital impressions of your teeth using our intraoral scanner. This device captures numerous images of your dental anatomy and combines them for an accurate representation.',
  },
  {
    num: '04',
    title: 'Fabrication of Veneers',
    desc: 'Your digital impressions will be sent directly to our dental lab, where a skilled ceramist will hand-craft your veneers from IPS e.max® — a porcelain-like material offering superior aesthetics. This process takes approximately two weeks.',
  },
  {
    num: '05',
    title: 'Placement & Finishing',
    desc: 'Once your veneers arrive, you return to our Albuquerque office for a final visit. Dr. Slaman checks the fit and feel, ensures they meet your expectations, then secures the porcelain shells in place and makes any final adjustments.',
  },
];

const AFTERCARE = [
  { img: "/dental-caries.png", title: "Don't Bite Down on Hard Objects", desc: "While veneers are made to withstand the normal pressures of chewing, they are not invulnerable. Chewing on hard surfaces like ice, fingernails, and pens can place undue strain on your veneers and lead to cracks or chips." },
  { img: "/no-smoking.png", title: 'Stop Using Tobacco Products',     desc: "Tobacco products can easily ruin the beautiful aesthetic of your veneers and natural teeth. They also cause a myriad of oral health issues like gum disease. If you keep using tobacco, maintaining the health and appearance of your teeth will become expensive." },
  { img: "/calendar.png", title: 'Schedule Regular Checkups',       desc: "Regular checkups are important, but they're even more essential for veneer patients. A normal checkup and cleaning every six months helps you maintain good oral health, and Dr. Slaman can help you fine-tune your care routine for longer-lasting veneers." },
];

const FAQS = [
  {
    q: 'How many veneers should I get?',
    a: "The number of veneers you should get depends on your needs and budget. Some patients may only need one veneer to cover an aesthetically flawed tooth. Others can get a full set to cover all the anterior teeth that show when they smile. Dr. Slaman can help you find the best combination.",
  },
  {
    q: 'Do veneers stay white?',
    a: "Veneers have naturally stain-resistant qualities and will stay brighter over time than natural enamel. Good hygiene and regular cleanings can help maintain the bright shade of your veneers and protect the underlying tooth structure as well.",
  },
  {
    q: 'Are veneers permanent?',
    a: "Because veneers require permanent alteration to the tooth, once your tooth has been prepped, it will always require some kind of restoration. The veneer itself will typically last 10–15 years until it has to be replaced.",
  },
];

const REVIEWS_1 = [
  {
    initial: 'C', name: 'Carlos S.', year: '2023',
    text: "Incredible experience! I was recommended this office by a loved one who was similarly blown away by the entire team's effort, expertise, and professionalism. Everyone I interacted with was kind, prompt, and knowledgeable. I felt in great care from each person who worked on my teeth and I cannot recommend Dr. Slaman's team enough!",
  },
  {
    initial: 'M', name: 'M Acosta', year: '2023',
    text: "If you're in need of a top-notch, highly-skilled, and caring dentist, give Dr. Slaman a call. Everyone at Dr. Slaman's dental practice is knowledgeable and professional. They go above and beyond to make you feel comfortable and they genuinely care about your dental issues.",
  },
];

const REVIEWS_2 = [
  {
    initial: 'J', name: 'Jack M', year: '2023',
    text: 'You are not going to find a better dentist anywhere in Albuquerque. Dr. Slaman is extremely talented! He\'s also very proactive and vested in his patients dental health. I recommend him 100%.',
  },
  {
    initial: 'J', name: 'Jeff Schaefer', year: '2023',
    text: "Team Slaman can not be beat. Friendly, kind, and always professional. Dr Slaman is a Craftsman!! You think how can a dentist possibly be a Craftsman? Well if you would have seen my busted front teeth before I met Dr. Slaman, you'd understand. Team Slaman is the best in Albuquerque!!!",
  },
];

const REVIEWS_3 = [
  {
    initial: 'T', name: 'Ty Harlacker', year: '2023',
    text: "Dr. Slaman and his staff are amazing. They are courteous and informative, I really appreciate them. Look no further, they're honest and do excellent work.",
  },
  {
    initial: 'M', name: 'Mella Morrison', year: '2023',
    text: "I have been a patient for more than 20 years. Great dentist! Great hygienist! Great staff! Dr. Slaman and his staff stay up on all the current techniques and tools in the field of dentistry. My whole family goes to Dr Slaman! I highly recommend him!",
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
   REUSABLE REVIEW CARD
───────────────────────────────────────── */
function ReviewCard({ r }) {
  return (
    <div className="pv-review-card sr" key={r.name}>
      <div className="pv-review-stars">★★★★★</div>
      <p className="pv-review-text">&ldquo;{r.text}&rdquo;</p>
      <div className="pv-review-person">
        <div className="pv-review-avatar">{r.initial}</div>
        <div>
          <div className="pv-review-name">{r.name}</div>
          <div className="pv-review-year">Albuquerque, NM · {r.year}</div>
        </div>
        <span className="pv-review-via">Google</span>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   PORCELAIN VENEERS PAGE
───────────────────────────────────────── */
export default function PorcelainVeneers() {
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
            Porcelain<br /><em>Veneers</em>
          </h1>
          <div className="pv-hero-quote-inline">
            <span className="pv-hero-quote-mark">"</span>
            <span>They are perfect!</span>
            <span className="pv-hero-quote-by">— Veneer Patient, 5-Star Review</span>
          </div>
          <p className="ab-banner-body">
            Dr. James Slaman of Albuquerque, NM, takes a precision-based, artistry-driven approach to help each patient achieve stunning, natural-looking results. Whether you're looking to fix chips, close gaps, or brighten your smile, veneers offer a fast, transformative solution with long-term benefits.
          </p>

          {/* stats row */}
          <div className="pv-hero-stats">
            {STATS.map((s) => (
              <div className="pv-hero-stat" key={s.lbl}>
                <span className="pv-hero-stat-num">{s.num}</span>
                <span className="pv-hero-stat-lbl">{s.lbl}</span>
              </div>
            ))}
          </div>

          <div className="ab-banner-btns">
            <a href="#contact" className="btn btn-fill">Book a Veneers Consult</a>
            <a href="#about-section" className="btn btn-line">Call to Get Started</a>
          </div>
        </div>
        <div className="ab-banner-right">
          <img
            src="/1397.jpg"
            alt="Dr. Slaman's modern dental practice interior"
            loading="eager"
          />

        </div>
      </section>

    

      {/* ══════════════════════════════════
          S2 — WHY ALBUQUERQUE CHOOSES US
          UNIQUE: modern dental office interior
      ══════════════════════════════════ */}
      <section className="pv-why-section">
        <div className="pv-why-photo sr-left">
          <img
            src="/photo-1576091160550-2173dba999ef.jpg"
            alt="Modern dental office interior"
          />
          <div className="pv-why-overlay" />
          <div className="pv-why-badge">
            <strong>Albuquerque's Choice</strong>
            <span>Born &amp; raised in the 505 since 1992</span>
          </div>
        </div>

        <div className="pv-why-copy sr-right">
          <p className="sec-tag">Why Our Patients Choose Us</p>
          <h2 className="sec-h">
            Albuquerque Chooses<br /><em>Our Office</em>
          </h2>
          <div className="pv-why-cards">
            {WHY_CHOOSE.map((w, i) => (
              <div className="pv-why-card sr" key={w.title} style={{ transitionDelay: `${i * 0.09}s` }}>
                <span className="pv-why-ico">
                    <img src={w.img} alt={w.title} />
                </span>
                <div>
                  <div className="pv-why-title">{w.title}</div>
                  <p className="pv-why-desc">{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          S3 — PULLQUOTES + CTA
      ══════════════════════════════════ */}
      <section className="pv-wrap pv-cta-section">
        <div className="pv-cta-bottom sr">
          <div className="pv-cta-text">
            <h2 className="sec-h">Let's Talk About Your<br /><em>Smile Goals</em></h2>
            <p className="sec-body">
              If you've been thinking about upgrading your smile, there's never been a
              better time to explore porcelain veneers. You don't have to commit right away.
              We invite you to schedule a consultation to learn what's possible, see a
              digital preview of your results, and get answers to all your questions in a
              pressure-free setting.
            </p>
            <div className="pv-cta-actions">
            <a href="#pv-contact" className="btn btn-fill">Book a Veneers Consult</a>
            <a href="tel:5052268598" className="btn btn-line">Speak to Our Team</a>
          </div>
          </div>
        </div>
        <div className="pv-cta-quotes sr">
          <div className="pv-cta-quote">
            <div className="pv-cta-quote-mark">"</div>
            <p>Incredible experience! I was recommended this office by a loved one who was similarly blown away by the entire team's effort, expertise, and professionalism.</p>
            <cite>— Carlos S., Google Review</cite>
          </div>
          <div className="pv-cta-quote">
            <div className="pv-cta-quote-mark">"</div>
            <p>If you're in need of a top-notch, highly-skilled, and caring dentist, give Dr. Slaman a call. They go above and beyond to make you feel comfortable.</p>
            <cite>— M Acosta, Google Review</cite>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          S4 — BEFORE & AFTER
          UNIQUE: smile transformation close-ups
      ══════════════════════════════════ */}
      <section className="pv-ba-section">
        <div className="pv-ba-inner">
          <div className="pv-ba-copy sr-left">
            <p className="sec-tag" style={{ color: 'var(--c-sand)' }}>Real Patient Results</p>
            <h2 className="sec-h" style={{ color: '#fff' }}>
              See What's Possible —<br />
              <em style={{ color: 'var(--c-sand)' }}>Helping Patients Just Like You</em>
            </h2>
            <p className="sec-body" style={{ color: 'rgba(245,240,232,.58)' }}>
              At our Albuquerque office, Dr. Slaman works with a highly skilled dental lab
              to create precisely customized veneers. In most cases, veneers can be
              designed, fabricated, and placed within two weeks. Like this patient who
              received veneers to correct gaps between their teeth, you can be well on your
              way to a beautiful smile after a quick consultation.
            </p>
            <a href="#pv-contact" className="btn btn-fill"
              style={{ alignSelf: 'flex-start', marginTop: '.8rem' }}>
              View Our Photo Gallery
            </a>
          </div>

          <div className="pv-ba-cards sr-right">
            <div className="pv-ba-card">
              <div className="pv-ba-img">
                <img
                  src="/original_Before-Veneers.jpeg"
                  alt="Before veneers"
                />
              </div>
              <div className="pv-ba-footer">
                <span className="pv-ba-badge">Before</span>
                <p>Gaps, chips, and uneven coloration</p>
              </div>
            </div>
            <div className="pv-ba-card">
              <div className="pv-ba-img">
                <img
                  src="/original_After-Veneers.jpeg"
                  alt="After veneers"
                />
              </div>
              <div className="pv-ba-footer">
                <span className="pv-ba-badge pv-ba-badge--after">After</span>
                <p>Perfect symmetry with natural-looking IPS e.max® veneers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          S5 — BENEFITS  (3 cards)
          UNIQUE: confident woman smiling outdoors
      ══════════════════════════════════ */}
      <section className="pv-benefits-section">
        <div className="pv-benefits-photo">
          <img
            src="/20954.jpg"
            alt="Confident woman smiling after veneers"
          />
          <div className="pv-benefits-photo-overlay" />
        </div>
        <div className="pv-benefits-inner">
          <div className="pv-benefits-header sr">
            <p className="sec-tag" style={{ color: 'var(--c-sand)' }}>Why Veneers?</p>
            <h2 className="sec-h" style={{ color: '#fff' }}>
              The Benefits of<br /><em style={{ color: 'var(--c-sand)' }}>Dental Veneers</em>
            </h2>
          </div>
          <div className="pv-benefits-grid">
            {BENEFITS.map((b, i) => (
              <div className="pv-benefit-card sr" key={b.num} style={{ transitionDelay: `${i * 0.12}s` }}>
                <div className="pv-benefit-top">
                  <span className="pv-benefit-num">{b.num}</span>
                </div>
                <h3 className="pv-benefit-title">{b.title}</h3>
                <p className="pv-benefit-desc">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          S6 — WHAT ARE VENEERS (split)
          UNIQUE: dental ceramics / lab close-up
      ══════════════════════════════════ */}
      <section className="pv-what-section">
        <div className="pv-what-copy sr-left">
          <p className="sec-tag">The Science</p>
          <h2 className="sec-h">
            What Are<br /><em>Dental Veneers?</em>
          </h2>
          <p className="sec-body" >
            Porcelain veneers are custom-crafted restorations, designed to match the shade
            and fit of your surrounding teeth. Rather than covering the entire tooth
            structure, a veneer covers only the front surface of the tooth. These
            restorations are ultra-thin for maximum comfort, but since they are fabricated
            from high-quality dental materials, they are also durable and long-lasting.
          </p>
          <p className="sec-body">
            The porcelain in dental veneers mirrors the shine of natural enamel, delivering
            an incredibly lifelike result. Best of all, veneers are stain-resistant and can
            be properly maintained with routine brushing and flossing, as well as regular
            checkups and cleanings.
          </p>
          <div className="pv-what-spec">
            <div className="pv-what-spec-item">
              <span className="pv-what-spec-ico">
                <img src="/award.png" alt="" />
              </span>
              <div>
                <strong>IPS e.max® Material</strong>
                <p>Dr. Slaman uses only premium-quality porcelain for superior aesthetics and longevity.</p>
              </div>
            </div>
            <div className="pv-what-spec-item">
              <span className="pv-what-spec-ico">
                <img src="/microscope.png" alt="" />
              </span>
              <div>
                <strong>Stain-Resistant</strong>
                <p>Porcelain resists staining better than natural enamel for a lasting bright smile.</p>
              </div>
            </div>
          </div>
          <a href="#pv-contact" className="btn btn-fill" style={{ marginTop: '1.2rem' }}>
            Schedule a Consultation
          </a>
        </div>
        <div className="pv-what-photo sr-right">
          <img
            src="/23486.jpg"
            alt="Dental ceramics and veneer fabrication"
          />
        </div>
      </section>

      {/* ══════════════════════════════════
          S7 — VIDEO — Dr. Slaman Explains
          UNIQUE: Dr. portrait poster
      ══════════════════════════════════ */}
      <section className="pv-wrap pv-video-section">
        <div className="pv-video-header sr">
          <p className="sec-tag">From the Doctor</p>
          <h2 className="sec-h">
            Dr. Slaman Explains<br /><em>More About Veneers</em>
          </h2>
        </div>
        <div className="pv-video-layout">
          <div className="pv-video-wrap sr-left">
            <div className="pv-video-frame">
              <video controls
                poster="/original_James-Slaman-video.jpg">
                <source
                  src="/Veneers_1646343096.mp4"
                  type="video/mp4"
                />
                Your browser does not support video.
              </video>
            </div>
            <div className="pv-video-deco">
              <strong>2 wks</strong>
              <span>Final Results</span>
            </div>
          </div>
          <div className="pv-video-copy sr-right">
            <p className="sec-body">
              In this video, Dr. James Slaman explains the difference between ceramic
              veneers and composite veneers. Both change the shape and color of your
              teeth. You may be a suitable candidate for veneers if you have cracked,
              chipped, worn, or discolored teeth.
            </p>
            <p className="sec-body">
              Veneers are a highly efficient cosmetic dentistry treatment. In some cases,
              they can be used to resolve minor misalignment issues, allowing patients to
              achieve their desired results in about two weeks as opposed to several months
              of orthodontic treatment.
            </p>
            <a href="https://www.drslaman.com/video/61083-about-ceramic-and-composite-veneers/index.html"
              target="_blank" rel="noopener noreferrer"
              className="pv-video-link">
              Visit Our Video Gallery <span>→</span>
            </a>
            <a href="#pv-contact" className="btn btn-fill" style={{ marginTop: '.6rem' }}>
              Curious About Veneers? Ask Us →
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          S8 — REVIEWS SET 1
      ══════════════════════════════════ */}
      <section className="pv-reviews-section">
        <div className="pv-reviews-header sr">
          <div>
            <p className="sec-tag">Patient Reviews</p>
            <h2 className="sec-h">
              "The Best in<br /><em>Albuquerque!"</em>
            </h2>
          </div>
          <a href="https://maps.google.com/maps?cid=13452876912051634118"
            target="_blank" rel="noopener noreferrer"
            className="btn btn-line">
            View All on Google →
          </a>
        </div>
        <div className="pv-reviews-grid">
          {REVIEWS_2.map((r) => <ReviewCard key={r.name} r={r} />)}
        </div>
      </section>

      {/* ══════════════════════════════════
          S9 — FLAWS VENEERS FIX
          UNIQUE: smile gap / chip reference
      ══════════════════════════════════ */}
      <section className="pv-flaws-section">
        <div className="pv-flaws-bg" />
        <div className="pv-flaws-overlay" />
        <div className="pv-flaws-inner">
          <div className="pv-flaws-header sr">
            <p className="sec-tag" style={{ color: 'var(--c-sand)' }}>What We Conceal</p>
            <h2 className="sec-h" style={{ color: '#fff' }}>
              Dental Veneers Can<br /><em style={{ color: 'var(--c-sand)' }}>Improve Your Teeth in Many Ways</em>
            </h2>
            <p className="sec-body" style={{ color: 'rgba(245,240,232,.55)', marginTop: '.8rem', maxWidth: '44ch' }}>
              Let dental veneers from our Albuquerque, NM, office conceal flaws like:
            </p>
          </div>
          <div className="pv-flaws-grid sr">
            {FLAWS_FIXED.map((f, i) => (
              <div className="pv-flaw-item" key={f.label} style={{ transitionDelay: `${i * 0.07}s` }}>
                <span className="pv-flaw-ico">
                    <img src={f.img} alt={f.label} />
                </span>
                <span className="pv-flaw-label">{f.label}</span>
              </div>
            ))}
          </div>
          <a href="#pv-contact" className="btn btn-fill sr" style={{ marginTop: '2rem', alignSelf: 'flex-start' }}>
            Find Out If Veneers Are Right for You →
          </a>
        </div>
      </section>

      {/* ══════════════════════════════════
          S10 — CANDIDACY (3 cards)
          UNIQUE: young man smiling
      ══════════════════════════════════ */}
      <section className="pv-wrap pv-candidacy-section">
        <div className="pv-candidacy-header sr">
          <div>
            <p className="sec-tag">Are You a Candidate?</p>
            <h2 className="sec-h">
              Who Is a Good Candidate<br /><em>for Veneers?</em>
            </h2>
          </div>
        </div>
        <div className="pv-candidacy-grid">
          {CANDIDACY.map((c, i) => (
            <div className="pv-candidacy-card sr" key={c.title} style={{ transitionDelay: `${i * 0.12}s` }}>
              <div className="pv-candidacy-ico">
                <img src={c.img} alt={c.title} />
              </div>
              <h3 className="pv-candidacy-title">{c.title}</h3>
              <p className="pv-candidacy-desc">{c.desc}</p>
            </div>
          ))}
        </div>

        {/* Preview technology note */}
        <div className="pv-preview-note sr">
          <div className="pv-preview-note-ico">
            <img src="/monitor.png" alt="" />
          </div>
          <div>
            <strong>Preview Your Results With Our Advanced Technology</strong>
            <p>
              Our Albuquerque practice uses the latest image simulation software to provide
              a preview of what your smile can look like with veneers. Our patients love
              seeing their potential new smiles. You can preview your new smile during a
              consultation with Dr. Slaman.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          S11 — COST FACTORS
          UNIQUE: consultation planning session
      ══════════════════════════════════ */}
      <section className="pv-cost-section">
        <div className="pv-cost-photo sr-left">
          <img
            src="/Factors-Affecting.png"
            alt="Consultation and treatment planning"
          />
          <div className="pv-cost-overlay" />
          <div className="pv-cost-stat">
            <strong>CareCredit®</strong>
            <span>Financing Available</span>
          </div>
        </div>
        <div className="pv-cost-copy sr-right">
          <p className="sec-tag">Understand the Investment</p>
          <h2 className="sec-h">
            Factors Affecting<br /><em>Cost</em>
          </h2>
          <p className="sec-body" style={{ marginTop: '.8rem' }}>
            The three most significant cost variables for veneers are below. Dr. Slaman
            offers in-office 90-day financing, and our staff can also help you coordinate
            low-interest and interest-free financing through CareCredit®.
          </p>
          <div className="pv-cost-factors">
            {COST_FACTORS.map((f, i) => (
              <div className="pv-cost-factor sr" key={f.num} style={{ transitionDelay: `${i * 0.1}s` }}>
                <span className="pv-cost-factor-num">{f.num}</span>
                <div>
                  <div className="pv-cost-factor-title">
                    {f.title}
                  </div>
                  <p className="pv-cost-factor-desc">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <a href="#pv-contact" className="btn btn-fill" style={{ marginTop: '1.2rem' }}>
            Get an Estimate During a Consultation
          </a>
        </div>
      </section>

      {/* ══════════════════════════════════
          S12 — PATIENT VIDEO TESTIMONIAL
          UNIQUE: patient testimonial poster
      ══════════════════════════════════ */}
      <section className="pv-wrap pv-patient-video-section">
        <div className="pv-pv-header sr">
          <p className="sec-tag">Hear From a Real Patient</p>
          <h2 className="sec-h">
            "They Are<br /><em>Perfect!"</em>
          </h2>
        </div>
        <div className="pv-pv-layout">
          <div className="pv-pv-video-wrap sr-left">
            <div className="pv-pv-frame">
              <video controls
                poster="/testimonial_4.jpg">
                <source
                  src="/Testimonial_4_1646342984.mp4"
                  type="video/mp4"
                />
                Your browser does not support video.
              </video>
            </div>
          </div>
          <div className="pv-pv-quote sr-right">
            <blockquote className="pv-big-quote">
              <div className="pv-big-quote-mark">"</div>
              <p>
                Because of Dr. Slaman, my teeth are beautiful! I've wanted veneers on my
                front teeth for years but because of my fear of dentists, I kept putting it
                off. I told Dr. Slaman I wanted my front teeth to look better and I didn't
                need them to be perfect. Well, guess what? They are perfect! His work is
                impeccable. He even sent them back to the lab once because they were not up
                to his standards... I can finally smile with confidence which feels really good.
              </p>
              <cite>— Lana Kiehne</cite>
              <a href="https://maps.app.goo.gl/dfGgpCLMJe65BTvF8"
                target="_blank" rel="noopener noreferrer"
                className="pv-big-quote-link">
                Read Full Review on Google →
              </a>
            </blockquote>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          S13 — TREATMENT TIMELINE (dark)
          UNIQUE: clinic hallway / dental tools
      ══════════════════════════════════ */}
      <section className="pv-timeline-section">
        <div className="pv-timeline-bg" />
        <div className="pv-timeline-overlay" />
        <div className="pv-timeline-inner">
          <div className="pv-timeline-header sr">
            <p className="sec-tag" style={{ color: 'var(--c-sand)' }}>Step by Step</p>
            <h2 className="sec-h" style={{ color: '#fff' }}>
              Porcelain Veneer<br /><em style={{ color: 'var(--c-sand)' }}>Treatment Timeline</em>
            </h2>
            <p className="sec-body" style={{ color: 'rgba(245,240,232,.55)', marginTop: '.8rem', maxWidth: '48ch' }}>
              Most of our patients can receive their final restorations in as little as
              two weeks. When you choose our dental office in Albuquerque for veneers,
              you can expect your treatment to consist of several steps:
            </p>
          </div>
          <div className="pv-steps">
            {TIMELINE_STEPS.map((s, i) => (
              <div className="pv-step sr" key={s.num} style={{ transitionDelay: `${i * 0.09}s` }}>
                <div className="pv-step-num">{s.num}</div>
                <div className="pv-step-connector">
                  <div className="pv-step-dot" />
                  {i < TIMELINE_STEPS.length - 1 && <div className="pv-step-line" />}
                </div>
                <div className="pv-step-body">
                  <h3 className="pv-step-title">{s.title}</h3>
                  <p className="pv-step-desc">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Recovery note */}
          <div className="pv-recovery-note sr">
            <div>
              <strong>Recovery</strong>
              <p>Veneers have little to no recovery time compared to other treatments, so patients can continue their normal routine on the same day as their procedure.</p>
            </div>
          </div>

          <div className="pv-timeline-cta sr">
            <a href="#pv-contact" className="btn btn-fill">Request a Consultation</a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          S14 — REVIEWS SET 2
      ══════════════════════════════════ */}
      <section className="pv-reviews-section pv-reviews-section--warm">
        <div className="pv-reviews-header sr">
          <div>
            <p className="sec-tag">450+ Five-Star Reviews</p>
            <h2 className="sec-h">
              "I So Appreciate<br /><em>This Team."</em>
            </h2>
          </div>
          <a href="https://maps.google.com/maps?cid=13452876912051634118"
            target="_blank" rel="noopener noreferrer"
            className="btn btn-line">
            View All on Google →
          </a>
        </div>
        <div className="pv-reviews-grid">
          {REVIEWS_3.map((r) => <ReviewCard key={r.name} r={r} />)}
        </div>
      </section>

      {/* ══════════════════════════════════
          S15 — AFTERCARE (3 cards)
          UNIQUE: woman brushing teeth
      ══════════════════════════════════ */}
      <section className="pv-aftercare-section">
        <div className="pv-aftercare-photo sr-left">
          <img
            src="/1838.jpg"
            alt="Aftercare for porcelain veneers"
          />
          <div className="pv-aftercare-overlay" />
        </div>
        <div className="pv-aftercare-copy sr-right">
          <p className="sec-tag">Protect Your Investment</p>
          <h2 className="sec-h">
            Aftercare for<br /><em>Porcelain Veneers</em>
          </h2>
          <div className="pv-aftercare-cards">
            {AFTERCARE.map((a, i) => (
              <div className="pv-aftercare-card sr" key={a.title} style={{ transitionDelay: `${i * 0.1}s` }}>
                <span className="pv-aftercare-ico">
                    <img src={a.img} alt={a.title} />
                </span>
                <div>
                  <div className="pv-aftercare-title">{a.title}</div>
                  <p className="pv-aftercare-desc">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          S16 — VENEERS vs BONDING
          UNIQUE: before/after comparison
      ══════════════════════════════════ */}
      <section className="pv-wrap pv-compare-section">
        <div className="pv-compare-header sr">
          <p className="sec-tag">Know Your Options</p>
          <h2 className="sec-h">
            Alternatives to Veneers —<br /><em>Understanding Dental Bonding</em>
          </h2>
        </div>
        <div className="pv-compare-grid">
          <div className="pv-compare-card pv-compare-card--veneers sr-left">
            <div className="pv-compare-card-label">Veneers</div>
            <p className="pv-compare-desc">
              An IPS e.max veneer effectively covers the entire front surface of a treated
              tooth to fix multiple aesthetic issues with one shell. Veneers cost more than
              bonding but also provide longer-lasting, higher-quality results. This treatment
              works best for patients who are ready to commit to a permanent treatment that
              can conceal more extensive and widespread cosmetic flaws.
            </p>
            <ul className="pv-compare-pros">
              <li>Longer-lasting (10–15 years)</li>
              <li>More stain-resistant</li>
              <li>Fixes multiple issues at once</li>
              <li>Superior aesthetics</li>
            </ul>
          </div>
          <div className="pv-compare-vs">vs</div>
          <div className="pv-compare-card pv-compare-card--bonding sr-right">
            <div className="pv-compare-card-label">Bonding</div>
            <p className="pv-compare-desc">
              While veneers may fix multiple cosmetic flaws at once, they require the
              removal of some enamel for the shell to properly fit over your tooth.
              Bonding does not take away any enamel so the treatment is reversible.
              However, bonding tends to work best for small, localized problems like a
              chipped corner or a single stain.
            </p>
            <ul className="pv-compare-pros">
              <li>No enamel removal</li>
              <li>Reversible treatment</li>
              <li>More affordable</li>
              <li>Great for minor issues</li>
            </ul>
          </div>
        </div>
        <div className="pv-compare-cta sr">
          <p className="sec-body" style={{ textAlign: 'center', maxWidth: '52ch', margin: '0 auto' }}>
            During a consultation and exam, our dentist will discuss your options and
            recommend applicable treatments to match your unique needs.
          </p>
          <div className="pv-compare-btns">
            <a href="#pv-contact" className="btn btn-fill">I'm Ready to Book a Consultation</a>
            <a href="/services/dental-bonding" className="btn btn-line">Explore Dental Bonding</a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          S17 — COMBINE WITH THESE TREATMENTS
          UNIQUE images per treatment
      ══════════════════════════════════ */}
      <section className="pv-combine-section">
        <div className="pv-combine-header sr">
          <p className="sec-tag">Pair With</p>
          <h2 className="sec-h">
            Create a Smile Makeover by<br /><em>Combining Veneers With These Treatments</em>
          </h2>
        </div>
        <div className="pv-combine-grid">
          <div className="pv-combine-card sr-left">
            <div className="pv-combine-img">
              <img
                src="/4077.jpg"
                alt="Professional teeth whitening"
              />
            </div>
            <div className="pv-combine-body">
              <h3 className="pv-combine-title">Teeth Whitening</h3>
              <p className="pv-combine-desc">
                Our trusted ceramists can match the color and shade of your veneers to
                the rest of your teeth. However, you probably don't want your new veneers
                to match any discoloration. Teeth whitening can enhance the brightness of
                teeth so that a new set of veneers can become a seamless part of your
                vibrant new smile.
              </p>
              <a href="/services/whitening" className="btn btn-fill" style={{ marginTop: '.8rem' }}>
                Explore Teeth Whitening →
              </a>
            </div>
          </div>
          <div className="pv-combine-card sr-right">
            <div className="pv-combine-img">
              <img
                src="/photo-1629909613654-28e377c37b09.jpg"
                alt="Gum contouring procedure"
              />
            </div>
            <div className="pv-combine-body">
              <h3 className="pv-combine-title">Gum Contouring</h3>
              <p className="pv-combine-desc">
                While veneers can change the shape of a tooth and other cosmetic
                properties, they cannot affect the look of your gums. Gum contouring
                gently removes excess gum tissue and reshapes your gumline for a balanced
                smile that highlights your teeth. The procedure is relatively quick and simple.
              </p>
              <a href="/services/gum-contouring" className="btn btn-fill" style={{ marginTop: '.8rem' }}>
                Explore Gum Contouring →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          S18 — FAQ (accordion)
      ══════════════════════════════════ */}
      <section className="pv-faq-section">
        <div className="pv-faq-header sr">
          <p className="sec-tag" style={{ color: 'var(--c-sand)' }}>Common Questions</p>
          <h2 className="sec-h" style={{ color: '#fff' }}>
            Frequently Asked<br /><em style={{ color: 'var(--c-sand)' }}>Questions About Veneers</em>
          </h2>
        </div>
        <div className="pv-faq-list">
          {FAQS.map((f, i) => (
            <div
              className={`pv-faq-item ${openFaq === i ? ' pv-faq-item--open' : ''}`}
              key={i}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <button className="pv-faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                <span>{f.q}</span>
                <span className="pv-faq-arrow">{openFaq === i ? '−' : '+'}</span>
              </button>
              <div className="pv-faq-a">
                <p>{f.a}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="pv-faq-cta sr">
          <a href="#pv-contact" className="btn btn-fill">Ask Our Team a Question</a>
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