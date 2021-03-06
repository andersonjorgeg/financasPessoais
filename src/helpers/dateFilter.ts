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

//formatar a data
export const formatDate = (date: Date): string => {
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  return `${addZeroToDate(day)}/${addZeroToDate(month)}/${year}`;
}

// formatar numero menor que 10 para data
const addZeroToDate = (numero: number): string => numero < 10 ? `0${numero}` : `${numero}`;

//formatar moeda
export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value);
};

//formatar mês
export const formatCurrentMonth = (currentMonth: string): string => {
  // pegar mês e ano atual
  let [year, month] = currentMonth.split('-');
  // criar uma lista de meses do ano
  let months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
  // retornar o mês em português e o ano
  return `${months[Number(month) - 1]} de ${year}`;
};
