document.querySelector('#mostrarTodos').addEventListener('click',MostrarTodos);


document.querySelector('#submitButton').addEventListener('click',BuscarCampos);


function BuscarCampos(){
	var valorCiudad=$("#selectCiudad").val();
	var valorTipo = $("#selectTipo").val();
	
		
		if (valorCiudad.length != 0 && valorTipo.length != 0){
			
			FiltraCampos();
		}
		else if (valorCiudad.length != 0){
			FiltraCiudad();
		}
		else if (valorTipo.length != 0){
			
			FiltraTipo();
			
		}
		else if (valorCiudad.length == 0 && valorTipo.length == 0){
	
			let res = document.querySelector('#res');
			res.innerHTML = '';
		}
}

function FiltraTipo() {
	var vTipo = $("#selectTipo").val();

	var vPrecio= $("#rangoPrecio").val();
	var vp = vPrecio.split(";",2);
	
	const datosarray = new XMLHttpRequest();
	datosarray.open('GET','data-1.json',true);
	datosarray.send();
	datosarray.onreadystatechange = function(){
		
		if(this.readyState == 4 && this.status == 200){
			var datos = JSON.parse(datosarray.responseText);
			let res = document.querySelector('#res');
			res.innerHTML = '';
			
			for(var i in datos){
				var ValorPrecio = datos[i].Precio;
				var nValorPrecio=""
				if (ValorPrecio.length == 6){var nValorPrecio = ValorPrecio.substring(1,2)+ValorPrecio.substring(3,6);}
				else if (ValorPrecio.length == 7){var nValorPrecio = ValorPrecio.substring(1,3)+ValorPrecio.substring(4,7);}

				if (datos[i].Tipo==vTipo && (parseInt(nValorPrecio)>=parseInt(vp[0]) && parseInt(nValorPrecio)<=parseInt(vp[1])))
{
				res.innerHTML +=`
				<div class="tituloContenido card" >
				<table  border=0 rules="all" cellspacing=0 cellpadding=0>
				<tr>
				<td>
					<img src="img/home.jpg" alt="" width="300" height="230" border="0"/>
				</td>
					<td style="FONT-SIZE:13px; COLOR:#000000; LINE-HEIGHT:10px; FONT-FAMILY:Arial,Helvetica,sans-serif" width="500">
					
					<p><b>Direccion: </b>${datos[i].Direccion}</p>
					<p><b>Ciudad: </b>${datos[i].Ciudad}</p>
					<p><b>Telefono: </b>${datos[i].Telefono}</p>
					<p><b>Codigo Postal:</b> ${datos[i].Codigo_Postal}</p>
					<p><b>Tipo:</b> ${datos[i].Tipo}</p>
					<FONT SIZE=2><b>Precio: </b></font><FONT SIZE=4 color='#F4A460'>${datos[i].Precio}</font>
					<br/><br/><br/>
					<div class="divider"></div>
					<br/><br/><br/>
					<p align="right"></font><FONT SIZE=2>VER MAS</font></p>
					
				</td>
				</tr>
				</table> 
				</div>
				`
				}
			}
		}
	
	}
}		



function FiltraCiudad() {
	var vCiudad=$("#selectCiudad").val();
	var vPrecio= $("#rangoPrecio").val();
	var vp = vPrecio.split(";",2);
	const datosarray = new XMLHttpRequest();
	datosarray.open('GET','data-1.json',true);
	datosarray.send();
	datosarray.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200){
			var datos = JSON.parse(datosarray.responseText);
			let res = document.querySelector('#res');
			res.innerHTML = '';
			for(var i in datos){
				var ValorPrecio = datos[i].Precio;
				var nValorPrecio=""
				if (ValorPrecio.length == 6){var nValorPrecio = ValorPrecio.substring(1,2)+ValorPrecio.substring(3,6);}
				else if (ValorPrecio.length == 7){var nValorPrecio = ValorPrecio.substring(1,3)+ValorPrecio.substring(4,7);}
				if (datos[i].Ciudad==vCiudad && (parseInt(nValorPrecio)>=parseInt(vp[0]) && parseInt(nValorPrecio)<=parseInt(vp[1])))
				{
				res.innerHTML +=`
				<div class="tituloContenido card" >
				<table  border=0 rules="all" cellspacing=0 cellpadding=0>
				<tr>
				<td>
					<img src="img/home.jpg" alt="" width="300" height="230" border="0"/>
				</td>
					<td style="FONT-SIZE:13px; COLOR:#000000; LINE-HEIGHT:10px; FONT-FAMILY:Arial,Helvetica,sans-serif" width="500">
					
					<p><b>Direccion: </b>${datos[i].Direccion}</p>
					<p><b>Ciudad: </b>${datos[i].Ciudad}</p>
					<p><b>Telefono: </b>${datos[i].Telefono}</p>
					<p><b>Codigo Postal:</b> ${datos[i].Codigo_Postal}</p>
					<p><b>Tipo:</b> ${datos[i].Tipo}</p>
					<FONT SIZE=2><b>Precio: </b></font><FONT SIZE=4 color='#F4A460'>${datos[i].Precio}</font>
					<br/><br/><br/>
					<div class="divider"></div>
					<br/><br/><br/>
					<p align="right"></font><FONT SIZE=2>VER MAS</font></p>
					
				</td>
				</tr>
				</table> 
				</div>
				`
				}
			}
		}
	
	}
}		

