window.addEventListener('load',function(){
  var contentImages = document.getElementById('contentImages');
  showImage(contentImages);
});

function showImage(parent){
  for(var i = 1; i<13; i++){
    var div = document.createElement("div");
    div.setAttribute("class","box-img");
    var a = document.createElement("a");
    a.setAttribute("href","#img"+i);
    var img = document.createElement("img");
    img.setAttribute("src","assets/img/img-"+i+".jpg");
    img.setAttribute("class","img-work");
    var p = document.createElement("p");
    var texto = document.createTextNode("Nombre de Proyecto");
    p.appendChild(texto);

    div.appendChild(a);
    a.appendChild(img);
    a.appendChild(p);

    parent.appendChild(div);
  }

}
