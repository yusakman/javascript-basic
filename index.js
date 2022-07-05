// Case 1
let inputPertama =  prompt("Silakan pilih angka tertentu");
let inputKedua = prompt("Silakan pilih angka kedua");

if (inputPertama != null) {
    pangkat();
    pembagian();
}

function pangkat() {
    alert("Hasil kuadrat angka yang anda masukkan adalah " + Math.pow(inputPertama, inputKedua));
    document.getElementById("inputPertama").innerHTML = `Angka yang anda input pertama adalah ${inputPertama}, jika dikuadratkan dengan angka kedua akan menjadi ${Math.pow(inputPertama, inputKedua)}`;
}

function pembagian() {
    alert("Hasil bagi antara angka yang anda masukan petama dan kedua adalah " + (inputPertama / inputKedua));
    document.getElementById("inputKedua").innerHTML = `Angka yang anda input pertama adalah ${inputPertama}, jika dibagi dengan angka kedua akan menjadi ${inputPertama / inputKedua}`;
}

// Case 3
const timestamp = new Date().getTime();

function getPrevDay() {
    // Convert timestamp ke milisecond lalu kurangi 24 jam dalam milisecond
    return (new Date(timestamp - 24*60*60*1000)).toDateString();
}

function getTomorrowDay() {
    // Convert timestamp ke milisecond lalu kurangi 24 jam dalam milisecond
    return (new Date(timestamp + 24*60*60*1000)).toDateString();
}

console.log("Hari ini ", new Date());
console.log("Kemarin ", getPrevDay());
console.log("Besok ", getTomorrowDay());

document.getElementById("hariIni").innerHTML = `Hari Ini: ${new Date().toDateString()}`;
document.getElementById("kemarin").innerHTML = `Kemarin: ${getPrevDay()}`;
document.getElementById("besok").innerHTML = `Besok: ${getTomorrowDay()}`;

// Case 5
let inputKarakter = prompt("Masukan karakter apa pun, bisa berupa huruf ataupun angka ");
let jumlahInput = inputKarakter.length;

function hitungString() {
    alert("Jumlah kata yag kamu masukan " + inputKarakter + " berjumlah " + jumlahInput);
    document.getElementById("jumlahString").innerHTML = `Jumlah karakter yang kamu input ${jumlahInput}`;
}

hitungString();

