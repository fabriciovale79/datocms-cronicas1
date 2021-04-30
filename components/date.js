import { parseISO, format } from 'date-fns'
import {ptBR} from 'date-fns/locale'

export default function Date({ dateString }) {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'LLLL	d, yyyy', { locale: ptBR })}</time>
}
