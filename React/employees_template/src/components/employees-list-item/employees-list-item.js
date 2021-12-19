import './employees-list-item.css'; 

const EmployeesListItem = (props) => {

        const {name, salary, onDelete, onToggleProp, prize, rise } = props;
        
        let classNames = "list-group-item d-flex justify-content-between";
        if (prize) {
            classNames += ' increase';
        }
        if(rise) { 
            classNames += ' like';
        }
    
        return (
            <li className={classNames}>
                <span onClick={onToggleProp}
                    data-toggle="rise"
                    className="list-group-item-label"
                    style={{fontSize: 40, color: 'lightblue'}}>{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary + '$'} />
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        data-toggle="prize"                    
                        onClick={onToggleProp}
                        className="btn-cookie btn-sm ">
                        <i className="fas fa-cookie"></i>
                    </button>
    
                    <button type="button"
                            className="btn-trash btn-sm "
                            onClick={onDelete} >
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
}

export default EmployeesListItem;