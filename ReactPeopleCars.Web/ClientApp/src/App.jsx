import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Pages/Home';
import AddPerson from './Pages/AddPerson';
import AddCar from './Pages/AddCar';
import DeleteCars from './Pages/DeleteCars';
import Layout from './Layout';

class App extends React.Component {
    render() {
        return (
            <Layout>
                <Route exact path='/' component={Home} />
                <Route exact path='/addperson' component={AddPerson} />
                <Route exact path='/addcar/:personId' component={AddCar} />
                <Route exact path='/deletecars/:personId' component={DeleteCars} />
            </Layout>
        );
    }

};

export default App;