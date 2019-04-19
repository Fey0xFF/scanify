import React, { Component } from 'react';
import ReportItem from './ReportItem';

const Report = ({ vtData }) => {

    if (vtData.length > 0) {
        return (
            <div>
                {
                    vtData.map(item => {
                        return(
                            <ReportItem item={item} />
                        )
                    })
                }
            </div>
        )
    } else {
        return (
            <div>empty!</div>
        )
    }
}

export default Report;