import mongoose from "mongoose";

const conntectToDB = async () => {
  try {
    mongoose.connect(
      "mongodb+srv://user:user@cluster0.6orlj.mongodb.net/steady-control",
      { useUnifiedTopology: true, useNewUrlParser: true }
    );
    mongoose.set("useFindAndModify", false);

    process.on("SIGINT", function () {
      mongoose.connection.close(function () {
        console.log("Mongoose disconnected on app termination");
        process.exit(0);
      });
    });
  } catch (e) {
    console.error(e);
  }
};

export default conntectToDB;
