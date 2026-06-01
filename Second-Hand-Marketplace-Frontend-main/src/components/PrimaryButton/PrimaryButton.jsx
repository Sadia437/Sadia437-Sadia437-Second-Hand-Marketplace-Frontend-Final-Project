import React from 'react';

const PrimaryButton = ({children}) => {
    return (
        <div>
             <button className="btn btn-primary rounded-full">{children}</button>
        </div>
    );
};

export default PrimaryButton;