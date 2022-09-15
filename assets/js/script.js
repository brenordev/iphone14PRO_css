
    const date = new Date();
    const displayHour = document.querySelector('#hour');
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    function displayTimer(){
        displayHour.innerHTML = (`${hour}:${minute}`);
        if (minute < 10){
        displayHour.innerHTML = (`${hour}:0${minute}`);
        }
        if (hour < 10){
            displayHour.innerHTML = (`0${hour}:${minute}`)
        }
    }
    setInterval(displayTimer, 1000);
    displayTimer();
