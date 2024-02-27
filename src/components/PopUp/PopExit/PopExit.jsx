import { Link } from "react-router-dom";
import { PopExitBlock, PopExitContainer, PopExitTtl, PopExitWrapper } from "./PopExit.styled";
import { appRoutes } from "../../../lib/appRoutes";

function PopExit() {
  return (
    <PopExitWrapper

      id="popExit">
      <PopExitContainer>

        <PopExitBlock>
          <PopExitTtl>
            <h2>Выйти из аккаунта?</h2>
          </PopExitTtl>
          <form className="pop-exit__form" id="formExit" action="#">
            <div className="pop-exit__form-group">
              <button className="pop-exit__exit-yes _hover01" id="exitYes">
                <Link to={appRoutes.LOGIN}>Да, выйти</Link>{" "}
              </button>
              <button className="pop-exit__exit-no _hover03" id="exitNo">
                <Link to={appRoutes.MAIN}>Нет, остаться</Link>{" "}
              </button>
            </div>
          </form>
        </PopExitBlock>
      </PopExitContainer>
    </PopExitWrapper>
  )
}
export default PopExit;