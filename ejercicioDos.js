/**
 * Aqui dentro probar el codigo que quieran
 */
//NOMBRE Y APELLIDO: PAULA LUCÁ - DIVISIÓN: "G"
function probarEjercicio(){
	
	var continenteIngresado;
	var nombrePaisIngresado;
	var cantidadHabitantesMIngresado;
	var nivelPobrezaIngresado;
	var temperaturaMinimaIngresada;
	var i;
	var contadorTemperaturasPares = 0;
	var contadorTemperaturasImpares = 0;
	var paisMenorHabitantes;
	var cantidadMenorHabitantes;
	var contadorPaisesMayor40;
	var contadorPaisesMenorTempCero = 0;
	var temperaturaMinimaMasBaja;
	var PaisTemperaturaMinimaMasBaja;
	var promedioHabitantes;
	var sumaHabitantes;
	var sumaPaises;
	var maximoHabitantes;
	var continenteMaxHabitantes;

	for(i = 0; i < 5; i++)
	{
		continenteIngresado = prompt("Ingrese un continente(america, asia, europa, africa y oceania)");
		while(continenteIngresado != "america" && continenteIngresado != "asia" && continenteIngresado != "europa" && continenteIngresado != "africa" && continenteIngresado != "oceania")
		{
			continenteIngresado = prompt("Dato inválido. Ingrese nuevamente el continente");
		}
		nombrePaisIngresado = prompt("Ingrese el nombre del país");
		while(isNaN(nombrePaisIngresado) == false || nombrePaisIngresado == "")
		{
			nombrePaisIngresado = prompt("Dato inválido. Ingrese nuevamente el nombre del país");
		}
		cantidadHabitantesMIngresado = prompt("Ingrese la cantidad de habitantes por millón");
		cantidadHabitantesMIngresado = parseInt(cantidadHabitantesMIngresado);
		while(!(cantidadHabitantesMIngresado > 1 && cantidadHabitantesMIngresado < 7000 ))
		{
			cantidadHabitantesMIngresado = prompt("Dato inválido. Ingrese nuevamente la cantidad de habitantes");
		}
		nivelPobrezaIngresado = prompt("Ingrese el nivel de pobreza (pobre, rico , muy rico)")
		while(nivelPobrezaIngresado != "pobre" && nivelPobrezaIngresado != "rico" && nivelPobrezaIngresado != "muy rico")
		{
			nivelPobrezaIngresado = prompt("Dato inválido. Ingrese nuevamente el nivel de pobreza");
		}
		while(nivelPobrezaIngresado == "pobre" && continenteIngresado == "europa")
		{
			nivelPobrezaIngresado = prompt("Dato inválido. Ingrese nuevamente el nivel de pobreza");
		}
		temperaturaMinimaIngresada = prompt("Ingrese la temperatura mínima (entre -50 y 50)");
		temperaturaMinimaIngresada = parseInt(temperaturaMinimaIngresada);
		while(!(temperaturaMinimaIngresada >-50 && temperaturaMinimaIngresada < 50))
		{
			temperaturaMinimaIngresada = prompt("Dato inválido. Ingrese la temperatura nuevamente");
		}

		

	
		//A - La cantidad de temperaturas pares
		if(temperaturaMinimaIngresada % 2 == 0)
		{
			contadorTemperaturasPares++;
		}

		//B - La cantidad de temperaturas impares de europa
		else if(!(temperaturaMinimaIngresada % 2 == 0 ) && continenteIngresado == "europa")
		{
			contadorTemperaturasImpares++;
		}

		//C - El nombre del pais con menos habitantes

		if(i==0)
		{
			cantidadMenorHabitantes = cantidadHabitantesMIngresado;
			paisMenorHabitantes = nombrePaisIngresado;
		}
		else if(cantidadMenorHabitantes < cantidadHabitantesMIngresado)
		{
			cantidadMenorHabitantes = cantidadHabitantesMIngresado;
			paisMenorHabitantes = nombrePaisIngresado;
		}

		//D - La cantidad de paises que superan los 40 grados.
		if(temperaturaMinimaIngresada > 40)
		{
			contadorPaisesMayor40++;
		}
		else{
			console.log("No hay países que superen los 40 grados.");
		}

		//E - La cantidad de paises de america que tienen menos de 0 grados .
		switch(continenteIngresado)
		{
			case america:
				if(temperaturaMinimaIngresada < 0)
				{
					contadorPaisesMenorTempCero++;
				}
				break;

		}

		//F - El promedio de habitantes entre los paises ingresados


		//H - La temperatura mínima ingresada, y nombre del pais que registro esa temperatura
		if(i==0)
		{
			temperaturaMinimaMasBaja = temperaturaMinimaIngresada;
			PaisTemperaturaMinimaMasBaja = nombrePaisIngresado;
		}
		else if(temperaturaMinimaMasBaja < temperaturaMinimaIngresada)
		{
			temperaturaMinimaMasBaja = temperaturaMinimaIngresada;
			PaisTemperaturaMinimaMasBaja = nombrePaisIngresado;
		}
		
		//I - Que continente tiene mas habitantes
		if(i==0)
		{
			maximoHabitantes = cantidadHabitantesMIngresado;
			continenteMaxHabitantes = continenteIngresado;
		}
		else if(maximoHabitantes < cantidadHabitantesMIngresado)
		{
			maximoHabitantes = cantidadHabitantesMIngresado;
			continenteIngresado = continenteIngresado;
		}

	}
	//A
	console.log("La cantidad de temperaturas pares es: "+contadorTemperaturasPares);
	//B
	console.log("La cantidad de temperaturas impares es: "+contadorTemperaturasImpares);
	//C
	console.log("El país con menor cantidad de habitantes es: "+paisMenorHabitantes);
	//D
	console.log("La cantidad de países que superan los 40 grados son "+contadorPaisesMayor40);
	//E
	console.log("La cantidad de países de América con temperatura menor a cero grados"+ contadorPaisesMenorTempCero);
	//H
	console.log("La temperatura mínima registrada fue de "+temperaturaMinimaMasBaja+" en el país "+PaisTemperaturaMinimaMasBaja);
	//I
	console.log("El continente con más habitantes es "+continenteMaxHabitantes);

}