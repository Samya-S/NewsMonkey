import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 9,
    category: 'general'
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }

  capitalizeFirstLetter = (string) => {
      return string.charAt(0).toUpperCase() + string.slice(1);
  }

  constructor(props){
    super(props);
    console.log("Hello I am a constructor from News component");
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsMonkey`
  }

  async updateNews(pgNo){
    // const fetchURL = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=627bce4611104487b57fa91505d3a377&page=${this.state.page}&pageSize=${this.props.pageSize}`
    const fetchURL = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=627bce4611104487b57fa91505d3a377&page=${pgNo}&pageSize=${this.props.pageSize}`
    this.setState({loading: true})
    let data = await fetch(fetchURL);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles, 
      totalResults: parsedData.totalResults,
      loading: false
    })
  }

  async componentDidMount(){
    this.updateNews(1);
  }

  handlePrevClick = async () => {
    console.log("Previous button clicked");
    this.updateNews(this.state.page - 1);
    this.setState({page: this.state.page - 1});
  }
  
  handleNextClick = async () => {
    console.log("Next button clicked");
    this.updateNews(this.state.page + 1);
    this.setState({page: this.state.page + 1});
  }

  render() {
    return (
      <div className='container my-3'>
        <h2 className='text-center' style={{margin: '35px 0px'}}>NewsMonkey - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h2>
        {this.state.loading && <Spinner/>}
        <div className="row">
          {!this.state.loading && this.state.articles.map ((element) => {
            // console.log(element);
            return <div className="col-md-4 my-2" key={element.url}>
                <NewsItem title={element.title} description={element.description} imageURL={element.urlToImage} newsURL={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
              </div>
          })}          
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} type='button' className='btn btn-primary' onClick={this.handlePrevClick}>&larr; Previous</button>
          <button disabled={this.state.page>=Math.ceil(this.state.totalResults/this.props.pageSize)} type='button' className='btn btn-primary' onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
