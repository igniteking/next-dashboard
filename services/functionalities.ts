export default function dateTime() {
  const timestamp = Date.now(); // Get the current timestamp in milliseconds

  const date = new Date(timestamp); // Create a new Date object using the timestamp

  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZoneName: "short",
  }; // Options for formatting the date

  const formattedDate = date.toLocaleDateString(undefined, options); // Format the date using the provided options

  return formattedDate;
}
