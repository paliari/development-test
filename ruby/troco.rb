class Troco
  # reais: Valor em reais podendo conter centavos
  # Deve retornar um hash com a quantidadede notas
  def get_qtd_notas(reais)
    qtde_notas = {
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
      '0.01': 0
    }

    # colocar o código aqui, exemplo:
    if reais == 112.1
      qtde_notas[:'100'] = 1
      qtde_notas[:'10'] = 1
      qtde_notas[:'2'] = 1
      qtde_notas[:'0.1'] = 1
    end

    qtde_notas
  end
end
