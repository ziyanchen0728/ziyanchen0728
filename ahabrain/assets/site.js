(function(){ "use strict";
  const dict = window.AhaBrainI18n || {};
  const picker = document.getElementById("locale");
  const supported = Object.keys(dict);
  if (!picker || !supported.length) return;
  const query = new URLSearchParams(location.search).get("lang");
  let saved = null;
  try { saved = localStorage.getItem("ahabrain.website.locale"); } catch (_) {}
  const browser = (navigator.language || "").toLowerCase();
  function choose(value) {
    if (supported.includes(value)) return value;
    if (/^zh-(tw|hk|mo)/i.test(value || "")) return "zh-TW";
    if (/^zh/i.test(value || "")) return "zh-CN";
    if (/^ja/i.test(value || "")) return "ja";
    if (/^ko/i.test(value || "")) return "ko";
    return "en";
  }
  function apply(locale) {
    const lang = choose(locale);
    const copy = dict[lang];
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const value = copy[el.dataset.i18n];
      if (typeof value === "string") el.textContent = value;
    });
    if (copy.pageTitle) document.title = copy.pageTitle;
    const desc = document.querySelector('meta[name="description"]');
    if (desc && copy.pageDesc) desc.setAttribute("content", copy.pageDesc);
    document.querySelectorAll("[data-lang-link]").forEach(link => {
      const original = link.dataset.originalHref || link.getAttribute("href");
      link.dataset.originalHref = original;
      const url = new URL(original, location.href);
      url.searchParams.set("lang", lang);
      link.setAttribute("href", url.pathname + url.search + url.hash);
    });
    picker.value = lang;
    try { localStorage.setItem("ahabrain.website.locale", lang); } catch (_) {}
  }
  const start = query || saved || choose(browser);
  apply(start);
  picker.addEventListener("change", () => apply(picker.value));
})();