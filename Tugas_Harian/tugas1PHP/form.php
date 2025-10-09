<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tugas Peremuan 1 PHP </title>
    <style>
          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #EAF8F2;
            color: #333;
            margin: 0;
            padding: 0;
        }

        h2 {
            text-align: center;
            color: #007F5F;
            margin-top: 30px;
        }

        form {
            background-color: #ffffff;
            width: 350px;
            margin: 30px auto;
            padding: 25px;
            border-radius: 12px;
            box-shadow: 0 4px 10px rgba(0,0,0,0.1);
            border-top: 5px solid #00A86B;
        }

        label {
            font-weight: bold;
            color: #006C4E;
        }

        input[type="text"],
        input[type="email"],
        input[type="number"] {
            width: 100%;
            padding: 10px;
            margin-top: 5px;
            margin-bottom: 15px;
            border: 1px solid #B7E4C7;
            border-radius: 6px;
            font-size: 14px;
        }

        input[type="submit"] {
            width: 100%;
            background-color: #00A86B;
            color: white;
            padding: 10px;
            border: none;
            border-radius: 6px;
            font-size: 15px;
            font-weight: bold;
            cursor: pointer;
            transition: 0.3s;
        }

        input[type="submit"]:hover {
            background-color: #00925E;
        }

        .hasil {
            background-color: #ffffff;
            width: 350px;
            margin: 20px auto;
            padding: 20px;
            border-left: 5px solid #00A86B;
            border-radius: 10px;
            box-shadow: 0 4px 10px rgba(0,0,0,0.1);
            line-height: 1.6;
        }

        .lulus {
            color: #007F5F;
            font-weight: bold;
        }

        .gagal {
            color: #D62828;
            font-weight: bold;
        }

        .tidak-valid {
            color: #FFB703;
            font-weight: bold;
        }
    </style>
</head>

<body>
    <form method="POST">
        <label >Nama</label><br>
        <input type="text" name="uname"><br>

        <label>Email</label><br>
        <input type="email" name="email"><br>

        <label>Nilai Ujian</label><br>
        <input type="text" name="nilai"><br>
        <br>
        <input type="submit" value="Tambah"name="proses">
    </form>
    <?php 
    //Supaya ketika submit tidak error
      if (isset($_POST['proses'])){
        $username = $_POST['uname'];
        $email =$_POST['email'];
        $nilai =$_POST['nilai'];
        $login =$_POST['proses'];

         if ($nilai >=70 && $nilai <= 100){
         $keterangan = "LULUS";
         } else if($nilai < 70 ){
         $keterangan = "TIDAK LULUS";
         } else{
         $keterangan = "Tidak Valid";
         }
      }
      
        echo "Nama: $username <br>";
        echo "Email: $email <br>";
        echo "Nilai: $nilai <br>";
        echo "Keterangan: $keterangan <br>";
    ?>
    
</body>
</html>