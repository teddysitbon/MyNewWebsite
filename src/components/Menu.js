import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../assets/App.css';
import CV_Teddy from '../assets/CV_TeddySITBON.pdf';
import createHistory from 'history/createBrowserHistory';


class Menu extends Component {

    constructor() {
        super();
        this.state = {
            open: false
        };
        this.handleMenu = this.handleMenu.bind(this);
        this.handleLink = this.handleLink.bind(this);
    }

    handleMenu() {
        this.setState({
            open : !this.state.open
        });
    }

    handleLink(){
        this.setState({
            open : false
        });
    }

    render() {
        const history = createHistory()
        const location = history.location;
        return (
            <header
                className={ this.state.open ? "menuOpen" : ""}
            >
                <button
                    className={location.pathname === "/about" ? "navbar-toggle purpleColor" : "navbar-toggle"}
                    onClick={this.handleMenu}
                >
                  <div>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                  </div>
                </button>
                <div className='menu'>
                    <div className='contentMenu'>
                        <ul>
                            <li className='itemMenu'>
                                <Link onClick={this.handleLink} to={process.env.PUBLIC_URL + '/'} className={location.pathname === "/" ? "activeMenu" : ""}>Home.</Link>
                            </li>
                            <li className='itemMenu'>
                                <Link onClick={this.handleLink} to={process.env.PUBLIC_URL + '/work'} className={location.pathname === "/work" ? "activeMenu" : ""}>Work.</Link>
                            </li>
                            <li className='itemMenu'>
                                <Link onClick={this.handleLink} to={process.env.PUBLIC_URL + '/about'} className={location.pathname === "/about" ? "activeMenu" : ""}>About.</Link>
                            </li>
                        </ul>
                        <div className='socialMediaMenu'>
                            <div className='mailSocial'><a href="mailto:sitbon.teddy@gmail.com?Subject=Hello%20Teddy">teddysitbon<span>@</span>gmail.com</a></div>
                            <div className='svgMedia'>
                                <span>
                                    <a href='https://www.linkedin.com/in/teddysitbon/' target="_BLANK" rel="noopener noreferrer">
                                        <i dangerouslySetInnerHTML={{__html: "<svg id='linkedinSVG' x='0px' y='0px' width='30.117px' height='30.117px' viewBox='0 0 430.117 430.117' style='enable-background:new 0 0 430.117 430.117;' ><path d='M430.117,261.543V420.56h-92.188V272.193c0-37.271-13.334-62.707-46.703-62.707   c-25.473,0-40.632,17.142-47.301,33.724c-2.432,5.928-3.058,14.179-3.058,22.477V420.56h-92.219c0,0,1.242-251.285,0-277.32h92.21   v39.309c-0.187,0.294-0.43,0.611-0.606,0.896h0.606v-0.896c12.251-18.869,34.13-45.824,83.102-45.824   C384.633,136.724,430.117,176.361,430.117,261.543z M52.183,9.558C20.635,9.558,0,30.251,0,57.463   c0,26.619,20.038,47.94,50.959,47.94h0.616c32.159,0,52.159-21.317,52.159-47.94C103.128,30.251,83.734,9.558,52.183,9.558z    M5.477,420.56h92.184v-277.32H5.477V420.56z'/></svg>"}} ></i>
                                    </a>
                                </span>
                                <span>
                                    <a href="https://github.com/teddysitbon/" target="_BLANK" rel="noopener noreferrer">
                                        <i dangerouslySetInnerHTML={{__html: "<svg id='githubSVG' x='0px' y='0px' width='38.549px' height='38.549px' viewBox='0 0 438.549 438.549' style='enable-background:new 0 0 438.549 438.549;'><path d='M409.132,114.573c-19.608-33.596-46.205-60.194-79.798-79.8C295.736,15.166,259.057,5.365,219.271,5.365   c-39.781,0-76.472,9.804-110.063,29.408c-33.596,19.605-60.192,46.204-79.8,79.8C9.803,148.168,0,184.854,0,224.63   c0,47.78,13.94,90.745,41.827,128.906c27.884,38.164,63.906,64.572,108.063,79.227c5.14,0.954,8.945,0.283,11.419-1.996   c2.475-2.282,3.711-5.14,3.711-8.562c0-0.571-0.049-5.708-0.144-15.417c-0.098-9.709-0.144-18.179-0.144-25.406l-6.567,1.136   c-4.187,0.767-9.469,1.092-15.846,1c-6.374-0.089-12.991-0.757-19.842-1.999c-6.854-1.231-13.229-4.086-19.13-8.559   c-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559   c-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-0.951-2.568-2.098-3.711-3.429c-1.142-1.331-1.997-2.663-2.568-3.997   c-0.572-1.335-0.098-2.43,1.427-3.289c1.525-0.859,4.281-1.276,8.28-1.276l5.708,0.853c3.807,0.763,8.516,3.042,14.133,6.851   c5.614,3.806,10.229,8.754,13.846,14.842c4.38,7.806,9.657,13.754,15.846,17.847c6.184,4.093,12.419,6.136,18.699,6.136   c6.28,0,11.704-0.476,16.274-1.423c4.565-0.952,8.848-2.383,12.847-4.285c1.713-12.758,6.377-22.559,13.988-29.41   c-10.848-1.14-20.601-2.857-29.264-5.14c-8.658-2.286-17.605-5.996-26.835-11.14c-9.235-5.137-16.896-11.516-22.985-19.126   c-6.09-7.614-11.088-17.61-14.987-29.979c-3.901-12.374-5.852-26.648-5.852-42.826c0-23.035,7.52-42.637,22.557-58.817   c-7.044-17.318-6.379-36.732,1.997-58.24c5.52-1.715,13.706-0.428,24.554,3.853c10.85,4.283,18.794,7.952,23.84,10.994   c5.046,3.041,9.089,5.618,12.135,7.708c17.705-4.947,35.976-7.421,54.818-7.421s37.117,2.474,54.823,7.421l10.849-6.849   c7.419-4.57,16.18-8.758,26.262-12.565c10.088-3.805,17.802-4.853,23.134-3.138c8.562,21.509,9.325,40.922,2.279,58.24   c15.036,16.18,22.559,35.787,22.559,58.817c0,16.178-1.958,30.497-5.853,42.966c-3.9,12.471-8.941,22.457-15.125,29.979   c-6.191,7.521-13.901,13.85-23.131,18.986c-9.232,5.14-18.182,8.85-26.84,11.136c-8.662,2.286-18.415,4.004-29.263,5.146   c9.894,8.562,14.842,22.077,14.842,40.539v60.237c0,3.422,1.19,6.279,3.572,8.562c2.379,2.279,6.136,2.95,11.276,1.995   c44.163-14.653,80.185-41.062,108.068-79.226c27.88-38.161,41.825-81.126,41.825-128.906   C438.536,184.851,428.728,148.168,409.132,114.573z'/></svg>"}}></i>
                                    </a>
                                </span>
                                <span>
                                    <a href={CV_Teddy} target="_BLANK" rel="noopener noreferrer">
                                        <i dangerouslySetInnerHTML={{__html: "<svg height='300px' width='300px' fill='#000000' x='0px' y='0px' viewBox='0 0 100 100'><path style='color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;baseline-shift:baseline;text-anchor:start;white-space:normal;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#7448FF;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:5.00000048;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;marker:none;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate' d='M 18.572266 5 C 14.460508 5 11.072266 8.3882427 11.072266 12.5 L 11.072266 87.5 C 11.072266 91.611758 14.460509 95 18.572266 95 L 81.427734 95 C 85.539491 95 88.927734 91.611758 88.927734 87.5 L 88.927734 12.5 C 88.927734 8.3882421 85.539492 5 81.427734 5 L 18.572266 5 z M 18.572266 10 L 81.427734 10 C 82.855977 10 83.927734 11.071757 83.927734 12.5 L 83.927734 87.5 C 83.927734 88.928244 82.855977 90 81.427734 90 L 18.572266 90 C 17.144023 90 16.072266 88.928244 16.072266 87.5 L 16.072266 12.5 C 16.072266 11.071756 17.144023 10 18.572266 10 z M 50 18.123047 C 46.227693 18.137947 43.184414 21.240331 43.208984 25.050781 C 43.184414 28.899061 46.227693 32.001822 50 31.982422 C 53.771983 32.002122 56.815586 28.899061 56.791016 25.050781 C 56.815586 21.240331 53.771983 18.137907 50 18.123047 z M 42.804688 33.890625 C 38.029255 33.909725 33.819773 41.921765 33.835938 46.828125 L 66.164062 46.828125 C 66.180873 41.921765 61.970421 33.909705 57.195312 33.890625 L 42.804688 33.890625 z M 21.935547 56.654297 L 21.935547 61.595703 L 77.568359 61.595703 L 77.568359 56.654297 L 21.935547 56.654297 z M 21.935547 66.847656 L 21.935547 71.789062 L 77.568359 71.789062 L 77.568359 66.847656 L 21.935547 66.847656 z M 21.935547 77.041016 L 21.935547 81.982422 L 77.568359 81.982422 L 77.568359 77.041016 L 21.935547 77.041016 z '/></svg>"}}></i>
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Menu;
