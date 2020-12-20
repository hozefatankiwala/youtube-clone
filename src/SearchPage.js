import React from 'react'
import "./SearchPage.css"
import TuneIcon from '@material-ui/icons/Tune';
import ChannelRow from "./ChannelRow.js"
import VideoRow from "./VideoRow"
function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneIcon />
                <h2>FILTER</h2>
            </div>
            <hr />
            <ChannelRow
                image="https://yt3.ggpht.com/ytc/AAUvwnjt5PSKYRYsERNh3kbWDIJ4QsCFzU1uFVEcFcSD6Q=s176-c-k-c0x00ffffff-no-rj-mo"
                channel="Huzefa Tankiwala"

                subs="2"
                noOfVideos={1}
                description="" />
            <hr />
            <VideoRow
                title="Memory Virtualization"
                description="A video of me talking about how memory virtualization works."
                views="72"
                timestamp="8 months ago"
                channel="Huzefa Tankiwala"
                channelImage="https://yt3.ggpht.com/ytc/AAUvwnjt5PSKYRYsERNh3kbWDIJ4QsCFzU1uFVEcFcSD6Q=s176-c-k-c0x00ffffff-no-rj-mo"
                image="https://i.ytimg.com/vi/wLnEFNnZGCE/hqdefault.jpg?sqp=-oaymwEZCOADEI4CSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLA1lHPK91gEdrlEKvvljkVocx47fg"
            />
            <VideoRow
                title="The Legendary Win with @Tanmay Bhat Ft. @Karan Singh Boomer"
                views="293K views"
                timestamp="1 month ago"
                channel="GamerFleet"
                channelImage="https://yt3.ggpht.com/a-/AOh14GhaZxV0Zww-h3yQ7l9LSN4dO2UVDv4qzMltpQ=s68-c-k-c0x00ffffff-no-rj-mo"
                image="https://i.ytimg.com/vi/G0eGHKgBYbs/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCH8TepXVn4msw9BS_pdEleVasd5A" />
            <VideoRow
                title="How Domino's Makes its Pizza"
                views="32M views"
                timestamp="2 years ago"
                channel="Food Insider"
                channelImage="https://yt3.ggpht.com/a-/AOh14Gj5Gw-h9N9j6QkSkvykBwL12cuzYmZeQr4LoA=s68-c-k-c0x00ffffff-no-rj-mo"
                image="https://i.ytimg.com/vi/jPQ87J_5qyw/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBNBB96sX7iXg3myedE4bXSrMZqLQ" />
            <VideoRow
                title="I Uber'd People And Let Them Keep The Car"
                views="23M views"
                timestamp="1 month ago"
                channel="MrBeast"
                channelImage="https://yt3.ggpht.com/a-/AOh14GivuiBq3tWPpHM0gKiN3RSpe6CgkcMGziRrRg=s68-c-k-c0x00ffffff-no-rj-mo"
                image="https://i.ytimg.com/vi/IoZri9hq7z4/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDe_IotHFSix9pk_GR_Kg1WX5NCIg" />
            <VideoRow
                title="Memory Virtualization"
                description="A video of me talking about how memory virtualization works."
                views="72"
                timestamp="8 months ago"
                channel="Huzefa Tankiwala"
                channelImage="https://yt3.ggpht.com/ytc/AAUvwnjt5PSKYRYsERNh3kbWDIJ4QsCFzU1uFVEcFcSD6Q=s176-c-k-c0x00ffffff-no-rj-mo"
                image="https://i.ytimg.com/vi/wLnEFNnZGCE/hqdefault.jpg?sqp=-oaymwEZCOADEI4CSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLA1lHPK91gEdrlEKvvljkVocx47fg"
            />
            <VideoRow
                title="The Legendary Win with @Tanmay Bhat Ft. @Karan Singh Boomer"
                views="293K views"
                timestamp="1 month ago"
                channel="GamerFleet"
                channelImage="https://yt3.ggpht.com/a-/AOh14GhaZxV0Zww-h3yQ7l9LSN4dO2UVDv4qzMltpQ=s68-c-k-c0x00ffffff-no-rj-mo"
                image="https://i.ytimg.com/vi/G0eGHKgBYbs/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCH8TepXVn4msw9BS_pdEleVasd5A" />
            <VideoRow
                title="How Domino's Makes its Pizza"
                views="32M views"
                timestamp="2 years ago"
                channel="Food Insider"
                channelImage="https://yt3.ggpht.com/a-/AOh14Gj5Gw-h9N9j6QkSkvykBwL12cuzYmZeQr4LoA=s68-c-k-c0x00ffffff-no-rj-mo"
                image="https://i.ytimg.com/vi/jPQ87J_5qyw/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBNBB96sX7iXg3myedE4bXSrMZqLQ" />
            <VideoRow
                title="I Uber'd People And Let Them Keep The Car"
                views="23M views"
                timestamp="1 month ago"
                channel="MrBeast"
                channelImage="https://yt3.ggpht.com/a-/AOh14GivuiBq3tWPpHM0gKiN3RSpe6CgkcMGziRrRg=s68-c-k-c0x00ffffff-no-rj-mo"
                image="https://i.ytimg.com/vi/IoZri9hq7z4/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDe_IotHFSix9pk_GR_Kg1WX5NCIg" />
            <VideoRow
                title="Memory Virtualization"
                description="A video of me talking about how memory virtualization works."
                views="72"
                timestamp="8 months ago"
                channel="Huzefa Tankiwala"
                channelImage="https://yt3.ggpht.com/ytc/AAUvwnjt5PSKYRYsERNh3kbWDIJ4QsCFzU1uFVEcFcSD6Q=s176-c-k-c0x00ffffff-no-rj-mo"
                image="https://i.ytimg.com/vi/wLnEFNnZGCE/hqdefault.jpg?sqp=-oaymwEZCOADEI4CSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLA1lHPK91gEdrlEKvvljkVocx47fg"
            />
            <VideoRow
                title="The Legendary Win with @Tanmay Bhat Ft. @Karan Singh Boomer"
                views="293K views"
                timestamp="1 month ago"
                channel="GamerFleet"
                channelImage="https://yt3.ggpht.com/a-/AOh14GhaZxV0Zww-h3yQ7l9LSN4dO2UVDv4qzMltpQ=s68-c-k-c0x00ffffff-no-rj-mo"
                image="https://i.ytimg.com/vi/G0eGHKgBYbs/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCH8TepXVn4msw9BS_pdEleVasd5A" />
            <VideoRow
                title="How Domino's Makes its Pizza"
                views="32M views"
                timestamp="2 years ago"
                channel="Food Insider"
                channelImage="https://yt3.ggpht.com/a-/AOh14Gj5Gw-h9N9j6QkSkvykBwL12cuzYmZeQr4LoA=s68-c-k-c0x00ffffff-no-rj-mo"
                image="https://i.ytimg.com/vi/jPQ87J_5qyw/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBNBB96sX7iXg3myedE4bXSrMZqLQ" />
            <VideoRow
                title="I Uber'd People And Let Them Keep The Car"
                views="23M views"
                timestamp="1 month ago"
                channel="MrBeast"
                channelImage="https://yt3.ggpht.com/a-/AOh14GivuiBq3tWPpHM0gKiN3RSpe6CgkcMGziRrRg=s68-c-k-c0x00ffffff-no-rj-mo"
                image="https://i.ytimg.com/vi/IoZri9hq7z4/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDe_IotHFSix9pk_GR_Kg1WX5NCIg" />
            <VideoRow
                title="Memory Virtualization"
                description="A video of me talking about how memory virtualization works."
                views="72"
                timestamp="8 months ago"
                channel="Huzefa Tankiwala"
                channelImage="https://yt3.ggpht.com/ytc/AAUvwnjt5PSKYRYsERNh3kbWDIJ4QsCFzU1uFVEcFcSD6Q=s176-c-k-c0x00ffffff-no-rj-mo"
                image="https://i.ytimg.com/vi/wLnEFNnZGCE/hqdefault.jpg?sqp=-oaymwEZCOADEI4CSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLA1lHPK91gEdrlEKvvljkVocx47fg"
            />
            <VideoRow
                title="The Legendary Win with @Tanmay Bhat Ft. @Karan Singh Boomer"
                views="293K views"
                timestamp="1 month ago"
                channel="GamerFleet"
                channelImage="https://yt3.ggpht.com/a-/AOh14GhaZxV0Zww-h3yQ7l9LSN4dO2UVDv4qzMltpQ=s68-c-k-c0x00ffffff-no-rj-mo"
                image="https://i.ytimg.com/vi/G0eGHKgBYbs/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCH8TepXVn4msw9BS_pdEleVasd5A" />
            <VideoRow
                title="How Domino's Makes its Pizza"
                views="32M views"
                timestamp="2 years ago"
                channel="Food Insider"
                channelImage="https://yt3.ggpht.com/a-/AOh14Gj5Gw-h9N9j6QkSkvykBwL12cuzYmZeQr4LoA=s68-c-k-c0x00ffffff-no-rj-mo"
                image="https://i.ytimg.com/vi/jPQ87J_5qyw/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBNBB96sX7iXg3myedE4bXSrMZqLQ" />
            <VideoRow
                title="I Uber'd People And Let Them Keep The Car"
                views="23M views"
                timestamp="1 month ago"
                channel="MrBeast"
                channelImage="https://yt3.ggpht.com/a-/AOh14GivuiBq3tWPpHM0gKiN3RSpe6CgkcMGziRrRg=s68-c-k-c0x00ffffff-no-rj-mo"
                image="https://i.ytimg.com/vi/IoZri9hq7z4/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDe_IotHFSix9pk_GR_Kg1WX5NCIg" />
            <VideoRow
                title="Memory Virtualization"
                description="A video of me talking about how memory virtualization works."
                views="72"
                timestamp="8 months ago"
                channel="Huzefa Tankiwala"
                channelImage="https://yt3.ggpht.com/ytc/AAUvwnjt5PSKYRYsERNh3kbWDIJ4QsCFzU1uFVEcFcSD6Q=s176-c-k-c0x00ffffff-no-rj-mo"
                image="https://i.ytimg.com/vi/wLnEFNnZGCE/hqdefault.jpg?sqp=-oaymwEZCOADEI4CSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLA1lHPK91gEdrlEKvvljkVocx47fg"
            />
            <VideoRow
                title="The Legendary Win with @Tanmay Bhat Ft. @Karan Singh Boomer"
                views="293K views"
                timestamp="1 month ago"
                channel="GamerFleet"
                channelImage="https://yt3.ggpht.com/a-/AOh14GhaZxV0Zww-h3yQ7l9LSN4dO2UVDv4qzMltpQ=s68-c-k-c0x00ffffff-no-rj-mo"
                image="https://i.ytimg.com/vi/G0eGHKgBYbs/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCH8TepXVn4msw9BS_pdEleVasd5A" />
            <VideoRow
                title="How Domino's Makes its Pizza"
                views="32M views"
                timestamp="2 years ago"
                channel="Food Insider"
                channelImage="https://yt3.ggpht.com/a-/AOh14Gj5Gw-h9N9j6QkSkvykBwL12cuzYmZeQr4LoA=s68-c-k-c0x00ffffff-no-rj-mo"
                image="https://i.ytimg.com/vi/jPQ87J_5qyw/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBNBB96sX7iXg3myedE4bXSrMZqLQ" />
            <VideoRow
                title="I Uber'd People And Let Them Keep The Car"
                views="23M views"
                timestamp="1 month ago"
                channel="MrBeast"
                channelImage="https://yt3.ggpht.com/a-/AOh14GivuiBq3tWPpHM0gKiN3RSpe6CgkcMGziRrRg=s68-c-k-c0x00ffffff-no-rj-mo"
                image="https://i.ytimg.com/vi/IoZri9hq7z4/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDe_IotHFSix9pk_GR_Kg1WX5NCIg" />

        </div>
    )
}

export default SearchPage
