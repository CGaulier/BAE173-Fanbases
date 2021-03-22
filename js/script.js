var data = [  
  {  
     "id":"1",
     "Fanbase_Name":"HxDFrance",
     "region":"France",
     "Twitter_Handle":"@HxDFrance",
     "Twitter_link": "https://twitter.com/HxDFrance",
     "date_end_project": "03/28/2021",
     "project": "95%",
     "Project_Name" : "Cool website",
     "profile_image":"https://pbs.twimg.com/profile_images/1306582944484659201/6-I7UUkB_400x400.jpg"
  },
  {  
     "id":"2",
     "Fanbase_Name":"HnD YT Ads",
     "region":"Worldwide",
     "Twitter_Handle":"@YTAdsHnD",
     "Twitter_link": "https://twitter.com/YTAdsHnD",
     "date_end_project": "06/04/2021",
     "project": "26%",
     "Project_Name" : "FUNDRAISING EVENT",
     "profile_image":"https://pbs.twimg.com/profile_images/1302593449162465280/LJ7pmjdN_400x400.jpg"
  },
    {  
      "id":"3",
      "Fanbase_Name":"BAE173 Philippines 🇵🇭",
      "region":"Philippines",
      "Twitter_Handle":"@BAE173PH",
      "Twitter_link": "https://twitter.com/BAE173PH",
      "date_end_project": "08/04/2021",
      "project": "83%",
      "Project_Name" : "Genie Streaming Project : Foundraising",
      "profile_image":"https://pbs.twimg.com/profile_images/1348080122490880001/A_sD6ZlW_400x400.jpg"
  },
  {  
    "id":"3",
    "Fanbase_Name":"BAE173 Philippines 🇵🇭",
    "region":"Philippines",
    "Twitter_Handle":"@BAE173PH",
    "Twitter_link": "https://twitter.com/BAE173PH",
    "date_end_project": "08/04/2021",
    "project": "43%",
    "Project_Name" : "Genie Streaming Project : streaming volunteers",
    "profile_image":"https://pbs.twimg.com/profile_images/1348080122490880001/A_sD6ZlW_400x400.jpg"
  },
  {  
    "id":"2",
    "Fanbase_Name":"BAE173 Indonesia",
    "region":"Indonesia",
    "Twitter_Handle":"@BAE173Indonesia",
    "Twitter_link": "https://twitter.com/BAE173Indonesia",
    "date_end_project": "08/04/2021",
    "project": "10%",
    "Project_Name" : "BAE173 COMEBACK ALBUM SUPPORT PROJECT : GA, freebies, Donation",
    "profile_image":"https://pbs.twimg.com/profile_images/1311880628246212608/ONoLK4DJ_400x400.jpg"
  }
];




$('#txt-search').keyup(function(){
  var searchField = $(this).val();
		if(searchField === '')  {
			$('#filter-records').html('');
		  return;
		}
			
    var regex = new RegExp(searchField, "i");
    var output = '<div class="container">';
    var count = 1;
    $.each(data, function(key, val){
    if ((val.region.search(regex) != -1) || (val.Fanbase_Name.search(regex) != -1) || (val.Project_Name.search(regex) != -1)) {
      output += '<div class="contain">';
      output += '<div class="img_hold"><img class="img-responsive" src="'+val.profile_image+'" alt="'+ val.Fanbase_Name +'" /></div>';
      output += '<div class="text">';
      output += '<h5>' + val.Fanbase_Name + '</h5>';
      output += '<p>' + val.region + '</p>'
      output += '<p> contact on Twitter : <a href='+val.Twitter_link+'>'+val.Twitter_Handle+'</a>'
      output += '<p> Cuurent project : ' + val.Project_Name + '</p>'
      output += '<div class="progress"><div class="progress-bar progress-bar-striped" role="progressbar" style="width: '+val.project+'" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div></div>'
      output += '<p> End on the ' + val.date_end_project + '</p>'
      output += '</div>';
      output += '</div>';
      if(count%2 == 0){
      output += '</div><div class="container">'
      }
      count++;
    }    
    });
    output += '</div>';
    $('#filter-records').html(output);
});