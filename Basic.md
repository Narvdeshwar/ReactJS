# npm vs npx
**npm** stands for **node-package-manager** and it is used to install **packages** whereas **npx** stands for **node-package-execute** and it is used for **execute** the packages installed using the npm.

# Problem with variable used in react js
```js
export default function App(){
  let data="Ashrith";
  function Test(){
    data="Ram"
    alert('click')
  }
  return (
  <>
    <div>
      <h1>{data}</h1>
      <button onClick={Test}>Hi Click Me!</button>
    </div>
  </>
  )
}
```
# Variable get not re-rendered so we use *state*
state uses the hook that re-render the component when their is somthing update in the data
```js
import { useState } from "react"
export default function App(){
  //destructing the usestate
  const [name,setName]=useState("Ravi");
  function Test(){
    setName(prompt())
  }
  return (
  <>
    <div>
      <h1>{name}</h1>
      <button onClick={Test}>Hi Click Me!</button>
    </div>
  </>
  )
}
```
# Creating counter onClicking the button
```js
import { useState } from "react"
export default function App(){
  //destructing the usestate
  const [count,setCount]=useState(0);
  function Test(){
    setCount(count+1)
  }
  return (
  <>
    <div>
      <h1>{count}</h1>
      <button onClick={Test}>Hi Click Me!</button>
    </div>
  </>
  )
}
```
# Props
```js
import Student from "./Studnet"
export default function App(){
  return(
    <Student name="Ashrit" email="ashrith@gmail.com"/>
  )
}
```
## sending props value to another component
```js
export default function Student(props){
    return(
        <>
            <h1>Hi {props.name}</h1>
            <h2>Email: {props.email}</h2>
        </>
    )
}
```
# Passing props as function
```js
import Profile from './Profile'
export default function App(){
    function test(){
        alert("I am from app component")
    }
    return (<><Profile data={test}/></>)
}
```
```js
export default function Profile(props){
    return(<>
        <h1>Passing props as function</h1>
        <button onClick={props.data}>Click me</button>
    </>)
}
```
# Creating button of show or hide content on onClick event
```js
import { useState } from "react"
export default function App(){
  const [status,setStatus]=useState(true)
  return(
    <>
    {
      status?<h1>Click on Button to show or hide</h1>:null
    }
    <button onClick={()=>setStatus(true)}>Show</button>
    <button onClick={()=>setStatus(false)}>Hide</button>
    </>
  )
}
```
# Creating toggle button
```js
import { useState } from "react"
export default function App(){
  const [toggle,setToggle]=useState(true);
  return (
    <>
      {toggle?<h1>Click toggle to change me</h1>:null}
      <button onClick={()=>setToggle(!toggle)}>Toggle</button>
    </>
  )
}
```
# form handling
```js
import { useState } from "react";

export default function App(){
    const [name,setName]=useState('')
    const [password,setPassword]=useState('')
    const [select,setSelect]=useState('')
    const [check,setCheck]=useState(false)

  function getData(e){
    console.log(name,password,select,check);
    e.preventDefault();//this function helps to prevent submit the form by reloading of page
  }
  return(
    <>
        <form onSubmit={getData}>
            <input type="text" placeholder="enter your name" onChange={(e)=>setName(e.target.value)}/>
            <br/>
            <br/>
            <input type="password" placeholder="enter your password" onChange={(e)=>setPassword(e.target.value)}/>
            <br/>
            <br/>
            <select onChange={(e)=>setSelect(e.target.value)}>
                <option>Select from below options</option>
                <option>Hindi</option>
                <option>English</option>
            </select>
            <br/>
            <br/>
            <input type="checkbox" onChange={(e)=>setCheck(e.target.checked)}/><span>Terms and conditions apply</span>
            <br/>
            <br/>
            <button type="submit" onClick={getData}>Submit</button>
        </form>
    </>
  )
}
```
# Basic form validation
```js
import { useState } from "react";

export default function Profile(){
    const [name,setName]=useState('');
    const [password,setPassword]=useState('');
    const [nameErr,setnameErr]=useState(false);
    const [passErr,setpassErr]=useState(false);
    function loginHandle(e){
        e.preventDefault();
        if(name.length<3 || password.length<3){
            alert('values are not correct:')
        }
        else{
            alert('all values are good')
        }
   }
    function nameValidation(e){
        const textLength=e.target.value.length;
        if(textLength<3){
            setnameErr(true)
        }
        else{
            setnameErr(false)
        }
        setName(e.target.value);
   }
   function passValidation(e){
    const passLength=e.target.value.length;
    if(passLength<3){
        setpassErr(true)
    }
    else{
        setpassErr(false)
    }
    setPassword(e.target.value);
}
   return(<>
        <form onSubmit={loginHandle}>
            <input type='text' placeholder='enter your name' onChange={nameValidation}/>
            {nameErr?<span>not valid length</span>:null}
            <br/><br/>
            <input type='password' placeholder='enter your password' onChange={passValidation}/>
            {passErr?<span>not valid password length</span>:null}
            <br/><br/>
            <button>Submit</button>
        </form>
    </>)
}
```
# IF-ELSE
```JS
import { useState } from "react"
export default function Profile(){
    const [user,setUser]=useState(0)
    return(
        user?<h1>Hello user</h1>:<h1>Welcome guest</h1>
    )
}
```
# TERNARY (IF-ELSEIF-ELSE)
```JS
import { useState } from "react"
export default function Profile(){
    const [user,setUser]=useState(2)
    return(
        user==1?<h1>Hello user {user}</h1>:user==2?<h1>Hello user {user}</h1> : <h1>Welcome Guest</h1>
    )
}
```
