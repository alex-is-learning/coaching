```leaflet
id: svilland-map
# the image is 1536x1184 px
image: [[Svilland Map.png]]
# bounds uses y,x (CRS.Simple)
# bounds in miles (as per map scale: 1/(102px/35mi) = 0.34313725490196078431372549019608)
scale: 0.34313725490196078431372549019608
# lower-right x = width (px) * scale
# lower-right y = height (px) * scale
bounds: [[0,0], [406.27, 527.05]]
# after this, southwest = 0,0; northeast = 406.27, 527.05
height: 500px
# lat/long in percent doesn’t center
# does it not respect scale or bounds?
# would be easier if this was a coordinate in "bounds" range,
# as the "final" coordinates will be.
lat: 203.135
long: 263.525
minZoom: 0
maxZoom: 2
defaultZoom: 0
unit: miles
draw: true
```