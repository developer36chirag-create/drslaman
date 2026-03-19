import React, { useEffect } from 'react'
import './Home.css'

/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */
const TICKER_ITEMS = [
  'Cosmetic Dentistry','Dental Implants','Porcelain Veneers','Teeth Whitening',
  'CEREC Same-Day Crowns','Sleep Dentistry','Invisalign','Full-Mouth Reconstruction',
  'General Dentistry','Restorative Treatments',
]

const STATS = [
  { n: '30+', l: 'Years of Excellence',  d: 'Three decades crafting beautiful, healthy smiles for Albuquerque families.' },
  { n: '5★',  l: 'Patient Satisfaction', d: 'Consistently rated five stars on Google, Yelp, and Healthgrades.' },
  { n: '5K+', l: 'Smiles Transformed',   d: 'Thousands of patients who now smile with complete confidence every day.' },
  { n: '1',   l: 'Visit CEREC Crowns',   d: 'Same-day ceramic crowns — no temporary, no second appointment.' },
]

const TESTIMONIALS_1 = [
  { text: "Dr. Slaman has been my dentist for longer than I can remember. He and his staff are so kind and considerate. I had a bicycle accident in September that resulted a broken front tooth. The accident was on a Sunday and they got me in on Monday! I was so grateful. Dr. Slaman's work is impeccable! All of my family members in town see him and we all love him and his staff. I highly recommend them.", who: 'Elaine Rieske', src: 'Google' },
  { text: "Dr. Slaman was very personable. He took the time to answer all my questions honestly and made sure to tell me every possibility for my dental care. Office staff was so kind and friendly. I highly recommend this office and dentist. I received superior care the entire time.", who: 'Amanda Seldon', src: 'Google' },
]

const TESTIMONIALS_2 = [
  { text: "Dr Salman is the best dentist I have ever had. He is a perfectionist with his work, I appreciate all his work on fixing my teeth number 1 dentist period", who: 'Wayne Delora', src: 'Google' },
  { text: "Kind gentle professional. Greatest kindest people. THANKS very very much. It's an amazing practice.", who: 'Brett Kamerman', src: 'Google' },
]

const TESTIMONIALS_3 = [
  { text: "Dr. Slaman & Associates are always very kind, professional & very informative. I always look forward to getting my Teeth cleaned. I love walking away with a Pearly White smile, makes me feel new, refreshed & happy!! Thank you", who: 'Crystal Rast', src: 'Google' },
  { text: "Dr Slaman helped me recover from a horrific facial trauma His patient and informative approach eased the pain and temporary disfigurement His perfection is mirrored by his staff as they are the consummate professionals We are lucky to have such service in Albuquerque", who: 'Sandra Casper', src: 'Google' },
]

const TESTIMONIALS_4 = [
  { text: "Our family of 8 has been with Dr. Slaman's office for over 7 years now and they have consistently provided exceptional dental service time and time again. Dr. Slaman is kind, personable, and professional, as is his staff. A++ in every way! It's comforting knowing that we are in capable hands.", who: 'Carrie Rose', src: 'Google' },
  { text: "Excellent care as always. Dr. Slaman is a sensitive, skillful dentist who uses the most up-to date procedures and equipment. Everyone in the office is friendly and they all do their best to make me feel comfortable.", who: 'Teresa Costello', src: 'Google' },
]

