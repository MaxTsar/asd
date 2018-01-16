import React, { Component } from 'react';
import Todo from './components/todo-item';
import './app.css';
import todo from './todo';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: this.props.todos
		};
		this.click = this.click.bind(this);
	}

	click(id) {
		const todos = this.state.todos.map((item, i) => {
			if (i === id) {
				item.checked = !item.checked;
			}
			return item;
		});
		console.log(todos);
		this.setState({todos});
		console.log(id);
	}

	render() {
		return (
			<div className="app">
				{
					this.state.todos.map((item, i) => {
						return <Todo key={i}
									id={i}
									click={this.click}
									checked={item.checked}
									title={item.title} />
					})
				}
			</div>
		);
	}
}

export default App;
