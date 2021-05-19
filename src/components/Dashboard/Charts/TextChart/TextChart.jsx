import React from 'react';
import PropTypes from 'prop-types';

function TextChart({ adherentsCount }) {
    const { zoneName, adherentCount } = adherentsCount;
    return (
        <div className="row with-background dc-container p-2 mb-3">
            <div className="col text-center">
                La région {zoneName} compte
                {' '}{adherentCount} adhérents
            </div>
        </div>
    );
}

export default TextChart;

TextChart.propTypes = {
    adherentsCount: PropTypes.shape({
        adherentCount: PropTypes.number,
        zoneName: PropTypes.string,
    }).isRequired,
};