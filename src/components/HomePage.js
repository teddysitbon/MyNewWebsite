import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../assets/App.css';

class HomePage extends Component {
    constructor() {
        super();
        this.state = {
            firstName: "TEDDY",
            lastName : "SITBON",
            poste : "Développeur",
            specificPost : "Front-End"
        };
    }
    componentDidUpdate(){
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div>
                <section className='fullScreen homePage'>
                    <div className="borderAnimation">
                        <div className='borderScreenH'></div>
                        <div className='borderScreenV'></div>
                    </div>
                    <div className='contentCenter'>
                        <h1>
                            <span>{this.state.firstName}</span><br/><span>{this.state.lastName}</span><span className="dotCharacter">.</span>
                        </h1>
                        <p className="description">
                            <span>{this.state.poste} <span className="descriptionBold">{this.state.specificPost}</span></span>
                        </p>
                    </div>
                    <footer>
                        <span><Link to={process.env.PUBLIC_URL + '/work'}>Work.</Link></span>
                        <span><Link to={process.env.PUBLIC_URL + '/about'}>About.</Link></span>
                    </footer>
                </section>
            </div>
        );
    }
}
export default HomePage;
