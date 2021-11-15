import React from "react";
import { Steps, Button, Modal, message } from "antd";
import i18n from "../../../../common/localization/i18n";
import "antd/dist/antd.css";
import "./Timeline.css";

const { Step } = Steps;
const steps = [
    {
        id: 2,
        title: i18n.t("backoffice.components.timeline.title.approved"),
        content: "approved",
    },
    {
        id: 4,
        title: i18n.t("backoffice.components.timeline.title.preparing"),
        content: "preparing",
    },
    {
        id: 5,
        title: i18n.t("backoffice.components.timeline.title.delivering"),
        content: "delivering",
    },
    {
        id: 6,
        title: i18n.t("backoffice.components.timeline.title.delivered"),
        content: "completed",
    },
];



export default function Timeline(props) {
    console.log("stati: ", props.statuses)
    console.log("currentStep: ", props.currentStep)
    const foundStatus = steps.findIndex(item => item.id === props.currentStep)
    // const foundStatus = steps.indexOf(steps[props.currentStep])
    const [current, setCurrent] = React.useState(foundStatus);
    console.log("current: ", current)
    const { confirm } = Modal;
    // console.log(steps.findIndex(item => item.content === props.currentStep))

    const handleStatus = (value) => {
        return props.callback(value)
    }

    const next = () => {
        //riformulare gestione step

        //currentStep è la prop dello step corrente
        confirm({
            title: i18n.t("backoffice.components.timeline.confirm_to_continue"),
            content: `${i18n.t("backoffice.components.timeline.next_step")}: ${steps[current + 1].title}`,
            cancelText: i18n.t("backoffice.components.timeline.cancel"),
            onOk() {
                setCurrent(current + 1);
                if(steps[current].id===2){
                    handleStatus(steps[current].id + 2)
                }else{
                    // setCurrent(current + 1);
                    handleStatus(steps[current].id + 1)
                }
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
