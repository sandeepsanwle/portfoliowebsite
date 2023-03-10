import React , {useRef} from 'react';
import emailjs from '@emailjs/browser';
import {
  MDBInput,
  MDBFooter,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTextArea,
} from "mdb-react-ui-kit";


function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_trfxikn', 'template_4bvrmcc', form.current, 'RFQ-cA1wT8sO58l-S')
      .then((result) => {
          alert('message sent');
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div id="contactdiv" className="contactdiv alldiv">
      <h2 style={{ fontFamily: 'Fredoka One' }} className="pageheading">Contact Me</h2>
      <section className="vh-50">
        <MDBContainer className="py-5" style={{ maxWidth: "1000px" }}>
          <MDBRow className="justify-content-center">
            <MDBCol md="10" lg="8" xl="6">
              <MDBCard>
                <MDBCardBody className="p-4">
                <form ref={form} onSubmit={sendEmail}>
                  <div className="d-flex flex-start w-100">


                    <div className="w-100">
                    <MDBInput type="text" name="user_name" label='Your Name' id='Enter Email' />
                    <MDBInput type="email" name="user_email" label='Enter Email' id='typeEmail' style={{margin:'15px 0'}}/>
                      <MDBTextArea name="message" label="Message Me" rows={4} />

                      <div className="d-flex justify-content-center mt-3">

                        <MDBBtn type="submit" value="Send" color="transperent" rippleColor='dark'>
                          Send <MDBIcon fas icon="long-arrow-alt-right ms-1" />
                        </MDBBtn>
                      </div>
                    </div>
                  </div>
                  </form>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      <MDBFooter className=' text-center text-white'>
        <MDBContainer className='p-4 pb-0'>
          <section className='mb-4' >
            <MDBBtn
              floating
              target='_blank'
              className='m-2 socialbtn'
              style={{ backgroundColor: '#3b5998' }}
              href='https://www.instagram.com/sandeep.sanwle'
              role='button'
            >
              <MDBIcon fab icon='facebook-f' />
            </MDBBtn>

            <MDBBtn
              floating
              target='_blank'
              className='m-2 socialbtn'
              style={{ backgroundColor: '#55acee' }}
              href='https://twitter.com/sandeep_sanwle'
              role='button'
            >
              <MDBIcon fab icon='twitter' />
            </MDBBtn>
            <MDBBtn
              floating
              className='m-2 socialbtn'
              target='_blank'
              style={{ backgroundColor: '#ac2bac' }}
              href='https://www.instagram.com/sandeep.sanwle'
              role='button'
            >
              <MDBIcon fab icon='instagram' />
            </MDBBtn>

            <MDBBtn
              floating
              target='_blank'
              className='m-2 socialbtn'
              style={{ backgroundColor: '#0082ca' }}
              href='https://www.linkedin.com/in/sandeepsanwle'
              role='button'
            >
              <MDBIcon fab icon='linkedin-in' />
            </MDBBtn>

            <MDBBtn
              floating
              className='m-2 socialbtn'
              target='_blank'
              style={{ backgroundColor: '#333333' }}
              href='https://github.com/Sandeepsanwle'
              role='button'
            >
              <MDBIcon fab icon='github' />
            </MDBBtn>
          </section>
        </MDBContainer>
      </MDBFooter>
    </div>
  );
}

export default Contact;
