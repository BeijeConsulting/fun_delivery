import { LeftOutlined } from "@ant-design/icons";
import i18n from "../../../../common/localization/i18n";


const BackPageButton = (props) => {
    const handleClick = (e) => {
        return props.callback(e)
    }
    
    return (
        <div
            className={props.classProp}
            onClick={handleClick}
        >
            <h3>
                <LeftOutlined />
            </h3>
            <h3>{i18n.t("backoffice.components.back")}</h3>
        </div>
    )
}

export default BackPageButton;