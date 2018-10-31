import React from 'react'

export default class application extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: ""
        }
    }

    componentDidMount = ()=>{
        this.setState({
            name: this.props.applications.name
        })
    }

    render = () => {
        return (
            <li className="col-12">
                <div className="name" >Name: {this.state.name}</div>
                <button className="btn" onClick={()=>{this.props.remApplication(this)}}>delete</button>
                <button className="btn" onClick={()=>{this.props.editApplication(this)}}>edit</button>
             </li>
        )
    }
}