import methods from './methods/'

export default {
  pushMember: (member) => {
    return methods.pushMember(member)
  },

  getMembers: () => {
    return methods.getMembers()
  },

  getTasks: (email) => {
    return methods.getTasks(email)
  },

  addTask: (email, task, status) => {
    return methods.addTask(email, task, status)
  },

  deleteTask: (email, taskStatus, taskIndex) => {
    return methods.deleteTask(email, taskStatus, taskIndex)
  }
}
