import React, { Component } from "react";
import {
    Dropdown }
    from 'react-native-material-dropdown';

class Choose extends Component {
    render(){
        let data = [{
            value: 'Cebuano (Cebu)'
        },{
            value: 'Ilokano (Ilocos)'
        }];

        return(
            <Dropdown
                    data={data}
                />
        );
    }

module.exports {Choose};