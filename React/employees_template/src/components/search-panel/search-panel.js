import { Component } from 'react';
import './search-panel.css';

class SearchPanel extends Component {

    constructor(props) {
        super(props);

        this.state = {
            term: ''
        };
    }

    onValueChange = (e) => {
        this.setState({
            term: e.target.value
        });
        this.props.onUpdateSearch(e.target.value); // e.target.value - gives error values
    }

    render() {
        return (
            <input type="text"
                    className="form-control search-input"
                    placeholder="Найти сотрудника"
                    value={this.state.term}
                    onChange={this.onValueChange}/>
        )
    }
  
}

export default SearchPanel;