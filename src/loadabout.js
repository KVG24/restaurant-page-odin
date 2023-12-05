export function loadAbout() {
    const content = document.querySelector('.content');

    
    const main = document.createElement('main');
    const about = document.createElement('div');
    about.classList.add('about');
    
    // Schedule table

    const schedule = document.createElement('div');
    schedule.classList.add('chedule');
    const table = document.createElement('table');
    
    const monday = document.createElement('tr');
    monday.innerHTML = `<td>Moday</td><td>8:00 - 20:00</td>`
    table.appendChild(monday);
    const tuesday = document.createElement('tr');
    tuesday.innerHTML = `<td>Monday</td><td>8:00 - 20:00</td>`
    table.appendChild(tuesday);
    const wednesday = document.createElement('tr');
    wednesday.innerHTML = `<td>Wednesday</td><td>8:00 - 19:00</td>`
    table.appendChild(wednesday);
    const thursday = document.createElement('tr');
    thursday.innerHTML = `<td>Thursday</td><td>8:00 - 20:00</td>`
    table.appendChild(thursday);
    const friday = document.createElement('tr');
    friday.innerHTML = `<td>Friday</td><td>10:00 - 23:00</td>`
    table.appendChild(friday);
    const saturday = document.createElement('tr');
    saturday.innerHTML = `<td>Saturday</td><td>10:00 - 23:00</td>`
    table.appendChild(saturday);
    const sunday = document.createElement('tr');
    sunday.innerHTML = `<td>Sunday</td><td>12:00 - 18:00</td>`
    table.appendChild(sunday);

    schedule.appendChild(table);

    // Text
    
    const aboutText = document.createElement('div');
    aboutText.classList.add('about-text');
    
    const header = document.createElement('h2');
    header.textContent = 'Come see us';
    aboutText.appendChild(header);
    
    const adress = document.createElement('div');
    adress.classList.add('adress');
    adress.innerHTML = '<p>Hogsmeade, Station Street 4. Tel. 888-555-666</p>';
    aboutText.appendChild(adress);
    const brOne = document.createElement('br');
    aboutText.appendChild(brOne);
    
    const paraOne = document.createElement('p');
    paraOne.textContent = `We are a team of enthusiasts dedicated to creating unforgettable moments filled with taste and satisfaction. At our establishment, you'll discover refined dishes crafted from the freshest ingredients, along with an atmosphere of warmth and hospitality.`
    aboutText.appendChild(paraOne);
    const brTwo = document.createElement('br');
    aboutText.appendChild(brTwo);

    const paraTwo = document.createElement('p');
    paraTwo.textContent = `Our goal is not only to satiate your taste buds but also to curate a special evening where flavor and ambiance intertwine in a unique dance. Our chefs skillfully master the art of cooking, and our team's service will leave you with delightful impressions.`
    aboutText.appendChild(paraTwo);
    const brThree = document.createElement('br');
    aboutText.appendChild(brThree);

    const paraThree = document.createElement('p');
    paraThree.textContent = `We believe that food brings people together, and here in our restaurant, we aim to create shared moments of joy, laughter, and indulgence. Come join us, and let us treat you to the finest flavors!`
    aboutText.appendChild(paraThree);

    // Image

    const aboutImage = document.createElement('div');
    aboutImage.classList.add('about-image');
    aboutImage.innerHTML = `<img src="images/staff.jpg" alt="Staff">`


    about.appendChild(schedule);
    about.appendChild(aboutText);

    main.appendChild(about);
    
    main.appendChild(aboutImage);


    content.appendChild(main);
}