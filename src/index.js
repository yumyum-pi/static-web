const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();

fs.readFile(path.join(__dirname, "info.json"), "utf8", (err, data) => {
  if (err) {
    console.error(`\x1b[31mError reading file from disk: ${err}`);
    process.exit();
  } else {
    const info = JSON.parse(data);

    const index = {
      navmenu: info.navmenu,
      head: info.index,
    };

    // environment variables
    let env = process.env.NODE_ENV;
    if (env == "production") {
      console.log("do something differently in production");
    }

    // set template engine
    app.set("views", path.join(__dirname, "views"));
    app.set("view engine", "ejs");

    // serve static file
    app.use(express.static("public"));

    // routes
    app.get("/", function (_, res) {
      res.render("pages/index", { index });
    });

    // serve the application
    app.listen(3000);
    console.log("--> starting server at localhost:3000");
  }
});
