import React ,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import SeriesIcon from '@material-ui/icons/Tv';
import FavoriteIcon from '@material-ui/icons/Favorite';
import TrendingIcon from '@material-ui/icons/TrendingDown';
import MovieIcon from '@material-ui/icons/Movie';
import SearchIcon from '@material-ui/icons/Search';
import { useHistory } from 'react-router-dom';


const useStyles = makeStyles({
  root: {
    width: '100% ',
    position: 'fixed',
    bottom: 0,
    backgroundColor: '#2d313a',
    zIndex: 100,
  },
});

export default function NavItem() {
  const classes = useStyles();
  const history=useHistory();
  const [value, setValue] = useState(0);
  
  useEffect(() => {
      if(value===0)history.push("/");
     
      else if(value===1)history.push("/movies");
      else if(value===2)history.push("/series");
      else if(value===3)history.push("/favourites");
      else if(value===4)history.push("/Search");
  }, [value,history]);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Trending" icon={<TrendingIcon />} />
      <BottomNavigationAction label="Movies" icon={<MovieIcon />} />
      <BottomNavigationAction label="Series" icon={<SeriesIcon />} />
      <BottomNavigationAction label="Favourites" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Search" icon={<SearchIcon/>} />
    </BottomNavigation>
  );
}