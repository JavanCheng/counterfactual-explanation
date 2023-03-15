import { Divider, Button, Descriptions, Input, Space, Image } from 'antd';

const Result = () => {
    return (
        <>
            <Divider orientation="center">结果展示操作</Divider>
            <Descriptions bordered column={1}>
                <Descriptions.Item label="目标解释节点选择">
                    <Input defaultValue={'50'} />
                </Descriptions.Item>
                <Descriptions.Item label="生成更多反事实解释">
                    <Button type='primary'>点击生成</Button>
                </Descriptions.Item>
            </Descriptions>
            <Divider orientation="center">最终结果展示</Divider>
            <Descriptions bordered column={1}>
                <Descriptions.Item label="预测结果">0.9083</Descriptions.Item>
                <Descriptions.Item label="反事实解释">
                    <Space>
                        <Image width={300} src="https://static.xhpolaris.com/users/639d7c7dbfcd62fd94cc71ec/e8f37d09-97fb-4e4c-ab25-abd391cbb4a9.png"/>
                        <Image width={300} src="https://static.xhpolaris.com/users/639d7c7dbfcd62fd94cc71ec/89841c0c-668a-42e9-8316-9c14f5f73ec1.png"/>
                    </Space>
                </Descriptions.Item>
            </Descriptions>
        </>
    )
}

export default Result;