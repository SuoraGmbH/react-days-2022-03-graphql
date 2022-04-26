class TimeEntryApi {
  constructor(store) {
    this.store = store;
  }

  async getAllTimeEntries() {
    return await this.store.timeEntries.findAll();
  }

  async getTimeEntry(timeEntryId) {
    return await this.store.timeEntries.findByPk(timeEntryId);
  }

  async getAllByProjectId(projectId) {
    return await this.store.timeEntries.findAll({
      where: {
        projectId: projectId,
      },
    });
  }

  async addTimeEntry({ comment, projectId, start, end }) {
    return await this.store.timeEntries.create({
      comment,
      projectId,
      start,
      end,
    });
  }
}

module.exports = TimeEntryApi;
