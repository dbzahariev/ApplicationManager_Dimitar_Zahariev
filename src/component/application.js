import React from 'react'

export default class application extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            content: ""
        }
    }

    componentDidMount = ()=>{
        this.setState({
            name: this.props.applications.name,
            content: this.props.applications.content
        })
    }

    render = () => {
        return (
            <li className="col-12">
                <div className="name" onClick={()=>{this.props.editApplication(this)}}>Name: {this.state.name}</div>
                <button className="btn" onClick={()=>{this.props.remApplication(this)}}>delete</button>
             </li>
        )
    }
}