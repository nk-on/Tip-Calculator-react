export default function PercentageButton({percentage,setPercentage,bill,people,setTipAmount, setTotalAmount}){
    return <>
        <button className=" h-[50px] bg-[#00494d] text-[#fff] rounded-[5px]" onClick={
            ()=>{
                setPercentage(percentage);
                setTipAmount((bill*percentage)/100);
                setTotalAmount(((bill*percentage)/100)*people)
            }
        }>
            {percentage}
        </button>
    </>
}