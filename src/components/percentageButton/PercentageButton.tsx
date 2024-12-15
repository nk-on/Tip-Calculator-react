interface propType{
    percentage:number,
    bill:number,
    people:number,
    setTipAmount:React.Dispatch<React.SetStateAction<number>>,
    setTotalAmount:React.Dispatch<React.SetStateAction<number>>,
}
export default function PercentageButton({percentage,bill,people,setTipAmount, setTotalAmount}:propType){
    return <>
        <button className=" h-[50px] bg-[#00494d] text-[#fff] rounded-[5px]" onClick={
            ()=>{
                setTipAmount((bill*percentage)/100);
                setTotalAmount(((bill*percentage)/100)*people)
            }
        }>
            {percentage}
        </button>
    </>
}