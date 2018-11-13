import React from 'react'

import {
    Route,
    Link,
    Switch
} from 'react-router-dom'

import Home from './Home';
import StoryIndex from '../story/StoryIndex';
import ThoughtIndex from '../thought/ThoughtIndex';
import DreamIndex from '../dream/DreamIndex';

const Sidebar = (props) => (

    <div className="sidebar"> 
        <div className="sidebar-list list-unstyled">
            <ul className="sidebar-list list-unstyled">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/story">Story</Link></li>
                <li><Link to="/dream">Dream</Link></li>
                <li><Link to="/thought">Thought</Link></li>

            </ul>
        </div>
        <div className="sidebar-route">
            <Switch>
                <Route exact path="/"><Home /></Route>
                <Route exact path='/story'><StoryIndex token={props.token} /></Route>
                <Route exact path='/dream'><DreamIndex token={props.token} /></Route>
                <Route exact path='/thought'><ThoughtIndex token={props.token} /></Route>
            </Switch>
        </div>
    </div>

)

export default Sidebar;