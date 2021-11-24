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

export const App = ()=> {

  // pegando a lista de items
  const [list, setList] = useState(items);
  // filtrando a lista de items
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  // pegando o ano e a data atual
  const [currentMonth, setCurrentMonth] = useState(getCurrentMoth());

  // monitorando a lista de items e o mês atual
  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>

        {/* área de informações */}

        {/* área de inserção de informações */}

        {/* Tabela de itens */}
        <TableArea />

      </C.Body>
    </C.Container>
  );
}
