import { DayPicker, getDefaultClassNames } from "react-day-picker";
import "../styles/calendar.css";

const Calendar = ({ selected, setSelected }) => {
  const defaultClassNames = getDefaultClassNames();
  console.log(defaultClassNames);

  return (
    <div className="font-sans w-96 items-center flex-item grow">
      <DayPicker
        mode="single"
        classNames={{
          root: `m-auto w-3/4`,
          month: `w-full m-auto`,
          nav: `ml-auto`,
          //   months: `w-full m-auto flex flex-col items-center`,
          month_grid: `w-3/4 m-auto`,
          today: `text-zubiLogo`, // Add a border to today's date
          selected: `border border-zubiLogo`, // Highlight the selected day
          chevron: ` fill-zubiLogo`, // Change the color of the chevron
        }}
      />
    </div>
  );
};

export default Calendar;
