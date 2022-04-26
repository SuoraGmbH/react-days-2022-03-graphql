class ProjectApi {
  constructor(store) {
    this.store = store;
  }

  async getProject(projectId) {
    return await this.store.projects.findByPk(projectId);
  }

  async getAllProjects() {
    return await this.store.projects.findAll();
  }

  async searchProjects({ name }) {
    let where = {};
    if (name) {
      where.name = name;
    }

    return await this.store.projects.findAll({
      where,
    });
  }
}

module.exports = ProjectApi;
