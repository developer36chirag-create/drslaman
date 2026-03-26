import React, { useEffect } from 'react';
import './About.css';

/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */
const BADGES = [
  { ico: '★', label: '5-Star Rated' },
  { ico: '✦', label: 'Since 1992' },
  { ico: '◈', label: 'Accepting New Patients' },
];

const VISIT_CARDS = [
  { ico: '💳', title: 'Financing Options',         desc: 'CareCredit and flexible in-office payment plans to make world-class dental care accessible for every budget.' },
  { ico: '🔬', title: 'Advanced Technology',       desc: 'State-of-the-art equipment throughout our practice for more precise, comfortable, and effective treatments.' },
  { ico: '🛋️', title: 'Plush Waiting Room',        desc: 'A beautifully appointed, relaxing waiting area designed to put you completely at ease from the moment you arrive.' },
  { ico: '🎧', title: 'Noise Canceling Headphones',desc: 'Enjoy your favorite music or simply block out the world during your procedure for a truly comfortable experience.' },
  { ico: '☕', title: 'Fresh, Hot Coffee',          desc: 'Complimentary fresh-brewed coffee waiting for you in our comfortable reception area — because you deserve it.' },
  { ico: '🧣', title: 'Warm Blankets',             desc: 'Cozy warm blankets available to keep you comfortable, relaxed, and at ease throughout your entire visit.' },
];

const ABOUT_TAGS = [
  'American Dental Association',
  'Academy of General Dentistry',
  'American Academy of Cosmetic Dentistry',
  'American Academy of Implant Dentistry',
  'American Academy of Sleep Medicine',
  'Spear Faculty Club',
];

const AFFILIATION_PILLS = [
  { name: "AAID", img: "/AAID_Logo.png" },
  { name: "ADA", img: "/original-1573102175.png" },
  { name: "AADSM", img: "/original-1573102669.png" },
  { name: "AGD", img: "/agd-blk-xs.png" },
  { name: "AACD", img: "/original_Logo-AACD.svg" },
];

const REVIEWS = [
  {
    stars: '★★★★★',
    text: "Today was my first visit with Dr. Slaman. I am very happy with my decision to be seen here. The staff was so nice and helpful and Dr. Slaman took his time and answered all my questions. I look forward to working with him in the future!",
    initial: 'L',
    name: 'Leorrie Watson',
    loc: 'Albuquerque, NM · 2023',
  },
  {
    stars: '★★★★★',
    text: "Dr. Slaman has been my dentist for longer than I can remember. He and his staff are so kind and considerate. I had a bicycle accident that resulted in a broken front tooth on a Sunday and they got me in on Monday! I was so grateful. Dr. Slaman's work is impeccable! All of my family members see him and we all love him and his staff. I highly recommend them.",
    initial: 'E',
    name: 'Elaine Rieske',
    loc: 'Albuquerque, NM · 2023',
  },
];

const TECHNOLOGY_ITEMS = [
  { num: '01', title: 'Digital X-rays / Intraoral Camera',          desc: 'For precise detection of decay or defects inside and outside your teeth.' },
  { num: '02', title: 'GALILEOS ComfortPLUS Cone Beam Imaging',     desc: 'Creates crystal clear 3D images of your jawbone prior to implant surgery.' },
  { num: '03', title: 'DIAGNOdent™ Laser Cavity Detection',         desc: 'Can detect cavities inside teeth before decay becomes advanced.' },
  { num: '04', title: 'CEREC® Same-Day Restorations',               desc: 'Allows Dr. Slaman to create and place lifelike dental crowns during the same appointment.' },
  { num: '05', title: 'Ultrasound Sleep Apnea Diagnosis',           desc: 'Can eliminate the need for inconvenient sleep studies and more invasive treatment.' },
  { num: '06', title: 'Air Abrasion Tool / Waterlase® Laser',       desc: 'Replaces noisy, old-fashioned dental drills for precise, comfortable tissue removal.' },
  { num: '07', title: 'The Wand®',                                  desc: 'This computer-controlled anesthetic delivery system replaces bulky, painful needles.' },
  { num: '08', title: 'Oral Sedation',                              desc: 'Dr. Slaman can provide oral sedation to help anxious patients feel more comfortable during surgery.' },
];

