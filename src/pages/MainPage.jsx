import Header from '../components/Header/Header'
import Wrapper from '../components/Wrapper/Wrapper';
//import PopBrowse from '../components/PopUp/PopBrowse/PopBrowse';
import '../App';
//import PopExit from '../components/PopUp/PopExit/PopExit';
//import PopNewCard from '../components/PopUp/PopNewCard/PopNewCard';
import Main from '../components/Main/Main'
import { appRoutes } from '../lib/appRoutes';
import { Link, Outlet } from 'react-router-dom';
import { useUser } from '../hooks/useUser';
import { getTasks } from '../api';
import { useContext, useEffect, useState } from 'react';
import { CardsContext } from '../contexts/cards';



export default function MainPage() {

    const {userData} = useUser();
    
  
    const {cards, setCards} = useContext(CardsContext);
    const [isLoaded,setIsLoaded] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
     getTasks({token: userData?.token})
    .then((data) => {
      console.log(data.tasks);
      setCards(data.tasks);
    }) 
    .then(() =>{
      setIsLoaded(false);
    })
    .catch((error) => {
    setError(error.message);
    }) 
    }, [userData?.token])
  
  
    function addCard() {
      setCards([
        ...cards,
        {
          _id: cards.length + 1,
          theme: "Web Design",
          title: "Название задачи",
          date: "30.10.23",
          status: "Без статуса",
  
        }
      ])
  
    }




    // const [theme, setTheme] = useState('light');
    // const toggleTheme = () => {
    //     if (theme === 'light'){
    //         setTheme('dark');
    //     }else {
    //         setTheme('light');
    //     }
    // };

    return (
        <>
            <Wrapper>
                <Outlet/>
                {/* <PopExit />
                <PopNewCard /> */}
                <Header addCard={addCard} 
                 userData={userData} 
                />
                {error ? (
                   <p style={{ color: "red"}}>{setError}</p>
                ) : (
                <Main isLoaded={isLoaded} cardList={cards} />
                )}
                <Link to={appRoutes.LOGIN}>Войти</Link>
                <br/>
                <Link to={appRoutes.REGISTER}>Зарегистрироваться</Link>


            </Wrapper>
        </>
    );
}