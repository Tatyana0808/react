import Column from "../Column/Column";
const statusList = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
  
];
function Main(){
    return (<main className="main">
    <div className="container">
      <div className="main__block">
        <div className="main__content">
          {statusList.map((item) => (<Column 
          key={item}
          title={item}/>)
          )}
        
          
        </div>
      </div>
    </div>
  </main>)
}
export default Main;