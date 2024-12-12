import Form from "../form/form";
import PercentageButton from "../percentageButton/PercentageButton";
import DataContainer from "../dataContainer/dataContainer";
export default function Container() {
  const buttons = [
    {
      id:1,
      percentage:5
    },
    {
      id:2,
      percentage:10
    },
    {
      id:3,
      percentage:15
    },
    {
      id:4,
      percentage:20
    },
    {
      id:5,
      percentage:25
    },
  ]
  return (
    <div className="flex px-[15px] bg-[#fff] w-custom h-[481px] rounded-[15px]">
      <div className="content-center	border border-red w-[50%] h-full">
        <Form title={"Bill"} />
        <p>Select tip</p>
        <div className="grid grid-cols-3 gap-[5px]">
          {
            buttons.map((button)=>{
              return <PercentageButton key={button.id} percentage={button.percentage}/>
            })
          }
        </div>
        <Form  title={"Amount of People"}/>
      </div>
      <div className="w-[50%] h-[70%] mt-[10%]">
        <div className="w-full h-full bg-[#01484d] rounded-[10px] content-center">
          <DataContainer title={"Tip amount"} amount={"0.00$"}/>
          <DataContainer title={"Total amount"} amount={"0.00$"}/>
        </div>
      </div>
    </div>
  );
}
