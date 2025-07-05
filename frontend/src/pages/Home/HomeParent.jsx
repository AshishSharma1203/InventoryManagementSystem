import React, { useContext } from "react";
import PrimarySearchAppBar from '../../components/Navbars/Navbar';
import Inventory from '../../components/Inventory/Inventory';
import GlobalContext from "../../contexts/GlobalContext";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../../components/Home/Home';
import LeftPanel from '../../components/LeftPanels/LeftPanel';
import Suppliers from '../../components/supplier/supplier';
import ManageProducts from '../../components/Manageproducts/ManageProducts';
 
const HomeParent = () => {
    const { openComponent, setOpenComponent } = useContext(GlobalContext);
 
    const productData = {
        labels: ['Electronics', 'Clothing', 'Furniture', 'Toys', 'Books'],
        datasets: [
            {
                label: 'Products',
                data: [50, 30, 20, 25, 25],
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
            },
        ],
    };
 
    const supplierData = {
        labels: ['Supplier A', 'Supplier B', 'Supplier C', 'Supplier D'],
        datasets: [
            {
                label: 'Suppliers',
                data: [15, 25, 20, 40],
                backgroundColor: 'rgba(255, 99, 132, 0.6)',
            },
        ],
    };
 
    return (
        <Router>
            <PrimarySearchAppBar />
            <div style={{ marginTop: '5rem' }}>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Home
                                productData={productData}
                                supplierData={supplierData}
                            />
                        }
                    />
                    <Route path="/inventory" element={<Inventory />} />
                    <Route path="/suppliers" element={<Suppliers />} />
                    <Route path="/manage-products" element={<ManageProducts />} />
                </Routes>
            </div>
        </Router>
    )
}
 
export default HomeParent;
