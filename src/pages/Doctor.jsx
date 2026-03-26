import React, { useEffect } from 'react';
import './Doctor.css';

/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */
const HIGHLIGHTS = [
  {
    ico: '💡',
    title: 'The Latest Technology',
    desc: 'Dr. Slaman knows he can achieve the best results by using the latest technology. He even uses smile preview technology so patients can view the results of their cosmetic treatments before committing to anything.',
  },
  {
    ico: '📚',
    title: 'A Focus on Education',
    desc: 'Dr. Slaman wants all of his patients to be able to move forward with treatment confidently. He makes it a point to inform each of his patients of their options before proceeding with treatment.',
  },
  {
    ico: '🛋️',
    title: 'Comfortable Dentistry',
    desc: 'We want you to maintain your oral and overall health in comfort, so we offer oral conscious sedation to patients who undergo surgical procedures. We also offer The Wand® anesthetic system for virtually painless injections.',
  },
];

const EDUCATION = [
  {
    ico: '🎓',
    label: 'Dental School',
    title: 'University of Missouri',
    desc: 'Dr. Slaman obtained his Doctorate in Dental Surgery at the University of Missouri.',
  },
  {
    ico: '🔬',
    label: 'Postgraduate Training',
    title: 'Continuing Education',
    desc: 'Dr. Slaman has continued his education by attending Dawson Academy, Spear Education, Southwest Academy of Esthetic Restorative Dentistry, and NM Implant Study Club.',
  },
  {
    ico: '🤝',
    label: 'Mentoring',
    title: 'Paying It Forward',
    desc: 'While James Slaman, DDS, is a lifelong learner, he is also paying it forward by acting as a mentor at Spear Education in Scottsdale so future generations can continue to advance the field of dentistry.',
  },
];

const MEMBERSHIPS = [
  'American Academy of Implant Dentistry',
  'American Academy of Cosmetic Dentistry',
  'American Dental Association',
  'Academy of General Dentistry',
  'Spear Faculty Club',
  'American Academy of Sleep Medicine',
];

const BEYOND = [
  {
    num: '01',
    title: 'In Practice Since 1992',
    desc: 'Upon graduating from the University of Missouri, James Slaman, DDS, returned to Albuquerque and began his private practice in 1992. He has been providing his community with routine dental care, cosmetic dentistry, and restorative procedures ever since.',
  },
  {
    num: '02',
    title: 'Advanced Training',
    desc: 'Dr. Slaman considers himself privileged to have trained alongside top dentists from around the country. With them, he has learned how to effectively treat worn teeth, misaligned bites, and TMJ disorders.',
  },
  {
    num: '03',
    title: 'Community Involvement',
    desc: 'Dr. Slaman loves his community and proves it by donating his time and skill to underprivileged areas throughout New Mexico. He also participates in the Donated Dental Program, New Mexico Mission of Mercy, and dental missions in Guatemala.',
  },
];

const REVIEWS = [
  {
    initial: 'S',
    name: 'Sarah Barela',
    year: '2022',
    text: 'Great atmosphere. All the staff are friendly and comforting. Dr. Slaman took time to go over all my concerns. Would recommend this place to anyone who has anxiety going to the dentist.',
  },
  {
    initial: 'E',
    name: 'Elena Perovich',
    year: '2022',
    text: 'Dr. Slaman is a wonderful dentist, he is professional, does exquisite work, and is very personable. His whole team is awesome! Highly recommend him.',
  },
];

const SERVICES = [
  {
    cat: 'Cosmetic',
    num: '01',
    items: [
      'Dental Bonding', 'Gum Contouring', 'Porcelain Veneers',
      'Smile Makeover', 'Teeth Whitening', 'Complex Dental Restoration',
    ],
  },
  {
    cat: 'Restorative',
    num: '02',
    items: [
      'Dental Bridges', 'Dental Crowns', 'Dental Filling',
      'Dental Implants', 'Dentures', 'Implant-Supported Dentures',
      'Full Mouth Reconstruction', 'Inlays and Onlays', 'Dental Implant Restoration',
    ],
  },
  {
    cat: 'General',
    num: '03',
    items: [
      'Sleep Apnea Treatment', 'Dental Sealants',
      'Fluoride Treatments', 'Periodontal Therapy', 'Missing Teeth',
    ],
  },
];

