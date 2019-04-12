/**
 * Conversao C>F
 * @author Pedro e Wagner
 */

 function converterTemp(){
     let Celsius
     Celsius = parseFloat(frmTemp.vlrCelsius.value.replace(",","."))
     Fahrenheit = Celsius * 1.8 + 32
     frmTemp.vlrFahrenheit.value = Fahrenheit
     
 }