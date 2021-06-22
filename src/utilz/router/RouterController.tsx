import {BrowserRouter as Router, Route, Switch, useHistory} from "react-router-dom";

export interface Pages{
    path:string,
    Component:any
}


const ReactController = (props: {pages:Array<Pages>}) => {
    return (
        <Router>
            <Switch>
                {props.pages.map((page, index) => {
                    return (
                        <Route exact key={index} path={page.path}>
                            {page.Component}
                        </Route>
                    )
                })}
            </Switch>
        </Router>
    );
};

export default ReactController