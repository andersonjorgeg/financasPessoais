import * as C from './styles';
import { Item } from '../../types/Item';
import { TableItem } from '../TableItem'

// declarando o tipo de dado que será passado como props
type Props = { 
  list: Item[];
}

export const TableArea = ({ list }: Props) => {
  return (
    <C.Table>
      <thead>
        <tr>
          {/* usando props para alterar a largura*/}
          <C.TableHeadColumn width={100}>Data</C.TableHeadColumn>
          <C.TableHeadColumn width={130}>Categoria</C.TableHeadColumn>
          <C.TableHeadColumn>título</C.TableHeadColumn>
          <C.TableHeadColumn width={150}>Valor</C.TableHeadColumn>
        </tr>
      </thead>
      <tbody>
        {/* fazendo um map para retornar os itens */}
        {list.map((item, index) => (
        <TableItem key={index} item={item}/>
        ))}
      </tbody>
    </C.Table>
  );
}
