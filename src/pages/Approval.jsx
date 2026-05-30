import axios from "axios";
import { useEffect, useState } from "react";

function Approval() {

    const [vendors, setVendors] = useState([]);

    useEffect(() => {
        getVendors();
    }, []);

    async function getVendors() {
        try {
            const response = await axios.get(
                "http://localhost:8080/vendors"
            );

            setVendors(response.data);
        }
        catch (error) {
            console.log(error);
        }
    }

    async function approveVendor(vendor) {
        try {

            await axios.put(

                `http://localhost:8080/vendors/${vendor.id}`,

                {
                    ...vendor,
                    status: "Approved"
                }

            );

            getVendors();

        }
        catch (error) {
            console.log(error);
        }
    }

    async function rejectVendor(vendor) {
        try {

            await axios.put(

                `http://localhost:8080/vendors/${vendor.id}`,

                {
                    ...vendor,
                    status: "Rejected"
                }

            );

            getVendors();

        }
        catch (error) {
            console.log(error);
        }
    }

    return (

        <div className="vendor-container">

            <h1>Vendor Approval</h1>

            <table>

                <thead>

                    <tr>
                        <th>Vendor Name</th>
                        <th>Company</th>
                        <th>Category</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>

                </thead>

                <tbody>

                    {
                        vendors.map((vendor) => (

                            <tr key={vendor.id}>

                                <td>{vendor.vendorName}</td>

                                <td>{vendor.companyName}</td>

                                <td>{vendor.category}</td>

                                <td>{vendor.status}</td>

                                <td>

                                    <button
                                        onClick={() => approveVendor(vendor)}
                                    >
                                        Approve
                                    </button>

                                    <button
                                        onClick={() => rejectVendor(vendor)}
                                    >
                                        Reject
                                    </button>

                                </td>

                            </tr>

                        ))
                    }

                </tbody>

            </table>

        </div>

    );
}

export default Approval;