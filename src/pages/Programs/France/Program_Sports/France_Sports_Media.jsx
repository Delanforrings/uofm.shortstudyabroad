import React, { Component } from 'react';
import '../UofMFrance.css';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { Image } from 'react-bootstrap';
import {Table, TableBody, MDBView, MDBBtn, MDBCollapse } from 'mdbreact';
import YouTube from 'react-youtube';

import {BrowserView, MobileView} from "react-device-detect";


import image_0 from './lightbox/Mont_esplanadeVendors.jpg';
import image_1 from './lightbox/Mont_PlazaPedestrians.jpg';
import image_2 from './lightbox/Mont_arc.jpg';
import image_3 from './lightbox/Mont_narrowStreet.jpg';
import image_4 from './lightbox/Mont_esplanade.jpg';
import image_5 from './lightbox/Mont_florist.jpg';
import image_6 from './lightbox/Mont_sports_handballFans.jpg';
import image_7 from './lightbox/Mont_transpo.jpg';
import image_8 from './lightbox/mont-pgmcenter.jpg';
import image_9 from './lightbox/Mont_LesBaux.jpg';
import image_10 from './lightbox/Mont-excursion-flag.jpg';
import image_11 from './lightbox/Mont_aquaduct.jpg';



const images = [
    '//umabroad.umn.edu/assets/images/galleries/europe/montpellier/Mont_esplanadeVendors.jpg',
    '//umabroad.umn.edu/assets/images/galleries/europe/montpellier/Mont_PlazaPedestrians.jpg',
    '//umabroad.umn.edu/assets/images/galleries/europe/montpellier/Mont_arc.jpg',
    '//umabroad.umn.edu/assets/images/galleries/europe/montpellier/Mont_narrowStreet.jpg',
    '//umabroad.umn.edu/assets/images/galleries/europe/montpellier/Mont_esplanade.jpg',
    '//umabroad.umn.edu/assets/images/galleries/europe/montpellier/Mont_florist.jpg',
    '//umabroad.umn.edu/assets/images/galleries/europe/france-sports/Mont_sports_handballFans.jpg',
    '//umabroad.umn.edu/assets/images/galleries/europe/montpellier/Mont_transpo.jpg',
    '//umabroad.umn.edu/assets/images/galleries/europe/montpellier/mont-pgmcenter.jpg',
    '//umabroad.umn.edu/assets/images/galleries/europe/montpellier/Mont_LesBaux.jpg',
    '//umabroad.umn.edu/assets/images/galleries/europe/france-sports/Mont-excursion-flag.jpg',
    '//umabroad.umn.edu/assets/images/galleries/europe/montpellier/Mont_aquaduct.jpg'
];

class UofMFrance_Media extends React.Component {
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
            <div id="programFrance">
                <h1 className="colorChange">Sports & Culture in France: La vie sportive — Media</h1>
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
                                <tr>
                                    <td>
                                        <MDBView hover zoom>
                                            <a onClick={() => this.setState({ isOpen: true , photoIndex: 8})}>
                                                <Image src={image_8} className="lightBox_img"></Image>
                                            </a>
                                        </MDBView>
                                    </td>
                                    <td>
                                        <MDBView hover zoom>
                                            <a onClick={() => this.setState({ isOpen: true , photoIndex: 9})}>
                                                <Image src={image_9} className="lightBox_img"></Image>
                                            </a>
                                        </MDBView>
                                    </td>
                                    <td>
                                        <MDBView hover zoom>
                                            <a onClick={() => this.setState({ isOpen: true , photoIndex: 10})}>
                                                <Image src={image_10} className="lightBox_img"></Image>
                                            </a>
                                        </MDBView>
                                    </td>
                                    <td>
                                        <MDBView hover zoom>
                                            <a onClick={() => this.setState({ isOpen: true , photoIndex: 11})}>
                                                <Image src={image_11} className="lightBox_img"></Image>
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
                <MobileView>

