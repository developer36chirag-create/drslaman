import React, { useEffect } from 'react';
import './Office.css';

/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */


const BADGES = [
  { ico: '★', label: '5-Star Rated' },
  { ico: '✦', label: 'Since 1992' },
  { ico: '◈', label: 'Accepting New Patients' },
];


const HOURS = [
  { day: 'Monday',    time: '7:30 AM – 4:30 PM', open: true  },
  { day: 'Tuesday',   time: '7:30 AM – 4:30 PM', open: true  },
  { day: 'Wednesday', time: '7:30 AM – 4:30 PM', open: true  },
  { day: 'Thursday',  time: '7:30 AM – 4:30 PM', open: true  },
  { day: 'Friday',    time: '7:30 AM – 12:00 PM', open: true  },
  { day: 'Saturday',  time: 'Closed',             open: false },
  { day: 'Sunday',    time: 'Closed',             open: false },
];

const AFFILIATION_PILLS = [
  { name: "AAID", img: "/AAID_Logo.png" },
  { name: "ADA", img: "/original-1573102175.png" },
  { name: "AADSM", img: "/original-1573102669.png" },
  { name: "AGD", img: "/agd-blk-xs.png" },
  { name: "AACD", img: "/original_Logo-AACD.svg" },
];

const BENEFITS = [
  {
    ico: '🛋️',
    title: 'Comfortable Atmosphere',
    desc: 'Our Albuquerque practice wants every patient to feel as comfortable and relaxed as possible. We offer cozy seating in our waiting room as well as warm blankets and noise-canceling headphones in our treatment rooms. Our reception area also provides hot tea, coffee, and filtered water while you wait.',
  },
  {
    ico: '🤝',
    title: 'Patient-First Approach',
    desc: 'The patient is our number one priority. Dr. James Slaman takes the time to get to know you and your oral health needs. By listening to your goals, Dr. Slaman can recommend the best ways to help you achieve your desired results. We never recommend a treatment unless we feel it is necessary.',
  },
  {
    ico: '🔬',
    title: 'Advanced Technology',
    desc: 'We use the latest tools and techniques in the dental industry for exceptional care. Our advanced technology allows us to provide more options, streamline treatments, and minimize recovery time. Our state-of-the-art technology makes us one of the most advanced practices in Albuquerque.',
  },
];

const TECH_ITEMS = [
  {
    ico: '🦷',
    title: 'CEREC',
    desc: 'Our CEREC® system creates durable, life-like restorations in a single appointment. By using digital impressions of your tooth, the CEREC system can create a dental crown that seamlessly blends in with your surrounding teeth — all in one visit.',
  },
  {
    ico: '📡',
    title: 'Digital X-Rays',
    desc: 'Rather than standard X-rays that can take time to develop, digital X-rays send the images to your dentist\'s computer instantly. The images are crystal clear and can be enhanced so your dentist can review them quickly.',
  },
  {
    ico: '🖥️',
    title: 'Orthophos SL',
    desc: 'The Orthophos SL uses a single scan to produce 3D images of your teeth, soft tissue, nerve pathways, and bone — allowing Dr. Slaman to look for potential dental diseases or issues and determine jawbone density for implant candidacy.',
  },
];

const FEATURED_SERVICES = [
  {
    img: '/photo-1606811841689-23dfddce3e95.jpg',
    label: 'Cosmetic',
    title: 'Teeth Whitening',
    desc: 'Teeth whitening is a quick and easy way to brighten your smile. We offer both take-home whitening kits and Zoom! in-office whitening treatment. Our take-home kits are custom-made to perfectly fit your teeth and can whiten your smile by several shades in just two weeks. In-house treatment with Zoom! teeth whitening can brighten your smile up to eight shades in just 45 minutes.',
  },
  {
    img: '/photo-1588776814546-1ffcf47267a5.jpg',
    label: 'Cosmetic',
    title: 'Veneers',
    desc: 'Veneers are a quick, minimally invasive way to conceal cosmetic flaws like stains, chips, gaps, and minor misalignment. Veneers are thin porcelain shells that cover your natural tooth or teeth. They are custom-made to match your desired shade and shape and create a seamlessly gorgeous smile.',
  },
  {
    img: '/about-banner.png',
    label: 'Restorative',
    title: 'Dental Implants',
    desc: 'Dental implants are titanium posts surgically placed into your jaw to replace a missing tooth or several missing teeth. They mimic your natural tooths roots to prevent jawbone atrophy and act as a sturdy base for life-like restorations. Your dental crown, bridge, or denture will fit securely over your implants and function like your natural teeth. Patients who choose implant-supported dentures do not have to worry about them sliding out of place while eating or speaking.',
  },
  {
    img: '/photo-1629909613654-28e377c37b09.jpg',
    label: 'Restorative',
    title: 'Dental Crowns',
    desc: 'A dental crown is a tooth-shaped restoration that can restore a damaged tooth or replace a missing tooth. Our CEREC machine allows us to fabricate your dental crown in a single visit. Thanks to CEREC same-day crowns, patients coming to us for root canal therapy can receive a dental crown immediately after treatment and leave our office with a healthy, functioning smile.',
  },
];

