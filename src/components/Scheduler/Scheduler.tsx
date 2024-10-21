import { Calendar, dateFnsLocalizer, Views } from "react-big-calendar";
import { format } from "date-fns/format";
import { parse } from "date-fns/parse";
import { startOfWeek } from "date-fns/startOfWeek";
import { getDay } from "date-fns/getDay";
import { enUS } from "date-fns/locale/en-US";
import convertAvailability from "../../utils/convertAvailability";

interface Availability {
  [day: string]: string[];
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
    <div className="flex items-center justify-center font-sans w-full mb-10">
      <Calendar
        localizer={localizer}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, width: "100%" }}
        view={Views.WEEK}
        onView={() => console.log("View changed to:")}
        events={myEvents}
        views={{
          week: true,
        }}
        step={30}
      />
    </div>
  );
};

export default Scheduler;
