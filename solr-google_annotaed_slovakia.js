  google.load('visualization', '1', {'packages':['annotatedtimeline']});
		var arr = new Array();
      google.setOnLoadCallback(drawChart);
      function drawChart() {
        
		/////////// NEWWWWWWWWWWWWWW

//Group Topic1
var query= encodeURI("(EÚ or Európa or EU or Europe or rozšírenie or bővítés) AND country:Slovakia");		
query_solr(query,"GroupT1");

//Group Topic1 R
var query= encodeURI("(EÚ or Európa or rozšírenie or bővítés) AND org_type:R AND country:Slovakia");		
query_solr(query,"GroupT1R");

//Group Topic1 L
var query= encodeURI("(EÚ or Európa or rozšírenie or bővítés) AND org_type:L AND country:Slovakia");		
query_solr(query,"GroupT1L");

//Group Topic2
query = encodeURI("(Kisebbségek or romák or roma or cigány or cigányok or cigán or cigáni or magyar or (cigány probléma) or (kisebbségi jogok) or magyarok or (kettős állampolgárság) or Menšiny or Rómovia or Rómovia or Maďari or (Gypsy problém) or (práva menšín) or (práva Maďarov) or (dvojité občianstvo)) AND country:Slovakia");
query_solr(query,"GroupT2");

//Group Topic2 R
query = encodeURI("(Kisebbségek or romák or roma or cigány or cigányok or cigán or cigáni or magyar or (cigány probléma) or (kisebbségi jogok) or magyarok or (kettős állampolgárság) or Menšiny or Rómovia or Rómovia or Maďari or (Gypsy problém) or (práva menšín) or (práva Maďarov) or (dvojité občianstvo)) AND org_type:R AND country:Slovakia");
query_solr(query,"GroupT2R");

//Group Topic2 L
query = encodeURI("(Kisebbségek or romák or roma or cigány or cigányok or cigán or cigáni or magyar or (cigány probléma) or (kisebbségi jogok) or magyarok or (kettős állampolgárság) or Menšiny or Rómovia or Rómovia or Maďari or (Gypsy problém) or (práva menšín) or (práva Maďarov) or (dvojité občianstvo)) AND org_type:L AND country:Slovakia");
query_solr(query,"GroupT2L");

//Group Topic3 ////////////////////////
query = encodeURI("(ľudia or občania or Slováci or národ or Narod or ludi or ludia or Slovaci or Slovenská or emberek or nép or szlovákok or nemzet or Narod or Ludi or ludia or Slováci or Slovensky) AND country:Slovakia");
query_solr(query,"GroupT3");

//Group Topic3 R ////////////////////////
query = encodeURI("(ľudia or občania or Slováci or národ or Narod or ludi or ludia or Slovaci or Slovenská or emberek or nép or szlovákok or nemzet or Narod or Ludi or ludia or Slováci or Slovensky) AND country:Slovakia AND org_type:R");
query_solr(query,"GroupT3R");

//Group Topic3 L////////////////////////
query = encodeURI("(ľudia or občania or Slováci or národ or Narod or ludi or ludia or Slovaci or Slovenská or emberek or nép or szlovákok or nemzet or Narod or Ludi or ludia or Slováci or Slovensky) AND country:Slovakia AND org_type:L");
query_solr(query,"GroupT3L");

//Group Topic4 ////////////////////////
query = encodeURI("(Jazyk or (jazykový zákon) or právo or vzdelanie or škola or (menšinový jazyk) or menšina or zakon or Školstvo or Školstvo or skoly or jazykové or (škola akt) or (škola) or Language or nyelvtörvény or törvény or (az oktatás) or iskola or (kisebbségi nyelv) or kisebbség or zakon or skolstva or skolstvo or školy or nyelvi or (iskolai törvény) or iskola) AND country:Slovakia");
query_solr(query,"GroupT4");

//Group Topic4 R////////////////////////
query = encodeURI("(Jazyk or (jazykový zákon) or právo or vzdelanie or škola or (menšinový jazyk) or menšina or zakon or Školstvo or Školstvo or skoly or jazykové or (škola akt) or (škola) or Language or nyelvtörvény or törvény or (az oktatás) or iskola or (kisebbségi nyelv) or kisebbség or zakon or skolstva or skolstvo or školy or nyelvi or (iskolai törvény) or iskola) AND country:Slovakia AND org_type:R");
query_solr(query,"GroupT4R");

//Group Topic4 L////////////////////////
query = encodeURI("(Jazyk or (jazykový zákon) or právo or vzdelanie or škola or (menšinový jazyk) or menšina or zakon or Školstvo or Školstvo or skoly or jazykové or (škola akt) or (škola) or Language or nyelvtörvény or törvény or (az oktatás) or iskola or (kisebbségi nyelv) or kisebbség or zakon or skolstva or skolstvo or školy or nyelvi or (iskolai törvény) or iskola) AND country:Slovakia AND org_type:L");
query_solr(query,"GroupT4L");

//Grid Topic1
query = encodeURI("(EÚ or Európa or EU or Europe or rozšírenie or bővítés) AND country:Slovakia");
query_solr(query,"GridT1");

//Grid Topic1 R
query = encodeURI("(EÚ or Európa or EU or Europe or rozšírenie or bővítés) AND org_type:R AND country:Slovakia");
query_solr(query,"GridT1R");

//Grid Topic1 L
query = encodeURI("(EÚ or Európa or EU or Europe or rozšírenie or bővítés) AND org_type:L AND country:Slovakia");
query_solr(query,"GridT1L");

//Grid Topic2
query = encodeURI("(Közgazdasági or (Regionális fejlesztés) or támogatás or (régiók gazdaságpolitika) or gazdasági or ekonomika or (Regionálny rozvoj) or udeliť or regióny or (hospodárska politika) or ekonomické) AND country:Slovakia");
query_solr(query,"GridT2");

//Grid Topic2 R
query = encodeURI("(Közgazdasági or (Regionális fejlesztés) or támogatás or (régiók gazdaságpolitika) or gazdasági or ekonomika or (Regionálny rozvoj) or udeliť or regióny or (hospodárska politika) or ekonomické) AND org_type:R AND country:Slovakia");
query_solr(query,"GridT2R");

//Grid Topic2 L
query = encodeURI("(Közgazdasági or (Regionális fejlesztés) or támogatás or (régiók gazdaságpolitika) or gazdasági or ekonomika or (Regionálny rozvoj) or udeliť or regióny or (hospodárska politika) or ekonomické) AND org_type:L AND country:Slovakia");
query_solr(query,"GridT2L");

//Grid Topic3
query = encodeURI("((Medzištátne vzťahy) or vzťahy or medzištátne or Maďarsko or Madarsko or Orban or Budapešť or (Államközi kapcsolatok) or kapcsolatok or államközi or Magyarország or Madarsko or Orbán or Budapest) AND country:Slovakia");
query_solr(query,"GridT3");

//Grid Topic3 R
query = encodeURI("((Medzištátne vzťahy) or vzťahy or medzištátne or Maďarsko or Madarsko or Orban or Budapešť or (Államközi kapcsolatok) or kapcsolatok or államközi or Magyarország or Madarsko or Orbán or Budapest) AND org_type:R AND country:Slovakia");
query_solr(query,"GridT3R");

//Grid Topic3 L
query = encodeURI("((Medzištátne vzťahy) or vzťahy or medzištátne or Maďarsko or Madarsko or Orban or Budapešť or (Államközi kapcsolatok) or kapcsolatok or államközi or Magyarország or Madarsko or Orbán or Budapest) AND org_type:L AND country:Slovakia");
query_solr(query,"GridT3L");

//process arr and build data array
waiting_fun();
function waiting_fun()
{
  //do some things
  setTimeout(build_and_draw,1000); //wait few seconds before continuing
}
UncheckAll();
function UncheckAll(){ 
      var w = document.getElementsByTagName('input'); 
      for(var i = 0; i < w.length; i++){ 
        if(w[i].type=='checkbox'){ 
          w[i].checked = false; 
        }
      }
  }
//////////////////////////////////////////////////////////////////////////////////////////////////////start query_solr function
function  query_solr(query,Topic){
var xmlhttp;
    if (window.XMLHttpRequest) {
      xmlhttp=new XMLHttpRequest();
      } else {
      xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
      }
	 // var query = encodeURI("(minorităţilor or (impotriva oamenii noștri) or (impotriva oamenii) or români or român or românii or române or românilor or română or (the romanian) or românesc or romanians or românia or româniei or romania or romaniei or maghiar maghiarilor or maghiari or maghiare or maghiară or regionalizare or bukovina or poporului or oameni or persoane or lumea or oamenilor or persoanelor or poporul or persoanele or popor)");
	  var link ="http://localhost:8983/solr/collection1/select?q=h_file_content%3A"+query+"&rows=50000&fl=date&wt=json&json.wrf=?&indent=true";
	xmlhttp.open("GET",link,true);
	xmlhttp.send();
	
    xmlhttp.onreadystatechange=function()
      {
      if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
		var str = xmlhttp.responseText;
    	  var temp = str.replace("?", "");
    	  var temp2 = temp.replace(/\(/gm,"");
    	  var res = temp2.replace(/\)/gm,"");
    	  var strJSON = res;
    	  var objJSON =  JSON.parse(res);
		var dateArr = objJSON.response.docs.slice(0);
		for (var i = 0; i < dateArr.length; i++) {
		
		var date = dateArr[i].date;
		var counter=1;
		
		for (var j = i+1; j < dateArr.length; j++) {
		if(dateArr[j].date == date){
			counter++;
			dateArr.splice(j,1); //remove duplicate dates
			j--; //shift back index
			}
		} //end inner for-loop
		if(date!=null){
		var flag=0;
		if(arr.length>0){
		for(var ind=0;ind<arr.length;ind++){
			if(arr[ind].dateRec == date) //date record already exist add the frequency
			{
		//	arr[ind].Topic = counter;
			flag=1;
				switch(Topic){
		case "GroupT1":
			arr.push({dateRec: date, GroupT1: counter,GroupT1R:arr[ind].GroupT1R ,GroupT1L: arr[ind].GroupT1L, GroupT2: arr[ind].GroupT2, GroupT2R: arr[ind].GroupT2R,GroupT2L: arr[ind].GroupT2L,GroupT3:arr[ind].GroupT3, GroupT3R: arr[ind].GroupT3R,GroupT3L: arr[ind].GroupT3L,GroupT4: arr[ind].GroupT4,GroupT4R: arr[ind].GroupT4R,GroupT4L: arr[ind].GroupT4L,GridT1: arr[ind].GridT1,GridT1R:arr[ind].GridT1R,GridT1L:arr[ind].GridT1L, GridT2: arr[ind].GridT2,GridT2R:arr[ind].GridT2R,GridT2L:arr[ind].GridT2L, GridT3: arr[ind].GridT3,GridT3R:arr[ind].GridT3R, GridT3L:arr[ind].GridT3L});
			break;
			
		case "GroupT1R":
			arr.push({dateRec: date, GroupT1: arr[ind].GroupT1,GroupT1R: counter, GroupT1L: arr[ind].GroupT1L,GroupT2: arr[ind].GroupT2, GroupT2R: arr[ind].GroupT2R,GroupT2L: arr[ind].GroupT2L,GroupT3:arr[ind].GroupT3, GroupT3R: arr[ind].GroupT3R,GroupT3L: arr[ind].GroupT3L,GroupT4: arr[ind].GroupT4,GroupT4R: arr[ind].GroupT4R,GroupT4L: arr[ind].GroupT4L,GridT1: arr[ind].GridT1,GridT1R:arr[ind].GridT1R,GridT1L:arr[ind].GridT1L, GridT2: arr[ind].GridT2,GridT2R:arr[ind].GridT2R,GridT2L:arr[ind].GridT2L, GridT3: arr[ind].GridT3,GridT3R:arr[ind].GridT3R, GridT3L:arr[ind].GridT3L});
			break;
			
		case "GroupT1L":
			arr.push({dateRec: date, GroupT1: arr[ind].GroupT1,GroupT1R: arr[ind].GroupT1R, GroupT1L: counter, GroupT2: arr[ind].GroupT2, GroupT2R: arr[ind].GroupT2R,GroupT2L: arr[ind].GroupT2L,GroupT3:arr[ind].GroupT3, GroupT3R: arr[ind].GroupT3R,GroupT3L: arr[ind].GroupT3L,GroupT4: arr[ind].GroupT4,GroupT4R: arr[ind].GroupT4R,GroupT4L: arr[ind].GroupT4L, GridT1: arr[ind].GridT1,GridT1R:arr[ind].GridT1R,GridT1L:arr[ind].GridT1L, GridT2: arr[ind].GridT2,GridT2R:arr[ind].GridT2R,GridT2L:arr[ind].GridT2L, GridT3: arr[ind].GridT3,GridT3R:arr[ind].GridT3R, GridT3L:arr[ind].GridT3L});
			break;
			
		case "GroupT2":
			arr.push({dateRec: date, GroupT1: arr[ind].GroupT1,GroupT1R:arr[ind].GroupT1R , GroupT1L: arr[ind].GroupT1L,GroupT2: counter, GroupT2R: arr[ind].GroupT2R,GroupT2L: arr[ind].GroupT2L,GroupT3:arr[ind].GroupT3, GroupT3R: arr[ind].GroupT3R,GroupT3L: arr[ind].GroupT3L,GroupT4: arr[ind].GroupT4,GroupT4R: arr[ind].GroupT4R,GroupT4L: arr[ind].GroupT4L, GridT1: arr[ind].GridT1,GridT1R:arr[ind].GridT1R,GridT1L:arr[ind].GridT1L, GridT2: arr[ind].GridT2,GridT2R:arr[ind].GridT2R,GridT2L:arr[ind].GridT2L, GridT3: arr[ind].GridT3,GridT3R:arr[ind].GridT3R, GridT3L:arr[ind].GridT3L});
			break;
		
		case "GroupT2R":
			arr.push({dateRec: date, GroupT1: arr[ind].GroupT1,GroupT1R:arr[ind].GroupT1R , GroupT1L: arr[ind].GroupT1L,GroupT2: arr[ind].GroupT2, GroupT2R: counter,GroupT2L: arr[ind].GroupT2L,GroupT3:arr[ind].GroupT3,GroupT3R: arr[ind].GroupT3R,GroupT3L: arr[ind].GroupT3L,GroupT4: arr[ind].GroupT4,GroupT4R: arr[ind].GroupT4R,GroupT4L: arr[ind].GroupT4L, GridT1: arr[ind].GridT1, GridT1R:arr[ind].GridT1R,GridT1L:arr[ind].GridT1L, GridT2: arr[ind].GridT2,GridT2R:arr[ind].GridT2R,GridT2L:arr[ind].GridT2L, GridT3: arr[ind].GridT3,GridT3R:arr[ind].GridT3R, GridT3L:arr[ind].GridT3L});
			break;
			
		case "GroupT2L":
			arr.push({dateRec: date, GroupT1: arr[ind].GroupT1,GroupT1R: arr[ind].GroupT1R, GroupT1L: arr[ind].GroupT1L, GroupT2: arr[ind].GroupT2, GroupT2R: arr[ind].GroupT2R,GroupT2L: counter,GroupT3:arr[ind].GroupT3,GroupT3R: arr[ind].GroupT3R,GroupT3L: arr[ind].GroupT3L,GroupT4: arr[ind].GroupT4,GroupT4R: arr[ind].GroupT4R,GroupT4L: arr[ind].GroupT4L, GridT1: arr[ind].GridT1,GridT1R:arr[ind].GridT1R,GridT1L:arr[ind].GridT1L, GridT2: arr[ind].GridT2,GridT2R:arr[ind].GridT2R,GridT2L:arr[ind].GridT2L, GridT3: arr[ind].GridT3,GridT3R:arr[ind].GridT3R, GridT3L:arr[ind].GridT3L});
			break;	
		
		case "GroupT3":
			arr.push({dateRec: date, GroupT1: arr[ind].GroupT1,GroupT1R:arr[ind].GroupT1R ,GroupT1L: arr[ind].GroupT1L, GroupT2: arr[ind].GroupT2, GroupT2R: arr[ind].GroupT2R,GroupT2L: arr[ind].GroupT2L,GroupT3: counter,GroupT3R: arr[ind].GroupT3R,GroupT3L: arr[ind].GroupT3L,GroupT4: arr[ind].GroupT4,GroupT4R: arr[ind].GroupT4R,GroupT4L: arr[ind].GroupT4L, GridT1: arr[ind].GridT1,GridT1R:arr[ind].GridT1R,GridT1L:arr[ind].GridT1L, GridT2: arr[ind].GridT2,GridT2R:arr[ind].GridT2R,GridT2L:arr[ind].GridT2L, GridT3: arr[ind].GridT3,GridT3R:arr[ind].GridT3R, GridT3L:arr[ind].GridT3L});
			break;
			
		case "GroupT3R":
			arr.push({dateRec: date, GroupT1: arr[ind].GroupT1,GroupT1R:arr[ind].GroupT1R ,GroupT1L: arr[ind].GroupT1L, GroupT2: arr[ind].GroupT2, GroupT2R: arr[ind].GroupT2R,GroupT2L: arr[ind].GroupT2L,GroupT3: arr[ind].GroupT3,GroupT3R: counter,GroupT3L: arr[ind].GroupT3L,GroupT4: arr[ind].GroupT4,GroupT4R: arr[ind].GroupT4R,GroupT4L: arr[ind].GroupT4L, GridT1: arr[ind].GridT1,GridT1R:arr[ind].GridT1R,GridT1L:arr[ind].GridT1L, GridT2: arr[ind].GridT2,GridT2R:arr[ind].GridT2R,GridT2L:arr[ind].GridT2L, GridT3: arr[ind].GridT3,GridT3R:arr[ind].GridT3R, GridT3L:arr[ind].GridT3L});
			break;

		case "GroupT3L":
			arr.push({dateRec: date, GroupT1: arr[ind].GroupT1,GroupT1R:arr[ind].GroupT1R ,GroupT1L: arr[ind].GroupT1L, GroupT2: arr[ind].GroupT2, GroupT2R: arr[ind].GroupT2R,GroupT2L: arr[ind].GroupT2L,GroupT3: arr[ind].GroupT3,GroupT3R: arr[ind].GroupT3R,GroupT3L: counter,GroupT4: arr[ind].GroupT4,GroupT4R: arr[ind].GroupT4R,GroupT4L: arr[ind].GroupT4L, GridT1: arr[ind].GridT1,GridT1R:arr[ind].GridT1R,GridT1L:arr[ind].GridT1L, GridT2: arr[ind].GridT2,GridT2R:arr[ind].GridT2R,GridT2L:arr[ind].GridT2L, GridT3: arr[ind].GridT3,GridT3R:arr[ind].GridT3R, GridT3L:arr[ind].GridT3L});
			break;
			
		case "GroupT4":
			arr.push({dateRec: date, GroupT1: arr[ind].GroupT1,GroupT1R:arr[ind].GroupT1R ,GroupT1L: arr[ind].GroupT1L, GroupT2: arr[ind].GroupT2, GroupT2R: arr[ind].GroupT2R,GroupT2L: arr[ind].GroupT2L,GroupT3: arr[ind].GroupT3,GroupT3R: arr[ind].GroupT3R,GroupT3L: arr[ind].GroupT3L,GroupT4: counter,GroupT4R: arr[ind].GroupT4R,GroupT4L: arr[ind].GroupT4L, GridT1: arr[ind].GridT1,GridT1R:arr[ind].GridT1R,GridT1L:arr[ind].GridT1L, GridT2: arr[ind].GridT2,GridT2R:arr[ind].GridT2R,GridT2L:arr[ind].GridT2L, GridT3: arr[ind].GridT3,GridT3R:arr[ind].GridT3R, GridT3L:arr[ind].GridT3L});
			break;	
			
		case "GroupT4R":
			arr.push({dateRec: date, GroupT1: arr[ind].GroupT1,GroupT1R:arr[ind].GroupT1R ,GroupT1L: arr[ind].GroupT1L, GroupT2: arr[ind].GroupT2, GroupT2R: arr[ind].GroupT2R,GroupT2L: arr[ind].GroupT2L,GroupT3: arr[ind].GroupT3,GroupT3R: arr[ind].GroupT3R,GroupT3L: arr[ind].GroupT3L,GroupT4: arr[ind].GroupT4,GroupT4R: counter,GroupT4L: arr[ind].GroupT4L, GridT1: arr[ind].GridT1,GridT1R:arr[ind].GridT1R,GridT1L:arr[ind].GridT1L, GridT2: arr[ind].GridT2,GridT2R:arr[ind].GridT2R,GridT2L:arr[ind].GridT2L, GridT3: arr[ind].GridT3,GridT3R:arr[ind].GridT3R, GridT3L:arr[ind].GridT3L});
			break;	

		case "GroupT4L":
			arr.push({dateRec: date, GroupT1: arr[ind].GroupT1,GroupT1R:arr[ind].GroupT1R ,GroupT1L: arr[ind].GroupT1L, GroupT2: arr[ind].GroupT2, GroupT2R: arr[ind].GroupT2R,GroupT2L: arr[ind].GroupT2L,GroupT3: arr[ind].GroupT3,GroupT3R: arr[ind].GroupT3R,GroupT3L: arr[ind].GroupT3L,GroupT4: arr[ind].GroupT4, GroupT4R: arr[ind].GroupT4R,GroupT4L: counter,GridT1: arr[ind].GridT1,GridT1R:arr[ind].GridT1R,GridT1L:arr[ind].GridT1L, GridT2: arr[ind].GridT2,GridT2R:arr[ind].GridT2R,GridT2L:arr[ind].GridT2L, GridT3: arr[ind].GridT3,GridT3R:arr[ind].GridT3R, GridT3L:arr[ind].GridT3L});
			break;	
		
		case "GridT1":
			arr.push({dateRec: date, GroupT1: arr[ind].GroupT1,GroupT1R:arr[ind].GroupT1R , GroupT1L: arr[ind].GroupT1L,GroupT2: arr[ind].GroupT2, GroupT2R: arr[ind].GroupT2R,GroupT2L: arr[ind].GroupT2L,GroupT3:arr[ind].GroupT3,GroupT3R: arr[ind].GroupT3R,GroupT3L: arr[ind].GroupT3L,GroupT4: arr[ind].GroupT4,GroupT4R: arr[ind].GroupT4R,GroupT4L: arr[ind].GroupT4L, GridT1: counter,GridT1R:arr[ind].GridT1R,GridT1L:arr[ind].GridT1L, GridT2: arr[ind].GridT2,GridT2R:arr[ind].GridT2R,GridT2L:arr[ind].GridT2L, GridT3: arr[ind].GridT3,GridT3R:arr[ind].GridT3R, GridT3L:arr[ind].GridT3L});
			break;
			
		case "GridT1R":
			arr.push({dateRec: date, GroupT1: arr[ind].GroupT1,GroupT1R:arr[ind].GroupT1R , GroupT1L: arr[ind].GroupT1L,GroupT2: arr[ind].GroupT2, GroupT2R: arr[ind].GroupT2R,GroupT2L: arr[ind].GroupT2L,GroupT3:arr[ind].GroupT3,GroupT3R: arr[ind].GroupT3R,GroupT3L: arr[ind].GroupT3L,GroupT4: arr[ind].GroupT4, GroupT4R: arr[ind].GroupT4R,GroupT4L: arr[ind].GroupT4L,GridT1: arr[ind].GridT1,GridT1R:counter,GridT1L:arr[ind].GridT1L, GridT2: arr[ind].GridT2,GridT2R:arr[ind].GridT2R,GridT2L:arr[ind].GridT2L, GridT3: arr[ind].GridT3,GridT3R:arr[ind].GridT3R, GridT3L:arr[ind].GridT3L});
			break;	
			
		case "GridT1L":
			arr.push({dateRec: date, GroupT1: arr[ind].GroupT1,GroupT1R:arr[ind].GroupT1R , GroupT1L: arr[ind].GroupT1L,GroupT2: arr[ind].GroupT2, GroupT2R: arr[ind].GroupT2R,GroupT2L: arr[ind].GroupT2L,GroupT3:arr[ind].GroupT3,GroupT3R: arr[ind].GroupT3R,GroupT3L: arr[ind].GroupT3L,GroupT4: arr[ind].GroupT4,GroupT4R: arr[ind].GroupT4R,GroupT4L: arr[ind].GroupT4L, GridT1: arr[ind].GridT1,GridT1R:arr[ind].GridT1R,GridT1L:counter, GridT2: arr[ind].GridT2,GridT2R:arr[ind].GridT2R,GridT2L:arr[ind].GridT2L, GridT3: arr[ind].GridT3,GridT3R:arr[ind].GridT3R, GridT3L:arr[ind].GridT3L});
			break;		
			
		case "GridT2":
			arr.push({dateRec: date, GroupT1: arr[ind].GroupT1, GroupT1R:arr[ind].GroupT1R, GroupT1L: arr[ind].GroupT1L,GroupT2: arr[ind].GroupT2, GroupT2R: arr[ind].GroupT2R,GroupT2L: arr[ind].GroupT2L,GroupT3:arr[ind].GroupT3,GroupT3R: arr[ind].GroupT3R,GroupT3L: arr[ind].GroupT3L,GroupT4: arr[ind].GroupT4,GroupT4R: arr[ind].GroupT4R, GroupT4L: arr[ind].GroupT4L,GridT1: arr[ind].GridT1,GridT1R:arr[ind].GridT1R, GridT1L:arr[ind].GridT1L, GridT2: counter,GridT2R:arr[ind].GridT2R,GridT2L:arr[ind].GridT2L, GridT3: arr[ind].GridT3,GridT3R:arr[ind].GridT3R, GridT3L:arr[ind].GridT3L});
			break;
			
		case "GridT2R":
			arr.push({dateRec: date, GroupT1: arr[ind].GroupT1,GroupT1R:arr[ind].GroupT1R , GroupT1L: arr[ind].GroupT1L,GroupT2: arr[ind].GroupT2, GroupT2R: arr[ind].GroupT2R,GroupT2L: arr[ind].GroupT2L,GroupT3:arr[ind].GroupT3,GroupT3R: arr[ind].GroupT3R,GroupT3L: arr[ind].GroupT3L,GroupT4: arr[ind].GroupT4,GroupT4R: arr[ind].GroupT4R, GroupT4L: arr[ind].GroupT4L,GridT1: arr[ind].GridT1,GridT1R:arr[ind].GridT1R,GridT1L:arr[ind].GridT1L, GridT2: arr[ind].GridT2,GridT2R:counter,GridT2L:arr[ind].GridT2L, GridT3: arr[ind].GridT3,GridT3R:arr[ind].GridT3R, GridT3L:arr[ind].GridT3L});
			break;	
			
		case "GridT2L":
			arr.push({dateRec: date, GroupT1: arr[ind].GroupT1,GroupT1R:arr[ind].GroupT1R , GroupT1L: arr[ind].GroupT1L,GroupT2: arr[ind].GroupT2, GroupT2R: arr[ind].GroupT2R,GroupT2L: arr[ind].GroupT2L,GroupT3:arr[ind].GroupT3,GroupT3R: arr[ind].GroupT3R,GroupT3L: arr[ind].GroupT3L,GroupT4: arr[ind].GroupT4,GroupT4R: arr[ind].GroupT4R, GroupT4L: arr[ind].GroupT4L,GridT1: arr[ind].GridT1,GridT1R:arr[ind].GridT1R,GridT1L:arr[ind].GridT1L, GridT2: arr[ind].GridT2,GridT2R:arr[ind].GridT2R,GridT2L:counter, GridT3: arr[ind].GridT3,GridT3R:arr[ind].GridT3R, GridT3L:arr[ind].GridT3L});
			break;		
		
		case "GridT3":
			arr.push({dateRec: date, GroupT1: arr[ind].GroupT1, GroupT1R:arr[ind].GroupT1R, GroupT1L: arr[ind].GroupT1L,GroupT2: arr[ind].GroupT2, GroupT2R: arr[ind].GroupT2R,GroupT2L: arr[ind].GroupT2L,GroupT3:arr[ind].GroupT3,GroupT3R: arr[ind].GroupT3R,GroupT3L: arr[ind].GroupT3L,GroupT4: arr[ind].GroupT4,GroupT4R: arr[ind].GroupT4R, GroupT4L: arr[ind].GroupT4L,GridT1: arr[ind].GridT1,GridT1R:arr[ind].GridT1R, GridT1L:arr[ind].GridT1L, GridT2: arr[ind].GridT2,GridT2R:arr[ind].GridT2R,GridT2L:arr[ind].GridT2L, GridT3: counter,GridT3R:arr[ind].GridT3R, GridT3L:arr[ind].GridT3L});
			break;
			
		case "GridT3R":
			arr.push({dateRec: date, GroupT1: arr[ind].GroupT1,GroupT1R:arr[ind].GroupT1R , GroupT1L: arr[ind].GroupT1L,GroupT2: arr[ind].GroupT2, GroupT2R: arr[ind].GroupT2R,GroupT2L: arr[ind].GroupT2L,GroupT3:arr[ind].GroupT3,GroupT3R: arr[ind].GroupT3R,GroupT3L: arr[ind].GroupT3L,GroupT4: arr[ind].GroupT4,GroupT4R: arr[ind].GroupT4R, GroupT4L: arr[ind].GroupT4L,GridT1: arr[ind].GridT1,GridT1R:arr[ind].GridT1R,GridT1L:arr[ind].GridT1L, GridT2: arr[ind].GridT2,GridT2R:arr[ind].GridT2R,GridT2L:arr[ind].GridT2L, GridT3: arr[ind].GridT3,GridT3R:counter, GridT3L:arr[ind].GridT3L});
			break;

		case "GridT3L":
			arr.push({dateRec: date, GroupT1: arr[ind].GroupT1,GroupT1R:arr[ind].GroupT1R , GroupT1L: arr[ind].GroupT1L,GroupT2: arr[ind].GroupT2, GroupT2R: arr[ind].GroupT2R,GroupT2L: arr[ind].GroupT2L,GroupT3:arr[ind].GroupT3,GroupT3R: arr[ind].GroupT3R,GroupT3L: arr[ind].GroupT3L,GroupT4: arr[ind].GroupT4,GroupT4R: arr[ind].GroupT4R, GroupT4L: arr[ind].GroupT4L,GridT1: arr[ind].GridT1,GridT1R:arr[ind].GridT1R,GridT1L:arr[ind].GridT1L, GridT2: arr[ind].GridT2,GridT2R:arr[ind].GridT2R,GridT2L:arr[ind].GridT2L, GridT3: arr[ind].GridT3,GridT3R:arr[ind].GridT3R, GridT3L:counter});
			break;	
		
		default:
			alert("Error");
		}
		arr.splice( ind, 1 );
		
			}
		}
		}
		if(flag==0) //means no date record thus create new one with zeros for other topics
		{
		switch(Topic){
		case "GroupT1":
			arr.push({dateRec: date, GroupT1: counter,GroupT1R:0, GroupT1L:0,GroupT2: 0,GroupT2R: 0,GroupT2L:0,GroupT3: 0,GroupT3R: 0,GroupT3L: 0,GroupT4: 0,GroupT4R: 0, GroupT4L: 0,GridT1: 0,GridT1R: 0,GridT1L: 0, GridT2: 0,GridT2R: 0,GridT2L: 0, GridT3: 0,GridT3R:0,GridT3L: 0});
			break;
		
		case "GroupT1R":
			arr.push({dateRec: date, GroupT1: 0, GroupT1R: counter,GroupT1L:0,GroupT2: 0,GroupT2R: 0,GroupT2L:0,GroupT3: 0, GroupT3R: 0,GroupT3L: 0,GroupT4: 0,GroupT4R: 0,GroupT4L: 0,GridT1: 0,GridT1R: 0,GridT1L: 0, GridT2: 0,GridT2R: 0,GridT2L: 0, GridT3: 0,GridT3R:0,GridT3L: 0});
			break;
		
		case "GroupT1L":
			arr.push({dateRec: date, GroupT1: 0, GroupT1R:0, GroupT1L: counter,GroupT2: 0,GroupT2R: 0,GroupT2L:0,GroupT3: 0,GroupT3R: 0,GroupT3L: 0,GroupT4: 0,GroupT4R: 0,GroupT4L: 0, GridT1: 0,GridT1R: 0,GridT1L: 0, GridT2: 0,GridT2R: 0,GridT2L: 0, GridT3: 0,GridT3R:0,GridT3L: 0});
			break;
			
		case "GroupT2":
			arr.push({dateRec: date, GroupT1: 0, GroupT1R:0, GroupT1L:0,GroupT2: counter,GroupT2R: 0,GroupT2L:0,GroupT3: 0,GroupT3R: 0,GroupT3L: 0,GroupT4: 0,GroupT4R: 0,GroupT4L: 0, GridT1: 0,GridT1R: 0,GridT1L: 0, GridT2: 0,GridT2R: 0,GridT2L: 0, GridT3: 0,GridT3R:0,GridT3L: 0});
			break;
			
		case "GroupT2R":
			arr.push({dateRec: date, GroupT1: 0, GroupT1R: 0,GroupT1L:0,GroupT2: 0, GroupT2R: counter,GroupT2L:0,GroupT3: 0,GroupT3R: 0,GroupT3L: 0,GroupT4: 0,GroupT4R: 0,GroupT4L: 0, GridT1: 0,GridT1R: 0,GridT1L: 0, GridT2: 0,GridT2R: 0,GridT2L: 0, GridT3: 0,GridT3R:0,GridT3L: 0});
			break;	
			
		case "GroupT2L":
			arr.push({dateRec: date, GroupT1: 0, GroupT1R: 0,GroupT1L:0,GroupT2: 0, GroupT2R: 0,GroupT2L:counter,GroupT3: 0,GroupT3R: 0,GroupT3L: 0,GroupT4: 0,GroupT4R: 0,GroupT4L: 0, GridT1: 0,GridT1R: 0,GridT1L: 0, GridT2: 0,GridT2R: 0,GridT2L: 0, GridT3: 0,GridT3R:0,GridT3L: 0});
			break;	
			
		case "GroupT3":
			arr.push({dateRec: date, GroupT1: 0,GroupT1R:0, GroupT1L:0,GroupT2: 0,GroupT2R: 0,GroupT2L:0,GroupT3: counter,GroupT3R: 0,GroupT3L: 0,GroupT4: 0,GroupT4R: 0, GroupT4L: 0,GridT1: 0,GridT1R: 0,GridT1L: 0, GridT2: 0,GridT2R: 0,GridT2L: 0, GridT3: 0,GridT3R:0,GridT3L: 0});
			break;

		case "GroupT3R":
			arr.push({dateRec: date, GroupT1: 0,GroupT1R:0, GroupT1L:0,GroupT2: 0,GroupT2R: 0,GroupT2L:0,GroupT3: 0,GroupT3R: counter,GroupT3L: 0,GroupT4: 0,GroupT4R: 0, GroupT4L: 0,GridT1: 0,GridT1R: 0,GridT1L: 0, GridT2: 0,GridT2R: 0,GridT2L: 0, GridT3: 0,GridT3R:0,GridT3L: 0});
			break;
			
		case "GroupT3L":
			arr.push({dateRec: date, GroupT1: 0,GroupT1R:0, GroupT1L:0,GroupT2: 0,GroupT2R: 0,GroupT2L:0,GroupT3: 0, GroupT3R: 0,GroupT3L: counter,GroupT4: 0,GroupT4R: 0,GroupT4L: 0,GridT1: 0,GridT1R: 0,GridT1L: 0, GridT2: 0,GridT2R: 0,GridT2L: 0, GridT3: 0,GridT3R:0,GridT3L: 0});
			break;	
			
		case "GroupT4":
			arr.push({dateRec: date, GroupT1: 0,GroupT1R:0, GroupT1L:0,GroupT2: 0,GroupT2R: 0,GroupT2L:0,GroupT3: 0,GroupT3R: 0,GroupT3L: 0,GroupT4: counter,GroupT4R: 0, GroupT4L: 0,GridT1: 0,GridT1R: 0,GridT1L: 0, GridT2: 0,GridT2R: 0,GridT2L: 0, GridT3: 0,GridT3R:0,GridT3L: 0});
			break;	
			
		case "GroupT4R":
			arr.push({dateRec: date, GroupT1: 0,GroupT1R:0, GroupT1L:0,GroupT2: 0,GroupT2R: 0,GroupT2L:0,GroupT3: 0,GroupT3R: 0,GroupT3L: 0,GroupT4: 0,GroupT4R: counter, GroupT4L: 0,GridT1: 0,GridT1R: 0,GridT1L: 0, GridT2: 0,GridT2R: 0,GridT2L: 0, GridT3: 0,GridT3R:0,GridT3L: 0});
			break;	

		case "GroupT4L":
			arr.push({dateRec: date, GroupT1: 0,GroupT1R:0, GroupT1L:0,GroupT2: 0,GroupT2R: 0,GroupT2L:0,GroupT3: 0,GroupT3R: 0,GroupT3L: 0,GroupT4: 0,GroupT4R: 0,GroupT4L: counter, GridT1: 0,GridT1R: 0,GridT1L: 0, GridT2: 0,GridT2R: 0,GridT2L: 0, GridT3: 0,GridT3R:0,GridT3L: 0});
			break;		
		
		case "GridT1":
			arr.push({dateRec: date, GroupT1: 0, GroupT1R:0, GroupT1L:0,GroupT2: 0,GroupT2R: 0,GroupT2L:0,GroupT3: 0, GroupT3R: 0,GroupT3L: 0,GroupT4: 0,GroupT4R: 0,GroupT4L: 0,GridT1: counter,GridT1R: 0,GridT1L: 0, GridT2: 0,GridT2R: 0,GridT2L: 0, GridT3: 0,GridT3R:0,GridT3L: 0});
			break;
			
		case "GridT1R":
			arr.push({dateRec: date, GroupT1: 0, GroupT1R:0, GroupT1L:0,GroupT2: 0,GroupT2R: 0,GroupT2L:0,GroupT3: 0,GroupT3R: 0,GroupT3L: 0,GroupT4: 0, GroupT4R: 0,GroupT4L: 0,GridT1: 0,GridT1R: counter,GridT1L: 0, GridT2: 0,GridT2R: 0,GridT2L: 0, GridT3: 0,GridT3R:0,GridT3L: 0});
			break;	
			
		case "GridT1L":
			arr.push({dateRec: date, GroupT1: 0, GroupT1R:0, GroupT1L:0,GroupT2: 0,GroupT2R: 0,GroupT2L:0,GroupT3: 0,GroupT3R: 0,GroupT3L: 0,GroupT4: 0,GroupT4R: 0, GroupT4L: 0,GridT1: 0,GridT1R: 0,GridT1L: counter, GridT2: 0,GridT2R: 0,GridT2L: 0, GridT3: 0,GridT3R:0,GridT3L: 0});
			break;		
			
		case "GridT2":
			arr.push({dateRec: date, GroupT1: 0, GroupT1R:0, GroupT1L:0,GroupT2: 0,GroupT2R: 0,GroupT2L:0,GroupT3: 0,GroupT3R: 0,GroupT3L: 0,GroupT4: 0,GroupT4R: 0,GroupT4L: 0, GridT1: 0,GridT1R: 0,GridT1L: 0, GridT2: counter,GridT2R: 0,GridT2L: 0, GridT3: 0,GridT3R:0,GridT3L: 0});
			break;
			
		case "GridT2R":
			arr.push({dateRec: date, GroupT1: 0, GroupT1R:0, GroupT1L:0,GroupT2: 0,GroupT2R: 0,GroupT2L:0,GroupT3: 0,GroupT3R: 0,GroupT3L: 0,GroupT4: 0,GroupT4R: 0,GroupT4L: 0, GridT1: 0,GridT1R: 0,GridT1L: 0, GridT2: 0,GridT2R: counter,GridT2L: 0, GridT3: 0,GridT3R:0,GridT3L: 0});
			break;

		case "GridT2L":
			arr.push({dateRec: date, GroupT1: 0, GroupT1R:0, GroupT1L:0,GroupT2: 0,GroupT2R: 0,GroupT2L:0,GroupT3: 0,GroupT3R: 0,GroupT3L: 0,GroupT4: 0,GroupT4R: 0, GroupT4L: 0,GridT1: 0,GridT1R: 0,GridT1L: 0, GridT2: 0,GridT2R: 0,GridT2L: counter,GridT3: 0,GridT3R:0,GridT3L: 0});
			break;
		
		case "GridT3":
			arr.push({dateRec: date, GroupT1: 0, GroupT1R:0, GroupT1L:0,GroupT2: 0,GroupT2R: 0,GroupT2L:0,GroupT3: 0,GroupT3R: 0,GroupT3L: 0,GroupT4: 0,GroupT4R: 0,GroupT4L: 0, GridT1: 0,GridT1R: 0,GridT1L: 0, GridT2: 0, GridT2R: 0,GridT2L: 0,GridT3: counter,GridT3R:0,GridT3L: 0});
			break;
			
		case "GridT3R":
			arr.push({dateRec: date, GroupT1: 0, GroupT1R:0, GroupT1L:0,GroupT2: 0,GroupT2R: 0,GroupT2L:0,GroupT3: 0,GroupT3R: 0,GroupT3L: 0,GroupT4: 0,GroupT4R: 0, GroupT4L: 0,GridT1: 0,GridT1R: 0,GridT1L: 0, GridT2: 0,GridT2R: 0,GridT2L: 0, GridT3: 0,GridT3R: counter,GridT3L: 0});
			break;

		case "GridT3L":
			arr.push({dateRec: date, GroupT1: 0, GroupT1R:0, GroupT1L:0,GroupT2: 0,GroupT2R: 0,GroupT2L:0,GroupT3: 0,GroupT3R: 0,GroupT3L: 0,GroupT4: 0,GroupT4R: 0,GroupT4L: 0, GridT1: 0,GridT1R: 0,GridT1L: 0, GridT2: 0,GridT2R: 0,GridT2L: 0, GridT3: 0,GridT3R: 0,GridT3L: counter});
			break;
		
		default:
			alert("Error");
		}
		
		}
		
		}
		
		} //end outer for-loop
		
       
        } //end if status check
      } //end on ready function
	 // return;
}
//////////////////////////////////////////////////////////////////////////////////////////////////////end	function query solr	//
		////////// END NEWWWWWW
       
      }
