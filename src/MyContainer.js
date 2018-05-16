import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//父组件 向子组件传递   props
class MyContainer extends React.Component{
    getInitialState () {
        return {
            checked:true
        };
    }
    render(){
        return(
            <ToggleButton text="Toggle me" checked={this.props.checked} />
        )
    }
}

//子组件
class ToggleButton extends React.Component{
    render(){
        var checked=this.props.checked,
            text=this.props.text;
        return (
            <label>{text}:<input type="checkbox" checked={checked} /></label>
        )
    }
}

//嵌套很深
//父组件
// class MyContainer extends React.Component{
//    render(){
//        return(
//            <Intermediate text="where is my son?" />
//        )
//    }
   
// }
// //子组件1 ：中间嵌套的组件
// class Intermediate extends React.Component{
//     render(){
//         return (
//             <Child text={this.props.text}/>   
//         )
      
//     }
// }

// class Child extends React.Component{
//     render(){
//         return(
//             <span>{this.props.text}</span>
//         )
//     }
// }

//子组件 向父组件传值
// class MyContainer extends React.Component{
//     getInitialState() {
//         return {
//            checked:false 
//         }
//     }
//     onChildChanged(newState) {
//         this.setState({
//             checked:newState
//         })
//     }
//     render(){
//         const isChecked=this.state.checked?"yes":"no";
//         return(
//             <div>
//                 <div>Are you checked:{isChecked}</div>
//                 <ToggleButton text="Toggle me"
//                               initialCheck={this.state.checked}
//                               callbackParent={this.onChildChanged}
//                 />
//             </div>
//         )
//     }
// }
// //子组件
// class ToggleButton extends React.Component{
//     getInitialState() {
//         return {
//             checked:this.props.initialCheck
//         }
//     }
//     onTextChange() {
//         const newState=!this.state.checked;
//         this.setState({
//             checked:newState
//         })
//         this.props.callbackParent(newState);
//     }
//     render(){
//         var text=this.props.text;
//         var checked=this.state.checked;
//         return(
//             <label>{text}:<input type="checkbox" checked={checked} onChange={this.onTextChange} /></label>
//         )
//     }
// }


export default MyContainer;