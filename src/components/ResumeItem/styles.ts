import styles from 'styled-components'

export const Container = styles.div`
  flex: 1;
`
export const Title = styles.div`
  text-align: center;
  font-weight: bold;
  color: #888;
  margin-bottom: 5px;
`

export const Info = styles.div<{ color?: string}>`
  text-align: center; 
  font-weight: bold;
  color: ${props => props.color ?? '#000'};
`

