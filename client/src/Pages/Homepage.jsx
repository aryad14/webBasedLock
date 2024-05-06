import React from 'react'
import Navbar from '../Components/Navbar'
import Card from '../Components/Card'

const Homepage = () => {
    return (
        <React.Fragment>
            <Navbar />
            <div className="container">
                <div className="row mt-3 g-2">
                    <div className="col-md-6">
                        <Card />
                    </div>
                    <div className="col-md-6">
                        <Card />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Homepage