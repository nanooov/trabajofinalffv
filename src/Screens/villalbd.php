<?php

function Conexion ()
{
 $servidor = 'localhost';
 $usuario = 'root';
 $clave = '';
 $bd = 'villalongabd';

 $enlace=mysqli_connect($servidor, $usuario, $clave, $bd);

if ($enlace) {
 echo "Base de datos conectada:D";
}else{
  echo "no se pudo establecer bla bla bla";
}

return $conexion;
}
?>