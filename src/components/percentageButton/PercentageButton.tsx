export default function PercentageButton({percentage,setPercentage,bill,people,setTipAmount, setamountPerPerson}){
    return <>
        <button className=" h-[50px] bg-[#00494d] text-[#fff] rounded-[5px]" onClick={
            ()=>{
                setPercentage(percentage);
                setTipAmount((bill*percentage)/100);
                setamountPerPerson(((bill*percentage)/100)*people)
            }
        }>
            {percentage}
        </button>
    </>
}