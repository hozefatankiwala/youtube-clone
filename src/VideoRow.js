import React from 'react'
import "./VideoRow.css"

function VideoRow({ title, description, views, timestamp, channel, channelImage, image }) {
    return (
        <div className="videoRow">
            <img src={image}></img>
            <div className="videoRow__text">
                <h3>{title}</h3>
                <p>{views} views<span className="dot"> · </span>{timestamp}</p>
                <div className="videoRow__channel">
                    <img src={channelImage} />
                    <p>{channel}</p>
                </div>
                <p className="videoRow__description">{description}</p>
            </div>

        </div>
    )
}

export default VideoRow
