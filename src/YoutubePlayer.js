import React, {Component} from 'react';
import YouTube from 'react-youtube';
import Todo from './todo'

class YoutubePlayer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            video: 'b4UvemQcExg'
        }
    };

    resaveVideo = (value) => {
        this.setState({
            video: value
        })
    };

    render() {
        const opts = {
            height: '680',
            width: '1280',
            playerVars: {
                autoplay: 1
            }
        };
        return (
            <div>
                <div style={{float: 'left'}}>
                    <YouTube
                        videoId={this.state.video}
                        opts={opts}
                        onReady={this._onReady}
                    />
                </div>
                <Todo changeVideo={this.resaveVideo}/>
            </div>
        );
    }
}

export default YoutubePlayer