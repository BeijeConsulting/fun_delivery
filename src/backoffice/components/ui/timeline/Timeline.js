import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Steps, Button, message } from 'antd';
const { Step } = Steps;

export default function Timeline() {
    const steps = [
        {
            title: 'Approvato',
            content: 'First-content',
        },
        {
            title: 'In lavorazione',
            content: 'Second-content',
        },
        {
            title: 'Consegnato',
            content: 'Last-content',
        },
    ];

    const [current, setCurrent] = React.useState(0);
    const next = () => { setCurrent(current + 1); };
    const prev = () => { setCurrent(current - 1); };

    return (
        <>
            <Steps current={current}>
                {steps.map(item => (<Step key={item.title} title={item.title} />))}
            </Steps>
            <div className="steps-action">
                {current < steps.length - 1 && (<Button type="primary" onClick={() => next()}>Next</Button>)}
                {current === steps.length - 1 && (<Button type="primary" onClick={() => message.success('Ordine completato!')}>Done</Button>)}
                {current > 0 && (<Button style={{ margin: '0 8px' }} onClick={() => prev()}>Previous</Button>)}
            </div>
        </>
    );
};

