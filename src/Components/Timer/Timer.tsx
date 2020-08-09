import React, { Component } from 'react';
import TimerButton from '../../TimerButton/TimerButton';

class Timer extends Component {
    constructor(props: Readonly<{}>) {
        super(props);
        this.state = {
            minutes: 25,
            seconds: 0,
            isOn: false
        };
    }

    startTimer() {
        console.log('Starting timer.');
    }

    stopTimer() {
        console.log('Stopping timer.');
    }

    resetTimer() {
        console.log('Resetting timer.');
    }

    render = () => {
        return (
            <div className="timer-container">
                <div className="time-display"></div>
                <div className="timer-button-container">
                    <TimerButton buttonAction={this.startTimer} buttonValue={'Start'} />
                    <TimerButton buttonAction={this.stopTimer} buttonValue={'Stop'} />
                    <TimerButton buttonAction={this.resetTimer} buttonValue={'Reset'} />
                </div>
            </div>)
    };
}

export default Timer;