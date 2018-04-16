<?php

if (file_exists('../vendor/autoload.php')) {
    include '../vendor/autoload.php';
} else {
    include 'src/App.php';
    include 'src/Downloader.php';
}

if (!isset($_REQUEST['id']) || $_REQUEST['id'] == '') {
    header('Location: index.php');
}

$video = new pxgamer\YDP\Downloader($_REQUEST['id']);

if (!$video->status['success']) {
    header('Location: index.php');
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Youtube DL PHP</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.10/css/all.css" integrity="sha384-+d0P83n9kaQMCwj8F4RJB66tzIwOKmrdb46+porD/OvrJ+37WqIM7UoBtwHO6Nlg" crossorigin="anonymous">
    <link rel="stylesheet" href="styles/reset.css">
    <link rel="stylesheet" href="styles/style.css">
  
</head>
<body>
    <div class="container">
        <div class="results">
            <div class="page-header">
                <h1><?php echo $video->info['title'] ?></h1>
                <?php if (isset($video->rvs['iurlhq'])) {
            ?>
                <div class="form-group">
                    <img class="image_preview" src="<?php echo $video->rvs['iurlhq'] ?>"/>
                </div>
            <?php
        } ?>
            </div>
            <div class="video_info">
                <table class="video_info-item">
                    <tr>
                        <th>
                            Video ID
                        </th>
                        <td>
                            <a class="video_info-link" target="_blank" href="<?php echo \pxgamer\YDP\App::YOUTUBE_URL ?>/watch/?v=<?php echo $video->info['video_id'] ?>">
                                <span><?php echo $video->info['video_id'] ?></span>
                                <i class="fas fa-link"></i>
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <th>
                            Uploaded By
                        </th>
                        <td>
                            <a class="video_info-link" target="_blank" href="<?php echo \pxgamer\YDP\App::YOUTUBE_URL ?>/channel/<?php echo $video->info['ucid'] ?>">
                                <span><?php echo $video->info['author'] ?></span>
                                <i class="fas  fa-link"></i>
                            </a>
                        </td>
                    </tr>
                </table>
                <div class="video_info-item">
                    <div role="tabpanel" class="tab-pane active" id="main">
                        <table class="table table-hover">
                            <tr>
                                <th>Quality <i class="fas  fa-video"></i></th>
                                <th>Streams <i class="fas  fa-play-circle"></i></th>
                                <th>Downloads <i class="fas fa-download"></i></th>
                            </tr>
                            <?php foreach ($video->formats as $f) {
                    ?>
                                <tr>
                                    <th>
                                        <?php echo $f['quality'] ?>
                                    </th>
                                    <td>
                                        <a class="video_info-link" target="_blank" href="<?php echo $f['url'] ?>">
                                            <?php echo explode('/', $f['type'])[1] ?>
                                        </a>
                                    </td>
                                    <td>
                                        
                                        <a class="video_download-link" download href="<?php echo $f['url'] ?>"><span >download</span>
                                            <?php echo explode('/', $f['type'])[1] ?>  
                                        </a>
                                    </td>
                                </tr>
                            <?php
                } ?>
                        </table>
                    </div>

                    <?php if (isset($_REQUEST['debug'])) {
                    ?>
                        <div role="tabpanel" class="tab-pane" id="debug">
                            <pre><?php var_dump($video) ?></pre>
                        </div>
                    <?php
                } ?>
                </div>
            </div>
        </div>
    </div>
</body>
</html>