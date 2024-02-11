function deleteAccountConfirmation() {
    // var confirmationMessages = [
    //     "Вы хотите удалить аккаунт?",
    //     "Уверены?",
    //     "ТОЧНО?",
    //     "ЕСЛИ ВЫ УДАЛИТЕ АККАУНТ НИЧЕГО НЕ ОСТАНЕТСЯ! ВЫ УВЕРЕНЫ?",
    //     "Нажмите ОК, чтобы удалить аккаунт"
    // ];

    // function showNextConfirmation(index) {
    //     if (index >= confirmationMessages.length) {
    //         alert("Удалено!")
    //     } else {
    //         var result = confirm(confirmationMessages[index]);
    //         if (result) {
    //             showNextConfirmation(index + 1);
    //         }
    //     }
    // }

    // showNextConfirmation(0);

    var a = prompt("Text")
    if(a === "") {
        a = "Text"
    }
    document.getElementById("delAcc").innerHTML = a
}

function a() {
    var a = prompt("Оценка");
    var b = "";
    if (a === "1" || a === "2" || a === "3" || a === "4" || a === "5") {
        if (a === "1" || a === "2" || a === "3" ) {
            b = "плохая";
        } else {
            b = "хорошая";
        }
        
        document.getElementById("ocenk").innerHTML = "Оценка: " + a;
        document.getElementById("res").innerHTML = "Это " + b + " оценка";
    } else {}
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("delAcc").addEventListener("click", deleteAccountConfirmation);
    document.getElementById("ocenk").addEventListener("click", a);
});

console.log(NaN + "5")

const svetaScores = [40, 10, 40];
const maximScores = [5, 40, 0];
const dimaScores = [40, 1, 40];

const svetaAvg = svetaScores.reduce((acc, score) => acc + score, 0) / svetaScores.length;
const maximAvg = maximScores.reduce((acc, score) => acc + score, 0) / maximScores.length;
const dimaAvg = dimaScores.reduce((acc, score) => acc + score, 0) / dimaScores.length;

if (svetaAvg > maximAvg && svetaAvg > dimaAvg) {
    console.log("Победитель: Света");
} else if (maximAvg > svetaAvg && maximAvg > dimaAvg) {
    console.log("Победитель: Максим");
} else if (dimaAvg > svetaAvg && dimaAvg > maximAvg) {
    console.log("Победитель: Дима");
} else {
    console.log("Тут больше чем 1 победитель xd");
}


