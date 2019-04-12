/**
 * Conversão Real para Dolar
 * @author Pedro e Wagner
 */

 function converterDolar() {
     let Real, Dolar
     Real = parseFloat(frmDinheiro.vlrReal.value.replace(",","."))
     Dolar = parseFloat(frmDinheiro.vlrDolar.value.replace(",","."))
     Resultado = Dolar * Real
     frmDinheiro.vlrResultado.value = Resultado
 }