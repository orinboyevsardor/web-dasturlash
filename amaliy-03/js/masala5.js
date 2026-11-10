// 5-masala. yetishmayotganSon(arr) — 1 dan n gacha sonlardan biri tushib qolgan massivdan o'sha sonni topadi.
// Yechim: n = arr.length + 1; 1 dan n gacha yig'indi n*(n+1)/2 dan massiv yig'indisini ayiraman.
function yetishmayotganSon(arr) {
  const n = arr.length + 1;
  const kutilganYigindi = (n * (n + 1)) / 2;
  let haqiqiyYigindi = 0;
  for (const son of arr) {
    haqiqiyYigindi += son;
  }
  return kutilganYigindi - haqiqiyYigindi;
}

// Tekshiruvlar
console.log(yetishmayotganSon([1, 2, 4, 5, 6]));   // kutilgan: 3
console.log(yetishmayotganSon([3, 1]));            // kutilgan: 2
console.log(yetishmayotganSon([2, 3, 1, 5]));      // kutilgan: 4 (o'z misolim)
console.log(yetishmayotganSon([]));                // kutilgan: 1 (chegaraviy holat: bo'sh massiv)
