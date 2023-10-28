import { Button, Form, Input } from 'antd';
import './css/Signin.css';
const Forgot = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <div className="container">
      <div className="content">
        <h3>Forgot password</h3>
      </div>
      <Form
        layout="vertical"
        name="normal_forgot"
        className="forgot-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your Email!',
            },
          ]}
        >
          <Input placeholder="Enter email" />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            block
            href="http://localhost:5173/reset"
          >
            Continue
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default Forgot;
