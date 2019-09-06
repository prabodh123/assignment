import React from "react";
import Login from '../components/login';
import { Scene, Router } from "react-native-router-flux";
import EmployeeList from '../components/employeeList';

export default () => (
    <Router>
        <Scene key='root'>
            <Scene key='login' initial component={Login} hideNavBar={true} />
            <Scene key='employeeList' component={EmployeeList} title="Employee List" />
        </Scene>
    </Router>
);