import { Link, Route, BrowserRouter as Router, Routes} from 'react-router-dom' ;
import './App.css';


import { useState, useEffect } from 'react';
function List(props) {
  const [mList, setmList] = useState([]);
  function deleteMovie(idx){
    let list = [...mList];
    list.splice(idx, 1);
    setmList(list);
  }
  useEffect(()=>{
    setmList([
      {id: 1, title: "Movie 1", genre: "Drama", release_date: "2022-01-01"},
      {id: 2, title: "Movie 2", genre: "Action", release_date: "2022-02-01"},
      {id: 3, title: "Movie 3", genre: "Comedy", release_date: "2022-03-01"}
    ])
  }, []);
  return(
    <>
      <h1>Movies</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Genre</th>
            <th>Release Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            mList.map((movie, idx)=>{
              return (
                <tr key={"movie"+idx}>
                  <td>{movie.id}</td>
                  <td>{movie.title}</td>
                  <td>{movie.genre}</td>
                  <td>{movie.release_date}</td>
                  <td><button onClick={()=>deleteMovie(idx)}>Delete</button></td>
                </tr>
              )
            })
          }

        </tbody>
      </table>
    </>
  );
}

function AddNewMovie() {
  const [mList, setmList] = useState([]);
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [release_date, setRelease_date] = useState("");

  

  function addMovie(){
    let list = [...mList];
    list.push({
      id: id,
      title: title,
      genre: genre,
      release_date: release_date
    })
    setmList(list);
    setId("");
    setTitle("");
    setGenre("");
    setRelease_date("");
  }

  
  return(
    <>
      <h1>Create Movie</h1>
      <div>
        <input type='text' id='id' name='id' placeholder='Input movie id' value={id} onChange={(e)=>setId(e.target.value)}></input>
      </div>
      <div>
        <input type='text' id='title' name='title' placeholder='Input movie title' value={title} onChange={(e)=>setTitle(e.target.value)}></input>
      </div>
      <div>
        <input type='text' id='genre' name='genre' placeholder='Input movie genre' value={genre} onChange={(e)=>setGenre(e.target.value)}></input>
      </div>
      <div>
        출시일:
        <input type='date' id='release_date' name='release_date' value={release_date} onChange={(e)=>setRelease_date(e.target.value)}></input>
      </div>
      <div>
        <button onClick={()=>addMovie()}>Add movie</button>
      </div>
    </>
  )
}

function App() {
  return (
    <Router>
      <div className='App'>
        <nav>
          <ul>
            <li>
              <Link to="/">List</Link>
            </li>
            <li>
              <Link to="/add">Add New Movie</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<List />}></Route>
          <Route path="/add" element={<AddNewMovie />} ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
