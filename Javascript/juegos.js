// Estas funciones son placeholder mas que nada, quiero ver si puedo hacer un exe que cree un JSON con el review y datos necesarios, y luego juntarlo en un json mas grande.

export default function juegos(compilado){
    var lista=""
    for(let i=0; i<compilado.length;i++){
        lista+=`<td>${compilado[i].nombre}</td><td>${compilado[i].rating}${rating(compilado[i].rating)}</td><td>${datos(compilado[i].datos)}</td><td>${infoT(compilado[i].infoT)}</td>`
        //falta categorias, critica y precio
        //<td></td>
    };
};

function datos (){
    //incluye todos los iconos descriptivos que no son el rating.

};

function descImage(imgName){
    //facilita poner imagenes descriptivas dando el tag img, facilita darle estilo si necesario.
    return <img src={`./../imagenes/descriptivo/${imgName}.gif`} alt={imgName}></img>
};

function rating(rating){
    //usa round para elegir que icono de rating usar.
    if(rating){
        console.log("no rating found")
        return <p>Rating error</p>
    };
    if(Math.round(rating)===5){
        return descImage("rev5");
    } else if(Math.round(rating)===4){
        return descImage("rev4");
    } else if(Math.round(rating)===3){
        return descImage("rev3");
    } else if(Math.round(rating)===2){
        return descImage("rev2");
    } else{
        return descImage("rev1");
    };
};

function accesibility(){
    //Es para el ESRB rating, accepta un string con 5 posibles resultados.
};