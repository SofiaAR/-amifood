$(document).ready(function() {
    $('select').material_select();
  });
    var cont = $('#container');
    
    $('#categorias').on('change', function() {
    	var selection = $('#categorias').val();
      //cont.text(selection);
      if( selection === "china") {
      cont.html('<p class="white-text center-align"> Tu seleccion es</p>Comida China<img class="opcion waves-effect waves-light  modal-trigger" href="#modal1 " src="https://i.pinimg.com/736x/9f/25/0c/9f250c70403d08c46b44e1ab3fe3da93--oriental.jpg"/>');
      }
      if( selection === "peruana") {
      cont.html('<p class="white-text center-align" >Tu seleccion es</p> <img class="opcion waves-effect waves-light  modal-trigger" href="#modal2 " src="https://www.peru.travel/Portals/_default/Images/News/rec_causa.jpg"/>');
      }
      if( selection === "rapida") {
      cont.html('<p class="white-text center-align" > Tu seleccion es</p> <img class="opcion waves-effect waves-light modal-trigger" href="#modal3 " src="https://i.pinimg.com/736x/24/33/5a/24335a8cfdff9078db4af33bb1c10214--pizza-appetizers-great-appetizers.jpg"/><img class="opcion" src="http://www.cocina33.com/');
      }
})

   $(function(){
   setTimeout(function() {
      $('#splash').fadeOut(500);
   }, 1000);
})

   $(document).ready(function(){
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
  });