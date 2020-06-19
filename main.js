const body = document.querySelector('body')
let newMain = document.createElement('main')
let newButton = document.createElement('button')
let newButton2 = document.createElement('button')
let newButton3 = document.createElement('button')
let newImg = document.createElement('img')
let newLink = document.createElement('a')
let newInput = document.createElement('input')
let newInput2 = document.createElement('input')
newInput.type = 'text'
newInput.name = 'removeBox'
newInput.id = 'removeBox'
newLink.href = 'https://www.youtube.com/'
newImg.src = 'pic.jpg'
newImg.alt = 'snek'
newButton.append("Remove Main")
newButton3.append("Add Text")
newLink.append('Youtube')
newMain.append(newImg)
newMain.append(newLink)
newButton.addEventListener('click', function(){
    document.querySelector('main').remove()
})
body.append(newButton)
body.append(newInput)
newButton2.append('Remove Element')
newButton2.addEventListener('click', function(){
    let input = document.getElementById('removeBox').value
    if (input.startsWith('.')){input = input.substring(1)}
    document.querySelector(input).remove()
})
body.append(newButton2)
newInput2.type = 'text'
newInput2.id = 'addBox'
newInput2.name = 'addBox'
body.append(newInput2)
newButton3.addEventListener('click', function(){
    let newDiv = document.createElement('div')
    newDiv.append(document.getElementById('addBox').value)
    body.append(newDiv)
})
body.append(newButton3)
body.append(newMain)
