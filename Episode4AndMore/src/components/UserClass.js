import React from "react"

class UserClass extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            // count: 0,
            // count2: 2,
            userInfo: {
                name: "Dummy",
                location: "Default",
                url: "empty",
            },
        }
        // console.log("Child Constructor")
    }

    async componentDidMount() {
        // console.log("Child Component Did Mount")
        
        const data = await fetch("https://api.github.com/users/daulat68");
        const json = await data.json();
        
        this.setState({
            userInfo: json
        })

    }

    render() {
        // const { name, location } = this.props;
        // const { count, count2 } = this.state;
        // console.log("Child Render")

        const { name, location, url } = this.state.userInfo;

        return ( 
            <div className="user-card">
            {/* <h2>Count: {count}</h2>    
            <h2>Count: {count2}</h2>     */}
            {/* <button onClick={() => {
                this.setState({
                    count: this.state.count + 1,
                    count2: this.state.count2 + 1,
                });
            }}>Count Increase</button>     */}
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h3>Location: {url}</h3>
            <h4>Contact: @mail.com</h4>
            </div>
        )
    }
}

export default UserClass; 