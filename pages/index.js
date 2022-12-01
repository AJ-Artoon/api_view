import { useState } from "react";
import { Button, Col, Row } from "antd";
import { InputCustom, TableCustom } from "../components";
import styles from "../styles/Home.module.css";
import { apicall } from "../constant/apicall";
import axios from "axios";

export default function Home() {
  const [val, setValue] = useState('')
  const handleapi = (e) => {
    const { value, name } = e.target;
    setValue(value)
  };
  const handlesubmit = (e) => {
    axios.get(val).then((response)=>{
    console.log(response.data)
})
  };
  return (
    <div className={styles.container}>
      <Row>
        <Col span={16}>
          <InputCustom placeholder="api here" defaultValue={val} onChange={handleapi} />
        </Col>
        <Col span={8} className="center-t">
          <Button type="primary" danger onClick={handlesubmit}>
            get data
          </Button>
        </Col>
      </Row>
      <Row>
        <Col span={24} className="mt-10">
          <TableCustom />
        </Col>
      </Row>
    </div>
  );
}
