<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>blog</title>
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
                        <div class="intro-header">JOIN THE</div>
                        <div class="intro-header">game</div>
                        <div class="intro-header">REVOLUTION</div>

                    </div>
                </div>
                <form method="post" action="./laba.js">
                    <label>STAY UP TO DATE WITH OUR PROGRESS AND HOW YOU CAN SUPPORT US</label>
                    <input name="first-name" autocomplete="on" autofocus required placeholder="First name">
                    <input name="last-name" autocomplete="on" autofocus required placeholder="Last name">
                    <input id="text-input" name="login" autocomplete="on" autofocus required placeholder="E-mail">
                    <input type="password" autocomplete="on" name="password" required placeholder="password">
                    <input type="submit" value="Sing Up">
                </form>

            </div>
        </section>
    </main>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
    <!-- <script src="./Assets/scripts/validation.js"></script> -->
    <script src="./Assets/scripts/scripts.js"></script>
</body>

</html>