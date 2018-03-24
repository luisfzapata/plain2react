const nameTable =
[
	"Pais",
	"Nombre",
	"Fecha",
	"Tipo"
]

const lenghtHeader = nameTable.length;

const holidays = 
[
	{pais: "Estados Unidos", nombre: "Año Nuevo", fecha: new Date(2018,0,1), tipo: "Nacional"},
	{pais: "Colombia", nombre: "Año Nuevo", fecha: new Date(2018,0,1), tipo: "Nacional"},
	{pais: "Colombia", nombre: "Día de Reyes Magos", fecha: new Date(2018,0,8), tipo: "Religioso"},
	{pais: "Estados Unidos", nombre: "Cumpleaños de Martín Luther King", fecha: new Date(2018,0,15), tipo: "Nacional"},
	{pais: "Estados Unidos", nombre: "Día de San Valentín", fecha: new Date(2018,1,14), tipo: "Religioso"},
	{pais: "Estados Unidos", nombre: "Día del Presidente", fecha: new Date(2018,1,19), tipo: "Nacional"},
	{pais: "Colombia", nombre: "Día de San José", fecha: new Date(2018,2,19), tipo: "Religioso"},
	{pais: "Colombia", nombre: "Jueves Santo (Semana Santa)", fecha: new Date(2018,2,29), tipo: "Religioso"},
	{pais: "Colombia", nombre: "Viernes Santo (Semana Santa)", fecha: new Date(2018,2,30), tipo: "Religioso"},
	{pais: "Estados Unidos", nombre: "Domingo de Resurreción", fecha: new Date(2018,3,1), tipo: "Religioso"},
	{pais: "Colombia", nombre: "Día del Trabajo", fecha: new Date(2018,4,1), tipo: "Nacional"},
	{pais: "Colombia", nombre: "Día de la Ascensión", fecha: new Date(2018,4,14), tipo: "Religioso"},
	{pais: "Estados Unidos", nombre: "Día Conmemorativo", fecha: new Date(2018,4,28), tipo: "Nacional"},
	{pais: "Colombia", nombre: "Corpus Christi", fecha: new Date(2018,5,4), tipo: "Religioso"},
	{pais: "Colombia", nombre: "Sagrado Corazón", fecha: new Date(2018,5,11), tipo: "Religioso"},
	{pais: "Colombia", nombre: "San Pedro y San Pablo", fecha: new Date(2018,6,2), tipo: "Religioso"},
	{pais: "Estados Unidos", nombre: "Día de la Independencia", fecha: new Date(2018,6,4), tipo: "Nacional"},
	{pais: "Colombia", nombre: "Día de la Independencia", fecha: new Date(2018,6,20), tipo: "Nacional"},
	{pais: "Colombia", nombre: "Batalla de Boyacá", fecha: new Date(2018,7,7), tipo: "Nacional"},
	{pais: "Colombia", nombre: "La asunción de la Virgen", fecha: new Date(2018,7,20), tipo: "Religioso"},
	{pais: "Estados Unidos", nombre: "Día del Trabajo", fecha: new Date(2018,8,3), tipo: "Nacional"},
	{pais: "Estados Unidos", nombre: "Día de Columbus", fecha: new Date(2018,9,8), tipo: "Nacional"},
	{pais: "Colombia", nombre: "Día de la Raza", fecha: new Date(2018,9,15), tipo: "Nacional"},
	{pais: "Estados Unidos", nombre: "Halloween", fecha: new Date(2018,9,31), tipo: "Religioso"},
	{pais: "Colombia", nombre: "Día de Todos los Santos", fecha: new Date(2018,10,5), tipo: "Religioso"},
	{pais: "Estados Unidos", nombre: "Día de los Veteranos", fecha: new Date(2018,10,12), tipo: "Nacional"},
	{pais: "Colombia", nombre: "Independencia de Cartagena", fecha: new Date(2018,10,12), tipo: "Nacional"},
	{pais: "Estados Unidos", nombre: "Día de Acción de Gracias", fecha: new Date(2018,10,22), tipo: "Nacional"},
	{pais: "Colombia", nombre: "Día de la Inmaculada", fecha: new Date(2018,11,8), tipo: "Religioso"},
	{pais: "Estados Unidos", nombre: "Navidad", fecha: new Date(2018,11,25), tipo: "Religioso"},
	{pais: "Colombia", nombre: "Navidad", fecha: new Date(2018,11,25), tipo: "Religioso"},
]

const lenghtHolidays = holidays.length;

// Encabezado de la tabla con JavaScript

let theader = document.getElementsByTagName("thead")[0]; //Se obtiene la referencia del thead, que es donde iran los tr y th
let rowHead = document.createElement("tr"); // Crear fila


for(let i = 0; i < lenghtHeader; i++ )
{
	let columnHead = document.createElement("th"); // Crear columna
	let textColumnHead = document.createTextNode(nameTable[i]);

	columnHead.appendChild(textColumnHead); //Agrega a columnHead (la columna) el hijo textColumnHead (el texto)
	rowHead.appendChild(columnHead); // Agrega a rowHead (la fila) el hijo columnHead (la columna) 
}

theader.appendChild(rowHead); //Agrega a thead (la etiqueda thead) el hijo rowHead (la fila)

// Cuerpo de la tabla con JavaScript

let tbody = document.getElementsByTagName("tbody")[0]; //Se obtiene la referencia del tbody, que es donde iran los tr y td


for (let i = 0; i < lenghtHolidays; i++ )
{
	let counter = 1; // Variable creada para usar el condicional if
	let rowBody = document.createElement("tr"); //Crear fila

	for (let j = 0; j < lenghtHeader; j++)
	{
		
		let columnBody = document.createElement("td"); // Crear columna
		let textoColumnBody;

		if (counter == 1 )
		{
			textColumnBody = document.createTextNode(holidays[i].pais); // Crear texto 
		}else if (counter == 2)
		{
			textColumnBody = document.createTextNode(holidays[i].nombre); // Crear texto 
		}else if (counter == 3)
		{
			textColumnBody = document.createTextNode(holidays[i].fecha); // Crear texto 
		}else if (counter == 4)
		{
			textColumnBody = document.createTextNode(holidays[i].tipo); // Crear texto 
		}

		counter++;

		columnBody.appendChild(textColumnBody); //Agrega a columnBody (la columna) el hijo textColumnBody (el texto)
		rowBody.appendChild(columnBody); // Agrega a rowBody (la fila) el hijo columnBody (la columna) 
	}

	tbody.appendChild(rowBody); // Agrega a tbody (la etiqueda tbody) el hijo rowBody (la fila)
}


