import React, { Component } from 'react';
import '../UofMEcuador.css';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { Image } from 'react-bootstrap';
import {Table, TableBody, MDBView, MDBBtn, MDBCollapse } from 'mdbreact';
import YouTube from 'react-youtube';

import {BrowserView, MobileView} from "react-device-detect";


import image_0 from './lightbox/ecuador12.jpg';
import image_1 from './lightbox/MSIDEcuador_CtrView.jpg';
import image_2 from './lightbox/MSIDEcuador_ElPanecillo.jpg';
import image_3 from './lightbox/MSIDEcuador_JungleStudents.jpg';
import image_4 from './lightbox/MSIDEcuador_plaza.jpg';
import image_5 from './lightbox/MSIDEcuador_river.jpg';
import image_6 from './lightbox/MSIDEcuador_StudentEcuadorians.jpg';
import image_7 from './lightbox/MSIDEcuador_WallMtn.jpg';


const images = [
    image_0, image_1, image_2, image_3, image_4, image_5, image_6, image_7
];

class Ecuador_biodiversity_Media extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            photoIndex: 0,
            isOpen: false,
        };
    }
    state = {
        collapseID: ""
    }

    toggleCollapse = (collapseID) => {
        this.setState(prevState => ({
            collapseID: prevState.collapseID !== collapseID ? collapseID : ""
        }));
    }
    render() {
        const { photoIndex, isOpen } = this.state;
        const opts = {
            height: '390',
            width: '640',
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 0
            }
        };
        const m_opts = {
            height: '195',
            width: '250',
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 0
            }
        };

        return (
            <div id="programEcuador">
                <h1 className="colorChange">Biodiversity in Ecuador Program — Media</h1>
                <BrowserView>
                    <div>
                        <Table>
                            <TableBody>
                                <tr>
                                    <td>
                                        <MDBView hover zoom>
                                            <a onClick={() => this.setState({ isOpen: true , photoIndex: 0})}>
                                                <Image src={image_0} className="lightBox_img"></Image>
                                            </a>
                                        </MDBView>
                                    </td>
                                    <td>
                                        <MDBView hover zoom>
                                            <a onClick={() => this.setState({ isOpen: true , photoIndex: 1})}>
                                                <Image src={image_1} className="lightBox_img"></Image>
                                            </a>
                                        </MDBView>
                                    </td>
                                    <td>
                                        <MDBView hover zoom>
                                            <a onClick={() => this.setState({ isOpen: true , photoIndex: 2})}>
                                                <Image src={image_2} className="lightBox_img"></Image>
                                            </a>
                                        </MDBView>
                                    </td>
                                    <td>
                                        <MDBView hover zoom>
                                            <a onClick={() => this.setState({ isOpen: true , photoIndex: 3})}>
                                                <Image src={image_3} className="lightBox_img"></Image>
                                            </a>
                                        </MDBView>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <MDBView hover zoom>
                                            <a onClick={() => this.setState({ isOpen: true , photoIndex: 4})}>
                                                <Image src={image_4} className="lightBox_img"></Image>
                                            </a>
                                        </MDBView>
                                    </td>
                                    <td>
                                        <MDBView hover zoom>
                                            <a onClick={() => this.setState({ isOpen: true , photoIndex: 5})}>
                                                <Image src={image_5} className="lightBox_img"></Image>
                                            </a>
                                        </MDBView>
                                    </td>
                                    <td>
                                        <MDBView hover zoom>
                                            <a onClick={() => this.setState({ isOpen: true , photoIndex: 6})}>
                                                <Image src={image_6} className="lightBox_img"></Image>
                                            </a>
                                        </MDBView>
                                    </td>
                                    <td>
                                        <MDBView hover zoom>
                                            <a onClick={() => this.setState({ isOpen: true , photoIndex: 7})}>
                                                <Image src={image_7} className="lightBox_img"></Image>
                                            </a>
                                        </MDBView>
                                    </td>
                                </tr>

                            </TableBody>
                        </Table>


                        {isOpen && (
                            <Lightbox
                                mainSrc={images[photoIndex]}
                                nextSrc={images[(photoIndex + 1) % images.length]}
                                prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                                onCloseRequest={() => this.setState({ isOpen: false })}
                                onMovePrevRequest={() =>
                                    this.setState({
                                        photoIndex: (photoIndex + images.length - 1) % images.length,
                                    })
                                }
                                onMoveNextRequest={() =>
                                    this.setState({
                                        photoIndex: (photoIndex + 1) % images.length,
                                    })
                                }
                            />
                        )}
                    </div>
                </BrowserView>
                <br/>
                <h1 className="colorChange">Student Experiences in Ecuador</h1>
                <h3 className="colorChange">Kate Studies in Ecuador</h3>
                <BrowserView>
                    <YouTube
                        videoId="v9fkpeW2WU0"
                        opts={opts}
                        onReady={this._onReady}
                    />
                </BrowserView>
                <MobileView>
                    <YouTube
                        videoId="S6g6GUHfPGM"
                        opts={m_opts}
                        onReady={this._onReady}
                    />
                </MobileView>
            </div>

        )
    }
    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }
}

export default Ecuador_biodiversity_Media;