import React from 'react';
import './MediaComponent.css';
import LinkIcon from '@material-ui/icons/Link';
import GetAppIcon from '@material-ui/icons/GetApp';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import {Place} from "@material-ui/icons";

export default function MediaComponent({data}){
    const temp= () =>{
        let tempInput = document.createElement("input");
        tempInput.value = data.tracking_link;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand("copy");
        document.body.removeChild(tempInput);
    }

    function downloadURI() {
        window.location.assign(data.download_url)
    }

    return (<div className="media-div">

        <div className="media-thumb">
            <img className="media-img" width="100px"  height="200px" src={data.cover_photo_url}/>
            {data.media_type === "video" && <PlayArrowIcon className="play-btn"/>}
        </div>

        <div className="media-op">
            <button onClick={temp}>
                <LinkIcon/>
            </button>
            <button onClick={downloadURI}>
                <GetAppIcon/>
            </button>
        </div>
    </div>);
}