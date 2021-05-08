$(() => {

    $(document).on('change', 'input[type=file]', async function (e) {
        var files = e.target.files[0];
        $('#cropped-image').attr('src', URL.createObjectURL(files))
        $('.box-cropped-image').css('visibility', 'visible')
        $('.overlay').css('visibility', 'visible')
        cropper()
    })


    function cropper() {
        const image = $('.cropped-image')[0]
        const cropper = new Cropper(image, {
            aspectRatio: 16 / 9,
            crop(event) {
                var dataPreview = cropper.getCroppedCanvas({
                    maxWidth: 108,
                }).toDataURL('image/jpg');
                detais = event.detail
                $('.preview').attr('src', dataPreview).show();
            }
        })

    }


    $(document).on('submit', 'form', function (e) {
        e.preventDefault()
        var dataUpload = teste.getCroppedCanvas({
            maxWidth: 2160

        }).toDataURL('image/png')

        $('.preview').attr('src', dataUpload)
    })





})