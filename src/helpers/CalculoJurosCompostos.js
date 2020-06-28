function calcParcelas(valueInvestiment, inputJuros, period) {

    let valorFinanciado = parseFloat(valueInvestiment);
    let qtdParcelas = period;
    let juros = parseFloat(inputJuros);
    let jurosPercent = juros / 100;

    var valorParceladoComJuros;
    var calculedParts = [];
    for (let parcela = 1; parcela <= qtdParcelas; parcela++) {
        let fatJuros = parseFloat(Math.pow((1 + jurosPercent), parcela))
        valorParceladoComJuros = valorFinanciado * (fatJuros);
        let valMinus = valorParceladoComJuros - valorFinanciado;

        var node = document.createElement("li");
        node.setAttribute("class", "list-group-item ");

        var calculedPart = {
            numberPart: parcela,
            value: parseFloat(valorParceladoComJuros).toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.'),
            valueDif: parseFloat(valMinus).toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.'),
            percent: parseFloat(valMinus * 100 / valorFinanciado).toFixed(2)
        };
        calculedParts.push(calculedPart);
    }

    return calculedParts;
}

export { calcParcelas };
