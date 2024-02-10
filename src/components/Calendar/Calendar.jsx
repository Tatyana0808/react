import { format } from 'date-fns';
import { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import ru from "date-fns/locale/ru"
export function Calendar() {
    const [selected, setSelected] = useState ();

    let footer = <p>Please pick a day.</p>;
    if (selected) {
      footer = <p>You picked {format(selected, 'PP', { locale: ru })}.</p>;
    }
    return (
      <DayPicker locale={ru}
        mode="single"
        selected={selected}
        onSelect={setSelected}
        footer={footer}
      />
    );

}