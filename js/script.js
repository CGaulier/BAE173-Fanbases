  // Layers
  var layer = new ol.layer.Tile({ source: new ol.source.OSM() });
  
// The map
var map = new ol.Map ({
  target: 'map',
  view: new ol.View ({
    zoom: 1,
    center: [166326, 5992663]
  }),
  layers: [layer]
});

// Array to cache image style
var styleCache = {};
// Vector style
function getFeatureStyle (feature, resolution, sel) {
  var k = $('#kind').val()+"_"+$("#border").val()+"_"+feature.get("img").match(/[^\\/]+$/)[0]+($("#shadow").prop('checked')?"_1":"_0")+($("#crop").prop('checked')?"_1":"_0")+(sel?"_1":"");
  var style = styleCache[k];
  if (!style) {
    styleCache[k] = style = new ol.style.Style ({
      image: new ol.style.Photo ({
        src: feature.get("img"),
        radius: 20,
        crop: "checked",
        kind: "circle",
        shadow: 'checked',
        onload: function() { vector.changed(); },
        stroke: new ol.style.Stroke({
          width: sel ? 2 : 0,
          color: sel ? 'red' : '#fff'
        })
      })
    });
  }
  return [style];
}

// GeoJSON layer
var vectorSource = new ol.source.Vector({
  url: '../fanbases.geojson',
  projection: 'EPSG:3857',
  format: new ol.format.GeoJSON(),
  attributions: [ "&copy; <a href='https://data.culture.gouv.fr/explore/dataset/fonds-de-la-guerre-14-18-extrait-de-la-base-memoire'>data.culture.gouv.fr</a>" ],
  logo:"https://www.data.gouv.fr/s/avatars/37/e56718abd4465985ddde68b33be1ef.jpg" 
});

var vector = new ol.layer.Vector({
  name: '1914-18',
  preview: "http://www.culture.gouv.fr/Wave/image/memoire/2445/sap40_z0004141_v.jpg",
  source: vectorSource,
  // y ordering
  renderOrder: ol.ordering.yOrdering(),
  style: getFeatureStyle
});

map.addLayer(vector);

// Control Select 
var select = new ol.interaction.Select({
  condition: ol.events.condition.click,
  style: function (feature, resolution) { return getFeatureStyle(feature, resolution, true); }
})
map.addInteraction(select);

// onselect
select.getFeatures().on(['add','remove'], function(e) {
  if (e.type=="add") {
    var info = $("#select").html("<p>Selection:</p>");
    var el = e.element;
    $("<img>").attr('src',el.get("img")).appendTo(info);
    $("<h2>").text(el.get("Fanbase_Name")).appendTo(info);
    $("<p>").html('<p>Link to sns <a href='+el.get("Twitter_link")+'>'+el.get("Twitter_Handle")+'</a></p>').appendTo(info);
    $("<p>").html('Project '+el.get("Project_Name")+' is currently at :').appendTo(info);
    $("<div>").addClass('progress').html('<div class="progress-bar" role="progressbar" style="width:'+el.get("project")+';" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">'+el.get("project")+'</div>').appendTo(info);
    $("<p>").html('Project end the  '+el.get("date_end_project")+'').appendTo(info);
  }
  else $("#select").html("<p>Select an image.</p>");
});
