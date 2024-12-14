export default function DataContainer({title,amount}:{title:string,amount:number}){
    return <div className="flex justify justify-around w-full">
        <div>
            <p className="text-[#F4FAFA] font-bold">{title}</p>
            <p>/person</p>
        </div>
        <div>
            <p className="text-[#26c0ab]">{amount}</p>
        </div>
    </div>
}