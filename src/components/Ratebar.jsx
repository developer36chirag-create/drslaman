import React from "react";

const rateLinks = [
  {
    href: "https://www.google.com/maps?cid=13452876912051634118",
    img: "/google.png",
    title: "Google Reviews",
  },
  {
    href: "https://www.instagram.com/drslamanandassociates/",
    img: "/instagram.png",
    title: "Instagram",
  },
  {
    href: "https://www.yelp.com/biz/james-slaman-dds-albuquerque-2",
    img: "/yelp.png",
    title: "Yelp",
  },
  {
    href: "https://www.healthgrades.com/dentist/dr-james-slaman-xd8l9",
    img: "/Healthgrades.png",
    title: "Healthgrades",
  },
];

const RateBar = () => {
  return (
    <section className="rate-bar">
      <h3>Rate, Review & Explore</h3>

      <div className="rate-icons">
        {rateLinks.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="rate-ico"
            title={item.title}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={item.img} alt={item.title} />
          </a>
        ))}
      </div>
    </section>
  );
};

export default RateBar;