import * as C from './styles';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';
import { formatCurrentMonth } from '../../helpers/dateFilter'

type Props = {
  currentMonth: string;
}

export const InfoArea = ({ currentMonth }: Props) => {
  return (
    <C.Container>
      <C.MonthArea>
        <C.MonthArrow>
          <BsFillArrowLeftCircleFill />
        </C.MonthArrow>
          <C.MonthTitle>{formatCurrentMonth(currentMonth)}</C.MonthTitle>
        <C.MonthArrow>
          <BsFillArrowRightCircleFill />
        </C.MonthArrow>
      </C.MonthArea>
      <C.ResumeArea>
        ...
      </C.ResumeArea>
    </C.Container>
  ); 
}

