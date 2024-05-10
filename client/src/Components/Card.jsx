import React from 'react'

const Card = ({title,description}) => {
    return (
        <>
            <div className="card">
                <div className="card-header">
                    Locker ID: 821764yeuhdb74f4d
                </div>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href="#" className="me-1 btn btn-danger">Lock</a>
                    <a href="#" className="me-1 btn btn-success">Unlock</a>
                    <a href="#" className="me-1 btn btn-dark">Edit Details</a>
                </div>
            </div>
        </>
    )
}

export default Card