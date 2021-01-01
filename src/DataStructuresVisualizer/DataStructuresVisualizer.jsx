import React , {Component, useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import './DataStructuresVisualizer.css';
import Notification from './Notification.js';
import './notification.min.css';
import { Container, Draggable } from 'react-smooth-dnd';
import { applyDrag, generateItems } from './utils';
import { Button, ButtonGroup} from '@material-ui/core';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';

const groupStyle = {
  margin: 'auto',
  overflowX: 'auto',
  // border: '1px solid #ccc'
};

var ac=[1,2,3,4];
var sz=4;


export default class DataStructuresVisualizer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [1,2,3,4],
      abar: '4',
      cn: 'array',
      items3: generateItems(parseInt(sz), (i) => ({ id: i, data: ac[parseInt(i)] })),
    };
  }


  componentDidMount() {
    this.resetArray();
  }

  
  resetArray() {
    if(this.refs.dsType.value==='Array')
    {
      this.state.cn='array';
      var z = document.getElementById("linkedListType");
      z.style.display="none";
      var vl=document.getElementById("x");
      vl.style.border="10px solid #ffbf00";
      vl.style.display="block";
      var v2=document.getElementById("arrow");
      v2.style.display="none";
    }
    else if(this.refs.dsType.value==='LinkedList')
    {
      var z = document.getElementById("linkedListType");
      z.style.display="inline";
      if(this.refs.llType.value==='Double')
      {
        this.state.cn='doubly-linked-list';
      }
      else
      {
        this.state.cn='linked-list';
      }
      var vl=document.getElementById("x");
      vl.style.display="none";
      var v2=document.getElementById("arrow");
      v2.style.display="block";
    }
    else
    {
      this.state.cn='array';
      var z = document.getElementById("linkedListType");
      z.style.display="none";
      var vl=document.getElementById("x");
      vl.style.border='transparent';
      var vl=document.getElementById("x");
      vl.style.display="none";
      var v2=document.getElementById("arrow");
      v2.style.display="block";
    }
    const array = [];
    this.state.abar=parseInt(4);
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
    ac=array;
    sz=4;
    var x=generateItems(parseInt(sz), (i) => ({ id: i, data: `${ac[parseInt(i)]}` }));
    this.state.items3=x;
    this.setState({array});
    const arrayBar=document.getElementsByClassName(this.state.cn);
    for ( let i=0;i<array.length;i++) {
      console.log(arrayBar[i]);
      if(!arrayBar[i])
      {
        continue;
      }
      else{
      const boStyle = arrayBar[i].style;
      }
    }
    var vl=document.getElementById("x");
    vl.style.width=(((this.state.abar-1)*130)+142)+'px';
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
      position: 'bottom-right',
      thickBorder: 'bottom',
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
      position: 'bottom-right',
      thickBorder: 'bottom',
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
      position: 'bottom-right',
      thickBorder: 'bottom',
      iconless: false,
      closable: false,
      sticky: false,
      closable: true,
      });
      return;
    }
    var count=0;
    for ( let i=0;i<this.state.abar;i++) {
      if(this.state.array[i]===parseInt(x))
      {
        count++;
        continue;
      }
      array.push(this.state.array[i]);
      console.log(array[i]);
    }
    this.state.abar=parseInt(this.state.abar)-parseInt(count);
    ac=array;
    sz=this.state.abar;
    var x=generateItems(parseInt(sz), (i) => ({ id: i, data: `${ac[parseInt(i)]}` }));
    this.state.items3=x;
    this.setState({array});
    const arrayBar=document.getElementsByClassName(this.state.cn);
    for ( let i=0;i<array.length;i++) {
      if(!arrayBar[i])
      {
        continue;
      }
      else{
      const boStyle = arrayBar[i].style;
      boStyle.backgroundColor='#ffbf00';
      boStyle.color='#000000';
      }
    }
    var vl=document.getElementById("x");
    vl.style.width=(((this.state.abar-1)*130)+142)+'px';
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
      position: 'bottom-right',
      thickBorder: 'bottom',
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
    ac=array;
    sz=this.state.abar;
    var x=generateItems(parseInt(sz), (i) => ({ id: i, data: `${ac[parseInt(i)]}` }));
    this.state.items3=x;
    this.setState({array});
    console.log(this.state.abar);
    const arrayBar=document.getElementsByClassName(this.state.cn);
    for ( let i=0;i<array.length;i++) {
      if(!arrayBar[i])
      {
        continue;
      }
      else{
      const boStyle = arrayBar[i].style;
      boStyle.backgroundColor='#ffbf00';
      boStyle.color='#000000';
      }
    }
    
      window.notification = new Notification();
      let instance = window.notification.new({
      type: 'success',
      title: 'Task Successful',
      message: 'Element Successfully Popped',
      duration: 2000,
      position: 'bottom-right',
      thickBorder: 'bottom',
      iconless: false,
      closable: false,
      sticky: false,
      closable: true,
      });
    var vl=document.getElementById("x");
    vl.style.width=(((this.state.abar-1)*130)+142)+'px';
  }


  addValueLL() {
    const array=[];
    var x=document.getElementById("val").value;
    if(this.state.abar===9)
    {
      window.notification = new Notification();
      let instance = window.notification.new({
      type: 'error',
      title: 'Buffer Overflow',
      message: 'Only 9 elements allowed',
      duration: 2000,
      position: 'bottom-right',
      thickBorder: 'bottom',
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
      position: 'bottom-right',
      thickBorder: 'bottom',
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
    ac=array;
    sz=this.state.abar;
    var x=generateItems(parseInt(sz), (i) => ({ id: i, data: `${ac[parseInt(i)]}` }));
    this.state.items3=x;
    this.setState({array});
    console.log(this.state.abar);
    const arrayBar=document.getElementsByClassName(this.state.cn);
    for ( let i=0;i<array.length;i++) {
      console.log(arrayBar[i]);
      if(!arrayBar[i])
      {
        continue;
      }
      else{
      arrayBar[i].className='linked-list';
      }
    }
    window.notification = new Notification();
      let instance = window.notification.new({
      type: 'success',
      title: 'Task Successful',
      message: 'Element Successfully Popped',
      duration: 2000,
      position: 'bottom-right',
      thickBorder: 'bottom',
      iconless: false,
      closable: false,
      sticky: false,
      closable: true,
      });
  }

  addValueArr() {
    const array=[];
    var x=document.getElementById("val").value;
    if(this.state.abar===9)
    {
      window.notification = new Notification();
      let instance = window.notification.new({
      type: 'error',
      title: 'Buffer Overflow',
      message: 'Only 9 elements allowed',
      duration: 2000,
      position: 'bottom-right',
      thickBorder: 'bottom',
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
      position: 'bottom-right',
      thickBorder: 'bottom',
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
    ac=array;
    sz=this.state.abar;
    var x=generateItems(parseInt(sz), (i) => ({ id: i, data: `${ac[parseInt(i)]}` }));
    this.state.items3=x;
    this.setState({array});
    console.log(this.state.abar);
    const arrayBar=document.getElementsByClassName(this.state.cn);
    for ( let i=0;i<array.length;i++) {
      console.log(arrayBar[i]);
      if(!arrayBar[i])
      {
        continue;
      }
      else{
      const boStyle = arrayBar[i].style;
      }
    }
    window.notification = new Notification();
      let instance = window.notification.new({
      type: 'success',
      title: 'Task Successful',
      message: 'Element Successfully Popped',
      duration: 2000,
      position: 'bottom-right',
      thickBorder: 'bottom',
      iconless: false,
      closable: false,
      sticky: false,
      closable: true,
      });
    var vl=document.getElementById("x");
    vl.style.width=(((this.state.abar-1)*130)+142)+'px';
  }

  addValueUnsortedSet() {
    const array=[];
    var x=document.getElementById("val").value;
    if(this.state.abar===9)
    {
      window.notification = new Notification();
      let instance = window.notification.new({
      type: 'error',
      title: 'Buffer Overflow',
      message: 'Only 9 elements allowed',
      duration: 2000,
      position: 'bottom-right',
      thickBorder: 'bottom',
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
      position: 'bottom-right',
      thickBorder: 'bottom',
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
      position: 'bottom-right',
      thickBorder: 'bottom',
      iconless: false,
      closable: false,
      sticky: false,
      closable: true,
      });
      return;
    }
    array.push(parseInt(x));
    this.state.abar=parseInt(this.state.abar)+parseInt(1);
    ac=array;
    sz=this.state.abar;
    var x=generateItems(parseInt(sz), (i) => ({ id: i, data: `${ac[parseInt(i)]}` }));
    this.state.items3=x;
    this.setState({array});
    console.log(this.state.abar);
    const arrayBar=document.getElementsByClassName(this.state.cn);
    for ( let i=0;i<array.length;i++) {
      if(!arrayBar[i])
      {
        continue;
      }
      else{
      const boStyle = arrayBar[i].style;
      boStyle.backgroundColor='#ffbf00';
      boStyle.color='#000000';
      }
    }
    window.notification = new Notification();
      let instance = window.notification.new({
      type: 'success',
      title: 'Task Successful',
      message: 'Element Successfully Popped',
      duration: 2000,
      position: 'bottom-right',
      thickBorder: 'bottom',
      iconless: false,
      closable: false,
      sticky: false,
      closable: true,
      });
    var vl=document.getElementById("x");
    vl.style.width=(((this.state.abar-1)*142)+90)+'px';
  }

  addValueSortedSet() {
    const array=[];
    var x=document.getElementById("val").value;
    if(this.state.abar===9)
    {
      window.notification = new Notification();
      let instance = window.notification.new({
      type: 'error',
      title: 'Buffer Overflow',
      message: 'Only 9 elements allowed',
      duration: 2000,
      position: 'bottom-right',
      thickBorder: 'bottom',
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
      position: 'bottom-right',
      thickBorder: 'bottom',
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
      position: 'bottom-right',
      thickBorder: 'bottom',
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
    ac=array;
    sz=this.state.abar;
    var x=generateItems(parseInt(sz), (i) => ({ id: i, data: `${ac[parseInt(i)]}` }));
    this.state.items3=x;
    this.setState({array});
    console.log(this.state.abar);
    const arrayBar=document.getElementsByClassName(this.state.cn);
    for ( let i=0;i<array.length;i++) {
      if(!arrayBar[i])
      {
        continue;
      }
      else{
      const boStyle = arrayBar[i].style;
      boStyle.backgroundColor='#ffbf00';
      boStyle.color='#000000';
      }
    }
    window.notification = new Notification();
      let instance = window.notification.new({
      type: 'success',
      title: 'Task Successful',
      message: 'Element Successfully Popped',
      duration: 2000,
      position: 'bottom-right',
      thickBorder: 'bottom',
      iconless: false,
      closable: false,
      sticky: false,
      closable: true,
      });
    var vl=document.getElementById("x");
    vl.style.width=(((this.state.abar-1)*142)+90)+'px';
  }

  push() {
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
    else if(this.refs.dsType.value==="LinkedList")
    {
      this.addValueArr();
    }
  }

messageCallSet() {
    if(this.refs.dsType.value==="SortedSet")
    {
      window.notification = new Notification();
      let instance = window.notification.new({
      type: 'warning',
      title: 'Sorted Set',
      message: 'Elements remain sorted in Sorted Set ',
      duration: 2000,
      position: 'bottom-right',
      thickBorder: 'bottom',
      iconless: false,
      closable: false,
      sticky: false,
      closable: true,
      });
    }
}

render() {
  const {array} = this.state;

  return (
    <div>
    <div>
    <Button onClick={()=>this.resetArray()} id="btn1">Generate a new list</Button>
    <select  className="browser-default custom-select" id="sel1" ref="dsType" onChange={()=>this.resetArray()}>
    <option value="Array">Array</option>
    <option value="UnsortedSet">Unsorted Set</option>
    <option value="SortedSet">Sorted Set</option>
    <option value="LinkedList">Linked List</option>
    </select>
    <select className="browser-default custom-select" ref="llType" onChange={()=>this.resetArray()} id="linkedListType">
    <option value="Single">Singly Linked List</option>
    <option value="Double">Doubly Linked List</option>
    </select>
    <input type="number" id="dval" name="dval"/>
    <Button onClick={()=>this.deleteValue()} id="btn2">Delete Value</Button>
    <input type="number" id="val" name="val"/>
    <Button onClick={()=>this.push()} id="btn3">Push</Button>
    <Button onClick={()=>this.pop()} id="btn4">Pop</Button>
    <hr></hr>
    </div>
    <div className="array-container" id="x">
  <Container id="z" groupName="1" style={groupStyle} orientation="horizontal" getChildPayload={i => this.state.items3[i]} onDrop={e => {this.setState({array: applyDrag(this.refs.dsType.value,this.state.array,this.state.items3, e)}); this.messageCallSet()}}>
    {array.map((value, idx) => (
      <Draggable>
        <div
        className={this.state.cn}
        id={idx}><p>{value}</p></div>
      </Draggable>
    ))}
    </Container>
    </div>
    <div className="array-container" id="arrow">
      {array.map((value, idx) => (
        <div
        className={this.state.cn}
        id={idx}><p>{value}</p></div>
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


