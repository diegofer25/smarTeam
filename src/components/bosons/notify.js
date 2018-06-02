import { Notify } from 'quasar'

export default (message, type, timeout) => {
  Notify.create({
    message: message,
    type: type,
    timeout: !timeout ? 3000 : timeout,
    position: type === 'warning' ? 'top-right' : 'center'
  })
}
