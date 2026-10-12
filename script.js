/* ====== EDITABLE DATA ====== */
const STATS_UPDATED = "12 Oct 2026";
const STATS = [ // [label, value, suffix, tag]
 ["International runs", 28498, "", "Test 9,230 + ODI 15,080 + T20I 4,188 (Cricinfo, 28 Sep 2026)"],
 ["International centuries", 85, "", "Some sources list 86 after late-2026 ODIs: verify"],
 ["ODI centuries", 54, "", "World record · ODI"],
 ["Test runs", 9230, "", "Retired from Tests May 2025"],
 ["T20I runs", 4188, "", "T20I average 48.69 · retired June 2024"],
 ["World Cup runs, 2023", 765, "", "Tournament record · ODI World Cup"],
 ["IPL runs (to IPL 2025)", 8661, "", "All-time leader · IPL (2026 season not included)"],
 ["IPL season best", 973, "", "2016 · record · IPL"],
 ["IPL centuries", 8, "", "Most in IPL history"]
];
const HISTORY = [
 ["1500s+","Origins in England","Cricket takes shape in the south-east of England as a rural pastime, slowly gaining rules and rivalries."],
 ["1877","The first Test","England and Australia meet in Melbourne in what is recognised as the first Test match. Test cricket becomes the game's ultimate examination."],
 ["1971","One-Day cricket arrives","The first ODI is played in Melbourne, born when a Test was rained off. The shorter format finds a huge audience."],
 ["1983","India's revolution","Kapil Dev's India win the World Cup at Lord's. A generation of Indian fans and cricketers is born."],
 ["2007","T20 goes global","India win the inaugural T20 World Cup in South Africa. The fast format changes cricket's economics and skills."],
 ["2008","The IPL begins","Franchise cricket arrives in India with the Indian Premier League, reshaping the sport worldwide."]
];
const KOHLI = [
 ["2002","Junior cricket begins in Delhi's age-group system."],
 ["2008","Captains India to the Under-19 World Cup title; makes ODI debut on 18 August v Sri Lanka."],
 ["2011","Test debut on 20 June v West Indies; part of India's World Cup-winning squad."],
 ["2013","Champions Trophy winner; reaches No.1 in ODI batting rankings."],
 ["2014–15","Twin hundreds in his first Test as captain, at Adelaide."],
 ["2016","Scores 973 runs in an IPL season, still the record."],
 ["2018","593 runs in a Test series in England; India win a first Test series in Australia later that year."],
 ["2023","Hits his 50th ODI hundred in the World Cup semi-final; 765 runs in the tournament."],
 ["2024","Part of India's T20 World Cup-winning side; retires from T20Is."],
 ["2025","Retires from Tests (May); helps RCB win their first IPL title."]
];
const RCB = [
 ["2008","Debut season","RCB join the inaugural IPL with Kohli in the squad."],
 ["2009","First final","Runners-up to Deccan Chargers."],
 ["2011","Second final","Runners-up to Chennai Super Kings."],
 ["2016","Kohli's golden summer","973 runs and four centuries from Kohli; RCB lose the final to Sunrisers Hyderabad."],
 ["2013–23","Kohli's captaincy","Kohli leads RCB for 11 seasons."],
 ["2025","CHAMPIONS","RCB beat Punjab Kings by 6 runs in the final in Ahmedabad: the first title after 18 seasons.",1]
];
const RECORDS = [
 ["ODI","54 ODI centuries","Most in men's ODI history."],
 ["ODI","Fastest to 10,000 ODI runs","In 205 innings (Guinness World Records)."],
 ["World Cups","765 runs in one World Cup","Most in a men's tournament, 2023."],
 ["World Cups","2011 World Cup & 2024 T20 World Cup","Winner in both squads."],
 ["T20I","Highest T20I average","48.69, among batters with 4,000+ runs."],
 ["T20I","4,188 T20I runs","One T20I century; retired June 2024."],
 ["Test","9,230 Test runs","Retired May 2025."],
 ["Test","Seven Test double centuries","Most by an Indian batter."],
 ["IPL","8,661 IPL runs","All-time leader, through IPL 2025."],
 ["IPL","973 runs in IPL 2016","Highest single-season total."],
 ["IPL","8 IPL centuries","Most in IPL history."],
 ["International","Second-most international centuries","85 across formats, behind Tendulkar's 100."]
];
const MOMENTS = [
 ["2008 U-19 World Cup final","Feb 2008 · ICC U-19 World Cup","Kohli leads India to the title in Malaysia."],
 ["50th ODI Hundred","15 Nov 2023 · ODI World Cup semi-final","Surpasses Tendulkar's ODI centuries record at Wankhede."],
 ["Adelaide Double Hundreds","Dec 2014 · Border-Gavaskar Trophy","Hundreds in both innings in his first Test as captain."],
 ["973 in 2016","2016 · IPL","The greatest single-season run-scoring campaign in IPL history."],
 ["RCB Champions","3 Jun 2025 · IPL Final, Ahmedabad","RCB win their first IPL title after 18 seasons."],
 ["T20 World Cup Glory","29 Jun 2024 · T20 World Cup final","India win in Barbados; Kohli scores 76 in the final."]
];
const FILTERS = ["All","International","ODI","Test","T20I","IPL","World Cups"];
/* ====== CODE ====== */
const $ = s => document.querySelector(s);
window.addEventListener("load", () => setTimeout(() => $("#loader").classList.add("off"), 500));
const nav = $("#nav"), burger = $("#burger"), menu = $("#menu");
burger.onclick = () => { const o = menu.classList.toggle("open"); burger.setAttribute("aria-expanded", o); };
menu.onclick = e => { if (e.target.tagName === "A") { menu.classList.remove("open"); burger.setAttribute("aria-expanded", false); } };
addEventListener("scroll", () => nav.classList.toggle("solid", scrollY > 60), {passive:true});
// active nav
const links = [...menu.querySelectorAll("a")];
const secObs = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) links.forEach(a => a.classList.toggle("on", a.hash === "#" + e.target.id)); }), {rootMargin:"-45% 0px -50%"});
["home","kohli","history","rcb","records","gallery"].forEach(id => secObs.observe($("#" + id)));
// history timeline
const tabs = $("#histTabs"), card = $("#histCard");
HISTORY.forEach((h, i) => { const b = document.createElement("button"); b.textContent = h[0]; b.role = "tab"; b.onclick = () => showHist(i); tabs.append(b); });
function showHist(i) { [...tabs.children].forEach((b, j) => { b.classList.toggle("on", i === j); b.setAttribute("aria-selected", i === j); });
  const h = HISTORY[i]; card.style.animation = "none"; card.offsetHeight; card.style.animation = "";
  card.innerHTML = `<div class="yr">${h[0]}</div><div><h3>${h[1]}</h3><p>${h[2]}</p></div>`; }
