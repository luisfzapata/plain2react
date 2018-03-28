let numbers = [
	"0",
	"1",
	"2",
	"3",
	"4",
	"5",
	"6",
	"7",
	"8",
	"9"
]

let specialCaracter = [
	"$",
	"/",
	"!",
	"#",
	"%",
	"&",
	"*",
	"+",
	"-",
	"|"
]

function validar ()
{
	let validationName = document.getElementById("nombre").value;
	let adviceSpan = document.getElementsByTagName("span")[0];
	

	for(let i = 0; i < validationName.length; i++)
	{
		for (let j = 0; j  < numbers.length; j++)
		{
			if(validationName.charAt(i) == numbers[j] || validationName.charAt(i) == specialCaracter[j])
			{
				let adviceSpanText = document.createTextNode("Oye, no coloques cosas raras en mi nombre!!!");

				adviceSpan.appendChild(adviceSpanText);
				return false
			}
		}
	}
}




