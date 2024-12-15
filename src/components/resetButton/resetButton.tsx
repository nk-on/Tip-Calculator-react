interface propType{
    setBill:React.Dispatch<React.SetStateAction<number>>,
    setPeople:React.Dispatch<React.SetStateAction<number>>,
    setTipAmount:React.Dispatch<React.SetStateAction<number>>,
    setTotalAmount:React.Dispatch<React.SetStateAction<number>>,
}
export default function ResetButton({setBill,setPeople,setTipAmount,setTotalAmount}:propType){
    return <button className="bg-[#0C686D] w-[80%] h-[30px] uppercase" onClick={()=>{
        setBill(0);
        setPeople(0);
        setTipAmount(0);
        setTotalAmount(0);
    }}>Reset</button>
}