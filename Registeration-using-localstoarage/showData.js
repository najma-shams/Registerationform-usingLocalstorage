function showData(data)
{
  document.getElementById("showUsers").innerHTML="";
  for(let i=0; i<data.length; i++)
  {
    let addDiv=document.createElement('div');
    addDiv.className="row data";
    addDiv.innerHTML='  <div class="col-sm-4" style="padding: 10px;">'+data[i].name+'</div><div class="col-sm-4" style="padding: 10px;">'+data[i].email+'</div><div class="col-sm-4" style="padding: 10px;">'+data[i].psw+'</div>';
    document.getElementById("showUsers").appendChild(addDiv);
  }
  

}