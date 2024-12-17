import {  useState } from "react";

interface propType{
    bill:string,
    people:string,
    setTipAmount:React.Dispatch<React.SetStateAction<number>>,
    setTotalAmount:React.Dispatch<React.SetStateAction<number>>,
}
export default function CustomForm({bill,people,setTipAmount, setTotalAmount}:propType){
    const [percentage,setPercentage] = useState<string>("")
    return <>
     <input type="number" className="bg-[#F4FAFA]" placeholder="Custom" value={percentage} onChange={
            (event)=>{
                setPercentage(event.target.value)
                setTipAmount((Number(bill)*Number(percentage))/100);
                setTotalAmount(((Number(bill)*Number(percentage))/100)*Number(people))
            }
        }></input>
    </>
}