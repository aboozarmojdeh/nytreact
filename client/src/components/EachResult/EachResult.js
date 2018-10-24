import React, {Component} from "react";
import API from '../../utils/API';

export default class EachResult extends Component {

     
    state={
      saved: null
    }
    

  save=()=>{

    console.log("Saved Article Clicked")
    
    API.saveArticle({
      articleId : this.props.id,
      url: this.props.url ,
      title: this.props.title,
      date : this.props.date,
      image : this.props.image
    }).then(this.setState({
      saved: true
    }));

  }

  render() {
    return (
      <li className="collection-item">
        <img className = "img-fluid img-thumbnail rounded right" style={{height: "100px", width: "100px", 'borderRadius':'50% !important'}} src={this.props.image}/>
        <br/>
        <strong> Title: </strong>  {this.props.title}
        <br/>
        <strong> URL: </strong> <a href={this.props.url} target="_blank"> {this.props.url} </a>
        {this.props.date? (<strong><br/>{`Date: ${this.props.date}`}</strong>) : ""}
        <br/>
        <strong> ID: </strong> {this.props.id}
        <br/>
        {this.state.saved? (<button style={{"marginTop" : "15px"}} id={this.props.id} className="btn btn-primary right-align center"> Article Liked and Saved </button>):
          (<button style={{"marginTop" : "15px"}} id={this.props.id} onClick={this.save} className="btn btn-success right-align center"> Like </button>)
        }

      </li>

    ); 
  } 
} 
