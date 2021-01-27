let switchButton = document.querySelector('.switch')

switchButton.addEventListener('click', () =>{

    let body = document.querySelector('#switcher')

    if(body.classList.contains('dark')){

        body.classList.add('light')
        body.classList.remove('dark')

    }else if (body.classList.contains('light')) {

        body.classList.add('dark')
        body.classList.remove('light')
     }
})

