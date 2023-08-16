export const hideText = (title) => {
  const words = title.split(" ");
  if (words.length > 7) {
    console.log(words.slice(0, 7));
    return `${words.slice(0, 7).join(" ")}...`;
  } else return title;
};
