import React from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast, ToastContainer } from 'react-toastify'

const Modal = ({ isOpen, closeModal, addLocker }) => {
    if (!isOpen) {
        return null;
    }

    const { register, handleSubmit } = useForm();
    const onSubmit = async (data) => {
        await fetch('http://localhost:3000/api/userData/addLock', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: data.title,
                description: data.description,
                location: data.location
            })
        }).then(res => res.json())
            .then(data => {
                if (data.message) {
                    addLocker({
                        title: data.title,
                        description: data.description
                    });
                    closeModal();
                    toast.success('Added!!', {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light"
                    })
                }
            })
            .catch(err => {
                console.log(err);
                toast.error('Failed to Add Locker', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            })
    }
    return (
        <React.Fragment>
            <ToastContainer
                position="bottom-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition:Zoom
            />
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
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="mb-3">
                                    <label htmlFor="lockerTitle" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="lockerTitle"
                                        placeholder="Give your Locker a Name" {...register("title")} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="lockDesc" className="form-label">Description</label>
                                    <input type="text" className="form-control" id="lockDesc"
                                        placeholder="Describe the Purpose of the Locker" {...register("description")} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="lockDesc" className="form-label">Location</label>
                                    <input type="text" className="form-control" id="lockDesc"
                                        placeholder="Where is your Locker Kept?" {...register("location")} />
                                </div>
                                <button type={'submit'} className="btn btn-dark w-100">Save</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment >
    )
}

export default Modal