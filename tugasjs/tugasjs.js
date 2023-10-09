/* If, Else, Nested If */

let nilai = 75;

if (nilai >= 90) {
    console.log("Nilai Anda A");
} else if (nilai >= 80) {
    console.log("Nilai Anda B");
} else if (nilai >= 70) {
    console.log("Nilai Anda C");
} else {
    console.log("Nilai Anda D");
}


/* switchh case*/

let hari = "Minggu";

switch (hari) {
    case "Senin":
        console.log("Hari ini adalah Weekday");
    break;
    case "Selasa":
        console.log("Hari ini adalah Weekday");
    break;
    case "Rabu":
        console.log("Hari ini adalah Weekday");
    break;
    case "Kamis":
        console.log("Hari ini adalah Weekday");
    break;
    case "Jumat":
        console.log("Hari ini adalah Weekday");
    break;
  default:
    console.log("Hari ini adalah hari Weekend")
}


/* For Statement */

for (let a = 1; a <= 10; a++) {
    console.log("Angka" + a);
}


/* While */

var number = 0;

while (number < 5) {
  console.log("Angka Ke-" + (number + 1));
  number++;
}


/* Do While */

let angka = 1;

do {
  console.log("Angka: " + angka);
  angka++;
} while (angka <= 5);


/* Function */

function kurang(a, b) {
    return a - b;
  }
  
  let hasil = kurang(10, 2);
  console.log("Hasil pengurangan: " + hasil);
  