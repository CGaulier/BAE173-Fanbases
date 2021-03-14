var data = [  
  {  
     "id":"1",
     "Fanbase_Name":"HxDFrance",
     "region":"France",
     "Twitter_Handle":"@HxDFrance",
     "Twitter_link": "https://www.youtube.com/watch?v=_s9-rHqOwGM",
     "date_end_project": "2021/03/02",
     "project": "95%",
     "Project_Name" : "Youtube ad foundraising",
     "profile_image":"https://upload.wikimedia.org/wikipedia/en/thumb/6/6a/BAE173OfficialLogo.jpg/220px-BAE173OfficialLogo.jpg"
  },
  {  
     "id":"2",
     "Fanbase_Name":"BAE173 France",
     "region":"France",
     "Twitter_Handle":"@BAE173France",
     "Twitter_link": "https://www.youtube.com/watch?v=_s9-rHqOwGM",
     "date_end_project": "2021/03/02",
     "project": "95%",
     "Project_Name" : "Youtube ad foundraising",
     "profile_image":"https://upload.wikimedia.org/wikipedia/en/thumb/6/6a/BAE173OfficialLogo.jpg/220px-BAE173OfficialLogo.jpg"
  }
];




$('#txt-search').keyup(function(){
  var searchField = $(this).val();
		if(searchField === '')  {
			$('#filter-records').html('');
		  return;
		}
			
    var regex = new RegExp(searchField, "i");
    var output = '<div class="row">';
    var count = 1;
    $.each(data, function(key, val){
    if ((val.region.search(regex) != -1) || (val.Fanbase_Name.search(regex) != -1)) {
      output += '<div class="col-md-6 well">';
      output += '<div class="col-md-3"><img class="img-responsive" src="'+val.profile_image+'" alt="'+ val.Fanbase_Name +'" /></div>';
      output += '<div class="col-md-7">';
      output += '<h5>' + val.Fanbase_Name + '</h5>';
      output += '<p>' + val.region + '</p>'
      output += '<p> contact on Twitter : <a href='+val.Twitter_link+'>'+val.Twitter_Handle+'</a>'
      output += '<div class="progress"><div class="progress-bar progress-bar-striped" role="progressbar" style="width: '+val.project+'" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div></div>'
      output += '</div>';
      output += '</div>';
      if(count%2 == 0){
      output += '</div><div class="row">'
      }
      count++;
    }    
    });
    output += '</div>';
    $('#filter-records').html(output);
});