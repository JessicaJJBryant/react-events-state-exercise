// REACT EVENTS STATE EXERCISE
// 2a.
import { useState } from 'react';
// 1a.
function Exercise(){
    // 2c.
    const [num, setNum] = useState(1);
    // 2d.
    const addNum = () => setNum(num+1);
    // 1c.
    return (
        <div>
            {/* 1e. */}
            <button onClick={() => alert("Congrats! You have clicked the button.")}>CLICK HERE</button>
            {/* 2b. & 2e. */}
            {/* I had the below line, but the one right under it is what they had in class. Mine worked, but I'm guessing we just had to pass in the addNum function and not all the other junk that I had. I'm still so confused on this. Need to review. */}
            {/* <button onClick={() => setNum(addNum)}>STATE</button> */}
            <button onClick={addNum}>STATE</button>
            {/* 2f. */}
            <h1>{num}</h1>
        </div>
    );
}
// 1b.
export default Exercise;