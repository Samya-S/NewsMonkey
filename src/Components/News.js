import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';


const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalizeFirstLetter = (string) => {
      return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const updateNews = async (pgNo) => {
    props.setProgress(0);
    // const fetchURL = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`
    const fetchURL = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${pgNo}&pageSize=${props.pageSize}`
    setLoading(true)
    let data = await fetch(fetchURL);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    // console.log(parsedData);
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    props.setProgress(100);
  }

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`
    updateNews(1);
  }, [])

  // const handlePrevClick = async () => {
  //   console.log("Previous button clicked");
  //   updateNews(page - 1);
  //   setPage(page - 1)
  // }
  
  // const handleNextClick = async () => {
  //   console.log("Next button clicked");
  //   updateNews(page + 1);
  //   setPage(page + 1)
  // }

  const fetchMoreData = async () => {
    const fetchURL = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`
    // setLoading(true)
    let data = await fetch(fetchURL);
    let parsedData = await data.json();
    console.log(parsedData);
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
    // setLoading(false)
    setPage(page + 1)
  }

  return (
    <>
      <h2 className='text-center' style={{margin: '20px 0px', marginTop: '90px'}}>NewsMonkey - Top {capitalizeFirstLetter(props.category)} Headlines</h2>
      {loading && <Spinner/>}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner/>}
      >
        <div className='container my-3'>
          <div className="row">
            {/* {!loading && articles.map ((element) => { */}
            {articles.map ((element) => {
              // console.log(element);
              return <div className="col-md-4 my-2" key={element.url}>
                  <NewsItem title={element.title} description={element.description} imageURL={element.urlToImage} newsURL={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                </div>
            })}          
          </div>
        </div>
      </InfiniteScroll>
      {/* <div className="container d-flex justify-content-between">
        <button disabled={page<=1} type='button' className='btn btn-primary' onClick={handlePrevClick}>&larr; Previous</button>
        <button disabled={page>=Math.ceil(totalResults/props.pageSize)} type='button' className='btn btn-primary' onClick={handleNextClick}>Next &rarr;</button>
      </div> */}
    </>
  )
}

News.defaultProps = {
  country: 'in',
  pageSize: 9,
  category: 'general'
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}

export default News
