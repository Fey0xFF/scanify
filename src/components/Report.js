import React, { Component } from 'react';
import ReportItem from './ReportItem';

const Report = ({ vtData, emailData, reportState }) => {

    if (vtData.length > 0 && reportState ==='url') {
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
    } else if (emailData.length > 0 && reportState === 'email') {
        return (
            <div>
                email 
            </div>
        )
    } else {
        return (
            <div>empty!</div>
        )
    }
}

export default Report;