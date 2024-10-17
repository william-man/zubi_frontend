import { Calendar, dateFnsLocalizer, Views } from "react-big-calendar";
import { format } from "date-fns/format";
import { parse } from "date-fns/parse";
import { startOfWeek } from "date-fns/startOfWeek";
import { getDay } from "date-fns/getDay";
import { enUS } from "date-fns/locale/en-US";
import convertAvailability from "../utils/convertAvailability";

interface Availability {
  [day: string]: string[]; // Maps days of the week to an array of time slots
}

const Scheduler = ({ availability }: Availability) => {
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

  console.log(availability);

  const myEvents = convertAvailability(availability);
  console.log(myEvents[0]);

  return (
    <div className="flex items-center justify-center font-sans h-[600px]">
      <Calendar
        localizer={localizer}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, width: "70%" }}
        view={Views.WEEK} // Hardcoded view
        onView={() => console.log("View changed to:")}
        events={myEvents} // Use transformed events
        views={{
          week: true,
        }}
        step={30}
      />
    </div>
  );
};

export default Scheduler;
