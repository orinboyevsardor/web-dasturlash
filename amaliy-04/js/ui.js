// js/ui.js — modal, forma tekshiruvi, hamburger menyu, tungi rejim

// ---------- Hamburger menyu ----------
const menyuTugma = document.getElementById("menyuTugma");
const menyuRoyxat = document.getElementById("menyuRoyxat");
if (menyuTugma && menyuRoyxat) {
  menyuTugma.addEventListener("click", () => {
    const ochiq = menyuRoyxat.classList.toggle("ochiq");
    menyuTugma.setAttribute("aria-expanded", String(ochiq));
  });
}

// ---------- Tungi rejim (localStorage) ----------
const temaTugma = document.getElementById("temaTugma");
function temaniQoyish(tun) {
  document.documentElement.dataset.tema = tun ? "tun" : "kun";
  if (temaTugma) temaTugma.textContent = tun ? "☀" : "☾";
}
let saqlanganTema = null;
try { saqlanganTema = localStorage.getItem("tema"); } catch (e) { /* brauzer taqiqlagan bo'lishi mumkin */ }
temaniQoyish(saqlanganTema === "tun");
if (temaTugma) {
  temaTugma.addEventListener("click", () => {
    const tun = document.documentElement.dataset.tema !== "tun";
    temaniQoyish(tun);
    try { localStorage.setItem("tema", tun ? "tun" : "kun"); } catch (e) { /* e'tiborsiz */ }
  });
}

// ---------- Modal oyna ----------
const modalFon = document.getElementById("modalFon");
function modalOch(m) {
  document.getElementById("modalRasm").src = m.rasm;
  document.getElementById("modalRasm").alt = m.nomi;
  document.getElementById("modalNom").textContent = m.nomi;
  document.getElementById("modalKategoriya").textContent = "Kategoriya: " + m.kategoriya;
  document.getElementById("modalNarx").textContent = "Narxi: " + m.narx.toLocaleString("ru-RU") + " so'm";
  document.getElementById("modalHolat").textContent = m.mavjud ? "Holati: mavjud" : "Holati: hozircha yo'q";
  document.getElementById("modalTeglar").textContent = "Teglar: " + m.teglar.join(", ");
  modalFon.hidden = false;
}
function modalYop() {
  modalFon.hidden = true;
}
if (modalFon) {
  document.getElementById("modalYopish").addEventListener("click", modalYop);
  modalFon.addEventListener("click", (e) => {
    if (e.target === modalFon) modalYop(); // faqat fonning o'ziga bosilganda
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modalFon.hidden) modalYop();
  });
}

// ---------- Forma tekshiruvi (aloqa.html) ----------
const forma = document.getElementById("aloqaForma");
if (forma) {
  const xatoYoz = (id, matn) => {
    document.getElementById("xato-" + id).textContent = matn;
    const maydon = document.getElementById(id);
    if (maydon) maydon.classList.toggle("xatoli", matn !== "");
    return matn === "";
  };

  const tekshiruvlar = {
    ism: () => {
      const q = forma.ism.value.trim();
      if (q === "") return xatoYoz("ism", "Ismni kiriting");
      if (q.length < 2) return xatoYoz("ism", "Ism kamida 2 ta belgidan iborat bo'lsin");
      return xatoYoz("ism", "");
    },
    telefon: () => {
      const q = forma.telefon.value.trim();
      if (q === "") return xatoYoz("telefon", "Telefon raqamni kiriting");
      if (!/^\+998\d{9}$/.test(q)) return xatoYoz("telefon", "Format: +998901234567");
      return xatoYoz("telefon", "");
    },
    email: () => {
      const q = forma.email.value.trim();
      if (q !== "" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(q)) return xatoYoz("email", "Email formati noto'g'ri");
      return xatoYoz("email", "");
    },
    manzil: () => {
      const q = forma.manzil.value.trim();
      if (q === "") return xatoYoz("manzil", "Manzilni kiriting");
      if (q.length < 5) return xatoYoz("manzil", "Manzil kamida 5 ta belgidan iborat bo'lsin");
      return xatoYoz("manzil", "");
    },
    izoh: () => {
      if (forma.izoh.value.length > 200) return xatoYoz("izoh", "Izoh 200 belgidan oshmasligi kerak");
      return xatoYoz("izoh", "");
    },
    rozilik: () => xatoYoz("rozilik", forma.rozilik.checked ? "" : "Rozilik belgisini qo'ying"),
  };

  const xabar = document.getElementById("muvaffaqiyat");

  forma.addEventListener("submit", (e) => {
    e.preventDefault();
    // some() emas — barcha maydon tekshirilib, xatolar birdan ko'rinsin
    const natijalar = Object.values(tekshiruvlar).map((tekshir) => tekshir());
    if (natijalar.every(Boolean)) {
      forma.reset();
      xabar.textContent = "Buyurtmangiz qabul qilindi! Operator tez orada bog'lanadi.";
      xabar.hidden = false;
    } else {
      xabar.hidden = true;
    }
  });

  // yozish paytida xato yo'qolishi uchun
  forma.addEventListener("input", (e) => {
    const t = tekshiruvlar[e.target.id];
    if (t && e.target.classList.contains("xatoli")) t();
  });
}