const TEAM_MEMBERS = [
  { img: "/Jodi.jpg",  name: 'Jodi',            role: 'Dental Hygienist',        featured: false },
  { img: "/Adrianne.jpg",  name: 'Adrianne',        role: 'Appointment Coordinator', featured: false },
  { img: "/Wilson.jpg",  name: 'Dr. Wilson',      role: 'Dentist',                 featured: false },
  { img: "/Harrison.jpg",  name: 'Dr. Harrison',    role: 'Dentist',                 featured: false },
  { img: "/Erica.jpg",  name: 'Erica',           role: 'Dental Hygienist',        featured: false },
  { img: "/Diane.jpg",  name: 'Diane',           role: 'Dental Assistant',        featured: false },
  { img: "/Lori.jpg",  name: 'Lori',            role: 'Dental Hygienist',        featured: false },
  { img: "/download-main.png", name: 'Dr. James Slaman',role: 'Lead Dentist, DDS, PC',  featured: true  },
];

const DENTISTRY_LIST = [
  'American Dental Association',
  'Academy of General Dentistry',
  'American Academy of Cosmetic Dentistry',
  'American Academy of Implant Dentistry',
  'American Academy of Sleep Medicine',
  'Spear Faculty Club',
];

/* ─────────────────────────────────────────
   SCROLL REVEAL HOOK
───────────────────────────────────────── */
function useScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll('.sr, .sr-left, .sr-right');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.2 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

