import React, { useEffect, useState } from 'react';
import Bands from '../Bands/Bands';
import Cost from '../Cost/Cost';
import './Concert.css'

const Concert = () => {

    // band fetching & store data
    const [bands, setBands] = useState([])

    useEffect(() => {
        fetch('./bands.JSON')
            .then(res => res.json())
            .then(data => setBands(data))
    }, [])

    // selected band fetching and showing data
    const [cost, setCost] = useState([]);

    const handleCost = (band) => {
        band.isAdded = true;
        const newBand = [...cost, band]
        setCost(newBand)
    }

    return (
        <div className="concert-container">
            <div className="row">
                {/* band details */}
                <div className="col-md-9">
                    <div className="row">
                        {
                            bands.map(band => <Bands
                                key={band.key}
                                band={band}
                                handleCost={handleCost}
                            ></Bands>)
                        }
                    </div>
                </div>
                {/* selected band's cost */}
                <div className="col-md-3">
                    <Cost
                        cost={cost}
                    ></Cost>
                </div>
            </div>
        </div>
    );
};

export default Concert;