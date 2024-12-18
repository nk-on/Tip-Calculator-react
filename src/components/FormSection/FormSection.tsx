import { buttons } from "./buttons";
import Form from "../form/form";
import PercentageButton from "../percentageButton/PercentageButton";
import CustomForm from "../customForm/customForm";
interface propType{
  bill:string,
  people:string,
  setBill:React.Dispatch<React.SetStateAction<string>>,
  setPeople:React.Dispatch<React.SetStateAction< string>>,
  setTipAmount:React.Dispatch<React.SetStateAction<number>>,
  setTotalAmount:React.Dispatch<React.SetStateAction<number>>,
}
export default function FormSection({ bill, people, setBill, setPeople,setTipAmount,setTotalAmount }:propType) {
  return (
    <>
      <div className="content-center	border border-red w-[50%] h-full">
        <Form
          title={"Bill"}
          bill={bill}
          people={people}
          setBill={setBill}
          setPeople={setPeople}
        />
        <p>Select tip</p>
        <div className="grid grid-cols-3 gap-[5px]">
          {buttons.map((button) => {
            return (
              <PercentageButton
                key={button.id}
                percentage={button.percentage}
                bill={bill}
                people={people}
                setTipAmount={setTipAmount}
                setTotalAmount={setTotalAmount}
              />
            );
          })}
          <CustomForm
            bill={bill}
            people={people}
            setTipAmount={setTipAmount}
            setTotalAmount={setTotalAmount}
          />
        </div>
        <Form
          title={"Amount of People"}
          bill={bill}
          people={people}
          setBill={setBill}
          setPeople={setPeople}
        />
      </div>
    </>
  );
}
