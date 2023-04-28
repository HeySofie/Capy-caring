//      storage? start

var tempStorage = sessionStorage.getItem('money_number');
//if(tempStorage) första sättet
//if(tempStorage === null)
console.log(tempStorage);
if(tempStorage)
{
    money = tempStorage;
    console.log("redan finns " + tempStorage);
    // om den redan finns
}

//      storage? end

//      Model start

var start_button = document.getElementById('start_button');
var model = document.getElementById('model');


function start_game() // once u press the button to start the game make the model not visible
{
    growing_time();
    model.style.visibility = 'collapse';
    money_text.innerHTML = money;
}

start_button.addEventListener('click', start_game);

//      Model end

//      money start
var money = 0;// sets the start money in the begining
var money_text = document.getElementById('money_number');



//      money end

//      shop model start
var house = document.getElementById('house');
var shop = document.getElementById('shop_model');
var exit_button = document.getElementById('exit_button');
var hottub_item = document.getElementById('hottub_item');
var hottub = document.getElementById('hottub');

house.addEventListener('click', open_shop);
exit_button.addEventListener('click', close_shop);
hottub_item.addEventListener('click', buy_hottub);


function open_shop()
{
    shop.style.visibility = 'visible';
}

function close_shop()
{
    shop.style.visibility = 'collapse';
}

function buy_hottub()
{
    if(parseFloat(money) < 5)
    {
        alert("no")
    }

    else
    {
        hottub.style.visibility = 'visible'
        money-=5
        money_text.innerHTML = money;
    }

  // either use a map or array to store the brought items
}

//      store model end

//      Farm start

var farm = document.getElementById('farm');
farm.addEventListener('click' , collect_food);
var farm_grown = false;
var food = false;

function growing_time()//     funktion for the timeouts
{
    setTimeout(grow_done, 10000);
    setTimeout(grow_33, 3300);
    setTimeout(grow_66, 6600)
}

//      after a time the farm changes to another img/growing time
function grow_33()
{
    farm.src ="/assets/imgs/plantV2many.png";
}

function grow_66() 
{
    farm.src ="/assets/imgs/plantV3many.png";
}

function grow_done()
{
    farm_grown = true;
    console.log( farm_grown );
    farm.src = "/assets/imgs/plant-finish.png"
}



//      for when the food has grown and player clicks and stores the food
function collect_food()
{

    if(farm_grown == true && food == false)
    {
        food = true;
        farm_grown = false;
        console.log( 'food collected?',food );
        farm.src ="/assets/imgs/plantV2many.png";
        growing_time();

    }

    else if(farm_grown == false)
    {
        console.log( 'farm ready to be harvested?' , farm_grown );
    }

}

//      Farm end


//      Capybara start

var Capybara = document.getElementById('capybara');
Capybara.addEventListener('click', capy_interact);

function capy_interact()
{
    Capybara.src="/assets/imgs/capybara-sit.png";
    setTimeout(capychange_og, 5000);
}
 
function capychange_og()
{
    Capybara.src="/assets/imgs/capybbara.png";
}  

//      Capybara end



//      Plate start

var food_in_plate = false;
var plate = document.getElementById('plate');
plate.addEventListener('click', put_food);

function put_food() //about putting the food in the plate
{

    if( food == true && food_in_plate == false )
    {
        plate.src="";
        food_in_plate = true;
        food = false;
        setTimeout( food_eaten, 3500 ); //after 10 sec play food_eaten
    }

}

function food_eaten() 
{
    plate.src="/assets/imgs/plate.png";
    money++ ;
    console.log( "hej " + money );
    money_text.innerHTML = money;
    sessionStorage.setItem('money_number', money);
    food_in_plate = false;
}

//      Plate end
