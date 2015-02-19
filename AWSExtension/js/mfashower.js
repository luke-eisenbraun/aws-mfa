document.getElementById('mfacode').setAttribute('placeholder', 'Optional');
document.getElementById('input_mfacode').setAttribute('style', 'display: blocked');
var checkboxEl = document.getElementById('input_mfa_checkbox');
checkboxEl.parentNode.removeChild(checkboxEl);