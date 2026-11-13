(function(){ "use strict";
  // Native app supplies its own navigation bar; keep browser pages fully navigable.
  const params = new URLSearchParams(location.search);
  document.documentElement.classList.toggle("is-embedded", params.get("embed") === "1");

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
    populateDocumentToc();
    picker.value = lang;
    try { localStorage.setItem("ahabrain.website.locale", lang); } catch (_) {}
  }

  function populateDocumentToc() {
    const nav = document.querySelector("[data-doc-toc]");
    if (!nav) return;
    nav.replaceChildren();
    document.querySelectorAll(".legal-article section[id] > h2").forEach((heading, index) => {
      const anchor = document.createElement("a");
      anchor.href = "#" + heading.parentElement.id;
      const number = document.createElement("span");
      number.className = "toc-number";
      number.textContent = String(index + 1).padStart(2, "0");
      const title = heading.textContent.trim().replace(/^\\d+\\.\\s*/, "");
      anchor.append(number, document.createTextNode(title));
      nav.appendChild(anchor);
    });
  }
  const start = query || saved || choose(browser);
  apply(start);
  picker.addEventListener("change", () => apply(picker.value));
})();