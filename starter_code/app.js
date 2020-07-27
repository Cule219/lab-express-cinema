const cors = require("cors");

mongoose
.connect("mongodb://localhost:27017/MovieList", { 
  useNewUrlParser: true,
  useNewUrlParser: true,
  useUnifiedTopology: true })
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch((err) => {
    console.error("Error connecting to mongo", err);
  });

  const app_name = require("./package.json").name;
  const debug = require("debug")(
    `${app_name}:${path.basename(__filename).split(".")[0]}`
    );

    const app = express();
    app.use(cors());
    app.use(logger("dev"));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cookieParser());

    const index = require("./routes/index");
    app.use("/", index);

    module.exports = app; 
