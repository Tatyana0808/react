import Card from "../Card/Card";

function Column ({title}){
  return(
    <div className="main__column column">
            <div className="column__title">
              <p>{title}</p>
            </div>
            <div className="cards">
              <Card name={"карточка"}
              theme={"тема"}
              date={"28.12.23"}/>
              <Card name={"карточка2"}
              theme={"тема2"}
              date={"28.12.23 2"}/>
              
              
            </div>
          </div>
  )  
}
export default Column;