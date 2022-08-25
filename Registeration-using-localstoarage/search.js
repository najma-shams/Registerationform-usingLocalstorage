function search(){
    let searchData = document.getElementById('search').value.toLowerCase();
    if(searchData && searchData.length>0){
      return showData(getData().filter(x=> x.name.includes(searchData)|| x.email.includes(searchData)));
    }
    return showData(getData());
    
  }