import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({data}) => {
    const elements = data.map(({name, salary, prize}) => {
        return (
            <EmployeesListItem name={name} salary={salary} prize={prize} />
        )
    });
    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;