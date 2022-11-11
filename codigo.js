
const cantidadEntradas=document.getElementById(`cantidadEntrada`);
const categoria=document.getElementById(`inputState`);//hay que ver si funciona si no id=inputStateç
const totalCompra= document.getElementById(`totalCompra`);
const botonCalcular=document.getElementById(`botonCalcular`);

let precio=200
let dctoEstudiante=0.8
let dctoTrainee=0.5
let dctoJunior=0.15

function calculoPrecio(){
    if(categoria.value=="Estudiante"){
        precioAPagar=precio*(1- dctoEstudiante)
    }
    if(categoria.value=="Trainee"){
        precioAPagar=precio*(1- dctoTrainee)
    }
    if(categoria.value=="Junior"){
        precioAPagar=precio*(1- dctoJunior)
    }
    if(categoria.value=="General"){
        precioAPagar=precio
    }
    return precioAPagar;
}
function total(){
    let totalAPagar=calculoPrecio()*cantidadEntradas.value;
    totalCompra.innerHTML=(Math.round(totalAPagar))
}