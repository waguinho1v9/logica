/**
 * Cálculo da media
 * @author Thales Durães de Lima
 */

 function calcularMedia(){
     let nota1,nota2,media //variáveis do mesmo tipo
     /*
        ParseFloat converter a String da caixa de texto 
        do formulário para um tipo de numérico
        Float (números reais, casas decimais)
        Int (números inteiros)
        Replace (tricar un caractre por outro)
     */
     nota1 = parseFloat(frmMedia.txtNota1.value.replace(",","."))
     nota2 = parseFloat(frmMedia.txtNota2.value.replace(",","."))
     media = (nota1 + nota2) / 2
     frmMedia.txtResultado.value = media
 }
