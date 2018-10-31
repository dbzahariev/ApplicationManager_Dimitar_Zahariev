import React from 'react';
import Application from './application'

export default class Home extends React.Component {
    state = {
        mainList: [],
        isEdit: false
      };
    
      remApplication = (index)=>{
        let listOfApplication =  JSON.parse(localStorage.getItem("mainList")) || []
        listOfApplication.splice(index,1)
        
        localStorage.setItem("mainList", JSON.stringify(listOfApplication));
        window.location.reload(true);
      }
    
      editApplication=(index)=>{
        this.setState({'isEdit': index})
        this.props.history.push('/edit/' + index)
      }
    
      componentDidMount = () => {
        this.setState({mainList: JSON.parse(localStorage.getItem("mainList")) || []})
      }
    
      render() {
        return (
          <div className="App container-fluid">
            <button className="btn btn-success" type='button' onClick={() => { this.props.history.push('/create') }}>
                Create application
            </button>

            <div className="list">
                <ul className="row">
                    {this.state.mainList.map((application, index)=>{
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