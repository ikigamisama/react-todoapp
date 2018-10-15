import React, { Component } from 'react';
import Video from '../../assets/video/kimi-nu-nawa.mp4';

export default class VideoBGComponent extends Component {

    render() {
        return (
            <div className="user-bg-fullscreen">
                <video autoPlay muted loop className="bg-video-user-component">
                    <source src={Video} type="video/mp4"></source>
                </video>
            </div>
        );
    }
}
