import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Photo from './Photo'
import Comments from './Comments'

const styles = theme => ({
  Single : {
      display: "inline-block",
      width: "100%",
      height: "100%"
  }
});

class Single extends Component {
    render() {
    const { classes } = this.props;
    const i = this.props.location.pathname.split(':')[1]
    const post = this.props.posts[i];
    return (
      <div className={classes.Single}>
            <Photo post = {post} data = {this.props}/> 
            <Comments postid = {post.postid} data = {this.props}/> 
      </div>
    );
  }
}

export default withStyles(styles)(Single);
