<?php
    if(isset($_GET['submit'])) {
        echo "форма отправлена";
    }
?>
<!DOCTYPE html>
<html lang="en">

</html>

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://fonts.googleapis.com/css?family=Work+Sans:400,700" rel="stylesheet">
  <link rel="stylesheet" href="styles/reset.css">
  <link rel="stylesheet" href="styles/style.css">
  <title>Download video from youtube</title>
</head>

<body>
  <div class="header">
    <div class="container">
      <ul class="menu">
        <li><a class="menu_link" href="#">link1</a>
        </li>
        <li><a class="menu_link" href="#">link2</a>
        </li>
        <li><a class="menu_link" href="#">link3</a>
        </li>
      </ul>
    </div>
  </div>
  <div class="container">
    <div class="content_wrapper">
      <div class="main">
        <div class="converter">
          <h1 class="converter_title">Convert Youtube video to MP3</h1>
          <div class="converter_form">
            <form action="index.php" method="get">
              <label for="link">Put here URL from youtube</label>
              <input type="url" name="link" placeholder="https://www.youtube.com/watch?v=OI1_T3R9ZRk">
              <button type="submit" name="submit">Convert</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>