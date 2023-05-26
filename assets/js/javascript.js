var coins = 0;// sets the start coins in the begining
var coins_text = document.getElementById('coins_number');
var stored_coins = sessionStorage.getItem('coins_number'); // this dosent make sense, the key is a elements id??
var start_button = document.getElementById('start_button');
var model = document.getElementById('model');
var Capybara = document.getElementById('capybara');

start_button.addEventListener('click', start_game);
Capybara.addEventListener('click', capy_interact);

//obj_div_p.innerHtml = obj.name;
//obj_div_img.src = obj.iconSrc;
//coins_text.innerHTML -= obj.price;

if(stored_coins)
{
    coins = stored_coins;
    console.log("redan finns " + stored_coins);
}
else 
{
    console.log("couldn't find!");
}

function start_game() // once u press the button make the model not visible
{
    growing_time();
    model.style.visibility = 'collapse';
    coins_text.innerHTML = coins;
}
/*function fibo(x,y)
{
    sum = x + y;
    return fibo(y, sum);

}
*/
function capy_interact()
{
    Capybara.src="/assets/imgs/capybara-sit.png";
    setTimeout(capychange_og, 5000);
}
 
function capychange_og()
{
    Capybara.src="/assets/imgs/capybbara.png";
}  