// Promesas

const estudiantesSabados = ["Mateo", "Jose", "Luciana", "Abigail"]; 

const promesa = () =>{
    return new Promise((resolve, reject) => {
        const encontrado = estudiantesSabados.find(estudiante=>estudiante === "Jose");
        setTimeout( ()=>{
            if (encontrado) {
                resolve(`Se encontro al usuario ${encontrado}`);
            }
            else{
                reject("No se pudo encontrar al usuario");
            }
        },5000)
    })
}

promesa().then(result=>console.log(result))
    .catch(error=>console.error(error)); 


//EL FETCH
//ES TAMBIÉN UNA PROMESA
//ES UNA API NATIVA DE JAVASCRIPT PARA CONSUMIR APIS

const url = 'https://jsonplaceholder.typicode.com/posts';

const getData = ()=>{
    fetch(url)
    .then(response=>response.json())
    .then(result=>console.log(result))
    .catch(error=>console.error(error))
}

//getData(); 

//Las funciones asincronas que hemos visto son: 
//las promesas entre este el fetch
//los temporizadores como el setTimeout, setInterval
//Ahora vamos a ver la async-await

//getDatos()
async function getDatos() {
    const response = await fetch(url); 
    const result = await response.json(); 
    console.log(result); 

}

//Este es el metodo http get de fetch que viene por defecto
(async () =>{
    //El try significa: intenta hacer algo
    try {
        const response = await fetch(url); 
        const result = await response.json(); 
        console.log(result);
    } catch (error) {
        //El catch significa: captura el error
        throw new Error("No se pudo hacer la petición" + error)
    }
})(); 



(async () =>{
    //El try significa: intenta hacer algo
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST', 
            headers : { 
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                userId : 1
            })
        }); 
        console.log(`Este es el codigo de estado de la promesa: ${response.status}`); 
        const result = await response.json(); 
        console.log(result);
    } catch (error) {
        //El catch significa: captura el error
        throw new Error("No se pudo hacer la petición" + error)
    }
})(); 