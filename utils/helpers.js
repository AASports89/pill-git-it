module.exports = {
    //FORMAT DATE & TIME STAMP//
      format_time: (date) => {
          return date.toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "numeric",
              minute: "numeric",
          });
      },
    //FORMAT LENGTH OF POSTS//
      format_summary: (content) => {
          if (content.length > 300) {
              return content.substring(0, 300) + "...";
          } else {
              return content;
          }
        },
      };