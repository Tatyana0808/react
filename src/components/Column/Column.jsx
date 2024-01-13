import Card from "../Card/Card";
import { MainColumn } from "./Column.styled";

function Column({ title, cardList }) {
  return (

    <MainColumn>
      <div className="column__title">
        <p>{title}</p>
      </div>
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