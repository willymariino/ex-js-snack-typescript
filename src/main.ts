/*
🏆 Snack 1
Hai ricevuto un dato generico da un'API, ma non sai di che tipo sia… Il tuo compito è controllare il tipo del dato e stampare il valore in modo corretto.

Se è una stringa: stampala in maiuscolo
Se è un numero: moltiplicalo per due e stampalo
Se è un booleano: stampa “Sì” o “No” in base al suo valore
In tutti gli altri casi: stampa “Tipo non supportato”
*/


let valore: unknown | undefined

function controllaValore() {

  if (typeof valore === "string") {
    console.log(valore.toUpperCase())

  } else if (typeof valore === "number") {
    console.log(valore * 2)

  } else if (typeof valore === "boolean") {
    console.log(valore ? "si" : "no")

  } else {
    console.log("tipo non supportato")
  }
}

/*

*/


/*

*/