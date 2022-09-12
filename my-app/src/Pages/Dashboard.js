import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
    const navigate = useNavigate()
    const goDetail = () => {
        navigate("/detail")
    }
    const goAddProduct = () => {
        navigate("/addproduct")
    }
    const goCart = () => {
        navigate("/cart")
    }
    const goEditProduct = () => {
        navigate("/editproduct")
    }
    const goHistory = () => {
        navigate("/history")
    }
    const goLogin = () => {
        navigate("/login")
    }
    const goMyStore = () => {
        navigate("/mystore")
    }
    return (
        <div>Dashboard
            <div>
                <Button variant="primary" onClick={() => goAddProduct()}>go add product</Button>
                <Button variant="primary" onClick={() => goCart()}>go cart</Button>
                <Button variant="primary" onClick={() => goDetail()}>go detail</Button>
                <Button variant="primary" onClick={() => goEditProduct()}>go edit product</Button>
                <Button variant="primary" onClick={() => goHistory()}>go history</Button>
                <Button variant="primary" onClick={() => goLogin()}>go login</Button>
                <Button variant="primary" onClick={() => goMyStore()}>go my store</Button>
            </div>
        </div>
    )
}

export default Dashboard