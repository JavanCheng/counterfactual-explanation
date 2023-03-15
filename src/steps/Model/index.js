import { Select, Divider, Button, Upload, Tooltip, Descriptions, Input } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const handleChange = (value) => {
    console.log(`selected ${value}`);
};

const Model = () => {
    return (
        <>
            <Divider orientation="center">模型训练操作</Divider>
            <div>
                请选择认知追踪模型：
                <Select
                    defaultValue="DKT"
                    style={{
                        width: 300,
                    }}
                    onChange={handleChange}
                    options={[
                        {
                            value: 'DKT',
                            label: 'DKT',
                        },
                        {
                            value: 'DKVMN',
                            label: 'DKVMN',
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
                请上传认知追踪模型：
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
                        点击上传认知追踪模型
                    </Button>
                </Upload>
            </div>
            <Divider orientation="center">参数设置</Divider>
            <Descriptions bordered column={2}>
                <Descriptions.Item label="max_step">
                    <Input defaultValue={'50'} />
                </Descriptions.Item>
                <Descriptions.Item label="batch_size">
                    <Input defaultValue={'64'} />
                </Descriptions.Item>
                <Descriptions.Item label="learning_rate">
                    <Input defaultValue={'0.002'} />
                </Descriptions.Item>
                <Descriptions.Item label="epoch">
                    <Input defaultValue={'10'} />
                </Descriptions.Item>
                <Descriptions.Item label="hidden_layer_dimension">
                    <Input defaultValue={'200'} />
                </Descriptions.Item>
                <Descriptions.Item label="nums_of_hidden_layers">
                    <Input defaultValue={'1'} />
                </Descriptions.Item>
            </Descriptions>
            <div
                style={{
                    marginBottom: 20,
                    marginTop: 20,
                }}
            >
                <Tooltip
                    placement="right"
                    defaultOpen={true}
                    title="训练已有或上传的认知追踪模型"
                >
                    <Button type='primary'>开始训练</Button>
                </Tooltip>
            </div>
            <Divider orientation="center">模型训练结果</Divider>
            <Descriptions bordered column={1}>
                <Descriptions.Item label="当前数据集">ASSIST09</Descriptions.Item>
                <Descriptions.Item label="当前认知追踪模型">DKT</Descriptions.Item>
                <Descriptions.Item label="训练结果">
                    <div>epoch: 0, auc: 0.7912, f1: 0.8416, recall: 0.9504, precision: 0.7552</div>
                    <div>epoch: 1, auc: 0.8178, f1: 0.8502, recall: 0.9346, precision: 0.7797</div>
                    <div>epoch: 2, auc: 0.8227, f1: 0.8506, recall: 0.9224, precision: 0.7892</div>
                    <div>...</div>
                </Descriptions.Item>
            </Descriptions>
        </>
    )
}

export default Model;