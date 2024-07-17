function BMI(){
// Declaration:      
const hasilKualitas = document.getElementById('hasilkualitas');
const angkaBMI = document.getElementById('angka-bmi');
const hasilInfo = document.getElementById('hasil-info');
const tinggi = parseFloat(document.getElementById('inputTinggi').value)/100;
const beratBadan = parseFloat(document.getElementById('inputBerat').value);
const rentangBMI = document.getElementById('rentang-bmi');
const penjelasan = document.getElementById('more-info');
const titleResiko = document.getElementById('title-resiko');
const resiko1 = document.getElementById('resiko1');
const resiko2 = document.getElementById('resiko2');
const resiko3 = document.getElementById('resiko3');
const resiko4 = document.getElementById('resiko4');

//Hide & Show General Info:
let generalInfo = document.querySelector(".general-info");
generalInfo.classList.toggle("show");

// Hitung nilai BMI
let hasilBMI = beratBadan / (tinggi * tinggi);

// Membulatkan hasilBMI menjadi dua digit desimal
let bmiDuaDigit = hasilBMI.toFixed(1);

//Main Function
    if(hasilBMI < 18.5){
        hasilKualitas.innerHTML = "Berat Badan Kurang"
        angkaBMI.innerHTML = bmiDuaDigit;
        hasilInfo.innerHTML = "Anda kekurangan berat badan"
        rentangBMI.innerHTML = "Hasil BMI < 18.5"
        penjelasan.innerHTML = "Anda berada dalam kategori kekurangan berat badan. Hubungi dokter lebih lanjut mengenai pola makan dan gizi yang baik untuk meningkatkan kesehatan."
        titleResiko.innerHTML = "Berat rendah dapat menyebabkan berbagai masalah penyakit:"
        resiko1.innerHTML = "Infertilitas"
        resiko2.innerHTML = "Anemia"
        resiko3.innerHTML = "Osteoporosis"
        resiko4.innerHTML = "Sistem Imun Lemah"
    }
    else if (hasilBMI >= 18.5 && hasilBMI <= 24.9){
        hasilKualitas.innerHTML = "Normal"
        angkaBMI.innerHTML = bmiDuaDigit;
        hasilInfo.innerHTML = "Anda memiliki berat badan ideal."
        rentangBMI.innerHTML = "Hasil BMI diantara 18.5 dan 24.9"
        penjelasan.innerHTML = "Anda berada dalam kategori berat badan yang normal. Tetap pertahankan berat badan Anda dan jaga berat badan Anda dengan mengatur keseimbangan antara pola makan dan aktivitas fisik Anda."
    }
    else if(hasilBMI >= 25.0 && hasilBMI <= 29.9){
        hasilKualitas.innerHTML = "Berat Badan Lebih"
        angkaBMI.innerHTML = bmiDuaDigit;
        hasilInfo.innerHTML = "Anda memiliki berat badan berlebih"
        rentangBMI.innerHTML = "Hasil BMI diantara 25.0 dan 29.9"
        penjelasan.innerHTML = "Anda berada dalam kategori overweight atau berat badan berlebih. Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalor makanan yang dikonsumsi dan berolahraga. Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal."
        titleResiko.innerHTML = "Beberapa penyakit yang berasal dari kegemukan:"
        resiko1.innerHTML = "Diabetes"
        resiko2.innerHTML = "Hipertensi"
        resiko3.innerHTML = "Sakit Jantung"
        resiko4.innerHTML = "Osteoarthritis"
    }
    else if (hasilBMI >= 30.0){
        hasilKualitas.innerHTML = "Obesitas"
        angkaBMI.innerHTML = bmiDuaDigit;
        hasilInfo.innerHTML = "Anda berada dalam kategori obesitas"
        rentangBMI.innerHTML = "Hasil BMI lebih dari 25"
        penjelasan.innerHTML = "Anda berada dalam kategori obesitas. Usahakan untuk menurunkan berat badan dan menerapkan pola hidup sehat dengan menjaga makan dan aktivitas fisik. Segera kunjungi dokter untuk dilakukan pemeriksaan kesehatan lanjutan untuk mengetahui risiko yang Anda miliki terkait berat badan Anda."
        titleResiko.innerHTML = "Beberapa penyakit yang berasal dari kegemukan:"
        resiko1.innerHTML = "Diabetes"
        resiko2.innerHTML = "Hipertensi"
        resiko3.innerHTML = "Sakit Jantung"
        resiko4.innerHTML = "Osteoarthritis"
    }
    else{
        alert("Invalid Input");
    }
}