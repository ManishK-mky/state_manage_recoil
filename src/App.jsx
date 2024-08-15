import { useMemo } from "react"
import {countAtom, evenSelector} from "./store/atoms/Count"
import { useRecoilState, useSetRecoilState } from "recoil"
import { useRecoilValue } from "recoil"
import { RecoilRoot  } from "recoil"

export default function App(){
    return (
        <>
            <RecoilRoot>
                <Count />
            </RecoilRoot>
        </>
    )
}

function Count(){
    console.log("hello");
    
    return(
        <>
            <Button />
            <CountRenderer />
        </>
    )
}

function CountRenderer(){
    // console.log("re-rendr");
    
    const count = useRecoilValue(countAtom) // useRecoilValue will only give the value , not the way for upadting the value
    return (
        <>
            {count};
            {/* {count %2 == 0 ? <h1>It is even</h1> : ""} // this is also correct */}  
            <EvenCountRenderer />
        </>
    )
} 


function EvenCountRenderer(){
    
    // -------------------1----------------------
    // const count = useRecoilValue(countAtom) 
    // if(count % 2 == 0){
    //     return <>
    //         <h1>It is even</h1>
    //     </>
    // }else{
    //     return<></>
    // }
    // ---------------------1---------------------

    // ---------------------2-------------------
    // return <>
    //    {(count % 2 == 0) ? <h1>it is even</h1> : <></>}
    // </>
    // --------------------2--------------------

    // --------------------3-----------------------
    // const count = useRecoilValue(countAtom)
    // const isEven = useMemo(()=>{
    //     return count % 2 == 0;
    // },[count]) ---> any time this count changes this function runs and count%2 is calculated and if it is even it returns true and false.
    // --------------------3---------------------

    // ---------------------4---------------------
    const isEven = useRecoilValue(evenSelector)   
    // ---------------------4---------------------

    return <>
        {isEven ? "It is even" : ""}
    </>
    // --------------------3-----------------------
}

function Button(){

    // const [count , setCount] = useRecoilState(countAtom) //we are using ===useRecoilState=== becz we want both the function to update the count, and since we have to update it , therefore we also need the state variable , in which the value is stored.
    // setCount(count + 1)

    const setCount = useSetRecoilState(countAtom)  
    // these two doesnot require count, so we can also use "useSetRecoilState"
    // setCount(c => c + 1)
    // setCount(function(c){
    //      return c + 1
    // })

    
    return(
        <>
            <button onClick={() => {setCount(count => count+1)}}>Increase</button>
            {/* {count} */}
            <button onClick={() => {setCount(count => count-1)}}>Decrease</button>
        </>
    )
}