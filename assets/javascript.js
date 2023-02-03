var money = 0;// sets the start money in the begining
var farm = document.getElementById('farm');
farm.addEventListener('click', collect_food);
var farm_grown = false;
var food = false;


//      the farm food grows every 10 seconds
var growing_time = setInterval(grow_done, 10000);


//      turns farm_frown to true after 10sec? passed- and is supposed to stop the timer
function grow_done()
{
    farm_grown = true;
    console.log(farm_grown);
    clearInterval(growing_time);
  
}

//      for when the food has grown and player clicks and stores the food
function collect_food()
{



    if(farm_grown == true && food == false)
    {
        food = true;
        farm_grown = false;
        var growing_time = setInterval(grow_done, 10000);

    }

    else(farm_grown == false)
    {

    }

    console.log('food collected?',food);

}


var plate = document.getElementById('plate');
plate.addEventListener('click', put_food);
var food_in_plate = false

function put_food()
{

    if(food == true)
    {
        document.getElementById("plate").src="";
        food_in_plate = true;
        food = false;
        setTimeout(food_eaten, 10000)
    }

}

function food_eaten()
{
    document.getElementById("plate").src="/assets/pixil-frame-0 (2).png";
}