import React, {Component} from "react";

import EachResult from "../EachResult";

export default class Results extends Component {

 


  render() {

    let articleResults = [];

    if(this.props.results.articles.length > 0 ){

      console.log(JSON.stringify(this.props.results.articles))
      articleResults = this.props.results.articles.map(article => {

        return(
          <EachResult title={article.title} url={article.url} date={article.date} id={article.articleId} key={article.articleId}
            image={`${article.image? "https://static01.nyt.com/"+ article.image.url : "https://musicheals.ca/wp-content/uploads/2016/10/no-image-available.jpg" }`}
          />
        )
      });

    }

    return (
      <div>
        {this.props.results.articles.length > 0 ? (
          <div>
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h3 className="panel-title"><strong><i className="fa fa-table"></i> Results </strong></h3>
              </div>
              <div className="panel-body" id="well-section">
                <ol className="collection with-header">
                    {articleResults}
                </ol>
              </div>
            </div>
          </div>
        ) : <div></div>}
      </div>
    );
  } 
} 
