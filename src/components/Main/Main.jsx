
import Column from "../Column/Column";
import { Container } from "../Common/Common.styled";
import { MainBlock, MainContent } from "./Main.styled";
const statusList = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",

];
function Main({ cardList, isLoaded }) {
  return (<main className="main">

    <Container>

      <MainBlock>

        <MainContent>
          {
            isLoaded ? 'Loading'
              : statusList?.map((item) => (
                <Column
                  key={item}
                  title={item}
                  cardList={cardList?.filter((card) => card.status === item)}
                />
              )
              )
          }



        </MainContent>
      </MainBlock>
    </Container>
  </main>)
}
export default Main;