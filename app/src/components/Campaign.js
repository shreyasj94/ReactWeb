import React from 'react';
import './campaign.css';
import MediaComponent from "./media/MediaComponent";

function Campaign({data}){
    return (
        <div className="Campaign">
            <div className="title">
                <img className="c-img" width="56px" height="56px" src={data.campaign_icon_url}/>
                <div className="title-1">
                    <span>{data.campaign_name}</span>
                    <span className="pay-div">{data.pay_per_install} per install</span>

                </div>
            </div>
           <div className="media-section">
               {
                   data.medias &&  data.medias.map(
                       x => <MediaComponent data={x}/>
                   )
               }
           </div>
        </div>
    );
};

export default Campaign;
