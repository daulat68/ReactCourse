import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";


class About extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            count2: 2,
        }
        console.log("Parent Constructor");
    }

    componentDidMount() {
        console.log("Parent Component Did Mount");
    }

    render() {
        console.log("Parent Render");
        return (
            <div>
            <h1>About</h1>
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