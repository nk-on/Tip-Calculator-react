import { buttons } from "./buttons";
import Form from "../form/form";
import PercentageButton from "../percentageButton/PercentageButton";
import CustomForm from "../customForm/customForm";
interface propType {
  title:{billTitle:string,peopleTitle:string},
  bill: string;
  people: string;
  setBill: React.Dispatch<React.SetStateAction<string>>;
  setPeople: React.Dispatch<React.SetStateAction<string>>;
  setTipAmount: React.Dispatch<React.SetStateAction<number>>;
  setTotalAmount: React.Dispatch<React.SetStateAction<number>>;
}
export default function FormSection(formSectionObj:propType){
  const {title,bill,people,setBill,setPeople,setTipAmount,setTotalAmount} = formSectionObj;
  return (
    <>
      <div className="content-center	border border-red w-[50%] h-full">
        <Form
          title={title.billTitle}
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
          title={title.peopleTitle}
          bill={bill}
          people={people}
          setBill={setBill}
          setPeople={setPeople}
        />
      </div>
    </>
  );
}
