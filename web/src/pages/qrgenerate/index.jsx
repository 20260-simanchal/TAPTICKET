import React, { useState } from 'react';
import axios from "../../connector";




const QrForm=() => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [event, setEvent] = useState('');
  const [subject, setSubject] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [no, setNo] = useState('');
  const [pin, setPin] = useState('');
  const [message, setMessage] = useState('');
  const [qrCode, setQrCode] = useState('');

  const generateQrCode = () => {
    const qrData = `Name: ${name}\nEmail: ${email}\nEvent: ${event}\nPlace: ${subject}\nDate: ${date}\nTime: ${time}\nMobile: ${no}\nPinCode: ${pin}\nMessage: ${message}`;
    const qrUrl = `https://chart.googleapis.com/chart?cht=qr&chs=200x200&chl=${encodeURIComponent(qrData)}`;
    setQrCode(qrUrl);
  };

  return (
    <section className="ftco-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center mb-5">
            <h2 className="heading-section">Generate your Event QR code</h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-12">
            <div className="wrapper">
              <div className="row">
                <div className="col-md-3">
                  <div id="qrcode" className="mt-5 text-center">
                    {qrCode && <img src={qrCode} alt="QR Code" />}
                  </div>
                </div>
                <div className="col-md-9">
                  <div className="row no-gutters">
                    <div className="col-lg-12 col-md-12 order-md-last d-flex align-items-stretch">
                      <div className="contact-wrap w-100 p-md-5 p-4">
                        <h3 className="mb-4">Get in touch</h3>
                        <form
                          method="POST"
                          id="contactForm"
                          name="contactForm"
                          className="contactForm"
                        >
                          <div className="row">


                            <div className="col-md-6">
                              <div className="form-group">
                                <label className="label" htmlFor="name">
                                  Full Name
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  name="name"
                                  id="name"
                                  placeholder="Name"
                                  value={name}
                                  onChange={(e) => setName(e.target.value)}
                                />
                              </div>
                            </div>


                            <div className="col-md-6">
                              <div className="form-group">
                                <label className="label" htmlFor="email">
                                  Email Address
                                </label>
                                <input
                                  type="email"
                                  className="form-control"
                                  name="email"
                                  id="email"
                                  placeholder="Email"
                                  value={email}
                                  onChange={(e) => setEmail(e.target.value)}
                                />
                              </div>
                            </div>








                            <div className="col-md-6">
                              <div className="form-group">
                                <label className="label" htmlFor="event">
                                  Event Type
                                </label>
                                <select
                                  type="select"
                                  className="form-control"
                                  name="event"
                                  id="event"
                                  value={event}
                                  onChange={(e) => setEvent(e.target.value)}>
                                  <option value="Charity">Charity</option>
                                  <option value="Conference">Conference</option>
                                  <option value="Birthday">Birthday</option>
                                  <option value="Wedding">Wedding</option>
                                  <option value="Ring Ceremony">Ring Ceremony</option>
                                  <option value="DJ">DJ</option>
                                  <option value="Venue Selection">Venue Selection</option>
                                  <option value="Holi">Holi</option>
                                  </select>
                              </div>
                            </div>


                            



                            <div className="col-md-12">
                              <div className="form-group">
                                <label className="label" htmlFor="subject">
                                  enter complete address with state
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  name="subject"
                                  id="subject"
                                  placeholder="place"
                                  value={subject}
                                  onChange={(e) => setSubject(e.target.value)}
                                />
                              </div>
                            </div>



                            <div className="col-md-12">
                            <div className="form-group">
                              <label className="label" htmlFor="pin">
                                PIN Code:
                              </label>
                              <input 
                              type="number"
                                name="pin"
                                className="form-control"
                                id="pin"
                                value={pin}
                                onChange={(e) => setPin(e.target.value)}
                              />
                            </div>
                          </div>



                            <div className="col-md-12">
                              <div className="form-group">
                                <label className="label" htmlFor="message">
                                  Event Date
                                </label>
                                <input 
                                type="date"
                                  name="date"
                                  className="form-control"
                                  id="date"
                                  value={date}
                                  onChange={(e) => setDate(e.target.value)}
                                />
                              </div>
                            </div>




                            <div className="col-md-12">
                            <div className="form-group">
                              <label className="label" htmlFor="time">
                                Event Time
                              </label>
                              <input 
                              type="time"
                                name="time"
                                className="form-control"
                                id="time"
                                value={time}
                                onChange={(e) => setTime(e.target.value)}
                              />
                            </div>
                          </div>



                          <div className="col-md-12">
                          <div className="form-group">
                            <label className="label" htmlFor="mobile">
                              Mobile no:
                            </label>
                            <input 
                            type="number"
                              name="no"
                              className="form-control"
                              id="no"
                              value={no}
                              onChange={(e) => setNo(e.target.value)}
                            />
                          </div>
                        </div>




                            <div className="col-md-12">
                              <div className="form-group">
                                <label className="label" htmlFor="message">
                                  Message
                                </label>
                                <textarea
                                  name="message"
                                  className="form-control"
                                  id="message"
                                  cols="30"
                                  rows="4"
                                  placeholder="Message"
                                  value={message}
                                  onChange={(e) => setMessage(e.target.value)}
                                ></textarea>
                              </div>
                            </div>



                            <div className="col-md-12">
                              <div className="form-group">
                                <button
                                  type="button"
                                  className="btn btn-primary"
                                  onClick={generateQrCode}
                                >
                                  Create QR Code
                                </button>
                                <div className="submitting"></div>
                              </div>
                            </div>



                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="text pl-3">
                    <p>
                      <span>Website</span> <a href="#">TapTicket</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default QrForm;
