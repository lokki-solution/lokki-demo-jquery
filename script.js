var qrToken = "";
var apiUrl = "http://107.161.26.3/"
var apiLocalUrl = "http://localhost:3000/"
$('.btn-login').click(() => {
    $.ajax({
        type: 'POST',
        url: apiUrl + 'qr/generate',
        contentType: "application/json",
        data: JSON.stringify({
            userId: "111"
        })
    }).done((result) => {
        console.log(result);
        $('.img-qrcode').attr("src", result.dataImage);
        qrToken = result.encryptedData;
    });
});

$('.btn-scan-qrcode').click(() => {
    $.ajax({
        type: 'POST',
        url: apiUrl + 'qr/scan',
        contentType: "application/json",
        data: JSON.stringify({
            token: qrToken
        })
    }).done((result) => {
        console.log(result);
    });
});