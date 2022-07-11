import React from 'react';

export default function Vendor(){

    <div className="VendorPage">
        <div className="vendorFormContainer">
            <form className="VendorForm">
                <label for="ProductDescription">Describe your product</label>
                <label for="ProductName">Enter the Name of the product</label>
                <label for="ProductPrice">Fix a price for the product</label>
                <label for="ProductPicture">Upload a picture of the project</label>

                <input type="text" id="ProductName"/>
                <input type="number" id="ProductPrice"/>
                <input type="text" id="ProductDescription"/>
                <input type="file" id="ProductPicture"/>
            </form>
        </div>
    </div>

}