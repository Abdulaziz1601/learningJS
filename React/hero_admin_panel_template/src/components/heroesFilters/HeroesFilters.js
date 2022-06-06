import { useEffect } from 'react';
import {useHttp} from '../../hooks/http.hook';
import { useDispatch, useSelector} from 'react-redux';
import Spinner from '../spinner/Spinner';
import classNames from 'classnames';

import { activeFilterChanged, filtersFetchingError, filtersFetched, filtersFetching,  } from '../../actions';
// Задача для этого компонента:
// Фильтры должны формироваться на основании загруженных данных
// Фильтры должны отображать только нужных героев при выборе
// Активный фильтр имеет класс active
// Изменять json-файл для удобства МОЖНО!
// Представьте, что вы попросили бэкенд-разработчика об этом

const HeroesFilters = () => {
    const dispatch = useDispatch();
    const {request} = useHttp();
    const {filters, filtersLoadingStatus, activeFilter} = useSelector(state => state);

    useEffect(() => {
        dispatch(filtersFetching());
        request("http://localhost:3001/filters")
            .then(data =>  dispatch(filtersFetched(data)))
            .catch(() => dispatch(filtersFetchingError()));
    }, []);

    const renderFilters = (filtersArr) => {
            return filtersArr.map(({name, label, className}) => {
            const classes = classNames('btn', className, { active: activeFilter===name });
            return <button
                        key={name}
                        id={name}
                        className={classes}
                        onClick={() => dispatch(activeFilterChanged(name))}
                        >{label}</button>
        });
    }
    
    const elements = renderFilters(filters);

    if(filtersLoadingStatus === 'loading') {
        return <Spinner />
    } else if(filtersLoadingStatus === 'error') {
        return <h5 className="text-center mt-5">Ошибка Filters</h5>
    }

    return (
        <div className="card shadow-lg mt-4">
            <div className="card-body">
                <p className="card-text">Отфильтруйте героев по элементам</p>
                <div className="btn-group">
                    {elements}
                </div>
            </div>
        </div>
    )
}

export default HeroesFilters;