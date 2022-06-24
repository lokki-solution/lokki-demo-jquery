var qrToken = "";
$('.btn-login').click(() => {
    $.ajax({
        type: 'POST',
        url: 'http://localhost:3000/qr/generate',
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
        url: 'http://localhost:3000/qr/scan',
        contentType: "application/json",
        data: JSON.stringify({
            token: qrToken
        })
    }).done((result) => {
        console.log(result);
    });
});