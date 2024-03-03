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


function findBMI(a, b) {
    return a / (b ** 2);
}

console.warn(findBMI(44, 1.83))
// console.log(183 ** 2)
// console.log(44 / 183 ** 2)


// Создайте массив из 5 разных стран, а затем, используя методы массивов:

// 1) добавьте 2 элемента в конец массива и выведите массив в консоль
// 2) удалите 3 и 4 элементы массива и выведите массив в консоль
// 3) добавьте новый элемент в начало массива и выведите массив в консоль
// 4) измените значение 2 элемента массива и выведите массив в консоль
// 5) выведите в консоль каждый элемент массива и его индекс, через метод forEach()

var list = [1,2,3,4,5,6,7,8,9,10]

// 1
list.push(11)
console.log(list)

// 2
list.splice(2,2)
console.log(list)

// 3
list.unshift(0)
console.log(list)

// 4
list[1] = -2
console.log(list)

// 5
list.forEach(function(a, b){
    console.log(`${b} > ${a}`)
})

console.log("----------------03.03.2024-----------------")

let chel = {
    "aboba": "aboba",
    "skoka_zhivet": 15,
    "zavtrak": "chai",
    "obed": "uutnenko",
    "uzhin": "praniki to chau",
    "lubit": "VOZDUH"
}

let zavtrak = {
    "nothing": null,
    "data": "segodnya",
    "s": "s",
    "age": NaN,
    "expire": "Zavtra"
}

let ovechka = {
    "name": null,
    "food": "TRAVA",
    "age": 1,
    "hobby": null,
    "lifetime": 14
}

let breakcore = {
    play() {
        alert("playing breakcore...")
        window.open("https://youtu.be/S-GLSNMOIsc?si=3HktNnIMHI1Kql81", "_blank")
    }
}

console.log(chel, chel.obed, chel.skoka_zhivet)
console.log(zavtrak, zavtrak.data, zavtrak.expire)
console.log(ovechka, ovechka.name, ovechka.age)