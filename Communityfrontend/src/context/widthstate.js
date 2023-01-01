import { useState } from 'react'
import widthcontext from './widthcontext'
const Widthstate = (props)=>{
    const [wedth, setwedth] = useState(true)
    const [height, setheight] = useState(false)
    const fun=()=>{
        if(window.innerWidth <= 770){
            setwedth(false);
        }
        else{
            setwedth(true);
        }
        
    }
    const fun2=()=>{
        if(window.scrollY >170){
            setheight(true);
        }
        else{
            setheight(false);
        }
        
    }
    window.addEventListener('resize',fun);
    window.addEventListener('scroll',fun2);
    return (
        <widthcontext.Provider value={{wedth,height}}>
            {props.children}
        </widthcontext.Provider>
    )
}
export default Widthstate