import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Authentication extends Component {
    render() {
        return (
            <div>
                {/* <!--breadcrumbs area start--> */}
                <div className="breadcrumb-section cart_bread">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="breadcrumb_content">
                                    <ul>
                                        <li><Link to="/">home</Link></li>
                                        <li className="active">login</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--breadcrumbs area end--> */}

                {/* <!-- customer login start --> */}
                <div className="customer_login">
                    <div className="container">
                        <div className="row">
                            {/* <!--login area start--> */}
                            <div className="col-lg-6 col-md-6">
                                <div className="account_form">
                                    <h2>login</h2>
                                    <form action="#">
                                        <p>
                                            <label>Username or email <span>*</span></label>
                                            <input type="text" />
                                        </p>
                                        <p>
                                            <label>Passwords <span>*</span></label>
                                            <input type="password" />
                                        </p>
                                        <div className="login_submit">
                                            <button type="submit">login</button>
                                            <label for="remember">
                                                <input id="remember" type="checkbox" />
                                                            Remember me
                                        </label>
                                            <Link to="#">Lost your password?</Link>
                                        </div>

                                    </form>
                                </div>
                            </div>
                            {/* <!--login area start--> */}

                            {/* <!--register area start--> */}
                            <div className="col-lg-6 col-md-6">
                                <div className="account_form register">
                                    <h2>Register</h2>
                                    <form action="#">
                                        <p>
                                            <label>Email address  <span>*</span></label>
                                            <input type="text" />
                                        </p>
                                        <p>
                                            <label>Passwords <span>*</span></label>
                                            <input type="password" />
                                        </p>
                                        <div className="login_submit">
                                            <button type="submit">Register</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            {/* <!--register area end--> */}
                        </div>
                    </div>
                </div>
                {/* <!-- customer login end --> */}
            </div>
        )
    }
}
