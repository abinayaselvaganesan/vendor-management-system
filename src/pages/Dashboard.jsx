import axios from "axios";
import { useEffect, useState } from "react";

function Dashboard()
{
    const [vendors, setVendors] = useState([]);

    useEffect(() => {

        getVendors();

    }, []);

    async function getVendors()
    {
        try
        {
            const response = await axios.get(
                "http://localhost:8080/vendors"
            );

            setVendors(response.data);
        }
        catch(error)
        {
            console.log(error);
        }
    }

    const total = vendors.length;

    const approved =
        vendors.filter(
            vendor => vendor.status === "Approved"
        ).length;

    const pending =
        vendors.filter(
            vendor => vendor.status === "Pending"
        ).length;

    const rejected =
        vendors.filter(
            vendor => vendor.status === "Rejected"
        ).length;

    return(

        <div className="dashboard-container">

            <h1>Vendor Dashboard</h1>

            <div className="card-container">

                <div className="card">
                    <h2>Total Vendors</h2>
                    <p>{total}</p>
                </div>

                <div className="card">
                    <h2>Approved</h2>
                    <p>{approved}</p>
                </div>

                <div className="card">
                    <h2>Pending</h2>
                    <p>{pending}</p>
                </div>

                <div className="card">
                    <h2>Rejected</h2>
                    <p>{rejected}</p>
                </div>

            </div>

        </div>

    );
}

export default Dashboard;