export const getUserName = (userId, users) => {
  const user = users.find((usr) => usr.id === userId);
  const name = user.name.split(" ");
  if (name.length === 1) {
    return name[0][0].toUpperCase() + name[0][1].toLowerCase();
  } else if (name.length === 2) {
    return name[0][0].toUpperCase() + name[1][0].toUpperCase();
  }
};
