import * as React from "react";
import { Link } from "react-router-dom";

import hamster from 'url:./img/NotFound/hamster.png';

export default class NotFound extends React.Component {
    render() {
        return (
            <div>
                <h1>Page not found</h1>
                <h2>Make sure you entered the link correctly.</h2>
                <div>
                    <img src={hamster} />
                    <Link to="/" className="button">Back home</Link>
                </div>
            </div>
        );
    }
}
