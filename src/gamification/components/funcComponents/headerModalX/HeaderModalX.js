import './HeaderModalX.css'
 import { CloseOutlined } from '@ant-design/icons' 

const HeaderModalX = (props) => {

     const handleCallback = () => {
        props.callback()
     }
    return (
        <div>
             <CloseOutlined style={{color:"white"}} onClick={handleCallback} /> 
        </div>
    )
}

export default HeaderModalX