var rows,n=1,nbp;
var table = document.getElementById('myTable');



  db = openDatabase('patient', '1.0', "Exemple de manipulation d'une base de données", 2*1024*1024);
        db.transaction(function (tx) {
            tx.executeSql('SELECT * FROM patientcovid ORDER BY prio', [], function (tx, result) {
                 rows = result.rows;
                var tr = '<tr ><th>Identifiant</th><th>Priorite</th><th>Age</th><th>Code postal</th><th>Date Test</th></tr>';
				if(rows.length<5)
				{
				for (var i = 0; i < rows.length; i++) {
                    tr += '<tr>';
                    //  tr += '<td>' + rows[i].nom + '</td>';
              

                tr += '<td>' + result.rows.item(i).iden + '</td>';
                    tr += '<td>' + result.rows.item(i).prio + '</td>';
                    tr += '<td>' + result.rows.item(i).codePostal+ '</td>';
					 tr += '<td>' + result.rows.item(i).age+ '</td>';
					 tr += '<td>' + result.rows.item(i).dateTest+ '</td>';
                    tr += '</tr>';
                }
                document.getElementById('myTable').innerHTML = tr;
				}
				else{
                for (var i = 0; i <5 ; i++) {
                    tr += '<tr>';
                    //  tr += '<td>' + rows[i].nom + '</td>';
                

                tr += '<td>' + result.rows.item(i).iden + '</td>';
                    tr += '<td>' + result.rows.item(i).prio + '</td>';
                    tr += '<td>' + result.rows.item(i).codePostal+ '</td>';
					 tr += '<td>' + result.rows.item(i).age+ '</td>';
					 tr += '<td>' + result.rows.item(i).dateTest+ '</td>';
                    tr += '</tr>';

                }
               // document.getElementById('myTable').innerHTML = tr;
				}
				 nbp=rows.length/5;
if(nbp%5!=0)nbp++;
//if(nbp>=2){ document.getElementById('pg').append='  <a href="#" class="active">2</a>';


for(i=0;i<Math.floor(nbp);i++)
{
document.getElementById('pg').innerHTML=document.getElementById('pg').innerHTML+'<a id='+(i+1)+' href="#"onclick=charge1('+(i+1)+') ><div class="dropcap">'+(i+1)+'</div></a>';
}


            }, null);// en cas d'erreur elle return null;
        });
		/******************/
function charge1(nb){
 n=nb;
// document.getElementById("1").style.backgroundColor = "#4CAF50";
 for (i=1;i<=nbp ; i++) 
  {
    if (i==nb)
	{
	  document.getElementById(i).style.backgroundColor= "yellow";
	    document.getElementById(i).style.Color="black";
         document.getElementById(i).style.borderRadius= "5px";
	 }
	  else
	  {
	  document.getElementById(i).style.backgroundColor= "yellow";
	  }
  }
db = openDatabase('patient', '1.0', "Exemple de manipulation d'une base de données", 2*1024*1024);
        db.transaction(function (tx) {
            tx.executeSql('SELECT * FROM patientcovid ORDER BY prio', [], function (tx, result) {
                 rows = result.rows;
                var tr = '<tr ><th>Identifiant</th><th>Priorite</th><th>Age</th><th>Code postal</th><th>Date Test</th></tr>';
				if(rows.length<5 )
				{
				for (var i = 0; i <rows.length;  i++) {
				//alert(i);
                    tr += '<tr>';
                    //  tr += '<td>' + rows[i].nom + '</td>';
               

                tr += '<td>' + result.rows.item(i).iden + '</td>';
                    tr += '<td>' + result.rows.item(i).prio + '</td>';
                    tr += '<td>' + result.rows.item(i).codePostal+ '</td>';
					 tr += '<td>' + result.rows.item(i).age+ '</td>';
					 tr += '<td>' + result.rows.item(i).dateTest+ '</td>';
                    tr += '</tr>';

                }
                document.getElementById('myTable').innerHTML = tr;
				}
				else{
				
				if((nb*5>rows.length))
					{
				for (var  i=(nb-1)*5; i <rows.length;  i++) {
				//alert(i);
                    tr += '<tr>';
                    //  tr += '<td>' + rows[i].nom + '</td>';
              

                tr += '<td>' + result.rows.item(i).iden + '</td>';
                    tr += '<td>' + result.rows.item(i).prio + '</td>';
                    tr += '<td>' + result.rows.item(i).codePostal+ '</td>';
					 tr += '<td>' + result.rows.item(i).age+ '</td>';
					 tr += '<td>' + result.rows.item(i).dateTest+ '</td>';
                    tr += '</tr>';
                }
                document.getElementById('myTable').innerHTML = tr;
				}
				else{
                for (var i = (nb-1)*5; i <(nb-1)*5+5; i++) {
				//alert(i);
                    tr += '<tr>';
                    //  tr += '<td>' + rows[i].nom + '</td>';
                

                tr += '<td>' + result.rows.item(i).iden + '</td>';
                    tr += '<td>' + result.rows.item(i).prio + '</td>';
                    tr += '<td>' + result.rows.item(i).codePostal+ '</td>';
					 tr += '<td>' + result.rows.item(i).age+ '</td>';
					 tr += '<td>' + result.rows.item(i).dateTest+ '</td>';
                    tr += '</tr>';

                }
                document.getElementById('myTable').innerHTML = tr;
                  }
				  }
				 
                }, null);// en cas d'erreur elle return null;
                });

}
function precedent(){
if(n!=1)
{
n--;
charge1(n);
}
}
function suivant(){
if(n!=Math.floor(nbp))
{
n++;
charge1(n);
}
}


function chercher() {
  var input, filter, table, tr, td, i,min,max;

  var iden=document.getElementById("numIdentif").value;
  
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
for (i = 0; i < tr.length; i++) {
   td = tr[i].getElementsByTagName("td")[0];
    if (td) {
	 if (td.innerHTML==iden){
	
        tr[i].style.display = "";
		}
      
	  else {
        tr[i].style.display = "none";
      }
	  } 
}
}





