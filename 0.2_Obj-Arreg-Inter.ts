//Arreglos 
let habilidades: string [] = ['bash', 'counter', 'healing']

//Intefaces 
interface Personaje{
    nombre : string ;
    hp : number;
    habilidades : string [];
    puebloNatal : string;
}

// Objetos 
const personaje: Personaje = {
    nombre: 'Strider',
    hp: 100,
    habilidades: ['bash', 'counter', 'healting'],
    puebloNatal: ""
}

console.table( personaje );