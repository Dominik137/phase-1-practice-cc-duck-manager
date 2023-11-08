fetch('http://localhost:3000/ducks')
.then((resp) => resp.json())
.then((ducks) =>{
    displayDuckInfo(ducks[0])
    ducks.forEach(duck =>{
        displayDucks(duck)
    })
    
})


function displayDucks(duck){
    const div = document.querySelector('#duck-nav')
    const duckImg = document.createElement('img')
    duckImg.src = duck.img_url
    div.append(duckImg)
    
        duckImg.addEventListener('click', (e) =>{
            e.preventDefault()
            displayDuckInfo(duck)        
        })
}

function displayDuckInfo(duck){
    const duckName = document.querySelector('#duck-display-name')
    const duckDisplayImg = document.querySelector('#duck-display-image')
    const duckLikes = document.querySelector('#duck-display-likes')

    duckName.textContent = duck.name
    duckDisplayImg.src = duck.img_url
    duckLikes.textContent = `${duck.likes} likes`
//like button
    let button = document.querySelector('#duck-display-likes')
    let count = duck.likes;
    button.addEventListener('click', (e)=>{
        e.preventDefault()
        count++;
        button.innerText = `${count} likes`
    })
}


  const newDuckForm = document.querySelector('#new-duck-form')  
    newDuckForm.addEventListener('submit', (e) =>{
        e.preventDefault()
        const NewDuck = {
        name : e.target[`duck-name-input`].value,
        img_url : e.target[`duck-image-input`].value,
        likes : 0
        }

        displayDucks(NewDuck)
    })

