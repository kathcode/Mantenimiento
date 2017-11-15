function isOn(on) {
  if (on === 'onTrue') {
    $('.onTrue').addClass('d-block');
  } else if (on === 'onFalse') {
    $('.onFalse').addClass('d-block');
  }
}