// JavaScript Document
$(document).ready(function(){
	print_link_html();
	$('[data-toggle="tooltip"]').tooltip(); 
})
//quando seleziono un valore dalla radio box di scelta dell'icona
$( "#sel_icon" ).change(function() {
	//rimuovo la classe che inizia con flaticon-
	$("#costruisci_link").attr('class', function(i, c){
		return c.replace(/(^|\s)flaticon-\S+/g, '');
	});
	//recupero il valore della radio box
	var sel_class = $("input[name='icon_selected']:checked").val();
	//assegno la classe dell'icona al bottone che sto costruendo
	$("#costruisci_link").addClass(sel_class);
	print_link_html();
});

$( "#sel_icon label span" ).click(function(){
	$( "#sel_icon label span" ).removeClass('sel');
	$(this).addClass('sel');
});

//quando seleziono un valore dalla select di scelta del posizionamento dell'icona con quadratino
$( "#sel_pos_icon" ).change(function() {
	//rimuovo la classe che inizia con flaticon-
	$("#costruisci_link").attr('class', function(i, c){
		return c.replace(/(^|\s)ico_pos_\S+/g, '');
	});
	//recupero il valore della select
	var sel_class = this.value;
	//assegno la classe dell'icona al bottone che sto costruendo
	$("#costruisci_link").addClass(sel_class);
	print_link_html();
});



//quando seleziono un valore dalla select di scelta dell'animazione/transizione del link
$( "#sel_effect" ).change(function() {
	//rimuovo la classe che inizia con flaticon-
	$("#costruisci_link").attr('class', function(i, c){
		return c.replace(/(^|\s)effect_\S+/g, '');
	});
	//recupero il valore della select
	var sel_class = this.value;
	//assegno la classe dell'icona al bottone che sto costruendo
	$("#costruisci_link").addClass(sel_class);
	print_link_html();
});

$( "#print_link_html" ).click(function(){
	
	console.log("copio negli appunti");
	copyToClipboard("#print_link_html");
});

//funzione per stampare in un div il codice html del link
function print_link_html(){
	var htmlOutput = $('.code_print').html();
	//console.log("htmlOutput = "+htmlOutput);
	$('#print_link_html').text(htmlOutput);
}
//funzione per copiare negli appunti
function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
}

	