import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({data, onDelete, onTogglePrize, onToggleRise}) => {
    const elements = data.map(item => {
        const {id, ...itemProps} = item 
        return (
            <EmployeesListItem 
            key={id}
            {...itemProps}
            onDelete={() => onDelete(id)} 
            onTogglePrize = {() => onTogglePrize(id)}
            onToggleRise = {() => onToggleRise(id)}/> 
        )
    });
    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;