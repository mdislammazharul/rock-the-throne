import React from 'react';
import './Cost.css'

const Cost = (props) => {
    const { cost } = props;
    const total = cost.reduce((previous, band) => previous + band.rate, 0)
    return (
        <div>
            {/* total budger */}
            <div className="total-band mt-3">
                <h1 className="text-warning text-center"><strong className="text-danger">Total Band:</strong> {props.cost.length}</h1>
                <h1 className="text-warning text-center"><strong className="text-danger">Budget:</strong> {total}</h1>
            </div>
            {/* small card */}
            {
                cost.map(pd =>
                    <div className="card h-25 card-background d-flex flex-row mb-2">
                        <div>
                            <img src={pd.img} className="cost-card-img" alt="..." />
                        </div>
                        <div className="card-body">
                            <h3 className="card-title text-warning">{pd.name}</h3>
                        </div>
                    </div>)
            }
        </div>
    );
};

export default Cost;