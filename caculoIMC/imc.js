/**
 * Cálculo do IMC
 * @author Wagner Bento
 */

 function calcularImc(){
     let peso, altura, imc
     peso = parseFloat(frmImc.txtPeso.value.replace(",","."))
     altura = parseFloat(frmImc.txtAltura.value.replace(",","."))
     imc = peso / (altura * altura)
     frmImc.txtImc.value = imc.toFixed(2)
 }
