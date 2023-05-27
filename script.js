(function () {
  // Array de nombres
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  // Recorrer los nombres e imprimir el saludo correspondiente
  for (var i = 0; i < names.length; i++) {
    var name = names[i];

    // Comprobar si el nombre comienza con 'J' o 'j' y elegir la función de saludo adecuada
    if (name.charAt(0).toLowerCase() === 'j') {
      byeSpeaker.speak(name); // Usar la función de despedida para nombres que comienzan con 'J' o 'j'
    } else {
      helloSpeaker.speak(name); // Usar la función de saludo para otros nombres
    }
  }
})();
