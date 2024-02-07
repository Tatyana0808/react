

import { useEffect, useState } from 'react';
import { cardList } from './data';
import { GlobalStyle } from './Global.styled';
import  MainPage  from './pages/MainPage';
import { Route, Routes } from 'react-router-dom';
import { appRoutes } from './lib/appRoutes';
import  CardPage  from './pages/CardPage';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import { getTasks } from './api';
//import PopExitPage from './pages/PopExitPage';
//import NotFoundPage from './pages/NotFoundPage';

function App({userData}) {
 
  
  const [userData, setUserData] = useState(null)

  const [cards, setCards] = useState(cardList);
  const [isLoaded,setIsLoaded] = useState(true);

  useEffect(() => {
   getTasks({token: userData.token})
  .then((data) => {
    console.log(data.tasks);
    setCards(data.tasks);
  }) 
  .then(() =>{
    setIsLoaded(false);
  })
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
      <GlobalStyle />
      <Routes>
        <Route element={<PrivateRoute user={userData} />}>

          <Route path={appRoutes.MAIN} element={<MainPage userData={userData}
           isLoaded={isLoaded}
           cards={cards} 
           addCard={addCard}/>} >
            <Route path={`${appRoutes.CARD}/:cardId`} element={<CardPage />} />
          </Route>
        </Route>
        <Route path={appRoutes.CARD} element={<CardPage />} />
        {/* <Route path={appRoutes.EXIT} element={<PopExitPage />} /> */}
        <Route path={appRoutes.LOGIN} element={<LoginPage setUserData={setUserData}/>} />
        <Route path={appRoutes.REGISTER} element={<RegisterPage />} />
        {/* <Route path={appRoutes.NOT_FOUND} element={<NotFoundPage />} /> */}
      </Routes>

    </>
  );



}

export default App;
