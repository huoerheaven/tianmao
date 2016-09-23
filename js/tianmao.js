/*1、顶部  滚动条  楼层跳转*/
var box11=$(".box11")[0];
    //alert(box11);
var floor=$(".floor");
var btn111=$(".btn11")[0];
var btnli=$("li",btn111);
var btnarr=["yellow","#F7A945","#19C8A9","#F15453","#64C333","#0AA6E8","#EA5F8D","#000","#111"];
var now;
var flag=1;
window.onscroll=function(){
    if(obj.scrollTop>=700){
        if(flag==1){
            animate(box11,{top:0},200);
            animate(btn111,{width:36},200);
            flag=2;
        }
    }else if(flag==2){
        animate(box11,{top:-50},200);
        animate(btn111,{width:0},200);    
        flag=1;
    }
    
    for(var i=0;i<floor.length;i++){
        if(floor[i].offsetTop<=obj.scrollTop+100){
            for(var j=0;j<btnli.length;j++){
                btnli[j].style.background="#626262";
            }
            btnli[i].style.background=btnarr[i];
            now=i;
        }

    }
}

for(var i=0;i<btnli.length;i++){
    btnli[i].aa=i;
                    
    btnli[i].onclick=function(){ 
        now=this.aa;         
        animate(obj,{scrollTop:floor[this.aa].offsetTop},500)           
    }
    btnli[i].onmouseover=function(){
        for(var j=0;j<btnli.length;j++){
            if(now!=j){
            btnli[j].style.background="#626262";
            }
        }
        this.style.background=btnarr[this.aa];
    }
    btnli[i].onmouseout=function(){
        for (var k =0; k <= btnli.length; k++) {
            if(now!=k){
                btnli[k].style.background="#626262";
            }
        };
    }
}

/*2.图片精灵移入效果*/

var tpw=$(".tpw");
var tupianjingling=$(".tupianjingling")[0];
var boo=$(".boo")


for (var i = 0; i < boo.length; i++) {

    boo[i].index=i;
    boo[i].onmouseover=function()
    {
        boo[this.index].style.background="#C40000"
        tpw[this.index].style.display="block"


    }
    boo[i].onmouseout=function()
    {
        boo[this.index].style.background="black";
        tpw[this.index].style.display="none";

    }

};

/*3.闪现轮播*/
var bigbanner=getClass("bigbanner")[0];
var banner=getClass("banner")[0];
var bannerbox=getClass("bannerbox")[0];
var img=bannerbox.getElementsByTagName("a");
var btn=getClass("btn")[0];
var btn_li=btn.getElementsByTagName("li");
var num=0;
var newarr11=["#E9E7EA","#246B4D","#FFEF38","#E8E8E8","#EA1A34","#FC4FA8"];
function change(){
    num++;
    if(num>=img.length){
    	num=0;
    }
    for(var i=0;i<img.length;i++){
    	img[i].style.opacity=0;
    	btn_li[i].id="";
    }
    animate(img[num],{opacity:1});
    //animate(bigbanner[0],{background:newarr11[0]},10);
    animate(bigbanner,{background:newarr11[num]},10);
    btn_li[num].id="btn_li";
}
var t=setInterval(change,2000);
var banner=getClass("banner")[0];
banner.onmouseover=function(){
	clearInterval(t);
}
banner.onmouseout=function(){
	t=setInterval(change,2000);
}
for(var i=0;i<btn_li.length;i++){
    btn_li[i].bb=i;
    btn_li[i].onclick=function(){
    	for(var j=0;j<img.length;j++){
    		img[j].style.opacity=0;
    		btn_li[j].id="";
    	}
    	animate(img[this.bb],{opacity:1});
        animate(bigbanner,{background:newarr11[this.bb]},10)

    	this.id="btn_li";
    	num=this.bb;
    }
}

/*4、搜索*/
var sousuo1=$(".sousuo1")[0];
sousuo1.onfocus=function(){
    if(sousuo1.value=="原装进口全世界"){
        sousuo1.value=""
    }
}
sousuo1.onblur=function(){
    if(sousuo1.value==""){
        sousuo1.value="原装进口全世界"
    }
}
var sousuo11=$(".sousuo11")[0];
sousuo11.onfocus=function(){
    if(sousuo11.value=="CPB肌肤之钥光耀入驻"){
        sousuo11.value=""
    }
}
sousuo11.onblur=function(){
    if(sousuo11.value==""){
        sousuo11.value="CPB肌肤之钥光耀入驻"
    }
}

/*猫头点击效果*/
// var end_nav1=$(".end-nav1")[0];
var ul=$(".hahaha")[0];
var lis=$("li",ul);
// var ll=$(".tuzuo")[0];
// var tou=$(".maotou1")[0];
var maotou=$(".maotou");


for(var i=0;i<lis.length;i++){
    lis[i].dd=i;
    lis[i].onmouseover=function(){
        // maotou[this.dd].style.display="block";
        animate(maotou[this.dd],{top:-9},500)
    }
    lis[i].onmouseout=function(){
        // maotou[this.dd].style.display="none";
        animate(maotou[this.dd],{top:1},500)
    }
}
