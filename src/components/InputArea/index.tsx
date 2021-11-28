import { useState } from 'react';
import * as C from './styles';
import { Item } from '../../types/Item';

import { categories } from '../../data/categories';

type Props = {
  onAdd: (item: Item) => void;
}

export const InputArea = ({ onAdd }: Props) => {
  // usando o useState para armazenar os valores dos inputs
  const [dateField, setDateField] = useState('');
  const [categoryField, setCategoryField] = useState('');
  const [titleField, setTitleField] = useState('');
  const [valueField, setValueField] = useState(0);

  // Object.keys retorna um array com as chaves do objeto
  let categoryKeys = Object.keys(categories);

  // função para lidar com o evento onClick
  const handleAddEvent = () => {
    
    // validação de campos
    
    // array de erros
    let errors: string[] = [];

    // verificando se o campo dateField está vazio
    if (isNaN(new Date(dateField).getTime())) {
      // se estiver vazio, adiciona um erro ao array de erros
      errors.push('Data inválida!');
    }
    // verificando as chaves do objeto categories
    // includes verifica se o valor está contido no array
    if (!categoryKeys.includes(categoryField)) {
      // se estiver vazio, adiciona um erro ao array de erros
      errors.push('Categoria inválida!');
    }
    // verificando se o campo titleField está vazio
    if (titleField === '') {
      // se estiver vazio, adiciona um erro ao array de erros
      errors.push('Título inválido!');
    }
    // verificando se o campo valueField está vazio
    if (valueField === 0) {
      // se estiver vazio, adiciona um erro ao array de erros
      errors.push('Valor inválido!');
    }

    // se o array de erros estiver vazio, adiciona o item ao array de itens
    if (errors.length > 0) {
      // se o array de erros não estiver vazio, exibe os erros
      alert(errors.join('\n'));
    } else {
      // se o array de erros estiver vazio, adiciona o item ao array de itens
      onAdd({
        date: new Date(dateField),
        category: categoryField,
        title: titleField,
        value: valueField,
      });
      // limpa os campos do formulário
      clearFields();
    }
  }

  // função para limpar os campos do formulário
  const clearFields = () => {
    setDateField('');
    setCategoryField('');
    setTitleField('');
    setValueField(0);
  }

  return(
    <C.Container> 

      {/* input para a data */}
      <C.InputLabel>
        <C.InputTitle>Data</C.InputTitle>
        <C.Input 
          type="date"
          value={dateField}
          // lida com o evento onChange
          // e.target.value armazena o valor
          onChange={(e) => setDateField(e.target.value)}
        />
      </C.InputLabel>

      {/* input para a categoria */}
      <C.InputLabel>
        <C.InputTitle>Categoria</C.InputTitle>
        <C.Select
          value={categoryField}
          // lida com o evento onChange
          // e.target.value armazena o valor 
          onChange={(e) => setCategoryField(e.target.value)}
        >
          {/* cria um option para cada categoria */}
          <option>Selecione uma categoria</option>
          {/* cria um option para cada categoria */}
          {categoryKeys.map((key) => (
            <option key={key} value={key}>{categories[key].title}</option>
          ))}
        </C.Select>
      </C.InputLabel>
      
      {/* input para o título */}
      <C.InputLabel>
        <C.InputTitle>Título</C.InputTitle>
        <C.Input
          type="text"
          value={titleField}
          // lida com o evento onChange
          // e.target.value armazena o valor
          onChange={(e) => setTitleField(e.target.value)}
        />
      </C.InputLabel>

      {/* input para o valor */}
      <C.InputLabel>
        <C.InputTitle>Valor</C.InputTitle>
        <C.Input
          type="number"
          value={valueField}
          // lida com o evento onChange
          // e.target.value armazena o valor
          onChange={(e) => setValueField(parseFloat(e.target.value))}
        />
      </C.InputLabel>

      {/* botão para adicionar o item */}
      <C.InputLabel>
        <C.InputTitle>Adicionar</C.InputTitle>
        <C.Button onClick={handleAddEvent}>Adicionar</C.Button>
      </C.InputLabel>
    </C.Container>
 ); 
}

