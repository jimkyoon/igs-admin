// check to see if cookie exists, returns true or false
export const CheckForCookie = () => {
  console.log("cookie", document.cookie);
  return document.cookie;
};

export const SetCookie = () => {
  // time expiration in seconds (seconds, minutes, hours)
  const timer = `;max-age=${60 * 60 * 24}`;
};
