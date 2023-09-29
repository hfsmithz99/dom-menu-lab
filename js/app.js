// Menu data structure
const menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];
  
//task 1
const mainEl = document.querySelector('main');

//task 1.1
mainEl.style.backgroundColor = 'var(--main-bg)'

//rtask 1.2
mainEl.innerHTML = '<h1>SEI Rocks!</h1>';

//task 1.3
mainEl.classList.add('flex-ctr');

//task 2
const topMenuEl = document.querySelector('nav')

//task 2.1
topMenuEl.style.height = '100%'

//task 2.2
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)'

//task 2.3
topMenuEl.classList.add('flex-around')

//task 3
//Check the top

//task 3.1
menuLinks.forEach(function(links){
    const newAEl = document.createElement('a');
    newAEl.href = links.href;
    newAEl.textContent = links.text;
    topMenuEl.append(newAEl);
})




//testing
//console.log("ALL BELOW HERE IS TESTING =======================================")
