import React, { useEffect } from 'react';
import './Cosmeticdentistry.css';
import Ratebar from "../components/Ratebar";
import Contactform from "../components/Contactform";
import Officesection from "../components/Officesection";
import Doctorpanel from "../components/Doctorpanel";


const BADGES = [
  { ico: '★', label: '5-Star Rated' },
  { ico: '✦', label: 'Since 1992' },
  { ico: '◈', label: 'Accepting New Patients' },
];

const BENEFITS = [
  { num: '01', img: "/sparkler.png", title: 'Increased Self-Esteem', desc: "Do you feel embarrassed about the way your teeth look and hide them when you smile or laugh? Cosmetic dentistry at our Albuquerque dental office can ignite your confidence and help you feel great inside and out — whether you're interested in veneers, dental bonding, or a complete smile makeover." },
  { num: '02', img: "/rocket.png", title: 'Increased Opportunity', desc: "Cosmetic dentistry helps you feel more confident, but did you know it can lead to greater opportunities in life, too? People with nice teeth are often regarded as more attractive and even more intelligent — opening doors to new job opportunities and meaningful relationships." },
];

const WHY_CARDS = [
  { img: "/award.png", title: 'Expertise',            desc: 'Dr. Slaman is a highly regarded cosmetic dentist in Albuquerque, NM, where he was born, raised, and still calls home. He opened his practice in 1992 and was named Top Cosmetic Dentist by Albuquerque The Magazine three times.' },
  { img: "/premium-badge.png", title: 'High-Quality Care',     desc: 'Dr. Slaman is a self-proclaimed perfectionist with extremely high standards. He regularly attends continuing education courses to provide the highest and most up-to-date dental care for his patients.' },
  { img: "/lounge-1.png", title: 'Comfortable Amenities', desc: "Patients know Dr. Slaman as a caring, extremely skilled dentist who offers warm blankets, headphones, and fresh hot coffee during every visit. Our office is carefully designed to help you feel at ease from the moment you enter." },
  { img: "/capsules.png", title: 'Sedation Dentistry',    desc: "Many patients are anxious about going to the dentist, but we don't want that to get in the way of your dream smile. Oral conscious sedation is available to ensure you feel relaxed and at ease during your visit." },
];

const TREATMENTS = [
  { num: '01', tag: 'Brighten',   title: 'Teeth Whitening',   img: '/308947793.jpg',   desc: "Our in-office Zoom!® whitening system combines a concentrated peroxide gel with an oxidizing blue LED light to dramatically whiten tooth stains in about an hour — up to eight shades whiter. We also offer at-home custom-fitted whitening kits for gradual brightening over two weeks." },
  { num: '02', tag: 'Transform',  title: 'Porcelain Veneers', img: '/veneers_1271743159.jpg',   desc: "Veneers are thin, natural-looking porcelain shells attached to the front of teeth to conceal chips, cracks, stains, and minor misalignment. Dr. Slaman exclusively uses superior-quality IPS e.max® veneers for their amazingly lifelike appearance and durability." },
  { num: '03', tag: 'Restore',    title: 'Dental Bonding',    img: '/dental-bonding-spacing-cracked_505371346.jpg',   desc: "Dental bonding is a conservative treatment that can conceal many of the same concerns as veneers — improving size, shape, and color — without reshaping your teeth. Dr. Slaman applies tooth-colored composite resin directly to conceal blemishes and minor structural flaws." },
  { num: '04', tag: 'Reshape',    title: 'Gum Contouring',    img: '/smile-1051437578.jpg',   desc: "Excess gum tissue or a crooked gumline can make your teeth appear small and uneven. Our dentist uses a precisely focused laser to reshape your gumline — virtually pain-free, requiring little or no numbing anesthetic. A modern alternative to traditional gum surgery." },
  { num: '05', tag: 'Rejuvenate', title: 'Smile Makeover',    img: '/couple_632898593.jpg',   desc: "A smile makeover combines various cosmetic dental treatments to give you a smile that boosts confidence and makes you feel more attractive and youthful. Dr. Slaman uses digital impressions and Digital Smile Preview to customize a makeover plan for your specific goals." },
  { num: '06', tag: 'Protect',    title: 'Dental Crowns',     img: '/original\ \(2\).jpg',     desc: "While dental crowns are typically restorative, they have a host of cosmetic benefits — addressing discoloration and adjusting tooth size for a more balanced appearance. We use modern CEREC® technology to craft stunning dental crowns in just one appointment." },
];

