import { Calendar, dateFnsLocalizer, Views } from "react-big-calendar";
import { format } from "date-fns/format";
import { parse } from "date-fns/parse";
import { startOfWeek } from "date-fns/startOfWeek";
import { getDay } from "date-fns/getDay";
import { enUS } from "date-fns/locale/en-US";

const locales = {
  "en-US": enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

// what you must have is this
const events = [
  {
    title: "My Event",
    start: new Date("2015-04-12T13:45:00-05:00"),
    end: new Date("2015-04-12T14:00:00-05:00"),
  },
];

const MyCalendar = (props) => (
  <div className="flex items-center justify-center font-sans h-[600px]">
    <Calendar
      localizer={localizer}
      //   events={myEventsList}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500, width: "70%" }}
      view={Views.WEEK} // Hardcoded view
      onView={() => console.log("View changed to:")}
      views={{
        week: true,
      }}
      step={30}
    />
  </div>
);

export default MyCalendar;
