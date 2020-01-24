import React from 'react';
import Student from './student';
import './students.css';

class List extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			list: [
				{ name: 'Prem', id: 1 },
				{ name: 'Divye', id: 2 },
				{ name: 'Rishabh', id: 3 },
				{ name: 'Daxeel', id: 4 },
				{ name: 'Harsh', id: 5 }
			],
			textValue: ''
		};
	}

	changeText = (event) => {
		this.setState({
			textValue: event.target.value
		});
	};

	addStudent = (event) => {
		event.preventDefault();
		const obj = {
			name: this.state.textValue,
			id: this.state.list.length + 1
		};

		this.setState({
			list: [ ...this.state.list, obj ]
		});
	};

	deleteStudent = (student) => {
		this.setState({
			list: this.state.list.filter((stu) => stu.id !== student.id)
		});
	};

	render() {
		return (
			<div className="container">
				<h1 className="student-heading">Student List</h1>
				<form>
					<div class="form-group">
						<label for="exampleInputEmail1">Student name</label>
						<input
							class="form-control"
							type="text"
							value={this.state.textValue}
							onChange={this.changeText}
						/>
					</div>
				</form>

				<button type="submit" class="btn btn-primary" onClick={this.addStudent}>
					Add
				</button>
				<div classNam="row">
					<div class="card">
						<ul class="list-group list-group-flush">
							{this.state.list.map((student) => {
								return <Student student={student} deleteStudent={this.deleteStudent} />;
							})}
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default List;
