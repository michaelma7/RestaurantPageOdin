function menuContent () {
    //create container div
    const menu = document.createElement('div')
    menu.classList.add('menu');

    //add content
    menu.appendChild(document.createElement('div'));
    menu.lastChild.classList.add('item');
    menu.lastChild.appendChild(document.createElement('p'));
    menu.lastChild.lastChild.innerHTML = 'Magma Muffin'
    menu.lastChild.appendChild(document.createElement('p'));
    menu.lastChild.lastChild.innerHTML = '$3.14'

    menu.appendChild(document.createElement('div'));
    menu.lastChild.classList.add('item');
    menu.lastChild.appendChild(document.createElement('p'));
    menu.lastChild.lastChild.innerHTML = 'Volcanic Muffin'
    menu.lastChild.appendChild(document.createElement('p'));
    menu.lastChild.lastChild.innerHTML = '$4.20'

    menu.appendChild(document.createElement('div'));
    menu.lastChild.classList.add('item');
    menu.lastChild.appendChild(document.createElement('p'));
    menu.lastChild.lastChild.innerHTML = 'Bounty Muffin'
    menu.lastChild.appendChild(document.createElement('p'));
    menu.lastChild.lastChild.innerHTML = '$2.00'

    return menu
}

export default menuContent