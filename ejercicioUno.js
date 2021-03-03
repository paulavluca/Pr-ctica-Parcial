/**
 * Aqui dentro probar el codigo que quieran
 */
//NOMBRE Y APELLIDO: PAULA LUCÁ - DIVISIÓN: "G"
function probarEjercicio(){
	var tipoMascotaIngresada;
	var tipoPelajeIngresado;
	var edadMascotaIngresada;
	var nombreMascotaIngresada;
	var razaMascotaIngresada;
	var pesoMascotaIngresado;
	var estadoClinicoMascotaIngresado;
	var temperaturaMascotaIngresada;
	var cantidadPerros = 0;
	var cantidadGatos = 0;
	var cantidadOtros = 0;
	var cantidadGatosYPerros;
	var cantidadTotalMascotas;
	var porcentajeGatosYPerros;
	var cantidadTotalEnfermos = 0;
	var porcentajeMascotasEnfermas;
	var pesoMaximoPerro;
	var nombreMascotaOtro;
	var TemperaturaMenorSinPelo;
	var tipoAnimalMenorSinPelo;
	var acumuladorTemperaturas = 0;
	var contadorEnfermos = 0;
	var contadorInternados = 0;
	var contadorAdopcion = 0;
	var i = 0;
	var respuesta;
	var totalPeso = 0;
	var promedioPesoMascotas;
	var nombreGatoMasLiviano;
	var razaGatoMasLiviano;
	var minimoPesoGatoSinPelos;


	do
	{
		tipoMascotaIngresada = prompt("Ingrese el tipo de mascota (gato-perro-otra cosa)");
		while(tipoMascotaIngresada != "gato" && tipoMascotaIngresada != "perro" && tipoMascotaIngresada != "otra cosa")
		{
			tipoMascotaIngresada = prompt("Dato inválido. Ingrese nuevamente el tipo de mascota");
		}
		tipoPelajeIngresado = prompt("Ingrese el tipo de pelaje de la mascota (corto-largo-sin pelo")
		while(tipoPelajeIngresado != "corto" && tipoPelajeIngresado != "largo" && tipoPelajeIngresado != "sin pelo")
		{
			tipoPelajeIngresado = prompt("Dato inválido. Ingrese nuevamente el tipo de pelaje de la mascota");
		}
		edadMascotaIngresada = prompt("Ingrese la edad de la mascota");
		edadMascotaIngresada = parseInt(edadMascotaIngresada);
		while(isNaN(edadMascotaIngresada) || edadMascotaIngresada >30)
		{
			edadMascotaIngresada = prompt("Dato inválido. Ingrese nuevamente la edad de la mascota");
			edadMascotaIngresada = parseInt(edadMascotaIngresada);
		}
		nombreMascotaIngresada = prompt("Ingrese el nombre de la mascota");
		while(isNaN(nombreMascotaIngresada)==false || nombreMascotaIngresada == "")
		{
			nombreMascotaIngresada = prompt("Dato inválido. Ingrese nuevamente el nombre de la mascota");
		}
		razaMascotaIngresada = prompt("Ingrese la raza de la mascota");
		while(isNaN(razaMascotaIngresada)==false || razaMascotaIngresada == "")
		{
			razaMascotaIngresada = prompt("Dato inválido. Ingrese nuevamente la raza de la mascota");
		}
		pesoMascotaIngresado = prompt("Ingrese el peso de la mascota");
		pesoMascotaIngresado = parseInt (pesoMascotaIngresado);
		while(isNaN(pesoMascotaIngresado) || pesoMascotaIngresado >30)
		{
			pesoMascotaIngresado = prompt ("Dato inválido. Ingrese nuevamente el peso de la mascota");
			pesoMascotaIngresado = parseInt(pesoMascotaIngresado);
		}
		estadoClinicoMascotaIngresado = prompt("Ingrese el estado clínico de la mascota (enfermo-internado-adopcion)");
		while(estadoClinicoMascotaIngresado != "enfermo" && estadoClinicoMascotaIngresado != "internado" && estadoClinicoMascotaIngresado != "adopcion")
		{
			estadoClinicoMascotaIngresado = prompt("Dato inválido. Ingrese nuevamente el estado clínico de la mascota");
		}
		temperaturaMascotaIngresada = prompt("Ingrese la temperatura de la mascota");
		temperaturaMascotaIngresada = parseInt(temperaturaMascotaIngresada);
		while(temperaturaMascotaIngresada < 34 || temperaturaMascotaIngresada > 42)
		{
			temperaturaMascotaIngresada = prompt("Dato inválido. Ingrese nuevamente la temperatura de la mascota");
			temperaturaMascotaIngresada = parseInt(temperaturaMascotaIngresada);
		}

		//A - El perro más pesado
		switch(tipoMascotaIngresada)
		{	
			case "perro":
				cantidadPerros++;
				if(cantidadPerros == 1)
				{
					pesoMaximoPerro = pesoMascotaIngresado;
				}
				else if(cantidadPerros >1 || pesoMaximoPerro < pesoMascotaIngresado)
				{
					pesoMaximoPerro = pesoMascotaIngresado;
				}
				
				break;
			
			case "gato":
				cantidadGatos++;
				if(cantidadGatos == 0 && pelaje == "sin pelo")
				{
					minimoPesoGatoSinPelos = pesoMascotaIngresado;
					nombreGatoMasLiviano = nombreMascotaIngresada;
					razaGatoMasLiviano = razaMascotaIngresada;
				}
				else if(pelaje == "sin pelo" && minimoPesoGatoSinPelos < pesoMascotaIngresado)
				{
					minimoPesoGatoSinPelos = pesoMascotaIngresado;
					nombreGatoMasLiviano = nombreMascotaIngresada;
					razaGatoMasLiviano = razaMascotaIngresada;
				}
				break;


			case "otra cosa":
				cantidadOtros++;
				break;

		}
		cantidadTotalMascotas = cantidadPerros + cantidadGatos + cantidadOtros;
		//B - El pocentaje de enfermos sobre el total de mascotas;
		
		if(estadoClinicoMascotaIngresado == "enfermo")
		{
			cantidadTotalEnfermos++;
		}
		porcentajeMascotasEnfermas = cantidadTotalMascotas * cantidadTotalEnfermos / 100;

		//C - c)El nombre de la ultima mascota de tipo "otra cosa"
		if(i == 0 && tipoMascotaIngresada == "otra cosa")
		{
			nombreMascotaOtro = nombreMascotaIngresada;
		}
		else if(tipoMascotaIngresada == "otra cosa")
		{
			nombreMascotaOtro = nombreMascotaIngresada;
		}

		//D - El animal sin pelo con menor temperatura corporal
		switch(pelaje)
		{
			case "sin pelo":
				if(i == 0)
				{
					TemperaturaMenorSinPelo = temperaturaMascotaIngresada;
					tipoAnimalMenorSinPelo = tipoMascotaIngresada;
				}
				else if(temperaturaMascotaIngresada > TemperaturaMenorSinPelo)
				{
					TemperaturaMenorSinPelo = temperaturaMascotaIngresada;
					tipoAnimalMenorSinPelo = tipoMascotaIngresada;
				}
				break;
			case "corto":
				break;
			case "largo":
				break;


		}

		//E - Que tipo de mascota(gato o un perro u "otra cosa") que tiene el mayor promedio de temperatura corporal

		
		//F - Sumando gatos y perros que porcentaje del total de mascotas son?
		cantidadGatosYPerros = cantidadPerros + cantidadGatos;
		porcentajeGatosYPerros = cantidadGatosYPerros * cantidadGatosYPerros / 100;
		
		//G - Que estado clinico tiene la menor cantidad de mascotas
		
	
		switch(estadoClinicoMascotaIngresado)
		{
			case "enfermo":
				contadorEnfermos++;
				break;
			case "adopcion":
				contadorAdopcion++;
				break;
			case "internado":
				contadorInternados++;
				break;
		}
		if(contadorEnfermos > contadorAdopcion && contadorEnfermos > contadorInternados)
		{
			console.log("El estado clínico con la mayor cantidad es el de enfermos");
		}
		else if(contadorAdopcion > contadorEnfermos && contadorAdopcion > contadorInternados)
		{
			console.log("El estado clínico con la mayor cantidad es el de eadopción");
		}
		if(contadorInternados > contadorAdopcion && contadorInternados > contadorEnfermos)
		{
			console.log("El estado clínico con la mayor cantidad es el de internados");
		}
		
		//H - Cual es el promedio de kilos de peso de tomando todas las mascotas
		totalPeso = totalPeso + pesoMascotaIngresado;
		promedioPesoMascotas = totalPeso / cantidadTotalMascotas;
		

		//I - El nombre y raza del gato sin pelos mas liviano
		console.log("El nombre y la raza del gato sin pelos más liviano es: "+nombreGatoMasLiviano+ " y "+razaGatoMasLiviano);
	


		i++;
		respuesta = confirm("¿Desea ingresar otra mascota?");
	}while(respuesta == true);

	//A
	console.log("El peso máximo de un perro ingresado es de "+pesoMaximoPerro+" kilos.")

	//B
	console.log("El porcentaje de mascotas enfermas es de "+porcentajeMascotasEnfermas);

	//C
	console.log("El nombre de la última mascota del tipo 'otra cosa' ingresada es: "+nombreMascotaOtro);

	//D
	console.log("La menor temperatura del tipo "+tipoAnimalMenorSinPelo+" sin pelo es de "+TemperaturaMenorSinPelo+ "grados");

	//E

	//F
	console.log("El porcentaje de gatos y perros sobre el total de mascotas es de "+porcentajeGatosYPerros+"%");

	//H
	console.log("El peso promedio de mascotas es de "+promedioPesoMascotas+" kilos");
}