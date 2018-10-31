import React from 'react'

export default class CreateApplications extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          name: "",
          content: ""
      };

      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleInputChange(event) {    
      this.setState({
        [event.target.name]: event.target.value
      });
    }

    handleSubmit(event) {
      event.preventDefault();

      var application = {
        name: this.state.name,
        content: this.state.content
      }
      if (application.name!=="") {
        var listOfApplication = JSON.parse(localStorage.getItem("mainList")) || []
        listOfApplication.push(application)
        localStorage.setItem("mainList", JSON.stringify(listOfApplication));
        
        this.props.history.push('/');
      }
    }

  render() {
  return (
    <div>
    <form onSubmit={this.handleSubmit}>
      <label>
      Name:
      <input
          name="name"
          type="text"
          value={this.state.name}
          onChange={this.handleInputChange} />
      </label> 
      <br />
      <label>
          Content:
          <input
              name="content"
              type="text"
              value={this.state.content}
              onChange={this.handleInputChange} />
      </label>
      <br/>
      <input disabled={!this.state.name} className="btn btn-success" type="submit" value="SUBMIT" />
    </form>
	<br/>
    <button className="btn btn-danger" onClick={()=>{
            this.props.history.push('/');
      }}>CANCEL</button>
    </div>
  )}
}