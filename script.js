// function age() {
//   let d1 = document.getElementById("date").value;
//   let m1 = document.getElementById("month").value;
//   let y1 = document.getElementById("year").value;
//   let date = new Date();
//   let d2 = date.getDate();
//   console.log(d2);
//   let m2 = 1 + date.getMonth();
//   let y2 = date.getFullYear();
//   let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
//   if (d1 > d2) {
//     d2 = d2 + month[m2 - 1];
//     m2 = m2 - 1;
//   }
//   if (m1 > m2) {
//     m2 = m2 + 12;
//     y2 = y2 - 1;
//   }
//   let d = d2 - d1;
//   let m = m2 - m1;
//   let y = y2 - y1;
//   document.getElementById("age").innerHTML = `Your Age is ${
//     "<b>" + y + "</b>"
//   } Years ${"<b>" + m + "</b>"} Months ${"<b>" + d + "</b>"} Days.`;
// }

// //Using ES6 Reduce Code length
const age = () => {
  const [d1, m1, y1] = [
    +document.getElementById("date").value,
    +document.getElementById("month").value,
    +document.getElementById("year").value,
  ];
  const date = new Date();
  let [d2, m2, y2] = [date.getDate(), date.getMonth() + 1, date.getFullYear()];
  const month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (d1 > d2) {
    d2 += month[m2 - 1];
    m2--;
  }
  if (m1 > m2) {
    m2 += 12;
    y2--;
  }
  const [d, m, y] = [d2 - d1, m2 - m1, y2 - y1];
  document.getElementById(
    "age"
  ).innerHTML = `Your Age is ${y} Years ${m} Months ${d} Days.`;
};
