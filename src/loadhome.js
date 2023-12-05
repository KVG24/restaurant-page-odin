export function loadHome() {
    const content = document.querySelector('.content');

    
    const main = document.createElement('main');
    const container = document.createElement('div');
    container.classList.add('container');
    main.appendChild(container);
    content.appendChild(main);
    
    const welcome = document.createElement('div');
    welcome.classList.add('welcome');
    const h1 = document.createElement('h1');
    h1.textContent = 'Welcome to Thick Potato';
    welcome.appendChild(h1);
    container.appendChild(welcome);

    const text = document.createElement('div');
    text.classList.add('text');
    
    const divOne = document.createElement('div');
    const textHeaderOne = document.createElement('h2');
    const textOne = document.createElement('p');
    textHeaderOne.textContent = 'Thick Potato – Where Culinary Excellence Meets Unforgettable Moments!';
    textOne.textContent = `Step into a world of gastronomic delight at Thick Potato, where every dish tells a story and every bite is a journey through flavors. Nestled in the heart of Hogsmeade, our restaurant is more than just a dining destination; it's an experience crafted with passion, creativity, and a commitment to excellence.`
    divOne.appendChild(textHeaderOne);
    divOne.appendChild(textOne);
    
    const divTwo = document.createElement('div');
    const textHeaderTwo = document.createElement('h2');
    const textTwo = document.createElement('p');
    textHeaderTwo.textContent = 'A Dining Experience Like No Other';
    textTwo.textContent = `At Thick Potato, we believe that dining is not just about the food; it's about creating memories. Our inviting ambiance, attentive staff, and warm hospitality set the stage for unforgettable moments. Whether you're celebrating a special occasion, hosting a business lunch, or enjoying a casual meal with friends, our restaurant provides the perfect backdrop for every occasion.`
    divTwo.appendChild(textHeaderTwo);
    divTwo.appendChild(textTwo);
    
    const divThree = document.createElement('div');
    const textHeaderThree = document.createElement('h2');
    const textThree = document.createElement('p');
    const textEnd = document.createElement('p');
    textHeaderThree.textContent = 'Your Culinary Adventure Begins Here!';
    textThree.textContent = `Embark on a gastronomic journey like no other. Whether you're a food aficionado, a casual diner, or someone seeking a memorable experience, we invite you to savor the extraordinary at Thick Potato.`
    textEnd.textContent = `Reserve your table now and let the feast begin! 🍾✨`;
    divThree.appendChild(textHeaderThree);
    divThree.appendChild(textThree);
    divThree.appendChild(textEnd);

    text.appendChild(divOne);
    text.appendChild(divTwo);
    text.appendChild(divThree);
    container.appendChild(text);
    
    // Footer

    const footer = document.createElement('footer');
    const footerDivOne = document.createElement('div');
    const footerDivTwo = document.createElement('div');
    
    const firstP = document.createElement('p');
    firstP.innerHTML = `Page created by <a href="https://github.com/KVG24">KVG24</a>`;
    const secondP = document.createElement('p');
    secondP.innerHTML = `Photo by <a href="https://unsplash.com/@nickkarvounis?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Nick Karvounis</a> on <a href="https://unsplash.com/photos/rectangular-beige-wooden-tables-and-chair-Ciqxn7FE4vE?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>`;
    footerDivOne.appendChild(firstP);
    footerDivTwo.appendChild(secondP);
    footer.appendChild(footerDivOne);
    footer.appendChild(footerDivTwo);

    content.appendChild(footer);
};