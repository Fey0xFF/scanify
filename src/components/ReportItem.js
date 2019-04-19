import React from 'react';

const ReportItem = ({ item }) => {

    return (
        <div>
            <h1>{item[0]}</h1>
            <p> 
                {
                    Object.keys(item[1])
                }
            </p>
            <p> 
                {
                    Object.values(item[1])
                }
            </p>
        </div>
    )
}

export default ReportItem;