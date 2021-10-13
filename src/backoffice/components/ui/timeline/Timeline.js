import React from "react";
import { Steps, Button, Modal, message } from "antd";
import i18n from "../../../../common/localization/i18n";
import "antd/dist/antd.css";
import "./Timeline.css";

const { Step } = Steps;

const steps = [
    {
        title: i18n.t("backoffice.components.timeline.title.approved"),
        content: "approved",
    },
    {
        title: i18n.t("backoffice.components.timeline.title.preparing"),
        content: "preparing",
    },
    {
        title: i18n.t("backoffice.components.timeline.title.delivering"),
        content: "delivering",
    },
    {
        title: i18n.t("backoffice.components.timeline.title.delivered"),
        content: "completed",
    },
];



export default function Timeline(props) {
    const foundStatus = steps.findIndex(item => item.content === props.currentStep)
    const [current, setCurrent] = React.useState(foundStatus);
    const { confirm } = Modal;

    // console.log(steps.findIndex(item => item.content === props.currentStep))

    const handleStatus = (value) => {
        return props.callback(value)
    }

    const next = () => {
    //currentStep è la prop dello step corrente
        confirm({
            title: i18n.t("backoffice.components.timeline.confirm_to_continue"),
            content: `${i18n.t("backoffice.components.timeline.next_step")}: ${steps[current + 1].title}`,
            cancelText: i18n.t("backoffice.components.timeline.cancel"),
            onOk() {
                setCurrent(current + 1);
                handleStatus(steps[current+1].content)
                message
                .loading('Salvataggio in corso..', 1)
                .then(() => message.success('Salvataggio completato', 2.5))
                //qui bisognerebbe salvare lo stato. Si può mettere una promise, così l'utente capisce che è in corso
                //l'upload nel database dello stato aggiornato                
            },
            onCancel() {
                return;
            },
        });

    };

    return (
        <div className="time-line-default">
            <Steps current={current}>
                {steps.map((item) => (
                    <Step key={item.title} title={item.title} />
                ))}
            </Steps>
            <div className="steps-action">
                {current <= steps.length - 2 && (
                    <Button type="primary" onClick={next}>
                        {current === steps.length - 2 ? i18n.t("backoffice.components.timeline.complete_order") : i18n.t("backoffice.components.timeline.next")}
                    </Button>
                )}
                
            </div>
        </div>
    );
}
