import { Select, Divider, Button, Upload, Descriptions, List } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const handleChange = (value) => {
    console.log(`selected ${value}`);
};

const data = [
    '解释形式：如果 X 没发生，那么 Y 就不会发生',
    'CO-CF：基于约束优化的反事实解释算法',
    'SG-CF：基于 Shapelet 的反事实解释算法，更适用于时序数据',
];

const Explanation = () => {
    return (
        <>
            <Divider orientation="center">解释生成操作</Divider>
            <div>
                请选择反事实解释算法：
                <Select
                    defaultValue="SG-CF"
                    style={{
                        width: 300,
                    }}
                    onChange={handleChange}
                    options={[
                        {
                            value: 'SG-CF',
                            label: 'SG-CF',
                        },
                        {
                            value: 'CO-CF',
                            label: 'CO-CF',
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
                请上传反事实解释算法：
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
                        点击上传反事实解释算法
                    </Button>
                </Upload>
            </div>
            <Divider orientation="center">解释算法介绍</Divider>
            <Descriptions bordered column={1}>
                <Descriptions.Item label="反事实解释算法">
                    <List
                        size="large"
                        dataSource={data}
                        renderItem={(item) => <List.Item>{item}</List.Item>}
                    />
                </Descriptions.Item>
            </Descriptions>
        </>
    )
}

export default Explanation;