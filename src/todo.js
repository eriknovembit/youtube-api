import React, { Component } from 'react';


class Todo extends Component{

    render(){
        const playList = ["4PYEXUo7rf4",'3rqBVZsTjUQ','GUgzoPhEm88','h3EEhWecuoA','S4yZmNjB5MY','wcll1qXpH80','UAHaxlCe29E'];
        return(
            <div>
                <span onClick={()=>this.props.changeVideo(playList[0])}>Isaac Chambers - Move on (feat. Dub Princess)</span>
                <hr />
                <span onClick={()=>this.props.changeVideo(playList[1])}>Ash - Give a Little (feat. Naila)</span><hr />
                <span onClick={()=>this.props.changeVideo(playList[2])}>Shelby - Woman On My Mind</span><hr />
                <span onClick={()=>this.props.changeVideo(playList[3])}>Izzamuzzic - Adventure (Original Mix)</span><hr />
                <span onClick={()=>this.props.changeVideo(playList[4])}>BABILONI - Chito Gvrito (Saly Betli & Banks) Cover</span><hr />
                <span onClick={()=>this.props.changeVideo(playList[5])}>LP - Suspicion [REC Remix - Radio Edit]</span><hr />
                <span onClick={()=>this.props.changeVideo(playList[6])}>Stoto - Still Can't Sleep (Original Mix)</span><hr />
            </div>
        );
    }
}

export default Todo