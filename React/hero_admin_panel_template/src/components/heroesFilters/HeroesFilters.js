import { useEffect } from 'react';
import {useHttp} from '../../hooks/http.hook';
import { useDispatch, useSelector} from 'react-redux';
import Spinner from '../spinner/Spinner';
import classNames from 'classnames';

import { fetchFilters } from '../../actions';
import { activeFilterChanged } from './filtersSlice';

const HeroesFilters = () => {
    const dispatch = useDispatch();
    const {request} = useHttp();
    const {filters, filtersLoadingStatus, activeFilter} = useSelector(state => state.filters);

    useEffect(() => {
        dispatch(fetchFilters(request));
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