const PROCEDURES = [
  {
    num: '01', tag: 'Permanent Restoration', name: 'Dental', nameEm: 'Implants',
    img: '/Images/Dental Implants.png',
    body1: "Losing teeth not only affects the function and form of your smile but your overall health as well. Without teeth, the lack of natural tooth roots causes your jawbone to shrink, making your face look sunken and aged. Dental implants, which are strong titanium posts surgically anchored into your jaw, are the only dental care treatment that can not only stop jaw bone atrophy but reverse it.",
    body2: "Implants help keep your jawbone healthy and strong. They're the most secure method of supporting dental restorations like crowns, bridges, and dentures. Dr. Slaman performs all implant surgeries himself in his Albuquerque practice instead of sending our guests to another dentist.",
    cta: 'Explore Dental Implants',
  },
  {
    num: '02', tag: 'Cosmetic Transformation', name: 'Smile', nameEm: 'Makeover',
    img: '/Images/Smile Makeover.png',
    body1: "Dr. Slaman creates personalized treatments at his Albuquerque cosmetic dentistry office designed to rejuvenate your smile. If extensive restoration is needed, you'll probably need more than one visit to achieve the smile of your dreams. Dr. Slaman may recommend dental procedures such as teeth whitening, veneers, dental bonding, and laser gum contouring, keeping in mind your schedule and budget.",
    body2: "Dr. Slaman is a forward-thinking dentist who is constantly researching the latest technological advances in dentistry. He now uses state-of-the-art cosmetic dental imaging to provide you with a preview of how your new smile will look like.",
    cta: 'Explore Smile Makeovers',
  },
  {
    num: '03', tag: 'Restorative Care', name: 'Dental', nameEm: 'Crowns',
    img: '/Images/Dental Crowns.png',
    body1: "Broken, cracked, decayed, or weakened teeth can make eating, drinking, or speaking painful and difficult. A dental crown can restore the function and form of your compromised teeth and prevent the need for extraction in the future.",
    body2: "You may be able to receive your crown during one visit thanks to our in-office CEREC® system, which creates natural-looking dental crowns while you relax in our comfortable Albuquerque, NM dental office.",
    cta: 'Explore Dental Crowns',
  },
  {
    num: '04', tag: 'Sleep & Wellness', name: 'Sleep Apnea', nameEm: 'Treatment',
    img: '/Images/Sleep Apnea Treatment.png',
    body1: "If you wake up gasping for air when you sleep, you could have sleep apnea. Interrupted sleep causes concentration, mood, and overall health to suffer. Your bed partner's health could be disturbed as well. Sleep apnea can lead to serious health problems like depression, hypertension, and heart disease if left untreated.",
    body2: "Can a dentist really help you sleep better? Absolutely. Dr. Slaman can provide you with a custom-made, non-surgical appliance that fits comfortably over your teeth during sleep. It opens your airways to keep oxygen flowing as you breathe.",
    cta: 'Sleep Apnea Treatment',
  },
]

const TECH_CARDS = [
  {
    img: '/Images/Digital X-Rays.png', badge: 'Technology 01', tag: 'Imaging',
    name: 'Digital', nameEm: 'X-Rays',
    desc: "Our dentistry practice uses digital x-rays due to the advantages offered over conventional imaging techniques. Digital x-ray processing takes less time and allows images to be enhanced instantly. This exposes patients to less radiation. The detailed clarity allows Dr. Slaman to quickly review your x-rays and make a diagnosis.",
    pills: ['90% Less Radiation', 'Instant Results', 'Enhanced Clarity'],
  },
  {
    img: '/Images/Orthophos SL.png', badge: 'Technology 02', tag: '3D Imaging',
    name: 'Orthophos', nameEm: 'SL',
    desc: "The Orthophos SL imaging device produces 3-D images of your teeth, soft tissues, nerve pathways, and bone in a single scan. This incredible machine allows Dr. Slaman to evaluate any number of potential dental diseases or other issues such as jawbone recession.",
    pills: ['Full 3D Scan', 'Implant Planning', 'Single Scan'],
  },
  {
    img: '/Images/DIAGNOdent.png', badge: 'Technology 03', tag: 'Early Detection',
    name: 'DIAGNO', nameEm: 'dent',
    desc: "A highly trained dentist like Dr. Slaman knows the key to effective dental treatments is early detection. DIAGNOdent uses laser fluorescence to detect a small cavity inside a tooth before it becomes a large cavity. This advanced dental technology is much more precise than visual inspections or x-rays.",
    pills: ['Laser Fluorescence', 'Early Detection', 'Non-Invasive'],
  },
  {
    img: '/Images/Sirona Primescan.png', badge: 'Technology 04', tag: 'Intraoral Scanning',
    name: 'Sirona', nameEm: 'Primescan',
    desc: "The cutting-edge Sirona Primescan intra-oral scanning system provides dentists the ability to offer patients a number of treatment options including same-day restorations and sleep apnea therapy. Traditional dental restorations are often uncomfortable, involve messy impressions, and can take weeks and multiple office visits to complete.",
    pills: ['Same-Day Crowns', 'No Impressions', 'Digital Workflow'],
  },
]

const RS_COLS = [
  {
    num: '01', name: 'Cosmetic',
    items: ['Dental Bonding','Gum Contouring','Porcelain Veneers','Smile Makeover','Teeth Whitening','Complex Dental Restoration'],
  },
  {
    num: '02', name: 'Restorative',
    items: ['Dental Bridges','Dental Crowns','Dental Filling','Dental Implants','Dentures','Implant-Supported Dentures','Full Mouth Reconstruction','Inlays and Onlays','Dental Implant Restoration'],
  },
  {
    num: '03', name: 'General',
    items: ['Sleep Apnea Treatment','Dental Sealants','Fluoride Treatments','Periodontal Therapy','Missing Teeth'],
  },
]

const WHY_CARDS = [
  { ico: '🏆', title: 'CareCredit®', desc: 'Are you interested in financing your care? CareCredit allows patients to make affordable monthly payments.' },
  { ico: '💡', title: 'In-Office Payment Plans', desc: "Dr. Slaman will work with you to create a payment plan that fits your individual financial needs." },
  { ico: '🤝', title: 'Explore Payment Options', desc: "Dr. Slaman's friendly, knowledgeable staff will help you understand your costs and payment options." },
]

