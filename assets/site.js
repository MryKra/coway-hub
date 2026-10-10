/* ===== แก้ 3 ค่านี้ที่เดียว ทุกหน้าอัปเดตเอง / Edit contact once, all pages update ===== */
// oaId = Basic ID ของ LINE OA (เช่น "@abc123") ถ้าใส่ ฟอร์มคอนโดจะเปิดแชต OA พร้อมข้อความที่กรอกไว้
window.SITE = window.SITE || { name: "หมอก", phone: "093 923 0625", lineId: "m.sjk", oaId: "" };

(function () {
  var PAGES = [
    { f: "index.html",    k: "home",     t: '<i data-i="home"></i> Home · หน้าหลัก' },
    { f: "condo.html",    k: "condo",    t: '<i data-i="condo"></i> Condo · หาคอนโด' },
    { f: "coway.html",    k: "coway",    t: '<i data-i="water"></i> Coway' },
    { f: "internet.html", k: "internet", t: '<i data-i="wifi"></i> Internet · อินเทอร์เน็ต' }
  ];
  var PROMO = {
    condo:    { v: "cover-condo.svg",    t: "Find a Condo · หาคอนโด", d: "กรอกฟอร์ม ผมหาห้องให้", c: "Start →" },
    coway:    { v: "cover-coway.svg",    t: "Coway · กรองน้ำ ฟอกอากาศ", d: "ติดตั้งฟรี เดือนแรก 99 บาท", c: "Browse →" },
    internet: { v: "cover-internet.svg", t: "Internet · อินเทอร์เน็ต", d: "ผมช่วยสมัครและนัดติดตั้ง", c: "Open →" }
  };
  var local = location.protocol === "file:";
  var cur = document.documentElement.getAttribute("data-page") || "";

  function bind() {
    var c = window.SITE;
    document.querySelectorAll("[data-name]").forEach(function (e) { e.textContent = c.name; });
    document.querySelectorAll("[data-phone]").forEach(function (e) { e.textContent = c.phone; });
    document.querySelectorAll("[data-tel]").forEach(function (e) { e.href = "tel:" + c.phone.replace(/\D/g, ""); });
    document.querySelectorAll("[data-lineid]").forEach(function (e) { e.textContent = c.lineId; });
    document.querySelectorAll("[data-line]").forEach(function (e) { e.href = "https://line.me/ti/p/~" + encodeURIComponent(c.lineId.replace(/^@/, "")); });
  }
  function init() {
    var nav = document.createElement("nav");
    nav.className = "sn";
    nav.innerHTML = PAGES.map(function (p) { var h = (p.k === "home" && !local) ? "./" : p.f; return '<a href="' + h + '"' + (p.k === cur ? ' class="on"' : "") + ">" + p.t + "</a>"; }).join("");
    document.body.insertBefore(nav, document.body.firstChild);
    if (cur !== "home") {
      var keys = ["condo", "coway", "internet"].filter(function (k) { return k !== cur; });
      var sec = document.createElement("section");
      sec.className = "wrap xp";
      sec.innerHTML = '<h2>You may also need · อาจเป็นประโยชน์กับคุณ</h2><div class="grid">' +
        keys.map(function (k) { var p = PROMO[k]; return '<a class="xc" href="' + k + ".html" + '"><img alt="" src="assets/img/' + p.v + '"><div class="xb"><b>' + p.t + "</b><span>" + p.d + "</span><u>" + p.c + "</u></div></a>"; }).join("") + "</div>";
      var bar = document.querySelector(".bar");
      document.body.insertBefore(sec, bar);
    }
    if (window.hydrateIcons) window.hydrateIcons(document);
    bind();
    setTimeout(bind, 0);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
})();
