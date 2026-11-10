// 2-masala. qisqartma(s) — nomdagi har bir so'zning birinchi harfidan katta harfli qisqartma.
// Yechim: sikl bilan yuraman; bo'shliqdan keyingi (yoki birinchi) harf so'z boshi bo'lsa, uni katta qilib qo'shaman.
function qisqartma(s) {
  let natija = "";
  let sozBoshi = true;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      sozBoshi = true;
    } else {
      if (sozBoshi) {
        natija += s[i].toUpperCase();
      }
      sozBoshi = false;
    }
  }
  return natija;
}

// Tekshiruvlar
console.log(qisqartma("Urganch davlat universiteti"));      // kutilgan: "UDU"
console.log(qisqartma("hypertext markup language"));        // kutilgan: "HML"
console.log(qisqartma("abu rayhon beruniy"));               // kutilgan: "ARB" (o'z misolim)
console.log(qisqartma(""));                                 // kutilgan: "" (chegaraviy holat: bo'sh satr)
