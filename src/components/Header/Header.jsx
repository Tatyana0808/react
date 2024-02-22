import { useState } from "react";
import { Container } from "../Common/Common.styled";
import { HeaderBlock, HeaderWrapper, HeaderNav, HeaderLogo, HeaderBtnMainNew, HeaderUser } from "./Header.styled";
import { Link } from "react-router-dom";
import { appRoutes } from "../../lib/appRoutes";
function Header({ addCard, userData, toggleTheme}) {
  const [isOpened, setIsOpened] = useState(false);
  function togglePopUp() {
    setIsOpened((prev) => !prev)
  }
  return (

    <HeaderWrapper>

      <Container>

        <HeaderBlock >
          <HeaderLogo>

            <a href="" target="_self">
              <img src="images/logo.png" alt="logo" />
            </a>
          </HeaderLogo>
          <HeaderLogo>
            <a href="" target="_self">
              <img src="images/logo_dark.png" alt="logo" />
            </a>
          </HeaderLogo>

          <HeaderNav>

            <HeaderBtnMainNew id="btnMainNew" onClick={addCard}>

              Создать новую задачу
            </HeaderBtnMainNew>
            
            <HeaderUser 
            onClick={togglePopUp}>
              {userData.login}
            </HeaderUser>
            {isOpened && <div
              className="header__pop-user-set pop-user-set"

            >
              {/* <a href="">x</a> */}
              <p className="pop-user-set__name">{userData.name}</p>
              <p className="pop-user-set__mail">{userData.login}</p>
              {/* <div className="pop-user-set__theme">
                <p>Темная тема</p>
                <input type="checkbox" className="checkbox" name="checkbox" />
              </div> */}
              <button type="button" className="_hover03">
                <Link to={appRoutes.EXIT}>Выйти</Link>
              </button>
            </div>}

          </HeaderNav>
        </HeaderBlock>
      </Container>
    </HeaderWrapper>
  )
}
export default Header;