import createRoutesFromChildren from "./createRoutesFromChildren";
import { useRoutes } from "./hooks";

export default function Routes(props) {
    const { children } = props;
    const routes = createRoutesFromChildren(children);
    return useRoutes(routes);
}