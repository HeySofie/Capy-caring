var house = document.getElementById('house');
var shop = document.getElementById('shop_model');
var exit_button = document.getElementById('exit_button');
var hottub_item = document.getElementById('hottub_item');
var hottub = document.getElementById('hottub');
var hottub_item_text = document.getElementById('hottub_item_text');
var hottub_owned = false;
//sessionStorage.setitem('is hottub owned', JSON.stringify(hottub_owned)); // this is breaking the thing, why?????????? what do do??
//var stored_hottub = JSON.parse(sessionStorage.getItem('is hottub owned'));
house.addEventListener('click', open_shop);
exit_button.addEventListener('click', close_shop);
hottub_item.addEventListener('click', buy_hottub);


if(hottub_owned == true )
{
    hottub.style.visibility = 'visible';
}

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
    if(hottub_owned == true)
    {
        hottub_item_text.innerHTML = "cant buy";
    }

    else
    {
        coins-=1;
        coins_text.innerHTML = coins;
        hottub_owned = true;
    }

}