const CTA_CARDS = [
  { ico: '💬', title: 'Questions About Our Services?', sub: 'Send Us a Message', href: '#contact' },
  { ico: '📞', title: 'Want to Speak to a Staff Member?', sub: 'Call Us', href: 'tel:+15058817586' },
  { ico: '📅', title: 'Ready to Meet Our Dentist?', sub: 'Request a Consultation', href: '#contact' },
];

const DR_MEMS = [
  'American Dental Association', 'Academy of General Dentistry',
  'American Academy of Cosmetic Dentistry', 'American Academy of Implant Dentistry',
  'American Academy of Sleep Medicine', 'Spear Faculty Club',
];

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
   DOCTOR PAGE
───────────────────────────────────────── */
export default function Doctor() {
  useScrollReveal();

  return (
    <main>

      {/* ══════════════════════════════════
          HERO — Split
      ══════════════════════════════════ */}
      <section className="dr-hero">
        <div className="dr-hero-photo">
          <img
            src="/download-main.png"
            alt="Dr. James Slaman"
            loading="eager"
          />
          <div className="dr-hero-photo-overlay" />
        </div>

        <div className="dr-hero-copy">
          <p className="sec-tag">Get to Know Dr. Slaman</p>
          <h1 className="dr-hero-h1">
            Fine-Tune Your Smile<br />
            With <em>Dr. James Slaman</em><br />
            <span className="dr-hero-sub">DDS, PC — Albuquerque, NM</span>
          </h1>
          <p className="sec-body" style={{ marginTop: '1rem' }}>
            A cosmetic dentist, community leader, and lifelong Albuquerque native who has been
            crafting beautiful, healthy smiles since 1992.
          </p>

          {/* Highlight cards */}
          <div className="dr-hero-cards">
            {HIGHLIGHTS.map((h) => (
              <div className="dr-hero-card" key={h.title}>
                <span className="dr-hero-card-ico">{h.ico}</span>
                <div>
                  <div className="dr-hero-card-title">{h.title}</div>
                  <p className="dr-hero-card-desc">{h.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="dr-hero-btns">
            <a href="#contact" className="btn btn-fill">Schedule a Consultation</a>
            <a href="#dr-video" className="btn btn-line">Watch His Story →</a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          EDUCATION
      ══════════════════════════════════ */}
      <section className="dr-wrap dr-edu-section">
        <div className="dr-edu-header sr">
          <p className="sec-tag">Credentials</p>
          <h2 className="sec-h">Education &amp;<br /><em>Degrees</em></h2>
        </div>
        <div className="dr-edu-grid">
          {EDUCATION.map((e, i) => (
            <div className={`dr-edu-card sr`} key={e.title} style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="dr-edu-ico">{e.ico}</div>
              <span className="dr-edu-label">{e.label}</span>
              <h3 className="dr-edu-title">{e.title}</h3>
              <p className="dr-edu-desc">{e.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════
          MEMBERSHIPS — dark band
      ══════════════════════════════════ */}
      <section className="dr-mems-section">
        <div className="dr-mems-inner sr">
          <div className="dr-mems-left">
            <p className="sec-tag" style={{ color: 'var(--c-sand)' }}>Professional Affiliations</p>
            <h2 className="sec-h" style={{ color: '#fff' }}>
              Dr. Slaman's<br /><em style={{ color: 'var(--c-sand)' }}>Memberships</em>
            </h2>
          </div>
          <div className="dr-mems-right">
            {MEMBERSHIPS.map((m, i) => (
              <div className="dr-mem-pill" key={m} style={{ transitionDelay: `${i * 0.07}s` }}>
                <span className="dr-mem-dot" />
                {m}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          GOING ABOVE & BEYOND
      ══════════════════════════════════ */}
      <section className="dr-wrap dr-beyond-section">
        <div className="dr-beyond-header sr">
          <p className="sec-tag">His Commitment</p>
          <h2 className="sec-h">Going Above<br /><em>and Beyond</em></h2>
        </div>
        <div className="dr-beyond-grid">
          {BEYOND.map((b, i) => (
            <div className="dr-beyond-card sr" key={b.num} style={{ transitionDelay: `${i * 0.12}s` }}>
              <span className="dr-beyond-num">{b.num}</span>
              <h3 className="dr-beyond-title">{b.title}</h3>
              <p className="dr-beyond-desc">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════
          WHY HE BECAME A DENTIST — split dark
      ══════════════════════════════════ */}
      <section className="dr-why-section" id="dr-video">
        <div className="dr-why-copy sr-left">
          <p className="sec-tag" style={{ color: 'var(--c-sand)' }}>His Story</p>
          <h2 className="sec-h" style={{ color: '#fff' }}>
            Why Dr. Slaman<br />
            <em style={{ color: 'var(--c-sand)' }}>Became a Dentist</em>
          </h2>
          <p className="sec-body" style={{ color: 'rgba(245,240,232,.58)' }}>
            Dr. Slaman needed orthodontics as a child and teenager, so he spent a lot of time with
            dental professionals. He wanted to help his community in the same way these dentists
            helped him. Dr. Slaman remembers always feeling comfortable while at the dentist's
            office and he strives to make his patients feel the same way.
          </p>

          <blockquote className="dr-why-quote">
            <p>
              "Knowing my patients' needs and concerns is just as important as having the knowledge
              to care for them. I look at myself as your dental coach."
            </p>
            <cite>— Dr. James Slaman, DDS, PC</cite>
          </blockquote>

          <a href="#contact" className="btn btn-fill" style={{ alignSelf: 'flex-start' }}>
            Request a Consultation
          </a>
        </div>

        <div className="dr-why-video sr-right">
          <div className="dr-why-video-frame">
            <video
              controls
              poster="/slaman.jpg"
            >
              <source
                src="/About_Dr_Slaman_1646341302.mp4"
                type="video/mp4"
              />
              Your browser does not support video.
            </video>
          </div>
          <p className="dr-why-video-caption">
            Cosmetic Dentist Dr. James Slaman discusses where his interest in dentistry began and
            his passion for giving patients a beautiful smile.
          </p>
          <a
            href="https://www.drslaman.com/video/61113-a-passion-for-cosmetic-dentistry-and-patient-care/index.html"
            target="_blank"
            rel="noopener noreferrer"
            className="dr-why-video-link"
          >
            Visit Our Video Gallery <span>→</span>
          </a>
        </div>
      </section>

      {/* ══════════════════════════════════
          FREE TIME + OFFICE LOCATION — grid
      ══════════════════════════════════ */}
      <section className="dr-wrap dr-life-section">
        <div className="dr-life-card sr-left">
          <div className="dr-life-ico">🏕️</div>
          <p className="sec-tag">In His Free Time</p>
          <h3 className="sec-h" style={{ fontSize: '1.6rem' }}>
            Life Outside<br /><em>the Office</em>
          </h3>
          <p className="sec-body" style={{ marginTop: '.8rem' }}>
            Outside the office, family is Dr. Slaman's top priority. He and his wife enjoy spending
            time with family and friends. During the summer, they enjoy boating and camping by the
            lake. In the near future, they look forward to teaching their daughter to snow ski.
          </p>
        </div>
        <div className="dr-life-card sr-right">
          <div className="dr-life-ico">📍</div>
          <p className="sec-tag">Location Story</p>
          <h3 className="sec-h" style={{ fontSize: '1.6rem' }}>
            Why Alameda<br /><em>Blvd NE?</em>
          </h3>
          <p className="sec-body" style={{ marginTop: '.8rem' }}>
            Dr. James Slaman is an Albuquerque native who wanted to provide his services to the
            community where he grew up. Dr. Slaman is recognized by his peers as the best dentist
            in Albuquerque. He is a three-time recipient of{' '}
            <em>Albuquerque The Magazine</em>'s top cosmetic dentist award.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════
          TESTIMONIALS
      ══════════════════════════════════ */}
      <section className="dr-reviews-section">
        <div className="dr-reviews-inner">
          <div className="dr-reviews-header sr">
            <p className="sec-tag">&ldquo;Highly recommend him.&rdquo;</p>
            <h2 className="sec-h">What Patients Say<br /><em>About Dr. Slaman</em></h2>
          </div>
          <div className="dr-reviews-grid">
            {REVIEWS.map((r) => (
              <div className="dr-review-card sr" key={r.name}>
                <div className="dr-review-stars">★★★★★</div>
                <p className="dr-review-text">&ldquo;{r.text}&rdquo;</p>
                <div className="dr-review-person">
                  <div className="dr-review-avatar">{r.initial}</div>
                  <div>
                    <div className="dr-review-name">{r.name}</div>
                    <div className="dr-review-year">Albuquerque, NM · {r.year}</div>
                  </div>
                  <span className="dr-review-via">Google</span>
                </div>
              </div>
            ))}
          </div>
          <div className="dr-reviews-cta sr">
            <a
              href="https://maps.google.com/maps?cid=13452876912051634118"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-fill"
            >
              View All Reviews on Google
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          BEFORE & AFTER
      ══════════════════════════════════ */}
      <section className="wrap ba-section" style={{ background: 'var(--c-warm)' }}>
        <div className="ba-left">
          <p className="sec-tag">Real Results</p>
          <h2 className="sec-h">See What We Can<br /><em>Achieve Together</em></h2>
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
            View More Patient Cases
          </a>
        </div>
        <div className="ba-grid">
          <div className="ba-card sr">
            <div className="ba-img"><img src="/before and after of porcelain veneers.png" alt="Porcelain Veneers" /></div>
            <div className="ba-info"><div className="ba-title">Porcelain Veneers</div></div>
          </div>
          <div className="ba-card sr">
            <div className="ba-img"><img src="/before and after of Dental Bonding.png" alt="Dental Bonding" /></div>
            <div className="ba-info"><div className="ba-title">Dental Bonding</div></div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          SERVICES
      ══════════════════════════════════ */}
      <section className="dr-services-section">
        <div className="dr-services-header sr">
          <p className="sec-tag">Comprehensive Care</p>
          <h2 className="sec-h">Our Complete<br /><em>Services</em></h2>
        </div>
        <div className="dr-services-grid">
          {SERVICES.map((s) => (
            <div className="dr-service-col sr" key={s.cat}>
              <div className="dr-service-col-header">
                <span className="dr-service-num">{s.num}</span>
                <h3 className="dr-service-cat"><em>{s.cat}</em></h3>
              </div>
              <ul className="dr-service-list">
                {s.items.map((item) => (
                  <li key={item}>
                    <a href="#contact" className="dr-service-item">
                      <span className="dr-service-dot" />
                      <span className="dr-service-label">{item}</span>
                      <span className="dr-service-arr">→</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>



{/* ══════════════════════════════════
          CTA TRIPTYCH
      ══════════════════════════════════ */}
      <section className="dr-wrap dr-cta-section">
        <div className="dr-cta-header sr">
          <p className="sec-tag">Get Started</p>
          <h2 className="sec-h">See What We Can<br /><em>Achieve Together</em></h2>
        </div>
        <div className="dr-cta-grid">
          {CTA_CARDS.map((c, i) => (
            <a className="dr-cta-card sr" href={c.href} key={c.title} style={{ transitionDelay: `${i * 0.1}s` }}>
              <span className="dr-cta-ico">{c.ico}</span>
              <div>
                <div className="dr-cta-title">{c.title}</div>
                <div className="dr-cta-sub">{c.sub} →</div>
              </div>
            </a>
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
      <section className="dr-rate-bar">
        <h3>Rate, Review &amp; Explore</h3>
        <div className="dr-rate-icons">
          <a href="https://maps.google.com/maps?cid=13452876912051634118" target="_blank" rel="noopener noreferrer" className="dr-rate-ico" title="Google Reviews">G</a>
          <a href="#" className="dr-rate-ico" title="Yelp">Y</a>
          <a href="#" className="dr-rate-ico" title="Healthgrades">HG</a>
        </div>
      </section>

    </main>
  );
}