interface propType{
  title:string,
  setBill:React.Dispatch<React.SetStateAction<number>>,
  setPeople:React.Dispatch<React.SetStateAction<number>>,
}
export default function Form( {title,setBill,setPeople}:propType){
  return (
    <>
      <div className="flex flex-col">
        {title}
        <input type="number" className="w-[80%] h-[50px] bg-[#c4e4e6]" onChange={(event)=>{
          if(title === "Bill"){
            setBill(Number(event.target.value))
          }else{
            setPeople(Number(event.target.value))
          }
        }}/>
      </div>
    </>
  );
}
