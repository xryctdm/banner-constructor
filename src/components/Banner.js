import React from 'react';
import './Banner.css';

class Banner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imageData: '',
            userInputText: props.userInputText,
            userInputColor: props.userInputColor,
            userInputImage: props.userInputImage,
        };
    }

    toDataURL(callback) {
        let proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        let xhr = new XMLHttpRequest();
        xhr.onload = function() {
          let reader = new FileReader();
          reader.onloadend = function() {
            callback(reader.result);
          }
          reader.readAsDataURL(xhr.response);
        };
        xhr.open('GET',proxyUrl+this.state.userInputImage);
        xhr.responseType = 'blob';
        xhr.send();
      }

    componentDidMount () {
        this.toDataURL((result) => {
            this.setState({imageData: result})
        });
    }

    render() {
        return (
            <div id="capture" className="banner" style={{background: this.state.userInputColor, height: `360px`}}>
                <img className="banner__image" src={this.state.imageData} alt=""/>
                <p className="banner__text">{this.state.userInputText}</p>
            </div>
        );
    }
}

export default Banner;