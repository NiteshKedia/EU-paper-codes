  google.load('visualization', '1', {'packages':['annotatedtimeline']});
		var arr = new Array();
      google.setOnLoadCallback(drawChart);
      function drawChart() {
        
		/////////// NEWWWWWWWWWWWWWW

//Group Topic1
var query= encodeURI("(Gypsy or Roma or Miskolc or people or (Hungarian national) or cigány or cigányok or Róma or emberek or (Magyar állampolgár) or magyar) AND country:Hungary");		
query_solr(query,"GroupT1");

//Group Topic1 R
var query= encodeURI("(Gypsy or Roma or Miskolc or people or (Hungarian national) or cigány or cigányok or Róma or emberek or (Magyar állampolgár) or magyar) AND org_type:R AND country:Hungary");		
query_solr(query,"GroupT1R");

//Group Topic1 L
var query= encodeURI("(Gypsy or Roma or Miskolc or people or (Hungarian national) or cigány or cigányok or Róma or emberek or (Magyar állampolgár) or magyar) AND org_type:L AND country:Hungary");		
query_solr(query,"GroupT1L");

//Group Topic2
query = encodeURI("(Jews or Szegedi or people or (Hungarian national) or zsidók or zsidó or Szegedi or emberek or (Magyar állampolgár) or magyar) AND country:Hungary");
query_solr(query,"GroupT2");

//Group Topic2 R
query = encodeURI("(Jews or Szegedi or people or (Hungarian national) or zsidók or zsidó or Szegedi or emberek or (Magyar állampolgár) or magyar) AND country:Hungary AND org_type:R");
query_solr(query,"GroupT2R");

//Group Topic2 L
query = encodeURI("(Jews or Szegedi or people or (Hungarian national) or zsidók or zsidó or Szegedi or emberek or (Magyar állampolgár) or magyar) AND country:Hungary AND org_type:L");
query_solr(query,"GroupT2L");

//Group Topic3
query = encodeURI("(Karpatia or Miskolc) AND country:Hungary");
query_solr(query,"GroupT3");

//Group Topic3 R
query = encodeURI("(Karpatia or Miskolc or Kárpátok) AND country:Hungary AND org_type:R");
query_solr(query,"GroupT3R");

//Group Topic3 L
query = encodeURI("(Karpatia or Miskolc or Kárpátok) AND country:Hungary AND org_type:L");
query_solr(query,"GroupT3L");

//Grid Topic1
query = encodeURI("((public safety) or Gypsy or Roma or people or education or culture or corruption or (Hungarian national) or közbiztonság or biztonság or cigány or cigányok or roma or emberek or az oktatás or kultúra or korrupció or (magyar nemzeti) or magyar) AND country:Hungary");
query_solr(query,"GridT1");

//Grid Topic1 R
query = encodeURI("((public safety) or Gypsy or Roma or people or education or culture or corruption or (Hungarian national) or közbiztonság or biztonság or cigány or cigányok or roma or emberek or az oktatás or kultúra or korrupció or (magyar nemzeti) or magyar) AND country:Hungary AND org_type:R");
query_solr(query,"GridT1R");

//Grid Topic1 L
query = encodeURI("((public safety) or Gypsy or Roma or people or education or culture or corruption or (Hungarian national) or közbiztonság or biztonság or cigány or cigányok or roma or emberek or az oktatás or kultúra or korrupció or (magyar nemzeti) or magyar) AND country:Hungary AND org_type:L");
query_solr(query,"GridT1L");

//Grid Topic2
query = encodeURI("(HUF or forint or corruption or economy or (hungarian products) or (Central Bank) or economic or budget or budgetary or (million forints) or (billion forints) or IMF or korrupció or gazdaság or (magyar termékek) or (Központi Bank) or gazdasági or költségvetés or költségvetési or (millió forint) or (milliárd forint)) AND country:Hungary");
query_solr(query,"GridT2");

//Grid Topic2 R
query = encodeURI("(HUF or forint or corruption or economy or (hungarian products) or (Central Bank) or economic or budget or budgetary or (million forints) or (billion forints) or IMF or korrupció or gazdaság or (magyar termékek) or (Központi Bank) or gazdasági or költségvetés or költségvetési or (millió forint) or (milliárd forint)) AND country:Hungary AND org_type:R");
query_solr(query,"GridT2R");

//Grid Topic2 L
query = encodeURI("(HUF or forint or corruption or economy or (hungarian products) or (Central Bank) or economic or budget or budgetary or (million forints) or (billion forints) or IMF or korrupció or gazdaság or (magyar termékek) or (Központi Bank) or gazdasági or költségvetés or költségvetési or (millió forint) or (milliárd forint)) AND country:Hungary AND org_type:L");
query_solr(query,"GridT2L");

//Grid Topic3
query = encodeURI("(Európa or EU or Europe) AND country:Hungary");
query_solr(query,"GridT3");

//Grid Topic3 R
query = encodeURI("(Európa or EU or Europe) AND org_type:R AND country:Hungary");
query_solr(query,"GridT3R");

//Grid Topic3 L
query = encodeURI("(Európa or EU or Europe) AND org_type:L AND country:Hungary");
query_solr(query,"GridT3L");

//Grid Topic4
query = encodeURI("(Alkotmány or Demokrácia or Alkotmánybíróság or Court or (az oktatás) or kultúra or korrupció or felsőoktatás or (demokratikus ellenzék) or demokratikus or ellenzék or Constitution or Democracy or (Constitutional Court) or education or culture or corruption or (higher education) or (democratic opposition)) AND country:Hungary");
query_solr(query,"GridT4");

//Grid Topic4 R
query = encodeURI("(Alkotmány or Demokrácia or Alkotmánybíróság or Court or (az oktatás) or kultúra or korrupció or felsőoktatás or (demokratikus ellenzék) or demokratikus or ellenzék or Constitution or Democracy or (Constitutional Court) or education or culture or corruption or (higher education) or (democratic opposition)) AND country:Hungary AND org_type:R");
query_solr(query,"GridT4R");

//Grid Topic4 L
query = encodeURI("(Alkotmány or Demokrácia or Alkotmánybíróság or Court or (az oktatás) or kultúra or korrupció or felsőoktatás or (demokratikus ellenzék) or demokratikus or ellenzék or Constitution or Democracy or (Constitutional Court) or education or culture or corruption or (higher education) or (democratic opposition)) AND country:Hungary AND org_type:L");
query_solr(query,"GridT4L");

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
	  var link ="http://localhost:8983/solr/collection1/select?q=h_file_content%3A"+query+"&rows=50000&fl=article_date&wt=json&json.wrf=?&indent=true";
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
		var date;
		var counter=1;
		var i,j;
		for ( i = 0; i < dateArr.length; i++) {
		
		date = dateArr[i].article_date;
		
		if(date == null) continue;
				
		 counter=1;
		
		for ( j = i+1; j < dateArr.length; j++) {
		if(dateArr[j].article_date == null) continue;
		
		if(dateArr[j].article_date == date){
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
			arr.push({dateRec: date, GroupT1: counter,GroupT1R:arr[ind].GroupT1R ,GroupT1L: arr[ind].GroupT1L, GroupT2: arr[ind].GroupT2, GroupT2R: arr[ind].GroupT2R,GroupT2L: arr[ind].GroupT2L,GroupT3: arr[ind].GroupT3,GroupT3R: arr[ind].GroupT3R,GroupT3L: arr[ind].GroupT3L, GridT1: arr[ind].GridT1,GridT1R:arr[ind].GridT1R,GridT1L:arr[ind].GridT1L, GridT2: arr[ind].GridT2,GridT2R:arr[ind].GridT2R,GridT2L:arr[ind].GridT2L, GridT3: arr[ind].GridT3,GridT3R:arr[ind].GridT3R, GridT3L:arr[ind].GridT3L,GridT4: arr[ind].GridT4,GridT4R:arr[ind].GridT4R,GridT4L:arr[ind].GridT4L});
			break;
			
		case "GroupT1R":
			arr.push({dateRec: date, GroupT1: arr[ind].GroupT1,GroupT1R: counter, GroupT1L: arr[ind].GroupT1L,GroupT2: arr[ind].GroupT2, GroupT2R: arr[ind].GroupT2R,GroupT2L: arr[ind].GroupT2L,GroupT3: arr[ind].GroupT3,GroupT3R: arr[ind].GroupT3R,GroupT3L: arr[ind].GroupT3L, GridT1: arr[ind].GridT1,GridT1R:arr[ind].GridT1R,GridT1L:arr[ind].GridT1L, GridT2: arr[ind].GridT2,GridT2R:arr[ind].GridT2R,GridT2L:arr[ind].GridT2L, GridT3: arr[ind].GridT3,GridT3R:arr[ind].GridT3R, GridT3L:arr[ind].GridT3L,GridT4: arr[ind].GridT4,GridT4R:arr[ind].GridT4R,GridT4L:arr[ind].GridT4L});
			break;
			
		case "GroupT1L":
			arr.push({dateRec: date, GroupT1: arr[ind].GroupT1,GroupT1R: arr[ind].GroupT1R, GroupT1L: counter, GroupT2: arr[ind].GroupT2, GroupT2R: arr[ind].GroupT2R,GroupT2L: arr[ind].GroupT2L,GroupT3: arr[ind].GroupT3,GroupT3R: arr[ind].GroupT3R,GroupT3L: arr[ind].GroupT3L, GridT1: arr[ind].GridT1,GridT1R:arr[ind].GridT1R,GridT1L:arr[ind].GridT1L, GridT2: arr[ind].GridT2,GridT2R:arr[ind].GridT2R,GridT2L:arr[ind].GridT2L, GridT3: arr[ind].GridT3,GridT3R:arr[ind].GridT3R, GridT3L:arr[ind].GridT3L,GridT4: arr[ind].GridT4,GridT4R:arr[ind].GridT4R,GridT4L:arr[ind].GridT4L});
			break;
			
		case "GroupT2":
			arr.push({dateRec: date, GroupT1: arr[ind].GroupT1,GroupT1R:arr[ind].GroupT1R , GroupT1L: arr[ind].GroupT1L,GroupT2: counter, GroupT2R: arr[ind].GroupT2R,GroupT2L: arr[ind].GroupT2L,GroupT3: arr[ind].GroupT3,GroupT3R: arr[ind].GroupT3R,GroupT3L: arr[ind].GroupT3L, GridT1: arr[ind].GridT1,GridT1R:arr[ind].GridT1R,GridT1L:arr[ind].GridT1L, GridT2: arr[ind].GridT2,GridT2R:arr[ind].GridT2R,GridT2L:arr[ind].GridT2L, GridT3: arr[ind].GridT3,GridT3R:arr[ind].GridT3R, GridT3L:arr[ind].GridT3L,GridT4: arr[ind].GridT4,GridT4R:arr[ind].GridT4R,GridT4L:arr[ind].GridT4L});
			break;
		
		case "GroupT2R":
			arr.push({dateRec: date, GroupT1: arr[ind].GroupT1,GroupT1R:arr[ind].GroupT1R , GroupT1L: arr[ind].GroupT1L,GroupT2: arr[ind].GroupT2, GroupT2R: counter,GroupT2L: arr[ind].GroupT2L,GroupT3: arr[ind].GroupT3,GroupT3R: arr[ind].GroupT3R, GroupT3L: arr[ind].GroupT3L,GridT1: arr[ind].GridT1, GridT1R:arr[ind].GridT1R,GridT1L:arr[ind].GridT1L, GridT2: arr[ind].GridT2,GridT2R:arr[ind].GridT2R,GridT2L:arr[ind].GridT2L, GridT3: arr[ind].GridT3,GridT3R:arr[ind].GridT3R, GridT3L:arr[ind].GridT3L,GridT4: arr[ind].GridT4,GridT4R:arr[ind].GridT4R,GridT4L:arr[ind].GridT4L});
			break;
			
		case "GroupT2L":
			arr.push({dateRec: date, GroupT1: arr[ind].GroupT1,GroupT1R: arr[ind].GroupT1R, GroupT1L: arr[ind].GroupT1L, GroupT2: arr[ind].GroupT2, GroupT2R: arr[ind].GroupT2R,GroupT2L: counter,GroupT3: arr[ind].GroupT3,GroupT3R: arr[ind].GroupT3R,GroupT3L: arr[ind].GroupT3L,GridT1: arr[ind].GridT1,GridT1R:arr[ind].GridT1R,GridT1L:arr[ind].GridT1L, GridT2: arr[ind].GridT2,GridT2R:arr[ind].GridT2R,GridT2L:arr[ind].GridT2L, GridT3: arr[ind].GridT3,GridT3R:arr[ind].GridT3R, GridT3L:arr[ind].GridT3L,GridT4: arr[ind].GridT4,GridT4R:arr[ind].GridT4R,GridT4L:arr[ind].GridT4L});
			break;	
			
		case "GroupT3":
			arr.push({dateRec: date, GroupT1: arr[ind].GroupT1,GroupT1R:arr[ind].GroupT1R , GroupT1L: arr[ind].GroupT1L,GroupT2: arr[ind].GroupT2, GroupT2R: arr[ind].GroupT2R,GroupT2L: arr[ind].GroupT2L,GroupT3: counter,GroupT3R: arr[ind].GroupT3R,GroupT3L: arr[ind].GroupT3L, GridT1: arr[ind].GridT1,GridT1R:arr[ind].GridT1R,GridT1L:arr[ind].GridT1L, GridT2: arr[ind].GridT2,GridT2R:arr[ind].GridT2R,GridT2L:arr[ind].GridT2L, GridT3: arr[ind].GridT3,GridT3R:arr[ind].GridT3R, GridT3L:arr[ind].GridT3L,GridT4: arr[ind].GridT4,GridT4R:arr[ind].GridT4R,GridT4L:arr[ind].GridT4L});
			break;	
			
		case "GroupT3R":
			arr.push({dateRec: date, GroupT1: arr[ind].GroupT1,GroupT1R:arr[ind].GroupT1R , GroupT1L: arr[ind].GroupT1L,GroupT2: arr[ind].GroupT2, GroupT2R: arr[ind].GroupT2R,GroupT2L: arr[ind].GroupT2L,GroupT3: arr[ind].GroupT3,GroupT3R: counter, GroupT3L: arr[ind].GroupT3L,GridT1: arr[ind].GridT1,GridT1R:arr[ind].GridT1R,GridT1L:arr[ind].GridT1L, GridT2: arr[ind].GridT2,GridT2R:arr[ind].GridT2R,GridT2L:arr[ind].GridT2L, GridT3: arr[ind].GridT3,GridT3R:arr[ind].GridT3R, GridT3L:arr[ind].GridT3L,GridT4: arr[ind].GridT4,GridT4R:arr[ind].GridT4R,GridT4L:arr[ind].GridT4L});
			break;		
		
		case "GroupT3L":
			arr.push({dateRec: date, GroupT1: arr[ind].GroupT1,GroupT1R:arr[ind].GroupT1R , GroupT1L: arr[ind].GroupT1L,GroupT2: arr[ind].GroupT2, GroupT2R: arr[ind].GroupT2R,GroupT2L: arr[ind].GroupT2L,GroupT3: arr[ind].GroupT3,GroupT3R: arr[ind].GroupT3R,GroupT3L: counter, GridT1: arr[ind].GridT1,GridT1R:arr[ind].GridT1R,GridT1L:arr[ind].GridT1L, GridT2: arr[ind].GridT2,GridT2R:arr[ind].GridT2R,GridT2L:arr[ind].GridT2L, GridT3: arr[ind].GridT3,GridT3R:arr[ind].GridT3R, GridT3L:arr[ind].GridT3L,GridT4: arr[ind].GridT4,GridT4R:arr[ind].GridT4R,GridT4L:arr[ind].GridT4L});
			break;	
		
		case "GridT1":
			arr.push({dateRec: date, GroupT1: arr[ind].GroupT1,GroupT1R:arr[ind].GroupT1R , GroupT1L: arr[ind].GroupT1L,GroupT2: arr[ind].GroupT2, GroupT2R: arr[ind].GroupT2R,GroupT2L: arr[ind].GroupT2L,GroupT3: arr[ind].GroupT3,GroupT3R: arr[ind].GroupT3R,GroupT3L: arr[ind].GroupT3L, GridT1: counter,GridT1R:arr[ind].GridT1R,GridT1L:arr[ind].GridT1L, GridT2: arr[ind].GridT2,GridT2R:arr[ind].GridT2R,GridT2L:arr[ind].GridT2L, GridT3: arr[ind].GridT3,GridT3R:arr[ind].GridT3R, GridT3L:arr[ind].GridT3L,GridT4: arr[ind].GridT4,GridT4R:arr[ind].GridT4R,GridT4L:arr[ind].GridT4L});
			break;
			
		case "GridT1R":
			arr.push({dateRec: date, GroupT1: arr[ind].GroupT1,GroupT1R:arr[ind].GroupT1R , GroupT1L: arr[ind].GroupT1L,GroupT2: arr[ind].GroupT2, GroupT2R: arr[ind].GroupT2R,GroupT2L: arr[ind].GroupT2L,GroupT3: arr[ind].GroupT3,GroupT3R: arr[ind].GroupT3R,GroupT3L: arr[ind].GroupT3L, GridT1: arr[ind].GridT1,GridT1R:counter,GridT1L:arr[ind].GridT1L, GridT2: arr[ind].GridT2,GridT2R:arr[ind].GridT2R,GridT2L:arr[ind].GridT2L, GridT3: arr[ind].GridT3,GridT3R:arr[ind].GridT3R, GridT3L:arr[ind].GridT3L,GridT4: arr[ind].GridT4,GridT4R:arr[ind].GridT4R,GridT4L:arr[ind].GridT4L});
			break;	
			
		case "GridT1L":
			arr.push({dateRec: date, GroupT1: arr[ind].GroupT1,GroupT1R:arr[ind].GroupT1R , GroupT1L: arr[ind].GroupT1L,GroupT2: arr[ind].GroupT2, GroupT2R: arr[ind].GroupT2R,GroupT2L: arr[ind].GroupT2L,GroupT3: arr[ind].GroupT3,GroupT3R: arr[ind].GroupT3R,GroupT3L: arr[ind].GroupT3L, GridT1: arr[ind].GridT1,GridT1R:arr[ind].GridT1R,GridT1L:counter, GridT2: arr[ind].GridT2,GridT2R:arr[ind].GridT2R,GridT2L:arr[ind].GridT2L, GridT3: arr[ind].GridT3,GridT3R:arr[ind].GridT3R, GridT3L:arr[ind].GridT3L,GridT4: arr[ind].GridT4,GridT4R:arr[ind].GridT4R,GridT4L:arr[ind].GridT4L});
			break;		
			
		case "GridT2":
			arr.push({dateRec: date, GroupT1: arr[ind].GroupT1, GroupT1R:arr[ind].GroupT1R, GroupT1L: arr[ind].GroupT1L,GroupT2: arr[ind].GroupT2, GroupT2R: arr[ind].GroupT2R,GroupT2L: arr[ind].GroupT2L,GroupT3: arr[ind].GroupT3,GroupT3R: arr[ind].GroupT3R,GroupT3L: arr[ind].GroupT3L, GridT1: arr[ind].GridT1,GridT1R:arr[ind].GridT1R, GridT1L:arr[ind].GridT1L, GridT2: counter,GridT2R:arr[ind].GridT2R,GridT2L:arr[ind].GridT2L, GridT3: arr[ind].GridT3,GridT3R:arr[ind].GridT3R, GridT3L:arr[ind].GridT3L,GridT4: arr[ind].GridT4,GridT4R:arr[ind].GridT4R,GridT4L:arr[ind].GridT4L});
			break;
			
		case "GridT2R":
			arr.push({dateRec: date, GroupT1: arr[ind].GroupT1,GroupT1R:arr[ind].GroupT1R , GroupT1L: arr[ind].GroupT1L,GroupT2: arr[ind].GroupT2, GroupT2R: arr[ind].GroupT2R,GroupT2L: arr[ind].GroupT2L, GroupT3: arr[ind].GroupT3,GroupT3R: arr[ind].GroupT3R,GroupT3L: arr[ind].GroupT3L,GridT1: arr[ind].GridT1,GridT1R:arr[ind].GridT1R,GridT1L:arr[ind].GridT1L, GridT2: arr[ind].GridT2,GridT2R:counter,GridT2L:arr[ind].GridT2L, GridT3: arr[ind].GridT3,GridT3R:arr[ind].GridT3R, GridT3L:arr[ind].GridT3L,GridT4: arr[ind].GridT4,GridT4R:arr[ind].GridT4R,GridT4L:arr[ind].GridT4L});
			break;	
			
		case "GridT2L":
			arr.push({dateRec: date, GroupT1: arr[ind].GroupT1,GroupT1R:arr[ind].GroupT1R , GroupT1L: arr[ind].GroupT1L,GroupT2: arr[ind].GroupT2, GroupT2R: arr[ind].GroupT2R,GroupT2L: arr[ind].GroupT2L,GroupT3: arr[ind].GroupT3,GroupT3R: arr[ind].GroupT3R, GroupT3L: arr[ind].GroupT3L,GridT1: arr[ind].GridT1,GridT1R:arr[ind].GridT1R,GridT1L:arr[ind].GridT1L, GridT2: arr[ind].GridT2,GridT2R:arr[ind].GridT2R,GridT2L:counter, GridT3: arr[ind].GridT3,GridT3R:arr[ind].GridT3R, GridT3L:arr[ind].GridT3L,GridT4: arr[ind].GridT4,GridT4R:arr[ind].GridT4R,GridT4L:arr[ind].GridT4L});
			break;		
		
		case "GridT3":
			arr.push({dateRec: date, GroupT1: arr[ind].GroupT1, GroupT1R:arr[ind].GroupT1R, GroupT1L: arr[ind].GroupT1L,GroupT2: arr[ind].GroupT2, GroupT2R: arr[ind].GroupT2R,GroupT2L: arr[ind].GroupT2L,GroupT3: arr[ind].GroupT3, GroupT3R: arr[ind].GroupT3R,GroupT3L: arr[ind].GroupT3L,GridT1: arr[ind].GridT1,GridT1R:arr[ind].GridT1R, GridT1L:arr[ind].GridT1L, GridT2: arr[ind].GridT2,GridT2R:arr[ind].GridT2R,GridT2L:arr[ind].GridT2L, GridT3: counter,GridT3R:arr[ind].GridT3R, GridT3L:arr[ind].GridT3L,GridT4: arr[ind].GridT4,GridT4R:arr[ind].GridT4R,GridT4L:arr[ind].GridT4L});
			break;
			
		case "GridT3R":
			arr.push({dateRec: date, GroupT1: arr[ind].GroupT1,GroupT1R:arr[ind].GroupT1R , GroupT1L: arr[ind].GroupT1L,GroupT2: arr[ind].GroupT2, GroupT2R: arr[ind].GroupT2R,GroupT2L: arr[ind].GroupT2L,GroupT3: arr[ind].GroupT3,GroupT3R: arr[ind].GroupT3R, GroupT3L: arr[ind].GroupT3L,GridT1: arr[ind].GridT1,GridT1R:arr[ind].GridT1R,GridT1L:arr[ind].GridT1L, GridT2: arr[ind].GridT2,GridT2R:arr[ind].GridT2R,GridT2L:arr[ind].GridT2L, GridT3: arr[ind].GridT3,GridT3R:counter, GridT3L:arr[ind].GridT3L,GridT4: arr[ind].GridT4,GridT4R:arr[ind].GridT4R,GridT4L:arr[ind].GridT4L});
			break;

		case "GridT3L":
			arr.push({dateRec: date, GroupT1: arr[ind].GroupT1,GroupT1R:arr[ind].GroupT1R , GroupT1L: arr[ind].GroupT1L,GroupT2: arr[ind].GroupT2, GroupT2R: arr[ind].GroupT2R,GroupT2L: arr[ind].GroupT2L,GroupT3: arr[ind].GroupT3,GroupT3R: arr[ind].GroupT3R, GroupT3L: arr[ind].GroupT3L,GridT1: arr[ind].GridT1,GridT1R:arr[ind].GridT1R,GridT1L:arr[ind].GridT1L, GridT2: arr[ind].GridT2,GridT2R:arr[ind].GridT2R,GridT2L:arr[ind].GridT2L, GridT3: arr[ind].GridT3,GridT3R:arr[ind].GridT3R, GridT3L:counter,GridT4: arr[ind].GridT4,GridT4R:arr[ind].GridT4R,GridT4L:arr[ind].GridT4L});
			break;	
			
		case "GridT4":
			arr.push({dateRec: date, GroupT1: arr[ind].GroupT1, GroupT1R:arr[ind].GroupT1R, GroupT1L: arr[ind].GroupT1L,GroupT2: arr[ind].GroupT2, GroupT2R: arr[ind].GroupT2R,GroupT2L: arr[ind].GroupT2L,GroupT3: arr[ind].GroupT3, GroupT3R: arr[ind].GroupT3R,GroupT3L: arr[ind].GroupT3L,GridT1: arr[ind].GridT1,GridT1R:arr[ind].GridT1R, GridT1L:arr[ind].GridT1L, GridT2: arr[ind].GridT2,GridT2R:arr[ind].GridT2R,GridT2L:arr[ind].GridT2L, GridT3: arr[ind].GridT3,GridT3R:arr[ind].GridT3R, GridT3L:arr[ind].GridT3L,GridT4: counter,GridT4R:arr[ind].GridT4R,GridT4L:arr[ind].GridT4L});
			break;	
			
		case "GridT4R":
			arr.push({dateRec: date, GroupT1: arr[ind].GroupT1, GroupT1R:arr[ind].GroupT1R, GroupT1L: arr[ind].GroupT1L,GroupT2: arr[ind].GroupT2, GroupT2R: arr[ind].GroupT2R,GroupT2L: arr[ind].GroupT2L,GroupT3: arr[ind].GroupT3, GroupT3R: arr[ind].GroupT3R,GroupT3L: arr[ind].GroupT3L,GridT1: arr[ind].GridT1,GridT1R:arr[ind].GridT1R, GridT1L:arr[ind].GridT1L, GridT2: arr[ind].GridT2,GridT2R:arr[ind].GridT2R,GridT2L:arr[ind].GridT2L, GridT3: arr[ind].GridT3,GridT3R:arr[ind].GridT3R, GridT3L:arr[ind].GridT3L,GridT4: arr[ind].GridT4,GridT4R: counter,GridT4L:arr[ind].GridT4L});
			break;	

		case "GridT4L":
			arr.push({dateRec: date, GroupT1: arr[ind].GroupT1, GroupT1R:arr[ind].GroupT1R, GroupT1L: arr[ind].GroupT1L,GroupT2: arr[ind].GroupT2, GroupT2R: arr[ind].GroupT2R,GroupT2L: arr[ind].GroupT2L,GroupT3: arr[ind].GroupT3, GroupT3R: arr[ind].GroupT3R,GroupT3L: arr[ind].GroupT3L,GridT1: arr[ind].GridT1,GridT1R:arr[ind].GridT1R, GridT1L:arr[ind].GridT1L, GridT2: arr[ind].GridT2,GridT2R:arr[ind].GridT2R,GridT2L:arr[ind].GridT2L, GridT3: arr[ind].GridT3,GridT3R:arr[ind].GridT3R, GridT3L:arr[ind].GridT3L,GridT4: arr[ind].GridT4,GridT4R:arr[ind].GridT4R,GridT4L: counter});
			break;		
		
		default:
			alert("Error");
		}
		arr.splice( ind, 1 );
		break;
			}
		}
		}
		if(flag==0) //means no date record thus create new one with zeros for other topics
		{
		switch(Topic){
		case "GroupT1":
			arr.push({dateRec: date, GroupT1: counter,GroupT1R:0, GroupT1L:0,GroupT2: 0,GroupT2R: 0,GroupT2L:0, GroupT3: 0,GroupT3R: 0,GroupT3L: 0,GridT1: 0,GridT1R: 0,GridT1L: 0, GridT2: 0,GridT2R: 0,GridT2L: 0, GridT3: 0,GridT3R:0,GridT3L: 0,GridT4: 0,GridT4R: 0,GridT4L: 0});
			break;
		
		case "GroupT1R":
			arr.push({dateRec: date, GroupT1: 0, GroupT1R: counter,GroupT1L:0,GroupT2: 0,GroupT2R: 0,GroupT2L:0, GroupT3: 0,GroupT3R: 0,GroupT3L: 0,GridT1: 0,GridT1R: 0,GridT1L: 0, GridT2: 0,GridT2R: 0,GridT2L: 0, GridT3: 0,GridT3R:0,GridT3L: 0,GridT4: 0,GridT4R: 0,GridT4L: 0});
			break;
		
		case "GroupT1L":
			arr.push({dateRec: date, GroupT1: 0, GroupT1R:0, GroupT1L: counter,GroupT2: 0,GroupT2R: 0,GroupT2L:0, GroupT3: 0,GroupT3R: 0,GroupT3L: 0,GridT1: 0,GridT1R: 0,GridT1L: 0, GridT2: 0,GridT2R: 0,GridT2L: 0, GridT3: 0,GridT3R:0,GridT3L: 0,GridT4: 0,GridT4R: 0,GridT4L: 0});
			break;
			
		case "GroupT2":
			arr.push({dateRec: date, GroupT1: 0, GroupT1R:0, GroupT1L:0,GroupT2: counter,GroupT2R: 0,GroupT2L:0,GroupT3: 0,GroupT3R: 0, GroupT3L: 0,GridT1: 0,GridT1R: 0,GridT1L: 0, GridT2: 0,GridT2R: 0,GridT2L: 0, GridT3: 0,GridT3R:0,GridT3L: 0,GridT4: 0,GridT4R: 0,GridT4L: 0});
			break;
			
		case "GroupT2R":
			arr.push({dateRec: date, GroupT1: 0, GroupT1R: 0,GroupT1L:0,GroupT2: 0, GroupT2R: counter,GroupT2L:0,GroupT3: 0,GroupT3R: 0,GroupT3L: 0, GridT1: 0,GridT1R: 0,GridT1L: 0, GridT2: 0,GridT2R: 0,GridT2L: 0, GridT3: 0,GridT3R:0,GridT3L: 0,GridT4: 0,GridT4R: 0,GridT4L: 0});
			break;	
			
		case "GroupT2L":
			arr.push({dateRec: date, GroupT1: 0, GroupT1R: 0,GroupT1L:0,GroupT2: 0, GroupT2R: 0,GroupT2L:counter, GroupT3: 0,GroupT3R: 0,GroupT3L: 0,GridT1: 0,GridT1R: 0,GridT1L: 0, GridT2: 0,GridT2R: 0,GridT2L: 0, GridT3: 0,GridT3R:0,GridT3L: 0,GridT4: 0,GridT4R: 0,GridT4L: 0});
			break;	
			
		case "GroupT3":
			arr.push({dateRec: date, GroupT1: 0, GroupT1R:0, GroupT1L:0,GroupT2: 0,GroupT2R: 0,GroupT2L:0, GroupT3: counter,GroupT3R: 0,GroupT3L: 0,GridT1: 0,GridT1R: 0,GridT1L: 0, GridT2: 0,GridT2R: 0,GridT2L: 0, GridT3: 0,GridT3R:0,GridT3L: 0,GridT4: 0,GridT4R: 0,GridT4L: 0});
			break;	
			
		case "GroupT3R":
			arr.push({dateRec: date, GroupT1: 0, GroupT1R:0, GroupT1L:0,GroupT2: 0,GroupT2R: 0,GroupT2L:0, GroupT3: 0,GroupT3R: counter,GroupT3L: 0,GridT1: 0,GridT1R: 0,GridT1L: 0, GridT2: 0,GridT2R: 0,GridT2L: 0, GridT3: 0,GridT3R:0,GridT3L: 0,GridT4: 0,GridT4R: 0,GridT4L: 0});
			break;	

		case "GroupT3L":
			arr.push({dateRec: date, GroupT1: 0, GroupT1R:0, GroupT1L:0,GroupT2: 0,GroupT2R: 0,GroupT2L:0, GroupT3: 0,GroupT3R: 0,GroupT3L: counter,GridT1: 0,GridT1R: 0,GridT1L: 0, GridT2: 0,GridT2R: 0,GridT2L: 0, GridT3: 0,GridT3R:0,GridT3L: 0,GridT4: 0,GridT4R: 0,GridT4L: 0});
			break;	
		
		case "GridT1":
			arr.push({dateRec: date, GroupT1: 0, GroupT1R:0, GroupT1L:0,GroupT2: 0,GroupT2R: 0,GroupT2L:0, GroupT3: 0,GroupT3R: 0,GroupT3L: 0,GridT1: counter,GridT1R: 0,GridT1L: 0, GridT2: 0,GridT2R: 0,GridT2L: 0, GridT3: 0,GridT3R:0,GridT3L: 0,GridT4: 0,GridT4R: 0,GridT4L: 0});
			break;
			
		case "GridT1R":
			arr.push({dateRec: date, GroupT1: 0, GroupT1R:0, GroupT1L:0,GroupT2: 0,GroupT2R: 0,GroupT2L:0, GroupT3: 0,GroupT3R: 0,GroupT3L: 0,GridT1: 0,GridT1R: counter,GridT1L: 0, GridT2: 0,GridT2R: 0,GridT2L: 0, GridT3: 0,GridT3R:0,GridT3L: 0,GridT4: 0,GridT4R: 0,GridT4L: 0});
			break;	
			
		case "GridT1L":
			arr.push({dateRec: date, GroupT1: 0, GroupT1R:0, GroupT1L:0,GroupT2: 0,GroupT2R: 0,GroupT2L:0, GroupT3: 0,GroupT3R: 0,GroupT3L: 0,GridT1: 0,GridT1R: 0,GridT1L: counter, GridT2: 0,GridT2R: 0,GridT2L: 0, GridT3: 0,GridT3R:0,GridT3L: 0,GridT4: 0,GridT4R: 0,GridT4L: 0});
			break;		
			
		case "GridT2":
			arr.push({dateRec: date, GroupT1: 0, GroupT1R:0, GroupT1L:0,GroupT2: 0,GroupT2R: 0,GroupT2L:0,GroupT3: 0, GroupT3R: 0,GroupT3L: 0,GridT1: 0,GridT1R: 0,GridT1L: 0, GridT2: counter,GridT2R: 0,GridT2L: 0, GridT3: 0,GridT3R:0,GridT3L: 0,GridT4: 0,GridT4R: 0,GridT4L: 0});
			break;
			
		case "GridT2R":
			arr.push({dateRec: date, GroupT1: 0, GroupT1R:0, GroupT1L:0,GroupT2: 0,GroupT2R: 0,GroupT2L:0, GroupT3: 0,GroupT3R: 0,GroupT3L: 0,GridT1: 0,GridT1R: 0,GridT1L: 0, GridT2: 0,GridT2R: counter,GridT2L: 0, GridT3: 0,GridT3R:0,GridT3L: 0,GridT4: 0,GridT4R: 0,GridT4L: 0});
			break;

		case "GridT2L":
			arr.push({dateRec: date, GroupT1: 0, GroupT1R:0, GroupT1L:0,GroupT2: 0,GroupT2R: 0,GroupT2L:0, GroupT3: 0,GroupT3R: 0,GroupT3L: 0,GridT1: 0,GridT1R: 0,GridT1L: 0, GridT2: 0,GridT2R: 0,GridT2L: counter,GridT3: 0,GridT3R:0,GridT3L: 0,GridT4: 0,GridT4R: 0,GridT4L: 0});
			break;
		
		case "GridT3":
			arr.push({dateRec: date, GroupT1: 0, GroupT1R:0, GroupT1L:0,GroupT2: 0,GroupT2R: 0,GroupT2L:0, GroupT3: 0,GroupT3R: 0,GroupT3L: 0,GridT1: 0,GridT1R: 0,GridT1L: 0, GridT2: 0, GridT2R: 0,GridT2L: 0,GridT3: counter,GridT3R:0,GridT3L: 0,GridT4: 0,GridT4R: 0,GridT4L: 0});
			break;
			
		case "GridT3R":
			arr.push({dateRec: date, GroupT1: 0, GroupT1R:0, GroupT1L:0,GroupT2: 0,GroupT2R: 0,GroupT2L:0, GroupT3: 0,GroupT3R: 0,GroupT3L: 0,GridT1: 0,GridT1R: 0,GridT1L: 0, GridT2: 0,GridT2R: 0,GridT2L: 0, GridT3: 0,GridT3R: counter,GridT3L: 0,GridT4: 0,GridT4R: 0,GridT4L: 0});
			break;

		case "GridT3L":
			arr.push({dateRec: date, GroupT1: 0, GroupT1R:0, GroupT1L:0,GroupT2: 0,GroupT2R: 0,GroupT2L:0, GroupT3: 0,GroupT3R: 0,GroupT3L: 0,GridT1: 0,GridT1R: 0,GridT1L: 0, GridT2: 0,GridT2R: 0,GridT2L: 0, GridT3: 0,GridT3R: 0,GridT3L: counter,GridT4: 0,GridT4R: 0,GridT4L: 0});
			break;
			
		case "GridT4":
			arr.push({dateRec: date, GroupT1: 0, GroupT1R:0, GroupT1L:0,GroupT2: 0,GroupT2R: 0,GroupT2L:0, GroupT3: 0,GroupT3R: 0,GroupT3L: 0,GridT1: 0,GridT1R: 0,GridT1L: 0, GridT2: 0, GridT2R: 0,GridT2L: 0,GridT3: 0,GridT3R:0,GridT3L: 0,GridT4: counter,GridT4R: 0,GridT4L: 0});
			break;

		case "GridT4R":
			arr.push({dateRec: date, GroupT1: 0, GroupT1R:0, GroupT1L:0,GroupT2: 0,GroupT2R: 0,GroupT2L:0, GroupT3: 0,GroupT3R: 0,GroupT3L: 0,GridT1: 0,GridT1R: 0,GridT1L: 0, GridT2: 0, GridT2R: 0,GridT2L: 0,GridT3: 0,GridT3R:0,GridT3L: 0,GridT4: 0,GridT4R: counter,GridT4L: 0});
			break;
		
		case "GridT4L":
			arr.push({dateRec: date, GroupT1: 0, GroupT1R:0, GroupT1L:0,GroupT2: 0,GroupT2R: 0,GroupT2L:0, GroupT3: 0,GroupT3R: 0,GroupT3L: 0,GridT1: 0,GridT1R: 0,GridT1L: 0, GridT2: 0, GridT2R: 0,GridT2L: 0,GridT3: 0,GridT3R:0,GridT3L: 0,GridT4: 0,GridT4R: 0,GridT4L: counter});
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
data.addColumn('date', 'Date');
		 data.addColumn('number', 'Group T1'); //index 0
		  data.addColumn('number', 'Group T1 Radicals'); //index 1
		  data.addColumn('number', 'Group T1 Liberals'); //index 2
		data.addColumn('number','Group T2');  //index 3
		data.addColumn('number', 'Group T2 Radicals'); //index 4
		data.addColumn('number', 'Group T2 Liberals'); //index 5
		data.addColumn('number','Group T3');  //
		data.addColumn('number', 'Group T3 Radicals'); //index 4
		data.addColumn('number', 'Group T3 Liberals'); //index 5
		data.addColumn('number', 'Grid T1'); //index 6
		data.addColumn('number', 'Grid T1 Radicals'); //index 7
		data.addColumn('number', 'Grid T1 Liberals'); //index 8
		data.addColumn('number', 'Grid T2'); //index 9
		data.addColumn('number', 'Grid T2 Radicals'); //index 10
		data.addColumn('number', 'Grid T2 Liberals'); //index 11
		data.addColumn('number', 'Grid T3'); //index 12
		data.addColumn('number', 'Grid T3 Radicals'); //index 13
		data.addColumn('number', 'Grid T3 Liberals'); //index 14
		data.addColumn('number', 'Grid T4'); //index 
		data.addColumn('number', 'Grid T4 Radicals'); //
		data.addColumn('number', 'Grid T4 Liberals'); //
var year,month,day;	
var dArr;		
for(var i=0;i<arr.length;i++){
	//var dateParts = arr[i].dateRec.split('-');
	 dArr = new Date(arr[i].dateRec);
	 year= dArr.getFullYear();//parseInt(dateParts[0]);
	 month= dArr.getMonth();//parseInt(dateParts[1]) -1;
	day= dArr.getDate();//parseInt(dateParts[2]);
	//alert(year);
	data.addRows([
		[new Date(year, month ,day), arr[i].GroupT1,arr[i].GroupT1R,arr[i].GroupT1L,arr[i].GroupT2,arr[i].GroupT2R,arr[i].GroupT2L, arr[i].GroupT3,arr[i].GroupT3R,arr[i].GroupT3L,arr[i].GridT1,arr[i].GridT1R,arr[i].GridT1L,arr[i].GridT2,arr[i].GridT2R,arr[i].GridT2L,arr[i].GridT3,arr[i].GridT3R,arr[i].GridT3L,arr[i].GridT4,arr[i].GridT4R,arr[i].GridT4L]
		]);
}
//alert(arr.length);
chart.draw(data, {'colors': ['#003366', '#FF0000','#009944', '#1600FF','#006600','#9900CC','#00FF99','#00CCFF','#993377','#FF6600','#FF3366','#116644','#553322','#666699','#CC9900','#00CC66','#FF9999','#0033FF','#079966','#056599','#EF3333','#0095FF'],displayAnnotations: false});
chart.hideDataColumns([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]);
return;
}	  
	  
	  function handleClickT1(cb) {       
  if(document.getElementById('group1').checked){ //<!--show group topic1 curve-->
	chart.showDataColumns(0);	
		}
	else { //<!--show default chart-->
	//chart.showDataColumns(0);
	chart.hideDataColumns(0);	
	}	
}

 function handleClickT1R(cb) {       
  if(document.getElementById('group1R').checked){ //<!--show group topic1 R curve-->
	chart.showDataColumns(1);	        
		}
	else { //<!--show default chart-->
	//chart.showDataColumns(0);
	chart.hideDataColumns(1);	
	}	
}

 function handleClickT1L(cb) {       
  if(document.getElementById('group1L').checked){ //<!--show group topic1 L curve-->
	chart.showDataColumns(2);	        
		}
	else { //<!--show default chart-->
	//chart.showDataColumns(0);
	chart.hideDataColumns(2);	
	}	
}

////////////////////
	  function handleClickT2(cb) {       
  if(document.getElementById('group2').checked){ //<!--show group topic2 curve-->
	chart.showDataColumns(3);	        
		}
	else { 
	chart.hideDataColumns(3);	
	}	
}
function handleClickT2R(cb) {       
  if(document.getElementById('group2R').checked){ //<!--show group topic2 R curve-->
	chart.showDataColumns(4);	        
		}
	else { //<!--show default chart-->
	//chart.showDataColumns(0);
	chart.hideDataColumns(4);	
	}	
}

function handleClickT2L(cb) {       
  if(document.getElementById('group2L').checked){ //<!--show group topic2 R curve-->
	chart.showDataColumns(5);	        
		}
	else { //<!--show default chart-->
	//chart.showDataColumns(0);
	chart.hideDataColumns(5);	
	}	
}
 function handleClickGroupT3(cb) {       
  if(document.getElementById('group3').checked){ //<!--show group topic3 curve-->
	chart.showDataColumns(6);	
		}
	else { //<!--show default chart-->
	//chart.showDataColumns(0);
	chart.hideDataColumns(6);	
	}	
}
 function handleClickGroupT3R(cb) {       
  if(document.getElementById('group3R').checked){ //<!--show group topic3 curve-->
	chart.showDataColumns(7);	
		}
	else { //<!--show default chart-->
	//chart.showDataColumns(0);
	chart.hideDataColumns(7);	
	}	
}
 function handleClickGroupT3L(cb) {       
  if(document.getElementById('group3L').checked){ //<!--show group topic3 curve-->
	chart.showDataColumns(8);	
		}
	else { //<!--show default chart-->
	//chart.showDataColumns(0);
	chart.hideDataColumns(8);	
	}	
}

	  function handleClickT3(cb) {       
  if(document.getElementById('grid1').checked){ //<!--show grid topic1 curve-->
	chart.showDataColumns(9);	        
		}
	else { 
	chart.hideDataColumns(9);	
	}	
}
function handleClickT3R(cb) {       
  if(document.getElementById('grid1R').checked){ //<!--show grid topic1 R curve-->
	chart.showDataColumns(10);	        
		}
	else { //<!--show default chart-->
	//chart.showDataColumns(0);
	chart.hideDataColumns(10);	
	}	
}
function handleClickT3L(cb) {       
  if(document.getElementById('grid1L').checked){ //<!--show grid topic1 L curve-->
	chart.showDataColumns(11);	        
		}
	else { //<!--show default chart-->
	//chart.showDataColumns(0);
	chart.hideDataColumns(11);	
	}	
}

	  function handleClickT4(cb) {       
  if(document.getElementById('grid2').checked){ //<!--show grid topic2 curve-->
	chart.showDataColumns(12);	        
		}
	else { //<!--show default chart-->
	//chart.showDataColumns(0);
	chart.hideDataColumns(12);	
	}	
}
function handleClickT4R(cb) {       
  if(document.getElementById('grid2R').checked){ //<!--show grid topic2 R curve-->
	chart.showDataColumns(13);	        
		}
	else { //<!--show default chart-->
	//chart.showDataColumns(0);
	chart.hideDataColumns(13);	
	}	
}
function handleClickT4L(cb) {       
  if(document.getElementById('grid2L').checked){ //<!--show grid topic2 R curve-->
	chart.showDataColumns(14);	        
		}
	else { //<!--show default chart-->
	//chart.showDataColumns(0);
	chart.hideDataColumns(14);	
	}	
}

	  function handleClickT5(cb) {       
  if(document.getElementById('grid3').checked){ //<!--show grid topic3 curve-->
	chart.showDataColumns(15);	        
		}
	else { 
	chart.hideDataColumns(15);	
	}	
}
function handleClickT5R(cb) {       
  if(document.getElementById('grid3R').checked){ //<!--show grid topic3 R curve-->
	chart.showDataColumns(16);	        
		}
	else { 
	chart.hideDataColumns(16);	
	}	
}
function handleClickT5L(cb) {       
  if(document.getElementById('grid3L').checked){ //<!--show grid topic3 L curve-->
	chart.showDataColumns(17);	        
		}
	else { 
	chart.hideDataColumns(17);	
	}	
}

function handleClickT6(cb) {       
  if(document.getElementById('grid4').checked){ //<!--show grid topic4 curve-->
	chart.showDataColumns(18);	        
		}
	else { 
	chart.hideDataColumns(18);	
	}	
}
function handleClickT6R(cb) {       
  if(document.getElementById('grid4R').checked){ //<!--show grid topic4 r curve-->
	chart.showDataColumns(19);	        
		}
	else { 
	chart.hideDataColumns(19);	
	}	
}
function handleClickT6L(cb) {       
  if(document.getElementById('grid4L').checked){ //<!--show grid topic4 L curve-->
	chart.showDataColumns(20);	        
		}
	else { 
	chart.hideDataColumns(20);	
	}	
}
////////////////////    
