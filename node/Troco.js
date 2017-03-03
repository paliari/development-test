module.exports = class Troco {
  // reais: Valor em reais podendo conter centavos
  // Deve retornar um objeto com a quantidadede notas
  getQtdeNotas (reais) {
    let qtdeNotas = {
      '100': 0,
       '50': 0,
       '20': 0,
       '10': 0,
        '5': 0,
        '2': 0,
        '1': 0,
      '0.5': 0,
     '0.25': 0,
      '0.1': 0,
     '0.01': 0,
   }

    // colocar o código aqui, exemplo:
    if (reais == 112.1) {
        qtdeNotas['100'] = 1
        qtdeNotas['10'] = 1
        qtdeNotas['2'] = 1
        qtdeNotas['0.1'] = 1
    }

    return qtdeNotas
  }
}
