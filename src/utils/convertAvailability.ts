interface AvailabilitySlot {
  title: string;
  start: Date;
  end: Date;
}

function convertAvailability(availabilityJson: string[]): AvailabilitySlot[] {
  const availability =
    typeof availabilityJson === "string"
      ? JSON.parse(availabilityJson)
      : availabilityJson;

  const availabilityArray: AvailabilitySlot[] = [];

  const daysOfWeek: Record<string, number> = {
    Monday: 1,
    Tuesday: 2,
    Wednesday: 3,
    Thursday: 4,
    Friday: 5,
    Saturday: 6,
    Sunday: 0,
  };

  const today = new Date();

  for (const day in availability) {
    if (Object.prototype.hasOwnProperty.call(availability, day)) {
      const slots = availability[day];

      slots.forEach((slot: string) => {
        const [startTime, endTime] = slot.split("-");
        const start = new Date(today);
        const end = new Date(today);

        start.setDate(
          today.getDate() + ((daysOfWeek[day] - today.getDay() + 7) % 7)
        );
        end.setDate(start.getDate());

        const [startHour, startMinute] = startTime.split(":").map(Number);
        const [endHour, endMinute] = endTime.split(":").map(Number);
        start.setHours(startHour, startMinute);
        end.setHours(endHour, endMinute);

        availabilityArray.push({
          title: `Available on ${day}`,
          start: start,
          end: end,
        });
      });
    }
  }

  return availabilityArray;
}

export default convertAvailability;
