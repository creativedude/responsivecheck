 const devices = [{
    "iphone": {
      "pheight": 320,
      "pwidth": 480,
      "name": "iPhone"
    },
    "iphone3": {
      "pheight": 320,
      "pwidth": 480,
      "name": "iPhone 3"
    },
    "iphone3g": {
      "pheight": 320,
      "pwidth": 480,
      "name": "iPhone 3G"
    },
    "iphone3gs": {
      "pheight": 320,
      "pwidth": 480,
      "name": "iPhone 3GS"
    },
    "iphone4": {
      "pheight": 320,
      "pwidth": 480,
      "name": "iPhone 4"
    },
    "iphone4s": {
      "pheight": 320,
      "pwidth": 480,
      "name": "iPhone 4S"
    },
    "iphone5": {
      "pheight": 320,
      "pwidth": 568,
      "name": "iPhone 5"
    },
    "iphone5c": {
      "pheight": 320,
      "pwidth": 568,
      "name": "iPhone 5c"
    },
    "iphone5s": {
      "pheight": 320,
      "pwidth": 568,
      "name": "iPhone 5s"
    },
    "iphone6": {
      "pheight": 375,
      "pwidth": 667,
      "name": "iPhone 6"
    },
    "iphone6plus": {
      "pheight": 414,
      "pwidth": 736,
      "name": "iPhone 6 Plus"
    },
    "iphone6s": {
      "pheight": 375,
      "pwidth": 667,
      "name": "iPhone 6s"
    },
    "iphone6splus": {
      "pheight": 414,
      "pwidth": 736,
      "name": "iPhone 6S Plus"
    },
    "iphone7": {
      "pheight": 375,
      "pwidth": 667,
      "name": "iPhone 7"
    },
    "iphone7plus": {
      "pheight": 414,
      "pwidth": 736,
      "name": "iPhone 7 Plus"
    },
    "iphone8": {
      "pheight": 375,
      "pwidth": 667,
      "name": "iPhone 8"
    },
    "iphone8plus": {
      "pheight": 414,
      "pwidth": 736,
      "name": "iPhone 8 Plus"
    },
    "iphonex": {
      "pheight": 375,
      "pwidth": 812,
      "name": "iPhone X"
    },
    "iphonexr": {
      "pheight": 414,
      "pwidth": 896,
      "name": "iPhone XR"
    },
    "iphonexs": {
      "pheight": 375,
      "pwidth": 812,
      "name": "iPhone XS"
    },
    "iphonexsmax": {
      "pheight": 414,
      "pwidth": 896,
      "name": "iPhone XS Max"
    },
    "iphone11": {
      "pheight": 414,
      "pwidth": 896,
      "name": "iPhone 11"
    },
    "ipodtouch4thgen": {
      "pheight": 320,
      "pwidth": 480,
      "name": "iPod Touch 4th Gen"
    },
    "ipodtouch5thgen": {
      "pheight": 320,
      "pwidth": 568,
      "name": "iPod Touch 5th Gen"
    },
    "ipad": {
      "pheight": 768,
      "pwidth": 1024,
      "name": "iPad"
    },
    "ipad2": {
      "pheight": 768,
      "pwidth": 1024,
      "name": "iPad 2"
    },
    "ipad3": {
      "pheight": 768,
      "pwidth": 1024,
      "name": "iPad 3"
    },
    "ipadair": {
      "pheight": 768,
      "pwidth": 1024,
      "name": "iPad Air"
    },
    "ipadair2": {
      "pheight": 768,
      "pwidth": 1024,
      "name": "iPad Air 2"
    },
    "ipadmini": {
      "pheight": 768,
      "pwidth": 1024,
      "name": "iPad Mini"
    },
    "ipadpro": {
      "pheight": 1024,
      "pwidth": 1366,
      "name": "iPad Pro"
    },
    "ipadpro9.7": {
      "pheight": 768,
      "pwidth": 1024,
      "name": "iPad Pro 9.7"
    },
    "applewatchseries1,3(38mm)": {
      "pheight": 272,
      "pwidth": 340,
      "name": "Apple Watch Series 1, 3 (38mm)"
    },
    "applewatchseries1,3(42mm)": {
      "pheight": 312,
      "pwidth": 390,
      "name": "Apple Watch Series 1, 3 (42mm)"
    },
    "applewatchseries5(40mm)": {
      "pheight": 324,
      "pwidth": 394,
      "name": "Apple Watch Series 5 (40mm)"
    },
    "applewatchseries5(44mm)": {
      "pheight": 368,
      "pwidth": 448,
      "name": "Apple Watch Series 5 (44mm)"
    },
    "samsungativs": {
      "pheight": 320,
      "pwidth": 480,
      "name": "Samsung Ativ S"
    },
    "samsunggalaxy5/europai5500": {
      "pheight": 320,
      "pwidth": 427,
      "name": "Samsung Galaxy 5/Europa I5500"
    },
    "samsunggalaxyace2i8160": {
      "pheight": 320,
      "pwidth": 533,
      "name": "Samsung Galaxy Ace 2 I8160"
    },
    "samsunggalaxyacepluss7500": {
      "pheight": 320,
      "pwidth": 480,
      "name": "Samsung Galaxy Ace Plus S7500"
    },
    "samsunggalaxyaces5830": {
      "pheight": 320,
      "pwidth": 480,
      "name": "Samsung Galaxy Ace S5830"
    },
    "samsunggalaxybeami8530": {
      "pheight": 320,
      "pwidth": 533,
      "name": "Samsung Galaxy Beam I8530"
    },
    "samsunggalaxycameragc100": {
      "pheight": 360,
      "pwidth": 598,
      "name": "Samsung Galaxy Camera GC100"
    },
    "samsunggalaxyj3": {
      "pheight": 360,
      "pwidth": 640,
      "name": "Samsung Galaxy J3"
    },
    "samsunggalaxyj7": {
      "pheight": 360,
      "pwidth": 640,
      "name": "Samsung Galaxy J7"
    },
    "samsunggalaxymini2s6500": {
      "pheight": 320,
      "pwidth": 480,
      "name": "Samsung Galaxy Mini 2 S6500"
    },
    "samsunggalaxyminis5570": {
      "pheight": 240,
      "pwidth": 320,
      "name": "Samsung Galaxy Mini S5570"
    },
    "samsunggalaxynexus": {
      "pheight": 360,
      "pwidth": 600,
      "name": "Samsung Galaxy Nexus"
    },
    "samsunggalaxynote": {
      "pheight": 400,
      "pwidth": 640,
      "name": "Samsung Galaxy Note"
    },
    "samsunggalaxynote10": {
      "pheight": 360,
      "pwidth": 718,
      "name": "Samsung Galaxy Note 10"
    },
    "samsunggalaxynote10+": {
      "pheight": 360,
      "pwidth": 718,
      "name": "Samsung Galaxy Note 10+"
    },
    "samsunggalaxynote10.1(2014edition)p600": {
      "pheight": 800,
      "pwidth": 1280,
      "name": "Samsung Galaxy Note 10.1 (2014 Edition) P600"
    },
    "samsunggalaxynote10.1n8010": {
      "pheight": 800,
      "pwidth": 1280,
      "name": "Samsung Galaxy Note 10.1 N8010"
    },
    "samsunggalaxynote10.1n8010(multiscreenenabled)": {
      "pheight": 800,
      "pwidth": 637,
      "name": "Samsung Galaxy Note 10.1 N8010 (Multiscreen Enabled)"
    },
    "samsunggalaxynote2": {
      "pheight": 360,
      "pwidth": 640,
      "name": "Samsung Galaxy Note 2"
    },
    "samsunggalaxynote2n7100": {
      "pheight": 360,
      "pwidth": 640,
      "name": "Samsung Galaxy Note 2 N7100"
    },
    "samsunggalaxynote3": {
      "pheight": 360,
      "pwidth": 640,
      "name": "Samsung Galaxy Note 3"
    },
    "samsunggalaxynote3n9005": {
      "pheight": 360,
      "pwidth": 640,
      "name": "Samsung Galaxy Note 3 N9005"
    },
    "samsunggalaxynote4": {
      "pheight": 360,
      "pwidth": 640,
      "name": "Samsung Galaxy Note 4"
    },
    "samsunggalaxynote8": {
      "pheight": 360,
      "pwidth": 740,
      "name": "Samsung Galaxy Note 8"
    },
    "samsunggalaxynote8.0n5100": {
      "pheight": 601,
      "pwidth": 962,
      "name": "Samsung Galaxy Note 8.0 N5100"
    },
    "samsunggalaxynote8.0n5110": {
      "pheight": 601,
      "pwidth": 962,
      "name": "Samsung Galaxy Note 8.0 N5110"
    },
    "samsunggalaxynote9": {
      "pheight": 360,
      "pwidth": 740,
      "name": "Samsung Galaxy Note 9"
    },
    "samsunggalaxynoten700": {
      "pheight": 400,
      "pwidth": 640,
      "name": "Samsung Galaxy Note N700"
    },
    "samsunggalaxys": {
      "pheight": 320,
      "pwidth": 533,
      "name": "Samsung Galaxy S"
    },
    "samsunggalaxysduoss7562": {
      "pheight": 320,
      "pwidth": 533,
      "name": "Samsung Galaxy S Duos S7562"
    },
    "samsunggalaxysi9000": {
      "pheight": 320,
      "pwidth": 533,
      "name": "Samsung Galaxy S I9000"
    },
    "samsunggalaxyswifiypg70cw": {
      "pheight": 320,
      "pwidth": 533,
      "name": "Samsung Galaxy S WiFi YPG70CW"
    },
    "samsunggalaxys10": {
      "pheight": 360,
      "pwidth": 740,
      "name": "Samsung Galaxy S10"
    },
    "samsunggalaxys10+": {
      "pheight": 360,
      "pwidth": 740,
      "name": "Samsung Galaxy S10+"
    },
    "samsunggalaxys2": {
      "pheight": 320,
      "pwidth": 533,
      "name": "Samsung Galaxy S2"
    },
    "samsunggalaxys2i9100": {
      "pheight": 320,
      "pwidth": 533,
      "name": "Samsung Galaxy S2 I9100"
    },
    "samsunggalaxys3": {
      "pheight": 360,
      "pwidth": 640,
      "name": "Samsung Galaxy S3"
    },
    "samsunggalaxys3i9300": {
      "pheight": 360,
      "pwidth": 640,
      "name": "Samsung Galaxy S3 I9300"
    },
    "samsunggalaxys3mini": {
      "pheight": 320,
      "pwidth": 533,
      "name": "Samsung Galaxy S3 mini"
    },
    "samsunggalaxys3minii8190": {
      "pheight": 320,
      "pwidth": 533,
      "name": "Samsung Galaxy S3 Mini I8190"
    },
    "samsunggalaxys4": {
      "pheight": 360,
      "pwidth": 640,
      "name": "Samsung Galaxy S4"
    },
    "samsunggalaxys4activei9295": {
      "pheight": 360,
      "pwidth": 640,
      "name": "Samsung Galaxy S4 Active I9295"
    },
    "samsunggalaxys4i9500": {
      "pheight": 360,
      "pwidth": 640,
      "name": "Samsung Galaxy S4 I9500"
    },
    "samsunggalaxys4i9505": {
      "pheight": 360,
      "pwidth": 640,
      "name": "Samsung Galaxy S4 I9505"
    },
    "samsunggalaxys4mini": {
      "pheight": 360,
      "pwidth": 640,
      "name": "Samsung Galaxy S4 mini"
    },
    "samsunggalaxys4minii9190": {
      "pheight": 360,
      "pwidth": 640,
      "name": "Samsung Galaxy S4 Mini I9190"
    },
    "samsunggalaxys4zoomsm-c105": {
      "pheight": 360,
      "pwidth": 640,
      "name": "Samsung Galaxy S4 Zoom SM-C105"
    },
    "samsunggalaxys5": {
      "pheight": 360,
      "pwidth": 640,
      "name": "Samsung Galaxy S5"
    },
    "samsunggalaxys6": {
      "pheight": 360,
      "pwidth": 640,
      "name": "Samsung Galaxy S6"
    },
    "samsunggalaxys7": {
      "pheight": 360,
      "pwidth": 640,
      "name": "Samsung Galaxy S7"
    },
    "samsunggalaxys7edge": {
      "pheight": 360,
      "pwidth": 640,
      "name": "Samsung Galaxy S7 Edge"
    },
    "samsunggalaxys8": {
      "pheight": 360,
      "pwidth": 740,
      "name": "Samsung Galaxy S8"
    },
    "samsunggalaxys8plus": {
      "pheight": 412,
      "pwidth": 846,
      "name": "Samsung Galaxy S8 Plus"
    },
    "samsunggalaxys8+": {
      "pheight": 360,
      "pwidth": 740,
      "name": "Samsung Galaxy S8+"
    },
    "samsunggalaxys9": {
      "pheight": 360,
      "pwidth": 740,
      "name": "Samsung Galaxy S9"
    },
    "samsunggalaxys9plus": {
      "pheight": 412,
      "pwidth": 846,
      "name": "Samsung Galaxy S9 Plus"
    },
    "samsunggalaxys9+": {
      "pheight": 360,
      "pwidth": 740,
      "name": "Samsung Galaxy S9+"
    },
    "samsunggalaxytab": {
      "pheight": 800,
      "pwidth": 1280,
      "name": "Samsung Galaxy Tab"
    },
    "samsunggalaxytab10.1p7510": {
      "pheight": 800,
      "pwidth": 1280,
      "name": "Samsung Galaxy Tab 10.1 P7510"
    },
    "samsunggalaxytab2": {
      "pheight": 800,
      "pwidth": 1280,
      "name": "Samsung Galaxy Tab 2"
    },
    "samsunggalaxytab210.1p5110": {
      "pheight": 800,
      "pwidth": 1280,
      "name": "Samsung Galaxy Tab 2 10.1 P5110"
    },
    "samsunggalaxytab27\"": {
      "pheight": 600,
      "pwidth": 1024,
      "name": "Samsung Galaxy Tab 2 7\""
    },
    "samsunggalaxytab27.0p3110": {
      "pheight": 600,
      "pwidth": 1024,
      "name": "Samsung Galaxy Tab 2 7.0 P3110"
    },
    "samsunggalaxytab3": {
      "pheight": 800,
      "pwidth": 1280,
      "name": "Samsung Galaxy Tab 3"
    },
    "samsunggalaxytab310.1p5210": {
      "pheight": 800,
      "pwidth": 1280,
      "name": "Samsung Galaxy Tab 3 10.1 P5210"
    },
    "samsunggalaxytab37.0t210": {
      "pheight": 600,
      "pwidth": 1024,
      "name": "Samsung Galaxy Tab 3 7.0 T210"
    },
    "samsunggalaxytab38.0t310": {
      "pheight": 602,
      "pwidth": 962,
      "name": "Samsung Galaxy Tab 3 8.0 T310"
    },
    "samsunggalaxytab3kidst2105": {
      "pheight": 600,
      "pwidth": 1024,
      "name": "Samsung Galaxy Tab 3 Kids T2105"
    },
    "samsunggalaxytab7.0plusp6210": {
      "pheight": 600,
      "pwidth": 1024,
      "name": "Samsung Galaxy Tab 7.0 Plus P6210"
    },
    "samsunggalaxytab7.7p6810": {
      "pheight": 800,
      "pwidth": 1280,
      "name": "Samsung Galaxy Tab 7.7 P6810"
    },
    "samsunggalaxytab8.94gp7320": {
      "pheight": 800,
      "pwidth": 1280,
      "name": "Samsung Galaxy Tab 8.9 4G P7320"
    },
    "samsunggalaxytab8.9p7310": {
      "pheight": 800,
      "pwidth": 1280,
      "name": "Samsung Galaxy Tab 8.9 P7310"
    },
    "samsunggalaxytabp1000": {
      "pheight": 400,
      "pwidth": 683,
      "name": "Samsung Galaxy Tab P1000"
    },
    "samsunggalaxyxcover2s7710": {
      "pheight": 320,
      "pwidth": 533,
      "name": "Samsung Galaxy X Cover 2 S7710"
    },
    "samsunggalaxyys5360": {
      "pheight": 320,
      "pwidth": 427,
      "name": "Samsung Galaxy Y S5360"
    },
    "samsunggalaxyyoungs6310": {
      "pheight": 320,
      "pwidth": 480,
      "name": "Samsung Galaxy Young S6310"
    },
    "samsunginfuse4gi997": {
      "pheight": 320,
      "pwidth": 533,
      "name": "Samsung Infuse 4G I997"
    },
    "samsungnexus10": {
      "pheight": 800,
      "pwidth": 1280,
      "name": "Samsung Nexus 10"
    },
    "samsungomnia7i8700": {
      "pheight": 320,
      "pwidth": 480,
      "name": "Samsung Omnia 7 I8700"
    },
    "samsungomniawi8350": {
      "pheight": 320,
      "pwidth": 480,
      "name": "Samsung Omnia W I8350"
    },
    "samsungwaves8500": {
      "pheight": 320,
      "pwidth": 534,
      "name": "Samsung Wave S8500"
    },
    "acericoniataba1-810": {
      "pheight": 768,
      "pwidth": 1024,
      "name": "Acer Iconia Tab A1-810"
    },
    "acericoniataba100": {
      "pheight": 800,
      "pwidth": 1280,
      "name": "Acer Iconia Tab A100"
    },
    "acericoniataba101": {
      "pheight": 600,
      "pwidth": 1024,
      "name": "Acer Iconia Tab A101"
    },
    "acericoniataba200": {
      "pheight": 800,
      "pwidth": 1280,
      "name": "Acer Iconia Tab A200"
    },
    "acericoniataba500": {
      "pheight": 648,
      "pwidth": 1280,
      "name": "Acer Iconia Tab A500"
    },
    "acericoniataba501": {
      "pheight": 800,
      "pwidth": 1280,
      "name": "Acer Iconia Tab A501"
    },
    "acerliquide2": {
      "pheight": 360,
      "pwidth": 640,
      "name": "ACER Liquid E2"
    },
    "ainolnovo7elf2": {
      "pheight": 496,
      "pwidth": 1024,
      "name": "Ainol Novo 7 Elf 2"
    },
    "alcatel(vodafone)smartmini875": {
      "pheight": 320,
      "pwidth": 480,
      "name": "Alcatel (Vodafone) Smart Mini 875"
    },
    "alcatela30fierce": {
      "pheight": 360,
      "pwidth": 640,
      "name": "Alcatel A30 Fierce"
    },
    "alcatelonetouch903": {
      "pheight": 320,
      "pwidth": 427,
      "name": "Alcatel One Touch 903"
    },
    "alcatelonetouchidolx": {
      "pheight": 480,
      "pwidth": 800,
      "name": "Alcatel One Touch Idol X"
    },
    "alcatelonetoucht10": {
      "pheight": 480,
      "pwidth": 800,
      "name": "Alcatel One Touch T10"
    },
    "amicroe7touchtabii": {
      "pheight": 480,
      "pwidth": 800,
      "name": "Amicroe 7 TouchTAB II"
    },
    "amicroe9.7touchtabiv": {
      "pheight": 768,
      "pwidth": 1024,
      "name": "Amicroe 9.7 TouchTAB IV"
    },
    "archos70b(it2)": {
      "pheight": 600,
      "pwidth": 1024,
      "name": "Archos 70b (it2)"
    },
    "archos80g9": {
      "pheight": 768,
      "pwidth": 1024,
      "name": "Archos 80G9"
    },
    "arnova10bg3": {
      "pheight": 600,
      "pwidth": 1024,
      "name": "Arnova 10b G3"
    },
    "arnova7g2": {
      "pheight": 480,
      "pwidth": 800,
      "name": "Arnova 7 G2"
    },
    "arnova7fg3": {
      "pheight": 640,
      "pwidth": 1067,
      "name": "Arnova 7F G3"
    },
    "arnova8cg3": {
      "pheight": 800,
      "pwidth": 1067,
      "name": "Arnova 8C G3"
    },
    "asusb1-a71": {
      "pheight": 600,
      "pwidth": 1024,
      "name": "ASUS B1-A71"
    },
    "asusfonepad": {
      "pheight": 601,
      "pwidth": 962,
      "name": "ASUS Fonepad"
    },
    "asusmemopadfhd10/me302c10.1": {
      "pheight": 800,
      "pwidth": 1280,
      "name": "ASUS MeMo Pad FHD10/ME302C 10.1"
    },
    "asusmemopadme172v": {
      "pheight": 600,
      "pwidth": 1024,
      "name": "ASUS MeMo Pad ME172V"
    },
    "asusnexus7(v1)": {
      "pheight": 604,
      "pwidth": 966,
      "name": "Asus Nexus 7 (v1)"
    },
    "asusnexus7(v2)": {
      "pheight": 600,
      "pwidth": 960,
      "name": "Asus Nexus 7 (v2)"
    },
    "asuspadfone": {
      "pheight": 800,
      "pwidth": 1128,
      "name": "ASUS Padfone"
    },
    "asustransformerpadtf300t": {
      "pheight": 800,
      "pwidth": 1280,
      "name": "ASUS Transformer Pad TF300T"
    },
    "asustransformertf101": {
      "pheight": 800,
      "pwidth": 1280,
      "name": "ASUS Transformer TF101"
    },
    "asusvivo": {
      "pheight": 768,
      "pwidth": 1366,
      "name": "ASUS Vivo"
    },
    "barnes&amp;noblenookhd": {
      "pheight": 600,
      "pwidth": 960,
      "name": "Barnes &amp; Noble Nook HD"
    },
    "bauhnamid-972xs": {
      "pheight": 768,
      "pwidth": 1024,
      "name": "BAUHN AMID-972XS"
    },
    "bauhnamid-9743g": {
      "pheight": 768,
      "pwidth": 1024,
      "name": "BAUHN AMID-9743G"
    },
    "bauhnasp-5000h": {
      "pheight": 360,
      "pwidth": 640,
      "name": "BAUHN ASP-5000H"
    },
    "blackberry9520": {
      "pheight": 345,
      "pwidth": 691,
      "name": "BlackBerry 9520"
    },
    "blackberryclassic": {
      "pheight": 390,
      "pwidth": 390,
      "name": "Blackberry Classic"
    },
    "blackberrycurve9380": {
      "pheight": 320,
      "pwidth": 406,
      "name": "BlackBerry Curve 9380"
    },
    "blackberryleap": {
      "pheight": 390,
      "pwidth": 695,
      "name": "Blackberry Leap"
    },
    "blackberrypassport": {
      "pheight": 504,
      "pwidth": 504,
      "name": "Blackberry Passport\t"
    },
    "blackberryplaybook": {
      "pheight": 600,
      "pwidth": 1024,
      "name": "Blackberry Playbook"
    },
    "blackberryq10": {
      "pheight": 346,
      "pwidth": 346,
      "name": "Blackberry Q10"
    },
    "blackberrytorch9800": {
      "pheight": 360,
      "pwidth": 480,
      "name": "Blackberry Torch 9800"
    },
    "blackberrytorch9860": {
      "pheight": 320,
      "pwidth": 505,
      "name": "BlackBerry Torch 9860"
    },
    "blackberryz10": {
      "pheight": 384,
      "pwidth": 640,
      "name": "Blackberry Z10"
    },
    "blackberryz30": {
      "pheight": 360,
      "pwidth": 640,
      "name": "Blackberry Z30"
    },
    "dellvenue8": {
      "pheight": 800,
      "pwidth": 1280,
      "name": "Dell Venue 8"
    },
    "galaxynexus": {
      "pheight": 360,
      "pwidth": 598,
      "name": "Galaxy Nexus"
    },
    "googlenexus5": {
      "pheight": 360,
      "pwidth": 640,
      "name": "Google Nexus 5"
    },
    "googlenexus6": {
      "pheight": 360,
      "pwidth": 640,
      "name": "Google Nexus 6"
    },
    "googlenexus6p": {
      "pheight": 412,
      "pwidth": 738,
      "name": "Google Nexus 6P"
    },
    "googlepixel": {
      "pheight": 411,
      "pwidth": 731,
      "name": "Google Pixel"
    },
    "googlepixel2": {
      "pheight": 412,
      "pwidth": 640,
      "name": "Google Pixel 2"
    },
    "googlepixel2xl": {
      "pheight": 412,
      "pwidth": 823,
      "name": "Google Pixel 2 XL"
    },
    "googlepixel3": {
      "pheight": 393,
      "pwidth": 786,
      "name": "Google Pixel 3"
    },
    "googlepixel3xl": {
      "pheight": 393,
      "pwidth": 786,
      "name": "Google Pixel 3 XL"
    },
    "googlepixelxl": {
      "pheight": 411,
      "pwidth": 731,
      "name": "Google Pixel XL"
    },
    "hpslate72800": {
      "pheight": 600,
      "pwidth": 1024,
      "name": "HP Slate 7 2800"
    },
    "hptouchpad": {
      "pheight": 768,
      "pwidth": 1024,
      "name": "HP Touchpad"
    },
    "hpveer": {
      "pheight": 320,
      "pwidth": 545,
      "name": "HP Veer"
    },
    "htc7mozart": {
      "pheight": 320,
      "pwidth": 480,
      "name": "HTC 7 Mozart"
    },
    "htc7trophy": {
      "pheight": 320,
      "pwidth": 480,
      "name": "HTC 7 Trophy"
    },
    "htc8x": {
      "pheight": 320,
      "pwidth": 480,
      "name": "HTC 8X"
    },
    "htca620b": {
      "pheight": 320,
      "pwidth": 480,
      "name": "HTC A620b"
    },
    "htcdesire": {
      "pheight": 320,
      "pwidth": 533,
      "name": "HTC Desire"
    },
    "htcdesire700": {
      "pheight": 360,
      "pwidth": 640,
      "name": "HTC Desire 700"
    },
    "htcdesirec": {
      "pheight": 320,
      "pwidth": 480,
      "name": "HTC Desire C"
    },
    "htcdesirehd": {
      "pheight": 320,
      "pwidth": 533,
      "name": "HTC Desire HD"
    },
    "htcdesires": {
      "pheight": 320,
      "pwidth": 533,
      "name": "HTC Desire S"
    },
    "htcdesirex": {
      "pheight": 320,
      "pwidth": 533,
      "name": "HTC Desire X"
    },
    "htcdesirez(vision)": {
      "pheight": 480,
      "pwidth": 800,
      "name": "HTC Desire Z (Vision)"
    },
    "htcdroideris": {
      "pheight": 320,
      "pwidth": 480,
      "name": "HTC Droid Eris"
    },
    "htcevo3d": {
      "pheight": 360,
      "pwidth": 640,
      "name": "HTC Evo 3D"
    },
    "htcincredible2": {
      "pheight": 320,
      "pwidth": 533,
      "name": "HTC Incredible 2"
    },
    "htclegend": {
      "pheight": 320,
      "pwidth": 480,
      "name": "HTC Legend"
    },
    "htcmytouchslide4g": {
      "pheight": 320,
      "pwidth": 533,
      "name": "HTC MyTouch Slide 4G"
    },
    "htcnexus9": {
      "pheight": 768,
      "pwidth": 1024,
      "name": "HTC Nexus 9"
    },
    "htcone": {
      "pheight": 360,
      "pwidth": 640,
      "name": "HTC One"
    },
    "htcone1080": {
      "pheight": 360,
      "pwidth": 640,
      "name": "HTC One\t1080"
    },
    "htconemini": {
      "pheight": 360,
      "pwidth": 640,
      "name": "HTC One Mini"
    },
    "htcones": {
      "pheight": 360,
      "pwidth": 640,
      "name": "HTC One S"
    },
    "htconesv": {
      "pheight": 320,
      "pwidth": 533,
      "name": "HTC One SV"
    },
    "htconev": {
      "pheight": 320,
      "pwidth": 533,
      "name": "HTC One V"
    },
    "htconex": {
      "pheight": 360,
      "pwidth": 640,
      "name": "HTC One X"
    },
    "htconex+": {
      "pheight": 360,
      "pwidth": 640,
      "name": "HTC One X+"
    },
    "htconexl": {
      "pheight": 360,
      "pwidth": 640,
      "name": "HTC One XL"
    },
    "htcrio8s": {
      "pheight": 320,
      "pwidth": 480,
      "name": "HTC Rio 8S"
    },
    "htcsensationxl": {
      "pheight": 360,
      "pwidth": 640,
      "name": "HTC Sensation XL"
    },
    "htctitanii/4g": {
      "pheight": 320,
      "pwidth": 480,
      "name": "HTC Titan II/4G"
    },
    "htcvelocity4g": {
      "pheight": 360,
      "pwidth": 640,
      "name": "HTC Velocity 4G"
    },
    "htcwildfirea3333": {
      "pheight": 267,
      "pwidth": 356,
      "name": "HTC Wildfire A3333"
    },
    "htcwildfires": {
      "pheight": 320,
      "pwidth": 480,
      "name": "HTC Wildfire S"
    },
    "htcwindowsphone8s": {
      "pheight": 320,
      "pwidth": 480,
      "name": "HTC Windows Phone 8S"
    },
    "htcwindowsphone8x(c625b)": {
      "pheight": 320,
      "pwidth": 480,
      "name": "HTC Windows Phone 8X (C625b)"
    },
    "huaweiascendg510": {
      "pheight": 320,
      "pwidth": 569,
      "name": "Huawei Ascend G510"
    },
    "huaweiascendmate": {
      "pheight": 480,
      "pwidth": 813,
      "name": "Huawei Ascend Mate"
    },
    "huaweip10": {
      "pheight": 360,
      "pwidth": 640,
      "name": "Huawei P10"
    },
    "huaweip10lite": {
      "pheight": 360,
      "pwidth": 640,
      "name": "Huawei P10 Lite"
    },
    "huaweip20": {
      "pheight": 360,
      "pwidth": 748,
      "name": "Huawei P20"
    },
    "huaweip20lite": {
      "pheight": 360,
      "pwidth": 760,
      "name": "Huawei P20 Lite"
    },
    "huaweip20pro": {
      "pheight": 360,
      "pwidth": 747,
      "name": "Huawei P20 Pro"
    },
    "huaweip8lite": {
      "pheight": 360,
      "pwidth": 640,
      "name": "Huawei P8 Lite"
    },
    "huaweip9": {
      "pheight": 360,
      "pwidth": 640,
      "name": "Huawei P9"
    },
    "huaweip9lite": {
      "pheight": 360,
      "pwidth": 640,
      "name": "Huawei P9 Lite"
    },
    "huaweiu8650sonic": {
      "pheight": 320,
      "pwidth": 480,
      "name": "Huawei U8650 Sonic"
    },
    "huaweiu8860": {
      "pheight": 320,
      "pwidth": 544,
      "name": "Huawei U8860"
    },
    "huaweiy300-0151": {
      "pheight": 320,
      "pwidth": 533,
      "name": "Huawei Y300-0151"
    },
    "kindlefire2": {
      "pheight": 600,
      "pwidth": 963,
      "name": "Kindle Fire 2"
    },
    "kindlefirehd": {
      "pheight": 533,
      "pwidth": 801,
      "name": "Kindle Fire HD"
    },
    "kindlefirehd8.9": {
      "pheight": 800,
      "pwidth": 1220,
      "name": "Kindle Fire HD 8.9"
    },
    "lenovoideataba1000": {
      "pheight": 600,
      "pwidth": 1024,
      "name": "Lenovo IdeaTab A1000"
    },
    "lenovoideatabs6000": {
      "pheight": 800,
      "pwidth": 1280,
      "name": "Lenovo IdeaTab S6000"
    },
    "lenovok900": {
      "pheight": 360,
      "pwidth": 640,
      "name": "Lenovo K900"
    },
    "lenovoyogatablet10": {
      "pheight": 800,
      "pwidth": 1280,
      "name": "Lenovo Yoga Tablet 10"
    },
    "lenovoyogatablet8": {
      "pheight": 602,
      "pwidth": 962,
      "name": "Lenovo Yoga Tablet 8"
    },
    "lgally": {
      "pheight": 320,
      "pwidth": 533,
      "name": "LG Ally"
    },
    "lgaristo2": {
      "pheight": 360,
      "pwidth": 640,
      "name": "LG Aristo 2"
    },
    "lggpad8.3": {
      "pheight": 600,
      "pwidth": 960,
      "name": "LG G Pad 8.3"
    },
    "lgg2": {
      "pheight": 360,
      "pwidth": 598,
      "name": "LG G2"
    },
    "lgg3": {
      "pheight": 360,
      "pwidth": 640,
      "name": "LG G3"
    },
    "lgg4": {
      "pheight": 360,
      "pwidth": 640,
      "name": "LG G4"
    },
    "lgg5": {
      "pheight": 360,
      "pwidth": 640,
      "name": "LG G5"
    },
    "lgk10": {
      "pheight": 360,
      "pwidth": 640,
      "name": "LG K10"
    },
    "lgk20": {
      "pheight": 360,
      "pwidth": 640,
      "name": "LG K20"
    },
    "lgk7": {
      "pheight": 320,
      "pwidth": 570,
      "name": "LG K7"
    },
    "lgnexus4": {
      "pheight": 384,
      "pwidth": 640,
      "name": "LG Nexus 4"
    },
    "lgnexus5": {
      "pheight": 360,
      "pwidth": 640,
      "name": "LG Nexus 5"
    },
    "lgoptimus2x": {
      "pheight": 320,
      "pwidth": 533,
      "name": "LG Optimus 2x"
    },
    "lgoptimusblackp970": {
      "pheight": 320,
      "pwidth": 533,
      "name": "LG Optimus Black P970"
    },
    "lgoptimusg": {
      "pheight": 384,
      "pwidth": 640,
      "name": "LG Optimus G"
    },
    "lgoptimusge975": {
      "pheight": 384,
      "pwidth": 640,
      "name": "LG Optimus G E975"
    },
    "lgoptimusl3e400": {
      "pheight": 320,
      "pwidth": 427,
      "name": "LG Optimus L3 E400"
    },
    "lgoptimusl3iie425f": {
      "pheight": 320,
      "pwidth": 427,
      "name": "LG Optimus L3 II E425f"
    },
    "lgoptimusl7p700": {
      "pheight": 320,
      "pwidth": 533,
      "name": "LG Optimus L7 P700"
    },
    "lgoptimusl9p760": {
      "pheight": 360,
      "pwidth": 640,
      "name": "LG Optimus L9 P760"
    },
    "lgoptimuspadv900": {
      "pheight": 768,
      "pwidth": 1280,
      "name": "LG Optimus Pad V900"
    },
    "lgstylo2": {
      "pheight": 360,
      "pwidth": 640,
      "name": "LG Stylo 2"
    },
    "lgtributehd": {
      "pheight": 360,
      "pwidth": 640,
      "name": "LG Tribute HD"
    },
    "lgv20": {
      "pheight": 360,
      "pwidth": 640,
      "name": "LG V20"
    },
    "lgviewtyku990": {
      "pheight": 240,
      "pwidth": 400,
      "name": "LG Viewty KU990"
    },
    "lyff90m(kaios)": {
      "pheight": 240,
      "pwidth": 320,
      "name": "Lyf F90M (KaiOS)"
    },
    "microsoftlumia1020": {
      "pheight": 320,
      "pwidth": 480,
      "name": "Microsoft Lumia 1020"
    },
    "microsoftlumia1520": {
      "pheight": 432,
      "pwidth": 768,
      "name": "Microsoft Lumia 1520"
    },
    "microsoftlumia620": {
      "pheight": 320,
      "pwidth": 480,
      "name": "Microsoft Lumia 620"
    },
    "microsoftlumia830": {
      "pheight": 320,
      "pwidth": 480,
      "name": "Microsoft Lumia 830"
    },
    "microsoftlumia900": {
      "pheight": 320,
      "pwidth": 480,
      "name": "Microsoft Lumia 900"
    },
    "microsoftlumia920": {
      "pheight": 320,
      "pwidth": 480,
      "name": "Microsoft Lumia 920"
    },
    "microsoftlumia925": {
      "pheight": 320,
      "pwidth": 480,
      "name": "Microsoft Lumia 925"
    },
    "microsoftsurface": {
      "pheight": 768,
      "pwidth": 1366,
      "name": "Microsoft Surface"
    },
    "microsoftsurfacepro": {
      "pheight": 720,
      "pwidth": 1280,
      "name": "Microsoft Surface Pro"
    },
    "microsoftsurfacepro2": {
      "pheight": 720,
      "pwidth": 1280,
      "name": "Microsoft Surface Pro 2"
    },
    "microsoftsurfacepro3": {
      "pheight": 1024,
      "pwidth": 1440,
      "name": "Microsoft Surface Pro 3"
    },
    "motoroladefy": {
      "pheight": 320,
      "pwidth": 569,
      "name": "Motorola Defy"
    },
    "motoroladefymini": {
      "pheight": 320,
      "pwidth": 480,
      "name": "Motorola Defy Mini"
    },
    "motoroladroid3": {
      "pheight": 360,
      "pwidth": 559,
      "name": "Motorola Droid 3"
    },
    "motoroladroidbionic": {
      "pheight": 360,
      "pwidth": 640,
      "name": "Motorola Droid Bionic"
    },
    "motoroladroidrazr": {
      "pheight": 360,
      "pwidth": 640,
      "name": "Motorola Droid Razr"
    },
    "motoroladroidturbo": {
      "pheight": 360,
      "pwidth": 640,
      "name": "Motorola DROID Turbo"
    },
    "motorolaelectrify2": {
      "pheight": 360,
      "pwidth": 598,
      "name": "Motorola Electrify 2"
    },
    "motorolafirext": {
      "pheight": 320,
      "pwidth": 480,
      "name": "Motorola Fire XT"
    },
    "motorolaflipout": {
      "pheight": 320,
      "pwidth": 240,
      "name": "Motorola FlipOut"
    },
    "motorolamilestone": {
      "pheight": 320,
      "pwidth": 569,
      "name": "Motorola Milestone"
    },
    "motorolamotoe4": {
      "pheight": 360,
      "pwidth": 640,
      "name": "Motorola Moto E4"
    },
    "motorolamotog": {
      "pheight": 360,
      "pwidth": 598,
      "name": "Motorola Moto G"
    },
    "motorolamotog5plus": {
      "pheight": 360,
      "pwidth": 640,
      "name": "Motorola Moto G5 Plus"
    },
    "motorolamotoz": {
      "pheight": 360,
      "pwidth": 640,
      "name": "Motorola Moto Z"
    },
    "motorolamotozplay": {
      "pheight": 360,
      "pwidth": 640,
      "name": "Motorola Moto Z Play"
    },
    "motorolamotoz2": {
      "pheight": 360,
      "pwidth": 640,
      "name": "Motorola Moto Z2"
    },
    "motorolamotoz2play": {
      "pheight": 360,
      "pwidth": 640,
      "name": "Motorola Moto Z2 Play"
    },
    "motorolanexus6": {
      "pheight": 412,
      "pwidth": 690,
      "name": "Motorola Nexus 6"
    },
    "motorolarazrhd4g": {
      "pheight": 360,
      "pwidth": 598,
      "name": "Motorola RAZR HD 4G"
    },
    "motorolarazrm4g": {
      "pheight": 360,
      "pwidth": 598,
      "name": "Motorola RAZR M 4G"
    },
    "motorolarazrmaxx": {
      "pheight": 360,
      "pwidth": 640,
      "name": "Motorola RAZR MAXX"
    },
    "motorolaxoom": {
      "pheight": 800,
      "pwidth": 1280,
      "name": "Motorola Xoom"
    },
    "motorolaxoom2": {
      "pheight": 800,
      "pwidth": 1280,
      "name": "Motorola Xoom 2"
    },
    "motorolaxoom2mediaedition": {
      "pheight": 800,
      "pwidth": 1280,
      "name": "Motorola Xoom 2 Media Edition"
    },
    "nexus10": {
      "pheight": 800,
      "pwidth": 1280,
      "name": "Nexus 10"
    },
    "nexus4": {
      "pheight": 384,
      "pwidth": 598,
      "name": "Nexus 4"
    },
    "nexus5": {
      "pheight": 360,
      "pwidth": 598,
      "name": "Nexus 5"
    },
    "nexus7": {
      "pheight": 601,
      "pwidth": 962,
      "name": "Nexus 7"
    },
    "nexus7(2013)": {
      "pheight": 600,
      "pwidth": 960,
      "name": "Nexus 7 (2013)"
    },
    "nexus7(lcddensitysetto175ppi)": {
      "pheight": 731,
      "pwidth": 1170,
      "name": "Nexus 7 (LCD Density set to 175PPI)"
    },
    "nexusone": {
      "pheight": 320,
      "pwidth": 533,
      "name": "Nexus One"
    },
    "nexuss": {
      "pheight": 320,
      "pwidth": 533,
      "name": "Nexus S"
    },
    "nokia500": {
      "pheight": 360,
      "pwidth": 640,
      "name": "Nokia 500"
    },
    "nokia700(operamobile)": {
      "pheight": 240,
      "pwidth": 427,
      "name": "Nokia 700 (Opera Mobile)"
    },
    "nokialumia1520": {
      "pheight": 320,
      "pwidth": 480,
      "name": "Nokia Lumia 1520"
    },
    "nokialumia520": {
      "pheight": 320,
      "pwidth": 480,
      "name": "Nokia Lumia 520"
    },
    "nokialumia610": {
      "pheight": 320,
      "pwidth": 480,
      "name": "Nokia Lumia 610"
    },
    "nokialumia710": {
      "pheight": 320,
      "pwidth": 480,
      "name": "Nokia Lumia 710"
    },
    "nokialumia720": {
      "pheight": 320,
      "pwidth": 480,
      "name": "Nokia Lumia 720"
    },
    "nokialumia800": {
      "pheight": 320,
      "pwidth": 480,
      "name": "Nokia Lumia 800"
    },
    "nokialumia820": {
      "pheight": 320,
      "pwidth": 480,
      "name": "Nokia Lumia 820"
    },
    "nokialumia900": {
      "pheight": 320,
      "pwidth": 480,
      "name": "Nokia Lumia 900"
    },
    "nokialumia920": {
      "pheight": 320,
      "pwidth": 480,
      "name": "Nokia Lumia 920"
    },
    "nokialumia925": {
      "pheight": 320,
      "pwidth": 480,
      "name": "Nokia Lumia 925"
    },
    "nokian9": {
      "pheight": 320,
      "pwidth": 496,
      "name": "Nokia N9"
    },
    "nokian900": {
      "pheight": 480,
      "pwidth": 800,
      "name": "Nokia N900"
    },
    "oppoa37360x640": {
      "pheight": 720,
      "pwidth": 1280,
      "name": "Oppo A37 360x640"
    },
    "palmpixi": {
      "pheight": 320,
      "pwidth": 480,
      "name": "Palm Pixi"
    },
    "panasonictoughpadfz-a1": {
      "pheight": 768,
      "pwidth": 1024,
      "name": "Panasonic Toughpad FZ-A1"
    },
    "pantechvegan°6": {
      "pheight": 360,
      "pwidth": 640,
      "name": "Pantech Vega n°6"
    },
    "pendopad10&quot;": {
      "pheight": 600,
      "pwidth": 1024,
      "name": "PendoPad 10&quot;"
    },
    "pendopad7&quot;": {
      "pheight": 480,
      "pwidth": 800,
      "name": "PendoPad 7&quot;"
    },
    "pioneerdreambook": {
      "pheight": 768,
      "pwidth": 1024,
      "name": "Pioneer Dreambook"
    },
    "scrollexcel": {
      "pheight": 480,
      "pwidth": 800,
      "name": "Scroll Excel"
    },
    "sonyericcsonxperiaplay": {
      "pheight": 425,
      "pwidth": 974,
      "name": "Sony Ericcson Xperia Play"
    },
    "sonyericssonxperiaarc": {
      "pheight": 320,
      "pwidth": 569,
      "name": "Sony Ericsson Xperia Arc"
    },
    "sonyericssonxperiaminist15i": {
      "pheight": 320,
      "pwidth": 401,
      "name": "Sony Ericsson Xperia Mini ST15i"
    },
    "sonyericssonxperianeo": {
      "pheight": 480,
      "pwidth": 854,
      "name": "Sony Ericsson Xperia Neo"
    },
    "sonyericssonxperiax10": {
      "pheight": 320,
      "pwidth": 569,
      "name": "Sony Ericsson Xperia X10"
    },
    "sonyericssonxperiax8": {
      "pheight": 320,
      "pwidth": 480,
      "name": "Sony Ericsson Xperia X8"
    },
    "sonytablets": {
      "pheight": 800,
      "pwidth": 1280,
      "name": "Sony Tablet S"
    },
    "sonyvaiotap20": {
      "pheight": 900,
      "pwidth": 1600,
      "name": "Sony VAIO Tap 20"
    },
    "sonyxperiaacros": {
      "pheight": 360,
      "pwidth": 640,
      "name": "Sony Xperia acro S"
    },
    "sonyxperiap": {
      "pheight": 360,
      "pwidth": 640,
      "name": "Sony Xperia P"
    },
    "sonyxperias": {
      "pheight": 360,
      "pwidth": 640,
      "name": "Sony Xperia S"
    },
    "sonyxperiasola": {
      "pheight": 320,
      "pwidth": 569,
      "name": "Sony Xperia Sola"
    },
    "sonyxperiasp": {
      "pheight": 360,
      "pwidth": 598,
      "name": "Sony Xperia SP"
    },
    "sonyxperiatabletz": {
      "pheight": 800,
      "pwidth": 1280,
      "name": "Sony Xperia Tablet Z"
    },
    "sonyxperiatipo": {
      "pheight": 320,
      "pwidth": 480,
      "name": "Sony Xperia Tipo"
    },
    "sonyxperiau": {
      "pheight": 320,
      "pwidth": 569,
      "name": "Sony Xperia U"
    },
    "sonyxperiav": {
      "pheight": 360,
      "pwidth": 598,
      "name": "Sony Xperia V"
    },
    "sonyxperiaxa": {
      "pheight": 360,
      "pwidth": 640,
      "name": "Sony Xperia XA"
    },
    "sonyxperiaz": {
      "pheight": 360,
      "pwidth": 640,
      "name": "Sony Xperia Z"
    },
    "sonyxperiaz1": {
      "pheight": 360,
      "pwidth": 598,
      "name": "Sony Xperia Z1"
    },
    "sonyxperiaz3": {
      "pheight": 360,
      "pwidth": 598,
      "name": "Sony Xperia Z3"
    },
    "telstrat-hub2": {
      "pheight": 400,
      "pwidth": 683,
      "name": "Telstra T-Hub 2"
    },
    "tescohudl": {
      "pheight": 600,
      "pwidth": 799,
      "name": "Tesco Hudl"
    },
    "toshibaat100": {
      "pheight": 800,
      "pwidth": 1280,
      "name": "Toshiba AT100"
    },
    "toshibaat1s0": {
      "pheight": 602,
      "pwidth": 961,
      "name": "Toshiba AT1S0"
    },
    "toshibaat200": {
      "pheight": 800,
      "pwidth": 1280,
      "name": "Toshiba AT200"
    },
    "toshibaat300": {
      "pheight": 800,
      "pwidth": 1280,
      "name": "Toshiba AT300"
    },
    "toshibaat330": {
      "pheight": 900,
      "pwidth": 1600,
      "name": "Toshiba AT330"
    },
    "vivoy55s360x640": {
      "pheight": 720,
      "pwidth": 1280,
      "name": "Vivo Y55s 360x640"
    },
    "wikocinkslim": {
      "pheight": 320,
      "pwidth": 533,
      "name": "Wiko Cink Slim"
    },
    "xiaomimi3": {
      "pheight": 360,
      "pwidth": 640,
      "name": "Xiaomi Mi 3"
    },
    "xiaomimi4": {
      "pheight": 360,
      "pwidth": 640,
      "name": "Xiaomi Mi 4"
    },
    "xiaomimi-3": {
      "pheight": 360,
      "pwidth": 640,
      "name": "Xiaomi MI-3"
    },
    "xiaomiredmi4360x640": {
      "pheight": 720,
      "pwidth": 1280,
      "name": "Xiaomi Redmi 4 360x640"
    },
    "xiaomiredmi4x": {
      "pheight": 360,
      "pwidth": 640,
      "name": "Xiaomi Redmi 4X"
    },
    "xiaomiredminote3": {
      "pheight": 360,
      "pwidth": 640,
      "name": "Xiaomi Redmi Note 3"
    },
    "xiaomiredminote4": {
      "pheight": 360,
      "pwidth": 640,
      "name": "Xiaomi Redmi Note 4"
    },
    "xiaomiredminote5": {
      "pheight": 393,
      "pwidth": 786,
      "name": "Xiaomi Redmi Note 5"
    },
    "yarvikxentatab8c": {
      "pheight": 768,
      "pwidth": 1024,
      "name": "Yarvik Xenta Tab 8c"
    },
    "ztebladex": {
      "pheight": 360,
      "pwidth": 640,
      "name": "ZTE Blade X"
    },
    "ztegrands": {
      "pheight": 360,
      "pwidth": 640,
      "name": "ZTE Grand S"
    },
    "ztemajestypro": {
      "pheight": 320,
      "pwidth": 570,
      "name": "ZTE Majesty Pro"
    },
    "ztemaven3": {
      "pheight": 320,
      "pwidth": 570,
      "name": "ZTE Maven 3"
    },
    "ztemaxxl": {
      "pheight": 360,
      "pwidth": 640,
      "name": "ZTE Max XL"
    },
    "zteopen": {
      "pheight": 320,
      "pwidth": 415,
      "name": "ZTE Open"
    },
    "zteopen(firefoxos)": {
      "pheight": 320,
      "pwidth": 480,
      "name": "ZTE Open (Firefox OS)"
    },
    "ztet22(telstraurbane)": {
      "pheight": 320,
      "pwidth": 533,
      "name": "ZTE T22 (Telstra Urbane)"
    },
    "ztet28(telstraactivetouch)": {
      "pheight": 320,
      "pwidth": 533,
      "name": "ZTE T28 (Telstra Active Touch)"
    },
    "ztet760(telstrasmart-touch2)": {
      "pheight": 320,
      "pwidth": 480,
      "name": "ZTE T760 (Telstra Smart-Touch 2)"
    },
    "ztet790(telstrapulse)": {
      "pheight": 320,
      "pwidth": 480,
      "name": "ZTE T790 (Telstra Pulse)"
    },
    "ztet81(telstrafrontier4g)": {
      "pheight": 320,
      "pwidth": 533,
      "name": "ZTE T81 (Telstra Frontier 4G)"
    },
    "ztet82(telstraeasytouch4g)": {
      "pheight": 360,
      "pwidth": 598,
      "name": "ZTE T82 (Telstra Easy Touch 4G)"
    },
    "ztet83(telstradave4g)": {
      "pheight": 320,
      "pwidth": 534,
      "name": "ZTE T83 (Telstra Dave 4G)"
    },
    "ztezmaxpro": {
      "pheight": 360,
      "pwidth": 640,
      "name": "ZTE ZMAX Pro"
    }
  }
]

export default devices