interface propType{
  people:number | string,
  bill:number | string,
  title:string,
  setBill:React.Dispatch<React.SetStateAction<string>>,
  setPeople:React.Dispatch<React.SetStateAction< string>>,
}
export default function Form( {...formProps}:propType){
  
  const { title, bill, people, setBill, setPeople } = formProps;
  return (
    <>
      <div className="flex flex-col">
        {title}
        <input type="number" className="w-[80%] h-[50px] bg-[#c4e4e6]" onChange={(event)=>{
          if(formProps.title === "Bill"){
            setBill(event.target.value)
          }else{
            setPeople(event.target.value)
          }
        }} value={title === "Bill" ? bill:people}/>
      </div>
    </>
  );
}
