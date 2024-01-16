import { PopExitContainer, PopExitWrapper } from "./PopExit.styled";

function PopExit() {
  return (
    <PopExitWrapper
     
    id="popExit">
      <PopExitContainer>

        <div className="pop-exit__block">
          <div className="pop-exit__ttl">
            <h2>Выйти из аккаунта?</h2>
          </div>
          <form className="pop-exit__form" id="formExit" action="#">
            <div className="pop-exit__form-group">
              <button className="pop-exit__exit-yes _hover01" id="exitYes">
                <a href="modal/signin.html">Да, выйти</a>{" "}
              </button>
              <button className="pop-exit__exit-no _hover03" id="exitNo">
                <a href="main.html">Нет, остаться</a>{" "}
              </button>
            </div>
          </form>
        </div>
      </PopExitContainer>
    </PopExitWrapper>
  )
}
export default PopExit;