import { Button, Select, Table, Space } from 'antd';
import Search from 'antd/lib/input/Search';

import './List.css';
import SildeBar from '../Sidebar/SildeBar';

const OwnerList = () => {
  const { Option } = Select;
  const columns = [
    {
      title: '#',
      dataIndex: 'key',
      key: 'key',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Phone number',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Action',
      key: 'action',
      render: () => (
        <Space size="middle">
          <a>Update</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];
  const data = [
    {
      key: '1',
      name: 'John Brown',
      email: 'avc@gmail.com',
      phone: '1234556',
    },
    {
      key: '2',
      name: 'John Brown',
      email: 'avc@gmail.com',
      phone: '1234556',
    },
  ];
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onSearch = (value, _e, info) => console.log(info?.source, value);
  const customContent = (
    <div>
      <div className="title-container">
        <h3>All Garage Owners</h3>
        <Button>Add Owner</Button>
      </div>
      <div className="owner-list-content">
        <Select
          className="select-content"
          defaultValue="Name"
          style={{
            width: 220,
          }}
          onChange={handleChange}
        >
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="Yiminghe">Yiminghe</Option>
          <Option value="disabled" disabled>
            Disabled
          </Option>
        </Select>

        <Search
          className="search-content"
          placeholder="input search text"
          onSearch={onSearch}
          style={{
            width: 200,
          }}
        />

        <Select
          className="select-content"
          defaultValue="Status"
          style={{
            width: 220,
          }}
          onChange={handleChange}
        >
          <Option value="Active">Active</Option>
          <Option value="Inactive">Inactive</Option>
        </Select>
      </div>
      <div>
        <Table columns={columns} dataSource={data} />
      </div>
    </div>
  );

  return (
    <>
      <SildeBar content={customContent} />
    </>
  );
};

export default OwnerList;
