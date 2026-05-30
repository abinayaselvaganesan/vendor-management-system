import axios from "axios";
import {useState} from "react";

function AddVendor()
{

    const[vendor,setVendor]=useState({

        vendorName:"",
        companyName:"",
        email:"",
        phone:"",
        category:""

    });

    function handleChange(event)
    {
        setVendor({

            ...vendor,
            [event.target.name]:event.target.value

        });
    }

    async function handleSubmit(event)
    {
        event.preventDefault();

        try
        {

            await axios.post(

                "http://localhost:8080/vendors",

                {
                    ...vendor,
                    status:"Pending"
                }

            );

            alert("Vendor Added Successfully");

            setVendor({

                vendorName:"",
                companyName:"",
                email:"",
                phone:"",
                category:""

            });

        }

        catch(error)
        {
            console.log(error);
        }
    }

    return(

        <div className="form-container">

            <form
            className="vendor-form"
            onSubmit={handleSubmit}
            >

                <h2>Add Vendor</h2>

                <input
                type="text"
                name="vendorName"
                placeholder="Vendor Name"
                value={vendor.vendorName}
                onChange={handleChange}
                />

                <input
                type="text"
                name="companyName"
                placeholder="Company Name"
                value={vendor.companyName}
                onChange={handleChange}
                />

                <input
                type="email"
                name="email"
                placeholder="Email"
                value={vendor.email}
                onChange={handleChange}
                />

                <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={vendor.phone}
                onChange={handleChange}
                />

                <select
                name="category"
                value={vendor.category}
                onChange={handleChange}
                >

                    <option value="">
                        Select Category
                    </option>

                    <option value="Premium">
                        Premium
                    </option>

                    <option value="Normal">
                        Normal
                    </option>

                </select>

                <button type="submit">
                    Add Vendor
                </button>

            </form>

        </div>

    );
}

export default AddVendor;