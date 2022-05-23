export interface Bairros {
  id: number;
  descricao: string,
  idCidade: number;
  cidade: {
    id: number,
    nome: string,
    uf: string
    idUf: number
  },
}

/*interface Cidade {
    id: number,
    idUf: number,
    nome: string,
    uf: string
}*/
