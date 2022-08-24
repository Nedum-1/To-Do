<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>To-Do Listt</title>
        <link rel="stylesheet" href="style.css">
        <script src="https://kit.fontawesome.com/76acaa6079.js"></script>
    </head>
    <body>
        <div class="container">
            <header> 
                <div class="clr">
                    <i class="fas fa-ellipsis-v" id="opt" onclick="clearr()"></i>
                    <span id="clear" class="fas">clear all tasks</span>   
                </div>
                <h1 style=color:gray;>
                    My To-Do List
                </h1>
                
                <img src="" alt="">
            </header>
            <input type="text" placeholder="Please Enter Task Here" id="inputt">
            <button onclick="addTask()" id="add">
                Add
            </button><hr>
            <h2>Click on task to edit...</h2>
            <div class="tasks">
               
            </div>
        </div>
        <script src="main.js">
            
        </script>
    </body>
    </html>
    
