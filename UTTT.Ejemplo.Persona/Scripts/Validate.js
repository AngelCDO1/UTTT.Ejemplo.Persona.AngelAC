function validate() {
    var claveu = document.getElementById("txtClaveUnica").value;
    var nombre = document.getElementById("txtNombre").value;
    var apaterno = document.getElementById("txtAPaterno").value;
    var amaterno = document.getElementById("txtAMaterno").value;
    var sex = document.getElementById("ddlSexo");
    var hermanos = document.getElementById("txtNHermanos").value;
    var calendario = document.getElementById("HidFecha");
    var sexdll = sex.options[sex.selectedIndex].value;
    var fecha = calendario.defaultValue;
    var datee = parseInt(("" + fecha.substr(6, 10)));
    var ope = 2021 - datee;
   

    var bandera = true;
    var mensaje = " ";

    if (claveu == " " || nombre == " " || apaterno == " " || amaterno == " " || datee == " ") {
        ban = false;
        mensaje = "Acceso denegado";

    } else if (!(/\d{3}$/.test(claveu))) {
        mensaje = "Solo se admiten Numeros para la clave unica";
        ban = false;

    } else if (!(/^([aA-záéíóúZÁÉÍÓÚ]{3}[a-zñáéíóú]+[\s]*)+$/.test(nombre)) || !(/^([aA-záéíóúZÁÉÍÓÚ]{3}[a-zñáéíóú]+[\s]*)+$/.test(apaterno)) || !(/^([aA-záéíóúZÁÉÍÓÚ]{3}[a-zñáéíóú]+[\s]*)+$/.test(amaterno))) {
        mensaje = "Solo se admiten un maximo de 3 letras en los Campos para Nombre, A paterno, A materno, Respetando la gramatica de Escritura la primera mayuscula y despues minisculas ";
        ban = false;

    } else if (ope <= 18) {
        mensaje = "El usuario debe ser mayor de edad";
        ban = false;

    } else if (isNaN(hermanos) == true) {
        mensaje = "Solo debe ingresar numeros";
        ban = false;

    } else if (sexdll < 0 || sexdll > 2) {
        mensajes.push('Ingresa el sexo');
        ban = false;
    }
    
    return ban;
}