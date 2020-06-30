import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Master extends Component {
    render() {
        const style={
            color:"green", 
            textDecoration:"none"
            } 
        const menuStyle={
            fontSize:"20px",
            fontWeight:"500",
            color:"green"
        }
        return (
            <>
                <header>
                <div className="container-fluid">
                    <div className="row">
                    <div className="col-12">
                    <nav class="navbar navbar-expand-lg navbar-light bg-light">
                            
                            <div className="col-4">
                                <h1><a style={style} href="#">Logo</a></h1>
                            </div>
                            <div className="col-8">
                                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                             </button>
                    
                             <div class="collapse navbar-collapse" id="navbarColor03">
                            <ul  class="navbar-nav mr-auto text-right">
                                <li style={menuStyle} class="nav-item active">
                                    <Link to="/">Home</Link>
                                </li>
                                <li style={menuStyle} class="nav-item active">
                                    <Link to="/about">About</Link>
                                </li>
                                <li style={menuStyle} class="nav-item active">
                                    <Link to="/contact">Contact</Link>
                                </li>
                                </ul>
                            
                            </div>
                     </div>
                 </nav>
                   </div>
                    
                    
                </div>
            </div> 
                    
                   
                   
                </header>
                <br />
                <div>
                    {this.props.children}
                </div>
                <br />
                <footer className="cs-footer bg-dark pt-5 pt-md-6 pt-lg-7">
                    <div className="container pt-3 pt-md-0">
                        <div className="pb-md-4 text-center">
                        <h3 className="text-light font-weight-light mb-3">Still not convinced?</h3>
                        <h2 className="text-light mb-5">Add premium support and lifetime updates to this.</h2><a className="btn btn-primary" href="#"><i className="fe-shopping-cart font-size-lg mr-2"></i>Buy Around</a>
                        </div>
                        <hr className="hr-light mt-5 pb-4" />
                        <p className="font-size-sm text-center mb-4 py-3"><span className="text-light opacity-50 mr-1">© All rights reserved. Made by</span><a className="nav-link-style nav-link-light" href="https://kausaralam.com" target="_blank" rel="noopener">Kausar Alam</a></p>
                    </div>
                </footer> 
            </>
        )
    }
}
