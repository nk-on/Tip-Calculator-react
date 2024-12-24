import {  useRef} from "react";

interface propType{
    currentPercentage:React.MutableRefObject<number>,
    bill:string,
    people:string,
    setTipAmount:React.Dispatch<React.SetStateAction<number>>,
    setTotalAmount:React.Dispatch<React.SetStateAction<number>>,
}
export default function CustomForm({currentPercentage,bill,people,setTipAmount, setTotalAmount}:propType){
    const percentage = useRef("")
    return <>
     <input type="number" className="bg-[#F4FAFA]" placeholder="Custom" value={percentage.current} onChange={
            (event)=>{
                percentage.current = event.target.value;
                currentPercentage.current = Number(event.target.value);
                setTipAmount((Number(bill)*Number(percentage.current))/100);
                setTotalAmount(((Number(bill)*Number(percentage.current))/100)*Number(people))
            }
        }></input>
    </>
}