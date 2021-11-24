// lista de funções para formatar datas

import { Item } from '../types/Item'

// pegar mês e ano atual
export const getCurrentMoth = () => {
  let now = new Date();
  return `${now.getFullYear()}-${now.getMonth() + 1}`;

}

// filtrar por mês e ano
export const filterListByMonth = (list: Item[], date: string): Item[] => {
  // criando uma nova lista
  let newList: Item[] = [];
  // pegar o ano e mês
  let [year, month] = date.split('-');

  // filtrar a lista
  for(let i in list) {
    // verificar se o ano e mês da lista são iguais ao ano e mês passado por parâmetro
    if(list[i].date.getFullYear() === Number(year) && list[i].date.getMonth() + 1 === Number(month)) {
      // adicionar na nova lista
      newList.push(list[i]);
    }
  }

  // retornar a lista filtrada
  return newList;
};
