import React from 'react';
import 'antd/dist/antd.css';
import './Timeline.css';
import { Steps, Button, Modal, message } from 'antd';
const { Step } = Steps;

const steps = [
    {
        title: 'Approvato',
        content: 'First-content',
    },
    {
        title: 'In preparazione',
        content: 'Second-content',
    },
    {
        title: 'In consegna',
        content: 'Third-content',
    },
    {
        title: 'Consegnato',
        content: 'Last-content',
    },
];

export default function Timeline() {

    const [current, setCurrent] = React.useState(0);
    const { confirm } = Modal;

    const next = () => {
        confirm({
            title: 'Sei sicuro di continuare?',
            content: 'Next step: nome_prossimo_step',
            cancelText: 'Annulla',
            onOk() {
                setCurrent(current + 1);
            },
            onCancel() {
                return
            },
        });
    };

    return (

        <div className='time-line-default'>
            <Steps current={current}>
                {steps.map(item => (<Step key={item.title} title={item.title} />))}
            </Steps>
            <div className="steps-action">
                {current < steps.length - 1 && (<Button type="primary" onClick={() => next()}>Next</Button>)}
                {current === steps.length - 1 && (<Button type="primary" onClick={() => message.success('Ordine completato!')}>Fatto</Button>)}
            </div>
        </div>

    );
};

