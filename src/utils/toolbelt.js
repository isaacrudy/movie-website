function formatMovieDate(inputDate) {
  const date = new Date(inputDate);
  const day = date.getDate();
  const month = date.toLocaleString("en-us", { month: "long" });
  const year = date.getFullYear();

  const getOrdinal = (n) => {
    if (n >= 11 && n <= 13) {
      return `${n}th`;
    }
    switch (n % 10) {
      case 1:
        return `${n}st`;
      case 2:
        return `${n}nd`;
      case 3:
        return `${n}rd`;
      default:
        return `${n}th`;
    }
  };

  return `${month} ${getOrdinal(day)}, ${year}`;
}

export { formatMovieDate };
