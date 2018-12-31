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