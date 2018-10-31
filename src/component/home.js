import React from 'react';
import Application from './application'

export default class Home extends React.Component {
    state = {
        applicationsList: [],
        isEdit: false
      };
    
      remApplication = (index)=>{
        let listOfApplication =  JSON.parse(localStorage.getItem("applicationsList")) || []
        listOfApplication.splice(index,1)
        
        localStorage.setItem("applicationsList", JSON.stringify(listOfApplication));
        window.location.reload(true);
      }
    
      editApplication=(index)=>{
        this.setState({'isEdit': index})
        this.props.history.push('/edit/' + index)
      }
    
      componentDidMount = () => {
        this.setState({applicationsList: JSON.parse(localStorage.getItem("applicationsList")) || []})
      }
    
      render() {
        return (
          <div className="App container-fluid">
            <button className="btn btn-success" type='button' onClick={() => { this.props.history.push('/create') }}>
                Create application
            </button>

            <div className="list">
                <ul className="row">
                    {this.state.applicationsList.map((application, index)=>{
                      return <Application key={index}
                      editApplication={this.editApplication.bind(application,index)} 
                      remApplication={this.remApplication.bind(application, index)} 
                      applications={application} />})}
                </ul>
            </div>
          </div>
        );
      }
}