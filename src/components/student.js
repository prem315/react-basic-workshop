import React from 'react';

class Student extends React.Component {
	render() {
		return (
			<li class="list-group-item">
				{this.props.student.name}
				<button class="btn btn-danger btn-css" onClick={() => this.props.deleteStudent(this.props.student)}>
					Delete
				</button>
			</li>
		);
	}
}

export default Student;
