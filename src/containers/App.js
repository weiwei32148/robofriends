import React from 'react';
import CardList from '../components/CardList';
// import {robots} from '../components/robots';
import SearchBox from '../components/SearchBox';
import './App.css'
import Scroll from '../components/Scroll';

// // state is an object
// const state ={
//     robots : robots,
//     searchfield:''
// }


// in order to use state, we have to use class component instead of function component 

class App extends React.Component {
    constructor(){
        super();
        this.state={
            robots : [],
            searchfield:''
        }
    }
// state is something that can change and affect our app

    componentDidMount(){
        fetch ('https://jsonplaceholder.typicode.com/users')
            .then(response=> response.json())
            .then(users=>this.setState({robots:users}));
        
    }

    onSearchChange=(event)=>{
        this.setState({searchfield:event.target.value})
        


        console.log(event.target.value);
    }
    // this is just something you have to remember 'event.target.value'

    render(){
        const filteredRobots=this.state.robots.filter(robot=>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        });
        if (this.state.robots.length === 0){
            return <h1>Loading</h1>
        }   else {
            return(
                <div className='tc'>
                    <h1 className='f1'> RoboFriends </h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    {/* same as javascript onchange event */}
                    <Scroll>
                        <CardList robots={filteredRobots}/>
                    </Scroll>
                    
                </div>)
            };
    }
}

// const App = () => {
//     return(
//         <div>
//             <h1 className='tc'>RoboFriends</h1>
//             <SearchBox/>
//             <CardList robots={robots}/>
//         </div>
//     );
// }

export default App;