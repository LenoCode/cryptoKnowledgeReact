import {BrowserRouter as Router, Route, Switch, useHistory} from "react-router-dom";

export interface Pages{
    path:string,
    Component:any
}


const ReactController = (props: {pages:Array<Pages>}) => {
    console.log(props);
    return (
        <Router>
            <Switch>
                {props.pages.map((page, index) => {
                    console.log(page.path)
                    return (
                        <Route key={index} path={page.path}>
                            {page.Component}
                        </Route>
                    )
                })}
            </Switch>
        </Router>
    );
};

export default ReactController