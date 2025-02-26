let userId = localStorage.getItem('role_id');
function loadPopup() {
    debugger
    fetch('../assets/ChangePassword/changePassword.html')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(html => {
            document.body.insertAdjacentHTML('beforeend', html);
        })
        .catch(error => {
            console.error('Error loading popup:', error);
        });
}
// $(document).on('click', '.a-Menu-item', function () {
//     if ($(this).is(':last-of-type')) {
//         window.location.href = "../index.html";
//     }
// });

$(document).on('click', '.a-Menu-item', function () {
    if ($(this).is(':last-of-type')) {
        $('#popup-overlay').fadeIn();
        $('.t-Header').css('z-index', '0');
        $('#close-popup, #popup-overlay').click(function () {
            $('#popup-overlay').fadeOut();
            $('.t-Header').css('z-index', '800');
        });
        $('#changePasswordSubmit').on('click', async function () {
            const old_password = $('#Old_password_input').val();
            const new_password = $('#New_password_input').val();
            if (old_password === "" || new_password === "") {
                showErrorToast("Please fill all required fields");
            } else {
                const user_id = userId;
                const formData = new FormData();
                formData.append('employee_id', user_id);
                formData.append('new_password', new_password);
                formData.append('old_password', old_password);
                $.ajax({
                    url: 'https://tngis.tnega.org/lcap_api/pocso/api/v1/changePassword',
                    type: 'POST',
                    headers: {
                        'X-App-Key': 'pocso',
                        'X-App-Name': 'pocso',
                    },
                    processData: false,
                    contentType: false,
                    data: formData,
                    success: function (response) {
                        console.log('Response:', response);
                        showSuccessToast("Password Changed Successfully");
                        setTimeout(function () {
                            $('#popup-overlay').fadeOut();
                            $('.t-Header').css('z-index', '800');
                        }, 1000);
                        $('#Old_password_input, #New_password_input').val('');
                    },
                    error: function (xhr, status, error) {
                        console.error('Error:');
                        showErrorToast('error occured');
                    }
                });
            }
        })
        $('#popup-content').click(function (e) {
            e.stopPropagation();
        });
    }
});

