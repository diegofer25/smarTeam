import methods from './methods/'
import { db } from './database'

export default {
  pushMember: (request) => {
    return methods.pushMember(db, request)
  },

  getMembers: (userId) => {
    return methods.getMembers(db, userId)
  },

  getTasks: (request) => {
    return methods.getTasks(db, request)
  },

  addTask: (email, task, status) => {
    return methods.addTask(db, email, task, status)
  },

  deleteTask: (email, taskStatus, taskIndex) => {
    return methods.deleteTask(db, email, taskStatus, taskIndex)
  }
}
