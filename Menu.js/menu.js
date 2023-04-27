if(lunch.style.display = 'block' && breakfast.style.display != 'none' 
&& coffees.style.display != 'none' && drinks.style.display != 'none' 
&& orderform.style.display != 'none' && orderconfermation != 'none')
{
    lunch.style.display = 'none';
    breakfast.style.display = 'none';
    coffees.style.display = 'none';
    drinks.style.display = 'none';
    orderform.style.display  = 'none';
    orderconfermation.style.display = 'none';
}

function bfbtn(){

    let btn2 = document.getElementById('btn2')
    let breakfast = document.getElementById('breakfast')
    if(breakfast.style.display = 'none')
    {
        breakfast.style.display = 'block';
        all.style.display = 'none';
        lunch.style.display = 'none';
        coffees.style.display = 'none';
        drinks.style.display = 'none';
        orderform.style.display = 'none';
        orderconfermation.style.display = 'none'
    }
}

function lunchbtn(){

    let btn3 = document.getElementById('btn3')
    let lunch = document.getElementById('lunch')
    if(lunch.style.display = 'none')
    {
        lunch.style.display = 'block';
        all.style.display = 'none';
        breakfast.style.display = 'none';
        coffees.style.display = 'none';
        drinks.style.display = 'none';
        orderform.style.display = 'none';
        orderconfermation.style.display = 'none'
    }
}

function cofebtn(){

    let btn4 = document.getElementById('btn4')
    let coffees = document.getElementById('coffees')
    if(coffees.style.display = 'none')
    {
        coffees.style.display = 'block';
        all.style.display = 'none';
        breakfast.style.display = 'none';
        lunch.style.display = 'none';
        drinks.style.display = 'none';
        orderform.style.display = 'none';
        orderconfermation.style.display = 'none'
    }
}

function drinkbtn(){

    let btn5 = document.getElementById('btn5')
    let drinks = document.getElementById('drinks')
    if(drinks.style.display = 'drinks')
    {
        drinks.style.display = 'block';
        all.style.display = 'none';
        breakfast.style.display = 'none';
        lunch.style.display = 'none';
        coffees.style.display = 'none';
        orderform.style.display = 'none';
        orderconfermation.style.display = 'none'
    }
}

function allbtn(){

    let btn1 = document.getElementById('btn1')
    let all = document.getElementById('all')
    if(all.style.display = 'none')
    {
        all.style.display = 'block';
        breakfast.style.display = 'none';
        lunch.style.display = 'none';
        coffees.style.display = 'none';
        drinks.style.display = 'none';
        orderform.style.display = 'none';
        orderconfermation.style.display = 'none'
    }
}


function orderbtn(){

    let orderbtn = document.getElementById('orderbtn')
    let orderform = document.getElementById('orderform')
    if(orderform.style.display = 'none')
    {
        orderform.style.display = 'block';
        all.style.display = 'none';
        breakfast.style.display = 'none';
        lunch.style.display = 'none';
        coffees.style.display = 'none';
        drinks.style.display = 'none';
        orderconfermation.style.display = 'none'
    }
}


function confrm(){

    let confermbtn = document.getElementById('confermbtn')
    let orderconfermation= document.getElementById('orderconfermation')
    if(orderconfermation.style.display = 'none')
    {
        orderconfermation.style.display = 'block';
        all.style.display = 'none';
        breakfast.style.display = 'none';
        lunch.style.display = 'none';
        coffees.style.display = 'none';
        drinks.style.display = 'none';
        orderform.style.display = 'none';
    }
}