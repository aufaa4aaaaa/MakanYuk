<?php
include 'koneksi.php'; // sambungkan ke database

if (isset($_POST['submit'])) {
    $nama = $_POST['Nama_lengkap'];
    $email = $_POST['Email'];
    $password = $_POST['Password'];

    // Simpan data ke tabel makanyuk
    $sql = "INSERT INTO makanyuk (nama_lengkap, email, password)
            VALUES ('$nama', '$email', '$password')";

    if (mysqli_query($conn, $sql)) {
        echo "<script>alert('Registrasi berhasil! Silakan login.'); window.location='login.php';</script>";
    } else {
        echo "Error: " . mysqli_error($conn);
    }
}
?>
