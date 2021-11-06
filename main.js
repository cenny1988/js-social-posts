/*
Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro javascript in cui:
- Creiamo il nostro array di oggetti che rappresentano ciascun post.
Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
nome autore,
foto profilo,
data,
testo del post,
immagine (non tutti i post devono avere una immagine) [quindi gestisco il caso],
numero di likes.
- Prendendo come riferimento il layout di esempio presente nell’html, stampiamo i post del nostro feed.
- Rendiamo il tasto “Mi Piace” cliccabile con incremento del counter dei likes.
Consigli del giorno:
Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=<id>)
*/

//Creiamo il nostro array di oggetti che rappresentano ciascun post.

const posts = [
    {
        "imgProfile": 'https://unsplash.it/300/300?image=15',
        "author": 'Phil Mangione',
        "date": '4 mesi fa',
        "postText": 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        "imgPost": 'https://unsplash.it/600/300?image=171',
        "likes": 80
    },
    {
        "imgProfile": 'https://picsum.photos/60?random=1',
        "author": 'Fusco Gennaro',
        "date": '4 mesi fa',
        "postText": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet eleifend orci, sit amet pretium orci. Integer non velit ut leo condimentum cursus quis quis arcu. Vestibulum porttitor a sem quis semper. Ut at metus at ex molestie rhoncus. Donec lectus nulla, fermentum eu gravida quis, iaculis ac dolor.',
        "imgPost": 'https://unsplash.it/600/300?random=1',
        "likes": 80
    },
    {
        "imgProfile": 'https://picsum.photos/60?random=2',
        "author": 'Valentina',
        "date": '6 mesi fa',
        "postText": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mauris magna, venenatis in sollicitudin eget, laoreet in nunc. Cras orci diam, tincidunt vitae neque suscipit, fermentum tincidunt lectus. Nulla a lectus in leo aliquam sodales. Mauris nec nibh vitae risus vulputate tempus pretium vitae enim. Aliquam sit amet viverra neque.',
        "imgPost": 'https://unsplash.it/600/300?random=2',
        "likes": 24
    },
    {
        "imgProfile": 'https://picsum.photos/60?random=3',
        "author": 'Marco',
        "date": '1 mesi fa',
        "postText": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur purus enim, volutpat in metus at, viverra cursus neque. Sed vel justo sed nibh pellentesque congue. Praesent imperdiet tellus quis dui facilisis vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        "imgPost": '',//https://unsplash.it/600/300?random=3
        "likes": 55
    }
];


const containerPosts = document.getElementById('container');
addNewPost();


//aggiungiamo evento al button like
//riferimenti ai BTN --> creamo un array con tutti i buttons che hanno la classe 'like-button js-like-button'
const buttons = document.getElementsByClassName('like-button js-like-button');
const bCounters = document.getElementsByClassName('js-likes-counter');

for (i=0; i<buttons.length; i++){
    buttons[i].addEventListener('click',
    function(){
        const index = this.getAttribute('data-postid');// copia in index valore id btn
        console.log('bold: ', bCounters[index].innerHTML);// contenuto di bold(likes)dello stesso post
        console.log('data-postid: ', index);

        posts[index].likes++;// incremento i likes del rispetivo post
        console.log(posts[index].likes);

        document.getElementById('container').innerHTML = '';   
        addNewPost();        
        }
    );
}

//funzioni
function addNewPost(){
    let newPost = '';
    //creamo un for lungo come tutti i posts così da inserirli tutti nella pagina!
    for (i=0; i<posts.length; i++){
        //creamo un nuovo div e aggiungiamo la classe post
        const divPost = document.createElement('div');
        divPost.classList.add('post');
        
        //creo un obj e lo destrutturo così da poter copiare i valori delle prop in newPost!
        const {imgProfile, author, date, postText, imgPost, likes} = posts[i];
        
        //poi al suo interno tramite innerHTML copiamo tutta la struttura
        newPost = `
                    <div class="post__header">
                        <div class="post-meta">                    
                            <div class="post-meta__icon">
                                <img class="profile-pic" src="${imgProfile}" alt="${author}">                    
                            </div>
                            <div class="post-meta__data">
                                <div class="post-meta__author">${author}</div>
                                <div class="post-meta__time">${date}</div>
                            </div>                    
                        </div>
                    </div>
                    <div class="post__text">${postText}</div>
                    <div class="post__image">
                        <img src="${imgPost}" alt="">
                    </div>
                    <div class="post__footer">
                        <div class="likes js-likes">
                            <div class="likes__cta">
                                <a class="like-button  js-like-button" href="#" data-postid="${i}">
                                    <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                                    <span class="like-button__label">Mi Piace</span>
                                </a>
                            </div>
                            <div class="likes__counter">
                                Piace a <b id="like-counter-${i}" class="js-likes-counter">${likes}</b> persone
                            </div>
                        </div> 
                    </div>            
        `;
        // infine copiamo il contenuto nella pagina
        divPost.innerHTML = newPost;
        containerPosts.append(divPost);
    }
}