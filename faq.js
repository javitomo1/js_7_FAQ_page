//Traversing de dom
//const btns = document.querySelectorAll('.question-btn');
//
//btns.forEach(function(btn) {
//  btn.addEventListener('click', function(e){
//    const question = e.currentTarget.parentElement.parentElement;
//  question.classList.toggle("show-text");
//  });
//});




//*****************************************************************************************************************************************************************************************************************/
//****************************************************************************************  IMPORTANT  ************************************************************************************************************/

//Los comentarios escritos aqui pueden ser confusos debido a mi poca experiencia con javascript, todo esto está hecho para aprender los conceptos y en mi intento por comprenderlos escribo estos comentarios para repasar el código y entenderlo, si realmente quieres saber como funciona, mira el videotutorial enlazado al proyecto en github

//*****************************************************************************************************************************************************************************************************************/
//*****************************************************************************************************************************************************************************************************************/




//usign selectors inside the element
//Establecemos una variable que apunta a todos los contenedores que tienen la clase .question
const questions = document.querySelectorAll('.question');

//Recorremos con un bucle todos los contenedores, con una función que apunta a cada contenedor. function(question) es el parámetro que apunta a un elemento en concreto por cada vez que el bucle se activa
questions.forEach(function (question) {
  //btn (variable para la declaración de evento) = question(apunta al elemento en concreto donde está el bucle).querySelector(apunta al botón del elemento donde está el bucle)
  const btn = question.querySelector('.question-btn');
  //Declaración del evento
  //Añadimos un evento de clic al btn(botón) y le asignamos una función que se ejecutará con cada clic. Esta función tiene dos declaraciones:
  // 1-para quitar la clase del elemento que no estamos seleccionando al hacer clic, para cuando hay un elemento abierto, este se cierre automáticamente cuando abrimos otro
  // 2-Añade o quita la clase del elemento cuando pulsamos su botón
  btn.addEventListener('click', function() {
    //Declaración 1-Aplicamos forEach(bucle que recorre nuestra variable(todos los contenedores con clase ".question")) a la variable questions y le asignamos una función que apunta a un item(item es cada contenedor que recorre el bucle, es un parámetro, le damos cualquier nombre para identificar el elemento donde apunta el bucle cuando este recorre las opciones disponibles)
    questions.forEach(function(item){
      //Si item no es igual a question, cuando hacemos clic en un item(articulo) que no es question(otro articulo), quita la clase(remove)  *** Me es difícil de explicar esto ***
      if(item !== question){
        item.classList.remove("show-text")
      }
    });
    //Apuntamos al elemento donde apunta el bucle y alternamos la clase
    question.classList.toggle("show-text");
  });
});



//const questions = document.querySelectorAll('.question');
//
//questions.forEach(function (question) {
//  const btn = question.querySelector('.question-btn');
//  btn.addEventListener('click', function() {
//    questions.forEach(function(item){
//      if(item !== question){
//        item.classList.remove("show-text")
//      }
//    });
//    question.classList.toggle("show-text");
//  });
//});
