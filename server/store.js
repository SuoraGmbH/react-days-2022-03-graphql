const { Sequelize, DataTypes } = require("sequelize");

const createStore = async () => {
  const db = new Sequelize({
    dialect: "sqlite",
    storage: "./store.sqlite",
  });

  const timeEntries = db.define("time_entry", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
    },
    projectId: DataTypes.STRING,
    comment: DataTypes.TEXT,
    start: DataTypes.DATE,
    end: DataTypes.DATE,
  });

  const projects = db.define("project", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
    },
    name: DataTypes.TEXT,
  });

  await db.sync({ force: true });

  const workshop = await projects.create({
    id: "workshop",
    name: "Workshop",
  });

  await timeEntries.create({
    projectId: workshop.id,
    start: "2022-01-10T10:00:00.000Z",
    end: "2022-01-10T12:00:00.000Z",
    comment: "Learn React",
  });

  await timeEntries.create({
    projectId: workshop.id,
    start: "2022-01-11T16:00:00.000Z",
    end: "2022-01-11T18:00:00.000Z",
    comment: "Learn Redux",
  });

  return { db, timeEntries, projects };
};

module.exports = createStore;
