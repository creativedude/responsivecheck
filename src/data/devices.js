const devices = [
  {
    "name":"Apple iPhone X",
    "pheight":1125,
    "pwidth":2436,
    "width":375,
    "height":812,
    "pixratio":3,
    "ppi":458,
    "cssppi":288
  },
  {
    "name":"Apple iPhone 6+, 6s+, 7+, 8+",
    "pheight":1080,
    "pwidth":1920,
    "width":414,
    "height":736,
    "pixratio":3,
    "ppi":401,
    "cssppi":288
  },
  {
    "name":"Apple iPhone 7, iPhone 8",
    "pheight":750,
    "pwidth":1334,
    "width":375,
    "height":667,
    "pixratio":2,
    "ppi":326,
    "cssppi":192
  },
  {
    "name":"Apple iPhone 6, 6s",
    "pheight":750,
    "pwidth":1334,
    "width":375,
    "height":667,
    "pixratio":2,
    "ppi":326,
    "cssppi":192
  },
  {
    "name":"Apple iPhone 5",
    "pheight":640,
    "pwidth":1136,
    "width":320,
    "height":568,
    "pixratio":2,
    "ppi":326,
    "cssppi":192
  },
  {
    "name":"Apple iPhone 4",
    "pheight":640,
    "pwidth":960,
    "width":320,
    "height":480,
    "pixratio":2,
    "ppi":326,
    "cssppi":192
  },
  {
    "name":"Apple iPhone 3",
    "pheight":320,
    "pwidth":480,
    "width":320,
    "height":480,
    "pixratio":1,
    "ppi":163,
    "cssppi":96
  },
  {
    "name":"Apple iPod Touch",
    "pheight":640,
    "pwidth":1136,
    "width":320,
    "height":568,
    "pixratio":2,
    "ppi":326,
    "cssppi":192
  },
  {
    "name":"LG G5",
    "pheight":1440,
    "pwidth":2560,
    "width":360,
    "height":640,
    "pixratio":4,
    "ppi":538,
    "cssppi":384
  },
  {
    "name":"LG G4",
    "pheight":1440,
    "pwidth":2560,
    "width":360,
    "height":640,
    "pixratio":4,
    "ppi":538,
    "cssppi":384
  },
  {
    "name":"LG G3",
    "pheight":1440,
    "pwidth":2560,
    "width":360,
    "height":640,
    "pixratio":4,
    "ppi":538,
    "cssppi":384
  },
  {
    "name":"LG Optimus G",
    "pheight":768,
    "pwidth":1280,
    "width":384,
    "height":640,
    "pixratio":2,
    "ppi":318,
    "cssppi":192
  },
  {
    "name":"Samsung Galaxy S8+",
    "pheight":1440,
    "pwidth":2960,
    "width":360,
    "height":740,
    "pixratio":4,
    "ppi":529,
    "cssppi":384
  },
  {
    "name":"Samsung Galaxy S8",
    "pheight":1440,
    "pwidth":2960,
    "width":360,
    "height":740,
    "pixratio":4,
    "ppi":568,
    "cssppi":384
  },
  {
    "name":"Samsung Galaxy S7, S7 edge",
    "pheight":1440,
    "pwidth":2560,
    "width":360,
    "height":640,
    "pixratio":4,
    "ppi":534,
    "cssppi":384
  },
  {
    "name":"Samsung Galaxy S6",
    "pheight":1440,
    "pwidth":2560,
    "width":360,
    "height":640,
    "pixratio":4,
    "ppi":577,
    "cssppi":384
  },
  {
    "name":"Samsung Galaxy S5",
    "pheight":1080,
    "pwidth":1920,
    "width":360,
    "height":640,
    "pixratio":3,
    "ppi":441,
    "cssppi":288
  },
  {
    "name":"Samsung Galaxy S4",
    "pheight":1080,
    "pwidth":1920,
    "width":360,
    "height":640,
    "pixratio":3,
    "ppi":441,
    "cssppi":288
  },
  {
    "name":"Samsung Galaxy S4 mini",
    "pheight":540,
    "pwidth":960,
    "width":360,
    "height":640,
    "pixratio":1.5,
    "ppi":256,
    "cssppi":144
  },
  {
    "name":"Samsung Galaxy S3",
    "pheight":720,
    "pwidth":1280,
    "width":360,
    "height":640,
    "pixratio":2,
    "ppi":306,
    "cssppi":192
  },
  {
    "name":"Samsung Galaxy S3 mini",
    "pheight":480,
    "pwidth":800,
    "width":320,
    "height":533,
    "pixratio":1.5,
    "ppi":233,
    "cssppi":144
  },
  {
    "name":"Samsung Galaxy S2",
    "pheight":480,
    "pwidth":800,
    "width":320,
    "height":533,
    "pixratio":1.5,
    "ppi":217,
    "cssppi":144
  },
  {
    "name":"Samsung Galaxy S",
    "pheight":480,
    "pwidth":800,
    "width":320,
    "height":533,
    "pixratio":1.5,
    "ppi":233,
    "cssppi":144
  },
  {
    "name":"Samsung Galaxy Nexus",
    "pheight":720,
    "pwidth":1200,
    "width":360,
    "height":600,
    "pixratio":2,
    "ppi":316,
    "cssppi":192
  },
  {
    "name":"Samsung Galaxy Note 8",
    "pheight":1440,
    "pwidth":2960,
    "width":360,
    "height":740,
    "pixratio":4,
    "ppi":521,
    "cssppi":384
  },
  {
    "name":"Samsung Galaxy Note 4",
    "pheight":1440,
    "pwidth":2560,
    "width":360,
    "height":640,
    "pixratio":4,
    "ppi":515,
    "cssppi":384
  },
  {
    "name":"Samsung Galaxy Note 3",
    "pheight":1080,
    "pwidth":1920,
    "width":360,
    "height":640,
    "pixratio":3,
    "ppi":386,
    "cssppi":288
  },
  {
    "name":"Samsung Galaxy Note 2",
    "pheight":720,
    "pwidth":1280,
    "width":360,
    "height":640,
    "pixratio":2,
    "ppi":267,
    "cssppi":192
  },
  {
    "name":"Samsung Galaxy Note",
    "pheight":800,
    "pwidth":1280,
    "width":400,
    "height":640,
    "pixratio":2,
    "ppi":285,
    "cssppi":192
  },
  {
    "name":"LG Nexus 5",
    "pheight":1080,
    "pwidth":1920,
    "width":360,
    "height":640,
    "pixratio":3,
    "ppi":445,
    "cssppi":288
  },
  {
    "name":"LG Nexus 4",
    "pheight":768,
    "pwidth":1280,
    "width":384,
    "height":640,
    "pixratio":2,
    "ppi":320,
    "cssppi":192
  },
  {
    "name":"Microsoft Lumia 1520",
    "pheight":1080,
    "pwidth":1920,
    "width":432,
    "height":768,
    "pixratio":2.5,
    "ppi":367,
    "cssppi":240
  },
  {
    "name":"Microsoft Lumia 1020",
    "pheight":768,
    "pwidth":1280,
    "width":320,
    "height":480,
    "pixratio":2.4,
    "ppi":332,
    "cssppi":220
  },
  {
    "name":"Microsoft Lumia 925",
    "pheight":768,
    "pwidth":1280,
    "width":320,
    "height":480,
    "pixratio":2.4,
    "ppi":332,
    "cssppi":220
  },
  {
    "name":"Microsoft Lumia 920",
    "pheight":768,
    "pwidth":1280,
    "width":320,
    "height":480,
    "pixratio":2.4,
    "ppi":332,
    "cssppi":220
  },
  {
    "name":"Microsoft Lumia 900",
    "pheight":480,
    "pwidth":800,
    "width":320,
    "height":480,
    "pixratio":1.5,
    "ppi":217,
    "cssppi":144
  },
  {
    "name":"Microsoft Lumia 830",
    "pheight":720,
    "pwidth":1280,
    "width":320,
    "height":480,
    "pixratio":2,
    "ppi":294,
    "cssppi":192
  },
  {
    "name":"Microsoft Lumia 620",
    "pheight":480,
    "pwidth":800,
    "width":320,
    "height":480,
    "pixratio":1.5,
    "ppi":252,
    "cssppi":144
  },
  {
    "name":"Motorola Nexus 6",
    "pheight":1440,
    "pwidth":2560,
    "width":412,
    "height":690,
    "pixratio":3.5,
    "ppi":493,
    "cssppi":336
  },
  {
    "name":"HTC One",
    "pheight":1080,
    "pwidth":1920,
    "width":360,
    "height":640,
    "pixratio":3,
    "ppi":468,
    "cssppi":288
  },
  {
    "name":"HTC 8X",
    "pheight":720,
    "pwidth":1280,
    "width":320,
    "height":480,
    "pixratio":3,
    "ppi":341,
    "cssppi":288
  },
  {
    "name":"HTC Evo 3D",
    "pheight":540,
    "pwidth":960,
    "width":360,
    "height":640,
    "pixratio":1.5,
    "ppi":256,
    "cssppi":144
  },
  {
    "name":"Sony Xperia Z3",
    "pheight":1080,
    "pwidth":1920,
    "width":360,
    "height":598,
    "pixratio":3,
    "ppi":424,
    "cssppi":288
  },
  {
    "name":"Sony Xperia Z",
    "pheight":1080,
    "pwidth":1920,
    "width":360,
    "height":640,
    "pixratio":3,
    "ppi":443,
    "cssppi":288
  },
  {
    "name":"Sony Xperia S",
    "pheight":720,
    "pwidth":1280,
    "width":360,
    "height":640,
    "pixratio":2,
    "ppi":342,
    "cssppi":192
  },
  {
    "name":"Sony Xperia P",
    "pheight":540,
    "pwidth":960,
    "width":360,
    "height":640,
    "pixratio":1.5,
    "ppi":275,
    "cssppi":144
  },
  {
    "name":"Xiaomi Redmi Note 5",
    "pheight":1080,
    "pwidth":2160,
    "width":393,
    "height":786,
    "pixratio":2.75,
    "ppi":403,
    "cssppi":264
  },
  {
    "name":"Xiaomi Mi 4",
    "pheight":1080,
    "pwidth":1920,
    "width":360,
    "height":640,
    "pixratio":3,
    "ppi":441,
    "cssppi":288
  },
  {
    "name":"Xiaomi Mi 3",
    "pheight":1080,
    "pwidth":1920,
    "width":360,
    "height":640,
    "pixratio":3,
    "ppi":441,
    "cssppi":288
  },
  {
    "name":"Lenovo K900",
    "pheight":1080,
    "pwidth":1920,
    "width":360,
    "height":640,
    "pixratio":3,
    "ppi":401,
    "cssppi":288
  },
  {
    "name":"Pantech Vega n°6",
    "pheight":1080,
    "pwidth":1920,
    "width":360,
    "height":640,
    "pixratio":3,
    "ppi":373,
    "cssppi":288
  },
  {
    "name":"Blackberry Leap",
    "pheight":720,
    "pwidth":1280,
    "width":390,
    "height":695,
    "pixratio":2,
    "ppi":294,
    "cssppi":177
  },
  {
    "name":"Blackberry Passport",
    "pheight":1440,
    "pwidth":1440,
    "width":504,
    "height":504,
    "pixratio":3,
    "ppi":453,
    "cssppi":274
  },
  {
    "name":"Blackberry Classic",
    "pheight":720,
    "pwidth":720,
    "width":390,
    "height":390,
    "pixratio":1.8,
    "ppi":294,
    "cssppi":177
  },
  {
    "name":"Blackberry Q10",
    "pheight":720,
    "pwidth":720,
    "width":346,
    "height":346,
    "pixratio":2,
    "ppi":328,
    "cssppi":192
  },
  {
    "name":"Blackberry Z30",
    "pheight":720,
    "pwidth":1280,
    "width":360,
    "height":640,
    "pixratio":2,
    "ppi":295,
    "cssppi":192
  },
  {
    "name":"Blackberry Z10",
    "pheight":768,
    "pwidth":1280,
    "width":384,
    "height":640,
    "pixratio":2,
    "ppi":355,
    "cssppi":192
  },
  {
    "name":"Blackberry Torch 9800",
    "pheight":360,
    "pwidth":480,
    "width":360,
    "height":480,
    "pixratio":1,
    "ppi":187,
    "cssppi":96
  },
  {
    "name":"ZTE Grand S",
    "pheight":1080,
    "pwidth":1920,
    "width":360,
    "height":640,
    "pixratio":3,
    "ppi":441,
    "cssppi":288
  },
  {
    "name":"ZTE Open (Firefox OS)",
    "pheight":480,
    "pwidth":720,
    "width":320,
    "height":480,
    "pixratio":1.5,
    "ppi":165,
    "cssppi":144
  },

  {
    "name":"Apple iPad Pro",
    "pwidth":2048,
    "pheight":2732,
    "width":1024,
    "height":1366,
    "pixratio":2,
    "ppi":265,
    "cssppi":192
  },
  {
    "name":"Apple iPad Pro 9.7",
    "pwidth":1536,
    "pheight":2048,
    "width":768,
    "height":1024,
    "pixratio":2,
    "ppi":264,
    "cssppi":192
  },
  {
    "name":"Apple iPad 3, 4, Air, Air2",
    "pwidth":1536,
    "pheight":2048,
    "width":768,
    "height":1024,
    "pixratio":2,
    "ppi":264,
    "cssppi":192
  },
  {
    "name":"Apple iPad 1, 2",
    "pwidth":768,
    "pheight":1024,
    "width":768,
    "height":1024,
    "pixratio":1,
    "ppi":132,
    "cssppi":96
  },
  {
    "name":"Apple iPad mini 2, 3, 4",
    "pwidth":1536,
    "pheight":2048,
    "width":768,
    "height":1024,
    "pixratio":2,
    "ppi":326,
    "cssppi":192
  },
  {
    "name":"Apple iPad mini",
    "pwidth":768,
    "pheight":1024,
    "width":768,
    "height":1024,
    "pixratio":1,
    "ppi":163,
    "cssppi":96
  },
  {
    "name":"Samsung Galaxy Tab 3 10",
    "pwidth":800,
    "pheight":1280,
    "width":800,
    "height":1280,
    "pixratio":1,
    "ppi":149,
    "cssppi":96
  },
  {
    "name":"Samsung Galaxy Tab 2 10",
    "pwidth":800,
    "pheight":1280,
    "width":800,
    "height":1280,
    "pixratio":1,
    "ppi":149,
    "cssppi":96
  },
  {
    "name":"Samsung Galaxy Tab (8.9)",
    "pwidth":800,
    "pheight":1280,
    "width":800,
    "height":1280,
    "pixratio":1,
    "ppi":170,
    "cssppi":96
  },
  {
    "name":"Samsung Galaxy Tab 2 (7)",
    "pwidth":600,
    "pheight":1024,
    "width":600,
    "height":1024,
    "pixratio":1,
    "ppi":170,
    "cssppi":96
  },
  {
    "name":"Samsung Nexus 10",
    "pwidth":1600,
    "pheight":2560,
    "width":800,
    "height":1280,
    "pixratio":2,
    "ppi":300,
    "cssppi":192
  },
  {
    "name":"HTC Nexus 9",
    "pwidth":1538,
    "pheight":2048,
    "width":768,
    "height":1024,
    "pixratio":2,
    "ppi":281,
    "cssppi":192
  },
  {
    "name":"Asus Nexus 7 (v2)",
    "pwidth":1080,
    "pheight":1920,
    "width":600,
    "height":960,
    "pixratio":2,
    "ppi":323,
    "cssppi":192
  },
  {
    "name":"Asus Nexus 7 (v1)",
    "pwidth":800,
    "pheight":1280,
    "width":604,
    "height":966,
    "pixratio":1.325,
    "ppi":216,
    "cssppi":127
  },
  {
    "name":"LG G Pad 8.3",
    "pwidth":1200,
    "pheight":1920,
    "width":600,
    "height":960,
    "pixratio":2,
    "ppi":273,
    "cssppi":192
  },
  {
    "name":"Amazon Kindle Fire HD 8.9",
    "pwidth":1200,
    "pheight":1920,
    "width":800,
    "height":1280,
    "pixratio":1.5,
    "ppi":254,
    "cssppi":144
  },
  {
    "name":"Amazon Kindle Fire HD 7",
    "pwidth":800,
    "pheight":1280,
    "width":480,
    "height":800,
    "pixratio":1.5,
    "ppi":216,
    "cssppi":144
  },
  {
    "name":"Amazon Kindle Fire",
    "pwidth":600,
    "pheight":1024,
    "width":600,
    "height":1024,
    "pixratio":1,
    "ppi":167,
    "cssppi":96
  },
  {
    "name":"Microsoft Surface Pro 3",
    "pwidth":1440,
    "pheight":2160,
    "width":1024,
    "height":1440,
    "pixratio":1.5 / 1.4,
    "ppi":216,
    "cssppi":144
  },
  {
    "name":"Microsoft Surface Pro 2",
    "pwidth":1080,
    "pheight":1920,
    "width":720,
    "height":1280,
    "pixratio":1.5,
    "ppi":207,
    "cssppi":144
  },
  {
    "name":"Microsoft Surface Pro",
    "pwidth":1080,
    "pheight":1920,
    "width":720,
    "height":1280,
    "pixratio":1.5,
    "ppi":207,
    "cssppi":144
  },
  {
    "name":"Microsoft Surface",
    "pwidth":768,
    "pheight":1366,
    "width":768,
    "height":1366,
    "pixratio":1,
    "ppi":148,
    "cssppi":96
  },
  {
    "name":"Blackberry Playbook",
    "pwidth":600,
    "pheight":1024,
    "width":600,
    "height":1024,
    "pixratio":1,
    "ppi":169,
    "cssppi":96
  },

  {
    "name":"Google Glass",
    "pheight":640,
    "pwidth":360,
    "width":427,
    "height":240,
    "pixratio":1.5,
    "ppi":144,
    "cssppi":144
  },
];
export default devices;