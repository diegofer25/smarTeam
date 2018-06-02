import methods from './methods/'

export default {
  pushMember: (member) => {
    return methods.verifyMember(member)
  }
}
