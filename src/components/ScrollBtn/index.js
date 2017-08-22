import React, { Component } from 'react';
import './index.css';

export default class ScrollBtn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
        this.handlerClick = this.handlerClick.bind(this);
    }

    goTop(acceleration, time) {
        let xScroll = document.documentElement.scrollLeft || document.body.scrollLeft || window.scrollLeft || 0,
            yScroll = document.documentElement.scrollTop || document.body.scrollTop || window.scrollTop || 0,
            speed = 1 + acceleration;

        window.scrollTo(Math.floor(xScroll / speed), Math.floor(yScroll / speed));

        
        if (xScroll > 0 || yScroll > 0) {
            setTimeout(() => {
                this.goTop(acceleration, time);
            }, time);
        }
    }

    handlerClick() {
        this.goTop(.4, 40);
    }

    componentDidMount() {
        let scrollBtn = document.getElementsByClassName('scroll2Top-btn')[0];
        window.addEventListener('scroll', () => {
            let contentTop = document.documentElement.clientHeight || window.innerHeight,
                scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            
            if (contentTop < scrollTop) {
                scrollBtn.style.display = "block";
            } else {
                scrollBtn.style.display = "none";
            }
        });
    }

    render() {
        return (
            <div className="scroll2Top-btn" onClick={this.handlerClick}>
                <i className = "fa fa-arrow-up"></i>
            </div>
        );
    }
}