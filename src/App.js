import React from 'react';

const averageCard = (grades) => {
  let average = 0
  let sum = 0
  for (let i = 0; i < grades.assignments.length; i++) {
    sum += grades.assignments[i].assignmentGrade
  }
  average = sum / grades.assignments.length
  average = average.toFixed(2)
  return (
    <h3>Average: {average}</h3>
  )
}


const assignmentCard = (item) => {
  return (
    <div>
      <li>{item.assignmentName}</li>
      <li>{item.assignmentGrade}</li>
    </div>
  )
}

const courseCard = (crs) => {
  return (
    <div>
      <h3>{crs.courseName}</h3>   {/* BY101 */}
      <ul>
        {crs.assignments.map(assignmentCard)}
        {averageCard(crs)}
      </ul>
    </div>
  )
}

const coursesContainer = (courses) => courses.map(courseCard)

class App extends React.Component {

  state = {
    courseName: "BY101",
    assignments: [
      {
        assignmentName: "Quiz1",
        assignmentGrade: 100
      },
      {
        assignmentName: "Quiz2",
        assignmentGrade: 100
      },
      {
        assignmentName: "Quiz3",
        assignmentGrade: 80
      }
    ]
  }

  addNewGrade = (newGradeValue) => {

    //this.state.todoList.listItems.push(newItemText)
    //create a copy of our todo list
    let grades = { ...this.state.assignments } //[...this.state.todoList.listItems]

    grades.assignmentName.push(newGradeValue)
    this.setState({ grades })
  }

  submissonHandler = (evnt) => {
    evnt.preventDefault();
    this.props.addNewGrade(this.state.addNewGrade)
  }

  render() {
    console.log(this.grades)
    return (
      <div>
        <h1>Homework Tracker</h1>
        {coursesContainer([this.state])}
        <Reservation 
          addNewGrade={this.assignments}
          someText="asdf"
        />
        {/* <form onSubmit={this.submissonHandler}>
          <input
            type="text" placeholder="grades"
            value={this.state.grades}
            onChange={this.inputChangeHandler} />
          <input type="submit" value="add item" />
        </form> */}
      </div>
    )
  }
}

class Reservation extends React.Component {
  state ={
    
  assignmentName: " ",
    assignmentGrade: 90
  }


handleInputChange =  (event) => {
  const target = event.target;
  const value = target.value;
  const name = target.name;

  this.setState({
    [name]: value
  });
}

render() {
  return (
    <form>onSubmit={this.handleFormSubmission}
      <label>
        assignment Name:
        <input
          name="assignmentName"
          type="text"
          value={this.state.assignmentName}
          onChange={this.handleInputChange} />
      </label>
      <br />
      <label>
        assignment Grade
        <input
          name="assignmentGrade"
          type="number"
          value={this.state.assignmentGrade}
          onChange={this.handleInputChange} />
          
      </label>
      <input type="submit" value="add item" />
    </form>
  );
}
}
















export default App;