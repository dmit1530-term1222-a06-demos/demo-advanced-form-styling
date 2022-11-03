//step 1: select the element that the user will click on to make this menu show/hide. In our case it's the toggle icon and since we are including by its classname we need to include the period. 
const clickButton = document.querySelector('.toggle');

//step 2: add a click event to the icon
clickButton.addEventListener('click', () => {
    //when that icon is clicked we are going to grab the nav element or whatever is showing/hiding and add or remove the special class we created in the css (ie. active-nav) 
    document.querySelector('body').classList.toggle('active-nav');
});
