import { useRef } from "react";

interface propType{
    bill:number | string,
    people:number | string,
    setTipAmount:React.Dispatch<React.SetStateAction<number>>,
    setTotalAmount:React.Dispatch<React.SetStateAction<number>>,
}
export default function CustomForm({bill,people,setTipAmount, setTotalAmount}:propType){
    const percentage = useRef<number | string>("")
    return <>
     <input type="number" className="bg-[#F4FAFA]" placeholder="Custom" value={percentage.current} onChange={
            (event)=>{
              percentage.current = Number(event.target.value);
               if(typeof bill === "number" &&  typeof people === "number" && typeof percentage.current === "number"){
                setTipAmount((bill*percentage.current)/100);
                setTotalAmount(((bill*percentage.current)/100)*people)
               }
            }
        }></input>
    </>
}