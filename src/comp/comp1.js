import {useState} from 'react';
export function Comp1(props)
{
    const [show,setShow] = useState(false);
    const [col,setCol] = useState('');
    
    let arr = ["blue","green","red","black","yellow",'grey']
    const color = (event) => {
        let x = event.target.value;
        setCol(arr[x]);
        setShow(!show);
    }

    const handleClick = () => {
        setShow(!show);
    }

    return (
        <div class="container my-5">
            <button onClick={handleClick} class="px-3 mx-2 btn btn-outline-dark"
            style={{backgroundColor:col}}>Pick a color</button>
            <br></br><br></br><br></br>
            {show && (
                <div>
                <button onClick={color} value="0" class="px-3 mx-2 btn btn-primary">Blue</button>
                <button onClick={color} value="1" class="px-3 mx-2 btn btn-success">Green</button>
                <button onClick={color} value="2" class="px-3 mx-2 btn btn-danger">Red</button>
                <button onClick={color} value="3" class="px-3 mx-2 btn btn-dark">Black</button>
                <button onClick={color} value="4" class="px-3 mx-2 btn btn-warning">Yellow</button>
                <button onClick={color} value="5" class="px-3 mx-2 btn btn-secondary">Grey</button>
                </div>
            )}
            
            <p>The color choosen is {col}</p>
        </div>
    )
}