const SERVICES = [
  {
    cat: 'Cosmetic', num: '01',
    items: ['Dental Bonding', 'Gum Contouring', 'Porcelain Veneers', 'Smile Makeover', 'Teeth Whitening'],
  },
  {
    cat: 'Restorative', num: '02',
    items: [
      'Dental Bridges', 'Dental Crowns', 'Dental Filling', 'Dental Implants',
      'All-on-4® Dental Implants', 'Dentures', 'Implant-Supported Dentures',
      'Full Mouth Reconstruction', 'Inlays and Onlays', 'Dental Implant Restoration',
      'Complex Dental Restoration',
    ],
  },
  {
    cat: 'General', num: '03',
    items: ['Sleep Apnea Treatment', 'Dental Sealants', 'Fluoride Treatments', 'Periodontal Therapy', 'Missing Teeth', 'Tooth Extraction'],
  },
];

const PAYMENT = [
  {
    ico: '🏥',
    title: 'Insurance',
    desc: 'We accept most major dental insurance plans to help you partially or completely cover the cost of treatment. Most plans will cover a portion of general and restorative dental procedures as they are considered medically necessary.',
  },
  {
    ico: '💳',
    title: 'Financing',
    desc: 'We offer CareCredit® financing for those without insurance or those undergoing cosmetic treatments. CareCredit breaks your cost into no or low-interest monthly payments, allowing you to pay for dental care over time.',
  },
  {
    ico: '📋',
    title: 'Payment Plans',
    desc: 'Our Albuquerque practice also offers in-office payment plans. Dr. Slaman and our friendly staff can work with you to create a payment plan that fits your financial needs and put you on a manageable timeline.',
  },
];

const REVIEWS = [
  {
    initial: 'S', name: 'Sarah Barela', year: '2022',
    text: 'Great atmosphere. All the staff are friendly and comforting. Dr. Slaman took time to go over all my concerns. Would recommend this place to anyone who has anxiety going to the dentist.',
  },
  {
    initial: 'N', name: 'Natalie Lutz', year: '2022',
    text: 'Very friendly staff, thorough evaluation, they take their time to provide education/explanations to questions. Highly recommend!',
  },
];

const DR_MEMS = [
  'American Dental Association','American Academy of Implant Dentistry',
  'Academy of General Dentistry','American Academy of Sleep Medicine',
  'American Academy of Cosmetic Dentistry','Spear Faculty Club',
]

/* ─────────────────────────────────────────
   SCROLL REVEAL HOOK
───────────────────────────────────────── */
function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.sr, .sr-left, .sr-right');
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.15 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ─────────────────────────────────────────
   OFFICE PAGE
