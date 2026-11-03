// ============================================================
// SITE CONFIG — edit everything about your clinic in this file.
// The page reads these values on load. No other file changes
// needed for text, numbers, services, doctors or reviews.
// ============================================================
const SITE = {
  // --- Basics -------------------------------------------------
  name: "Om Dental Clinic",
  tagline: "Gentle, honest dental care in Balkum, Thane",
  phone: "+91 91378 94792",                // shown + tap-to-call
  whatsapp: "919137894792",                // digits only, with country code
  email: "dan.champ2000@gmail.com",

  // --- Location ------------------------------------------------
  address: "ISKCON Temple Gate, Ram Maruti Nagar, besides 2A, Balkum Road, Balkum Pada, Thane West, Maharashtra 400601",
  mapsQuery: "Om Dental Clinic, Balkum Road, Thane West",  // used for the map + directions

  // --- Hours ----------------------------------------------------
  hours: [
    { days: "All days (incl. Sunday)", time: "12:00 – 2:00 PM" },
    { days: "",                        time: "6:00 – 9:00 PM" },
  ],

  // --- Services (icon = any emoji) -------------------------------
  services: [
    { icon: "🦷", title: "Root Canal Treatment", text: "Pain-free, single-visit RCTs with modern rotary endodontics." },
    { icon: "✨", title: "Teeth Whitening",     text: "Safe, in-clinic whitening for a visibly brighter smile." },
    { icon: "🪥", title: "Scaling & Cleaning",  text: "Removal of plaque and tartar for healthy gums and fresh breath." },
    { icon: "🔩", title: "Dental Implants",     text: "Permanent, natural-looking replacements for missing teeth." },
    { icon: "😁", title: "Braces & Aligners",   text: "Metal, ceramic and clear aligner options for straight teeth." },
    { icon: "🧒", title: "Kids' Dentistry",     text: "Gentle, fear-free checkups and care for children." },
  ],

  // --- Doctors ----------------------------------------------------
  doctors: [
    { name: "Dr. Darshana Shetty", quals: "BDS (Mumbai)", role: "Dentist", img: "images/doctor-1.svg" },
  ],

  // --- Testimonials (from your Google reviews) ----------------------
  testimonials: [
    { text: "I visited the clinic with what I thought was a major dental issue, but the doctor examined and assured me it wasn't as serious as I feared. Instead of recommending unnecessary or expensive procedures, she suggested a few minor changes and simple treatments that made a big difference. I really appreciated the honest and professional approach — I highly recommend Dr. Darshana!", author: "Google patient ★★★★★" },
    { text: "Dr. Darshana ma'am is amazing. She helped us extract my child's tooth in a timely and caring way. Very grateful and fortunate to have her as our family dentist.", author: "Google patient ★★★★★" },
    { text: "I was really nervous about getting a root canal, but Dr. Darshana and the team at Om Dental Clinic made it so easy. They explained everything clearly, made sure I was comfortable, and the whole procedure was surprisingly painless. Grateful for the care — would definitely trust them again!", author: "Google patient ★★★★★" },
  ],
};

// ============================================================
// Renderer — no need to edit below this line.
// ============================================================
(function () {
  const fill = (key) =>
    document.querySelectorAll(`[data-bind="${key}"]`).forEach((el) => {
      el.textContent = SITE[key];
    });

  ["name", "tagline", "phone", "email", "address"].forEach(fill);

  document.querySelectorAll('[data-bind="phoneHref"]').forEach((el) => {
    el.href = "tel:" + SITE.phone.replace(/[^+\d]/g, "");
  });
  document.querySelectorAll('[data-bind="waHref"]').forEach((el) => {
    el.href = `https://wa.me/${SITE.whatsapp}`;
  });
  document.querySelectorAll('[data-bind="emailHref"]').forEach((el) => {
    el.href = "mailto:" + SITE.email;
  });
  document.querySelectorAll('[data-bind="mapsSrc"]').forEach((el) => {
    el.src = `https://www.google.com/maps?q=${encodeURIComponent(SITE.mapsQuery)}&output=embed`;
  });
  document.querySelectorAll('[data-bind="directionsHref"]').forEach((el) => {
    el.href = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(SITE.mapsQuery)}`;
  });

  const hoursBox = document.querySelector("[data-render-hours]");
  if (hoursBox)
    hoursBox.innerHTML = SITE.hours
      .map((h) => `<div class="hours-row"><span>${h.days}</span><span>${h.time}</span></div>`)
      .join("");

  const servicesBox = document.querySelector("[data-render-services]");
  if (servicesBox)
    servicesBox.innerHTML = SITE.services
      .map(
        (s) => `<div class="card service-card"><div class="service-icon">${s.icon}</div><h3>${s.title}</h3><p>${s.text}</p></div>`
      )
      .join("");

  const doctorsBox = document.querySelector("[data-render-doctors]");
  if (doctorsBox)
    doctorsBox.innerHTML = SITE.doctors
      .map(
        (d) => `<div class="card doctor-card"><img src="${d.img}" alt="${d.name}"><h3>${d.name}</h3><p class="quals">${d.quals}</p><p class="role">${d.role}</p></div>`
      )
      .join("");

  const testiBox = document.querySelector("[data-render-testimonials]");
  if (testiBox)
    testiBox.innerHTML = SITE.testimonials
      .map((t) => `<figure class="card testimonial"><blockquote>“${t.text}”</blockquote><figcaption>— ${t.author}</figcaption></figure>`)
      .join("");
})();
