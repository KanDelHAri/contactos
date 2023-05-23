//array de contactos
var contactos = ["MiguelRios", "GabrielaRios", "CamiloMontero"];
// nuevo contacto
function nuevoContacto(nombre) {
  contactos.push(nombre);
}
nuevoContacto("GabrielRios");
//borrar contacto
function borrarContacto(nombre) {
  for (var i = 0; i < contactos.length; i++) {
    if (contactos[i] === nombre) {
      contactos.splice(i, 1);
      break;
    }
  }
}
borrarContacto("MiguelRios");
// imprimir contactos
function imprimirContactos() {
  console.log(contactos);
}

imprimirContactos();
