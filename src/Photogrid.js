import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Photo from './Photo'

const styles = theme => ({
  Photogrid : {
      display: "inline-block",
      width: "100%",
      height: "100%"
  }
});

class Photogrid extends Component {    
 constructor(props) {
    super(props);
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.Photogrid}>
         {this.props.posts.map((post,i) => <Photo post= {post} data = {this.props}/>)}
      </div>
    );
  }
}

export default withStyles(styles)(Photogrid);
