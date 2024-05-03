import { Component } from "react";
import './movie.css'

class MovieHomePage extends Component{
  state = {
    SearchInput:'',
    movieList:{}
  }

  onhadleChage = event =>{
    this.setState({SearchInput:event.target.value})
  }

  componentDidMount(){
    this.getMoviesList();
  }

  getMoviesList = async() =>{
    const {SearchInput} = this.state;
    const api = `http://www.omdbapi.com/?i=tt3896198&apikey=ff5d8769`
    const resp = await fetch(api)
    const responseData =await resp.json();
    console.log(responseData);
    if(responseData){
      this.setState({movieList:responseData})


    }

    
  }
  onhadleChage = event =>{
    this.setState({
      SearchInput:event.target.value

    })
  }


  activateApi =(event) =>{
    console.log("event",event)
    event.preventDefault();
    this.getMoviesList()


  }




  render(){
    const {SearchInput,movieList} = this.state

    return(

      <div className="movies_holder_ouuter_frame">
        <div className="header">
          <h1>MoviesList</h1>
          <form onSubmit={this.activateApi}>
            <input type = "search" placeholder="Search your movie name" value={SearchInput} className="inputFrame" onChange={this.onhadleChage} /><br/>
            <button type="submit" className="searchButton">
              Search
            </button>
          </form>
          

        </div>

        <div className="movies">
          <div>
            <img src = {movieList.Poster} alt = "img"/>
          </div>
          <div className="description">
            <h1>Title : {movieList.Title}</h1>
            <p>Language : {movieList.Language}</p>
            <p>Actors : {movieList.Actors}</p>
            <p>Director : {movieList.Director}</p>
            <p>Released : {movieList.Released}</p>

          </div>


        </div>

      </div>

    );
  }





}

export default MovieHomePage