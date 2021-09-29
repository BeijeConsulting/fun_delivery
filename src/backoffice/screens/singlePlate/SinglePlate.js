import { useRouteMatch } from "react-router";

const SinglePlate = () => {
    let { path, url } = useRouteMatch();
    console.log(path, url)
   
    return (
        <div>Single Plate </div>
    )
}

export default SinglePlate;