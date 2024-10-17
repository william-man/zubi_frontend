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

const now = new Date();

const myEvents = [
  {
    id: 28, // New unique ID for the event
    title: "B",
    start: now, // Starts now
    end: new Date(now.getTime() + 2 * 60 * 60 * 1000), // Ends 2 hours later
  },
  {
    id: 29, // New unique ID for the event
    title: "B",
    start: new Date(now.getTime() + 3 * 60 * 60 * 1000), // Starts 1 minute later
    end: new Date(now.getTime() + 1 * 60 * 60 * 1000), // Ends 2 hours later
  },
];

const Scheduler = () => (
  <div className="flex items-center justify-center font-sans h-[600px]">
    <Calendar
      localizer={localizer}
      //   events={myEventsList}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500, width: "70%" }}
      view={Views.WEEK} // Hardcoded view
      onView={() => console.log("View changed to:")}
      events={myEvents} // Pass myEvent as an array
      views={{
        week: true,
      }}
      step={30}
    />
  </div>
);

export default Scheduler;
