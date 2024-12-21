interface propType {
  currentPercentage: React.MutableRefObject<number>;
  percentage: number;
  bill: number | string;
  error: boolean;
  people: number | string;
  setTipAmount: React.Dispatch<React.SetStateAction<number>>;
  setTotalAmount: React.Dispatch<React.SetStateAction<number>>;
}
export default function PercentageButton({
  currentPercentage,
  percentage,
  bill,
  people,
  error,
  setTipAmount,
  setTotalAmount,
}: propType) {
  return (
    <>
      <button
        className=" h-[50px] bg-[#00494d] text-[#fff] rounded-[5px]"
        onClick={() => {
          if (!error) {
            currentPercentage.current = percentage;
            setTipAmount((Number(bill) * percentage) / 100);
            setTotalAmount(
              ((Number(bill) * percentage) / 100) * Number(people)
            );
          }
        }}
      >
        {percentage}
      </button>
    </>
  );
}
