///  Funciones 

function sumar(a: number, b: number){
    return a + b;
}

const sumarFlecha = (a: number, b:number) =>{
    return a + b;
}
const resultado = sumar(10,20)
//////////////////////////////////////////////

function multiplicar(numero, otroNumero?, base =2): number {
    return numero * base;
} 

const resultado2 = multiplicar(10,20)
console.log(resultado);

///////////////////////////////////////////////////////////////
interface PersonajeLOR{
    nombre: string;
    pv: number;
    mostrarHp: () => void;
}
function curar(personaje: PersonajeLOR, curarX: number): void {
    personaje.pv += curarX; 
}

const nuevoPersonaje: PersonajeLOR = {
        nombre : 'keeyo',
        pv: 50,
        mostrarHp () {
            console.log('puntos de vida: ', this.pv);
        }
}

curar(nuevoPersonaje, 20); 
nuevoPersonaje.mostrarHp();
