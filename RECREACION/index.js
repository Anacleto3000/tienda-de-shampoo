function AbrirCarrito() {
  let ventana_carrito = document.getElementsByClassName("box-carrito")[0];
  ventana_carrito.style.display = "flex"

}


function CerrarCarrito() {
  let icono_cerrar_carrito = document.getElementsByClassName("box-carrito")[0]
  icono_cerrar_carrito.style.display = "none"
}

function AgregarProducto_noti() {
  let noti_producto_agregado = document.getElementsByClassName("box-principal")[0]
  noti_producto_agregado.style.display="flex"
}

function CerrarNotificacion() {

  let noti_producto_agregado = document.getElementsByClassName("box-principal")[0]
  noti_producto_agregado.style.display="none"
  
}