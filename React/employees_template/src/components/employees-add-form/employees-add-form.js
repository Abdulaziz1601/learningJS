import {Component} from 'react';
import './employees-add-form.css';

class EmployeesAddForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: '',
            isNameValid: false,
            isSalaryValid: false,
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        const {name, salary, isNameValid, isSalaryValid} = this.state;
        if(name.split("").length < 3) {
            this.setState({isNameValid: false});
        } else {
            this.setState({isNameValid: true});
        }

        if(salary < 50) {
            this.setState({isSalaryValid: false});
        } else {
            this.setState({isSalaryValid: true});
        }
        
    }

    onSubmit = (e) => {
        e.preventDefault();
        
        this.props.onAdd(this.state.name, this.state.salary);
        this.setState({
            name:'',
            salary: ''
        });
    }
    render() {
        const {name, salary, isNameValid, isSalaryValid} = this.state;
        let classNames_1 = "form-control new-post-label ";
        let classNames_2 = "form-control new-post-label ";
        if(!isNameValid) {
            classNames_1 += 'is-invalid ';
        } else {
            classNames_1 += 'is-valid ';
        }
        if(!isSalaryValid) {
            classNames_2 += 'is-invalid ';
        } else {
            classNames_2 += 'is-valid ';
        }
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={this.onSubmit}>
                    <div className='input-group has-validation'>
                        <input type="text"
                            className={classNames_1}
                            placeholder="Как его зовут?"
                            name="name"
                            value={name}
                            onChange={this.onValueChange} />
                        <div class="invalid-feedback">
                            Name has to be more than 3 chars.
                        </div>
                    </div>
                    <div className='input-group has-validation'>
                        <input type="number"
                            className={classNames_2}
                            placeholder="З/П в $?"
                            name="salary"
                            value={salary}
                            onChange={this.onValueChange} />
                        <div class="invalid-feedback">
                            Salary has to be more than 50$.
                        </div>
                    </div>

                    <button type="submit"
                            className="btn btn-outline-light" >Добавить</button>
                </form>
            </div>
        )
   }
}

export default EmployeesAddForm;