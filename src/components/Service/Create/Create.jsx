import { Button, Form, Input, Row, Space } from 'antd';
import { Col } from 'antd';
import React, { useState } from 'react';

const CreateService = () => {
  const style = {
    background: '#0092ff',
    padding: '8px 0',
  };
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [form] = Form.useForm();
  const SubmitButton = ({ form }) => {
    const values = Form.useWatch([], form);
    React.useEffect(() => {}, [values, formSubmitted]);

    return (
      <Space>
        <Button type="primary" htmlType="button" onClick={handleSubmit}>
          Create
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
  const handleFormReset = () => {
    form.resetFields();
    setFormSubmitted(false);
  };
  const validateNumber = (rule, value, callback) => {
    if (value === '') {
      callback();
    } else if (isNaN(value)) {
      callback('Please enter a valid number');
    } else {
      callback();
    }
  };

  return (
    <>
      <div>
        <div>
          <Form form={form} name="validateOnly" layout="vertical" autoComplete="off">
            <Row gutter={16}>
              <Col className="gutter-row" span={6}>
                <Form.Item name="name" label="Name" rules={[{ required: true }]}>
                  <Input placeholder="Enter your name" />
                </Form.Item>
              </Col>
              <Col className="gutter-row" span={6}>
                <Form.Item
                  name="min"
                  label="Min price"
                  rules={[{ required: true, message: 'Please enter the maximum price' }, { validator: validateNumber }]}
                >
                  <Input placeholder="Enter min price" />
                </Form.Item>
              </Col>
              <Col className="gutter-row" span={6}>
                <Form.Item
                  name="max"
                  label="Max price"
                  rules={[{ required: true, message: 'Please enter the maximum price' }, { validator: validateNumber }]}
                >
                  <Input placeholder="Enter ma6x price" />
                </Form.Item>
              </Col>
            </Row>
            <div>
              <Form.Item name="description" label="Description" rules={[{ required: true }]}>
                <Input.TextArea autoSize={{ minRows: 5, maxRows: 10 }} placeholder="Description" />
              </Form.Item>
            </div>
          </Form>

          <SubmitButton form={form}>Reset</SubmitButton>
          <Button type="default" onClick={handleFormReset}>
            Reset
          </Button>
        </div>
      </div>
    </>
  );
};
export default CreateService;
