import { Component } from "react";

import "./app-filter.css";

class AppFilter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            prop: 'all',
            selected: '0'
        };
    } 

    onFilterPropChange = (e) => {
        this.setState({
            prop: e.target.getAttribute('data-prop'),
            selected: e.target.getAttribute('data-btnNum')
        })
        this.props.onUpdateFilter(e.target.getAttribute('data-prop'));
    }

    isActive = (num) => {
        return 'btn ' + ( (parseInt(this.state.selected) === num)  ? 'btn-light' : 'btn-outline-light') 
    }
    render() {
        return (
            <div className="btn-group">
                <button type="button"
                        className={this.isActive(0)}
                        data-prop="all"
                        data-btnNum="0"
                        onClick={this.onFilterPropChange}>
                        Все сотрудники
                </button>
                <button type="button"
                        className={this.isActive(1)}
                        data-prop="onRise"
                        data-btnNum="1"
                        onClick={this.onFilterPropChange}>
                        На повышение
                </button>
                <button type="button"
                        className={this.isActive(2)}
                        data-prop="bigSalary"
                        data-btnNum="2"
                        onClick={this.onFilterPropChange}>
                        З/П больше 1000$
                </button>
            </div>
        )
    }
}

export default AppFilter;