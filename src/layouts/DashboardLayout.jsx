import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/HeaderFooter/Footer'
import Navbar from '../components/HeaderFooter/Navbar'

function DashboardLayout() {
    return (
        <div><Navbar /><Outlet /><Footer /></div>
    )
}

export default DashboardLayout