const DR_MEMS = [
  'American Dental Association','American Academy of Implant Dentistry',
  'Academy of General Dentistry','American Academy of Sleep Medicine',
  'American Academy of Cosmetic Dentistry','Spear Faculty Club',
]

const DR_TAGS = [
  'American Dental Association','Academy of General Dentistry',
  'American Academy of Cosmetic Dentistry','American Academy of Implant Dentistry',
  'American Academy of Sleep Medicine','Spear Faculty Club',
]

/* ─────────────────────────────────────────
   SMALL REUSABLE PIECES
───────────────────────────────────────── */
function TestimonialsBlock({ reviews, cardClass = 'testimonials__card' }) {
  return (
    <div className="testimonials__grid">
      {reviews.map((r) => (
        <div className={`${cardClass} sr`} key={r.who}>
          <div className="testimonials__stars">★★★★★</div>
          <p className="testimonials__txt">"{r.text}"</p>
          <div className="testimonials__who">— {r.who}</div>
          <div className="testimonials__src">via {r.src}</div>
        </div>
      ))}
    </div>
  )
}

function VideoSection({ eyebrow, title, titleEm, poster, src, description, btnLabel }) {
  return (
    <>
      <div className="video-header">
        <p className="sec-tag">{eyebrow}</p>
        <h2 className="sec-h">{title} <em>{titleEm}</em></h2>
      </div>
      <div className="video-content">
        <div className="video-wrapper">
          <video controls poster={poster}>
            <source src={src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div>
          <p className="video-description">{description}</p>
          <a href="#contact" className="btn btn-fill" style={{ marginTop: '10px' }}>{btnLabel}</a>
        </div>
      </div>
    </>
  )
}

/* ─────────────────────────────────────────
   SCRIPTS — scroll reveal + observers
   (runs once after mount in App.jsx useEffect,
    but rs-item / at-card need their own here)
───────────────────────────────────────── */
function useHomeObservers() {
  useEffect(() => {
    /* rs-item staggered reveal */
    const items = document.querySelectorAll('.rs-item')
    const obs1 = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const siblings = Array.from(e.target.closest('ul').querySelectorAll('.rs-item'))
          const idx = siblings.indexOf(e.target)
          setTimeout(() => e.target.classList.add('visible'), idx * 55)
          obs1.unobserve(e.target)
        }
      })
    }, { threshold: 0.1 })
    items.forEach((el) => obs1.observe(el))

    /* at-card reveal */
    const cards = document.querySelectorAll('.at-card')
    const obs2 = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const idx = Array.from(cards).indexOf(e.target)
          setTimeout(() => e.target.classList.add('at-visible'), (idx % 2) * 120)
          obs2.unobserve(e.target)
        }
      })
    }, { threshold: 0.1 })
    cards.forEach((c) => obs2.observe(c))

    /* at-stat reveal */
    const stats  = document.querySelectorAll('.at-stat')
    const bottom = document.querySelector('.at-bottom')
    if (bottom && stats.length) {
      stats.forEach((s) => {
        s.style.opacity   = '0'
        s.style.transform = 'translateY(16px)'
        s.style.transition = 'opacity .5s ease, transform .5s ease'
      })
      const obs3 = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            stats.forEach((s, i) => {
              setTimeout(() => { s.style.opacity = '1'; s.style.transform = 'translateY(0)' }, i * 80)
            })
            obs3.disconnect()
          }
        })
      }, { threshold: 0.2 })
      obs3.observe(bottom)
    }

    /* rs parallax */
    const handleScroll = () => {
      const bg = document.querySelector('.rs-bg')
      if (bg) bg.style.transform = `scale(1.04) translateY(${window.scrollY * 0.08}px)`
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      obs1.disconnect()
      obs2.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
}

