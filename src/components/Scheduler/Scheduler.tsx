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

interface Slot {
  id: number;
  created_at: string;
  start: string;
  end: string;
  booking_status: string;
  fk_student_id: number;
  fk_tutor_id: number;
}
const Scheduler = ({ id }: SchedulerProps) => {
  const [tutorSlots, setTutorSlots] = useState();

  const locales = {
    "en-US": enUS,
  };

  const getTutorSlots = async () => {
    const slotsJson = await fetch(`api/booking/tutorslots?id=${id}`);
    const slots = await slotsJson.json();

    const slotsArrays = slots.map((slot: Slot) => {
      return {
        start: new Date(slot.start.replace(" ", "T")),
        end: new Date(slot.end.replace(" ", "T")),
        booking_status: slot.booking_status,
      };
    });

    setTutorSlots(slotsArrays);
  };

  const eventPropGetter = (event: Slot) => {
    let opacity = "";
    if (event.booking_status === "booked") {
      opacity = "0.4";
    }

    return {
      style: {
        opacity,
        color: "white",
      },
    };
  };

  const formatDateToLocal = (isoDate: string) => {
    const dateObj = new Date(isoDate);

    const formattedDate = dateObj
      .toLocaleString("sv-SE", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      })
      .replace(" ", "T");

    return formattedDate.replace("T", " ").slice(0, 19);
  };

  const handleBooking = async (event: Slot) => {
    const formattedStart = formatDateToLocal(event.start);
    const formattedEnd = formatDateToLocal(event.end);

    const bookingData = {
      start: formattedStart,
      end: formattedEnd,
      tutorID: id,
    };

    try {
      const response = await fetch(`api/booking/session`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Booking successful:", result);
      } else {
        console.error("Booking failed:", response.statusText);
      }
    } catch (error) {
      console.error("Error during booking:", error);
    }
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
        onSelectEvent={handleBooking}
        eventPropGetter={eventPropGetter}
      />
    </div>
  );
};

export default Scheduler;
