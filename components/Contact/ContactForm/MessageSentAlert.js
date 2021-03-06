import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const MessageSentAlert = ({ success }) => {
    if(success !== true) {
        return null;
    }

    return (
        <div className="alert alert-success contact_request-alert">
            <span>
                Message sent
                {' '}
                <FontAwesomeIcon
                    fixedWidth
                    size="lg"
                    icon={faCheck}
                />
            </span>
        </div>
    );
};

MessageSentAlert.propTypes = {
    success: PropTypes.bool,
};

export default MessageSentAlert;
