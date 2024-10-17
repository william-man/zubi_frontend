interface AvailabilitySlot {
  title: string;
  start: Date;
  end: Date;
}

function convertAvailability(availabilityJson: string[]): AvailabilitySlot[] {
  // Parse the JSON string if it's in string format
  const availability =
    typeof availabilityJson === "string"
      ? JSON.parse(availabilityJson)
      : availabilityJson;

  // Initialize an array to hold the processed availability
  const availabilityArray: AvailabilitySlot[] = [];

  // Define types for daysOfWeek
  const daysOfWeek: Record<string, number> = {
    Monday: 1,
    Tuesday: 2,
    Wednesday: 3,
    Thursday: 4,
    Friday: 5,
    Saturday: 6,
    Sunday: 0,
  };

  // Get the current date
  const today = new Date();

  // Iterate through the keys of the availability object
  for (const day in availability) {
    if (Object.prototype.hasOwnProperty.call(availability, day)) {
      // Use hasOwnProperty with Object.prototype
      const slots = availability[day]; // Get the slots for the current day

      // Create an entry for each slot in the availability array
      slots.forEach((slot: string) => {
        const [startTime, endTime] = slot.split("-"); // Split the slot into start and end times
        const start = new Date(today); // Start with today’s date
        const end = new Date(today);

        // Set the day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
        start.setDate(
          today.getDate() + ((daysOfWeek[day] - today.getDay() + 7) % 7)
        ); // Get the next occurrence of the day
        end.setDate(start.getDate()); // Set end date to the same day

        // Set start and end times
        const [startHour, startMinute] = startTime.split(":").map(Number);
        const [endHour, endMinute] = endTime.split(":").map(Number);
        start.setHours(startHour, startMinute);
        end.setHours(endHour, endMinute);

        // Push the event into the availability array
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
