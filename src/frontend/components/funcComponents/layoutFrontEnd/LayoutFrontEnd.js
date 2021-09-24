import './LayoutFrontEnd.css'

import Navbar from '../../../../backoffice/components/ui/navbar/Navbar';

const LayoutFrontEnd = (props) => {
    return(
        <>
            <div>test</div>
            <Navbar/>

            {/* props.children carica il contenuto dinamico de */}
            <div>{props.children}</div>
        </>
    );
}

export default LayoutFrontEnd;