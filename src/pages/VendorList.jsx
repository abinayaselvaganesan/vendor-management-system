import axios from "axios";

import {useEffect,useState} from "react";

function VendorList()
{

    const[vendors,setVendors]=useState([]);

    useEffect(()=>{

        getVendors();

    },[]);

    async function getVendors()
    {
        try
        {

            const response=
            await axios.get(
                "http://localhost:8080/vendors"
            );

            setVendors(response.data);

        }

        catch(error)
        {
            console.log(error);
        }
    }

    async function deleteVendor(id)
    {
        try
        {

            await axios.delete(
                `http://localhost:8080/vendors/${id}`
            );

            getVendors();

        }

        catch(error)
        {
            console.log(error);
        }
    }

    return(

        <div className="vendor-container">

            <h1>Vendor List</h1>

            <table>

                <thead>

                    <tr>

                        <th>Vendor Name</th>
                        <th>Company</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Category</th>
                        <th>Status</th>
                        <th>Action</th>

                    </tr>

                </thead>

                <tbody>

                    {
                        vendors.map((vendor)=>(

                            <tr key={vendor.id}>

                                <td>{vendor.vendorName}</td>

                                <td>{vendor.companyName}</td>

                                <td>{vendor.email}</td>

                                <td>{vendor.phone}</td>

                                <td>{vendor.category}</td>

                                <td>{vendor.status}</td>

                                <td>

                                    <button
                                    onClick={()=>
                                    deleteVendor(vendor.id)}
                                    >
                                        Delete
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

export default VendorList;