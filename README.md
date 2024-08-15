### State Management

### what is state management tool?

A cleaner way to store the state of your app. Until now , the cleanest thing you can do is to use the contextAPI. It let's you teleport state.

But there are better solutions that get rid of the problems that context API has like unnecessary re-renders.

How state management solves for the cleaner syntax?

In state management tool , the way to achieve this is by making the * ) components folder and *) state folder ---> make separate where the state folder contains or store all the state required in the components.(those who only works on the component parts of the web are called UI Engineer they are far away from writing the logics in the state folder.)

### Recoil -->  is a state management tool. 
It is basically, a state management library for React.
Other popular ones are:-
1) zustand
2) Redux

### Recoil

Recoil has a concept of an atom to store the state(atom can be the smallest unit of state). An atom can be defined outside the component. It can be telported to any component. 

90% of the recoil is happens during ---> creating elements.

An "atom" is similar to "useState" hook. The "usestate" helps u to define the state variable and the "atom" also helps u to define the state variable in the Recoil world.
In useState we can update the state variable and in atom of recoil also we can update the state variable.
In useState we can update the state variable using the "setCount" and in "atom" also there is a way to ---update the state variable--- and ---get the state variable---


### benefit of state management library
One of the benefits of using "Recoil" a state management tool is that , the component that are using state variable like count , gets re-rendered only , and the components that are not using the state variable will not gets re-rendered.(time stamp : 21:50)

===================================

npm i recoil

### thins to learn in Recoil

1) Recoil Root
2) atom
3) useRecoilState
4) useRecoilValue
5) useSetRecoilState
6) selector


===========================================<br>
3) useRecoilState ---> is just like useState() hook - It will give the both ---> the value and the function to update the value

4) useRecoilValue ---> (just like "count" in ---> 
const [count , setCount] = useState(0) )
will only give the value of the state

5) useSetRecoilState --> if u only wants to update the variable or count not to use it then u can use this "useSetRecoilState"
