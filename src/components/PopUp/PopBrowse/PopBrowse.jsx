import { Link, useNavigate, useParams } from "react-router-dom";
import { PopBrowseBlock, PopBrowseContainer, PopBrowseContent, PopBrowseContents, PopBrowseStatusStatus, PopBrowseTopBlock } from "./PopBrowse.styled";
import { useContext, useEffect, useState } from "react";
import { Calendar } from "../../Calendar/Calendar";
import { deleteTask, getTasks, addTasks, editTasks } from "../../../api";

import { useUser } from "../../../hooks/useUser";
import { appRoutes } from "../../../lib/appRoutes";
import { CardsContext } from "../../../contexts/cards";


function PopBrowse() {

  const [storedValue, setStoredValue] = useState({});
  const [isEdit, setIsEdit] = useState(false)

  const cancelClick = () => {
    //setModalData(storedValue)
    setStoredValue({})
    setIsEdit(false)
  }

  //const [card, setCard] = useState
  const navigate = useNavigate();
  const [selected, setSelected] = useState();
  const { userData } = useUser();
  const { cards, setCards } = useContext(CardsContext);
  const { cardId } = useParams()
  console.log(cardId);
  const card = cards.find(el => el._id === cardId);
  const [status, setStatus] = useState(card.status)
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setNewTask({
      ...newTask,
      [name]: value,
    });
  };
 
const handleEditMode = () => {

  setIsEdit(!isEdit);

};

  const [newTask, setNewTask] = useState({
    title: card.title,
    topic: card.topic,
    description: card.description,
    date: card.date,
    status: card.status,
  });

  const statuses = ["Без статуса", "Нужно сделать", "В работе", "Тестирование", "Готово"]
  const addCard = async () => {
    let newCard = {
      ...newTask, data: selected
    }
    console.log(newCard);
    await addTasks({ token: userData.token, title: newCard.title, topic: newCard.topic, status: newCard.status, description: newCard.description })

    //не работает окно добавления карточки
    //не корректно работает удаление
    //ошибка регистрации
    // 1. контекст для карточки . копировать как user. не из localstorage
    // 2. адаптировать под получение данных из контекста
    // 3. функция добавления карточки.
    // 4. setcards -> данные из context
    // 5. редактирование задачи

    getTasks({ token: userData.token })
      .then((data) => {
        setCards(data.tasks);
      })
  };


  useEffect(() => {
    setNewTask({
      ...newTask,
      date: selected,
    });
  }, [selected])

  function editTaskHandler() {
    setIsEdit(true)
    editTasks({ id: cardId, token: userData.token, title: newTask.title, date: newTask.date, description: newTask.description, status: newTask.status, topic: newTask.topic })
  }



  return (<>
    <PopBrowseContent id="popBrowse">
      <PopBrowseContainer>

        <PopBrowseBlock>
          <PopBrowseContents>
            <PopBrowseTopBlock>
              <h3 className="pop-browse__ttl">Название задачи:{card.title}</h3>
              <div className="categories__theme theme-top _orange _active-category">
                <p className="_orange">{card.topic}</p>
              </div>

            </PopBrowseTopBlock>
            <PopBrowseStatusStatus>
              <p className="status__p subttl">Статус</p>
              <div className="status__themes">
                {isEdit ? (statuses.map((el, item) => (
                  <div onClick={() => setStatus(el.status)}
                    key={item}
                    className={`status__theme ${el === card.status ? '_gray' : ""}`}>
                    <p>{el}</p>
                  </div>
                ))

                ) : (<div
                  className="status__theme_gray">
                  <p>{card.status}</p>
                </div>)
                }



              </div>
            </PopBrowseStatusStatus>
            <div className="pop-browse__wrap">
              <form
                className="pop-browse__form form-browse"
                id="formBrowseCard"
                action="#"
              >
                <div className="form-browse__block">
                  <label htmlFor="textArea01" className="subttl">
                    Описание задачи
                  </label>
                  <textarea value={newTask.description}
                    onChange={handleInputChange}
                    className="form-browse__area"
                    name="description"
                    id="textArea01"
                    readOnly=""
                    placeholder="Введите описание задачи..."
                  //defaultValue={""}
                  />
                </div>
              </form>

              <Calendar selected={selected} setSelected={setSelected} />

            </div>

            <div className="pop-browse__btn-browse ">


              {isEdit && <>


                <div className="btn-group">

                  <button className="btn-edit__edit _btn-bg _hover01"onClick={handleEditMode}>
                    <a href="#">Сохранить</a>
                  </button>
                  <button className="btn-edit__edit _btn-bor _hover03" onClick={cancelClick}>
                    <a href="#">Отменить</a>
                  </button>
                  <button
                    onClick={() => {
                      deleteTask({ id: cardId, token: userData.token }).then(() => {
                        return getTasks({ token: userData.token })

                      })
                        .then((data) => {
                          setCards(data.tasks);
                          navigate(appRoutes.MAIN)
                        })
                    }}
                    className="btn-edit__delete _btn-bor _hover03"
                    id="btnDelete"
                  >
                    <a href="#">Удалить задачу</a>
                  </button>
                </div>
                <Link to={appRoutes.MAIN}>
                  <button className="btn-edit__close _btn-bg _hover01">
                    Закрыть
                  </button>
                </Link>




              </>}

              {!isEdit && <>
                <div className="btn-group">
                  <button onClick={editTaskHandler} className="btn-browse__edit _btn-bor _hover03">
                    <a href="#">Редактировать задачу</a>
                  </button>
                  <button
                    onClick={() => {
                      deleteTask({ id: cardId, token: userData.token }).then(() => {
                        return getTasks({ token: userData.token })

                      })
                        .then((data) => {
                          setCards(data.tasks);
                          navigate(appRoutes.MAIN)
                        })
                    }}

                    className="btn-browse__delete _btn-bor _hover03">
                    <a href="#">Удалить задачу</a>
                  </button>
                </div>
                <Link to={appRoutes.MAIN}>
                  <button className="btn-browse__close _btn-bg _hover01">
                    Закрыть
                  </button>
                </Link>


              </>}





            </div>




          </PopBrowseContents>
        </PopBrowseBlock>

      </PopBrowseContainer>
    </PopBrowseContent>

  </>)
}
export default PopBrowse;
