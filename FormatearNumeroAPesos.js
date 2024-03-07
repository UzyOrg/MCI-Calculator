function FormatearNumeroAPesos(number){
    return formattedNumber = new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(number);
}