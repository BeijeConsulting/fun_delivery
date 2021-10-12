import React from "react";
import { Steps, Button, Modal, message } from "antd";
import i18n from "../../../../common/localization/i18n";
import "antd/dist/antd.css";
import "./Timeline.css";

const { Step } = Steps;

const steps = [
    {
        // title: 'Approvato',
        title: i18n.t("backoffice.components.timeline.title.approved"),
        content: "First-content",
    },
    {
        title: i18n.t("backoffice.components.timeline.title.preparing"),
        content: "Second-content",
    },
    {
        title: i18n.t("backoffice.components.timeline.title.delivering"),
        content: "Third-content",
    },
    {
        title: i18n.t("backoffice.components.timeline.title.delivered"),
        content: "Last-content",
    },
];

export default function Timeline() {
    const [current, setCurrent] = React.useState(0);
    const { confirm } = Modal;

    const next = () => {
        confirm({
            title: i18n.t("backoffice.components.timeline.confirm_to_continue"),
            content: `${i18n.t(
                "backoffice.components.timeline.next_step"
            )}: nome_prossimo_step`,
            cancelText: i18n.t("backoffice.components.timeline.cancel"),
            onOk() {
                setCurrent(current + 1);
            },
            onCancel() {
                return;
            },
        });
    };
 // TODO far sparire il bottone dopo l'ordine completato
    return (
        <div className="time-line-default">
            <Steps current={current}>
                {steps.map((item) => (
                    <Step key={item.title} title={item.title} />
                ))}
            </Steps>
            <div className="steps-action">
                {current < steps.length - 1 && (
                    <Button type="primary" onClick={() => next()}>
                        {i18n.t("backoffice.components.timeline.next")}
                    </Button>
                )}
                {current === steps.length - 1 && (
                    <Button
                        type="primary"
                        onClick={() =>
                            message.success(
                                i18n.t("backoffice.components.timeline.success_message")
                            )
                        }
                    >
                        {i18n.t("backoffice.components.timeline.done")}
                    </Button>
                )}
            </div>
        </div>
    );
}
