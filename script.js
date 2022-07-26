let increament = document.getElementById('person-increament');
let decreament = document.getElementById('person-decreament');
let numberOfPers = document.getElementById('numberofperson');

let timesIncreased = 0;
increament.onclick = () => {
    timesIncreased = timesIncreased + 1;
    numberOfPers.innerText = timesIncreased;
}


decreament.onclick = () => {
    if(timesIncreased <= 1 ){
        return
    }
        timesIncreased = timesIncreased - 1;
        numberOfPers.innerText = timesIncreased
    
}