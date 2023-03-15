import { Select, Divider, Button, Upload, Space, Tooltip, Descriptions, Progress, Tag } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const handleChange = (value) => {
    console.log(`selected ${value}`);
};

const Data = () => {

    return (
        <>
            <Divider orientation="center">数据处理操作</Divider>
            <div>
                请选择认知追踪数据集：
                <Select
                    defaultValue="ASSIST09"
                    style={{
                        width: 300,
                    }}
                    onChange={handleChange}
                    options={[
                        {
                            value: 'ASSIST09',
                            label: 'ASSIST09',
                        },
                        {
                            value: 'ASSIST12',
                            label: 'ASSIST12',
                        },
                        {
                            value: 'EdNet',
                            label: 'EdNet',
                        },
                    ]}
                />
            </div>
            <div>
                <strong>or</strong>
            </div>
            <div
                style={{
                    marginBottom: 20
                }}
            >
                请上传认知追踪数据集：
                <Upload
                    name='file'
                    action=''
                >
                    <Button
                        icon={<UploadOutlined />}
                        style={{
                            width: 300,
                        }}
                    >
                        点击上传数据集
                    </Button>
                </Upload>
            </div>
            <div
                style={{
                    marginBottom: 20
                }}
            >
                <Tooltip
                    placement="right"
                    defaultOpen={true}
                    title="清洗数据，去除冗余数据"
                >
                    <Button type='primary'>数据清洗</Button>
                </Tooltip>
            </div>
            <div
                style={{
                    marginBottom: 20
                }}
            >
                <Tooltip
                    placement="right"
                    defaultOpen={true}
                    title="编码数据，以 one-hot 形式展现"
                >
                    <Button type='primary'>数据编码</Button>
                </Tooltip>
            </div>
            <Divider orientation="center">数据处理结果</Divider>
            <Descriptions bordered column={1}>
                <Descriptions.Item label="当前数据集">ASSIST09</Descriptions.Item>
                <Descriptions.Item label="数据清洗结果">
                    <Space
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <div style={{ width: 400 }}>
                            <Progress percent={100} size="small" />
                        </div>
                        <Tag color="#87d068">已完成</Tag>
                    </Space>
                </Descriptions.Item>
                <Descriptions.Item label="数据编码结果">
                    <Space
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'flex-start',
                        }}
                    >
                        <div style={{ width: 400 }}>
                            <Progress percent={88} size="small" status="active" />
                        </div>
                        <Tag color="#2db7f5">进行中</Tag>
                    </Space>
                </Descriptions.Item>
            </Descriptions>
        </>
    )
}

export default Data;