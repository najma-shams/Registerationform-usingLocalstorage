
function getData()
    {
      return JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[];
      }
      showData(getData());
      function saveData(){
        let name,email,psw;
        name=document.getElementById("name").value;
        email=document.getElementById("email").value;
        psw=document.getElementById("psw").value;

        let data=new Array();
        data=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]

        if(data.some((v)=>{return v.email==email}))
        {
          alert("duplicate data");
        }
        else{
          data.push({
          "name":name,
          "email":email,
          "psw":psw
        })
          localStorage.setItem("users",JSON.stringify(data));
        }
        showData(getData());
      }
