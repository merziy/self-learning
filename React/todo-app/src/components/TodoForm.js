import React from "react";

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { todoInput: "" };
    }

    handleChange = event => {
        this.setState({ todoInput: event.target.value });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.addTodo(this.state.todoInput);
    }

    render() {
        return (
            <form onSubmit={event => this.handleSubmit(event)}>
                <input 
                    type="text" 
                    placeholder="Add todo" 
                    value={this.state.todoInput}
                    onChange={event => this.handleChange(event)}    
                />
                <input type="submit" value="submit" />
            </form>
        )
    }
}

export default TodoForm;