/* ─────────────────────────────────────────
   HOME PAGE
───────────────────────────────────────── */
export default function Home() {
  useHomeObservers()

  return (
    <main>

      {/* ══════════════════════════════════
          HERO
      ══════════════════════════════════ */}
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Albuquerque, New Mexico</p>
          <h1 className="hero-h1">An Award-Winning,<br /><em>Hometown Dentist</em></h1>
          <p className="hero-lead">
            At the practice of James Slaman DDS, PC we combine advanced cosmetic and restorative
            dentistry with genuine, patient-first care — because you deserve a smile you're proud
            of every single day.
          </p>
          <div className="hero-btns">
            <a href="#contact" className="btn btn-fill">Schedule a Consultation</a>
            <a href="#services" className="btn btn-line">Explore Services <span className="arr">→</span></a>
          </div>
          <div className="hero-trust">
            <span className="tbadge"><i>★</i> 5-Star Rated Practice</span>
            <span className="tbadge"><i>✦</i> 30+ Years Experience</span>
            <span className="tbadge"><i>◈</i> Accepting New Patients</span>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-photo" />
          <div className="hero-chip">
            <strong>New Patient Special</strong>
            <span>Complimentary smile consultation — call us today</span>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          TICKER
      ══════════════════════════════════ */}
      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <React.Fragment key={i}>
              <span>{item}</span><span className="dot">·</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════
          STATS STRIP
      ══════════════════════════════════ */}
      <div className="stats-strip">
        {STATS.map((s) => (
          <div className="stat-block sr" key={s.l}>
            <div className="stat-n">{s.n}</div>
            <div className="stat-l">{s.l}</div>
            <div className="stat-d">{s.d}</div>
          </div>
        ))}
      </div>

      {/* ══════════════════════════════════
          SMILE INTRO — SPLIT
      ══════════════════════════════════ */}
      <section className="smile-split">
        <div className="smile-photo" />
        <div className="smile-copy">
          <p className="sec-tag">Transform Your Smile</p>
          <h2 className="sec-h">A Superior General, Restorative,<br /><em>Cosmetic Dentistry Office</em></h2>
          <p className="sec-body">
            James Slaman, DDS, is an Albuquerque native specializing in the highest quality of dental
            care. His modern practice provides the local community with treatment that is state-of-the-art,
            comfortable, and life-changing. Dr. Slaman is a cosmetic dentistry expert who also offers a
            full selection of general and restorative treatments, from dental implant restorations to
            teeth whitening.
          </p>
          <ul className="bullet-list">
            <li>Dr. Slaman can help brighten and restore your smile, which in turn, can boost your self-confidence in your personal and professional life.</li>
            <li>To schedule an appointment at our Albuquerque, NM, dentistry office contact us online or call:</li>
            <li>(505) 226-8598</li>
          </ul>
          <a href="#contact" className="btn btn-fill" style={{ alignSelf: 'flex-start', marginTop: '.5rem' }}>
            Start Your Smile Journey →
          </a>
        </div>
      </section>

      {/* ══════════════════════════════════
          CONVENIENT SCHEDULING
      ══════════════════════════════════ */}
      <section id="financing" className="convenient-section">
        <div className="convenient-cta">
          <div style={{ flex: 1 }}>
            <h3>Convenient Online <em>Scheduling</em></h3>
            <p>
              At Slaman Dental, we offer flexible scheduling for the convenience of our patients.
              We provide a variety of scheduling options so you can find an appointment that fits
              your busy lifestyle.
            </p>
          </div>
          <div style={{ flexShrink: 0 }}>
            <a href="#contact" className="btn btn-fill">Schedule Now →</a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          TESTIMONIALS — SET 1
      ══════════════════════════════════ */}
      <section id="reviews" className="wrap" style={{ background: 'var(--c-cream)' }}>
        <div className="t-header">
          <div>
            <p className="sec-tag">Learn Why Patients Love Us</p>
            <h2 className="sec-h">I was immediately welcomed<br /><em>with open arms.</em></h2>
          </div>
        </div>
        <TestimonialsBlock reviews={TESTIMONIALS_1} cardClass="testimonials__card" />
      </section>

      {/* ══════════════════════════════════
          BEFORE & AFTER
      ══════════════════════════════════ */}
      <section className="wrap ba-section" style={{ background: 'var(--c-warm)' }}>
        <div className="ba-left">
          <p className="sec-tag">Real Results</p>
          <h2 className="sec-h">Stunning Before<br /><em>and After Photos</em></h2>
          <p className="sec-body">
            Dr. Slaman believes in building long-lasting relationships with everyone who visits
            our Albuquerque dentistry practice. Regular checkups and personalized service allow
            patients to enjoy the countless benefits that come with a lifetime of healthy,
            attractive smiles. If you are embarrassed with the appearance of your teeth, our
            dentist can craft a stunning smile with cosmetic treatments customized to meet your
            individual goals.
          </p>
          <p className="sec-body">
            Here are a couple of examples of the kind of smile transformations Dr. Slaman can
            perform at our Albuquerque dentistry practice:
          </p>
          <a href="#contact" className="btn btn-fill" style={{ marginTop: '10px' }}>
            See More Amazing Results
          </a>
        </div>
        <div className="ba-grid">
          <div className="ba-card sr">
            <div className="ba-img"><img src="/Images/before and after of porcelain veneers.png" alt="Porcelain Veneers" /></div>
            <div className="ba-info"><div className="ba-title">Porcelain Veneers</div></div>
          </div>
          <div className="ba-card sr">
            <div className="ba-img"><img src="/Images/before and after of Dental Bonding.png" alt="Dental Bonding" /></div>
            <div className="ba-info"><div className="ba-title">Dental Bonding</div></div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          VIDEO — PRACTICE OVERVIEW
      ══════════════════════════════════ */}
      <section className="wrap" style={{ background: 'var(--c-cream)' }}>
        <VideoSection
          eyebrow="Patient Experience"
          title="Top-Notch"
          titleEm="Dental Care"
          poster="/Images/original.jpg"
          src="/Images/Practice_Overview.mp4"
          description="In this video, Dr. James Slaman and his patients discuss the goals of the practice and their experiences. Our team educates patients on oral health and treatment options so they receive the best care possible."
          btnLabel="Visit Our Video Gallery"
        />
      </section>

      {/* ══════════════════════════════════
          DR. JAMES SLAMAN — FEATURE
      ══════════════════════════════════ */}
      <section id="about" className="dr-feature">
        <div className="dr-photo" />
        <div className="dr-copy">
          <p className="sec-tag">Meet Your Doctor</p>
          <h2 className="sec-h">Dr. James Slaman —<br /><em>Is That Enough?</em></h2>
          <blockquote className="dr-quote">
            "Everyone is entitled to the best dental care possible — even if they don't have insurance."
          </blockquote>
          <p className="sec-body">
            Dr. Slaman was born and raised in Albuquerque, and still proudly calls it home. He received
            his dental surgery doctorate from the University of Missouri and has been recognized by his
            peers as the best dentist in Albuquerque. Dr. Slaman is a proud, three-time recipient of
            Albuquerque The Magazine's "Top Cosmetic Dentist" award. He regularly donates his time and
            cosmetic dentistry talents to underprivileged communities throughout New Mexico.
          </p>
          <div className="tag-cloud">
            {DR_TAGS.map((t) => <span className="tag" key={t}>{t}</span>)}
          </div>
          <a href="#contact" className="btn btn-fill" style={{ marginTop: '20px' }}>
            Learn More about Dr. Slaman
          </a>
        </div>
      </section>

      {/* ══════════════════════════════════
          SCHEDULE FORM
      ══════════════════════════════════ */}
      <section className="wrap schedule-section" style={{ background: 'var(--c-cream)' }}>
        <div className="schedule-left">
          <p className="sec-tag">Schedule a Visit to the Dentist Today!</p>
          <h2 className="sec-h">Ready for a Healthier<br /><em>and More Attractive Smile?</em></h2>
          <p className="sec-body">
            At the practice of James Slaman DDS, PC, in Albuquerque, New Mexico, every member of our
            team is dedicated to improving the health and appearance of your smile. Dr. Slaman uses the
            latest innovative treatments and proven technology in the field of modern dentistry to ensure
            patients receive comfortable treatments on a reduced timeline.
          </p>
          <p className="sec-body">
            Our highly trained dentist offers comprehensive general, restorative, and cosmetic treatments
            that can be custom-tailored to meet your needs. Dr. Slaman can provide the first-class dental
            care you deserve from the convenience of our office so that you don't have to worry about
            referrals to outside specialists.
          </p>
          <p className="sec-body">
            To schedule an appointment with our Albuquerque, NM, dentist, you can fill out the convenient
            form below:
          </p>
        </div>
        <div className="schedule-form-wrap">
          <p className="schedule-sub">Tell us a bit about yourself...</p>
          <form className="schedule-form" onSubmit={(e) => e.preventDefault()}>
            <div className="schedule-row">
              <div className="schedule-field">
                <label>Name</label>
                <input type="text" placeholder="Your full name" />
              </div>
              <div className="schedule-field">
                <label>Email</label>
                <input type="email" placeholder="your@email.com" />
              </div>
            </div>
            <div className="schedule-field">
              <label>Phone Number</label>
              <input type="tel" placeholder="(505) 000-0000" />
            </div>
            <div className="schedule-field">
              <label>Message</label>
              <textarea rows={4} placeholder="Tell us about your smile goals or any questions you have…" />
            </div>
            <button className="c-submit" type="submit">Send Message →</button>
          </form>
        </div>
      </section>

      {/* ══════════════════════════════════
          TESTIMONIALS — SET 2
      ══════════════════════════════════ */}
      <section className="wrap" style={{ background: 'var(--c-warm)' }}>
        <div className="t-header">
          <h2 className="sec-h">Dr. Slaman and His Staff<br /><em>Are So Professional and Caring.</em></h2>
        </div>
        <TestimonialsBlock reviews={TESTIMONIALS_2} cardClass="testimonials__card2" />
      </section>

      {/* ══════════════════════════════════
          TECHNOLOGY / COMFORT SECTION
      ══════════════════════════════════ */}
      <section id="technology" className="wrap" style={{ background: 'var(--c-cream)' }}>
        <p className="sec-tag">Emphasizes Comfort and Patient Education</p>
        <h2 className="sec-h">Dr. <em>Slaman</em></h2>
        <p className="sec-body" style={{ maxWidth: '74ch' }}>
          When you choose Dr. Slaman and his team of compassionate professionals for your dental care,
          you can expect to receive world-class service that exceeds your expectations. To ensure our
          patients experience the top-quality service they deserve when visiting our Albuquerque dentistry
          practice, Dr. Slaman provides:
        </p>
        <div className="tech-grid">
          {[
            { ico: '🦷', name: 'Luxurious Amenities', desc: "Our warm, inviting Albuquerque, NM, dental office is designed to put you at ease. The welcoming reception area features a comfortable couch and chairs, hot tea and coffee, and refreshing filtered water. Our treatment rooms feature warm, comfy blankets, as well as noise-canceling headphones to help you relax." },
            { ico: '🔬', name: 'Effective Anesthesia & Sedation', desc: "Some people are afraid of dentists because of the large anesthetic needle. That's why Dr. Slaman uses The Wand® anesthetic system at our dentistry practice. The Wand delivers a computer-regulated flow of anesthesia only to your damaged tooth and not to an entire area of your mouth. Our patients love it and say it's nearly pain-free." },
            { ico: '💻', name: 'Open Dialogue', desc: "Patient education is extremely important to Dr. Slaman and his dental team. They want you to be as informed as possible so you're fully aware of your current dental health and available treatment options. This will help you make better decisions about maintaining your oral health for years to come." },
          ].map((t) => (
            <div className="tech-card sr" key={t.name}>
              <div className="tech-ico">{t.ico}</div>
              <div className="tech-name">{t.name}</div>
              <p className="tech-desc">{t.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════
          FEATURED PROCEDURES
      ══════════════════════════════════ */}
      <section id="services" className="fp-section wrap" style={{ background: 'var(--c-warm)' }}>
        <div className="fp-header">
          <p className="fp-eyebrow">What We Specialize In</p>
          <h2 className="sec-h">Featured <em>Procedures</em></h2>
          <div className="fp-divider"><span /><i>✦</i><span /></div>
        </div>
        <div className="fp-list">
          {PROCEDURES.map((p, idx) => (
            <div
              className={`fp-item fp-item--visible${idx % 2 !== 0 ? ' fp-item--reverse' : ''}`}
              key={p.num}
            >
              <div className="fp-copy">
                <span className="fp-num">{p.num}</span>
                <p className="fp-tag">{p.tag}</p>
                <h3 className="fp-name">{p.name} <em>{p.nameEm}</em></h3>
                <p className="fp-body">{p.body1}</p>
                <p className="fp-body">{p.body2}</p>
                <a href="#contact" className="btn btn-fill" style={{ marginTop: '25px' }}>{p.cta}</a>
              </div>
              <div className="fp-img">
                <img src={p.img} alt={`${p.name} ${p.nameEm}`} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════
          VIDEO — HAPPY PATIENT
      ══════════════════════════════════ */}
      <section className="wrap" style={{ background: 'var(--c-cream)' }}>
        <VideoSection
          eyebrow="She Recommends Dr. Slaman:"
          title="A Happy Patient"
          titleEm="Explains Why"
          poster="/Images/A Happy Patient Explains Why.jpg"
          src="/Images/Testimonial_Francoise_Barnes.mp4"
          description="Francoise explains that she was facing several oral health issues and was dissatisfied with her former dentist's care. She found Dr. James Slaman, who proved to be an excellent listener and a skilled dentist with a comfortable office and friendly staff. Francoise says that under Dr. Slaman's care, she now feels healthier and more confident."
          btnLabel="View More Testimonials"
        />
      </section>

      {/* ══════════════════════════════════
          CHOOSE THE BEST DENTIST — SPLIT
      ══════════════════════════════════ */}
      <section className="dentist-section">
        <div className="dentist-image" />
        <div className="dentist-content">
          <p className="sec-tag">Meet Your Doctor</p>
          <h2 className="sec-h">Choose the Best Cosmetic Dentist in<br /><em>Albuquerque, New Mexico</em></h2>
          <p className="sec-body">
            We know you have many choices when it comes to local oral health professionals. That's why
            Dr. Slaman and his team strive to provide you with dental health services that truly stand
            out from the cosmetic dentistry crowd. Treating patients like family is one of the hallmarks
            of our practice. Thanks to his caring, personalized treatments, some of Dr. Slaman's patients
            have been coming to him for over 20 years. We hope you'll consider becoming a member of
            Dr. Slaman's extended family. CareCredit® financing and in-office payment plans are available
            to help you receive the dental care you need.
          </p>
          <p className="sec-body">
            Come experience the true meaning of exceptional dental care. To schedule an appointment,
            contact our Albuquerque, NM, practice online or call:
          </p>
          <h2 className="sec-h" style={{ fontSize: '37px', marginTop: '1rem' }}>(505) 226-9210</h2>
          <a href="#contact" className="btn btn-fill" style={{ marginTop: '25px' }}>
            I'm Ready to Request My Appointment Today
          </a>
        </div>
      </section>

      {/* ══════════════════════════════════
          TESTIMONIALS — SET 3
      ══════════════════════════════════ */}
      <section className="wrap" style={{ background: 'var(--c-cream)' }}>
        <div className="t-header">
          <h2 className="sec-h">Their Kindness Is <em>Beyond Measure.</em></h2>
        </div>
        <TestimonialsBlock reviews={TESTIMONIALS_3} cardClass="testimonials__card" />
      </section>

      {/* ══════════════════════════════════
          EXPERTLY PERFORMS A RANGE OF SERVICES
      ══════════════════════════════════ */}
      <section className="rs-section wrap">
        <div className="rs-bg" />
        <div className="rs-overlay" />
        <div className="rs-grain" />
        <div className="rs-header">
          <p className="rs-eyebrow">Comprehensive Care</p>
          <h2 className="rs-title">Dr. <em>Slaman</em></h2>
          <p className="rs-subtitle">Expertly Performs a Range of Services</p>
          <div className="rs-rule"><span /><i>✦</i><span /></div>
        </div>
        <div className="rs-grid">
          {RS_COLS.map((col) => (
            <div className="rs-col" key={col.num}>
              <div className="rs-cat-header">
                <span className="rs-cat-num">{col.num}</span>
                <h3 className="rs-cat-name"><em>{col.name}</em></h3>
              </div>
              <ul className="rs-items">
                {col.items.map((item) => (
                  <li key={item}>
                    <a className="rs-item" href="#">
                      <span className="rs-item-dot" />
                      <span className="rs-item-label">{item}</span>
                      <span className="rs-item-arr">→</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════
          ADVANCED TECHNOLOGIES
      ══════════════════════════════════ */}
      <section className="wrap" style={{ background: 'var(--c-warm)' }}>
        <div className="at-header">
          <p className="sec-tag">Used by Dr. Slaman</p>
          <h2 className="sec-h">Advanced <em>Technologies</em></h2>
          <p className="sec-body" style={{ maxWidth: '753px' }}>
            Dr. Slaman is a perfection-seeking dentist who isn't satisfied with providing "average" care.
            Thanks to continuing dental health education, he is always setting the bar higher for himself
            and his team. Dr. Slaman makes excellent use of the latest dental technologies available
            including dental lasers, air abrasion instruments, and the CEREC same-day dental crown system.
          </p>
        </div>
        <div className="at-grid">
          {TECH_CARDS.map((card, idx) => (
            <div className="at-card" key={idx}>
              <div className="at-card-img">
                <img src={card.img} alt={`${card.name} ${card.nameEm}`} />
                <div className="at-card-badge">{card.badge}</div>
              </div>
              <div className="at-card-body">
                <p className="at-card-tag">{card.tag}</p>
                <h3 className="at-card-name">{card.name} <em>{card.nameEm}</em></h3>
                <p className="at-card-desc">{card.desc}</p>
                <div className="at-pills">
                  {card.pills.map((p) => <span className="at-pill" key={p}>{p}</span>)}
                </div>
                <a href="#" className="at-card-link">Learn More <span className="lnk-arr">→</span></a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════
          TESTIMONIALS — SET 4
      ══════════════════════════════════ */}
      <section className="wrap" style={{ background: 'var(--c-cream)' }}>
        <div className="t-header">
          <h2 className="sec-h">"A++ in <em>Every Way!"</em></h2>
        </div>
        <TestimonialsBlock reviews={TESTIMONIALS_4} cardClass="testimonials__card" />
      </section>

      {/* ══════════════════════════════════
          VIRTUAL TOUR BANNER
      ══════════════════════════════════ */}
      <section className="tour-banner">
        <div className="tour-bg" />
        <div className="tour-inner">
          <h2>Care for a Tour of Our Office?<br />Come On In!</h2>
          <p>Just click the "Start Tour" button to begin.</p>
          <a href="#contact" className="tour-btn">
            <span className="play-circle">▶</span>
            Start Tour
          </a>
        </div>
      </section>

      {/* ══════════════════════════════════
          INSURANCE / FINANCING
      ══════════════════════════════════ */}
      <section className="wrap" style={{ background: 'var(--c-warm)' }}>
        <h2 className="sec-h">Does Insurance Cover<br /><em>Dr. Slaman's Procedures?</em></h2>
        <p className="sec-body" style={{ maxWidth: '753px' }}>
          Various general and restorative dental procedures are fully covered or partially covered by
          dental insurance plans. However, cosmetic dental treatments usually are not covered. Dr. Slaman
          firmly believes everyone is entitled to the best dental care possible even if they don't have
          insurance or can not afford certain treatments.
        </p>
        <p className="sec-body" style={{ maxWidth: '753px' }}>
          At the practice of James Slaman DDS, PC, in Albuquerque, NM, you don't need to spend a million
          bucks to look like a million bucks, which is why we offer the following financing options:
        </p>
        <div className="why-grid">
          {WHY_CARDS.map((w) => (
            <div className="why-card sr" key={w.title}>
              <div className="why-ico">{w.ico}</div>
              <div className="why-title">{w.title}</div>
              <p className="why-desc">{w.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════
          DR PANEL — ABOUT
      ══════════════════════════════════ */}
      <div className="dr-panel">
        <div className="dr-panel-img" />
        <div className="dr-panel-body">
          <p className="sec-tag">About the Doctor</p>
          <h2>James Slaman, DDS, PC</h2>
          <p className="spec">Cosmetic &amp; Restorative Dentistry · Albuquerque, NM</p>
          <p>
            <strong>Dr. James Slaman</strong> specializes in{' '}
            <em style={{ color: 'var(--c-terra)' }}>cosmetic dentistry</em> and offers a full selection
            of <strong>general</strong> and <strong>restorative treatments</strong>. Dr. Slaman is a
            member of various professional associations, including:
          </p>
          <div className="dr-mems">
            {DR_MEMS.map((m) => <span className="dr-mem" key={m}>{m}</span>)}
          </div>
          <p className="dr-contact">
            To request an appointment at our <strong>Albuquerque, NM dental office</strong>,{' '}
            <a href="#contact">contact us online</a> or call{' '}
            <a href="tel:5052268598">(505) 226-8598</a>.
          </p>
        </div>
      </div>

      {/* ══════════════════════════════════
          OFFICE — SPLIT
      ══════════════════════════════════ */}
      <section id="office" className="office-split">
        <div className="office-copy">
          <p className="sec-tag">Visit Us</p>
          <h2 className="sec-h">Albuquerque<br /><em>Office</em></h2>
          <div className="o-row">
            <span className="o-ico">📍</span>
            <div>
              <div className="o-lbl">Address</div>
              <div className="o-val">8650 Alameda Blvd NE, Ste 104E<br />Albuquerque, NM 87122</div>
            </div>
          </div>
          <div className="o-row">
            <span className="o-ico">🕐</span>
            <div>
              <div className="o-lbl">Hours</div>
              <div className="o-val">Open Today 7:30 AM – 4:30 PM</div>
            </div>
          </div>
          <div className="o-row">
            <span className="o-ico">📞</span>
            <div>
              <div className="o-lbl">Phone</div>
              <div className="o-val"><a href="tel:5052268598">(505) 226-8598</a></div>
            </div>
          </div>
          <div className="office-btns">
            <a href="#" className="o-btn fill">About Our Office</a>
            <a href="https://maps.google.com/?q=8650+Alameda+Blvd+NE+Albuquerque+NM+87122" target="_blank" rel="noopener noreferrer" className="o-btn ghost">Directions →</a>
            <a href="tel:5052268598" className="o-btn ghost">(505) 226-8598</a>
          </div>
        </div>
        <div className="office-map" />
      </section>

      {/* ══════════════════════════════════
          CONTACT FORM
      ══════════════════════════════════ */}
      <section id="contact" className="contact-wrap">
        <div className="contact-bg" />
        <div className="contact-inner">
          <p className="sec-tag">Reach Out</p>
          <h2 className="sec-h" style={{ color: '#fff' }}>Contact Us<br /><em>Today</em></h2>
          <p className="sec-sub">Our friendly team is ready to answer your questions and help you schedule your visit.</p>
          <form className="c-form" onSubmit={(e) => e.preventDefault()}>
            <div className="c-row">
              <div className="c-field"><label>Name</label><input type="text" placeholder="Your full name" /></div>
              <div className="c-field"><label>Email</label><input type="email" placeholder="your@email.com" /></div>
            </div>
            <div className="c-field"><label>Phone Number</label><input type="tel" placeholder="(505) 000-0000" /></div>
            <div className="c-field">
              <label>Message</label>
              <textarea rows={4} placeholder="Tell us about your smile goals or any questions you have…" />
            </div>
            <button className="c-submit" type="submit">Send Message →</button>
          </form>
        </div>
      </section>

      {/* ══════════════════════════════════
          RATE BAR
      ══════════════════════════════════ */}
      <section className="rate-bar">
        <h3>Rate, Review &amp; Explore</h3>
        <div className="rate-icons">
          <a href="#" className="rate-ico" title="Google Reviews">G</a>
          <a href="#" className="rate-ico" title="Yelp">Y</a>
          <a href="#" className="rate-ico" title="Healthgrades">HG</a>
        </div>
      </section>

    </main>
  )
}