
    const date = new Date();
    const displayHour = document.querySelector('#hour');
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    function displayTimer(){
        displayHour.innerHTML = (`${hour}:${minute}`);
    }
    setInterval(displayTimer, 1000);
    displayTimer();
