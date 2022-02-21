class Vehiculo {
	constructor(modelo,serie,marca,cilindraje,
		numeroDePasajeros,tiempoGarantia,impuestosValor,
		transmision,consumoPorLitro,combustible,velocidadMaxima,precio){
		this.modelo = modelo;
		this.serie= serie;		
		this.marca= marca;
		this.cilindraje= cilindraje;
		this.numeroDePasajeros= numeroDePasajeros;
		this.tiempoGarantia= tiempoGarantia;
		this.impuestosValor= impuestosValor;
		this.transmision= transmision;
		this.consumoPorLitro= consumoPorLitro;
		this.combustible= combustible;
		this.velocidadMaxima = velocidadMaxima;
		this.precio = precio;
//--------------------------------------------------------------------		
		this.informacion = `El vehiculo es ${marca} ${modelo}  numero de serie: ${serie} 
		de ${cilindraje}  puede llevar ${numeroDePasajeros}pasajeros, tiene garantia de ${tiempoGarantia} 
		paga al año ${impuestosValor} de impuesto promedio,  es de transmision ${transmision} consume ${consumoPorLitro}
		se mueve con ${combustible}, tiene una velocidad maxima de ${velocidadMaxima}
		y un valor de ${precio}`

	} mostrarInformacion = ()=>{
		alert(this.informacion + "<br>");
	} 

	play(st){
        let txt = "Mostrando\n____________________________"+
        "\nModelo: " + this.modelo + 
        "\nSerie: " + this.serie +
        "\nMarca: " + this.marca +
        "\nCilindraje: " + this.cilindraje +
        "\nnumeroPasajeros: " + this.numeroDePasajeros +
        "\nTiempo Garantia: " + this.tiempoGarantia +
        "\nImpuesto: " + this.impuestosValor +
        "\nTransmision: " + this.transmision;
        "\nConsumo: " + this.consumoPorLitro;
        "\nCombustible: " + this.combustible;
        "\nVelocidad max: " + this.velocidadMaxima;
        "\nPrecio: " + this.precio;

	
             
        let pr = window.prompt(txt + this.menu(st) + "");

        if(pr == 1){
            if(st == true){
                this.play(false);
            }else{
                this.play(true);
            }
        }else if(pr == 2){
            return 2;
        }else if(pr == 3){
            return 3;
        }else{
            this.play(st);
        }
    }

}


class Moto extends Vehiculo {
	constructor(marca,modelo,serie,cilindraje,numeroDePasajeros,impuestosValor,
		transmision,consumoPorLitro,combustible,
		velocidadMaxima, precio){
    super(marca,modelo,serie,cilindraje,numeroDePasajeros,impuestosValor,
		transmision,consumoPorLitro,combustible,
		velocidadMaxima, precio);
    this.data = `El vehiculo es ${marca} ${modelo}  numero de serie: ${serie} 
		de ${cilindraje}  puede llevar ${numeroDePasajeros}pasajeros, 
		paga al año ${impuestosValor} de impuesto promedio,  es de transmision ${transmision} consume ${consumoPorLitro}
		se mueve con ${combustible}, tiene una velocidad maxima de ${velocidadMaxima}
		y un valor de ${precio}`
	} mostrarData = ()=>{
		alert(this.data + "<br>");
	} 

	get getMarca(){
		return this.modelo;
	}

}
  function detallesDeVehiculos() {

let honda = new Moto ("Honda","cbf125","15478594786547854","125","2",
	"480.800","Manual","300km/L","Gasolina corriente","120 km/h", "5.000.000");


let ford = new Vehiculo("Focus","145789547895478","Ford",
	"2500cc","6","2 años","840.000 $","Automática","240km/L",
	"Gasolina corriente","240 km/h","$50.000.000");

let motico = new Moto ("Kawasaki","Ninja 400","15478594786548854","400cc","2",
	"480.800","Manual","150km/L","Gasolina premium","160 km/h", "15.000.000");
    
let motorro = new Moto ("Yamaha","mt-09","14257594786547854","899cc","2",
	"480.800","Manual","100km/L","Gasolina octane","360 km/h", "65.000.000");


let caro = new Vehiculo("Logan","145789547895478","Renault",
	"1600cc","6","2 años","840.000 $","Automática","300km/L",
	"Gasolina corriente/premium","200 km/h","$40.000.000");

let carrok = new Vehiculo("Sail","145789547895478","Chevrolet",
	"1500cc","6","2 años","840.000 $","Manual","220km/L",
	"Gasolina corriente","170 km/h","$30.000.000");

document.write(honda.getMarca);

honda.mostrarData();
ford.mostrarInformacion(); 
motico.mostrarData();
motorro.mostrarData();
carr.mostrarInformacion();
caro.mostrarInformacion();
carrok.mostrarInformacion();
}

