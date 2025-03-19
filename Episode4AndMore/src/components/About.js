import UserContext from "../utils/UserContext";
import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";


class About extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
    
    }

    render() {
        
        return (
            <div>
            <h1>About</h1>
            <div>LoggedIn User
            <UserContext.Consumer>
                {({loggedInUser}) => <h1 className="text-xl font-bold">{loggedInUser}</h1> }
            </UserContext.Consumer>
            </div>
            <h2>This is React Series</h2>
            <User name={"hello function"} />
            <UserClass name={"hello class"} location={"Jaipur"}/> 
        </div>
        )
    }
}

// const About = () => {
//     return (
//         <div>
//             <h1>About</h1>
//             <h2>This is React Series</h2>
//             <User name={"hello function"} />

//             <UserClass name={"hello class"} location={"Jaipur"}/>
//         </div>
//     );
// };

export default About;  