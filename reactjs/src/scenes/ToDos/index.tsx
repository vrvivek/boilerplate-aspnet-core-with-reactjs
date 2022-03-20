import * as React from 'react';
import { inject, observer } from 'mobx-react'; // eslint-disable-line

import { Card, Col, Row, Table, Tag } from 'antd';
import { L } from '../../lib/abpUtility';
// eslint-disable-next-line
import Stores from '../../stores/storeIdentifier';
import ToDoStore from '../../stores/todoStore';

// eslint-disable-next-line
export interface IToDoProps {
  // eslint-disable-next-line
  todoStore: ToDoStore;
}

export interface IToDoState {
  skipCount: number;
}

// eslint-disable-next-line
const ToDo: React.FC<IToDoProps> = inject(Stores.ToDoStore)(
  observer((props) => {
    const [state, setState] = React.useState({ modalVisible: false, skipCount: 0 });// eslint-disable-line
    const { todos } = props.todoStore;
    console.log(props);
    React.useEffect(() => {
      setState({ modalVisible: false, skipCount: 0 });
      props.todoStore.getAll({ skipCount: state.skipCount }); // eslint-disable-line

      return () => { };
    }, []); // eslint-disable-line

    //   console.log(props);
    const columns = [
      { title: L('Name'), dataIndex: 'name', key: 'name', width: 150, render: (text: string) => <div>{text}</div> },
      {
        title: L('IsActive'),
        dataIndex: 'isStatus',
        key: 'isStatus',
        width: 150,
        render: (text: boolean) => (text === true ? <Tag color="#2db7f5">{L('Yes')}</Tag> : <Tag color="red">{L('No')}</Tag>),
      },
      {
        title: L('CreationTime'),
        dataIndex: 'creationTime',
        key: 'creationTime',
        width: 150,
        render: (text: string) => (new Date(text).toLocaleString()),
      },
      {
        title: L('Actions'),
        width: 150,
        render: (text: string, item: any) => (
          <div>
            {/* <Dropdown
              trigger={['click']}
              overlay={
                <Menu>
                  <Menu.Item onClick={() => this.createOrUpdateModalOpen({ id: item.id })}>{L('Edit')}</Menu.Item>
                  <Menu.Item onClick={() => this.delete({ id: item.id })}>{L('Delete')}</Menu.Item>
                </Menu>
              }
              placement="bottomLeft"
            >
              <Button type="primary" icon={<SettingOutlined />}>
                {L('Actions')}
              </Button>
            </Dropdown> */}
          </div>
        ),
      },
    ];
    return (
      <Card>
        <Row>
          <Col
            xs={{ span: 4, offset: 0 }}
            sm={{ span: 4, offset: 0 }}
            md={{ span: 4, offset: 0 }}
            lg={{ span: 2, offset: 0 }}
            xl={{ span: 2, offset: 0 }}
            xxl={{ span: 2, offset: 0 }}
          >
            {' '}
            <h2>{L('ToDos')}</h2>
          </Col>
          <Col
            xs={{ span: 14, offset: 0 }}
            sm={{ span: 15, offset: 0 }}
            md={{ span: 15, offset: 0 }}
            lg={{ span: 1, offset: 21 }}
            xl={{ span: 1, offset: 21 }}
            xxl={{ span: 1, offset: 21 }}
          >
            {/* <Button type="primary" shape="circle" icon={<PlusOutlined />} onClick={() => this.createOrUpdateModalOpen({ id: 0 })} /> */}
          </Col>
        </Row>
        <Row>
          <Col sm={{ span: 10, offset: 0 }}>
            {/* <Search placeholder={this.L('Filter')} onSearch={this.handleSearch} /> */}
          </Col>
        </Row>
        <Row style={{ marginTop: 20 }}>
          <Col
            xs={{ span: 24, offset: 0 }}
            sm={{ span: 24, offset: 0 }}
            md={{ span: 24, offset: 0 }}
            lg={{ span: 24, offset: 0 }}
            xl={{ span: 24, offset: 0 }}
            xxl={{ span: 24, offset: 0 }}
          >
            <Table
              rowKey={(record) => record.id.toString()}
              bordered={true}
              columns={columns}
              pagination={{ pageSize: 10, total: todos === undefined ? 0 : todos.totalCount, defaultCurrent: 1 }}
              loading={todos === undefined ? true : false}
              dataSource={todos === undefined ? [] : todos.items}
            // onChange={this.handleTableChange}
            />
          </Col>
        </Row>
      </Card>
    );
  })
);

export default ToDo;
