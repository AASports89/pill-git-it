module.exports = {
  // the helper method 'format_time' will take in a timestamp and return a custom formatted string
  format_time: (date) => {
      //'toLocaleTimeString()' method to format the time with custom parameters
      return date.toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
      });
  },
  //cuts the length of blog content down for front page/index
  format_summary: (photo_Url) => {
      if (photo_Url.length > 300) {
          return photo_Url.substring(0, 300) + "...";
      } else {
          return photo_Url;
      }
  },
  format_summary: (type) => {
    if (type.length > 300) {
        return type.substring(0, 300) + "...";
    } else {
        return type;
    }
},
format_summary: (color) => {
  if (color.length > 300) {
      return color.substring(0, 300) + "...";
  } else {
      return color;
  }
},
format_summary: (imprint) => {
  if (imprint.length > 300) {
      return imprint.substring(0, 300) + "...";
  } else {
      return imprint;
  }
},
format_summary: (description) => {
  if (description.length > 300) {
      return description.substring(0, 300) + "...";
  } else {
      return description;
  }
},
};