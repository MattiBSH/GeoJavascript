 //ballerup omegn
 
const gameArea = {
    "type": "Polygon",
    "coordinates": [
      [
        [
          12.178344726562498,
          55.815172308302344
        ],
        [
          12.1728515625,
          55.697711785689854
        ],
        [
          12.3541259765625,
          55.666742302380314
        ],
        [
          12.510681152343748,
          55.64194905593519
        ],
        [
          12.5518798828125,
          55.750303644490394
        ],
        [
          12.39532470703125,
          55.80899899270488
        ],
        [
          12.178344726562498,
          55.815172308302344
        ]
      ]
    ]
  }
   
   
  const players = [
    {
        "type": "Feature",
        "properties": {"name":"p1"},
        "geometry": {
          "type": "Point",
          "coordinates": [
            12.24151611328125,
            55.71318733251447
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {"name":"p2"},
        "geometry": {
          "type": "Point",
          "coordinates": [
            12.12066650390625,
            55.640398956687356
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {"name":"p3"},
        "geometry": {
          "type": "Point",
          "coordinates": [
            12.30194091796875,
            55.926124639200474
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {"name":"p4"},
        "geometry": {
          "type": "Point",
          "coordinates": [
            12.36785888671875,
            55.79356141947292
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {"name":"p5"},
        "geometry": {
          "type": "Point",
          "coordinates": [
            12.645263671875,
            55.593867449197575
          ]
        }
      }
  ]
   
  module.exports = { gameArea, players }