const CANDIDACY = [
  { img: "/tooth.png", title: 'Your Oral Health',          desc: "Successful cosmetic dentistry must begin with a healthy smile. If you have outstanding oral health issues like tooth decay or gum disease, you'll need preparatory treatment first — and Dr. Slaman can handle all of it right here in our office." },
  { img: "/check-mark.png", title: 'Your Commitment to Results', desc: "Certain cosmetic treatments like veneers and crowns require slight but permanent alterations to your natural tooth structure. If you're hesitant, we encourage you to explore more temporary options like teeth whitening or dental bonding first." },
  { img: "/target.png", title: 'Your Expectations',          desc: "Results will vary for each patient. Before treatment begins, Dr. Slaman will ensure you understand exactly what your chosen procedure can and cannot address. For multiple concerns, consider combining treatments in a smile makeover." },
];

const AFTERCARE = [
  { img: "/toothbrush.png", title: 'Practice At-Home Care',   desc: 'Regular brushing and flossing extends the lifespan of veneers and crowns. Brushing with whitening toothpaste keeps teeth whiter for longer. Staving off gum disease maintains the new contour of your gum line.' },
  { img: "/calendar.png", title: 'Attend Regular Checkups', desc: 'Regular dental checkups about every six months with Dr. Slaman will allow him to maintain a healthy environment for your cosmetic dentistry treatment and keep an eye on any restorations.' },
  { img: "/healthy-food.png", title: 'Minimize Certain Foods',  desc: 'Sticky foods can pull veneers or crowns out of place. Hard foods can damage restorations. Coffee, wine, and certain sauces can discolor your teeth — we recommend minimizing intake or drinking through a straw.' },
];

const RESTORATIONS = [
  { title: 'Crowns',   desc: 'One damaged or missing tooth? We can restore it with either a traditional or implant-supported crown.' },
  { title: 'Bridges',  desc: 'Missing one tooth or a few teeth in a row? A dental bridge can replace up to three teeth, bridging the gaps in your smile.' },
  { title: 'Dentures', desc: 'Do you have widespread tooth loss? We offer full and partial dentures so you can smile confidently once again.' },
];

const REVIEWS = [
  { initial: 'T', name: 'Ty Harlacker',    city: 'Albuquerque, NM', year: '2023', text: "Dr. Slaman and his staff are amazing. They are courteous and informative, I really appreciate them. Look no further, they're honest and do excellent work." },
  { initial: 'S', name: 'Santana Brown',   city: 'Albuquerque, NM', year: '2023', text: 'Dr Slaman is best dentist, he is an excellent dentist, professional, caring and efficient. I recommend him to any that wants the most positive experience.' },
  { initial: 'I', name: 'Irw Shea',        city: 'Albuquerque, NM', year: '2023', text: "I had a fantastic experience! The staff was incredibly friendly and welcoming. The procedure was virtually painless, and their attention to detail was impressive. I'll definitely be returning." },
  { initial: 'J', name: 'Jeff Schaefer',   city: 'Albuquerque, NM', year: '2023', text: 'Team Slaman can not be beat. Friendly, kind, and always professional. Dr Slaman is a Craftsman!! Team Slaman is the best in Albuquerque!!!' },
  { initial: 'J', name: 'Jack M',          city: 'Albuquerque, NM', year: '2023', text: "You are not going to find a better dentist anywhere in Albuquerque. Dr. Slaman is extremely talented! He's also very proactive and vested in his patients dental health." },
  { initial: 'W', name: 'Weston Losinski', city: 'Albuquerque, NM', year: '2023', text: 'Very clean, professional, and knowledgeable. They fixed my broken tooth and it looks and works like it was never broken.' },
];


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

