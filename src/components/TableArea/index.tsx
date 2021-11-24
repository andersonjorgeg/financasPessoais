import * as C from './styles';

export const TableArea = () => {
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

      </tbody>
    </C.Table>
  );
}
