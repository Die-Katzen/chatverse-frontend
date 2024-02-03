const formatData = (dateString: string) => {
  // Convert the date to UTC-5
  const inputDate = new Date(dateString);
  inputDate.setUTCHours(inputDate.getUTCHours() - 5);

  const today = new Date();
  today.setUTCHours(today.getUTCHours() - 5);

  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);

  // Function to compare if two dates are on the same day
  function isSameDay(date1: Date, date2: Date): boolean {
    return (
      date1.getUTCFullYear() === date2.getUTCFullYear() &&
      date1.getUTCMonth() === date2.getUTCMonth() &&
      date1.getUTCDate() === date2.getUTCDate()
    );
  }

  if (isSameDay(inputDate, today)) {
    // If it's today, return the time in HH:mm format
    return (
      inputDate.getUTCHours().toString().padStart(2, "0") +
      ":" +
      inputDate.getUTCMinutes().toString().padStart(2, "0")
    );
  } else if (isSameDay(inputDate, yesterday)) {
    // If it's yesterday, return "yesterday" followed by the time in HH:mm format
    return (
      "yesterday " +
      inputDate.getUTCHours().toString().padStart(2, "0") +
      ":" +
      inputDate.getUTCMinutes().toString().padStart(2, "0")
    );
  } else {
    // If it's an older date, return in dd/mm/yyyy format
    return (
      inputDate.getUTCDate().toString().padStart(2, "0") +
      "/" +
      (inputDate.getUTCMonth() + 1).toString().padStart(2, "0") +
      "/" +
      inputDate.getUTCFullYear()
    );
  }
};

export default formatData;
