var money = 0;// sets the start money in the begining
var money_text = document.getElementById('money_number');
var stored_money = sessionStorage.getItem('money_number');
var start_button = document.getElementById('start_button');
var model = document.getElementById('model');
var Capybara = document.getElementById('capybara');
//var obj_div_img = document.getElementById("tst");

start_button.addEventListener('click', start_game);
Capybara.addEventListener('click', capy_interact);


var obj = {
    name: 'itemone',
    iconSrc: 'images/icon.png',
    price: 10,
}

//obj_div_p.innerHtml = obj.name;
//obj_div_img.src = obj.iconSrc;
//money_text.innerHTML -= obj.price;

if(stored_money)
{
    money = stored_money;
    console.log("redan finns " + stored_money);
    // om den redan finns
}
else 
{
    console.log("couldn't find!");
}

function start_game() // once u press the button make the model not visible
{
    growing_time();
    model.style.visibility = 'collapse';
    money_text.innerHTML = money;
}

function capy_interact()
{
    Capybara.src="/assets/imgs/capybara-sit.png";
    setTimeout(capychange_og, 5000);
}
 
function capychange_og()
{
    Capybara.src="/assets/imgs/capybbara.png";
}  