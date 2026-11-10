// 4-masala. tubSonlarRoyxati(n) — 2 dan n gacha bo'lgan barcha tub sonlar massivi.
// Yechim: har bir son uchun 2 dan sqrt(son) gacha bo'luvchi qidiraman; topilmasa, son tub va massivga qo'shiladi.
function tubSonlarRoyxati(n) {
  const tublar = [];
  for (let son = 2; son <= n; son++) {
    let tubmi = true;
    for (let b = 2; b * b <= son; b++) {
      if (son % b === 0) {
        tubmi = false;
        break;
      }
    }
    if (tubmi) {
      tublar.push(son);
    }
  }
  return tublar;
}

// Tekshiruvlar
console.log(tubSonlarRoyxati(30));   // kutilgan: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
console.log(tubSonlarRoyxati(2));    // kutilgan: [2]
console.log(tubSonlarRoyxati(20));   // kutilgan: [2, 3, 5, 7, 11, 13, 17, 19] (o'z misolim)
console.log(tubSonlarRoyxati(1));    // kutilgan: [] (chegaraviy holat: 2 dan kichik son)
