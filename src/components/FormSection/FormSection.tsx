import { buttons } from './buttons';
import Form from '../form/form';
import PercentageButton from '../percentageButton/PercentageButton';
import CustomForm from '../customForm/customForm';
import { useRef } from 'react';
interface propType {
  title: { billTitle: string; peopleTitle: string };
  bill: string;
  people: string;
  currentPercentage: React.MutableRefObject<number>;
  setBill: React.Dispatch<React.SetStateAction<string>>;
  setPeople: React.Dispatch<React.SetStateAction<string>>;
  setTipAmount: React.Dispatch<React.SetStateAction<number>>;
  setTotalAmount: React.Dispatch<React.SetStateAction<number>>;
}
export default function FormSection(formSectionObj: propType) {
  const {
    title,
    bill,
    people,
    currentPercentage,
    setBill,
    setPeople,
    setTipAmount,
    setTotalAmount,
  } = formSectionObj;
  const commonFormProps = {
    currentPercentage: currentPercentage,
    bill: bill,
    people: people,
    setBill: setBill,
    setPeople: setPeople,
    setTipAmount: setTipAmount,
    setTotalAmount: setTotalAmount,
  };
  const percentageButtonProps = {
    currentPercentage: currentPercentage,
    bill: bill,
    people: people,
    setTipAmount: setTipAmount,
    setTotalAmount: setTotalAmount,
  };
  const customFormProps = {
    bill:bill,
    people:people,
    setTipAmount:setTipAmount,
    setTotalAmount:setTotalAmount,
  }
  return (
    <>
      <div className="content-center	border border-red w-[50%] h-full">
        <Form {...commonFormProps} title="Bill" />
        <p>Select tip</p>
        <div className="grid grid-cols-3 gap-[5px]">
          {buttons.map((button) => {
            return (
              <PercentageButton
                key={button.id}
                percentage={button.percentage}
                {...percentageButtonProps}
              />
            );
          })}
          <CustomForm
            {...customFormProps}
          />
        </div>
        <Form {...commonFormProps} title="People" />
      </div>
    </>
  );
}
