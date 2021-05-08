$(document).ready(function () {
    $("#Teste").click(async function (e) {
        e.preventDefault()

        var files = $('#file')[0].files;
        if (files.length > 0) {
            for (let i = 0; i < files.length; i++) {
                let path = files[i].webkitRelativePath.replaceAll('/', '&&')
                request(files[i], path, 'http://localhost:3000/file')
            }
        } else {
            alert("Please select a file.");
        }
    });

    async function request(data, filename,url) {
        const fd = new FormData();
        fd.append('file', data, filename);
        return await $.ajax({
            url,
            type: 'post',
            data: fd,
            contentType: false,
            processData: false,
            success: function (response) {
                if (response != 0) {
                    return true
                } else {
                    return false
                }
            },
        });
    }
});