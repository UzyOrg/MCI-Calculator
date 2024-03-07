const ResumenPlazos = (plazo, pagoMensual, divElement, monto, tasas) => {
  divElement.innerHTML = "";
  let pagoMensualFormated = pagoMensual;

  let totalConIntereses = monto;
  let tasa = tasas.tasa_12m;
  if (plazo == 3) {
    tasa = tasas.tasa_3m;
  }
  if (plazo == 6) {
    tasa = tasas.tasa_6m;
  }
  if (plazo == 9) {
    tasa = tasas.tasa_9m;
  }
  if (plazo == 12) {
    tasa = tasas.tasa_12m;
  }
  if (plazo == 15) {
    tasa = tasas.tasa_15m;
  }
  if (plazo == 18) {
    tasa = tasas.tasa_15m;
  }
  console.log(tasa);
  let interes = monto * tasa;
  let capital = pagoMensual - interes;
  let DRestante = monto - capital;
  for (let i = 1; i <= plazo; i++) {
    totalConIntereses -= capital;
    const tempElement = document.createElement("div");
    tempElement.innerHTML = ` <div class="pago-resumen-container">
        <div class="pago-container">
            <p>${i}</p>
            <div class="pago">
                <p>${FormatearNumeroAPesos(pagoMensualFormated)} + IVA</p>
                <p>Capital: ${FormatearNumeroAPesos(capital)}</p>
                <p>Interés: ${FormatearNumeroAPesos(interes.toFixed(2))}</p>
            </div>
        </div>
        <p>${FormatearNumeroAPesos(i == plazo ? 0.00 : Math.abs(totalConIntereses))}</p>
    </div>
`;
    const newElement = tempElement.firstElementChild;
    divElement.appendChild(newElement);
    interes = DRestante * tasa;
    capital = pagoMensual - interes;
    DRestante -= capital;
  }
};
