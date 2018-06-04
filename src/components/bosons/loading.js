import { Loading } from 'quasar'

export default {
  show: showLoading,
  hide: hideLoading
}

function showLoading (message, color, size) {
  Loading.show({
    message: !message ? '' : message,
    messageColor: 'white',
    spinnerSize: !size ? 100 : size,
    spinnerColor: !color ? 'white' : color
  })
}

function hideLoading () {
  Loading.hide()
}
