const btnDarkMode = document.querySelector('.btn_theme')
const body = document.querySelector('body');
const icon = document.querySelector('.fa-moon');
    btnDarkMode.addEventListener('click', function(){
        body.classList.toggle('darkmode');
        if(body.classList == 'darkmode'){
            icon.classList.toggle('fa-moon');
            icon.classList.add('fa-sun');
            } else{
            icon.classList.toggle('fa-moon');
        }
    })