                    <div>
                        <Table>
                            <TableBody>
                                <tr>
                                    <td>
                                        <MDBView hover zoom>
                                            <a onClick={() => this.setState({ isOpen: true , photoIndex: 0})}>
                                                <Image src={image_0} className="m_lightBox_img"></Image>
                                            </a>
                                        </MDBView>
                                    </td>
                                    <td>
                                        <MDBView hover zoom>
                                            <a onClick={() => this.setState({ isOpen: true , photoIndex: 1})}>
                                                <Image src={image_1} className="m_lightBox_img"></Image>
                                            </a>
                                        </MDBView>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <MDBView hover zoom>
                                            <a onClick={() => this.setState({ isOpen: true , photoIndex: 2})}>
                                                <Image src={image_2} className="m_lightBox_img"></Image>
                                            </a>
                                        </MDBView>
                                    </td>
                                    <td>
                                        <MDBView hover zoom>
                                            <a onClick={() => this.setState({ isOpen: true , photoIndex: 3})}>
                                                <Image src={image_3} className="m_lightBox_img"></Image>
                                            </a>
                                        </MDBView>
                                    </td>
                                </tr>
                            </TableBody>
                        </Table>
                        <a onClick={()=> this.toggleCollapse("lightRoomCollapse")}
                           className="a_li_link"
                        >
                            Show 8 more photos
                        </a>
                        <MDBCollapse id="lightRoomCollapse" isOpen={this.state.collapseID}>
                            <Table>
                                <TableBody>
                                    <tr>
                                        <td>
                                            <MDBView hover zoom>
                                                <a onClick={() => this.setState({ isOpen: true , photoIndex: 4})}>
                                                    <Image src={image_4} className="m_lightBox_img"></Image>
                                                </a>
                                            </MDBView>
                                        </td>
                                        <td>
                                            <MDBView hover zoom>
                                                <a onClick={() => this.setState({ isOpen: true , photoIndex: 5})}>
                                                    <Image src={image_5} className="m_lightBox_img"></Image>
                                                </a>
                                            </MDBView>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <MDBView hover zoom>
                                                <a onClick={() => this.setState({ isOpen: true , photoIndex: 6})}>
                                                    <Image src={image_6} className="m_lightBox_img"></Image>
                                                </a>
                                            </MDBView>
                                        </td>
                                        <td>
                                            <MDBView hover zoom>
                                                <a onClick={() => this.setState({ isOpen: true , photoIndex: 7})}>
                                                    <Image src={image_7} className="m_lightBox_img"></Image>
                                                </a>
                                            </MDBView>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <MDBView hover zoom>
                                                <a onClick={() => this.setState({ isOpen: true , photoIndex: 8})}>
                                                    <Image src={image_8} className="m_lightBox_img"></Image>
                                                </a>
                                            </MDBView>
                                        </td>
                                        <td>
                                            <MDBView hover zoom>
                                                <a onClick={() => this.setState({ isOpen: true , photoIndex: 9})}>
                                                    <Image src={image_9} className="m_lightBox_img"></Image>
                                                </a>
                                            </MDBView>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <MDBView hover zoom>
                                                <a onClick={() => this.setState({ isOpen: true , photoIndex: 10})}>
                                                    <Image src={image_10} className="m_lightBox_img"></Image>
                                                </a>
                                            </MDBView>
                                        </td>
                                        <td>
                                            <MDBView hover zoom>
                                                <a onClick={() => this.setState({ isOpen: true , photoIndex: 11})}>
                                                    <Image src={image_11} className="m_lightBox_img"></Image>
                                                </a>
                                            </MDBView>
                                        </td>
                                    </tr>

                                </TableBody>
                            </Table>
                        </MDBCollapse>



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
                </MobileView>
                <br/>
                <h1 className="colorChange">Sports & Cutlure in France: La vie sportive</h1>
                <BrowserView>
                    <YouTube
                        videoId="S6g6GUHfPGM"
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

export default UofMFrance_Media;