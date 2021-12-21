import React, { useState, Suspense, useEffect } from "react";
import axios from "axios";
// import './App.css';
import { Space, Card, Row, Col, message, Typography } from "antd";

import { Layout } from "antd";
import "antd/dist/antd.css";
import { Progress } from 'antd';
const { Content } = Layout;


const TheContent = () => {
    const { Title } = Typography;
    const [data, setData] = useState([]);
    const [one, setOne] = useState();
    const [two, setTwo] = useState();
    const [three, setThree] = useState();
    const [four, setFour] = useState();
    const [five, setFive] = useState();
    useEffect(() => {
        axios({
            method: "GET",
            url: `/devices/physical/statechanges`,
        })

            // console.log(res.data);
            .then((res) => {
                // setData(res.data);
                // setFilteredPanelList(res.data);
                setData(res.data);
                setOne(res.data.IN1);
                setTwo(res.data.IN2);
                setThree(res.data.IN3);
                setFour(res.data.IN4);
                setFive(res.data.IN1 + res.data.IN2 + res.data.IN3 + res.data.IN4)
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);


    return (
        <Content
            className="site-layout-background"
            style={{
                height: "10vh",
            }}
        >
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "relative",
                    top: 0,
                    left: 0,
                    height: "100%",
                    width: "100%",
                }}
            >
                <Row>
                    <Space>
                        <Col>
                            <div class="cstyle">
                                <Card title="Counter 1" bordered={false} style={{ width: 300, height: 350 }}    >
                                    <>
                                        {/* <div className="circle">120</div> */}
                                        <div class="cstyle">
                                            <div class="oring">
                                                <div class="iring">
                                                    <div class="text"> {one} </div>
                                                </div>
                                            </div>
                                        </div>
                                        <Title level={2}> Plates</Title>
                                    </>
                                </Card>
                            </div>
                        </Col>
                        <Col>
                            <Card title="Counter 2" bordered={false} style={{ width: 300, height: 350 }}>
                            <div class="oring">
                                                <div class="iring">
                                                <div class="text"> {two} </div>
                                                </div>
                                            </div>
                                <Title level={2}> Plates</Title>
                            </Card>
                        </Col>
                        <Col>
                            <Card title="Counter 3" bordered={false} style={{ width: 300, height: 350 }}>
                            <div class="oring">
                                                <div class="iring">
                                                <div class="text"> {three} </div>
                                                </div>
                                            </div>
                                <Title level={2}> Plates</Title>
                            </Card>
                        </Col>
                        <Col>
                            <Card title="Counter 4" bordered={false} style={{ width: 300, height: 350 }}>
                            <div class="oring">
                                                <div class="iring">
                                                <div class="text"> {four} </div>
                                                </div>
                                            </div>
                                <Title level={2}> Plates</Title>
                            </Card>
                        </Col>
                    </Space>
                </Row>
                <br></br>
                <Row>

                </Row>

            </div>
        </Content>
    )
};

export default TheContent;
