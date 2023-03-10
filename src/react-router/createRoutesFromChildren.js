import React from "react";

export default function createRoutesFromChildren(children) {
    const routes = [];
    React.Children.forEach(children, (child) => {
        const route = {
            element: child.props.element,
            path: child.props.path,
            children: []
        };
        if (child.props.children) {
            route.children = createRoutesFromChildren(child.props.children);
        }
        routes.push(route);
    })
    return routes;
}