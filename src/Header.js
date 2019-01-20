import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';

export class Header extends Component {
    render () {
        return (
            <AppBar position="sticky">
                <h2>Travel Tools</h2>
            </AppBar>
        )
    }
}