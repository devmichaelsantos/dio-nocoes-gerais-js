//retornar nome dos membros de um map que tem o papel 'ADMIN' no sistema//

function getAdmins(map) {
    let admins = [];
    for ([key, value] of map) {
        if (value === 'Admin') {
            admins.push(key);
        };
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Michael', 'Admin');

usuarios.set('Miguel', 'Admin');

usuarios.set('Batatinha', 'User');

usuarios.set('Ze das batatas', 'Admin');

usuarios.set('Ze das covis', 'User');


console.log(getAdmins(usuarios));