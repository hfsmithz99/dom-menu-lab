// Menu data structure
const menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
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
const topMenuEl = document.getElementById('top-menu')

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

//task 4
const subMenuEl = document.getElementById('sub-menu');

//task 4.1
subMenuEl.style.height = '100%'

//task 4.2
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';

//task 4.3
subMenuEl.classList.add('flex-around')

//task 4.4
subMenuEl.style.position = 'absolute';

//task 4.5
subMenuEl.style.top = '0';

//task 5
//check the top!

//task 5.1
let topMenuLinks = document.querySelectorAll('a')
let showingSubMenu = false;

//task 5.2
topMenuEl.addEventListener('click', function(event){
    event.preventDefault();
    const point = event.target;
    if(point.tagName !== 'A'){
    return;
    };
    console.log(point.textContent);
    //5.3
    if(point.classList.contains('active')){
        point.classList.remove('active');
        showingSubMenu = false;
        subMenuEl.style.top = '0';
        return;
    }
    //5.4
    topMenuLinks.forEach(function(classLink){
        classLink.classList.remove('active');
    })
    //5.5
    point.classList.add('active');
    //5.6
    const dataLink = menuLinks.find(function(linkToObj){
      return linkToObj.text === point.textContent;
    })
    showingSubMenu = 'subLinks' in dataLink;
    //5.7

  if (showingSubMenu){
    buildSubMenu (dataLink.subLinks);
    subMenuEl.style.top = '100%';
  } else {
    subMenuEl.style.top = '0%';
    mainEl.innerHTML = '<h1>about</h1>';
  }
})
//task 5.3
//this can be seen in the function for 5.2

//task 5.4
//this can be seen in the function for 5.2

//task 5.5
//this can be seen in the function for 5.2

//task 5.6
//this can be seen in the function for 5.2

//task 5.7
//this can be seen in the function for 5.2

//task 5.8
function buildSubMenu(subLinks){
  subMenuEl.innerHTML = "";
  subLinks.forEach(function(link){
    const elLink = document.createElement('a');
    elLink.setAttribute('href', link.href);
    elLink.textContent = link.text;
    subMenuEl.appendChild(elLink);
  })
}

//task 6
subMenuEl.addEventListener('click', function(event){
  event.preventDefault();
  const link = event.target;
  if(link.tagName !== 'A') return;
  console.log(link.textContent);

  showingSubMenu = false;
  subMenuEl.style.top = '0';

  topMenuLinks.forEach(function(link){
    link.classList.remove('active');

  });

  mainEl.innerHTML = `<h1>${link.textContent}</h1>`
})

//task 6.1
//this task can be seen in task 6

//task 6.2
//this task can be seen in task 6

//task 6.3
//this task can be seen in task 6
//testing
//console.log("ALL BELOW HERE IS TESTING =======================================")
