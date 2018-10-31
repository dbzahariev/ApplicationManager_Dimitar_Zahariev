import React from 'react'

export default class EditApplications extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        name: "",
        email: "",
        age: "",
        phoneNumber: "",
        preferredWayOfCommunication: "",
        englishLevel: "",
        availableToStart: "",
        technicalSkillsAndCourses: "",
        shortPersonalPresentation: "",
        studyFromHome: false,
      };

      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    
  handleInputChange(event) {    
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  toggleChange = () => {
    this.setState({
      studyFromHome: !this.state.studyFromHome
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    var application = {
      name: this.state.name,
      email: this.state.email,
      age: this.state.age,
      phoneNumber: this.state.phoneNumber,
      preferredWayOfCommunication: this.state.preferredWayOfCommunication,
      englishLevel: this.state.englishLevel,
      availableToStart: this.state.availableToStart,
      technicalSkillsAndCourses: this.state.technicalSkillsAndCourses,
      shortPersonalPresentation: this.state.shortPersonalPresentation,
      studyFromHome: this.state.studyFromHome.toString(),
    }

    var listOfApplication = JSON.parse(localStorage.getItem("applicationsList")) || []
    listOfApplication[this.props.match.params.id] = (application)
    localStorage.setItem("applicationsList", JSON.stringify(listOfApplication));
    
    this.props.history.push('/');
  }

  componentDidMount=()=>{
    if (JSON.parse(localStorage.getItem("applicationsList"))[this.props.match.params.id] === undefined) {
      this.props.history.push('/create');
      return
    }

    var application = JSON.parse(localStorage.getItem("applicationsList"))[this.props.match.params.id]
    console.log(application)
    // this.setState(JSON.parse(application))
    this.setState(JSON.parse(localStorage.getItem("applicationsList"))[this.props.match.params.id])

  }

  render() {
  return (
    <div>
      <form onSubmit={this.handleSubmit} name="form">
        <span id="error">{this.state.error}</span>
        <br/>
        <label>Name:
          <input name="name" type="text" required value={this.state.name} onChange={this.handleInputChange} />
        </label>
        <br />
        <label>Email:
          <input name="email" type="text" required value={this.state.email} onChange={this.handleInputChange} />
        </label>
        <br />
        <label>Age:
          <input name="age" min="0" max="100" type="number" required value={this.state.age} onChange={this.handleInputChange} />
        </label>
        <br />
        <label>Phone Number:
          <input name="phoneNumber" type="text" required value={this.state.phoneNumber} onChange={this.handleInputChange} />
        </label>
        <br />
          <span>Preferred Way of Communication: </span>
          <label>Email: 
            <input type="radio" name="preferredWayOfCommunication" required value="email" checked={this.state.preferredWayOfCommunication === "email"} onChange={this.handleInputChange} />
          </label>
          <span> </span>
          <label>Phone: 
            <input type="radio" name="preferredWayOfCommunication" required value="phone" checked={this.state.preferredWayOfCommunication === "phone"} onChange={this.handleInputChange} />
          </label>
          <br/>
        <label>English Level:
        <select  value={this.state.englishLevel} required name="englishLevel" onChange={this.handleInputChange}>
          <option value="">select</option>
          <option value="A1">A1</option>
          <option value="A2">A2</option>
          <option value="B1">B1</option>
          <option value="B2">B2</option>
          <option value="C1">C1</option>
          <option value="C2">C2</option>
        </select>
        </label>
        <br/>
        <label>Available to Start:
        <input type="date" name="availableToStart" value={this.state.availableToStart} onChange={this.handleInputChange} required />
        </label>
        <br />
          <label>Technical Skills and Courses:
          <input name="technicalSkillsAndCourses" type="text" value={this.state.technicalSkillsAndCourses} onChange={this.handleInputChange} />
        </label>
        <br />
        <label>Short Personal Presentation (e.g. reason for joining the program):
          <input name="shortPersonalPresentation" type="text" value={this.state.shortPersonalPresentation} onChange={this.handleInputChange} />
        </label>
        <br />
        <label>Study from home:
          <input type="checkbox" name="studyFromHome"  
          checked={this.state.studyFromHome}
          onChange={this.toggleChange} />
        </label>
        <br />
        <input className="btn btn-success" type="submit" value="SUBMIT" />
      </form>
	    <br/>
      <button className="btn btn-danger" onClick={()=>{this.props.history.push('/');}}>CANCEL</button>
    </div>
  )}
}