function FiltraCampos() {
	var vTipo = $("#selectTipo").val();
	var vCiudad=$("#selectCiudad").val();
	var vPrecio= $("#rangoPrecio").val();
	var vp = vPrecio.split(";",2);

	const datosarray = new XMLHttpRequest();
	datosarray.open('GET','data-1.json',true);
	datosarray.send();
	datosarray.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200){
			var datos = JSON.parse(datosarray.responseText);
			let res = document.querySelector('#res');
			res.innerHTML = '';

			for(var i in datos){
				var ValorPrecio = datos[i].Precio;
				var nValorPrecio=""
				if (ValorPrecio.length == 6){var nValorPrecio = ValorPrecio.substring(1,2)+ValorPrecio.substring(3,6);}
				else if (ValorPrecio.length == 7){var nValorPrecio = ValorPrecio.substring(1,3)+ValorPrecio.substring(4,7);}

				
				if ((datos[i].Tipo==vTipo && datos[i].Ciudad==vCiudad) && (parseInt(nValorPrecio)>=parseInt(vp[0]) && parseInt(nValorPrecio)<=parseInt(vp[1])))
				{
				res.innerHTML +=`
				<div class="tituloContenido card">
				<table  border=0 rules="all" cellspacing=0 cellpadding=0>
				<tr>
				<td>
					<img src="img/home.jpg" alt="" width="300" height="230" border="0"/>
				</td>
					<td style="FONT-SIZE:13px; COLOR:#000000; LINE-HEIGHT:10px; FONT-FAMILY:Arial,Helvetica,sans-serif" width="500">
					
					<p><b>Direccion: </b>${datos[i].Direccion}</p>
					<p><b>Ciudad: </b>${datos[i].Ciudad}</p>
					<p><b>Telefono: </b>${datos[i].Telefono}</p>
					<p><b>Codigo Postal:</b> ${datos[i].Codigo_Postal}</p>
					<p><b>Tipo:</b> ${datos[i].Tipo}</p>
					<FONT SIZE=2><b>Precio: </b></font><FONT SIZE=4 color='#F4A460'>${datos[i].Precio}</font>
					<br/><br/><br/>
					<div class="divider"></div>
					<br/><br/><br/>
					<p align="right"></font><FONT SIZE=2>VER MAS</font></p>
					
				</td>
				</tr>
				</table> 
				</div>
				`
				}
			}
		}
	
	}
}		

function MostrarTodos() {
	const arreglo = new XMLHttpRequest();
	arreglo.open('GET','data-1.json',true);
	arreglo.send();
	arreglo.onreadystatechange = function(){

		if(this.readyState == 4 && this.status == 200){
			let datos = JSON.parse(this.responseText);
			let res = document.querySelector('#res');
			res.innerHTML = '';
			
			for(let item of datos){
				res.innerHTML +=`
				<div class="tituloContenido card">
				<table  border=0 rules="all" cellspacing=0 cellpadding=0>
				<tr>
				<td>
					<img src="img/home.jpg" alt="" width="300" height="230" border="0"/>
				</td>
					<td style="FONT-SIZE:13px; COLOR:#000000; LINE-HEIGHT:10px; FONT-FAMILY:Arial,Helvetica,sans-serif" width="500">
					
					<p><b>Direccion: </b>${item.Direccion}</p>
					<p><b>Ciudad: </b>${item.Ciudad}</p>
					<p><b>Telefono: </b>${item.Telefono}</p>
					<p><b>Codigo Postal:</b> ${item.Codigo_Postal}</p>
					<p><b>Tipo:</b> ${item.Tipo}</p>
					<FONT SIZE=2><b>Precio: </b></font><FONT SIZE=4 color='#F4A460'>${item.Precio}</font>
					<br/><br/><br/>
					<div class="divider"></div>
					<br/><br/><br/>
					<p align="right"></font><FONT SIZE=2>VER MAS</font></p>
					
				</td>
				</tr>
			</table> 
				</div>
				`
			}
		}
	
	}
	
}
				

				