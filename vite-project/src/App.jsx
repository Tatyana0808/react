
import Header from '../../css/components/Header/Header';
import Main from '../../css/components/Main/Main';
import Wrapper from '../../css/components/Wrapper/Wrapper';
import PopBrowse from '../../css/components/PopUp/PopBrowse/PopBrowse';
import './App.css';
import PopExit from '../../css/components/PopUp/PopExit/PopExit';
import PopNewCard from '../../css/components/PopUp/PopNewCard/PopNewCard';

function App() {


  return (<Wrapper>
    <PopBrowse/>
    <PopExit/>
    <PopNewCard/>
    <Header />
    <Main />

  </Wrapper>);



}

export default App;
