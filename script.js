let whatsapp = document.querySelector('.whatsapp');
whatsapp.addEventListener('click',function(){
    window.open(
        'https://api.whatsapp.com/send/?phone=%2B917830496527&text=I want to order something&app_absent=0',
        '_blank'
      );
})
let menu = document.querySelectorAll('li');
let btn = document.querySelectorAll('.cat');
let rolls = document.querySelector("#rolls");
let noodles = document.querySelector("#noodles");
let cake = document.querySelector("#cake");
let snacks = document.querySelector("#snacks");
let platter = document.querySelector("#platter");
let logo = document.querySelector('.brand');
let section = ["#about","#menus","#reviews","#contact"];

let order = document.querySelector("#order");

let explore = document.querySelector('#explore');

explore.addEventListener('click',function()
{
    location.href = "#menus";
})
order.addEventListener('click',function()
{
    location.href = "#menus";
})


logo.addEventListener('click',function(){
    location.href = "index.html";
})


for(let k=0; k<menu.length; k++)
{
    menu[k].addEventListener('click',function()
    {
        location.href = section[k];
    })
}

let slide = [rolls,noodles,cake,snacks,platter];
console.log(slide);

for(let i=0; i<btn.length; i++)
{
    btn[i].addEventListener('click',function(){
        btn[i].style.backgroundColor = "#f3bc59";
        slide[i].classList.remove("hidden");
        for(let j=0; j<btn.length; j++)
        {
            if(j!=i)
            {
                btn[j].style.background = "transparent";
                slide[j].classList.add("hidden");
            }
        }
    })
}





let ham = document.querySelector('.hamburger');
let mob = document.querySelector('.mobile-menu');
let d = 0;
ham.addEventListener('click',function(){
    if(d==0){
        mob.classList.remove("hidden");
        d++;
    }
   else{
        mob.classList.add("hidden");
        d--;
   }
})