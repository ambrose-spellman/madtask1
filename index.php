<!DOCTYPE html>
<html lang="en">

<head>
    <title>Youtube-dl php</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://fonts.googleapis.com/css?family=Work+Sans:400,700" rel="stylesheet">
    <link rel="stylesheet" href="styles/reset.css">
    <link rel="stylesheet" href="styles/style.css">
</head>

<body>
    <div class="container">
        <div class="converter">
            <div class="converter_title">
                <h1>Youtube DL PHP</h1>
            </div>
            <div class="converter_body">
                <form class="converter_form" action="results.php">
                    <div class="converter_form-group">
                        <p>Enter video URL</p>
                    </div>
                    <div class="converter_form-group">
                        <input title="Video ID" name="id" type="text" class="converter_form" placeholder="youtube link here" required>
                    </div>
                    <div class="converter_form-group">
                        <!-- <input name="id" type="email" class="converter_form" placeholder="example@gmail.com"> -->
                        <button name="submit" type="submit" class="converter_form"> Get download link
                    </div>
                </form>
            </div>
        </div>
    </div>
    <script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
</body>

</html>