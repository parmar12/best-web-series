import React from 'react';
import  {add, sub, div,mul} from './Calc';

function App() {
    

return (
    <>
    <ul>
        <li>Sum of Two No is {add(40,3)}</li>
        <li>Sub of Two No is {sub(40, 4)}</li>
        <li>Div of Two No is {div(40, 3)}</li>
        <li>Mult of Two No is {mul(40, 4)}</li>
    </ul>
    </>    
)
}

export default App;