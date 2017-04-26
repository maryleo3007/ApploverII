window.addEventListener('load',function(){
  var contentImages = document.getElementById('contentImages');
  var addModal = document.getElementById('works');
  createImagesHtml(contentImages);
  createModalHtml(addModal);
});
/*******funcion para crear dinamicamente las imagenes*********/
function createImagesHtml(parent){
  var df = document.createDocumentFragment();
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

    df.appendChild(div);
  }
  parent.appendChild(df);
}
/******Funcion para crear dinamicamente el modal******/
function createModalHtml(parent){
  var df = document.createDocumentFragment();
  for (var i = 1; i < 13; i++) {
    var div = document.createElement("div");
    div.setAttribute("class","modal");
    div.setAttribute("id","img"+i);

    var div2 = document.createElement("div");
    div2.setAttribute("class","imagen");

    var a4 = document.createElement("a");
    a4.setAttribute("class","cerrar");
    a4.setAttribute("href","#contentImages");
    a4.appendChild(document.createTextNode("X"));
    

    var a = document.createElement("a");
    if(i==1){
      a.setAttribute("href","#img"+(i*12));
    }else{
      a.setAttribute("href","#img"+(i-1));
    }

    a.appendChild(document.createTextNode("<"));
    var a2 = document.createElement("a");
    a2.setAttribute("href","#img"+(i+1));

    var img = document.createElement("img");
    img.setAttribute("src","assets/img/img-"+i+".jpg");
    img.setAttribute("with",400);

    var a3 = document.createElement("a");
    a3.setAttribute("href","#img"+(i+1));
    a3.appendChild(document.createTextNode(">"));

    div.appendChild(div2);

    div2.appendChild(a);
    div2.appendChild(a2);
    a2.appendChild(img);
    div2.appendChild(a3);
    div.appendChild(a4);

    df.appendChild(div);
  }
  parent.appendChild(df);
}
