# 4-amaliy ish — Tez Taom: JavaScript bilan jonlantirish

**Talaba:** Orinboyev Sardor, 942-24-guruh
**Loyiha mavzusi:** «Tez Taom» — Urganch shahrida taom yetkazib berish xizmati (2-amaliy ishning davomi)

## Qo'shilgan imkoniyatlar
- `js/data.js` — 12 ta taomdan iborat massiv (id, nomi, kategoriya, narx, mavjud, rasm, teglar)
- Statistika bloki: jami soni, o'rtacha narx, eng qimmat taom
- `katalog.html` — kartalar massivdan `createElement` orqali yaratiladi
- Qidiruv (`input`), kategoriya filtri, saralash (narx ↑↓, nom A–Z) — birgalikda ishlaydi
- «Hech narsa topilmadi» xabari va ko'rsatilayotgan elementlar soni
- Modal oyna (×, fon, Escape bilan yopiladi) va event delegation
- `aloqa.html` — o'zim yozgan forma tekshiruvi (bo'sh maydon, email, +998XXXXXXXXX, matn uzunligi)
- Tanlov komponentlar: tungi rejim (`localStorage`) va mobil hamburger menyu

## Massiv metodlari qayerda
| Metod | Fayl | Vazifasi |
|---|---|---|
| `reduce` | `js/katalog.js`, `statistikaniChiqar()` | o'rtacha narx va eng katta narx |
| `find` | `js/katalog.js`, `statistikaniChiqar()` va delegation | eng qimmat taom; bosilgan taomni id bo'yicha topish |
| `map` | `js/katalog.js`, `kategoriyalarniTuzish()` | kategoriya nomlari ro'yxati |
| `filter` | `js/katalog.js`, `yangila()` | qidiruv va kategoriya bo'yicha saralab olish |
| `sort` | `js/katalog.js`, `yangila()` | narx va nom bo'yicha tartiblash (nusxa ustida) |
| `forEach` | `js/katalog.js`, `chiqar()` | kartalarni sahifaga qo'shish |

## Fayl tuzilmasi
`index.html`, `katalog.html`, `aloqa.html`, `css/style.css`, `js/data.js`, `js/katalog.js`, `js/ui.js`, `rasmlar/`