showHist(0);
// kohli timeline
$("#kTl").innerHTML = KOHLI.map(k => `<li><b>${k[0]}</b><span>${k[1]}</span></li>`).join("");
// rcb
$("#rTl").innerHTML = RCB.map(r => `<div class="rc ${r[3] ? "win" : ""}"><b>${r[0]}</b><h4>${r[1]}</h4><p>${r[2]}</p></div>`).join("");
// stats
$("#stats").innerHTML = STATS.map(s => `<div class="stat"><div class="n" data-to="${s[1]}">0</div><div class="l">${s[0]}</div><span class="t">${s[3]}</span></div>`).join("");
$(".upd").innerHTML = $(".upd").innerHTML.replace("12 Oct 2026", STATS_UPDATED);
const reduce = matchMedia("(prefers-reduced-motion:reduce)").matches;
function count(el) { const to = +el.dataset.to; if (reduce) return el.textContent = to.toLocaleString("en-IN");
  const t0 = performance.now(); (function f(t) { const p = Math.min((t - t0) / 1600, 1); el.textContent = Math.round(to * (1 - Math.pow(1 - p, 3))).toLocaleString("en-IN"); if (p < 1) requestAnimationFrame(f); })(t0); }
// records
const fb = $("#filters"), recs = $("#recs");
FILTERS.forEach(f => { const b = document.createElement("button"); b.textContent = f; b.onclick = () => showRecs(f); fb.append(b); });
function showRecs(f) { [...fb.children].forEach(b => b.classList.toggle("on", b.textContent === f));
  recs.innerHTML = RECORDS.filter(r => f === "All" || r[0] === f).map(r => `<div class="rec"><small>${r[0]}</small><h4>${r[1]}</h4><p>${r[2]}</p></div>`).join(""); }
showRecs("All");
// gallery + lightbox
const grid = $("#grid"), lb = $("#lb");
MOMENTS.forEach((m, i) => { const b = document.createElement("button"); b.setAttribute("aria-label", m[0]);
  b.innerHTML = `<div class="bg" ${m[3] ? `style="background-image:url('${m[3]}')"` : ""}></div><div class="cap"><small>${m[1].split(" · ")[0]}</small><h4>${m[0]}</h4></div>`;
  b.onclick = () => { const [t, meta, ctx, img] = m; $("#lbT").textContent = t; $("#lbM").textContent = meta; $("#lbC").textContent = ctx;
    const p = $("#lbImg"); p.dataset.ph = img ? "" : "Placeholder: add a licensed image in script.js"; p.style.backgroundImage = img ? `url('${img}')` : ""; lb.hidden = false; $("#lbx").focus(); };
  grid.append(b); });
const closeLb = () => lb.hidden = true;
$("#lbx").onclick = closeLb; lb.onclick = e => { if (e.target === lb) closeLb(); };
addEventListener("keydown", e => { if (e.key === "Escape") closeLb(); });
// reveal
document.querySelectorAll(".sec h2,.split,.stat,.rc,.fans,.vtl li,.rec").forEach(e => e.classList.add("reveal"));
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); const n = e.target.querySelector?.(".n"); if (n) count(n); io.unobserve(e.target); } }), {threshold:.15});
document.querySelectorAll(".reveal").forEach(e => io.observe(e));
// subtle parallax
if (!reduce) addEventListener("scroll", () => { const y = scrollY; if (y < innerHeight) $(".lights").style.transform = `translateY(${y * .2}px)`; }, {passive:true});
