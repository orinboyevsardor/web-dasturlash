// js/katalog.js — statistika, chiqarish, qidiruv, filtr, saralash

const konteyner = document.getElementById("konteyner");
const soni = document.getElementById("soni");
const boshXabar = document.getElementById("boshXabar");
const qidiruv = document.getElementById("qidiruv");
const kategoriya = document.getElementById("kategoriya");
const saralash = document.getElementById("saralash");

const narxMatni = (n) => n.toLocaleString("ru-RU") + " so'm";

// ---- A: statistika (reduce, find) ----
function statistikaniChiqar() {
  const jami = mahsulotlar.length;
  const ortacha = mahsulotlar.reduce((s, m) => s + m.narx, 0) / jami;
  const maxNarx = mahsulotlar.reduce((mx, m) => Math.max(mx, m.narx), 0);
  const qimmat = mahsulotlar.find((m) => m.narx === maxNarx);
  document.getElementById("statJami").textContent = jami;
  document.getElementById("statOrtacha").textContent = narxMatni(Math.round(ortacha));
  document.getElementById("statQimmat").textContent = qimmat.nomi;
}

// ---- kategoriyalar ro'yxati (map + Set) ----
function kategoriyalarniTuzish() {
  const nomlar = [...new Set(mahsulotlar.map((m) => m.kategoriya))];
  const hammasi = new Option("Barchasi", "hammasi");
  kategoriya.append(hammasi);
  nomlar.forEach((k) => kategoriya.append(new Option(k[0].toUpperCase() + k.slice(1), k)));
}

// ---- B: kartani yaratish (faqat textContent) ----
function kartaYarat(m) {
  const karta = document.createElement("article");
  karta.className = "karta";
  karta.dataset.id = m.id;

  const rasm = document.createElement("img");
  rasm.src = m.rasm;
  rasm.alt = m.nomi;
  rasm.width = 800;
  rasm.height = 500;
  rasm.loading = "lazy";

  const h3 = document.createElement("h3");
  h3.textContent = m.nomi;

  const narx = document.createElement("p");
  narx.textContent = narxMatni(m.narx);

  const holat = document.createElement("p");
  holat.textContent = m.mavjud ? "Mavjud" : "Hozircha yo'q";

  const tugma = document.createElement("button");
  tugma.type = "button";
  tugma.className = "tugma batafsil";
  tugma.textContent = "Batafsil";

  karta.append(rasm, h3, narx, holat, tugma);
  return karta;
}

function chiqar(royxat) {
  konteyner.innerHTML = "";
  royxat.forEach((m) => konteyner.append(kartaYarat(m)));
  soni.textContent = royxat.length;
  boshXabar.hidden = royxat.length !== 0;
}

// ---- qidiruv + filtr + saralash birgalikda ----
function yangila() {
  const soz = qidiruv.value.trim().toLowerCase();
  const kat = kategoriya.value;

  let royxat = mahsulotlar
    .filter((m) => m.nomi.toLowerCase().includes(soz))
    .filter((m) => kat === "hammasi" || m.kategoriya === kat);

  royxat = [...royxat]; // asl massiv o'zgarmasligi uchun nusxa
  switch (saralash.value) {
    case "narx-osish":
      royxat.sort((a, b) => a.narx - b.narx);
      break;
    case "narx-kamayish":
      royxat.sort((a, b) => b.narx - a.narx);
      break;
    case "nom":
      royxat.sort((a, b) => a.nomi.localeCompare(b.nomi, "uz"));
      break;
  }
  chiqar(royxat);
}

// ---- C: event delegation — bitta ota konteynerda ----
konteyner.addEventListener("click", (e) => {
  const tugma = e.target.closest(".batafsil");
  if (!tugma) return;
  const id = Number(tugma.closest(".karta").dataset.id);
  const tanlangan = mahsulotlar.find((m) => m.id === id);
  if (tanlangan) modalOch(tanlangan);
});

qidiruv.addEventListener("input", yangila);
kategoriya.addEventListener("change", yangila);
saralash.addEventListener("change", yangila);

statistikaniChiqar();
kategoriyalarniTuzish();
yangila();
