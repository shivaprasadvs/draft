import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <footer >
                <div className="footer">
                    <center style={{marginTop: '5px'}}><span className="footer-text">Shiva Prasad | <a href="https://www.facebook.com/shivavs" target="blank"><i className="fa fa-facebook-square" ></i></a> | <a href="https://www.instagram.com/5hiva" target="blank"><i className="fa fa-instagram" ></i></a> | <a href="https://www.twitter.com/5hiva" target="blank"><i className="fa fa fa-twitter"></i></a></span></center>
                </div>
            </footer>
        );
    }
}

export default Footer;
