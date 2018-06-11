import React, {Component} from 'react';
import {ListGroup , ListGroupItem} from 'react-bootstrap';

class Todo extends Component {

    render() {
        const playList = ["4PYEXUo7rf4", '3rqBVZsTjUQ', 'GUgzoPhEm88', 'h3EEhWecuoA', 'S4yZmNjB5MY', 'wcll1qXpH80', 'UAHaxlCe29E'];
        return (
            <div>
                <ListGroup>
                <ListGroupItem bsStyle="danger" bsSize="large"  onClick={() => this.props.changeVideo(playList[0])}>Isaac Chambers - Move on (feat. Dub Princess)</ListGroupItem>

                <ListGroupItem bsStyle="danger" bsSize="large"  onClick={() => this.props.changeVideo(playList[1])}>Ash - Give a Little (feat. Naila)</ListGroupItem>

                <ListGroupItem bsStyle="danger" bsSize="large"  onClick={() => this.props.changeVideo(playList[2])}>Shelby - Woman On My Mind</ListGroupItem>

                <ListGroupItem bsStyle="danger" bsSize="large"  onClick={() => this.props.changeVideo(playList[3])}>Izzamuzzic - Adventure (Original Mix)</ListGroupItem>

                <ListGroupItem bsStyle="danger" bsSize="large"  onClick={() => this.props.changeVideo(playList[4])}>BABILONI - Chito Gvrito (Saly Betli & Banks) Cover</ListGroupItem>

                <ListGroupItem bsStyle="danger" bsSize="large"  onClick={() => this.props.changeVideo(playList[5])}>LP - Suspicion [REC Remix - Radio Edit]</ListGroupItem>

                <ListGroupItem bsStyle="danger" bsSize="large"  onClick={() => this.props.changeVideo(playList[6])}>Stoto - Still Can't Sleep (Original Mix)</ListGroupItem>
                </ListGroup>

            </div>
        );
    }
}

export default Todo