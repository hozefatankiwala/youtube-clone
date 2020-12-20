import React from 'react'
import "./ChannelRow.css"
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';

function ChannelRow({ image, channel, verified, subs, noOfVideos, description }) {
    return (
        <div className="channelRow">
            <img className="channelRow__logo" src="https://yt3.ggpht.com/ytc/AAUvwnjt5PSKYRYsERNh3kbWDIJ4QsCFzU1uFVEcFcSD6Q=s176-c-k-c0x00ffffff-no-rj-mo"
                alt={channel}></img>
            <div className="channelRow__text">
                <h4>{channel}{verified && <CheckCircleRoundedIcon />}</h4>
                <p>
                    {subs} subscribers · {noOfVideos} videos
                </p>
                <p>
                    {description}
                </p>
            </div>
        </div>
    )
}

export default ChannelRow
