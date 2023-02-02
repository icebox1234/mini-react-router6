import { useMemo } from 'react';
import { NavigationContext } from './Context';

export default function Router({ navigator, children, location }) {
    const memoNavigator = useMemo(() => {
        return { navigator, location };
    }, [navigator, location])
    return (
        <NavigationContext.Provider value={memoNavigator}>
            {children}
        </NavigationContext.Provider>
    );
}