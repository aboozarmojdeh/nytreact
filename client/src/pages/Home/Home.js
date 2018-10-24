import React, {Component, Fragment} from "react";

import SearchForm from "../../components/SearchForm";
import Results from "../../components/Results";
import API from "../../utils/API";
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

class Home extends Component {

  
    state = {
      articles : [],
      limit: null
    }
    
  newQuery=({searchParams})=>{
 
    let {topic, startDate, endDate, limit} = searchParams;
    this.setState({limit}); 
    let queryString = `${topic}${startDate}${endDate}`;
    this.searchArticles(queryString);
  }

  searchArticles = query => {
    API.search(query).then(res => {
    let articlesArray = [];
    console.log("kos kesh:", res.data.response.docs)
    res.data.response.docs.map(({snippet, web_url, pub_date, _id, multimedia}) => {
        articlesArray.push({title: snippet, url: web_url, date: pub_date, articleId: _id , image: multimedia[2]});
      });


    this.setState(prevState => ({
      articles: [...prevState].concat(articlesArray).splice(0, this.state.limit)
    }), console.log("golabiiii",this.state.limit))

    console.log("state is " + JSON.stringify(this.state));
  }).catch(err => console.log(err));
}; 

  

  render() {
    console.log("New is " + JSON.stringify(this.state))
    return (
    <Fragment>
      <NavBar/>
        <div className = "container">
          <SearchForm newQuery={this.newQuery}/>
          <Results results={this.state}/>
        </div>
        <Footer />
    </Fragment>
    )
  } 
} 

export default Home;
