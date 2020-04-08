$( document ).ready(function() {

// icona microfono
var microfono = $(".fas.fa-microphone");
// icona paper plane
var paperPlane = $(".start_mess .fas.fa-paper-plane");


// dove prendo il mess quindi nella finestra delle chat
var finestraChat = $('.chat');
// dove recupero il mess lasciato nell'input dall'utente
var inputUtenteMsg = $('.start_msg');
// dove voglio che l'evento si appende / sull'icona
var iconaInvioMsg = $('.start_mess');


var iniziaChat = $('.box_inizia_chat input');

// eseguo l'hide del microfono
$(".esecuzione_mess input").focus(function(){
  microfono.hide();
  paperPlane.show();
  // alert("Buona notte al secchio")
});
// eseguo lo show del paper plane
$(".start_msg").blur(function(){
    microfono.show();
    paperPlane.hide();
  })


iconaInvioMsg.click(
  function(){
    var msg = inputUtenteMsg.val()
    // console.log(msg);
    finestraChat.append('<div class="line_verde"><div class="chat_verde"><div class="span1"><span>' + msg + '</span></div></div></div>')
    inputUtenteMsg.val("")

    setTimeout(
      function(){
        finestraChat.append('<div class="line_bianca"><div class="chat_bianca"><div class="span1"><span><span>Ok ;-)</span></span></div></div></div>')
      },1000)
    }

)

iniziaChat.keyup(
  function(){
    var textUser = iniziaChat.val().toLowerCase();
    console.log(textUser);


    var contatti = $('.contatto_chat');
    contatti.each(
      function() {
        var nomeContatti = $(this).find('#nome_contatto').text().toLowerCase();





        if (nomeContatti.includes(textUser)) {
          $(this).show()
        } else {
          $(this).hide()
        }
      }
    )
  }
)













});
