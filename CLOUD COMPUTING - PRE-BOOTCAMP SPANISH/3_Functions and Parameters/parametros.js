function greet( CountDooku ){

    if( CountDooku == true ){
        console.log( "¡Voy por ti, Dooku!" );
    }
    return [ "Anakin", "9:30" ];

}

var saluda = greet( true );
console.log("buenos dias", saluda[0], saluda[1]);
