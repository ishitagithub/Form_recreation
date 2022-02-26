var image
function upload(){
  var file=document.getElementById('inp');
image=new SimpleImage(file);
  var c=document.getElementById('can');
  image.drawTo(c);
}