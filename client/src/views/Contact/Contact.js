import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Contact extends Component {
    render() {
        return (
            <div>
                {/* <!--breadcrumbs area start--> */}
                <div class="breadcrumb-section cart_bread">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <div class="breadcrumb_content">
                                    <ul>
                                        <li><Link to="index.html">home</Link></li>
                                        <li class="active">contact</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--breadcrumbs area end--> */}


                {/* <!--contact area start--> */}
                <div class="contact_area">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6 col-md-12">
                                <div class="contact_message content">
                                    <h3>contact us</h3>
                                    <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram anteposuerit litterarum formas human. qui sequitur mutationem consuetudium lectorum. Mirum est notare quam</p>
                                    <ul>
                                        <li><i class="fa fa-fax"></i>  Address : 123 Chicago Rd, Chicago, IL 60654</li>
                                        <li><i class="fa fa-phone"></i> <Link to="#">comececeme@gmail.com</Link></li>
                                        <li><i class="fa fa-envelope-o"></i> +1 (555) 555-5555</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-12">
                                <div class="contact_message form">
                                    <h3>Tell us your project</h3>
                                    <form id="contact-form" method="POST" action="assets/mail.php">
                                        <p>
                                            <label> Your Name (required)</label>
                                            <input name="name" placeholder="Name *" type="text" />
                                        </p>
                                        <p>
                                            <label>  Your Email (required)</label>
                                            <input name="email" placeholder="Email *" type="email" />
                                        </p>
                                        <p>
                                            <label>  Subject</label>
                                            <input name="subject" placeholder="Subject *" type="text" />
                                        </p>
                                        <div class="contact_textarea">
                                            <label>  Your Message</label>
                                            <textarea placeholder="Message *" name="message" class="form-control2" ></textarea>
                                        </div>
                                        <button type="submit"> Send</button>
                                        <p class="form-messege"></p>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!--contact area end--> */}

                {/* <!--contact map start--> */}
                <div class="contact_map">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-12">
                                <div class="map-area">
                                    <div id="googleMap" style={{width:"100%", height:"460px"}}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--contact map end--> */}
            </div>
        )
    }
}
