export function loadMenu() {
    const content = document.querySelector('.content');

    
    const main = document.createElement('main');
    const menuWrapper = document.createElement('div');
    menuWrapper.classList.add('menu-wrapper');

    const itemOne = document.createElement('div');
    itemOne.classList.add('item');
    const imgOne = document.createElement('div');
    imgOne.classList.add('img');
    imgOne.innerHTML = `<img src="images/cake.jpg" alt="Cake">`;
    const descOne = document.createElement('div');
    descOne.classList.add('desc');
    descOne.innerHTML = `<h3>Christmass cake</h3>
    <p>A soft and sweet cake with a tiny bit of cinnamon</p>
    <p>2$</p>`;
    itemOne.appendChild(imgOne);
    itemOne.appendChild(descOne);
    menuWrapper.appendChild(itemOne);

    const itemTwo = document.createElement('div');
    itemTwo.classList.add('item');
    const imgTwo = document.createElement('div');
    imgTwo.classList.add('img');
    imgTwo.innerHTML = `<img src="images/cherry-cocktail.jpg" alt="Cherry cocktail">`;
    const descTwo = document.createElement('div');
    descTwo.classList.add('desc');
    descTwo.innerHTML = `<h3>Cherry cocktail</h3>
    <p>Fresh cherry drink with a bit of grapefruit and strawberry</p>
    <p>1.30$</p>`;
    itemTwo.appendChild(imgTwo);
    itemTwo.appendChild(descTwo);
    menuWrapper.appendChild(itemTwo);

    const itemThree = document.createElement('div');
    itemThree.classList.add('item');
    const imgThree = document.createElement('div');
    imgThree.classList.add('img');
    imgThree.innerHTML = `<img src="images/croissant-sandwich.jpg" alt="Croissant sandwich">`;
    const descThree = document.createElement('div');
    descThree.classList.add('desc');
    descThree.innerHTML = `<h3>Croissant sandwich</h3>
    <p>Tasty croissant with a small bowl of cheese</p>
    <p>2.50$</p>`;
    itemThree.appendChild(imgThree);
    itemThree.appendChild(descThree);
    menuWrapper.appendChild(itemThree);

    const itemFour = document.createElement('div');
    itemFour.classList.add('item');
    const imgFour = document.createElement('div');
    imgFour.classList.add('img');
    imgFour.innerHTML = `<img src="images/white-wine.jpg" alt="White wine">`;
    const descFour = document.createElement('div');
    descFour.classList.add('desc');
    descFour.innerHTML = `<h3>White wine</h3>
    <p>Homemade white wine with dried apples</p>
    <p>1.50$</p>`;
    itemFour.appendChild(imgFour);
    itemFour.appendChild(descFour);
    menuWrapper.appendChild(itemFour);

    const itemFive = document.createElement('div');
    itemFive.classList.add('item');
    const imgFive = document.createElement('div');
    imgFive.classList.add('img');
    imgFive.innerHTML = `<img src="images/pizza.jpg" alt="Pizza">`;
    const descFive = document.createElement('div');
    descFive.classList.add('desc');
    descFive.innerHTML = `<h3>Pizza</h3>
    <p>Pizza with any ingridients you wish</p>
    <p>3$</p>`;
    itemFive.appendChild(imgFive);
    itemFive.appendChild(descFive);
    menuWrapper.appendChild(itemFive);

    const itemSix = document.createElement('div');
    itemSix.classList.add('item');
    const imgSix = document.createElement('div');
    imgSix.classList.add('img');
    imgSix.innerHTML = `<img src="images/mojito.jpg" alt="Mojito">`;
    const descSix = document.createElement('div');
    descSix.classList.add('desc');
    descSix.innerHTML = `<h3>Mojito</h3>
    <p>Cold and refreshing mojito</p>
    <p>2$</p>`;
    itemSix.appendChild(imgSix);
    itemSix.appendChild(descSix);
    menuWrapper.appendChild(itemSix);

    main.appendChild(menuWrapper);

    content.appendChild(main);
}