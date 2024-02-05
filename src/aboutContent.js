function aboutContent() {
    //create container div
    const about = document.createElement('div')
    about.classList.add('about');

    //add content 
    about.appendChild(document.createElement('p'));
    about.lastChild.innerHTML = 'Who we are:'
    about.appendChild(document.createElement('p'));
    about.lastChild.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque doloremque ut, harum rem voluptates provident repellat exercitationem amet soluta sed doloribus modi cupiditate eius nemo voluptatibus explicabo eveniet animi. Deleniti ipsa exercitationem praesentium rerum vitae fugiat ab adipisci ea optio, nesciunt voluptatem nemo unde assumenda earum provident ex? Vero porro veniam labore eveniet! Totam tempore dolore iste. Voluptas blanditiis numquam, atque sint culpa neque tenetur. Adipisci rem pariatur, ad unde voluptate dolor praesentium itaque voluptatum eaque? Distinctio iste aspernatur explicabo nulla dignissimos soluta aliquid vero perferendis eum fugiat, magni consequuntur ratione amet nesciunt, odit dolore assumenda similique culpa ut iusto!'
    
    return about
}

export default aboutContent