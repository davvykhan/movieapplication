import React,{useState} from 'react'
 import { TextField,createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { Tabs,Tab } from '@material-ui/core';
import axios from 'axios';
import { useEffect } from 'react';
import SingleContent from '../../components/SingleContent/SingleContent';
import CustomPagination from '../../components/Pagination/CustomPagination';

function Search() {
    const [type,setType]=useState(0);
    const [page,setPage]=useState(1);
    const[searchText,setSearchText]=useState("");
    const[content,setContent]=useState();
    const[numOfPages,setNumOfPages]=useState();



    const darkTheme= createMuiTheme({
        palette:{
            type: "dark",
            primary:{
                main: "#fff"
            }
        }
    })
    const fetchsearch= async()=>{
     const {data} =await axios.get(`https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${searchText}&page=${page}&include_adult=false&include_video=false`);
     setContent(data.results);
     setNumOfPages(data.total_pages);  
    };


  useEffect(()=>{
      window.scroll(0,0);
      fetchsearch();
      // eslint-disable-next-line 
  },[type,page])

    return (
        <div>
            <ThemeProvider theme={darkTheme}>
                <div style={{display: "flex",margin:"10"}}>
        <TextField
         style={{
             flex: 1
         }}
       className="searchbox"
       label="search"
       variant="filled"
       onChange={(e)=>setSearchText(e.target.value)}
         />
         <Button variant="contained" style={{marginLeft: 10}} onClick={fetchsearch}>
             <SearchIcon/>
         </Button>
                </div>
            <Tabs value={type} indicatorColor='primary' textColor='primary'
            onChange={(Event,newValue)=>{
                setType(newValue);
                setPage(1);
            }
            }
            style={{paddingBottom: 5}}
            >
              <Tab style={{width: "50%"}} label="Search Movies"/>
              <Tab style={{width: "50%"}} label="Search Tv Series"/>
            </Tabs>
            
            </ThemeProvider>
            <div className="trending">
            
                {
                content && content.map((c)=>(
               <SingleContent key={c.id} 
               id={c.id} 
               poster={c.poster_path} 
               title={c.title || c.name} 
               date={c.first_air_date || c.release_date}
               media_type={type ? "tv" : "movie"}
               vote_average={c.vote_average}
               />
                ))
}
 {searchText && !content && (type ? <h2>No series found</h2> : <h2>No movie found</h2>)}
            </div>
            {numOfPages > 1 &&(
            <CustomPagination setPage={setPage}/>
            )}
          </div>
    )
}

export default Search
