import React, { useState } from 'react';
import Video from '../../videos/video.mp4';
import Navbar from '../Navbar.js';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/scss/modal-video.scss';
import { FaRegPlayCircle } from 'react-icons/fa'
import { SectionContainer, HeroBg, VideoBg, HeroP, HeroContent, HeroH1 } from './SectionElements'
function Section() {
    const [isOpen, setOpen] = useState(false)

const mystyle={
    width:"250%",
    height:"250%",
    cursor:"pointer",
}
    return (
        <>
            <SectionContainer id="home">

                <HeroBg>
                    <Navbar />
                    <VideoBg autoPlay muted loop src={Video} type="videomp4" />
                </HeroBg>

                <HeroContent>

                    <HeroP>
                        We bring together content owners and video platforms to
                    </HeroP>
                    <HeroH1>THRIVE</HeroH1>
                    <HeroP>
                        in the new world.A multi-screen world.
                    </HeroP>
                    <HeroP>
                        <ModalVideo channel='youtube' style={{ marginTop: "5rem" }} autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} />

                        <FaRegPlayCircle style={mystyle} className="text-warning" onClick={() => setOpen(true)} />
                    </HeroP>
                </HeroContent>

            </SectionContainer>
        </>
    )
}

export default Section
