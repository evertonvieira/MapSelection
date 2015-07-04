$(document).ready(function(){
	$('.map').maphilight({
		fill: true,
		fillColor: '065F49',
		fillOpacity: 1,
		stroke: true,
		strokeColor: '065F49',
		strokeOpacity: 0.5,
		strokeWidth: 2,
		fade: true,
		shadow: true,
		shadowX: 4,
		shadowY: 0,
		shadowRadius: 6,
		shadowColor: 'ffffff',
		shadowOpacity: 0.5,
		shadowPosition: 'outside',
		shadowFrom: false
	});


	update("RJ");

	$('.map_estado').mouseover(function(){
		update($(this).attr('id'));
	});

	function update (sigla) {
		var estado = undefined;
		switch (sigla){
			case "RJ":
				estado = "Rio de Janeiro";
			break;
			case "SP":
				estado = "São Paulo";
			break;
			case "ES":
				estado = "Espírito Santo";
			break;
			case "CE":
				estado = "Ceará";
			break;
			case "MG":
				estado = "Minas Gerais";
			break;
			case "RO":
				estado = "Roraima";
			break;
			case "PB":
				estado = "Paraíba";
			break;
			default:
			estado = "Estado não cadastrado!!"
		}

		$(".container h1").empty().append(estado);


	}


});