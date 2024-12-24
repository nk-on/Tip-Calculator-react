interface propType{
    setError:React.Dispatch<React.SetStateAction<boolean>>,
    currentPercentage: React.MutableRefObject<number>
    setBill:React.Dispatch<React.SetStateAction<string>>,
    setPeople:React.Dispatch<React.SetStateAction<string>>,
    setTipAmount:React.Dispatch<React.SetStateAction<number>>,
    setTotalAmount:React.Dispatch<React.SetStateAction<number>>,
}
export default function ResetButton({currentPercentage,setError,setBill,setPeople,setTipAmount,setTotalAmount}:propType){
    return <button className="bg-[#0C686D] w-[80%] h-[30px] uppercase hover:bg-[#C4E4E6] rounded-[5px]" onClick={()=>{
        currentPercentage.current = 0;
        setError(false);
        setBill("");
        setPeople("");
        setTipAmount(0);
        setTotalAmount(0);
    }}>Reset</button>
}