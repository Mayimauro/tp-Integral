//1 Multiplicar números con un callback

function multiplicar(num1, num2,callback) {

    const resultado = num1 *num2
    callback(resultado)
}
multiplicar(2,2,mostrarResultado=> {console.log(mostrarResultado)} );

//punto 2 Operación con números usando callbacks
function operarNumeros(num1, num2, callback) {
    callback(num1, num2)
}

operarNumeros(2,3,(num1,num2)=>{suma = num1+num2 , console.log(suma)})
operarNumeros(2,3,(num1,num2)=>{resta = num1-num2 , console.log(resta)})

//punto 3 Uso de setTimeout con callbacks

function mostrarCallback(callback){
    setTimeout(() => {callback(callback)}, 1000);
}
mostrarCallback(callback=> console.log("Hola apareci despues de 1 segundo soy el punto 3 (re pesado mal)"))

//punto 4 Filtrar números pares con un callback

function filtrarPares(array,callback){
    return callback(array)
}

let arreglo = [1,2,3,4,5,6]

console.log("arreglo antes " +arreglo)

arreglo =  filtrarPares(arreglo,(array)=>{return array=array.filter(n => n%2 === 0)})

console.log("arreglo despues " +arreglo)

//punto 5 no hay :/

//punto 6 Crear y manipular un Set
const set = new Set()
for(let i=1; i<6; i++){
    set.add(i)
}
set.add(6)
set.delete(3)
console.log(set)

//punto 7 Convertir el Set anterior a un Array
const arreglo2 = [...set]
console.log("arreglo hecho con el set " +arreglo2)

//punto 8 Eliminar duplicados de un array usando Set
const arreglo3 = [7,7,2,3,4,4,5,5,23,23]

const set2 = new Set([...arreglo3])
console.log("arreglo: " + arreglo3 + " set hecho con arreglo: "+ [...set2])


//punto 9 Comprobar existencia del 4 en el Set
function existeNumero(num,set)
{
    return set.has(num)
}
console.log(existeNumero(4,set))

//punto 10 Iterar sobre un Set
set.forEach(num=>{console.log(num)})

//punto 11 Crear y manipular un Map
const map = new Map()
map.set("nombre","juan")
map.set("edad",30)
map.set("ciudad","Madrid")
map.delete("ciudad")
map.set("Pais","españa")
//punto 12 Acceder a valores en un Map
console.log(map.get("nombre"))
//punto 13 Iterar sobre un Map
console.log(map)
//punto 14 Comprobar existencia en un Map
function existeClave(clave,mapa)
{
    return mapa.has(clave)
}
console.log(existeClave("edad",map))
//punto 15 Convertir un Map a un Array
const arreglo4 = [...map]
console.log(arreglo4)

//punto 16 Filtrar números mayores que 10
const arreglo5 = [5,10,15,20,25]
const mayoresA10 = arreglo5.filter(n => n > 10)
console.log(mayoresA10)

//punto 17 Doblar los números en un array
const arreglo6 = [1,2,3,4,5]
const arregloDuplicado = arreglo6.map(a=>a*2)
console.log(arregloDuplicado)

//punto 18 Convertir un array de nombres a mayúsculas
const arreglo7 = ["juan","maria","pedro"]
const mayusculas = arreglo7.map(a => a.toUpperCase())
console.log(mayusculas)

//punto 19 Filtrar palabras cortas
const arreglo8 = ["árbol", "casa", "elefante", "sol"]
const palabrasCortas = arreglo8.filter(a => a.length<5)
console.log(palabrasCortas)

//punto 20 Sumar números pares en un array
const arreglo9 =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const paresSumados = arreglo9.filter(n => n%2===0).reduce((a, b) => a + b)
console.log(paresSumados)

//Ejercicios avanzados
//punto 1 Transformar objetos usando map
const arreglo10 =  [{ nombre: "Juan", edad: 20 }, { nombre: "María", edad: 25 }, { nombre: "Pedro", edad: 30 }]
const arregloNombres = arreglo10.map(a => a.nombre)
console.log(arregloNombres)

//punto 2 Filtrar objetos en un array
const arreglo11 = [{ nombre: "Carlos", edad: 17 }, { nombre: "Ana", edad: 23 }, { nombre: "Luis", edad: 16 }]
const mayorEdad = arreglo11.map(a => a.edad>=18)
console.log(mayorEdad)

//punto 3 Contar elementos únicos en un array usando Map
const arreglo12 = [2, 3, 4, 2, 3, 5, 4, 5, 6]
const mapa1 = new Map()

arreglo12.forEach(num => {
    if(mapa1.has(num)){
        mapa1.set(num,mapa1.get(num)+1)
    }else
    {
        mapa1.set(num,1)
    }
})
console.log(mapa1)

//punto 4 Encadenamiento de métodos de array
const arreglo13 =[1, 2, 2]
const sumaCuadradosNumeroPares = arreglo13.filter(n => n%2===0).map(a=>a**2).reduce((a, b) => a + b)
console.log(sumaCuadradosNumeroPares)

//punto 5 Transformar un objeto en un Map
const objeto = {a:1,b:2,c:3}
const mapa2 = new Map(Object.entries(objeto))
console.log(mapa2)

//punto 6 Crear un objeto a partir de un Map
const mapa3 = new Map()
mapa3.set("nombre","predo")
mapa3.set("edad",30)
mapa3.set("ciudad","cevilla")

const obj = Object.fromEntries(mapa3)
console.log(obj)

//punto 7 Combinar arrays de objetos usando filter y map
const arregloEstudiantes = [{ nombre: "Carlos", id: 17 }, { nombre: "Ana", id: 23 }, { nombre: "Luis", id: 16 }]
const notas = [{ nota: 10, alumnoId: 17 }, { nota: 4, alumnoId: 23 }, { nota: 7, alumnoId: 16 }]

const arregloNotasYEstudiantes = arregloEstudiantes.map(estudiante => {
    const notaEstudiante = notas.filter(nota => notas.alumnoId === nota.id)[0]
    return {
        nombre: estudiante.nombre,
        nota: notaEstudiante ? notaEstudiante.nota : null,
    }
})

console.log(arregloNotasYEstudiantes)
//punto 8 Eliminar elementos duplicados y mantener el orden usando Set y filter
const arreglo14 = [1, 2, 2, 3, 4, 4, 5, 1, 6, 7]
const set3 = new Set([...arreglo14])
console.log(set3)


