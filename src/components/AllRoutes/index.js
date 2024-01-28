import { useRoutes } from "react-router-dom";
import { routes } from "../../routes";


const AllRoutes = () => {
    const Arrelements=useRoutes(routes)


    return (
        <>
            {Arrelements}
        </>
    )
}   
export default AllRoutes;