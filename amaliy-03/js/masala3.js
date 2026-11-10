// 3-masala. takrorsizBirlashtir(a, b) — ikki massivni takrorlarsiz birlashtiradi.
// Yechim: avval a, keyin b elementlarini aylanaman; natijada hali yo'q bo'lsa qo'shaman (tartib saqlanadi).
function takrorsizBirlashtir(a, b) {
  const natija = [];
  for (const element of a) {
    if (!natija.includes(element)) {
      natija.push(element);
    }
  }
  for (const element of b) {
    if (!natija.includes(element)) {
      natija.push(element);
    }
  }
  return natija;
}

// Tekshiruvlar
console.log(takrorsizBirlashtir([1, 2, 3], [2, 3, 4]));          // kutilgan: [1, 2, 3, 4]
console.log(takrorsizBirlashtir(["html"], ["css", "html"]));     // kutilgan: ["html", "css"]
console.log(takrorsizBirlashtir([5, 5, 5], [6, 5]));             // kutilgan: [5, 6] (o'z misolim)
console.log(takrorsizBirlashtir([], []));                        // kutilgan: [] (chegaraviy holat: bo'sh massivlar)
