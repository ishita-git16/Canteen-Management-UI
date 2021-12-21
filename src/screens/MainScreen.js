import React from "react";
import {Layout,
    Avatar,
    Button,
    Col,
    Descriptions,
    Image,
    message,
    Row,
    Space,
    Typography,
    Table,} from 'antd';

import TheContent from "./Content";

const {Header, Footer, Sider, Content} = Layout;
const MainScreen = () => {
    return (
        <>
            <Layout
                className="site-layout"
                style={{height: "100vh", minWidth: "100vh"}}
            >

                        <Row style={{height: "20vh", backgroundColor: "#DBDDE0"}} >

                            <Col span={24} >
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "flex-center",
                                        alignItems: "center",
                                        margin:0,
                                    }}
                                >
                                    <Row>
                                        <Col span={24} >
                                            <div
                                                style={{
                                                    position: "relative",
                                                    top: 0,
                                                    right: 0,
                                                }}
                                            >
                                                <img className="canteenImage" src="Persistent_Systems.png"/>
                                            </div>
                                        </Col>

                                    </Row>
                                    <div class="canteen">Canteen Management</div>
                                </div>
                            </Col>

                        </Row>

                <TheContent/>
                <Footer
                    className="ant-layout-footer"
                    style={{
                        textAlign: "center",
                        backgroundColor: "#DBDDE0",
                        position: 0,
                        // minHeight: "2vh",
                        // minWidth: "100vh",
                        maxHeight: "10px",
                    }}
                >
                    <div>   Integrated Active Monitoring Pvt. Ltd.</div>
                  
                </Footer>
            </Layout>
        </>
    );
}

export default MainScreen;


