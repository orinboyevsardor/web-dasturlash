// 1-masala. palindromSon(n) — son chapdan ham, o'ngdan ham bir xil o'qiladimi?
// Yechim: sonning raqamlarini % 10 va Math.floor bilan teskari yig'ib, asl son bilan solishtiraman.
function palindromSon(n) {
  let qolgan = n;
  let teskari = 0;
  while (qolgan > 0) {
    const raqam = qolgan % 10;
    teskari = teskari * 10 + raqam;
    qolgan = Math.floor(qolgan / 10);
  }
  return teskari === n;
}

// Tekshiruvlar
console.log(palindromSon(12321));   // kutilgan: true
console.log(palindromSon(1230));    // kutilgan: false
console.log(palindromSon(1221));    // kutilgan: true (o'z misolim)
console.log(palindromSon(0));       // kutilgan: true (chegaraviy holat)
