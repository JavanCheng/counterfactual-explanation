import { Button, message, Steps, theme, Card } from 'antd';
import 'antd/dist/reset.css';
import './App.css';
import { useState } from 'react';
import Data from './steps/Data'
import Model from './steps/Model'
import Explanation from './steps/Explanation';
import Result from './steps/Result';

const steps = [
  {
    title: '数据处理',
    content: <Data />,
  },
  {
    title: '模型训练',
    content: <Model />,
  },
  {
    title: '解释生成',
    content: <Explanation />,
  },
  {
    title: '结果展示',
    content: <Result />,
  },
];

function App() {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));

  const contentStyle = {
    lineHeight: '30px',
    textAlign: 'center',
    borderRadius: token.borderRadiusLG,
    border: `1px solid ${token.colorBorder}`,
    marginTop: 16,
  };

  return (
    <div className="App">
      <Card
        title="反事实可解释认知追踪系统"
        style={{
          width: 800,
        }}
        headStyle={{
          textAlign: 'center',
          fontSize: 20,
        }}
      >
        <Steps current={current} items={items} />
        <div style={contentStyle}>{steps[current].content}</div>
        <div
          style={{
            marginTop: 24,
            float: 'right',
          }}
        >
          {current < steps.length - 1 && (
            <Button type="primary" onClick={() => next()}>
              进入下一模块
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button type="primary" onClick={() => message.success('Processing complete!')}>
              保存实验数据
            </Button>
          )}
          {current > 0 && current !== steps.length - 1 && (
            <Button
              style={{
                margin: '0 8px',
              }}
              onClick={() => prev()}
            >
              回到上一模块
            </Button>
          )}
        </div>
      </Card>
    </div>
  );
}

export default App;
