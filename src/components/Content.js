import React from 'react';
import './Content.css';
import Banner from './Banner';
import html2canvas from 'html2canvas';
import canvas2image from "canvas2image-2";
import { GithubPicker } from 'react-color'; 

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            submitted: false,
            userInputText: '',
            userInputColor: '',
            userInputImage: '',
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({ submitted: true });
      };

    handleInputText = (event) => {
        this.setState({userInputText: event.target.value})
    }

    handleInputImage = (event) => {
        this.setState({userInputImage: event.target.value})
    }

    handleInputColor = (color) => {
        this.setState({ userInputColor: color.hex });
        document.querySelector('.content__form-input_type-color').textContent = this.state.userInputColor;
        document.querySelector('.content__form-input_type-color').setAttribute('style', 'color:black');
      };

    handleSavePng = (event) => {
        event.preventDefault();
        html2canvas(document.querySelector("#capture"))
        .then(canvas => {
           return canvas2image.saveAsPNG(canvas);
       });
    }

    handleSaveHtml = (event) => {
       event.preventDefault();
       let capture = document.querySelector('#capture');
       navigator.clipboard.writeText(capture.outerHTML)
       .then(() => {
           alert('Разметка скопирована');
         })
       .catch((err) => {
           alert('Ошибка'+err);
         });
    }

    handleSaveJson = (event) => {
        event.preventDefault();
        let banner = {
            text: this.state.userInputText,
            color: this.state.userInputColor,
            image: this.state.userInputImage,
          };
          
        let json = JSON.stringify(banner);
        navigator.clipboard.writeText(json)
        .then(() => {
            alert('Json скопирован');
          })
        .catch((err) => {
            alert('Ошибка'+err);
          });
     }

    render() {
        if(this.state.submitted) {
            return (
                <div className="content">
                    <Banner 
                        userInputText={this.state.userInputText}
                        userInputColor={this.state.userInputColor}
                        userInputImage={this.state.userInputImage}
                    />
                    <button onClick={this.handleSavePng} className="content__form-button content__form-button_type-png" type="button">PNG</button>
                    <button onClick={this.handleSaveHtml} className="content__form-button content__form-button_type-html" type="button">HTML</button>
                    <button onClick={this.handleSaveJson} className="content__form-button content__form-button_type-json" type="button">JSON</button>
                    <form className="content__form">
                        <button className="content__form-button" type="submit">&#x21bb;</button>
                    </form>
                </div>
            );
        } else {
            return (
                <div className="content">
                    <div className="content__image">
                    </div>
                    <form onSubmit={this.handleSubmit} className="content__form">
                        <input className="content__form-input" onChange={this.handleInputText} type="text" placeholder="Текст баннера" ></input>
                        <input className="content__form-input" onChange={this.handleInputImage} type="url" placeholder="Ссылка на картинку" ></input>
                        <p className="content__form-input content__form-input_type-color">
                            Выберите цвет
                        </p>
                        <GithubPicker
                            color={ this.state.userInputColor }
                            onChangeComplete={ this.handleInputColor }
                        />
                        <button className="content__form-button" type="submit">Ok</button>
                    </form>
                    
                </div>
            );
        }
    }
}

export default Content;