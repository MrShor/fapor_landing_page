import Glide from '@glidejs/glide'

new Glide('.glide').mount()

const headMenuSwitcher = function() {
  document.getElementById('logo-menu').addEventListener('click', function() {
    if (window.innerWidth < 800) {
      document.getElementById('header-nav').classList.toggle('open');
    }
  })
}
headMenuSwitcher()

const setEmailValidation = function() {
  document.getElementById('submit-button').addEventListener('click', function(e) {
    e.preventDefault();
    changeMsgError(document.getElementById('email-input').value);
  })

  document.getElementById('email-input').addEventListener('input', function() {
    changeMsgError(document.getElementById('email-input').value);
  })

  function changeMsgError(email) {
    let errorMsg = document.getElementById('email-err');
    if (checkValidEmail(email)) {
      errorMsg.style.display = 'none';
      errorMsg.textContent = '';
    } else if (email === '') {
      errorMsg.textContent = 'Enter your email address';
      errorMsg.style.display = 'block';
    } else {
      errorMsg.textContent = 'Enter a valid email address';
      document.getElementById('email-err').style.display = 'block';
    }
  }

  function checkValidEmail(email) {
    var reg = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return reg.test(String(email).toLowerCase());
  }
}
setEmailValidation()
