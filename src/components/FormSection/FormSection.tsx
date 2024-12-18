import { buttons } from "./buttons";
import Form from "../form/form";
import PercentageButton from "../percentageButton/PercentageButton";
import CustomForm from "../customForm/customForm";
import { useRef } from "react";
interface propType {
  title:{billTitle:string,peopleTitle:string},
  bill: string;
  people: string;
  currentPercentage: React.MutableRefObject<number>
  setBill: React.Dispatch<React.SetStateAction<string>>;
  setPeople: React.Dispatch<React.SetStateAction<string>>;
  setTipAmount: React.Dispatch<React.SetStateAction<number>>;
  setTotalAmount: React.Dispatch<React.SetStateAction<number>>;
}
export default function FormSection(formSectionObj:propType){
  const {title,bill,people,currentPercentage,setBill,setPeople,setTipAmount,setTotalAmount} = formSectionObj;
  return (
    <>
      <div className="content-center	border border-red w-[50%] h-full">
        <Form
          currentPercentage = {currentPercentage}
          title={title.billTitle}
          bill={bill}
          people={people}
          setBill={setBill}
          setPeople={setPeople}
          setTipAmount={setTipAmount}
          setTotalAmount={setTotalAmount}
        />
        <p>Select tip</p>
        <div className="grid grid-cols-3 gap-[5px]">
          {buttons.map((button) => {
            return (
              <PercentageButton
                key={button.id}
                currentPercentage = {currentPercentage}
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
          currentPercentage = {currentPercentage}
          title={title.peopleTitle}
          bill={bill}
          people={people}
          setBill={setBill}
          setPeople={setPeople}
          setTipAmount={setTipAmount}
          setTotalAmount={setTotalAmount}
        />
      </div>
    </>
  );
}
