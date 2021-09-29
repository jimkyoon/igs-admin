export const formState = {
  articles: {
    body: "",
    color: "",
    duration: "",
    image: "",
    subtitle: "",
    title: "",
  },
  greetings: {
    greeting: "",
    title: "",
  },
  sounds: {
    audio: "",
    background: "",
    duration: "",
    title: "",
  },
  stories: {
    background: "",
    duration: "",
    images: "",
    title: "",
  },
};

export const formFields = {
  articles: [
    { title: "text" },
    { subtitle: "text" },
    { body: "textarea" },
    { image: "file" },
    { color: "text" },
    { duration: "text" },
  ],
  greetings: [
    { title: "text" },
    { greeting: "text" },
  ],
  sounds: [
    { title: "text" },
    { audio: "file" },
    { duration: "text" },
    { background: "text" },
  ],
  stories: [
    { title: "text" },
    { images: "file" },
    { duration: "text" },
    { background: "text" },
  ],
};
