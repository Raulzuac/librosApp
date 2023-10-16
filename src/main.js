let controllerLibros = angular.module("librosApp", []);

let librosCargar;

async function cargaLibros() {
    librosCargar = await JSON.parse(await fetch('/data/libros.json').then(res => res.text()).then(content => libros = content))

    return librosCargar;
}


controllerLibros.controller('librosController', async function ($scope) {
    // $scope.libros = libros
    $scope.libros=[
        {
            "id": "1",
            "titulo": "El Juego de Ender",
            "autor": "Orson Scott Card",
            "editorial": "Ediciones B / Zeta",
            "descripcion": "La Tierra está amenazada por una especie extraterrestre de insectos que pretende destruir la humanidad. Para vencerlos se precisa la intervención de un genio militar, por lo cual se permite el nacimiento de Ender, tercer hijo de una pareja en un mundo que limita a dos el número de descendientes. Ender se entrenará en una estación espacial, superará a sus rivales y se convertirá en la persona capaz de dirigir las flotas terrestres contra los insectos de otros mundos.",
            "img": "../assets/el-juego-de-ender.webp"
        },
        {
            "id": "2",
            "titulo": "Juego de tronos",
            "autor": "George R. R. Martin",
            "editorial": "Gigamesh",
            "descripcion": "Tras el largo verano, el invierno se acerca a los Siete Reinos. Lord Eddard Stark, señor de Invernalia, deja sus dominios para unirse a la corte de su amigo el rey Robert Baratheon, llamado el Usurpador, hombre díscolo y otrora guerrero audaz cuyas mayores aficiones son comer, beber y engendrar bastardos. Eddard Stark ocupará el cargo de Mano del Rey e intentará desentrañar una maraña de intrigas que pondrá en peligro su vida y la de todos los suyos. En un mundo cuyas estaciones pueden durar decenios y en el que retazos de una magia inmemorial y olvidada surgen en los rincones más sombríos y maravillosos, la traición y la lealtad, la compasión y la sed de venganza, el amor y el poder hacen del juego de tronos una poderosa trampa que atrapará en sus fauces a los personajes... y al lector.",
            "img": "../assets/juego_de_tronos.jpg"
        },
        {
            "id": "3",
            "titulo": "I robot",
            "autor": "Isaac Asimov",
            "editorial": "Edhasa",
            "descripcion": "Los robots de Isaac Asimov son máquinas capaces de llevar a cabo muy diversas tareas, y que a menudo se plantean a sí mismos problemas de 'conducta humana'. Pero estas cuestiones se resuelven en Yo, robot en el ámbito de las tres leyes fundamentales de la robótica, concebidas por Asimov, y que no dejan de proponer extraordinarias paradojas que a veces se explican por errores de funcionamiento y otras por la creciente complejidad de los 'programas'. Las paradojas que se plantean en estos relatos futuristas no son sólo ingeniosos ejercicios intelectuales sino sobre todo una indagación sobre la situación del hombre actual en relación con los avances tecnológicos y con la experiencia del tiempo."
            ,"img": "../assets/yorobot.jpg"
        }
    ]
});