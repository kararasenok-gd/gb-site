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


document.getElementById("delAcc").addEventListener("click", deleteAccountConfirmation);