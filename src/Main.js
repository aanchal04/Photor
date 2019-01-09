import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Route , Link } from 'react-router-dom'
import Single from './Single';
import Photogrid from './Photogrid';
import { withRouter } from "react-router-dom";
import { compose } from 'redux';
import {Provider} from 'react-redux'
import store , {history} from './store'

const styles = theme => ({
  mainContainer : {
      display: "inline-block",
      width: "100%",
      height: "100%"
  },
   headerContainer : {
      display: "inline-block",
      width: "100%",
      height: "10%"
  },
  bodyContainer : {
      display: "inline-block",
      width: "100%",
      height: "90%"
  },
  headerText : {
     fontSize : "45px",
     fontFamily : "roboto",
     textAlign : "center",
     fontWeight : "bold",
     color : "#ce8f8f",
     lineHeight : "1.5"
  }
});


class Main extends Component {
  render() {
    const { classes } = this.props;
    const Photogridconst = (props) => {
      return (
        <Photogrid 
          {...props}
        />
      );
    }
    
    const Singlegridconst = (props) => {
      return (
        <Single 
          {...props}
        />
      );
    }
    return (
      <div className={classes.mainContainer}>
            <div className={classes.headerContainer}>
                <div className={classes.headerText}>
                    <Route>
                        <Link to = "/">
                            <span> Instagram </span>
                        </Link>
                    </Route>
                </div>
            </div>
            <div className={classes.bodyContainer}>
                <Route exact path="/" render={rouecomponent => {
                        return Photogridconst(this.props);}} ></Route>
                <Route path = "/photo/:Id" render={rouecomponent => {
                        return Singlegridconst(this.props);}}></Route>
            </div>
      </div>
    );
  }
}

export default withRouter(compose(
    withStyles(styles)
)(Main));
