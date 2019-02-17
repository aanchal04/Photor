import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Route , Link } from 'react-router-dom'
import Single from './Single';
import Photogrid from './Photogrid';
import { withRouter } from "react-router-dom";
import { compose } from 'redux';
import {Provider} from 'react-redux'
import store , {history} from './store'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const styles = theme => ({
  mainContainer : {
      display: "inline-block",
      width: "100%",
      height: "100%"
  },
   headerContainer : {
      display: "inline-block",
      width: "100%",
      height: "8%",
      "float" : "left",
  },
  bodyContainer : {
      display: "inline-block",
      width: "100%",
      height: "90%"
  },
  headerText : {
     fontSize : "42px",
     fontFamily : "roboto",
     textAlign : "center",
     fontWeight : "bold",
     color : "#ce8f8f",
     lineHeight : "1.3",
     paddingLeft : "10%",
     width: "100%",
     height: "100%",
     display: "inline-block",
     "float" : "left",
  },
  addpost : {
     fontSize : "18px",
     fontFamily : "roboto",
     textAlign : "center",
     fontWeight : "bold",
     color : "#6d75d8",
     lineHeight : "1.5",
     display: "inline-block",
     width: "8%",
     height: "100%",
     "float" : "right",
     marginTop : "2%",
     border : "1px solid",
     marginRight : "3%"
  },
  addpostContainer : {
      display: "none",
      width: "25%",
      height: "20%",
      position :"fixed",
      zIndex : "3",
      top : "270px",
      left : "550px",
      backgroundColor : "#e5e8ea",
      "box-shadow" : "0 24px 38px 3px rgba(0,0,0,0.14), 0 9px 46px 8px rgba(0,0,0,0.12), 0 11px 15px -7px rgba(0,0,0,0.2)",
      borderRadius : "5px"
  },
  uploadPostContainer : {
      display: "none",
      width: "40%",
      height: "55%",
      position :"fixed",
      zIndex : "3",
      top : "110px",
      left : "395px",
      backgroundColor : "#e5e8ea",
      "box-shadow" : "0 24px 38px 3px rgba(0,0,0,0.14), 0 9px 46px 8px rgba(0,0,0,0.12), 0 11px 15px -7px rgba(0,0,0,0.2)",
      borderRadius : "5px"
  },
  uploadInput : {
    marginTop : "15%",
    "margin-left" : "24%"
  },
  posttagContainer : {
    "margin-left" : "5%",
     marginTop : "2%",
     textAlign : "center" 
  },
  outerUploadConatiner : {
      width: "100%",
      height: "7%",
      display: "inline-block",
      float : "left",
      marginTop : "2%"
  },
  UploadConatiner : {
      width: "15%",
      height: "100%",
      display: "inline-block",
      float : "right",
      textAlign : "center",
      fontFamily : "sans-serif",
      fontSize : "14px",
      color : "white",
      background : "#1a73e8",
      lineHeight : "1.8",
      marginRight : "2%",
      cursor : "pointer",
      borderRadius : "7px"
  }
});


class Main extends Component {

 constructor(props) {
    super(props);
     
    this.state = {
        uploading: false,
        images: [],
        src : "",
        ShowAddPost : true
    }
  }

 onChange = (e) => {
    const file = e.target.files[0];
    this.setState({ uploading: true })
    let reader =new FileReader();
    let src = '';
     
    if (file && file.type.match('image.*')) {
      reader.readAsDataURL(file);
    }
    reader.onloadend = (e) => {
      src = reader.result;
      this.showUploadDiv(src);
      this.setState({
        src: src
      });
      document.getElementById('addPost').style.display = "none";
      document.getElementById('uploadPost').style.display = "block";
    }
 }
 
 showUploadDiv = (src) => {
    let imgFace = document.createElement("img");
    imgFace.src=src;
    imgFace.style.marginTop = "2%";
    imgFace.id = "idUploadDiv"
    document.getElementById('uploadImgContainer').appendChild(imgFace);
 }

 uploadPost = () => {
    let ImagePost = document.getElementById("posttag").value
    this.props.addPost(this.state.src, ImagePost);
    document.getElementById('uploadPost').style.display = "none";
 }

 canceluploadPost = () => {
    document.getElementById("uploadImgContainer").innerHTML = "";
    document.getElementById('uploadPost').style.display = "none";
 }

 getBase64 = (file) => {
  return new Promise((resolve,reject) => {
     const reader = new FileReader();
     reader.onload = () => resolve(reader.result);
     reader.onerror = error => reject(error);
     reader.readAsDataURL(file);
     
  });
}
 
  addPostonClick = () => {
    document.getElementById('addPost').style.display = "block";

 }
 
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
                    <div className="btn btn-primary" onClick = {this.addPostonClick} id = "addpostid">                        
                            <span> Add Post </span>                           
                    </div>
                </div>
            </div>
            <div className={classes.bodyContainer}>
                <Route exact path="/" render={rouecomponent => {
                        return Photogridconst(this.props);}} ></Route>
                <Route path = "/photo/:Id" render={rouecomponent => {
                        return Singlegridconst(this.props);}}></Route>
            </div>
            <div className={classes.addpostContainer} id = "addPost">
                <input type='file' id='single' onChange={this.onChange} className = {classes.uploadInput}/> 
            </div>
            <div className = {classes.uploadPostContainer} id= "uploadPost">
                <div className = {classes.uploadImageContainer} id = "uploadImgContainer">
                </div>
                <div className = {classes.posttagContainer}>
                  Post Tag <input type='text' id='posttag'/> 
                </div>
                <div className = {classes.outerUploadConatiner}>
                    <div className = {classes.UploadConatiner} onClick = {this.uploadPost}> Upload </div>
                    <div className = {classes.UploadConatiner} onClick = {this.canceluploadPost}> Cancel </div>
               </div>
            </div>
      </div>
    );
  }
}

export default withRouter(compose(
    withStyles(styles)
)(Main));
