export default function PercentageButton({percentage}:{percentage:number}){
    return <>
        <button className=" h-[50px] bg-[#00494d] text-[#fff]">
            {percentage}
        </button>
    </>
}