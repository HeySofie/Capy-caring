var house = document.getElementById('house');
var shop = document.getElementById('shop_model');
var exit_button = document.getElementById('exit_button');
var hottub_item = document.getElementById('hottub_item');
var hottub = document.getElementById('hottub');
var hottub_item_text = document.getElementById('hottub_item_text');

var owned_uppgrades = {
    hottub: false,

};

//var stored_hottub = sessionStorage.getItem('hottub_owned');
// create a objet where u define if the uppgrade is owned or not, and then save the object with a key "stored_objects" that u then 
//question, can i change a value inside a object?? if not then the comment above wont work

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
    if(parseFloat(money) < 5 || owned_uppgrades.includes("hottub") == true)
    {
        hottub_item_text.innerHTML = "cant buy";
    }

    else
    {
        hottub.style.visibility = 'visible';
        money-=5;
        money_text.innerHTML = money;
        owned_uppgrades['hottub'] = true;
        // sessionstorage("välj din egen nyckel", "namnet på item")
    }

  // either use a map or array to store the brought items
}