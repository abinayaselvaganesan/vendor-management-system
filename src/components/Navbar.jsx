import {Link} from "react-router-dom";

function Navbar()
{
    return(

        <div className="navbar">

            <Link to="/">Login</Link>

            <Link to="/dashboard">Dashboard</Link>

            <Link to="/vendorList">Vendor List</Link>

            <Link to="/addVendor">Add Vendor</Link>

            <Link to="/approval">Approval</Link>

        </div>

    )
}

export default Navbar;