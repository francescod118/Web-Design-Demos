//All small cups
const smallCups = document.querySelectorAll('.cup-small');
//Large cup area
const liters = document.getElementById('liters');
//Percentage of water display
const percentage = document.getElementById('percentage');
//Water reamining display
const remained = document.getElementById('remained');


smallCups.forEach((cup, x) => {
    cup.addEventListener('click',() => highlightCups(x))
})

function highlightCups(x){

    if(smallCups[x].classList.contains('full') && !smallCups[x].nextElementSibling.classList.contains('full')){
        x--
    }
    smallCups.forEach((cup, x2) => {
        if(x2 <= x){
            cup.classList.add('full')
        }
        else{
            cup.classList.remove('full')
        }
    })

    updateBigCup()
}

function updateBigCup(){
    //count how many full cups
    const fullCups = document.querySelectorAll('.cup-small.full').length;
    //total number of cups
    const totalCups = smallCups.length;
    //dont show percent if no cups are full
    if(fullCups === 0) {
        percentage.style.visibility = 'hidden';
        percentage.style.height = 0;  
    }
    //show percent when there are full cups
    else{
        percentage.style.visibility = 'visible';
        percentage.style.height = `${fullCups / totalCups * 330}px`;  
        percentage.innerText = `${fullCups / totalCups * 100}%`;
    }

    if(fullCups === totalCups){
        remained.style.visibility = 'hidden';
        remained.style.height = 0;  
    }
    else{
        remained.style.visibility = 'visible';
        remained.style.height = 0;  
        liters.innerText = `${2-(250 * fullCups/1000)}L`;
    }
}