import React from 'react';

 const Newsitems=(props)=> {
  
    let {title,description,imga,url,author,date,source}=props;
    return (
      <div>
        <div className="card" style={{width: "4rem;"}}>
        <div style={{display:'flex', justifyContent:'flex-end',position:'absolute' ,right:'0'}}> <span class="position-absolute top-0  translate-middle badge rounded-pill bg-danger" >
    {source}
    
    </span></div>
        <img src={!imga ? "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg":imga}className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title} </h5>
    <p className="card-text">{description}</p>
    <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on  {new Date(date).toGMTString()}</small></p>
    <a rel="noreferrer" href={url} target="_blank" className="btn btn-dark">Read More</a>
  </div>
</div>

      </div>
      
    )
  
}
export default Newsitems
