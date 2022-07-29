let increament = document.getElementById('person-increament');
let decreament = document.getElementById('person-decreament');
let numberOfPers = document.getElementById('numberofperson');
let billAmount = document.getElementById('billAmount');
let tip = document.getElementById('tipPercent');
let billPerPerson = document.getElementById('totalBillPerPerson');
const negativeMes = document.getElementById('nonegative');

let numberOfPersons = 0;
increament.onclick = () => {
    numberOfPersons = numberOfPersons + 1;
    numberOfPers.innerText = numberOfPersons;
    calculate();
};

decreament.onclick = () => {
    if (numberOfPersons <= 1) {
        negativeMes.innerText = `Number of persons cannot be less than 1.`
        negativeMes.classList.add(`zindex`)
        return
    }
    numberOfPersons = numberOfPersons - 1;
    numberOfPers.innerText = numberOfPersons
    calculate();
};
const calculate = () => {
    const bill = Number(billAmount.value);
    const tipPercent = Number(tip.value) / 100;
    const totalTip = Number(bill * tipPercent);
    const totalBill = Number(totalTip + bill);
    const persons = Number(numberOfPers.innerText);
    const perPerson = Number(totalBill / persons);
    billPerPerson.innerText = perPerson.toFixed(2);
}
