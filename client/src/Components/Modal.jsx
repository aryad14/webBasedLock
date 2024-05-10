import React from 'react'
import { useState } from 'react'

const Modal = ({ isOpen, closeModal }) => {
    if (!isOpen) {
        return null;
    }
    return (
        <React.Fragment>
            <div className="modal-backdrop fade show"></div>
            <div className="modal fade show" tabIndex="-1" style={{ display: 'block' }}>
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Add a New Locker</h1>
                            <button type="button" className="btn-close" onClick={closeModal} data-bs-dismiss="modal"
                                aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form action="">
                                <div className="mb-3">
                                    <label htmlFor="lockerTitle" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="lockerTitle"
                                        placeholder="Give your Locker a Name" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="lockDesc" className="form-label">Description</label>
                                    <input type="text" className="form-control" id="lockDesc"
                                        placeholder="Describe the Purpose of the Locker" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="lockDesc" className="form-label">Location</label>
                                    <input type="text" className="form-control" id="lockDesc"
                                        placeholder="Where is your Locker Kept?" />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary"
                                data-bs-dismiss="modal" onClick={closeModal}>Close</button>
                            <button type="button" className="btn btn-primary">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment >
    )
}

export default Modal