/* ─────────────────────────────────────────
   ABOUT PAGE
───────────────────────────────────────── */
export default function About() {
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
            About Our<br /><em>Practice</em>
          </h1>
          <p className="ab-banner-body">
            Been searching for a <strong>highly-regarded dental practice</strong> where you can{' '}
            <strong>safely and confidently take your entire family?</strong> Albuquerque, NM, native{' '}
            <strong>Dr. James Slaman</strong> and his friendly staff have provided{' '}
            <strong>first-class dental care</strong> to our local community{' '}
            <strong>since 1992.</strong>
            <br /><br />
            <em>Here's why Dr. Slaman's state-of-the-art practice should be your #1 choice for general, cosmetic, and restorative oral health care...</em>
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
            <a href="#about-section" className="btn btn-line">Meet Dr. Slaman →</a>
          </div>
        </div>
        <div className="ab-banner-right">
          <img
            src="/about-banner.png"
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
          <p className="sec-tag">Practice Tour</p>
          <h2 className="sec-h">See What Sets Our<br /><em>Practice Apart</em></h2>
        </div>
        <div className="ab-practice-layout">
          <div className="ab-practice-video-wrap sr-left">
            <div className="ab-practice-frame">
              <video
                controls
                poster="/tour-1646424179.jpg"
              >
                <source
                  src="/Tour_1646424179.mp4"
                  type="video/mp4"
                />
                Your browser does not support video.
              </video>
            </div>
            <div className="ab-practice-deco">
              <strong>30+</strong>
              <span>Years of Excellence</span>
            </div>
          </div>
          <div className="ab-practice-copy sr-right">
            <p className="sec-body">
              Take a tour of our modern and relaxing dental practice! In this dental practice tour
              video, you can see our comfortable waiting room and operatories. Our private
              operatories also have beautiful views.
            </p>
            <p className="sec-body">
              Dr. Slaman treats his patients like family — which is part of the reason why he
              receives so many five-star reviews and local{' '}
              <strong style={{ color: 'var(--c-rust)' }}>"Top Cosmetic Dentist"</strong> awards.
              Your health, comfort, and safety are our top priorities.
            </p>
            <a href="#contact" className="btn btn-fill" style={{ alignSelf: 'flex-start', marginTop: '.5rem' }}>
              Schedule a Visit →
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          S3 — WHAT TO EXPECT
      ══════════════════════════════════ */}
      <section className="ab-visit-section">
        <div className="ab-visit-header">
          <div className="sr">
            <p className="sec-tag">Patient Comfort</p>
            <h2 className="sec-h">What to Expect During<br /><em>Your Visit</em></h2>
          </div>
          <div className="sr">
            <p className="sec-body">
              Your health, comfort, and safety are our top priorities, whether you're visiting us
              for a routine exam, a same-day dental crown, dental implant surgery, or a teeth
              whitening treatment. Dr. Slaman treats his patients like family, which is part of the
              reason why he receives so many five-star reviews and local "Top Cosmetic Dentist"
              awards.
            </p>
          </div>
        </div>
        <div className="ab-visit-grid">
          {VISIT_CARDS.map((c) => (
            <div className="ab-visit-card sr" key={c.title}>
              <div className="ab-visit-ico">{c.ico}</div>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════
          S4 — MEET DR. SLAMAN
      ══════════════════════════════════ */}
      <section className="ab-about-section" id="about-section">
        <div className="ab-about-photo">
            <img src="/download-main.png" alt="" />
          <div className="ab-about-badge">
            <strong>Dr. James Slaman</strong>
            <span>DDS, PC · Albuquerque, NM</span>
          </div>
        </div>
        <div className="ab-about-copy sr-right">
          <p className="sec-tag" style={{ color: 'var(--c-sand)' }}>Meet the Doctor</p>
          <h2 className="sec-h" style={{ color: '#fff' }}>
            Meet Dr.<br /><em style={{ color: 'var(--c-sand)' }}>Slaman</em>
          </h2>
          <p className="sec-body" style={{ color: 'rgba(245,240,232,.58)', maxWidth: '50ch' }}>
            <strong style={{ color: 'rgba(245,240,232,.8)' }}>Dr. James Slaman</strong> developed
            an early interest in dentistry while growing up in Albuquerque. Today, he's one of the
            most experienced and educated dentists in our community, having{' '}
            <strong style={{ color: 'rgba(245,240,232,.8)' }}>practiced here for over 25 years.</strong>{' '}
            He's continually studying the latest{' '}
            <strong style={{ color: 'rgba(245,240,232,.8)' }}>dental technology</strong> advances.
            Our patients appreciate his{' '}
            <strong style={{ color: 'rgba(245,240,232,.8)' }}>warm, educational chair-side manner</strong>{' '}
            and return to his practice time and again. Dr. Slaman proudly donates his considerable
            skills by providing free dental care to underprivileged populations throughout New
            Mexico.
          </p>
          <p className="sec-body" style={{ color: 'rgba(245,240,232,.58)' }}>
            If you have a dental issue you'd like to discuss with Dr. Slaman, why not request a
            consultation today? Or, you can ask a question with a quick online click.
          </p>
          <blockquote className="ab-about-quote">
            <p>"He's not 100% satisfied until his patients are 100% satisfied."</p>
            <cite>— The Philosophy of Dr. James Slaman, DDS</cite>
          </blockquote>
          <div>
            <p className="ab-about-mems-label">Prestigious Affiliations Include</p>
            <div className="ab-about-tags">
              {ABOUT_TAGS.map((t) => (
                <span className="ab-about-tag" key={t}>{t}</span>
              ))}
            </div>
          </div>
          <div className="ab-about-btns">
            <a href="#contact" className="btn btn-fill">Request a Consultation</a>
            <a href="#contact" className="btn-ghost-light">Ask a Question →</a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          S5 — AFFILIATIONS BAR
      ══════════════════════════════════ */}
      <div className="ab-affiliations-section">
        <div className="ab-affiliations-inner sr">
          <span className="ab-affiliations-label">Prestigious Affiliations Include:</span>
          <div className="ab-affiliations-logos">
                {AFFILIATION_PILLS.map((p) => (
                    <div className="ab-affiliations-pill" key={p.name}>
                    <img src={p.img} alt={p.name} />
                    </div>
                ))}
            </div>
        </div>
      </div>

      {/* ══════════════════════════════════
          S6 — TESTIMONIALS
      ══════════════════════════════════ */}
      <section className="ab-reviews-section">
        <div className="ab-reviews-header sr">
          <div>
            <p className="sec-tag">Patient Reviews</p>
            <h2 className="sec-h">
              "Team Slaman Is Absolutely<br /><em>Top Notch!"</em>
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
        <div className="ab-reviews-grid">
          {REVIEWS.map((r) => (
            <div className="ab-reviews-card sr" key={r.name}>
              <div className="ab-reviews-stars">{r.stars}</div>
              <p className="ab-reviews-text">{r.text}</p>
              <div className="ab-reviews-person">
                <div className="ab-reviews-avatar">{r.initial}</div>
                <div>
                  <div className="ab-reviews-name">{r.name}</div>
                  <div className="ab-reviews-loc">{r.loc}</div>
                </div>
                <span className="ab-reviews-via">Google</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════
          S7 — TECHNOLOGY
      ══════════════════════════════════ */}
      <section className="ab-technology-section" id="technology">
        <div className="ab-technology-header">
          <div className="sr">
            <p className="sec-tag" style={{ color: 'var(--c-sand)' }}>Cutting-Edge Technology</p>
            <h2 className="sec-h" style={{ color: '#fff' }}>
              More Effective,<br /><em style={{ color: 'var(--c-sand)' }}>Comfortable Care</em>
            </h2>
          </div>
          <div className="sr">
            <p className="sec-body" style={{ color: 'rgba(245,240,232,.5)' }}>
              Dr. Slaman considers himself a dentistry perfectionist. He's not 100% satisfied until
              his patients are 100% satisfied. That's why advanced dental technology is such an
              important part of his practice. Come in and you'll find these cutting-edge devices:
            </p>
          </div>
        </div>
        <div className="ab-technology-grid">
          {TECHNOLOGY_ITEMS.map((item) => (
            <div className="ab-technology-item sr" key={item.num}>
              <div className="ab-technology-num">{item.num}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════
          S8 — LIFE-CHANGING TREATMENTS
      ══════════════════════════════════ */}
      <section className="ab-treatments-section">
        <div className="ab-treatments-header sr">
          <p className="sec-tag">Life-Changing Treatments</p>
          <h2 className="sec-h">
            Improve Your Overall Health<br /><em>and Quality of Life</em>
          </h2>
          <p className="sec-body" style={{ marginTop: '1rem', maxWidth: '60ch' }}>
            Certain dental and health conditions may prevent you from enjoying life to the fullest.
            These treatments can offer life-changing results for patients:
          </p>
        </div>
        <div className="ab-treatments-grid">
          <div className="ab-treatments-card sr-left">
            <div className="ab-treatments-img">
              <img
                src="/Sleep-Apnea.jpg"
                alt="Sleep Apnea Treatment"
              />
              <div className="ab-treatments-img-label">Sleep &amp; Wellness</div>
            </div>
            <div className="ab-treatments-body">
              <h3>Sleep Apnea</h3>
              <p>
                Waking up and gasping for air at night could mean you have obstructive sleep apnea.
                Dr. Slaman uses the latest technologies to diagnose and treat this condition. A
                restful night's sleep can reverse symptoms like daytime exhaustion, mood swings, and
                concentration issues.
              </p>
              <a href="#contact" className="btn btn-fill" style={{ alignSelf: 'flex-start', marginTop: '.4rem' }}>
                Sleep Apnea Treatment →
              </a>
            </div>
          </div>
          <div className="ab-treatments-card sr-right">
            <div className="ab-treatments-img">
              <img
                src="/TMD-TMJ.jpg"
                alt="TMD TMJ Treatment"
              />
              <div className="ab-treatments-img-label">Jaw &amp; Pain Relief</div>
            </div>
            <div className="ab-treatments-body">
              <h3>TMD / TMJ</h3>
              <p>
                Chronic jaw pain, migraines, and clicking noises in your jaw joints could mean you
                have a temporomandibular disorder like TMJ. Dr. Slaman offers the most advanced
                dental therapies to reduce, if not eliminate, these aggravating symptoms.
              </p>
              <a href="#contact" className="btn btn-fill" style={{ alignSelf: 'flex-start', marginTop: '.4rem' }}>
                Contact Us →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          S9 — MEET OUR TEAM
      ══════════════════════════════════ */}
      <section className="ab-team-section">
        <div className="ab-team-header">
          <div className="sr">
            <p className="sec-tag">Our People</p>
            <h2 className="sec-h">Meet Our<br /><em>Team</em></h2>
          </div>
          <div className="sr">
            <p className="sec-body">
              Dr. Slaman and our highly-skilled team of doctors, dental hygienists, and office staff
              look forward to greeting you with a big smile and a friendly hello. Come by for a
              visit soon!
            </p>
          </div>
        </div>
        <div className="ab-team-grid">
          {TEAM_MEMBERS.map((m) => (
            <div className={`ab-team-card sr${m.featured ? ' featured' : ''}`} key={m.name}>
              <div className="ab-team-bg">
                <div className="ab-team-avatar">
                    <img src={m.img} alt={m.name} />
                </div>
              </div>
              <div
                className="ab-team-info"
                style={
                  m.featured
                    ? { background: 'linear-gradient(to top,rgba(28,14,8,.7) 0%,transparent 100%)' }
                    : undefined
                }
              >
                <div className="ab-team-name">{m.name}</div>
                <div className="ab-team-role">{m.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════
          S10 — BIO / MEMBERSHIPS
      ══════════════════════════════════ */}
      <section className="ab-dentistry-section">
        <div className="ab-dentistry-photo" />
        <div className="ab-dentistry-copy sr-right">
          <p className="sec-tag" style={{ color: 'var(--c-sand)' }}>James Slaman, DDS, PC</p>
          <h2 className="sec-h" style={{ color: '#fff' }}>
            Cosmetic, General &amp;<br /><em style={{ color: 'var(--c-sand)' }}>Restorative Dentistry</em>
          </h2>
          <p className="sec-body" style={{ color: 'rgba(245,240,232,.55)', maxWidth: '50ch' }}>
            Dr. James Slaman specializes in cosmetic dentistry and offers a full selection of
            general and restorative treatments. To request an appointment at our Albuquerque, NM,
            dental office, contact us online or call{' '}
            <strong style={{ color: 'rgba(245,240,232,.78)' }}>(505) 881-7586.</strong>
          </p>
          <div className="ab-dentistry-mems">
            <p>Member of Professional Associations</p>
            <ul className="ab-dentistry-list">
              {DENTISTRY_LIST.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <a href="#contact" className="btn btn-fill" style={{ alignSelf: 'flex-start' }}>
            Request an Appointment
          </a>
        </div>
      </section>

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