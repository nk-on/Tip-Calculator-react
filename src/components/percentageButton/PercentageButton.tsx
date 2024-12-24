interface propType {
  currentPercentage: React.MutableRefObject<number>;
  percentage: number;
  bill: number | string;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
  people: number | string;
  setTipAmount: React.Dispatch<React.SetStateAction<number>>;
  setTotalAmount: React.Dispatch<React.SetStateAction<number>>;
}
export default function PercentageButton({
  currentPercentage,
  percentage,
  bill,
  people,
  setError,
  setTipAmount,
  setTotalAmount,
}: propType) {
  return (
    <>
      <button
        className=" h-[50px] bg-[#00494d] text-[#fff] rounded-[5px] hover:bg-[#00FFBF] hover:text-[#00494d]"
        onClick={() => {
          if(Number(people) <= 0 || Number(bill) <= 0){
            setError(true);
            return;
          }
          setError(false)
          currentPercentage.current = percentage;
          setTipAmount((Number(bill) * percentage) / 100);
          setTotalAmount(((Number(bill) * percentage) / 100) * Number(people));
        }}
      >
        {percentage}%
      </button>
    </>
  );
}
