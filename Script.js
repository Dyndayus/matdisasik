//SCORE
let totalScore = 0;
let questionIndex = 1;

// jawaban valid
const correctAnswers = {
    1: 56,
    2: 720,
    3: 120,
    4: 3024
};

//  (benar/salah)
let questionFeedback = [];

// PILIH JAWABAN
function pilihJawaban(value, element, questionNumber) {
    // Periksa 
    if (value === correctAnswers[questionNumber]) {
        totalScore += 25; // +25 poin
        questionFeedback.push(`Soal ${questionNumber}: ✅ Benar`);
    } else {
        questionFeedback.push(`Soal ${questionNumber}: ❌ Salah`);
    }

    // NEXT SOAL
    if (questionNumber < 4) {
        // hiden soal
        document.getElementById(`question${questionNumber}`).style.display = "none";

        // Lanjut soal lain
        document.getElementById(`question${questionNumber + 1}`).style.display = "block";
    } else {
        // Soal terakhir, hasil akhir
        tampilkanHasilAkhir();
    }
}

// Fungsi untuk menampilkan hasil akhir
function tampilkanHasilAkhir() {
    // HIDEN SOAL AKHIR
    document.getElementById(`question4`).style.display = "none";

    // FINAL
    const resultContainer = document.getElementById("finalResult");
    resultContainer.style.display = "block";

    // SKOR
    const scoreDisplay = document.getElementById("scoreDisplay");
    scoreDisplay.innerText = `Skor Akhir Anda: ${totalScore} dari 100`;

    // FEEDBACK UTK SOAL
    const feedbackList = document.getElementById("questionFeedback");
    questionFeedback.forEach(feedback => {
        const li = document.createElement("li");
        li.innerText = feedback;
        feedbackList.appendChild(li);
    });
}
