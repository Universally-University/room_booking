import{B as c,j as e}from"./constant.452a6a97.js";import{r as n}from"./index.ed373d49.js";const m=async()=>(await fetch(`${c}/api/room/`,{method:"GET",mode:"cors",headers:{"Content-Type":"application/json"}})).json();function i({title:o,seatNum:t,roomId:r}){const s="reserve/?roomId="+r.toString();return e.jsx(e.Fragment,{children:e.jsx("a",{href:s,children:e.jsxs("div",{className:"rounded-lg h-28 text-center border-2 border-black py-2 flex flex-col items-center justify-center",children:[e.jsx("p",{className:"text-2xl py-2",children:o}),e.jsxs("p",{children:["Amount of seats: ",t]})]})})})}function x(){const[o,t]=n.useState([]),r=async()=>{const s=await m();t(s)};return n.useEffect(()=>{r()},[]),e.jsxs("main",{className:"flex flex-col items-center justify-center grow",children:[e.jsx("p",{className:"text-black text-3xl font-jakarta py-4",children:"Reserve a room"}),e.jsx("div",{className:"grid grid-cols-3 gap-4 w-1/2",children:o.map((s,a)=>e.jsx(i,{seatNum:s.num_seats,title:`Room ${s.room_id}`,roomId:s.room_id},a))})]})}export{x as default};