───────────────────────────────────────── */
export default function Office() {
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
            A Comprehensive Dental Practice Providing Award-Winning<br /><em>Care to Albuquerque</em>
          </h1>
          <p className="ab-banner-body">
            A modern dentist's office for all your dental needs — where award-winning care meets a warm, welcoming atmosphere.
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
            <a href="#about-section" className="btn btn-line">View Hours & Location →</a>
          </div>
        </div>
        <div className="ab-banner-right">
          <img
            src="/12534.jpg"
            alt="Dr. Slaman's modern dental practice interior"
            loading="eager"
          />
          <div className="ab-banner-chip">
            <strong>New Patient Special</strong>
            <span>Complimentary smile consultation — call us today at (505) 881-7586</span>
          </div>
        </div>
      </section>



      {/* ══════════════════════════════════
          S2 — PRACTICE VIDEO
      ══════════════════════════════════ */}
      <section className="ab-practice-section">
        <div className="ab-practice-header sr">
          <p className="sec-tag">Welcome to Dr. Slaman & Associates in Albuquerque, NM</p>
          <h2 className="sec-h">A Modern Dentist's Office for<br /><em>All Your Dental Needs</em></h2>
        </div>
        <div className="ab-practice-layout">
          <div className="ab-practice-video-wrap sr-left">
            <div className="ab-practice-frame">
              <img src="/9355.jpg" alt="" />
            </div>
            <div className="ab-practice-deco">
              <strong>30+</strong>
              <span>Years of Excellence</span>
            </div>
          </div>
          <div className="ab-practice-copy sr-right">
            <p className="sec-body">
              Our Albuquerque, NM, practice offers the full scope of dental treatments. Our modern office houses the latest dental technology to help detect health issues early and streamline treatment. Our friendly staff is there to greet you with a smile as soon as you step foot through our doors, so even the most nervous patients can feel relaxed and comfortable.
            </p>
            <div className='office-quoite'>
                <p className="sec-body">
              "I don’t think I’ve ever experienced anything like this level of service from a dentist’s office, everyone was wonderful from the front desk all the way up the chain to Dr. Slaman, I highly recommend this place and will definitely be back.
It was warm and friendly, you feel like you just made new friends that will quickly be like family."
            </p>
            <p className="sec-body">
              -Don Lovato
            </p>
            </div>
            <a href="#contact" className="btn btn-fill" style={{ alignSelf: 'flex-start', marginTop: '.5rem' }}>
              Schedule a Visit →
            </a>
          </div>
        </div>
      </section>

      
      {/* ══════════════════════════════════
          S2 — HOURS + MAP SPLIT
      ══════════════════════════════════ */}
      <section className="lo-info-section" id="lo-hours">
        <div className="lo-info-copy sr-left">
          <p className="sec-tag">Find Us</p>
          <h2 className="sec-h">
            The Search for a<br />
            <em>Quality Dentist is Over</em>
          </h2>
          <p className="sec-body" style={{ marginTop: '.8rem', maxWidth: '44ch' }}>
            Visit our Albuquerque, NM practice for top-rated dental care that your whole
            family can trust.
          </p>

          {/* Address block */}
          <div className="lo-address-block">
            <div className="lo-addr-row">
              <span className="lo-addr-ico">📍</span>
              <div>
                <div className="lo-addr-lbl">Address</div>
                <div className="lo-addr-val">
                  8650 Alameda Blvd NE, Ste 104E<br />Albuquerque, NM 87122
                </div>
              </div>
            </div>
            <div className="lo-addr-row">
              <span className="lo-addr-ico">📞</span>
              <div>
                <div className="lo-addr-lbl">Phone</div>
                <div className="lo-addr-val">
                  <a href="tel:5052268598">(505) 226-8598</a>
                </div>
              </div>
            </div>
          </div>

          {/* Hours table */}
          <div className="lo-hours-table">
            {HOURS.map((h) => (
              <div className={`lo-hours-row${!h.open ? ' lo-hours-closed' : ''}`} key={h.day}>
                <span className="lo-hours-day">{h.day}</span>
                <span className="lo-hours-time">{h.time}</span>
              </div>
            ))}
          </div>

          <div className="lo-info-btns">
            <a
              href="https://maps.google.com/?q=8650+Alameda+Blvd+NE+Albuquerque+NM+87122"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-fill"
            >
              Get Directions →
            </a>
            <a href="tel:5052268598" className="btn btn-line">
              Call Us
            </a>
          </div>
        </div>

        {/* Map / photo side */}
        <div className="lo-info-map sr-right">
          <div className="lo-map-embed">
            <iframe
              title="Dr. Slaman Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3260.900173428044!2d-106.54977862378546!3d35.184040557125165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872275ede4982515%3A0x4c590872b573200!2s8650%20Alameda%20Blvd%20NE%2C%20Albuquerque%2C%20NM%2087122!5e0!3m2!1sen!2sus!4v1774603984115!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, display: 'block' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="lo-map-badge">
            <strong>Open Today</strong>
            <span>7:30 AM – 4:30 PM</span>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          S3 — BENEFITS
      ══════════════════════════════════ */}
      <section className="lo-benefits-section">
        <div className="lo-benefits-header sr">
          <div>
            <p className="sec-tag">Why Choose Us</p>
            <h2 className="sec-h">
              The Benefits of Our<br /><em>Dental Office</em>
            </h2>
          </div>
          <p className="sec-body">
            Our dental office is proud to be a top-rated and award-winning practice in
            Albuquerque. We strive to maintain our reputation and continue to provide the
            best dental care to every patient who steps through our doors.
          </p>
        </div>
        <div className="lo-benefits-grid">
          {BENEFITS.map((b, i) => (
            <div className="lo-benefit-card sr" key={b.title} style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="lo-benefit-ico">{b.ico}</div>
              <h3 className="lo-benefit-title">{b.title}</h3>
              <p className="lo-benefit-desc">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════
          S4 — TECHNOLOGY
      ══════════════════════════════════ */}
      <section className="lo-tech-section">
        <div className="lo-tech-header sr">
          <p className="sec-tag" style={{ color: 'var(--c-sand)' }}>Cutting-Edge Equipment</p>
          <h2 className="sec-h" style={{ color: '#fff' }}>
            The Latest in<br /><em style={{ color: 'var(--c-sand)' }}>Dental Technology</em>
          </h2>
          <p className="sec-body" style={{ color: 'rgba(245,240,232,.52)', marginTop: '.8rem' }}>
            For the best patient care — Dr. Slaman invests in the most advanced tools so
            every visit is faster, more accurate, and more comfortable.
          </p>
        </div>
        <div className="lo-tech-grid">
          {TECH_ITEMS.map((t, i) => (
            <div className="lo-tech-card sr" key={t.title} style={{ transitionDelay: `${i * 0.12}s` }}>
              <div className="lo-tech-ico">{t.ico}</div>
              <div className="lo-tech-num">0{i + 1}</div>
              <h3 className="lo-tech-title">{t.title}</h3>
              <p className="lo-tech-desc">{t.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════
          S5 — CONSULTATION CTA — split
      ══════════════════════════════════ */}
      <section className="lo-consult-section">
        <div className="lo-consult-photo">
          <img
            src="/download-main.png"
            alt="Dr. James Slaman"
          />
          <div className="lo-consult-photo-overlay" />
        </div>
        <div className="lo-consult-copy sr-right">
          <p className="sec-tag">Get Started</p>
          <h2 className="sec-h">
            Experience Comprehensive<br />
            Dentistry in <em>Albuquerque</em>
          </h2>
          <p className="sec-body" style={{ marginTop: '.6rem' }}>
            Our Albuquerque practice can handle virtually any dental care need, no matter the
            state of your oral health. From general cleanings and root canal therapy to teeth
            whitening and dental implants, our award-winning dentist can help you reach your
            oral health and cosmetic goals.
          </p>
          <p className="sec-body">
            Dr. Slaman strives for perfection and is recognized in the community for doing so.
            He has been awarded <em style={{ color: 'var(--c-terra)' }}>Albuquerque The Magazine's</em>{' '}
            "Top Cosmetic Dentist" three times during his career.
          </p>
          <p className="sec-body">
            As an Albuquerque native, Dr. Slaman takes pride in giving back to his community.
            He routinely offers his time and cosmetic dentistry talents to underprivileged
            communities across the state.
          </p>
          <div className="lo-consult-phone">
            <a href="tel:5052268598">(505) 226-8598</a>
          </div>
          <div className="lo-consult-btns">
            <a href="#lo-contact" className="btn btn-fill">Request My Consultation</a>
            <a href="/doctor" className="btn btn-line">Meet Dr. Slaman →</a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          S6 — AFFILIATIONS BAND
      ══════════════════════════════════ */}
      <div className="lo-affil-section">
        <div className="lo-affil-inner sr">
          <span className="lo-affil-label">Dr. Slaman's National Affiliations:</span>
          <div className="lo-affil-pills">
            {AFFILIATION_PILLS.map((p) => (
                    <div className="ab-affiliations-pill" key={p.name}>
                    <img src={p.img} alt={p.name} />
                    </div>
                ))}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════
          S7 — FEATURED SERVICES
      ══════════════════════════════════ */}
      <section className="lo-featured-section">
        <div className="lo-featured-header sr">
          <p className="sec-tag">What We Offer</p>
          <h2 className="sec-h">
            Featured Dental<br /><em>Services</em>
          </h2>
          <p className="sec-body" style={{ marginTop: '.6rem' }}>
            Our office offers general, restorative, and cosmetic dentistry treatments to
            help you enhance the health and appearance of your teeth and gums.
          </p>
        </div>
        <div className="lo-featured-grid">
          {FEATURED_SERVICES.map((s, i) => (
            <div
              className={`lo-featured-card ${i % 2 === 0 ? 'sr-left' : 'sr-right'}`}
              key={s.title}
              style={{ transitionDelay: `${(i % 2) * 0.12}s` }}
            >
              <div className="lo-featured-img">
                <img src={s.img} alt={s.title} />
                <span className="lo-featured-label">{s.label}</span>
              </div>
              <div className="lo-featured-body">
                <h3 className="lo-featured-title">{s.title}</h3>
                <p className="lo-featured-desc">{s.desc}</p>
                <a href="#lo-contact" className="lo-featured-link">
                  Learn More <span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════
          S8 — COMPLETE SERVICES LIST (dark)
      ══════════════════════════════════ */}
      <section className="lo-services-section">
        <div className="lo-services-header sr">
          <p className="sec-tag" style={{ color: 'var(--c-sand)' }}>Comprehensive Care</p>
          <h2 className="sec-h" style={{ color: '#fff' }}>
            Our Complete List of<br /><em style={{ color: 'var(--c-sand)' }}>Dental Services</em>
          </h2>
        </div>
        <div className="lo-services-grid">
          {SERVICES.map((s) => (
            <div className="lo-service-col sr" key={s.cat}>
              <div className="lo-service-col-header">
                <span className="lo-service-num">{s.num}</span>
                <h3 className="lo-service-cat"><em>{s.cat}</em></h3>
              </div>
              <ul className="lo-service-list">
                {s.items.map((item) => (
                  <li key={item}>
                    <a href="#lo-contact" className="lo-service-item">
                      <span className="lo-service-dot" />
                      <span className="lo-service-label">{item}</span>
                      <span className="lo-service-arr">→</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════
          S9 — PAYMENT OPTIONS
      ══════════════════════════════════ */}
      <section className="lo-payment-section">
        <div className="lo-payment-header sr">
          <p className="sec-tag">Affordability</p>
          <h2 className="sec-h">
            Paying for Dental Care —<br /><em>How We Make It Affordable</em>
          </h2>
        </div>
        <div className="lo-payment-grid">
          {PAYMENT.map((p, i) => (
            <div className="lo-payment-card sr" key={p.title} style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="lo-payment-ico">{p.ico}</div>
              <h3 className="lo-payment-title">{p.title}</h3>
              <p className="lo-payment-desc">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════
          S10 — REVIEWS
      ══════════════════════════════════ */}
      <section className="lo-reviews-section">
        <div className="lo-reviews-header sr">
          <div>
            <p className="sec-tag">5-Star Reviews</p>
            <h2 className="sec-h">
              Albuquerque Continues to<br /><em>Rate Us 5 Stars</em>
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
        <div className="lo-reviews-grid">
          {REVIEWS.map((r) => (
            <div className="lo-review-card sr" key={r.name}>
              <div className="lo-review-stars">★★★★★</div>
              <p className="lo-review-text">&ldquo;{r.text}&rdquo;</p>
              <div className="lo-review-person">
                <div className="lo-review-avatar">{r.initial}</div>
                <div>
                  <div className="lo-review-name">{r.name}</div>
                  <div className="lo-review-year">Albuquerque, NM · {r.year}</div>
                </div>
                <span className="lo-review-via">Google</span>
              </div>
            </div>
          ))}
        </div>
      </section>


            {/* ══════════════════════════════════
          DR PANEL — ABOUT
      ══════════════════════════════════ */}
      <div className="dr-panel">
        <div className="dr-panel-img">
          <img src="/Dr. James Slaman DDS.png" alt="" />
        </div>
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
  );
}