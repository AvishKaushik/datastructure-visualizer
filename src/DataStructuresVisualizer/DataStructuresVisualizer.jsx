import React , {Component} from 'react';
import './DataStructuresVisualizer.css';
import Notification from './Notification.js';
import './notification.min.css';


export default class DataStructuresVisualizer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [],
      abar: '2',
    };
  }

  componentDidMount() {
    this.resetArray();
  }

  resetArray() {
    const array = [];
    this.state.abar=parseInt(2);
    if(this.refs.dsType.value==="SortedSet")
    {
      for ( let i=0;i<this.state.abar;) {
        var o=randomIntFromInterval(14,650);
        if(array.includes(parseInt(o)))
        {
          continue;
        }
        else
        {
          array.push(parseInt(o));
          i++;
        }
      }
      array.sort(function(a, b){return a-b});
    }
    else
    {
      for ( let i=0;i<this.state.abar;i++) {
        array.push(randomIntFromInterval(14,650));
      }
    }
    this.setState({array});
    const arrayBar=document.getElementsByClassName('array-bar');
    for ( let i=0;i<array.length;i++) {
      if(!arrayBar[i])
      {
        continue;
      }
      else{
      const boStyle = arrayBar[i].style;
      boStyle.backgroundColor='rgb(12, 53, 71)';
      boStyle.color='#e9e4e4';
      }
    }
  }

  deleteValue() {
    const array=[];
    var x=document.getElementById("dval").value;
    if(this.state.abar===0)
    {
      window.notification = new Notification();
      let instance = window.notification.new({
      type: 'error',
      title: 'Buffer Underflow',
      message: 'List is already empty',
      duration: 2000,
      position: 'top-right',
      thickBorder: 'top',
      iconless: false,
      closable: false,
      sticky: false,
      closable: true,
      });
      return;
    }
    else if(x==="")
    {
      window.notification = new Notification();
      let instance = window.notification.new({
      type: 'warning',
      title: 'No Input',
      message: 'Provide some input please',
      duration: 2000,
      position: 'top-right',
      thickBorder: 'top',
      iconless: false,
      closable: false,
      sticky: false,
      closable: true,
      });
      return;
    }
    else if(!this.state.array.includes(parseInt(x)))
    {
      window.notification = new Notification();
      let instance = window.notification.new({
      type: 'warning',
      title: '404 Not Found',
      message: 'The value to be deleted is not available',
      duration: 2000,
      position: 'top-right',
      thickBorder: 'top',
      iconless: false,
      closable: false,
      sticky: false,
      closable: true,
      });
      return;
    }
    for ( let i=0;i<this.state.abar;i++) {
      if(this.state.array[i]===parseInt(x))
      {
        continue;
      }
      array.push(this.state.array[i]);
      console.log(array[i]);
    }
    this.state.abar=parseInt(this.state.abar)-parseInt(1);
    this.setState({array});
    console.log(this.state.abar);
    const arrayBar=document.getElementsByClassName('array-bar');
    for ( let i=0;i<array.length;i++) {
      if(!arrayBar[i])
      {
        continue;
      }
      else{
      const boStyle = arrayBar[i].style;
      boStyle.backgroundColor='rgb(12, 53, 71)';
      boStyle.color='#e9e4e4';
      }
    }
  }

  pop() {
    const array=[];
    if(this.state.abar===0)
    {
      window.notification = new Notification();
      let instance = window.notification.new({
      type: 'error',
      title: 'Buffer Underflow',
      message: 'List is already empty',
      duration: 2000,
      position: 'top-right',
      thickBorder: 'top',
      iconless: false,
      closable: false,
      sticky: false,
      closable: true,
      });
      return;
    }
    for ( let i=0;i<this.state.abar-1;i++) {
      array.push(this.state.array[i]);
      console.log(array[i]);
    }
    this.state.abar=parseInt(this.state.abar)-parseInt(1);
    this.setState({array});
    console.log(this.state.abar);
    const arrayBar=document.getElementsByClassName('array-bar');
    for ( let i=0;i<array.length;i++) {
      if(!arrayBar[i])
      {
        continue;
      }
      else{
      const boStyle = arrayBar[i].style;
      boStyle.backgroundColor='rgb(12, 53, 71)';
      boStyle.color='#e9e4e4';
      }
    }
    
      window.notification = new Notification();
      let instance = window.notification.new({
      type: 'success',
      title: 'Task Successful',
      message: 'Element Successfully Popped',
      duration: 2000,
      position: 'top-right',
      thickBorder: 'top',
      iconless: false,
      closable: false,
      sticky: false,
      closable: true,
      });
  }

  addValueArr() {
    const array=[];
    var x=document.getElementById("val").value;
    if(this.state.abar===10)
    {
      window.notification = new Notification();
      let instance = window.notification.new({
      type: 'error',
      title: 'Buffer Overflow',
      message: 'Only 10 elements allowed',
      duration: 2000,
      position: 'top-right',
      thickBorder: 'top',
      iconless: false,
      closable: false,
      sticky: false,
      closable: true,
      });
      return;
    }
    else if(x=="")
    {
      window.notification = new Notification();
      let instance = window.notification.new({
      type: 'warning',
      title: 'No Input',
      message: 'Provide some input please',
      duration: 2000,
      position: 'top-right',
      thickBorder: 'top',
      iconless: false,
      closable: false,
      sticky: false,
      closable: true,
      });
      return;
    }
    for ( let i=0;i<this.state.abar;i++) {
      array.push(this.state.array[i]);
      console.log(array[i]);
    }
    array.push(parseInt(x));
    this.state.abar=parseInt(this.state.abar)+parseInt(1);
    this.setState({array});
    console.log(this.state.abar);
    const arrayBar=document.getElementsByClassName('array-bar');
    for ( let i=0;i<array.length;i++) {
      if(!arrayBar[i])
      {
        continue;
      }
      else{
      const boStyle = arrayBar[i].style;
      boStyle.backgroundColor='rgb(12, 53, 71)';
      boStyle.color='#e9e4e4';
      }
    }
    window.notification = new Notification();
      let instance = window.notification.new({
      type: 'success',
      title: 'Task Successful',
      message: 'Element Successfully Popped',
      duration: 2000,
      position: 'top-right',
      thickBorder: 'top',
      iconless: false,
      closable: false,
      sticky: false,
      closable: true,
      });
  }

  addValueUnsortedSet() {
    const array=[];
    var x=document.getElementById("val").value;
    if(this.state.abar===10)
    {
      window.notification = new Notification();
      let instance = window.notification.new({
      type: 'error',
      title: 'Buffer Overflow',
      message: 'Only 10 elements allowed',
      duration: 2000,
      position: 'top-right',
      thickBorder: 'top',
      iconless: false,
      closable: false,
      sticky: false,
      closable: true,
      });
      return;
    }
    else if(x=="")
    {
      window.notification = new Notification();
      let instance = window.notification.new({
      type: 'warning',
      title: 'No Input',
      message: 'Provide some input please',
      duration: 2000,
      position: 'top-right',
      thickBorder: 'top',
      iconless: false,
      closable: false,
      sticky: false,
      closable: true,
      });
      return;
    }
    for ( let i=0;i<this.state.abar;i++) {
      array.push(this.state.array[i]);
      console.log(array[i]);
    }
    if(array.includes(parseInt(x)))
    {
      window.notification = new Notification();
      let instance = window.notification.new({
      type: 'info',
      title: 'Exists',
      message: 'The element already exist in the set',
      duration: 2000,
      position: 'top-right',
      thickBorder: 'top',
      iconless: false,
      closable: false,
      sticky: false,
      closable: true,
      });
      return;
    }
    array.push(parseInt(x));
    this.state.abar=parseInt(this.state.abar)+parseInt(1);
    this.setState({array});
    console.log(this.state.abar);
    const arrayBar=document.getElementsByClassName('array-bar');
    for ( let i=0;i<array.length;i++) {
      if(!arrayBar[i])
      {
        continue;
      }
      else{
      const boStyle = arrayBar[i].style;
      boStyle.backgroundColor='rgb(12, 53, 71)';
      boStyle.color='#e9e4e4';
      }
    }
    window.notification = new Notification();
      let instance = window.notification.new({
      type: 'success',
      title: 'Task Successful',
      message: 'Element Successfully Popped',
      duration: 2000,
      position: 'top-right',
      thickBorder: 'top',
      iconless: false,
      closable: false,
      sticky: false,
      closable: true,
      });
  }

  addValueSortedSet() {
    const array=[];
    var x=document.getElementById("val").value;
    if(this.state.abar===10)
    {
      window.notification = new Notification();
      let instance = window.notification.new({
      type: 'error',
      title: 'Buffer Overflow',
      message: 'Only 10 elements allowed',
      duration: 2000,
      position: 'top-right',
      thickBorder: 'top',
      iconless: false,
      closable: false,
      sticky: false,
      closable: true,
      });
      return;
    }
    else if(x=="")
    {
      window.notification = new Notification();
      let instance = window.notification.new({
      type: 'warning',
      title: 'No Input',
      message: 'Provide some input please',
      duration: 2000,
      position: 'top-right',
      thickBorder: 'top',
      iconless: false,
      closable: false,
      sticky: false,
      closable: true,
      });
      return;
    }
    for ( let i=0;i<this.state.abar;i++) {
      array.push(this.state.array[i]);
      console.log(array[i]);
    }
    if(array.includes(parseInt(x)))
    {
      window.notification = new Notification();
      let instance = window.notification.new({
      type: 'info',
      title: 'Exists',
      message: 'The element already exist in the set',
      duration: 2000,
      position: 'top-right',
      thickBorder: 'top',
      iconless: false,
      closable: false,
      sticky: false,
      closable: true,
      });
      return;
    }
    array.push(parseInt(x));
    array.sort(function(a, b){return a-b});
    this.state.abar=parseInt(this.state.abar)+parseInt(1);
    this.setState({array});
    console.log(this.state.abar);
    const arrayBar=document.getElementsByClassName('array-bar');
    for ( let i=0;i<array.length;i++) {
      if(!arrayBar[i])
      {
        continue;
      }
      else{
      const boStyle = arrayBar[i].style;
      boStyle.backgroundColor='rgb(12, 53, 71)';
      boStyle.color='#e9e4e4';
      }
    }
    window.notification = new Notification();
      let instance = window.notification.new({
      type: 'success',
      title: 'Task Successful',
      message: 'Element Successfully Popped',
      duration: 2000,
      position: 'top-right',
      thickBorder: 'top',
      iconless: false,
      closable: false,
      sticky: false,
      closable: true,
      });
  }

  addValue() {
    if(this.refs.dsType.value==="Array")
    {
      this.addValueArr();
    }
    else if(this.refs.dsType.value==="UnsortedSet")
    {
      this.addValueUnsortedSet();
    }
    else if(this.refs.dsType.value==="SortedSet")
    {
      this.addValueSortedSet();
    }
  }
  
render() {
  const {array} = this.state;

  return (
    <div>
    <div>
    <button onClick={()=>this.resetArray()}>Generate a new list</button>
    <select ref="dsType" onChange={()=>this.resetArray()}>
    <option value="Array">Array</option>
    <option value="UnsortedSet">Unsorted Set</option>
    <option value="SortedSet">Sorted Set</option>
    </select>
    <input type="number" id="val" name="val"/>
    <button onClick={()=>this.addValue()}>Add Value</button>
    <input type="number" id="dval" name="dval"/>
    <button onClick={()=>this.deleteValue()}>Delete Value</button>
    <button onClick={()=>this.pop()}>Pop</button>
    <hr></hr>
    </div>
    <div className="array-container">
    {array.map((value, idx) => (
      <div
      className="array-bar"
      key={idx}><p>{value}</p></div>
    ))}
    </div>
    <div className="arrangement">
    <hr></hr>
    </div>
    </div>
  );
}
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max-min+1) + min);
}
