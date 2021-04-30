$(() => {

    var image = $('.image')[0]

    const cropper = new Cropper(image, {
        aspectRatio: 16 / 9,
        crop(event) {
            var data = cropper.getCroppedCanvas({
                maxWidth: 150,
            }).toDataURL('image/jpg');

            //console.log(data)
            $('.preview').attr('src', data).show();
        }
    })
})