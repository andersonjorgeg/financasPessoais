import * as C from './styles';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';
import { formatCurrentMonth } from '../../helpers/dateFilter'
import { ResumeItem } from '../ResumeItem'

type Props = {
  currentMonth: string;
  onMonthChange: (newMoth: string) => void;
  income: number;
  expense: number;
}

export const InfoArea = ({ currentMonth, onMonthChange, income, expense }: Props) => {

  // função para fazer o mês retroceder 
  const handlePrevMonth = () => {
    // pegar ano e o mês do parâmetro
    let [year, month] = currentMonth.split('-');
    // converter o mês e o ano para inteiros
    let currentDate = new Date(Number(year), Number(month) -1, 1);
    // subtrair um mês
    currentDate.setMonth(currentDate.getMonth() - 1)
    // converter o mês e o ano para string
    onMonthChange(`${currentDate.getFullYear()} - ${currentDate.getMonth() + 1}`)
  }

  // função para fazer o mês avançar
  const handleNextMonth = () => {
    // pegar ano e o mês do parâmetro
    let [year, month] = currentMonth.split('-')
    // converter o mês e o ano para inteiros
    let currentDate = new Date(Number(year), Number(month) -1, 1);
    // somar um mês
    currentDate.setMonth(currentDate.getMonth() + 1)
    // converter o mês e o ano para string
    onMonthChange(`${currentDate.getFullYear()} - ${currentDate.getMonth() + 1}`)
  }

  return (
    <C.Container>
      <C.MonthArea>
        <C.MonthArrow onClick={handlePrevMonth}>
          <BsFillArrowLeftCircleFill />
        </C.MonthArrow>
          <C.MonthTitle>{formatCurrentMonth(currentMonth)}</C.MonthTitle>
        <C.MonthArrow onClick={handleNextMonth}>
          <BsFillArrowRightCircleFill />
        </C.MonthArrow>
      </C.MonthArea>
      <C.ResumeArea>
        <ResumeItem title="Receitas" value={income} />
        <ResumeItem title="Despesas" value={expense}/>
        <ResumeItem 
          title="Saldo" 
          value={income - expense} 
          color={(
            (income - expense) > 0 ? 'green' : 
            (income - expense) < 0 ? 'red' : 'black'
          )}
        />
      </C.ResumeArea>
    </C.Container>
  ); 
}

