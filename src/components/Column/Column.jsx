import Card from "../Card/Card";
import { ColumnTitle, MainColumn } from "./Column.styled";

function Column({ title, cardList }) {
  return (

    <MainColumn>

      <ColumnTitle >
        <p>{title}</p>
      </ColumnTitle>
      <div className="cards">
        {cardList.map((card) => (
          <Card name={card.title}
            theme={card.theme}
            date={card.date}
            key={card.id} />

        ))}


      </div>
    </MainColumn>
  )
}
export default Column;