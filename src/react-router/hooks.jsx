import { useContext } from "react";
import { NavigationContext } from "./Context";
// import { normalizePathname } from './utils';
import { RouteContext } from './Context';
// import Outlet from "./Outlet";
import { matchRoutes } from "react-router-dom";

export function useRoutes(routes = []) {
    // const pathname = window.location.pathname;
    const location = useLocation();
    const pathname = location.pathname;

    const matches = matchRoutes(routes, { pathname });
    // console.log(matches);

    return renderMatches(matches);

    // return (
    //     <>
    //         {routes.map(route => {
    //             const match = pathname.startsWith(route.path);
    //             return match && route.children.map(child => {
    //                 let m = normalizePathname(child.path) === pathname;
    //                 return (
    //                     m && (
    //                         <RouteContext.Provider
    //                             value={{ outlet: child.element }}
    //                             children={
    //                                 route.element !== undefined ? route.element : <Outlet />
    //                             }
    //                         />
    //                     )
    //                 );
    //             })
    //         })}
    //     </>
    // );
}

function renderMatches(matches) {
    if (matches === null) {
        return null;
    }
    return matches.reduceRight((outlet, match) => {
        debugger
        return (
            <RouteContext.Provider
                value={(() => { console.log('---->  renderMatches', outlet); return { outlet, matches } })()}
            >
                {
                    (() => {
                        console.log('---->  renderMatches inner', outlet);
                        return match.route.element || outlet;
                    })()
                }
            </RouteContext.Provider>
        );
    }, null);
}

export function useNavigate(to, options) {
    const { navigator } = useContext(NavigationContext);

    return navigator.push;
}

export function useLocation() {
    const { location } = useContext(NavigationContext);
    return location;
}

export function useOutlet() {
    const { outlet } = useContext(RouteContext);
    console.log('---> useOutlet', outlet);
    return outlet;
}

export function useParams() {
    const { matches } = useContext(RouteContext);
    const match = matches[matches.length - 1];
    return match.params ? match.params : {};
}