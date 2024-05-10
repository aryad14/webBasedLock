import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import Card from '../Components/Card'
import { CiCirclePlus } from "react-icons/ci";
import Modal from '../Components/Modal';

const Homepage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const [lockers, setLockers] = useState([]);

    useEffect(() => {
        const fetchLockers = async () => {
            await fetch('http://localhost:3000/api/userData/getLocks', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            }).then(res => res.json())
                .then(data => {
                    console.log(data);
                    setLockers(data);
                })
                .catch(err => {
                    console.log(err);
                })
        }
        fetchLockers();
    }, [])

    return (
        <React.Fragment>
            <Navbar />
            <div className="container mt-4">
                <div className="d-flex w-100 justify-content-between align-items-center">
                    <div>
                        <h3>Your Lockers</h3>
                    </div>
                    <div>
                        <button className="btn btn-dark">
                            <div className='d-flex align-items-center' onClick={handleOpenModal}>
                                <span className='me-1'>
                                    <CiCirclePlus size={24} />
                                </span>
                                <span>
                                    Add Locker
                                </span>
                            </div>
                        </button>
                    </div>
                </div>
                <div className="row mt-3 g-2">
                    {lockers.map((locker, key) => (
                        <div className="col-md-6">
                            <Card
                                title={locker.title}
                                description={locker.description}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <Modal isOpen={isModalOpen} closeModal={handleCloseModal} />
        </React.Fragment>
    )
}

export default Homepage