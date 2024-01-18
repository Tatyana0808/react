
import Header from './components/Header/Header';

import Wrapper from './components/Wrapper/Wrapper';
import PopBrowse from './components/PopUp/PopBrowse/PopBrowse';
import './App.css';
import PopExit from './components/PopUp/PopExit/PopExit';
import PopNewCard from './components/PopUp/PopNewCard/PopNewCard';
import Main from './components/Main/Main';
import { useEffect, useState } from 'react';
import { cardList } from './data';
import { GlobalStyle } from './Global.styled';

function App() {
  const [cards, setCards] = useState(cardList);
  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(()=> {
   setTimeout(()=>{
    setIsLoaded(false);
   }, 2000)
  }, [])


  function addCard() {
    setCards([
      ...cards,
      { 
        id: cards.length + 1,
        theme: "Web Design",
        title: "Название задачи",
        date: "30.10.23",
        status: "Без статуса",

   }
    ])

  }


  return (
  <>
   <GlobalStyle/> 
    <Wrapper>
     <PopBrowse/>
     <PopExit/>
     <PopNewCard/>
     <Header addCard={addCard}/>
     <Main isLoaded={isLoaded} cardList = {cards}/>
  

    </Wrapper>
  </>
  );
  


}

export default App;
