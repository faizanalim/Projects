import { useState } from "react"

const Counter = ()=>
{
const [count,setCount] = useState(0);
const [Rcount,RsetCount] = useState(10);

return(
<>
<h2>{}</h2>
<h1>{count}</h1>
<h1>{Rcount}</h1>
<button onClick={()=>setCount(count +1)}>Counter</button>
<button onClick={()=>RsetCount(Rcount -1)}>Counter</button>

</>

)

}

export default Counter;