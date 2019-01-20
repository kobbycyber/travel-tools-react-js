import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import CircularProgress from '@material-ui/core/CircularProgress';
import { database } from './firebase';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Header } from './Header';

class App extends Component {
  state = {
    produtos: [],
    isLoading: false
  }
  
  //Carregando itens
  componentDidMount(){
    this.setState({
      isLoading: true
    });
    this.produtos = database.ref('produtos');
    this.produtos.on('value', snapshot => {
      this.setState({
        produtos: snapshot.val(),
        isLoading: false
      })
    })
  }

  home = () => {
    const keys = Object.keys(this.state.produtos); 
    return (
      <Grid container>
        {/* HEADER */}
        <Grid item xs={12}>
          <Header />
        </Grid>
        {/* HEADER */}
        {/* LOADING */}
        <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        item xs={12}>
        {
          this.state.isLoading && <CircularProgress style={{
            left: 0,
            right: 0,
            marginTop: 10
          }} />
        }
        </Grid>
        {/* LOADING */}
        {/* CONTEÚDO */}
        <Grid item xs={12}>      
        <List>
        {keys.map( value => {
          return (
            <ListItem>
            <ListItemText primary={this.state.produtos[value].nome} secondary={this.state.produtos[value].url} />
            </ListItem>
          );
        }) }
        </List>
        </Grid>
        {/* CONTEÚDO */}
        {/* FLOAT BUTTON */}
        <Fab color="primary" aria-label="Add" style={{
          margin: 0,
          top: 'auto',
          right: 20,
          bottom: 20,
          left: 'auto',
          position: 'fixed'
        }}>
        +
        </Fab>
        {/* FLOAT BUTTON */}
      </Grid>
    )
  }

  add = () => {
    return (
      <Grid container>
        {/* HEADER */}      
        <Grid item xs={12}>
        <Header />
        </Grid>
        {/* HEADER */}
      </Grid>
    )
  }

  render() {
    return (
      <Router>
        <div>
        <Route exact path="/" component={this.home} />
        <Route path="/add" component={this.add} />
        </div>
    </Router>
    );
  }

  
}

export default App;
