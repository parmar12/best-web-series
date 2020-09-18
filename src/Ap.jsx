import React from 'react';

const SlotM = () => {
    let x = 1;
    let y = 1;
    let z = 2;

    if (x === y && y===z) {
        return (
            <>
                <div className="inner_div">
                    <h1>
                        {x} {y} {z}
                    </h1>
                    <h1>This is Matching</h1>
                    <hr/>
                </div>
            </>
        )
    }else{
        return (
            <>
                <div className="inner_div">
                    <h1>
                        {x} {y} {z}
                    </h1>
                    <h1>This is Not Matching</h1>
                    <hr/>
                </div>
            </>
        )
    }
}

const Ap = () => {
return <>
<h1 className="heading">
 Welcome to <span style={{ fontWeight: "bold"}}>Slot Machine Game </span>
  </h1> 
  <SlotM />
</>
}

export default Ap;