import React from "react";
import { Container } from "react-bootstrap";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Album } from "./features/album/Album.component";
import { User } from "./features/user/User.component";
import { UserAlbum } from "./features/userAlbum/UserAlbum.component";
import "./App.css";

const App = () => {
    return (
        <Container className="my-4 main-component">
            <Router>
                <Switch>
                    <Route exact path="/" render={() => <User />}></Route>
                </Switch>
                <Switch>
                    <Route exact path="/user/:id" render={props => <UserAlbum id={props.match.params.id} />}></Route>
                </Switch>
                <Switch>
                    <Route exact path="/user/album/:id" render={props => <Album id={props.match.params.id} />}></Route>
                </Switch>
            </Router>
            {/* <Header /> */}
            {/* <div className="container">
                <div className="row">
                    <h1 className="text-center">
                        <span>Photos Album</span>
                    </h1>
                </div>
                <User />
             </div> */}
        </Container>
    )
};

export default App;