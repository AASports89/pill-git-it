module.exports = {
  format_date: (date) => {
    
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
format_summary: (shape) => {
  if (shape.length > 300) {
      return shape.substring(0, 300) + "...";
  } else {
      return shape;
  }
},
};