export default function CosmeticDentistry() {
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
            Cosmetic<br /><em>Dentistry</em>
          </h1>
          <p className="ab-banner-body">
            Life is worth smiling about. If you are self-conscious about smiling because of damaged, discolored, crooked, or missing teeth — <strong>award-winning dentist Dr. James Slaman</strong> can give you a new smile through the artistry of customized cosmetic dentistry.
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
            src="/11998.jpg"
            alt="Dr. Slaman's modern dental practice interior"
            loading="eager"
          />
          <div className="ab-banner-chip">
            <strong>I don't think I have ever experienced anything like this level of service from a dentist's office. It was warm and friendly — you feel like you just made new friends that will quickly be like family.</strong>
            <span>— Don Lovato, Google Review</span>
          </div>
        </div>
      </section>

      {/* S2 BENEFITS */}
      <section className="cd-benefits-section">
        <div className="cd-benefits-header sr">
          <p className="sec-tag" style={{color:'var(--c-sand)'}}>Why It Matters</p>
          <h2 className="sec-h" style={{color:'#fff'}}>The Extraordinary Benefits<br /><em style={{color:'var(--c-sand)'}}>of Cosmetic Dentistry</em></h2>
        </div>
        <div className="cd-benefits-grid">
          {BENEFITS.map((b,i) => (
            <div className="cd-benefit-card sr" key={b.num} style={{transitionDelay:`${i*0.12}s`}}>
              <span className="cd-benefit-num">{b.num}</span>
              <div className="cd-benefit-ico">
                <img src={b.img} alt={b.title} />
              </div>
              <h3 className="cd-benefit-title">{b.title}</h3>
              <p className="cd-benefit-desc">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* S3 BEFORE/AFTER */}
      <section className="cd-ba-section">
        <div className="cd-ba-left sr-left">
          <p className="sec-tag">Real Results</p>
          <h2 className="sec-h">Enhance Your Smile<br /><em>With Cosmetic Dentistry</em></h2>
          <p className="sec-body" >Dr. Slaman combined cosmetic techniques to create stunning transformations for patients just like you. He can give you similarly gorgeous results through a customized cosmetic treatment plan.</p>
          <blockquote className="cd-ba-quote">
            <div className="cd-ba-stars">★★★★★</div>
            <p>"It is always a pleasure going to Dr. Slaman's office. Everyone is so nice and professional. They treat you like family."</p>
            <cite>— Brenda Garcia</cite>
          </blockquote>
          <a href="#cd-contact" className="btn btn-fill" style={{alignSelf:'flex-start',marginTop:'.5rem'}}>Explore More Before &amp; After Photos</a>
        </div>
        <div className="cd-ba-right sr-right">
          <div className="cd-ba-card">
            <div className="cd-ba-img"><img src="/original-main.jpg" alt="Before" /><span className="cd-ba-badge cd-ba-badge--before">Before</span></div>
            <p className="cd-ba-caption">This patient came with discolored, visibly worn teeth and some plaque buildup around the gumline.</p>
          </div>
          <div className="cd-ba-card">
            <div className="cd-ba-img"><img src="/original-main-two.jpg" alt="After" /><span className="cd-ba-badge cd-ba-badge--after">After</span></div>
            <p className="cd-ba-caption">Dr. Slaman gave a thorough cleaning then used whitening and veneers to bring brightness and proportion to their smile.</p>
          </div>
        </div>
      </section>

      {/* S4 COMPARE */}
      <section className="cd-compare-section">
        <div className="cd-compare-header sr">
          <p className="sec-tag">Understanding the Difference</p>
          <h2 className="sec-h">Restorative Dentistry<br /><em>vs. Cosmetic Dentistry</em></h2>
        </div>
        <div className="cd-compare-grid">
          <div className="cd-compare-card sr-left">
            <div className="cd-compare-img"><img src="/smilingwoman-sq-1609204903.jpg" alt="Restorative" /><div className="cd-compare-badge">Restorative</div></div>
            <div className="cd-compare-body"><h3>Restorative Dentistry</h3><p>The goal of this form of dentistry is to improve the health and function of your smile. Treatments like root canal therapy and gum disease treatment fall under the restorative umbrella. While it can improve the appearance of your smile, aesthetics are not the primary goal.</p></div>
          </div>
          <div className="cd-compare-card sr-right">
            <div className="cd-compare-img"><img src="/SmilingLady-1916992679.jpg" alt="Cosmetic" /><div className="cd-compare-badge cd-compare-badge--accent">Cosmetic</div></div>
            <div className="cd-compare-body"><h3>Cosmetic Dentistry</h3><p>Cosmetic care is purely focused on enhancing the appearance of your smile. Popular treatments include teeth whitening, gum contouring, and veneers. Some cosmetic treatments, like dental bonding and crowns, can also have restorative benefits.</p></div>
          </div>
        </div>
        <div className="cd-compare-cta sr">
          <div><h3 className="cd-compare-cta-h">We Have What You Need — Reach Out Today</h3><p className="sec-body">Whether you have cosmetic or structural concerns, we can help.</p></div>
          <div className="cd-compare-cta-right">
            <a href="tel:5052268598" className="cd-compare-phone">(505) 226-8598</a>
            <a href="#cd-contact" className="btn btn-fill">I Want to Meet With Dr. Slaman</a>
          </div>
        </div>
      </section>

      {/* S5 SMILE PREVIEW */}
      <section className="cd-preview-section">
        <div className="cd-preview-photo"><img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=900&q=80" alt="Digital smile preview" /><div className="cd-preview-overlay" /></div>
        <div className="cd-preview-copy sr-right">
          <p className="sec-tag" style={{color:'var(--c-sand)'}}>Our Technology</p>
          <h2 className="sec-h" style={{color:'#fff'}}>Feel Confident Committing<br /><em style={{color:'var(--c-sand)'}}>With a Smile Preview</em></h2>
          <p className="sec-body" style={{color:'rgba(245,240,232,.55)'}}>We know cosmetic dentistry can be an investment in your smile, so our Albuquerque team wants every patient to feel confident before moving forward. Our office uses smile preview technology that allows you to get a clear idea of the results before committing to anything.</p>
          <a href="#cd-contact" className="btn btn-fill" style={{alignSelf:'flex-start',marginTop:'.6rem'}}>See Your New Smile →</a>
        </div>
      </section>

      {/* S6 WHY DR. SLAMAN */}
      <section className="cd-why-section">
        <div className="cd-why-header sr">
          <p className="sec-tag">Your Cosmetic Dentist</p>
          <h2 className="sec-h">Why Choose Dr. Slaman<br /><em>as Your Cosmetic Dentist?</em></h2>
        </div>
        <div className="cd-why-grid">
          {WHY_CARDS.map((w,i) => (
            <div className="cd-why-card sr" key={w.title} style={{transitionDelay:`${i*0.1}s`}}>
              <div className="cd-why-ico">
                <img src={w.img} alt={w.title} />
              </div>
              <h3 className="cd-why-title">{w.title}</h3>
              <p className="cd-why-desc">{w.desc}</p>
            </div>
          ))}
        </div>
        <div className="cd-why-footer sr">
          <div className="cd-why-affils">
            <p className="cd-why-affils-label">Plus, His Affiliations Include:</p>
            <div className="cd-why-pills">
              {['American Academy of Implant Dentistry','American Academy of Cosmetic Dentistry','American Dental Association'].map((a) => <span className="cd-why-pill" key={a}>{a}</span>)}
            </div>
          </div>
          <div className="cd-why-footer-cta">
            <a href="tel:5052268598" className="cd-why-phone">(505) 226-8598</a>
            <a href="#cd-contact" className="btn btn-fill">I Want to Smile Again</a>
          </div>
        </div>
      </section>

      {/* S7 TREATMENTS */}
      <section className="cd-treatments-section">
        <div className="cd-treatments-header sr">
          <p className="sec-tag">What We Offer</p>
          <h2 className="sec-h">Cosmetic Dentistry<br /><em>Treatments</em></h2>
          <p className="sec-body" >Our dentist James Slaman offers a number of customized treatments that can rejuvenate your smile — some can even be done in the comfort of your own home.</p>
        </div>
        <div className="cd-treatments-list">
          {TREATMENTS.map((t,idx) => (
            <div key={t.num} className={`cd-treatment-item${idx%2!==0?' cd-treatment-item--rev':''} sr`}>
              <div className="cd-treatment-img">
                <img src={t.img} alt={t.title} />
                <span className="cd-treatment-tag">{t.tag}</span>
                <span className="cd-treatment-num">{t.num}</span>
              </div>
              <div className="cd-treatment-copy">
                <h3 className="cd-treatment-title">{t.title}</h3>
                <p className="cd-treatment-desc">{t.desc}</p>
                <a href="#cd-contact" className="btn btn-fill" style={{alignSelf:'flex-start',marginTop:'1.4rem'}}>Explore {t.title} →</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* S8 CANDIDACY */}
      <section className="cd-candidacy-section">
        <div className="cd-candidacy-header sr">
          <p className="sec-tag">Are You a Candidate?</p>
          <h2 className="sec-h">Request a Consultation<br /><em>to Find Out</em></h2>
          <p className="sec-body" >Virtually anyone who wants a brighter, more uniform, or more proportionate smile is a good candidate. Dr. Slaman considers several factors before approving a patient for cosmetic treatment:</p>
        </div>
        <div className="cd-candidacy-grid">
          {CANDIDACY.map((c,i) => (
            <div className="cd-candidacy-card sr" key={c.title} style={{transitionDelay:`${i*0.1}s`}}>
              <div className="cd-candidacy-ico">
                <img src={c.img} alt={c.title} />
              </div>
              <h3 className="cd-candidacy-title">{c.title}</h3>
              <p className="cd-candidacy-desc">{c.desc}</p>
            </div>
          ))}
        </div>
        <div className="cd-candidacy-cta sr">
          <a href="tel:5052268598" className="cd-candidacy-phone">(505) 226-8598</a>
          <a href="#cd-contact" className="btn btn-fill">I am Ready to Meet Dr. Slaman</a>
        </div>
      </section>

      {/* S9 INSURANCE */}
      <section className="cd-insurance-section">
        <div className="cd-insurance-copy sr-left">
          <p className="sec-tag" style={{color:'var(--c-sand)'}}>Affordability</p>
          <h2 className="sec-h" style={{color:'#fff'}}>Does Insurance Cover<br /><em style={{color:'var(--c-sand)'}}>Cosmetic Dentistry?</em></h2>
          <p className="sec-body" style={{color:'rgba(245,240,232,.55)'}}>Dental insurance generally will not cover a treatment unless it is considered medically necessary. Because cosmetic dentistry is elective, it is rarely covered. However, if your cosmetic treatment has a restorative benefit, you may receive partial coverage.</p>
          <p className="sec-body" style={{color:'rgba(245,240,232,.55)'}}>Dr. Slaman proudly offers affordable monthly financing through <strong style={{color:'rgba(245,240,232,.8)'}}>CareCredit®</strong> as well as convenient in-office payment plans. His warm and knowledgeable staff will happily go over all your available payment options.</p>
          <a href="#cd-contact" className="btn btn-fill" style={{alignSelf:'flex-start',marginTop:'.6rem'}}>Explore Payment Options</a>
        </div>
        <div className="cd-insurance-cards sr-right">
          {[
            {img: "/insurance-1.png",title:'Insurance',desc:'We accept most major dental insurance plans. Our friendly staff will work with your provider to help you maximize your benefits.'},
            {img: "/credit-card-2.png",title:'CareCredit® Financing',desc:'No or low-interest monthly payments — allowing you to pay for dental care over time without financial strain.'},
            {img: "/plan-1.png",title:'In-Office Payment Plans',desc:'Dr. Slaman and our knowledgeable staff will happily create a payment plan that fits your specific financial needs.'},
          ].map((p,i) => (
            <div className="cd-insurance-card" key={p.title} style={{transitionDelay:`${i*0.1}s`}}>
              <span className="cd-insurance-ico">
                <img src={p.img} alt={p.title} />
              </span>
              <div><div className="cd-insurance-title">{p.title}</div><p className="cd-insurance-desc">{p.desc}</p></div>
            </div>
          ))}
        </div>
      </section>

      {/* S10 REVIEWS */}
      <section className="cd-reviews-section">
        <div className="cd-reviews-header sr">
          <div className='cd-reviews-header-content-box'><p className="sec-tag">"Look no further."</p><h2 className="sec-h">More Excellent Reviews<br /><em>For Our Albuquerque Practice</em></h2></div>
          <a href="https://maps.google.com/maps?cid=13452876912051634118" target="_blank" rel="noopener noreferrer" className="btn btn-line">View All on Google →</a>
        </div>
        <div className="cd-reviews-grid">
          {REVIEWS.map((r) => (
            <div className="cd-review-card sr" key={r.name}>
              <div className="cd-review-stars">★★★★★</div>
              <p className="cd-review-text">&ldquo;{r.text}&rdquo;</p>
              <div className="cd-review-person">
                <div className="cd-review-avatar">{r.initial}</div>
                <div><div className="cd-review-name">{r.name}</div><div className="cd-review-loc">{r.city} · {r.year}</div></div>
                <span className="cd-review-via">Google</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* S11 SEDATION */}
      <section className="cd-sedation-section">
        <div className="cd-sedation-photo"><img src="/download-main.png" alt="Comfortable dental experience" /><div className="cd-sedation-overlay" /></div>
        <div className="cd-sedation-copy sr-right">
          <p className="sec-tag">Patient Comfort</p>
          <h2 className="sec-h">Will My Cosmetic<br /><em>Treatment Hurt?</em></h2>
          <p className="sec-body" >If you are worried that improving your smile will be a painful process, there is nothing to fear. Most cosmetic treatments are minimally invasive and involve very little discomfort. Your comfort will always be our priority.</p>
          <div className="cd-sedation-box">
            <div className="cd-sedation-box-ico">
              <img src="/capsules.png" alt="" />
            </div>
            <div>
              <h4 className="cd-sedation-box-title">The Benefits of Dental Sedation</h4>
              <p className="cd-sedation-box-desc">Oral conscious sedation induces a state of deep relaxation that can help your treatment fly by. Many patients tell us that sedation gave them peace of mind that made all the difference during their appointment.</p>
            </div>
          </div>
          <a href="#cd-contact" className="btn btn-fill" style={{alignSelf:'flex-start'}}>Ask About Sedation Options</a>
        </div>
      </section>

      {/* S12 AFTERCARE */}
      <section className="cd-aftercare-section">
        <div className="cd-aftercare-header sr">
          <p className="sec-tag">Maintaining Your Results</p>
          <h2 className="sec-h">Making the Most of<br /><em>Your Treatment</em></h2>
          <p className="sec-body" >There are some simple things you can do to maintain your results and prolong the effects of your cosmetic dentistry treatment:</p>
        </div>
        <div className="cd-aftercare-grid">
          {AFTERCARE.map((a,i) => (
            <div className="cd-aftercare-card sr" key={a.title} style={{transitionDelay:`${i*0.1}s`}}>
              <div className="cd-aftercare-ico">
                <img src={a.img} alt={a.title} />
              </div>
              <h3 className="cd-aftercare-title">{a.title}</h3>
              <p className="cd-aftercare-desc">{a.desc}</p>
            </div>
          ))}
        </div>
      </section>


      {/* S3 BEFORE/AFTER */}
      <section className="cd-ba-section">
        <div className="cd-ba-left sr-left">
          <p className="sec-tag">for Patients Just Like You</p>
          <h2 className="sec-h">See What Cosmetic<br /><em>Dentistry Can Do</em></h2>
          <p className="sec-body" >Dr. Slaman combined cosmetic techniques to create a stunning transformation for this New Mexico patient.</p>
        <p className="sec-body" >Dr. Slaman regularly completes smile transformations just like this one. He can give you similarly gorgeous results through a customized cosmetic treatment plan. Take the first step towards rejuvenating your smile by contacting us online or calling (505) 881-7586.</p>
          <a href="#cd-contact" className="btn btn-fill" style={{alignSelf:'flex-start',marginTop:'.5rem'}}>Explore More Before &amp; After Photos</a>
        </div>
        <div className="cd-ba-right sr-right">
          <div className="cd-ba-card">
            <div className="cd-ba-img"><img src="/original-main-four.jpg" alt="Before" /><span className="cd-ba-badge cd-ba-badge--before">Before</span></div>
            <p className="cd-ba-caption">This patient came to our Albuquerque office with discolored, visibly worn teeth. They also exhibited some plaque buildup around the gumline.</p>
          </div>
          <div className="cd-ba-card">
            <div className="cd-ba-img"><img src="/original-main-three.jpg" alt="After" /><span className="cd-ba-badge cd-ba-badge--after">After</span></div>
            <p className="cd-ba-caption">Dr. Slaman gave their teeth a thorough cleaning and then used whitening and veneers to bring brightness and proportion to their smile.</p>
          </div>
        </div>
      </section>

      {/* S13 IMPLANTS */}
      <section className="cd-implants-section">
        <div className="cd-implants-copy sr-left">
          <p className="sec-tag" style={{color:'var(--c-sand)'}}>Missing Teeth?</p>
          <h2 className="sec-h" style={{color:'#fff'}}>We Can Fill in the Gaps<br /><em style={{color:'var(--c-sand)'}}>With Dental Implants</em></h2>
          <p className="sec-body" style={{color:'rgba(245,240,232,.55)'}}>The best of cosmetic and restorative dentistry meet in dental implants — the most reliable solution for tooth loss. Titanium implants anchor into the jawbone to replace missing tooth roots and provide much-needed stimulation to the jaw tissue.</p>
          <p className="sec-body" style={{color:'rgba(245,240,232,.55)'}}>Whether you are missing one tooth or many, we have a dental implant treatment that can restore your smile in a way that looks and feels natural.</p>
          <a href="#cd-contact" className="btn btn-fill" style={{alignSelf:'flex-start',marginTop:'.6rem'}}>More on the Benefits of Dental Implants</a>
        </div>
        <div className="cd-implants-right sr-right">
          <h3 className="cd-implants-r-title">A Closer Look at Restorations</h3>
          <p className="cd-implants-r-sub">We offer traditional and implant-supported restorations:</p>
          <div className="cd-restoration-list">
            {RESTORATIONS.map((r,i) => (
              <div className="cd-restoration-item" key={r.title}>
                <span className="cd-restoration-num">0{i+1}</span>
                <div><h4 className="cd-restoration-title">{r.title}</h4><p className="cd-restoration-desc">{r.desc}</p></div>
              </div>
            ))}
          </div>
          <div className="cd-reconstruction-box">
            <p className="cd-reconstruction-label">Consider Full Mouth Reconstruction</p>
            <p className="cd-reconstruction-desc">A healthy smile is a beautiful smile. If you have a combination of concerns like gum disease, decayed teeth, and missing teeth, our team can streamline your care into one full mouth reconstruction plan.</p>
            <a href="#cd-contact" className="btn btn-fill" style={{alignSelf:'flex-start'}}>Explore Full Mouth Reconstruction</a>
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