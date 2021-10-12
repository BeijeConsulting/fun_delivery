import './Title.css'

const Title = (props) => {
    return (
        <div className={'gm-title'} style={{color: props.color, fontSize: props.fontSize, fontWeight: props.fontWeight}}>
            {props.label}
        </div>
    )
}

export default Title