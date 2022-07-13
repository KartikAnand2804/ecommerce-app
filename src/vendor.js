import React from 'react';

export default function Vendor(){
 return(
    <div className="VendorPage" style={{ margin: "auto", justifyContent: "center" }}>
        <div className="vendorFormContainer" class="w-2/5 m-auto justify-center">
            <form className="VendorForm" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">

            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="ProductName">Enter the Name of the product</label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="ProductName"/>
            </div>

            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="ProductPrice">Fix a price for the product</label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="number" id="ProductPrice"/>
            </div>

            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="ProductDescription">Describe your product</label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="ProductDescription"/>
            </div>

            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="ProductPicture">Upload a picture of the project</label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="file" id="ProductPicture"/>
            </div>
            
            </form>
        </div>
    </div>
 )
}