var money = 0;// sets the start money in the begining
var farm = document.getElementById('farm');
farm.addEventListener('click', collect_food);
var farm_grown = false;
var food = false;
var money_text = document.getElementById('money_number');

//      the farm food grows every 10 seconds
var growing_time = setTimeout(grow_done, 10000);


//      turns farm_frown to true after 10sec? passed- and is supposed to stop the timer
function grow_done()
{
    farm_grown = true;
    console.log(farm_grown);
  
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

function food_eaten() 
{
    document.getElementById("plate").src="/assets/pixil-frame-0 (2).png";
    money++ ;
    console.log(money);
    money_text.innerHTML = money;
    
    
}