import Header from '../components/Header/Header'
import Wrapper from '../components/Wrapper/Wrapper';
//import PopBrowse from '../components/PopUp/PopBrowse/PopBrowse';
import '../App';
//import PopExit from '../components/PopUp/PopExit/PopExit';
//import PopNewCard from '../components/PopUp/PopNewCard/PopNewCard';
import Main from '../components/Main/Main'
import { appRoutes } from '../lib/appRoutes';
import { Link, Outlet } from 'react-router-dom';

export default function MainPage({ addCard, isLoaded, cards, setError }) {
    return (
        <>
            <Wrapper>
                <Outlet/>
                {/* <PopExit />
                <PopNewCard /> */}
                <Header addCard={addCard} />
                {setError ? (
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