function build_and_draw(){
slovakia_data.addColumn('date', 'Date');
		 slovakia_data.addColumn('number', 'Group T1'); //index 0
		  slovakia_data.addColumn('number', 'Group T1 Radicals'); //index 1
		  slovakia_data.addColumn('number', 'Group T1 Liberals'); //index 2
		slovakia_data.addColumn('number','Group T2');  //index 3
		slovakia_data.addColumn('number', 'Group T2 Radicals'); //index 4
		slovakia_data.addColumn('number', 'Group T2 Liberals'); //index 5
		slovakia_data.addColumn('number', 'Group T3'); //
		slovakia_data.addColumn('number', 'Group T3 Radicals'); //index 
		slovakia_data.addColumn('number', 'Group T3 Liberals'); //index 
		slovakia_data.addColumn('number', 'Group T4'); //
		slovakia_data.addColumn('number', 'Group T4 Radicals'); //index 
		slovakia_data.addColumn('number', 'Group T4 Liberals'); //index 
		slovakia_data.addColumn('number', 'Grid T1'); //index 6
		slovakia_data.addColumn('number', 'Grid T1 Radicals'); //index 7
		slovakia_data.addColumn('number', 'Grid T1 Liberals'); //index 8
		slovakia_data.addColumn('number', 'Grid T2'); //index 9
		slovakia_data.addColumn('number', 'Grid T2 Radicals'); //index 10
		slovakia_data.addColumn('number', 'Grid T2 Liberals'); //index 11
		slovakia_data.addColumn('number', 'Grid T3'); //index 12
		slovakia_data.addColumn('number', 'Grid T3 Radicals'); //index 13
		slovakia_data.addColumn('number', 'Grid T3 Liberals'); //index 14
		
for(var i=0;i<arr.length;i++){
	var dateParts = arr[i].dateRec.split('-');
	var year= parseInt(dateParts[0]);
	var month= parseInt(dateParts[1]) -1;
	var day= parseInt(dateParts[2]);
	//alert(year);
	slovakia_data.addRows([
		[new Date(year, month ,day), arr[i].GroupT1,arr[i].GroupT1R,arr[i].GroupT1L,arr[i].GroupT2,arr[i].GroupT2R,arr[i].GroupT2L,arr[i].GroupT3,arr[i].GroupT3R,arr[i].GroupT3L,arr[i].GroupT4,arr[i].GroupT4R,arr[i].GroupT4L, arr[i].GridT1,arr[i].GridT1R,arr[i].GridT1L,arr[i].GridT2,arr[i].GridT2R,arr[i].GridT2L,arr[i].GridT3,arr[i].GridT3R,arr[i].GridT3L]
		]);
}
slovakia_chart.draw(slovakia_data, {'colors': ['#9977CC','#003366', '#FF0000', '#00CC33','#006600','#666599','#993300','#0006FF','#9900CC','#CFF902','#00CCFF','#FF6600','#FF66FF','#00FFFF','#666699','#CC9900','#00CC66','#FF9999','#CC3300','#999966','#FF3333','#0948FF'],displayAnnotations: false});
slovakia_chart.hideDataColumns([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]);
return;
}	  
	  
	  function handleClickT1(cb) {       
  if(document.getElementById('group1').checked){ //<!--show group topic1 curve-->
	slovakia_chart.showDataColumns(0);	
		}
	else { //<!--show default slovakia_chart-->
	//slovakia_chart.showDataColumns(0);
	slovakia_chart.hideDataColumns(0);	
	}	
}

 function handleClickT1R(cb) {       
  if(document.getElementById('group1R').checked){ //<!--show group topic1 R curve-->
	slovakia_chart.showDataColumns(1);	        
		}
	else { //<!--show default slovakia_chart-->
	//slovakia_chart.showDataColumns(0);
	slovakia_chart.hideDataColumns(1);	
	}	
}

 function handleClickT1L(cb) {       
  if(document.getElementById('group1L').checked){ //<!--show group topic1 L curve-->
	slovakia_chart.showDataColumns(2);	        
		}
	else { //<!--show default slovakia_chart-->
	//slovakia_chart.showDataColumns(0);
	slovakia_chart.hideDataColumns(2);	
	}	
}

