import { FaAddressBook as icon } from "react-icons/fa";

export default {
  name: "speakerUrls",
  title: "Speaker Urls",
  type: "document",
  icon,
  fields: [
    {
      name: "year",
      title: "Year",
      type: "number",
    },
    {
      title: "Sessionize URL",
      name: "sessionizeUrl",
      type: "url",
    },
  ],
};
