import { Calendar, dateFnsLocalizer, Views } from "react-big-calendar";
import { format } from "date-fns/format";
import { parse } from "date-fns/parse";
import { startOfWeek } from "date-fns/startOfWeek";
import { getDay } from "date-fns/getDay";
import { enUS } from "date-fns/locale/en-US";
import { useEffect, useState } from "react";

interface SchedulerProps {
  id: string;
}
const Scheduler = ({ id }: SchedulerProps) => {
  const [tutorSlots, setTutorSlots] = useState();

  const locales = {
    "en-US": enUS,
  };

  const getTutorSlots = async () => {
    const slotsJson = await fetch(`api/booking/tutorslots?id=${id}`);
    const slots = await slotsJson.json();

    const slotsArrays = slots.map((slot) => {
      return {
        start: new Date(slot.start.replace(" ", "T")),
        end: new Date(slot.end.replace(" ", "T")),
      };
    });

    setTutorSlots(slotsArrays);
  };

  useEffect(() => {
    getTutorSlots();
  });

  const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
  });

  return (
    <div className="flex items-center justify-center font-sans w-full mb-10">
      <Calendar
        localizer={localizer}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, width: "100%" }}
        view={Views.WEEK}
        onView={() => console.log("View changed to:")}
        events={tutorSlots}
        views={{
          week: true,
        }}
        step={30}
      />
    </div>
  );
};

export default Scheduler;
