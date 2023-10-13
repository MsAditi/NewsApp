import React,{useEffect,useState} from 'react';
import Newsitems from './Newsitems';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

const News =(props)=> {
    const[articles,setArticles]=useState([])
    const[loading ,setLoading]=useState(true)
    const[page ,setPage]=useState(1)
    const[totalResults ,setTotalResult]=useState(0)
    
  
 
  const capetalize=(str)=>
  {
    return str.charAt(0).toUpperCase()+str.slice(1);
  }
  
    
        
       {/*document.title=`${this.capetalize(props.category)} - NewsMonkey`*/}
    
    
  const update=async()=>
    {
      props.setProgress(10);
      let url= `https://newsapi.org/v2/top-headlines?country=in&category${props.category}&apiKey=${props.apiKey}&page=${page-1}&pageSize=${props.pageSize}`;
      setLoading(true);
      let data= await fetch(url);
      props.setProgress(30);
      let flashdata=await data.json();
      props.setProgress(40);
      setArticles(flashdata.articles);
      setTotalResult(flashdata.totalResults);
      setLoading(false);
      props.setProgress(100);
    }
  
    useEffect(()=>{
      document.title = `${capetalize(props.category)} - NewsMonkey`;
      update();},[])
    const fetchMoreData= async()=>
    {
      
      let url= `https://newsapi.org/v2/top-headlines?country=in&category${props.category}&apiKey=5023cda47cb24269b66bdd32145eec46&page=${page+1}&pageSize=${props.pageSize}`;
      setPage(page+1)
      let data= await fetch(url);
      let flashdata=await data.json();
      
     
        setArticles(articles.concat(flashdata.articles))
        setTotalResult(flashdata.totalResults)
        setLoading(false);
      
    };
    
  
  
    return (
      <>
     <h1 className="text-center my-5">NewsMonkey -Top Headlines { capetalize(props.category)}</h1>
     {loading && <div className="text-center"><Spinner/></div>}

      <InfiniteScroll
    dataLength={articles.length}
    next={fetchMoreData}
    style={{ display: 'flex', flexDirection: 'column-reverse' }} //To put endMessage and loader to the top.
    inverse={true} //
    hasMore={articles.length!==totalResults}
    loader={<div className="text-center"><Spinner/></div>}
    scrollableTarget="scrollableDiv"
  >  
  <div className='container'>
      <div className="row ">
     
      {  !loading && articles.map((element)=>
      {
        return <div className="col-md-4" key={element.url}><Newsitems title={element.title?element.title:""} description={element.description?element.description:""} imga={element.urlToImage} url={element.url} author={element.author} date={element.publishedAt} source={element.source.name}  /></div>
      })}
      
     
      
     
      </div>
      {/*<div className="d-flex justify-content-between">
<button disabled={this.state.page<=1} type="button" class="btn btn-dark" onClick={this.handlepre}>&larr;Previous</button>
<button disabled={this.state.page+1>Math.ceil(this.state.totalresult/props.pageSize)} type="button" class="btn btn-dark" onClick={this.handlenext}>Next &rarr;</button>

</div>*/}
</div>
 </InfiniteScroll>
     
</>
    )
  
}

News.defaultProps={country:"in",category:"general",pageSize:'8'}

  News.propTypes={ country:PropTypes.string,
  pageSize:PropTypes.number,
    category:PropTypes.string
  }
  export default News