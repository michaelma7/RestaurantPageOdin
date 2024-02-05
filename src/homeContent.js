import carasoul from './carasoulModule';

function homeContent () {
    //create container div
    const home = document.createElement('div');
    home.classList.add('homepage');

    //import carasoul div from module
    const carasoulDiv = carasoul();
    //create child divs
    const reviews = document.createElement('div');
    reviews.classList.add('reviews');
    const hours = document.createElement('div');
    hours.classList.add('hours');
    const location = document.createElement('div');
    location.classList.add('location');

    //add content to divs
    reviews.appendChild(document.createElement('p'));
    reviews.lastChild.classList.add('statement');
    reviews.lastChild.innerHTML = 'I love these muffins! They are always fresh and magma hot!'
    reviews.appendChild(document.createElement('p'));
    reviews.lastChild.classList.add('reviewer');
    reviews.lastChild.innerHTML = '-woahbuddy';

    hours.appendChild(document.createElement('div'));
    hours.lastChild.classList.add('weekdays');
    hours.lastChild.appendChild(document.createElement('p'));
    hours.lastChild.lastChild.innerHTML = 'Mon-Fri';
    hours.lastChild.appendChild(document.createElement('p'));
    hours.lastChild.lastChild.innerHTML = '7 a.m - 4 p.m';

    hours.appendChild(document.createElement('div'));
    hours.lastChild.classList.add('weekends');
    hours.lastChild.appendChild(document.createElement('p'));
    hours.lastChild.lastChild.innerHTML = 'Saturday and Sunday';
    hours.lastChild.appendChild(document.createElement('p'));
    hours.lastChild.lastChild.innerHTML = '9 a.m - 3 p.m';

    location.appendChild(document.createElement('p'));
    location.lastChild.innerHTML = 'Find us at:';
    location.appendChild(document.createElement('p'));
    location.lastChild.innerHTML = '175 5th Ave, New York, NY 10010';
    

    //append divs
    home.appendChild(carasoulDiv);
    home.appendChild(reviews);
    home.appendChild(hours);
    home.appendChild(location);

    return home
}

export default homeContent;