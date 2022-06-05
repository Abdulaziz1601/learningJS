import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { newHeroAdded } from '../../actions';
import {useHttp} from '../../hooks/http.hook';
import {v4 as uuidv4} from 'uuid';
// Задача для этого компонента:
// Реализовать создание нового героя с введенными данными. Он должен попадать
// в общее состояние и отображаться в списке + фильтроваться
// Уникальный идентификатор персонажа можно сгенерировать через uiid
// Усложненная задача:
// Персонаж создается и в файле json при помощи метода POST
// Дополнительно:
// Элементы <option></option> желательно сформировать на базе
// данных из фильтров

const HeroesAddForm = () => {
    const {request} = useHttp();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [element, setElement] = useState('');
    const dispatch = useDispatch();
    const { filters } = useSelector(state => state);

    const onFormSubmitted = (e) => {
        e.preventDefault();

        const id = uuidv4();
        const newHero = {id, name, description, element};

        request("http://localhost:3001/heroes", 'POST', JSON.stringify(newHero))
            .then(() => dispatch(newHeroAdded(newHero)))
            .catch((err) => console.log(err));

        setName('');
        setDescription('');
        setElement('');
    }
    return (
        <form className="border p-4 shadow-lg rounded" onSubmit={onFormSubmitted}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label fs-4">Имя нового героя</label>
                <input 
                    required
                    type="text" 
                    name="name" 
                    className="form-control" 
                    id="name" 
                    placeholder="Как меня зовут?"
                    value={name}
                    onChange={(e) => setName(e.target.value)}/>
            </div>

            <div className="mb-3">
                <label htmlFor="text" className="form-label fs-4">Описание</label>
                <textarea
                    required
                    name="text" 
                    className="form-control" 
                    id="text" 
                    placeholder="Что я умею?"
                    style={{"height": '130px'}}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}/>
            </div>
 
            <div className="mb-3">
                <label htmlFor="element" className="form-label">Выбрать элемент героя</label>
                <select 
                    required
                    className="form-select" 
                    id="element" 
                    name="element"
                    value={element}
                    onChange={(e) => setElement(e.target.value)}>
                    {
                        filters.map(({label, name}, i) => i !== 0 ? 
                            <option value={name}>{label}</option> :
                            <option >Я владею элементом...</option>)
                    }
                </select>
            </div>

            <button
                type="submit"
                className="btn btn-primary">
                    Создать</button>
        </form>
    )
}

export default HeroesAddForm;