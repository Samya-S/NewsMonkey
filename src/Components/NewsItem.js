import React from 'react'

const NewsItem = (props) => {
  let {title, description, imageURL, newsURL, author, date, source} = props;
  return (
    <div>
      <div className="card"> {/* style={{width: "18rem"}} */}
        <span className="position-absolute top-0 badge rounded-pill bg-danger" style={{right: '-3%', transform: "translate(-0%,-50%)"}}>
          {source}
        </span>
        <img 
          src={imageURL ? imageURL : 'https://thumbs.dreamstime.com/b/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg'} 
          className="card-img-top" alt="..."
          onError={event => {
            event.target.src = "https://thumbs.dreamstime.com/b/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg"
            event.onerror = null
          }}/>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          {/* <p className="card-text">{description ? description.slice(0, 100) : ""} {description && description.length > 100 ? "..." : ""}</p> */}
          <p className="card-text">{description}</p>
          <p className="card-text"><small className='text-muted'>{author ? "By " + author + " on": "On"} {new Date(date).toGMTString()}</small></p>
          <a href={newsURL} target='_blank' rel="noreferrer" className="btn btn-sm btn-primary">Read more</a>
        </div>
      </div>
    </div>
  )
}

export default NewsItem
