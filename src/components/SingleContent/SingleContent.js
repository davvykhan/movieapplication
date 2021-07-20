import {img_300,unavailable} from '../../config/config'
import '../SingleContent/SingleContent.css'
import { Badge } from '@material-ui/core';
import ContentModal from '../ContentModal/ContentModal';

const SingleContent=({
    id,
    poster,
    date,
    media_type,
    vote_average,
    title,
})=>{
    return <ContentModal media_type={media_type} id={id}>
        <Badge badgeContent={vote_average} color={vote_average > 6 ? "primary" : "secondary"}/>
        <img className="poster" src={poster ? `${img_300}/${poster}` : unavailable }alt={title}/>  
        <b className="title">{title}</b>
        <span className="subTitle">{media_type==="tv" ? "TV series" : "movie"}</span>
        <span className="subTitle">{date}</span>
    </ContentModal>
};

export default SingleContent