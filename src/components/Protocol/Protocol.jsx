import React, { useEffect, useState } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import img from '../../img/pendemic-video.png'
import virus from '../../img/virus-2.png'
import virus1 from '../../img/virus-1.png'
import planet from '../../img/planet-1.png'
import { BsPlayFill } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";

const Protocol = ({ val }) => {
  const [play, setPlay] = useState(0);
  // const [modal, setmodal] = useState(false);

  const handePlay = (p) => {
    setPlay(p);
    // setmodal(false)
  };

  const handleClose = () => {
    setPlay(0);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      setPlay(0);
    }
  };
  useEffect(() => {

  }, [play])

  return (
    <>
      <div className="app__protocol" >
        <Container>
          <Row className='app__protocol-grid gx-lg-5 gx-0 gy-lg-0 gy-5 special-reverse'>
            <Col lg={6} className='app__protocol-left' dir={val === 'ar' || val === 'ur' ? 'rtl' : 'ltr'} >
              <h2 className='special-reverce-heading-lg mb-3'>Pandemic Distancing Protocol</h2>
              <p style={{fontSize: '14px'}}>To prevent any emergence of any potential transmission of any virus, we are using advanced equipment to sterilize every corner of our clinic; anticipated consumable resources needs (e.g. masks; gloves; hand hygiene products ;..) have been estimated. Your well-being matters to us, we expect the same consideration from you.</p>
              <div className="center">
                {/* <button className="animated-button1 whats fix-whats3 w-btn w-btn-open" target="blank"> */}
                <button className="animated-button1 whats fix-whats2 w-btn w-btn-open" target="blank">
                  <span></span><span></span><span></span><span></span>
                  <div className="dt">
                    <div className="dtc">
                      <p>WhatsApp <label>Get Immediate Info</label>  </p>
                    </div>
                    <div className="dtc">
                      <BsWhatsapp />
                    </div>
                  </div>
                </button>
                <img className='virus-3' src={virus} alt="" />
              </div>
            </Col>
            <Col lg={6} className='app__protocol-right mx-auto'>
              <h2 className='special-reverce-heading-sm h1 mb-4'>Pandemic Distancing Protocol</h2>
              <div className='video-wrapper' style={{ position: 'relative', boxShadow: '0 25px 80px rgb(0 0 0 / 20%)' }}>

                <img src={img} alt="video-wrapper" className='w-100' />

                <div className="play" onClick={() => handePlay(1)} data-bs-toggle="modal" data-bs-target="#exampleModal10">
                  <BsPlayFill size={29} color={'#fff'} />
                </div>

                <div
                  className="modal modal-fullscreen hide   fade"
                  id="exampleModal10"
                  tabIndex="-1"
                  aria-labelledby="exampleModalLabel"
                  data-bs-backdrop="static"
                  onClick={handleClose}
                  onKeyDown={handleKeyDown}
                  role="button"

                >
                  <div className="modal-dialog modal-fullscreen ">
                    <div className="modal-content">
                      <div className="modal-header">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => handePlay(0)}></button>
                      </div>
                      <div className="modal-body ">
                    <iframe src={`https://www.youtube.com/embed/SwXT0Z_Ivck?autoplay=${play}&showinfo=0&rel=0`} title='video-3' allow="autoplay" width="90%" height="80%" className=''></iframe> 
                      </div>
                    </div>
                  </div>
                </div>

              </div>
              <img className='virus-1' src={virus} alt="" />
              <img className='virus-2' src={virus1} alt="" />
            </Col>
          </Row>
        </Container>
        <img className='left-plant-img' src={planet} alt="plant" />
      </div>

    </>
  )
}

export default Protocol