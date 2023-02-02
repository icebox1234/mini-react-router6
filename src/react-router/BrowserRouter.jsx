import { createBrowserHistory } from "history";
import { useLayoutEffect, useRef, useState } from "react";
import Router from "./Router";

export default function BrowserRouter({ children }) {

    const historyRef = useRef();
    if (!historyRef.current) {
        historyRef.current = createBrowserHistory();
    }
    const history = historyRef.current;

    const [state, setState] = useState({ location: history.location });

    useLayoutEffect(() => {
        history.listen(setState);
    }, [history])

    return (
        <Router navigator={history} location={state.location}>
            {children}
        </Router>
    );
}