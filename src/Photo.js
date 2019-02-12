import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Icon from "@material-ui/core/Icon";
import 'font-awesome/css/font-awesome.min.css';
import { Route , Link } from 'react-router-dom'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const styles = theme => ({
  Photo : {
      display: "inline-block",
      width: "25%",
      height: "60%",
      marginLeft : "5%",
      marginRight : "3%",
      float : "left",
      marginTop : "2%"
  },
  imgdiv : {
      display: "inline-block",
      width: "100%",
      height: "70%"
  },
   actionsdiv : {
      display: "inline-block",
      width: "100%",
      height: "10%"
  },
   postMessagediv : {
      display: "inline-block",
      width: "100%",
      height: "7%",
      fontSize :"16px",
      fontFamily : "lato",
      paddingLeft  : "0%",
      color : "#525273"
  },
  actionslikediv : {
      display: "inline-block",
      width: "25%",
      height: "100%",
      marginLeft : "12%",
      paddingLeft  : "5%",
      boxShadow : "1px 1px #e4d9d9",
      lineHeight : 2,
      border : "1px solid #e8e4e4"
  },
  actionscommentsdiv : {
      display: "inline-block",
      width: "25%",
      height: "100%",
      marginLeft : "4%",
      paddingLeft  : "5%",
      boxShadow : "1px 1px #e4d9d9",
      lineHeight : 2,
      border : "1px solid #e8e4e4"
  },
 actionslikenumberdiv :{
      display: "inline-block",
      width: "50%",
      height: "100%", 
 },
actionscommentsnumberdiv :{
      display: "inline-block",
      width: "50%",
      height: "100%"
},
actionscommentsicondiv :{
      display: "inline-block",
      width: "38%",
      height: "100%",
      "text-align" : "right",
      paddingRight : "2px"
 },
actionslikeicondiv :{
      display: "inline-block",
      width: "38%",
      height: "100%",
      "text-align" : "right",
      paddingRight : "2px"
},
imgouterDiv : {
    position : "relative"
}
});

class Photo extends Component {
   constructor(props) {
    super(props);
  }
    render() {
    const { classes } = this.props;
    const data = this.props.data;
    const post = this.props.post;
   // const post = this.props.data.posts[postid]
    const comment = this.props.data.comments[post.postid]
    return (
      <div className={classes.Photo}>    
        <div className = {classes.imgouterDiv}>
            <Link to = { `/photo/:${post.postid}`}> 
                    <img src = {post.postphotosrc} ></img>
            </Link>
            <ReactCSSTransitionGroup
                  transitionName="like"
                  transitionEnterTimeout={500}
                  transitionLeaveTimeout={500}>
                    <span  key = {post.likes} className ="likes-heart">
                            {post.likes}
                    </span>
            </ReactCSSTransitionGroup>        
        </div>
        <div className = {classes.postMessagediv}>
            <span> {post.posttag} </span>
        </div>   
        <div className = {classes.actionsdiv}>     
            <div className = {classes.actionslikediv}>
                <div  key = {post.likes} onClick = {data.increment.bind(null , post.postid)} className = {classes.actionslikeicondiv}>
                    <i className ="fa fa-heart-o" aria-hidden="true"></i>
                </div>
                <div className = {classes.actionslikenumberdiv}>
                    {post.likes}
                </div>
                </div>
                <div className = {classes.actionscommentsdiv}>
                    <div onClick = {data.addComment} className = {classes.actionscommentsicondiv}>
                        <i className="fa fa-comment" aria-hidden="true"></i>
                    </div>
                <div className = {classes.actionscommentsnumberdiv}>
                            {comment.length}
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Photo);
