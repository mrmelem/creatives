<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>

    <link rel="stylesheet" href="./node_modules/cropperjs/dist/cropper.min.css">
</head>

<body>

    <!--
    <div class="container">
        <form>

            <section class="input">
                <input type="file">
            </section>

            <div class="overlay"></div>
            <section class="box-cropped-image" id="modal">


                <div class="image">
                    <div class="image-crop">
                        <h1>Cortar Imagem</h1>
                        <img src="./assets/uploads/213.jpg" alt="" class="cropped-image" id="cropped-image">
                    </div>

                    <div class="preview">
                        <p>Pré-visualização</p>
                        <img src="./assets/uploads/213.jpg" alt="" class="preview" id="cropped-preview">
                    </div>

                </div>

                <div class="cropper-btn">
                    <button type="submit">Enviar</button>

                </div>
            </section>

            <section>
                <img src="" alt="" class="preview-upload" style="display: none;">
            </section>
        </form>
    </div>
    -->

    <!--Modal-->
    <!-- Button trigger modal -->
    <input type="file" name="image" accept="image/*">

    <!-- Modal -->
    <div class="modal fade" id="modal" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="modalLabel">Crop image</h5>
                    <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="img-container">
                        <div class="row">
                            <div class="col-md-8">
                                <img id="image">
                            </div>
                            <div class="col-md-4">
                                <div class="preview"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-primary" id="crop">Crop</button>
                </div>
            </div>
        </div>
    </div>

    <!--/-->

    <script src="./js/jquery.js"></script>
    <script src="./node_modules/cropperjs/dist/cropper.min.js"></script>
    <script src="./node_modules/jquery-cropper/dist/jquery-cropper.min.js"></script>
    <script src="./js/script.js"></script>

</body>

</html>