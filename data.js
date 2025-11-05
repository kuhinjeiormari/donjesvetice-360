var APP_DATA = {
  "scenes": [
    {
      "id": "0-hodnik",
      "name": "Hodnik",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.031104878698155147,
        "pitch": 0,
        "fov": 1.513008513283841
      },
      "linkHotspots": [
        {
          "yaw": -0.5037248438283406,
          "pitch": 0.1706627531443452,
          "rotation": 0,
          "target": "1-spavaca-soba"
        },
        {
          "yaw": 0.4620558845203355,
          "pitch": 0.16539239790040838,
          "rotation": 0,
          "target": "2-kupaona"
        },
        {
          "yaw": 0.03622013034402194,
          "pitch": 0.11045100868113167,
          "rotation": 0,
          "target": "3-ulaz-u-dnevni"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-spavaca-soba",
      "name": "Spavaca soba",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.6505997066486016,
          "pitch": 0.6300814353901636,
          "rotation": 0,
          "target": "0-hodnik"
        },
        {
          "yaw": 1.5175555551361217,
          "pitch": 0.047367673614848727,
          "rotation": 0,
          "target": "2-kupaona"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-kupaona",
      "name": "Kupaona",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.9487372964320926,
        "pitch": 0.04122639000773809,
        "fov": 1.513008513283841
      },
      "linkHotspots": [
        {
          "yaw": 1.3962300614226955,
          "pitch": 0.2074074447715688,
          "rotation": 0,
          "target": "1-spavaca-soba"
        },
        {
          "yaw": 1.2396944834256836,
          "pitch": 0.7211470602401366,
          "rotation": 0,
          "target": "0-hodnik"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-ulaz-u-dnevni",
      "name": "Ulaz u dnevni",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.12441951479263835,
        "pitch": 0,
        "fov": 1.513008513283841
      },
      "linkHotspots": [
        {
          "yaw": -2.4656890725717346,
          "pitch": 0.1654219524224274,
          "rotation": 0,
          "target": "0-hodnik"
        },
        {
          "yaw": -2.18054723084059,
          "pitch": 0.24991998760712875,
          "rotation": 0,
          "target": "1-spavaca-soba"
        },
        {
          "yaw": -2.8160956758190725,
          "pitch": 0.24935416304000135,
          "rotation": 0,
          "target": "2-kupaona"
        },
        {
          "yaw": 1.6226920772614788,
          "pitch": 0.5249007850779037,
          "rotation": 0,
          "target": "4-kuhinja"
        },
        {
          "yaw": -0.36858635154388963,
          "pitch": 0.4688709841079959,
          "rotation": 0,
          "target": "5-stol"
        },
        {
          "yaw": -0.7798136187233684,
          "pitch": 0.22089902470871792,
          "rotation": 0,
          "target": "6-dnevni"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-kuhinja",
      "name": "Kuhinja",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.9169611853371009,
        "pitch": -0.0327916828368906,
        "fov": 1.513008513283841
      },
      "linkHotspots": [
        {
          "yaw": -0.6686544909304715,
          "pitch": 0.5392075706696247,
          "rotation": 0,
          "target": "3-ulaz-u-dnevni"
        },
        {
          "yaw": 0.17840613905539726,
          "pitch": 0.19098773559327498,
          "rotation": 0,
          "target": "6-dnevni"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-stol",
      "name": "Stol",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.08275507945212368,
        "pitch": 0.05698089935835071,
        "fov": 1.513008513283841
      },
      "linkHotspots": [
        {
          "yaw": -1.6178457900877454,
          "pitch": 0.20737787429883703,
          "rotation": 0,
          "target": "3-ulaz-u-dnevni"
        },
        {
          "yaw": -1.8957242052068608,
          "pitch": 0.42471625325417506,
          "rotation": 0,
          "target": "4-kuhinja"
        },
        {
          "yaw": 0.6111396777241147,
          "pitch": 0.4053272373898906,
          "rotation": 0,
          "target": "6-dnevni"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-dnevni",
      "name": "Dnevni",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.0093314636094739,
        "pitch": 0.09275506673439438,
        "fov": 1.513008513283841
      },
      "linkHotspots": [
        {
          "yaw": -0.6245672308697756,
          "pitch": 0.6140732272658944,
          "rotation": 0,
          "target": "5-stol"
        },
        {
          "yaw": -0.18397084421892274,
          "pitch": 0.07408423455432,
          "rotation": 0,
          "target": "3-ulaz-u-dnevni"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Stan - Donje Svetice",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
