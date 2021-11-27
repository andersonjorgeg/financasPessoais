import * as C from './styles';
import { formatCurrency } from '../../helpers/dateFilter'

type Props = {
  title: string;
  value: number;
  color?: string;
}

export const ResumeItem = ({ title, value, color }: Props) => {
  return (
    <C.Container>
      <C.Title>{title}</C.Title>
      <C.Info color={color}>{formatCurrency(value)}</C.Info>
    </C.Container>
  );
}
