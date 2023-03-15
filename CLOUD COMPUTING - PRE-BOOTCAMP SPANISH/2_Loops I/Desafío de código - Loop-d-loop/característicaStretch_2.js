/*¿Cómo sabemos que necesitamos un bucle aquí? 
  porque se repite una condicion hasta que ocurra un evento 
¿Cuál es el punto de partida del bucle?
  en el km 0
  
¿Cuándo debe detenerse el bucle?
  cuando se alcanzan los 10km
¿Cómo sabrá parar?
  se le indica en la condicion del bucle seguir iterando siempre y cuando no se llegue a los 10km
¿Cuál es el incremento para cada iteración del bucle?
  1
  
¿Qué variables necesitamos?
  la cantidad de km recorridos
*/

var km=0;

while(km<10){
    km++
    if(km%3==0){
        console.log("caramelo")
    }
    
}
