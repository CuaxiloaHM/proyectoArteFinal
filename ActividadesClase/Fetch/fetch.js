
const juegosD = document.querySelector('#juegos');

fetch('/datos.json')
    .then( (res) => res.json())
    .then( (data) => {
        data.forEach((juegos) => {
            const li = document.createElement('li')
            li.innerHTML = `
                <p>Juego: ${juegos.juego}</p>
                <p>Lanzamiento: ${juegos.lanzamiento}</p>
                <p>Logros: ${juegos.logros}</p>
                <hr/>`
            juegosD.append(li)
        });
    })



const listado = document.querySelector('#usuario');

fetch('https://jsonplaceholder.typicode.com/users')
    .then( (res) => res.json())
    .then( (data) => {
        data.forEach((cliente) => {
            const li = document.createElement('li')
            li.innerHTML = `
                <p>ID: ${cliente.id}</p>
                <p>Nombre: ${cliente.name}</p>
                <p>Username: ${cliente.username}</p>
                <p>Email: ${cliente.email}</p>
                <hr/>
            `
            listado.append(li)
        });
    })

