import {  useRef} from "react";

interface propType{
    bill:string,
    people:string,
    setTipAmount:React.Dispatch<React.SetStateAction<number>>,
    setTotalAmount:React.Dispatch<React.SetStateAction<number>>,
}
export default function CustomForm({bill,people,setTipAmount, setTotalAmount}:propType){
    const percentage = useRef("")
    return <>
     <input type="number" className="bg-[#F4FAFA]" placeholder="Custom" value={percentage.current} onChange={
            (event)=>{
                percentage.current = event.target.value;
                setTipAmount((Number(bill)*Number(percentage.current))/100);
                setTotalAmount(((Number(bill)*Number(percentage.current))/100)*Number(people))
            }
        }></input>
    </>
}