import { format } from 'date-fns';

import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import ru from "date-fns/locale/ru"

export function Calendar({ selected, setSelected, disabled }) {


  let footer = <p>Please pick a day.</p>;
  if (selected) {
    footer = <p>You picked {format(selected, 'PP', { locale: ru })}.</p>;
  }
  return (
    <DayPicker
      disabled={disabled}
      locale={ru}
      mode="single"
      selected={selected}
      onSelect={setSelected}
      footer={footer}
    />
  );

}