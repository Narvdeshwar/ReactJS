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
#Creating counter onClicking the button
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
