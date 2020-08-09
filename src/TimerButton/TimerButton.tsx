import React from 'react';
import PropTypes from 'prop-types';

const TimerButton = (props: any) => (
    <div className="button-container">
        <button>
            {props.buttonValue}
        </button>
    </div>
);

TimerButton.propTypes = {
    buttonAction: PropTypes.func.isRequired,
    buttonValue: PropTypes.string.isRequired,
};

export default TimerButton