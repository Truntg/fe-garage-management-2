/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prop-types */
import { Button, Card, Checkbox, Col, DatePicker, Form, Input, Row, Select, Space } from 'antd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DetailOwner = ({ value }) => {
  const [form] = Form.useForm();
  const dateFormat = 'YYYY/MM/DD';

  const [formSubmitted, setFormSubmitted] = useState(false);

  const allGarages = ['Garage 1', 'Garage 2', 'Garage 3', 'Garage 4', 'Garage 5'];
  const [filterValue, setFilterValue] = useState('');
  const filteredGarages = allGarages.filter((garage) => garage.includes(filterValue));

  const handleInputChange = (e) => {
    setFilterValue(e.target.value);
  };

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  const SubmitButton = ({ form }) => {
    const values = Form.useWatch([], form);
    React.useEffect(() => {}, [values, formSubmitted]);

    return (
      <Space>
        <Button type="primary" htmlType="button" onClick={handleSubmit}>
          Save
        </Button>
      </Space>
    );
  };
  const handleSubmit = () => {
    setFormSubmitted(true);
    form
      .validateFields()
      .then((values) => {
        console.log('Form values:', values);
      })
      .catch((error) => {
        console.error('Form validation error:', error);
      });
  };
  return (
    <>
      <div>
        <Form
          form={form}
          name="validateOnly"
          layout="vertical"
          autoComplete="off"
          initialValues={{
            name: '',
            email: '',
            password: '',
            phone: '',
            gender: 'Gender',
            dob: '',
            role: 'Role',
            garage: '',
          }}
        >
          <Row gutter={[16, 34]}>
            <Col className="gutter-row" span={5}>
              <Form.Item name="name" label="Name">
                <div>Example</div>
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={5}>
              <Form.Item name="email" label="Email">
                <div>Example</div>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[16, 34]}>
            <Col className="gutter-row" span={5}>
              <Form.Item name="password" label="Password">
                <div>Example</div>
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={5}>
              <Form.Item name="phone" label="Phone Number">
                <div>Example</div>
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={5}>
              <div>Example</div>
            </Col>
          </Row>
          <Row gutter={[16, 24]}>
            <Col className="gutter-row" span={5}>
              <div>Example</div>
            </Col>
            <Col className="gutter-row" span={5}>
              <Form.Item name="role" label="Role">
                <div>Example</div>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[16, 24]}>
            <Col className="gutter-row" span={8}>
              <Card>
                <Form.Item name="garage" label="Garage">
                  {filteredGarages.map((garage) => (
                    <div key={garage} value={garage}>
                      <Link>{garage}</Link>
                    </div>
                  ))}
                </Form.Item>
              </Card>
            </Col>
          </Row>
        </Form>
        <SubmitButton form={form} />
        <Button>Cancel</Button>
      </div>
    </>
  );
};
export default DetailOwner;