function verVehiculos(){
	alert("Honda cbf125");
	alert("Ford Focus");
	alert("Kawasaki ninja 400");
	alert("Yamaha mt-09");
	alert("Renault Logan");
	alert("Chevrolet Sail");



}
function verMarcas (){

   alert("Honda");
   alert("Ford");
   alert("Kawasaki");
   alert("Yamaha");
   alert("Renault");
   alert("Chevrolet");
   


}
function verCategorias (){
	alert("Categorias:\n 1.Carros \n 2.Motos")


}
function filtrosBusqueda (){
	let opcion = prompt("Que quieres ver?\n 1.Carro y moto mas cara \n 2. Carro mas espacioso \n 3.Moto y carro de mayor cilindraje\n 4. Carro y moto mas rapida \n 5.Carro y moto mas baratos ")
    
    if(opcion == 1){
    	alert("Yahama mt-09, Ford Focus");


    }
     if(opcion == 2){
     	alert("Ford Focus");

    }
     if(opcion == 3){
     	alert("Yamaha mt-09,Ford Focus");


    }
     if(opcion == 4){
     	alert("Yamaha mt-09,Ford Focus");


    } if(opcion == 5){
    	alert("Honda cbf125, Chevrolet Sail");


    }
}
//-----------------------------------------------------------------------

let files = [];
let lists = [];
start();

function start() {
    setFiles();
    mainMenu();
}

//----------------------------------------------------------------
function mainMenu() {
    let option = window.prompt("Que quieres hacer hoy?\n1.Ver marcas \n2.Ver vehiculos\n3.Detalles de vehiculos \n4.Categorias \n5.Filtros ");

    if (option == 1) {
        verMarcas ();
    } else if (option == 2) {
        verVehiculos();
    }
    else if (option == 3) {
        detallesDeVehiculos();
    }
    else if (option == 4) {
        verCategorias();
    }
    else if (option == 5) {
        filtrosBusqueda();
    }
}
//----------------------------------------------------------------
function showFiles() {
    let allFiles = "Dime el archivo que deseas consumir:\n"
    for (let j in files) {
        allFiles += j + ". " + files[j].name + "\n";
    }

    let fileSelected = window.prompt(allFiles);
    let select;

    if (fileSelected < files.length) {

        while (select != 3) {
            select = files[fileSelected].play();
            if (select == 2) {
                if (fileSelected == files.length - 1) {
                    fileSelected = 0;
                } else {
                    fileSelected++;
                }
            }
        }
    }
}
//----------------------------------------------------------------

function showLists() {
    let allList = "Seleccione la lista de Vehiculos a ver: \n";
    for (let i in lists) {
        allList += "Lista #" + i + ": ";
        for (let j = 0; j < lists[i].length - 1; j++) {
            allList += lists[i][j].name + ",";
        }
        allList += lists[i][lists[i].length - 1].name + "\n\n";
    }

    let listSelected = window.prompt(allList);
    playList(lists[listSelected]);

}
//----------------------------------------------------------------

function playList(li) {
    let index = 0;
    let select = 0;
    2
    while (select != 3) {
        select = li[index].play();
        if (select == 2) {
            if (index == li.length - 1) {
                index = 0;
            } else {
                index++;
            }
        }
    }
}

//----------------------------------------------------------------
function setFiles() {
    c1 = new Moto ("Honda","cbf125","15478594786547854","125","2",
	"480.800","Manual","300km/L","Gasolina corriente","120 km/h", "5.000.000");

    c2 = new Moto ("Kawasaki","Ninja 400","15478594786548854","400cc","2",
	"480.800","Manual","150km/L","Gasolina premium","160 km/h", "15.000.000");
    
    c3 = new Moto ("Yamaha","mt-09","14257594786547854","899cc","2",
	"480.800","Manual","100km/L","Gasolina octane","360 km/h", "65.000.000");

    
    //---------------------------------------------------------------------

    v1 = new Vehiculo("Focus","145789547895478","Ford",
	"2500cc","6","2 años","840.000 $","Automática","240km/L",
	"Gasolina corriente","240 km/h","$50.000.000");

	v2 = new Vehiculo("Logan","145789547895478","Renault",
	"1600cc","6","2 años","840.000 $","Automática","300km/L",
	"Gasolina corriente/premium","200 km/h","$40.000.000");

    v3 = new Vehiculo("Sail","145789547895478","Chevrolet",
	"1500cc","6","2 años","840.000 $","Manual","220km/L",
	"Gasolina corriente","170 km/h","$30.000.000");



    files.push(c1);
    files.push(c2);
    files.push(c3);
  

    files.push(v1);
    files.push(v2);
    files.push(v3);
  



    list1 = [c1, c2,c3];
    list2 = [v1, v2,v3];
    

    lists.push(list1);
    lists.push(list2);
    
}

console.log(lists);