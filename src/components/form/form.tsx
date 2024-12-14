export default function Form( {title,setBill,setPeople}) {
  return (
    <>
      <div className="flex flex-col">
        {title.title}
        <input type="number" className="w-[80%] h-[50px] bg-[#c4e4e6]" onChange={(event)=>{
          if(title === "Bill"){
            setBill(event.target.value)
          }else{
            setPeople(event.target.value)
          }
        }}/>
      </div>
    </>
  );
}
