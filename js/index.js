const val = document.getElementById('val')
const form = document.querySelector('form')
const listMsg = document.querySelector('.list-msg')
let lis = listMsg.getElementsByTagName('li')

const profileInfoName = document.querySelector('.profile-info p')
profileInfoName.textContent = 'Johnny'


let friendsM = getItem()


function getItem() {
    let getMessages = localStorage.getItem('dides')
    getMessages = JSON.parse(getMessages)

    return getMessages ? getMessages : [
        {
            name: 'Joh',
            message: 'Hello everyone!',
            age: 24
        },
        {
            name: 'Mary',
            message: 'Hi friends, wassup',
            age: 45
        },
        {
            name: 'Johnny',
            message: 'Hey everything is fine',
            age: 34
        },
        {
            name: 'Silv',
            message: 'whats the plan for today?',
            age: 55
        },
    ]
}



function setItem() {
    localStorage.setItem('dides', JSON.stringify(friendsM))
}

function genereteM(obj) {
    const li = document.createElement('li')
    const btnProfile = document.createElement('button')
    btnProfile.classList.add('btnProfile')

    li.appendChild(btnProfile)

    const pName = document.createElement('p')
    pName.classList.add('pName')
    pName.textContent = obj.name

    const p = document.createElement('p')
    p.classList.add('messages')
    p.textContent = obj.message

    const div = document.createElement('div')
    div.classList.add('pMessages')

    div.appendChild(pName)
    div.appendChild(p)


    const btn = document.createElement('button')
    btn.classList.add('btnExclude')

    const divDelete = document.createElement('div')
    divDelete.appendChild(btn)
    divDelete.classList.add('box-delete')
    const iDelete = document.createElement('i')
    iDelete.className = 'fas fa-trash'

    const iEdit = document.createElement('i')
    iEdit.className = 'fas fa-edit'

    btn.appendChild(iEdit)
    btn.appendChild(iDelete)
    div.appendChild(divDelete)

    li.appendChild(div)


    return li
}


function render() {
    listMsg.innerHTML = ''
    friendsM.forEach(friends => {
        listMsg.appendChild(genereteM(friends))
    })
    getItem()
}


function send(typing){
    friendsM.push({
            name: 'Johnny',
            message: typing,
            age: 34
        })
   setItem()
}


function ulEvent(e) {
    let current = e.target
    let li = current

    while(li.nodeName !== 'LI'){
        li = li.parentElement
    }

    let currentIndex = [...lis].indexOf(li)
    
    if(current.className === 'fas fa-trash') {
        friendsM.splice(currentIndex, 1)
        render()
        setItem()
    } else if (current.className === 'fas fa-edit') {
        const editBox = document.createElement('div')
        editBox.classList.add('edit')

        const editInput = document.createElement('input')
        editInput.classList.add('editMessage')

        editBox.appendChild(editInput)

        const editButton = document.createElement('button')
        editButton.classList.add("edit-btn")
        editButton.textContent = 'Edit'
        editButton.addEventListener('click', function(){
           const pM = li.querySelector('.editMessage').value
           friendsM[currentIndex].message = pM
           render()
           setItem()
        })

        editBox.appendChild(editButton)

        const cancel = document.createElement('button')
        cancel.classList.add('cancel-btn')
        cancel.textContent = 'Cancel'

        editBox.appendChild(cancel)
        cancel.addEventListener('click', function(){ editBox.remove()})
        const div = li.querySelector('.pMessages')

        div.appendChild(editBox)
    }
}


form.addEventListener('submit', function(e){
    e.preventDefault()

    if(!val.value){
        return
    } else {
        send(val.value)
    }
    render()

    val.value = ''
    val.focus()
})


listMsg.addEventListener('click', ulEvent)

render()