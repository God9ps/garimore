<?php
namespace Admin;

require_once 'config.inc.php';
include_once 'BdMySQL.class.php';
use BDMySQL;

class Admin extends BDMySQL
{
    public $bd;
    private $name;
    private $email;
    private $phone;
    private $level;
    private $password;
    private $photo;
    private $active;

    function __construct()
    {
        global $NOME_BD, $USER_BD, $PASS_BD, $SERVER_NAME;
        $this->bd = new BDMySQL ();
        $this->bd->ligarBD($NOME_BD, $USER_BD, $PASS_BD, $SERVER_NAME);
    }

    /**
     * @return mixed
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * @param mixed $name
     */
    public function setName($name)
    {
        $this->name = $name;
    }

    /**
     * @return mixed
     */
    public function getEmail()
    {
        return $this->email;
    }

    /**
     * @param mixed $email
     */
    public function setEmail($email)
    {
        $this->email = $email;
    }

    /**
     * @return mixed
     */
    public function getPhone()
    {
        return $this->phone;
    }

    /**
     * @param mixed $phone
     */
    public function setPhone($phone)
    {
        $this->phone = $phone;
    }

    /**
     * @return mixed
     */
    public function getLevel()
    {
        return $this->level;
    }

    /**
     * @param mixed $level
     */
    public function setLevel($level)
    {
        $this->level = $level;
    }

    /**
     * @return mixed
     */
    public function getPassword()
    {
        return $this->password;
    }

    /**
     * @param mixed $password
     */
    public function setPassword($password)
    {
        $this->password = $password;
    }


    /**
     * @return mixed
     */
    public function getPhoto()
    {
        return $this->photo;
    }

    /**
     * @param mixed $photo
     */

    public function setPhoto($photo)
    {
        $this->photo = $photo;
    }

    /**
     * @return mixed
     */
    public function getActive()
    {
        return $this->active;
    }

    /**
     * @param mixed $active
     */
    public function setActive($active)
    {
        $this->active = $active;
    }

    function userLogin($email, $password)
    {
        $email = trim($email);
        /*$password = md5(trim($password));*/
        $password = trim($password);
        $sql = "select * from admin where email = '$email' and password = '$password'";
        $resultado = $this->bd->executarSQL($sql);
        if($result = $resultado->fetch()){
            session_start();
            $_SESSION['user_name'] = $result[1];
            $_SESSION['login'] = 1;
            $response = array('status'=>'success');
        }else{
            $response = array('status'=>'error');
        }
        return json_encode($response);
    }


    function userLogout()
    {
        session_start();
        if (isset($_SESSION['login']) && $_SESSION['login'] == 1){
            session_destroy();
            unset($_SESSION['login']);
            unset($_SESSION['user_name']);
            return 'success';
        }else{
            return 'error';
        }

    }

}
?>