import {Route, Switch, BrowserRouter} from 'react-router-dom'
import Home from "./Home";
import AppLayout from "./AppLayout";
import UeberUns from "./UeberUns";
import Gabentest from "./Gabentest";

/**
 * This class routes requests from the users web browser.
 */
const Router = () => (
    <BrowserRouter>
        <Switch>
            <AppLayout>
                <Route path="/home" exact>
                    <Home />
                </Route>
                <Route path="/gabentest" exact>
                    <Gabentest />
                </Route>
                <Route path="/ueberUns">
                    <UeberUns />
                </Route>
            </AppLayout>
        </Switch>
    </BrowserRouter>
)

export default Router
