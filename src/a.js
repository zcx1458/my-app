function App(props){
    return <h1>helle {}</h1>
  }
class App extends React.Component{
    render(){
      return <h1>helle {}</h1>
    }
  }

  function Welcome(props){
      return <h1>helleo {props.name}</h1>;
  }
  const element=<Welcome name='Sara' />;
  ReactDOM.render(
      element,
      document.getElementById('root')
  );

  function tick(){
      const element=(
          <div>
              <h1>hello world!</h1>
          </div>
      );
      ReactDOM.render(
          element,
          document.getElementById('root')
      )
  }
  

  function Clock(props){
    return(
        <div>
            <h1>hello world </h1>
        </div>
    )
  }

  function tick(){
      ReactDOM.render(
          <Clock  />,
          document.getElementById('root')
      );
  }
  setInterval(tick,1000);


  class Clock extends React.Component{
      constructor(props){
          super(props);
          this.state={date:new Date()};
      }
      componentDidMount(){
         this.timerID=setInterval(
             ()=>this.tick(),1000
         );

      }
      componentWillUnmount(){
        clearInterval(this.timerID)
      }
      tick(){
          this.setState({
              date: new Date()
          });
      }

      render(){
          return (
            <div>
                <h1>hello world </h1>
                <h1>it is {this.state.date.toLocaleTimeString()}.</h1>
            </div>
          )
      }
  }
  ReactDOM.render(
      <Clock />,
    document.getElementById('root')
  )



class Toggle extends React.Component{
   constructor(props){
    super(props);
    this.state={isToggleOn：true};
    this.handleClick=this.handleClick.bind(this);
    }
    handleClick(){

    }
   render(){
     return(
        <div></div>
     )
   }
}

function UserGreeting(props){
    return <h1>Welcome back!</h1>
}
function GuestGreeting(props){
    return <h1>Please sign up</h1>
}

function Greeting(props){
    const isLoggedIn=props.isLoggedIn;
    if(isLoggedIn){
        return <UserGreeting />;
    }
    return <GuestGreeting />
}

const number=[1,2,3,4,5];
function NumberList(props){
    const numbers=props.number;
    const listItems=number.map((number)=><li>{number}</li>);
    return (
        <ul>{listItems}</ul>
    )
}




