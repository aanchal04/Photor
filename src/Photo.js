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
      marginTop : "1%",
      "margin-bottom" : "1%",
      background : "linear-gradient(to bottom, #ece9e6, #fafafa)",
      "float" : "left",
      "text-align" : "center",
      "text-decoration": "none",
      "-webkit-box-shadow": "0 4px 6px rgba(0, 0, 0, .3)",
      "-moz-box-shadow" : "0 4px 6px rgba(0,0,0,.3)",
      "box-shadow" : "0 4px 6px rgba(0,0,0,.3)",
      "-webkit-transition" : "all .15s linear",
      "-moz-transition" : "all .15s linear",
      "transition" : "all .15s linear",
      "z-index" : "0",
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
      height: "14%",
      fontSize :"16px",
      fontFamily : "lato",
      paddingLeft  : "0%",
      color : "#525273",
      "border-bottom": "1px solid #80808038",
      "border-bottom-left-radius": "300px",
      "border-bottom-right-radius": "300px",
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
      width: "11%",
      height: "10%",
      "float" : "left",
      marginTop : "-16px",
      "z-index" : "1",
      position : "relative",
      background: "white",
      "border-radius" : "128px",
      "line-height" : "1.9",
      border : "1px solid #a79c9c",
      "margin-left" : "5%",
      "cursor" : "pointer"
 },
actionslikeicondiv :{
      display: "inline-block",
      width: "11%",
      height: "10%",
      "float" : "left",
      marginTop : "-16px",
      "margin-left": "35%",
      "z-index" : "1",
      color : "red",
      position : "relative",
      background: "white",
      "border-radius" : "128px",
      "line-height" : "2",
      border : "1px solid #a79c9c",
      "cursor" : "pointer"
},
imgouterDiv : {
    position : "relative",
    "padding-top" : "5%"
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
        <div  key = {post.likes} onClick = {data.increment.bind(null , post.postid)} className = {classes.actionslikeicondiv}>
            <i className ="fa fa-heart fa_custom fa-1x" aria-hidden="true"></i>
        </div>
        <div onClick = {data.addComment} className = {classes.actionscommentsicondiv}>
            <i className="fa fa-comment" aria-hidden="true"></i>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Photo);
