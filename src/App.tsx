import { useState, useEffect } from 'react'
import * as C from './App.styles';

// importando os types
import { Item } from './types/Item';
import { Category } from './types/Category';

// importando os dados
import { items } from './data/items';
import { categories } from './data/categories';

// importando funções helpers
import { getCurrentMoth, filterListByMonth } from './helpers/dateFilter';

// importando os componentes
import { TableArea } from './components/TableArea';
import { InfoArea } from './components/InfoArea';

export const App = ()=> {

  // pegando a lista de items
  const [list, setList] = useState(items);
  // filtrando a lista de items
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  // pegando o ano e a data atual
  const [currentMonth, setCurrentMonth] = useState(getCurrentMoth());
  // pegando a receita
  const [income, setIncome] = useState(0);
  // pegando a despesa
  const [expense, setExpense] = useState(0);
 
  // monitorando a lista de items e o mês atual
  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  // monitorando a lista de items com os valores de receita e despesa
  useEffect(() => {
    let incomeCount = 0;
    let expenseCount = 0;

    for(let i in filteredList) {
      if(categories[filteredList[i].category].expense){
        expenseCount += filteredList[i].value;
      } else {
        incomeCount += filteredList[i].value;
      }
    }

    setIncome(incomeCount);
    setExpense(expenseCount);
  }, [filteredList]);

  // lida com o evento de mudança de mês
  const handleMonthChange = (newMoth: string) => {
    // atualizando o mês
    setCurrentMonth(newMoth);
  }

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>

        {/* área de informações */}
        <InfoArea 
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange} 
          income={income} 
          expense={expense}
        />

        {/* área de inserção de informações */}

        {/* Tabela de itens */}
        <TableArea list={filteredList}/>

      </C.Body>
    </C.Container>
  );
}
