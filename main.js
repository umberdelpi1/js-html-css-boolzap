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
      finestraChat.append('<div class="line_verde"><div class="chat_verde freccia"><div class="span1"><span>' + msg + '</span><span><i class="fa fa-chevron-down arrow"></i></span></div><div class="box"><span class="dlt">Cancella messaggio</span></div></div></div>')
      inputUtenteMsg.val("")

      setTimeout(
        function(){
          finestraChat.append('<div class="line_bianca"><div class="chat_bianca freccia"><div class="span1"><span><span>Ok ;-)</span><span><i class="fa fa-chevron-down arrow"></i></span></span></div><div class="box"><span class="dlt">Cancella messaggio</span></div></div></div>')
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
  // cancella messaggio:
  // cliccando sul msg appare un menù a tendina
  var frecciaMenu = $('.span1 span i');
  var openClose = $('.box')
  var deleteMsg = $('.line_bianca,.line_verde')

  // frecciaMenu.click(
  //   function(){
  //     $(this).parents('.span1').siblings('.box').toggle();
  //     console.log(frecciaMenu);
  //     // deleteMsg.remove();
  //   }
  // )
  $('.chat').on("click", ".arrow",
     function () {
       $(this).parents('.span1').siblings('.box').toggle();
       console.log(this);
     }
   );

   $('.chat').on("click",".dlt",
     function(){
       $(this).parents(".freccia").remove();
       console.log(this);
     }
   )








  //Click sul contatto mostra la conversazione del contatto cliccato
   // click sul contatto che ha data-attr che corrisponde a stesso data-attr in chat
   // salvo il valore dell'attr e lo usso per dire quale chat è attiva


 // è possibile inserire nuovi messaggi per ogni conversazione [attiva]


 // Cancella messaggio: cliccando sul messaggio appare un menu a tendina che permette di cancellare il messaggio selezionato
   // son riuascito ad agganciarte l'evento sul "delete" potrò dirgli una roba tipo this.padre.cancella();
   $('.right-messages').on("click", ".message",
      function () {
     //   alert("hai cliccato su di me!");
       $(this).hide();
      }

   );














});
