var money = 0;// sets the start money in the begining
var money_text = document.getElementById('money_number');
var farm = document.getElementById('farm');
farm.addEventListener('click', collect_food);
var farm_grown = false;
var food = false;


//      the farm food grows every 10 seconds and intervinals where img changes
var growing_time = setTimeout(grow_done, 10000);
setTimeout(grow_33, 3300);
setTimeout(grow_66, 6600)


//      after a time the farm changes to another img/growing time
function grow_33()
{
    farm.src ="/assets/plantV2many.png";
}

function grow_66() 
{
    farm.src ="/assets/plantV3many.png";
}

function grow_done()
{
    farm_grown = true;
    console.log(farm_grown);
    farm.src = "/assets/plant-finish.png"
}



//      for when the food has grown and player clicks and stores the food
function collect_food()
{



    if(farm_grown == true && food == false)
    {
        food = true;
        farm_grown = false;
        growing_time = setTimeout(grow_done, 10000);
        console.log('food collected?',food);

    }

    else if(farm_grown == false)
    {
        console.log('farm ready to be harvested?',farm_grown);
    }

}



//abou putting the food in the plate
var plate = document.getElementById('plate');
plate.addEventListener('click', put_food);
var food_in_plate = false;

function put_food()
{

    if(food == true)
    {
        document.getElementById("plate").src="";
        food_in_plate = true;
        food = false;
        setTimeout(food_eaten, 10000); //after 10 sec play food_eaten
    }

}

// after foo di seaten u get money
function food_eaten() 
{
    document.getElementById("plate").src="/assets/pixil-frame-0 (2).png";
    money++ ;
    console.log(money);
    money_text.innerHTML = money;
    
    
}