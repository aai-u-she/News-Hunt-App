import React from 'react';

const NewsItem = (props) => {
    let {title, description, imageUrl, newsUrl, author, date, source} = props;
    return (
      <div className='my-3'>
        {/* We have used Card and Badges of Bootstrap here */}
        <div className="card">
        <div style = {{
          display: "flex" ,
          justifyContent: "flex-end" ,
          position: "absolute" ,
          right: "0"
          } }>
        <span className="badge rounded-pill bg-danger" >{source}</span>
        </div>
            <img src={imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            {/* a = date;
            let b = new Date(a);
            b = b.toGMTString();
            console.log(b); */}
            <p className="card-text"><small className="text-muted">Contributed by {(!author)? "Unknown Sources" : author} on {new Date(date).toGMTString()}</small></p>
            {/* target="_blank" it means your url will open to new tab */}
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read more</a>
        </div>
</div>
      </div>
    );
}
export default NewsItem;

