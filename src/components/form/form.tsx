interface propType{
  people:number | string,
  bill:number | string,
  title:string,
  setBill:React.Dispatch<React.SetStateAction<number | string>>,
  setPeople:React.Dispatch<React.SetStateAction<number | string>>,
}
export default function Form( {people,bill,title,setBill,setPeople}:propType){
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
        }} value={title === "Bill" ? bill:people}/>
      </div>
    </>
  );
}
