import { Notify } from 'quasar'

export default (message, type, timeout, position) => {
  Notify.create({
    message: message,
    type: type,
    timeout: !timeout ? 3000 : timeout,
    position: !position ? 'top-right' : position
  })
}
