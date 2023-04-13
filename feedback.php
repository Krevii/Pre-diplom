<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Feedback</title>
    <link href="./Assets/styles/style.css" rel="stylesheet" />
    <link href="./Assets/image/favicon.png" rel="icon" />
</head>

<body>
    <?php
        include("header.php");
    ?>
    <main>
        <section class="login">
            <div class="form">

                <!-- <div class="text-contain">
                    <h2 class="intro-header">JOIN THE ENERGY REVOLUTION</h2>
                </div> -->
                <div class="text-contain-active">
                    <div class="left-line">
                        <div class="intro-header">let's do</div>
                        <div class="intro-header">game</div>
                        <div class="intro-header">better</div>

                    </div>
                </div>
                <form method="post" autocomplete="off" action="./laba.js">
                    <label>TELL US ABOUT YOUR SUGGESTION OR IDEA TO MAKE THE GAME BETTER</label>
                    <input type="text" name="header-text" autofocus required placeholder="Header text">
                    <input type="text" name="offer" required placeholder="Offer">
                    <input type="hidden" name="like" value="0">
                    <input type="hidden" name="view" value="0">
                    <input type="submit" value="Send">
                </form>

            </div>
        </section>
    </main>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
    <script src="./Assets/scripts/scripts.js"></script>
</body>

</html>