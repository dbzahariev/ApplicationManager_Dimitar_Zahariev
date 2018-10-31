import React, { Component } from 'react';
import {Route, Link } from 'react-router-dom';
import HomeContainer from './component/home';
import CreateApplicationComponent from './component/createApplication/createAplication';
import EditApplicationComponent from './component/editApplication/editApplication';

class App extends Component {
    render() {
        return (
            <div className="App">
                <main className="content">
                    <Link className="btn btn-primary" to="/">Home</Link>
                    <Route path='/' exact component={HomeContainer} />
                    <Route path='/create' exact component={CreateApplicationComponent} />
                    <Route path='/edit/:id' exact component={EditApplicationComponent} />
                </main>
            </div>
        );
    }
}

export default App;
