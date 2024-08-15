// 1) define a single atom , ki ha this is going to store my counter information
import { atom, selector } from "recoil";


// By doing this i have separtely defined my state
export const countAtom = atom({ // pass a object inside the atom() function 
    key : "countAtom", //a unique way to identify this atom , key should be unique to identify the atom or state
    default : 0 // defualt value means intial value 
})

// const todoAtom = atom({
//     key : "todoAtom" ,
//     default : 0
// })

export const evenSelector = selector({
    key : "evenSelector",
    get : ({get}) => {
        const count = get(countAtom);
        return count % 2;
    }
})

// this evenSelector is simliar to useMemo
// const isEven = useMemo(() =>{
    // return count % 2 == 0
//  } , [count])  
// whenever this count changes this function will run 


export const counterAtom = atom({ 
    key : "countAtom", //key should be unique
    default : 0 // defualt value means intial value 
})