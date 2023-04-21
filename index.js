const yesBtn = document.querySelector('#yesBtn')

yesBtn.addEventListener('click', function(){

    alert('SABIA QUE DIRIAS SI')
    alert('ME HACES MU FELIZ')
})


const noBtn = document.querySelector('#noBtn')

noBtn.addEventListener('mouseover',function(){

    const ramdonx = parseInt(Math.random()*100)
    const randomy = parseInt(Math.random()*100)

    noBtn.style.setProperty('top', ramdonx+'%')
    noBtn.style.setProperty('left', ramdony+'%')

    noBtn.style.setProperty('trasnform', 'Translate(-${randomx}%, -${randomy}%)');
})