////////////////////
	  function handleClickT2(cb) {       
  if(document.getElementById('group2').checked){ //<!--show group topic2 curve-->
	slovakia_chart.showDataColumns(3);	        
		}
	else { 
	slovakia_chart.hideDataColumns(3);	
	}	
}
function handleClickT2R(cb) {       
  if(document.getElementById('group2R').checked){ //<!--show group topic2 R curve-->
	slovakia_chart.showDataColumns(4);	        
		}
	else { //<!--show default slovakia_chart-->
	//slovakia_chart.showDataColumns(0);
	slovakia_chart.hideDataColumns(4);	
	}	
}

function handleClickT2L(cb) {       
  if(document.getElementById('group2L').checked){ //<!--show group topic2 R curve-->
	slovakia_chart.showDataColumns(5);	        
		}
	else { //<!--show default slovakia_chart-->
	//slovakia_chart.showDataColumns(0);
	slovakia_chart.hideDataColumns(5);	
	}	
}

 function handleClickT3Group(cb) {       
  if(document.getElementById('group3').checked){ //<!--show group topic1 curve-->
	slovakia_chart.showDataColumns(6);	
		}
	else { //<!--show default slovakia_chart-->
	//slovakia_chart.showDataColumns(0);
	slovakia_chart.hideDataColumns(6);	
	}	
}
function handleClickT3RGroup(cb) {       
  if(document.getElementById('group3R').checked){ //<!--show group topic1 curve-->
	slovakia_chart.showDataColumns(7);	
		}
	else { //<!--show default slovakia_chart-->
	//slovakia_chart.showDataColumns(0);
	slovakia_chart.hideDataColumns(7);	
	}	
}
function handleClickT3LGroup(cb) {       
  if(document.getElementById('group3L').checked){ //<!--show group topic1 curve-->
	slovakia_chart.showDataColumns(8);	
		}
	else { //<!--show default slovakia_chart-->
	//slovakia_chart.showDataColumns(0);
	slovakia_chart.hideDataColumns(8);	
	}	
}
 function handleClickT4Group(cb) {       
  if(document.getElementById('group4').checked){ //<!--show group topic1 curve-->
	slovakia_chart.showDataColumns(9);	
		}
	else { //<!--show default slovakia_chart-->
	//slovakia_chart.showDataColumns(0);
	slovakia_chart.hideDataColumns(9);	
	}	
}
function handleClickT4RGroup(cb) {       
  if(document.getElementById('group4R').checked){ //<!--show group topic1 curve-->
	slovakia_chart.showDataColumns(10);	
		}
	else { //<!--show default slovakia_chart-->
	//slovakia_chart.showDataColumns(0);
	slovakia_chart.hideDataColumns(10);	
	}	
}
function handleClickT4LGroup(cb) {       
  if(document.getElementById('group4L').checked){ //<!--show group topic1 curve-->
	slovakia_chart.showDataColumns(11);	
		}
	else { //<!--show default slovakia_chart-->
	//slovakia_chart.showDataColumns(0);
	slovakia_chart.hideDataColumns(11);	
	}	
}

	  function handleClickT3(cb) {       
  if(document.getElementById('grid1').checked){ //<!--show grid topic1 curve-->
	slovakia_chart.showDataColumns(12);	        
		}
	else { 
	slovakia_chart.hideDataColumns(12);	
	}	
}
function handleClickT3R(cb) {       
  if(document.getElementById('grid1R').checked){ //<!--show grid topic1 R curve-->
	slovakia_chart.showDataColumns(13);	        
		}
	else { //<!--show default slovakia_chart-->
	//slovakia_chart.showDataColumns(0);
	slovakia_chart.hideDataColumns(13);	
	}	
}
function handleClickT3L(cb) {       
  if(document.getElementById('grid1L').checked){ //<!--show grid topic1 L curve-->
	slovakia_chart.showDataColumns(14);	        
		}
	else { //<!--show default slovakia_chart-->
	//slovakia_chart.showDataColumns(0);
	slovakia_chart.hideDataColumns(14);	
	}	
}

	  function handleClickT4(cb) {       
  if(document.getElementById('grid2').checked){ //<!--show grid topic2 curve-->
	slovakia_chart.showDataColumns(15);	        
		}
	else { //<!--show default slovakia_chart-->
	//slovakia_chart.showDataColumns(0);
	slovakia_chart.hideDataColumns(15);	
	}	
}
function handleClickT4R(cb) {       
  if(document.getElementById('grid2R').checked){ //<!--show grid topic2 R curve-->
	slovakia_chart.showDataColumns(16);	        
		}
	else { //<!--show default slovakia_chart-->
	//slovakia_chart.showDataColumns(0);
	slovakia_chart.hideDataColumns(16);	
	}	
}
function handleClickT4L(cb) {       
  if(document.getElementById('grid2L').checked){ //<!--show grid topic2 R curve-->
	slovakia_chart.showDataColumns(17);	        
		}
	else { //<!--show default slovakia_chart-->
	//slovakia_chart.showDataColumns(0);
	slovakia_chart.hideDataColumns(17);	
	}	
}

	  function handleClickT5(cb) {       
  if(document.getElementById('grid3').checked){ //<!--show grid topic3 curve-->
	slovakia_chart.showDataColumns(18);	        
		}
	else { 
	slovakia_chart.hideDataColumns(18);	
	}	
}
function handleClickT5R(cb) {       
  if(document.getElementById('grid3R').checked){ //<!--show grid topic3 R curve-->
	slovakia_chart.showDataColumns(19);	        
		}
	else { 
	slovakia_chart.hideDataColumns(19);	
	}	
}
function handleClickT5L(cb) {       
  if(document.getElementById('grid3L').checked){ //<!--show grid topic3 L curve-->
	slovakia_chart.showDataColumns(20);	        
		}
	else { 
	slovakia_chart.hideDataColumns(20);	
	}	
}

////////////////////    
