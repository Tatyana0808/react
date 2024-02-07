import Card from "../Card/Card";
import { Cards, ColumnTitle, MainColumn } from "./Column.styled";

function Column({ title, cardList }) {
  return (

    <MainColumn>

      <ColumnTitle >
        <p>{title}</p>
      </ColumnTitle>
      
      <Cards>  
        {cardList?.map((card) => (
          <Card name={card.title}
            id={card.id}
            theme={card.theme}
            date={card.date}
            key={card.id} />

        ))}


      </Cards>
    </MainColumn>
  )
}
export default Column;