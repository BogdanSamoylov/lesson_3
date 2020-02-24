let momey, time, opEx;

function start(){
    money = +prompt ("Ваш бюджет на месяц?");
    time = prompt ("Введите дату в формате YYYY-MM-DD");

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt ("Ваш бюджет на месяц?");
    }
}
start();

let appData = {
    budget: money,
    timeData: time,
    expenses : {},
    optionalExpenses: {},
    income : [],
    savings: false
};

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце");
        let b = prompt("Во сколько обойдется?");
        if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null
            && a != '' && b != '' && a.length < 50) {
            console.log("done");
            appData.expenses[a] = b;
        }
        else {
            i = i - 1;
        }
    }
}
chooseExpenses();

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget/30).toFixed(1);

    alert("Ваш дневной бюджет = " + appData.moneyPerDay);
}
detectDayBudget();

function detectLevel() {
    if(appData.moneyPerDay <100){
        alert("Минималный уровень достатка");
    } else if(appData.moneyPerDay >100 && appData.moneyPerDay <2000){
        alert("Средний уровень достатка");
    } else if (appData.moneyPerDay >2000){
        alert("Высокий уровень достатка"); 
    } else{
        alert("Произошла ошибка");
    }
}
detectLevel();

function chooseOptExpenses() {
    for (let i = 0; i < 3; i++){
        opEx = +prompt("Статья необязательных расходов?");
        appData.optionalExpenses[i] = opEx;
        console.log(appData.optionalExpenses);
    }
   
}
chooseOptExpenses();

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");

            appData.monthIncome = save/100/12*percent;
            alert("Доход с Вашего депозита в месяц: " + appData.monthIncome);
    }
}
checkSavings();