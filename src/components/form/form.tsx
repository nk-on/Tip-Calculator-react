export default function Form( title :{title:string}) {
  return (
    <>
      <div className="flex flex-col">
        {title.title}
        <input type="text" className="w-[80%] h-[50px] bg-[#c4e4e6]" />
      </div>
    </>
  );
}
