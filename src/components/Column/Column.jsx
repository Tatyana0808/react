import Card from "../Card/Card";
import { Cards, ColumnTitle, MainColumn } from "./Column.styled";

function Column({ title, cardList }) {
 // console.log(cardList[0].id);
  return (

    <MainColumn>

      <ColumnTitle >
        <p>{title}</p>
      </ColumnTitle>
      
      <Cards>  
        {cardList?.map((card) => (
          <Card name={card.title}
            id={card._id}
            theme={card.theme}
            date={card.date}
            key={card._id} />

        ))}


      </Cards>
    </MainColumn>
  )
}
export default Column;