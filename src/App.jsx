

import { useEffect, useState } from 'react';
import { cardList } from './data';
import { GlobalStyle } from './Global.styled';
import MainPage from './pages/MainPage';
import { Route, Routes } from 'react-router-dom';
import { appRoutes } from './lib/appRoutes';
import CardPage from './pages/CardPage';

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
   <Routes>
    <Route path={appRoutes.CARD} element={<CardPage/>}/>
    <Route path={appRoutes.MAIN} element={<MainPage/>}/>
    <Route path={appRoutes.EXIT} element={<PopExitPage/>}/>
    <Route path={appRoutes.LOGIN} element={<LoginPage/>}/>
    <Route path={appRoutes.REGISTER} element={<RegisterPage/>}/>
    <Route path={appRoutes.NOT_FOUND} element={<NotFoundPage/>}/>
   </Routes>

  </>
  );
  


}

export default App;
