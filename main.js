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
    // alert("funziono???")
  });
  // eseguo lo show del paper plane
  $(".esecuzione_mess input").blur(function(){
      microfono.show();
      paperPlane.hide();
  })


  iconaInvioMsg.click(
    function(){
      var msg = inputUtenteMsg.val();
      var div = $('.container_cont_chat.active');

      // ******************************************HANDLEBARS INIZIO
      var source = $('#msg-template').html();
      var template = Handlebars.compile(source);

      var context = { "msg": msg, "line": "line_verde" };
      var html = template(context);


      // console.log(msg);
      div.find('.chat').append(html);
      inputUtenteMsg.val("");

      setTimeout(
        function(){
          var msg = "ok !";
          var context = { "msg": msg, "line": "line_bianca" };
          var html = template(context);

          div.find('.chat').append(html);
        },1000)
    }
  )
// ******************************************HANDLEBARS FINE
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
       // $(this).parents(".freccia").html('<i class="fas fa-ban"></i> Questo messaggio è stato eliminato').css('background','rgba(120,120,120,.75)').css('color','white').css('font-size','10px');
       // console.log(this);
       $(this).parents(".freccia").html('<i class="fas fa-ban"></i> Questo messaggio è stato eliminato').addClass('msgcancellato');
    }
  )

  $('.contatto_chat').click(
    function(){

       var data = $(this).data('conversazione');

       $('.contatto_chat').removeClass('active');
       $(this).addClass('active');
       $('.container_cont_chat').removeClass('active');
       $('.container_cont_chat').eq(data).addClass('active');
    }
  );
});




  //Click sul contatto mostra la conversazione del contatto cliccato
   // click sul contatto che ha data-attr che corrisponde a stesso data-attr in chat
   // salvo il valore dell'attr e lo usso per dire quale chat è attiva


 // è possibile inserire nuovi messaggi per ogni conversazione [attiva]


 // Cancella messaggio: cliccando sul messaggio appare un menu a tendina che permette di cancellare il messaggio selezionato
   // son riuascito ad agganciarte l'evento sul "delete" potrò dirgli una roba tipo this.padre.cancella();
