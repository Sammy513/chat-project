const ul = document.querySelector('.users')


let friends = [
    {
        name: 'Johnny',
        age: 34
    },
    {
        name: 'Joh',
        age: 24
    },
    {
        name: 'Mary',
        age: 45
    },
    {
        name: 'Silv',
        age: 55
    },
    {
        name: 'Johnny',
        age: 34
    },
    {
        name: 'Joh',
        age: 24
    },
    {
        name: 'Mary',
        age: 45
    },
    {
        name: 'Silv',
        age: 55
    },{
        name: 'Johnny',
        age: 34
    },
    {
        name: 'Joh',
        age: 24
    },
    {
        name: 'Mary',
        age: 45
    },
    {
        name: 'Silv',
        age: 55
    },{
        name: 'Johnny',
        age: 34
    },
    {
        name: 'Joh',
        age: 24
    },
    {
        name: 'Mary',
        age: 45
    },
    {
        name: 'Silv',
        age: 55
    }
]

const html = friends.map( friend => `

     <li>
        <button></button>
        <p>${friend.name}</p>
     </li>
 `).join('')

 ul.innerHTML = html