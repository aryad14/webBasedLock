import React from 'react'

const Modal = () => {
    return (
        <React.Fragment>
            <div>
                <button class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#addLocker">Add Locker</button>
                <div class="modal fade" id="addLocker" tabindex="-1" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Add a New Locker</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <form action="">
                                    <div class="mb-3">
                                        <label for="lockerTitle" class="form-label">Title</label>
                                        <input type="text" class="form-control" id="lockerTitle"
                                            placeholder="Give your Locker a Name" />
                                    </div>
                                    <div class="mb-3">
                                        <label for="lockDesc" class="form-label">Description</label>
                                        <input type="text" class="form-control" id="lockDesc"
                                            placeholder="Describe the Purpose of the Locker" />
                                    </div>
                                    <div class="mb-3">
                                        <label for="lockDesc" class="form-label">Location</label>
                                        <input type="text" class="form-control" id="lockDesc"
                                            placeholder="Where is your Locker Kept?" />
                                    </div>
                                </form>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary"
                                    data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Modal