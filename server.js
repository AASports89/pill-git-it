//DEPENDENCIES//
  var express = require("express");
  var exphbs = require("express-handlebars");

  var db = require("./models");

  var app = express();
  var PORT = process.env.PORT || 3001;

//MIDDLEWARE//
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());
  app.use(express.static("public"));

//HANDLEBARS//
  app.engine(
    "handlebars",
    exphbs({
      defaultLayout: "main"
    })
  );
  app.set("view engine", "handlebars");

//ROUTES//
  require("./routes/htmlRoutes")(app);

  var syncOptions = { force: false };

//IF RUNNING A TEST --> SET SYNCOPTIONS.FORCE = TRUE --> CLEARING 'TEST-DB'//
  if (process.env.NODE_ENV === "test") {
	  syncOptions.force = true;
  }

    db.sequelize.sync(syncOptions).then(function() {
      app.listen(PORT, function() {
        console.log("SERVER CONNECTED! 🌎" + PORT);
    });
  });

  module.exports = app;
