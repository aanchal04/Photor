import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  Comments : {
      display: "inline-block",
      width: "50%",
      height: "58%",
      marginTop : "2%"
  },
 commentsouter : {
      display: "inline-block",
      width: "100%",
      height: "10%",
      boxShadow : "1px 1px #e4d9d9",
      border : "1px solid #e8e4e4",
      lineHeight : "1.5",
      marginBottom : "2%" 
 },
 commentsUser : {
      display: "inline-block",
      paddingLeft: "1%",
      height: "100%",
      "float" : "left",
      "white-space": "nowrap",
      "text-overflow": "ellipsis",
      "overflow" : "hidden",
      "max-width": "15%",
      color : "#4545ea",
      fontSize : "14px",
      fontFamily : "lato"     
 },
 commentstext : {
      display: "inline-block",
      height: "100%",
      fontSize : "14px",
      fontFamily : "lato" ,
      paddingLeft: "2%",
      "float" : "left",
      "white-space": "nowrap",
      "text-overflow": "ellipsis",
      "overflow" : "hidden",
      "max-width": "85%",
 }
});

class Comments extends Component {    
 constructor(props) {
    super(props);
    this.state = 
    {
        user : ""  ,
        comment : ""
    }     
  }    
  eachnote = (comment , i) =>
    {
      const { classes } = this.props;
        return (
            <div className = {classes.commentsouter}>
                <div className = {classes.commentsUser}>
                    {comment.user}
                </div>
                <div className = {classes.commentstext}>
                    {comment.comment}
                </div>
            </div>
		)
    }    
  submit =(event) => {
      event.preventDefault()
      let postid = this.props.postid;
      let user = event.target.elements.user.value;
      let comment = event.target.elements.comment.value;
      
      this.props.data.addComment(postid , user , comment)
  }
  render() {
    const { classes } = this.props;
    const postid = this.props.postid;
    const data = this.props.data;
    const comments = data.comments[postid];
    return (
      <div className={classes.Comments}>
            {comments.map(this.eachnote)}
        <form onSubmit = {this.submit}>
            <input name = "user" type = "text" placeholder = "Add Your Name"/><br></br>
            <input name = "comment" type = "text" placeholder = "Add Your Comment"/>
            <input type="submit" hidden/>
        </form>
      </div>
    );
  }
}

export default withStyles(styles)(Comments);