// Écrivez votre code JavaScript ici.

const ul =  document.querySelector('ul') ;
 const  ajouter  =  document.querySelector ( 'input' ) ;
 const bouton =  document.querySelector('button') ;

 bouton . onclick  =  function ( )  {

  let valuecurrent  =  ajouter.value ;

  ajouter.value  =  "" ;

 const li = document.createElement('li');
 const span = document.createElement('span');
 const button = document.createElement('button');

 li. appendChild ( span) ;
 li. appendChild ( button ) ;

 span.textContent= valuecurrent;
 button.textContent= "supprimer";

 ul.appendChild(li);


 button. onclick  =  function(){
 ul . removeChild ( li ) ;
input . focus ( ) ;
 }
 input . focus ( ) ;
}


