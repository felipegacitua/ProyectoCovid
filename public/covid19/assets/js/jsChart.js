const dataModel = [
  {
    country: "USA",
    deaths: 1021137,
    recovered: 80761761,
    active: 1392806,
    confirmed: 83175704,
  },
  {
    country: "India",
    deaths: 523889,
    recovered: 42541887,
    active: 19390,
    confirmed: 43085166,
  },
  {
    country: "Brazil",
    deaths: 663657,
    recovered: 29554308,
    active: 243032,
    confirmed: 30460997,
  },
  {
    country: "France",
    deaths: 146262,
    recovered: 27163913,
    active: 1447590,
    confirmed: 28757765,
  },
  {
    country: "Germany",
    deaths: 136181,
    recovered: 22658600,
    active: 2154460,
    confirmed: 24949241,
  },
  {
    country: "UK",
    deaths: 174912,
    recovered: 21313159,
    active: 550269,
    confirmed: 22038340,
  },
  {
    country: "Russia",
    deaths: 376292,
    recovered: 17563272,
    active: 261510,
    confirmed: 18201074,
  },
  {
    country: "S. Korea",
    deaths: 23007,
    recovered: null,
    active: null,
    confirmed: 17346753,
  },
  {
    country: "Italy",
    deaths: 163889,
    recovered: 15222419,
    active: 1199960,
    confirmed: 16586268,
  },
  {
    country: "Turkey",
    deaths: 98791,
    recovered: 14931490,
    active: 4636,
    confirmed: 15034917,
  },
  {
    country: "Spain",
    deaths: 104668,
    recovered: 11446906,
    active: 401907,
    confirmed: 11953481,
  },
  {
    country: "Vietnam",
    deaths: 43044,
    recovered: 9267281,
    active: 1349033,
    confirmed: 10659358,
  },
  {
    country: "Argentina",
    deaths: 128653,
    recovered: 8895999,
    active: 59021,
    confirmed: 9083673,
  },
  {
    country: "Netherlands",
    deaths: 22262,
    recovered: 7886445,
    active: 144341,
    confirmed: 8053048,
  },
  {
    country: "Japan",
    deaths: 29631,
    recovered: 7517841,
    active: 377658,
    confirmed: 7925130,
  },
  {
    country: "Iran",
    deaths: 141131,
    recovered: 6992001,
    active: 90444,
    confirmed: 7223576,
  },
  {
    country: "Colombia",
    deaths: 139797,
    recovered: 5926476,
    active: 26394,
    confirmed: 6092667,
  },
  {
    country: "Indonesia",
    deaths: 156305,
    recovered: 5884059,
    active: 6951,
    confirmed: 6047315,
  },
  {
    country: "Australia",
    deaths: 7310,
    recovered: 5658513,
    active: 364056,
    confirmed: 6029879,
  },
  {
    country: "Poland",
    deaths: 116069,
    recovered: 5334769,
    active: 546987,
    confirmed: 5997825,
  },
  {
    country: "Mexico",
    deaths: 324350,
    recovered: 5039624,
    active: 376106,
    confirmed: 5740080,
  },
  {
    country: "Ukraine",
    deaths: 108411,
    recovered: null,
    active: null,
    confirmed: 5002870,
  },
  {
    country: "Malaysia",
    deaths: 35555,
    recovered: 4378864,
    active: 36440,
    confirmed: 4450859,
  },
  {
    country: "Thailand",
    deaths: 28781,
    recovered: 4134191,
    active: 118564,
    confirmed: 4281536,
  },
  {
    country: "Austria",
    deaths: 18183,
    recovered: 4063754,
    active: 72307,
    confirmed: 4154244,
  },
  {
    country: "Israel",
    deaths: 10698,
    recovered: 4048807,
    active: 20982,
    confirmed: 4080487,
  },
  {
    country: "Belgium",
    deaths: 31494,
    recovered: 3839733,
    active: 200052,
    confirmed: 4071279,
  },
  {
    country: "Czechia",
    deaths: 40175,
    recovered: 3855944,
    active: 11674,
    confirmed: 3907793,
  },
  {
    country: "Portugal",
    deaths: 22280,
    recovered: null,
    active: null,
    confirmed: 3853800,
  },
  {
    country: "South Africa",
    deaths: 100370,
    recovered: 3651665,
    active: 46378,
    confirmed: 3798413,
  },
  {
    country: "Canada",
    deaths: 39292,
    recovered: 3459763,
    active: 257217,
    confirmed: 3756272,
  },
  {
    country: "Philippines",
    deaths: 60412,
    recovered: 3620659,
    active: 5145,
    confirmed: 3686216,
  },
  {
    country: "Switzerland",
    deaths: 13865,
    recovered: 3489351,
    active: 115819,
    confirmed: 3619035,
  },
  {
    country: "Peru",
    deaths: 212865,
    recovered: null,
    active: null,
    confirmed: 3566523,
  },
  {
    country: "Chile",
    deaths: 57544,
    recovered: 3429112,
    active: 76994,
    confirmed: 3563650,
  },
  {
    country: "Greece",
    deaths: 29249,
    recovered: 3237163,
    active: 69138,
    confirmed: 3335550,
  },
  {
    country: "Denmark",
    deaths: 6191,
    recovered: 2946068,
    active: 16042,
    confirmed: 2968301,
  },
  {
    country: "Romania",
    deaths: 65510,
    recovered: 2606660,
    active: 223842,
    confirmed: 2896012,
  },
  {
    country: "Sweden",
    deaths: 18739,
    recovered: 2470701,
    active: 11477,
    confirmed: 2500917,
  },
  {
    country: "Iraq",
    deaths: 25212,
    recovered: 2298392,
    active: 1683,
    confirmed: 2325287,
  },
  {
    country: "Serbia",
    deaths: 16007,
    recovered: 1978619,
    active: 12928,
    confirmed: 2007554,
  },
  {
    country: "Bangladesh",
    deaths: 29127,
    recovered: 1896279,
    active: 27327,
    confirmed: 1952733,
  },
  {
    country: "Hungary",
    deaths: 46266,
    recovered: 1808061,
    active: 48873,
    confirmed: 1903200,
  },
  {
    country: "Slovakia",
    deaths: 19938,
    recovered: 1746031,
    active: 16638,
    confirmed: 1782607,
  },
  {
    country: "Jordan",
    deaths: 14048,
    recovered: 1678941,
    active: 1227,
    confirmed: 1694216,
  },
  {
    country: "Georgia",
    deaths: 16811,
    recovered: 1637293,
    active: 1117,
    confirmed: 1655221,
  },
  {
    country: "Pakistan",
    deaths: 30372,
    recovered: 1494141,
    active: 4051,
    confirmed: 1528564,
  },
  {
    country: "Ireland",
    deaths: 7092,
    recovered: 1464123,
    active: 48081,
    confirmed: 1519296,
  },
  {
    country: "Norway",
    deaths: 2932,
    recovered: null,
    active: null,
    confirmed: 1426491,
  },
  {
    country: "Kazakhstan",
    deaths: 13660,
    recovered: 1291101,
    active: 790,
    confirmed: 1305551,
  },
  {
    country: "Hong Kong",
    deaths: 9325,
    recovered: null,
    active: null,
    confirmed: 1205083,
  },
  {
    country: "Singapore",
    deaths: 1338,
    recovered: 1140531,
    active: 59107,
    confirmed: 1200976,
  },
  {
    country: "Morocco",
    deaths: 16069,
    recovered: 1148595,
    active: 340,
    confirmed: 1165004,
  },
  {
    country: "Bulgaria",
    deaths: 36920,
    recovered: 978533,
    active: 141746,
    confirmed: 1157199,
  },
  {
    country: "Croatia",
    deaths: 15848,
    recovered: 1103204,
    active: 4526,
    confirmed: 1123578,
  },
  {
    country: "Cuba",
    deaths: 8527,
    recovered: 1094057,
    active: 811,
    confirmed: 1103395,
  },
  {
    country: "Lebanon",
    deaths: 10387,
    recovered: 1081770,
    active: 4887,
    confirmed: 1097044,
  },
  {
    country: "Lithuania",
    deaths: 9108,
    recovered: 1026020,
    active: 23651,
    confirmed: 1058779,
  },
  {
    country: "Tunisia",
    deaths: 28550,
    recovered: null,
    active: null,
    confirmed: 1040193,
  },
  {
    country: "Finland",
    deaths: 3939,
    recovered: 46000,
    active: 973074,
    confirmed: 1023013,
  },
  {
    country: "Slovenia",
    deaths: 6598,
    recovered: 991777,
    active: 12878,
    confirmed: 1011253,
  },
  {
    country: "Belarus",
    deaths: 6954,
    recovered: 928536,
    active: 45378,
    confirmed: 980868,
  },
  {
    country: "Nepal",
    deaths: 11951,
    recovered: 966697,
    active: 217,
    confirmed: 978865,
  },
  {
    country: "New Zealand",
    deaths: 731,
    recovered: 895772,
    active: 56194,
    confirmed: 952697,
  },
  {
    country: "Bolivia",
    deaths: 21923,
    recovered: 859363,
    active: 23811,
    confirmed: 905097,
  },
  {
    country: "UAE",
    deaths: 2302,
    recovered: 882880,
    active: 14060,
    confirmed: 899242,
  },
  {
    country: "Uruguay",
    deaths: 7197,
    recovered: 886654,
    active: 1924,
    confirmed: 895775,
  },
  {
    country: "Ecuador",
    deaths: 35598,
    recovered: null,
    active: null,
    confirmed: 869696,
  },
  {
    country: "Costa Rica",
    deaths: 8405,
    recovered: 832853,
    active: 10816,
    confirmed: 852074,
  },
  {
    country: "Guatemala",
    deaths: 17613,
    recovered: 826812,
    active: 2207,
    confirmed: 846632,
  },
  {
    country: "Latvia",
    deaths: 5777,
    recovered: 809733,
    active: 7600,
    confirmed: 823110,
  },
  {
    country: "Azerbaijan",
    deaths: 9709,
    recovered: 782804,
    active: 72,
    confirmed: 792585,
  },
  {
    country: "Panama",
    deaths: 8185,
    recovered: 763170,
    active: 6303,
    confirmed: 777658,
  },
  {
    country: "Saudi Arabia",
    deaths: 9093,
    recovered: 742019,
    active: 3228,
    confirmed: 754340,
  },
  {
    country: "Sri Lanka",
    deaths: 16506,
    recovered: 646131,
    active: 789,
    confirmed: 663426,
  },
  {
    country: "Paraguay",
    deaths: 18870,
    recovered: 624673,
    active: 5912,
    confirmed: 649455,
  },
  {
    country: "Kuwait",
    deaths: 2555,
    recovered: 628090,
    active: 764,
    confirmed: 631409,
  },
  {
    country: "Myanmar",
    deaths: 19434,
    recovered: 591847,
    active: 1633,
    confirmed: 612914,
  },
  {
    country: "Palestine",
    deaths: 5353,
    recovered: 576242,
    active: 345,
    confirmed: 581940,
  },
  {
    country: "Dominican Republic",
    deaths: 4376,
    recovered: 574726,
    active: 341,
    confirmed: 579443,
  },
  {
    country: "Estonia",
    deaths: 2548,
    recovered: 511857,
    active: 58029,
    confirmed: 572434,
  },
  {
    country: "Bahrain",
    deaths: 1476,
    recovered: 564735,
    active: 3159,
    confirmed: 569370,
  },
  {
    country: "Venezuela",
    deaths: 5709,
    recovered: 515728,
    active: 1077,
    confirmed: 522514,
  },
  {
    country: "Moldova",
    deaths: 11489,
    recovered: 504142,
    active: 1355,
    confirmed: 516986,
  },
  {
    country: "Egypt",
    deaths: 24613,
    recovered: 442182,
    active: 48850,
    confirmed: 515645,
  },
  {
    country: "Libya",
    deaths: 6430,
    recovered: 490973,
    active: 4501,
    confirmed: 501904,
  },
  {
    country: "Cyprus",
    deaths: 1020,
    recovered: 124370,
    active: 348877,
    confirmed: 474267,
  },
  {
    country: "Ethiopia",
    deaths: 7510,
    recovered: 455391,
    active: 7686,
    confirmed: 470587,
  },
  {
    country: "Mongolia",
    deaths: 2179,
    recovered: 313256,
    active: 154450,
    confirmed: 469885,
  },
  {
    country: "Honduras",
    deaths: 10893,
    recovered: 132318,
    active: 279968,
    confirmed: 423179,
  },
  {
    country: "Armenia",
    deaths: 8622,
    recovered: 412019,
    active: 2233,
    confirmed: 422874,
  },
  {
    country: "Oman",
    deaths: 4258,
    recovered: 384243,
    active: 625,
    confirmed: 389126,
  },
  {
    country: "Bosnia and Herzegovina",
    deaths: 15765,
    recovered: 192218,
    active: 169104,
    confirmed: 377087,
  },
  {
    country: "Réunion",
    deaths: 742,
    recovered: 355605,
    active: 17948,
    confirmed: 374295,
  },
  {
    country: "Qatar",
    deaths: 677,
    recovered: 363573,
    active: 528,
    confirmed: 364778,
  },
  {
    country: "Kenya",
    deaths: 5649,
    recovered: 318010,
    active: 137,
    confirmed: 323796,
  },
  {
    country: "Zambia",
    deaths: 3976,
    recovered: 315266,
    active: 513,
    confirmed: 319755,
  },
  {
    country: "North Macedonia",
    deaths: 9280,
    recovered: 299865,
    active: 624,
    confirmed: 309769,
  },
  {
    country: "Botswana",
    deaths: 2688,
    recovered: 303026,
    active: 145,
    confirmed: 305859,
  },
  {
    country: "Albania",
    deaths: 3496,
    recovered: 271306,
    active: 375,
    confirmed: 275177,
  },
  {
    country: "Algeria",
    deaths: 6875,
    recovered: 178358,
    active: 80549,
    confirmed: 265782,
  },
  {
    country: "Nigeria",
    deaths: 3143,
    recovered: 249911,
    active: 2699,
    confirmed: 255753,
  },
  {
    country: "Zimbabwe",
    deaths: 5470,
    recovered: 241850,
    active: 615,
    confirmed: 247935,
  },
  {
    country: "Luxembourg",
    deaths: 1064,
    recovered: 229617,
    active: 8654,
    confirmed: 239335,
  },
  {
    country: "Uzbekistan",
    deaths: 1637,
    recovered: 236746,
    active: 245,
    confirmed: 238628,
  },
  {
    country: "Montenegro",
    deaths: 2715,
    recovered: 231918,
    active: 705,
    confirmed: 235338,
  },
  {
    country: "Mozambique",
    deaths: 2201,
    recovered: 223138,
    active: 48,
    confirmed: 225387,
  },
  {
    country: "Laos",
    deaths: 745,
    recovered: 7660,
    active: 199462,
    confirmed: 207867,
  },
  {
    country: "Kyrgyzstan",
    deaths: 2991,
    recovered: 196405,
    active: 1597,
    confirmed: 200993,
  },
  {
    country: "Iceland",
    deaths: 119,
    recovered: 75685,
    active: 109775,
    confirmed: 185579,
  },
  {
    country: "Maldives",
    deaths: 298,
    recovered: 163687,
    active: 15186,
    confirmed: 179171,
  },
  {
    country: "Afghanistan",
    deaths: 7683,
    recovered: 161896,
    active: 9322,
    confirmed: 178901,
  },
  {
    country: "Taiwan",
    deaths: 876,
    recovered: 28721,
    active: 144345,
    confirmed: 173942,
  },
  {
    country: "Uganda",
    deaths: 3596,
    recovered: 100205,
    active: 60268,
    confirmed: 164069,
  },
  {
    country: "El Salvador",
    deaths: 4128,
    recovered: 150662,
    active: 7299,
    confirmed: 162089,
  },
  {
    country: "Ghana",
    deaths: 1445,
    recovered: 159712,
    active: 47,
    confirmed: 161204,
  },
  {
    country: "Namibia",
    deaths: 4025,
    recovered: 153662,
    active: 1124,
    confirmed: 158811,
  },
  {
    country: "Martinique",
    deaths: 926,
    recovered: 104,
    active: 152223,
    confirmed: 153253,
  },
  {
    country: "Trinidad and Tobago",
    deaths: 3833,
    recovered: 136167,
    active: 8630,
    confirmed: 148630,
  },
  {
    country: "Brunei",
    deaths: 218,
    recovered: 141022,
    active: 671,
    confirmed: 141911,
  },
  {
    country: "Guadeloupe",
    deaths: 854,
    recovered: 2250,
    active: 137026,
    confirmed: 140130,
  },
  {
    country: "Cambodia",
    deaths: 3056,
    recovered: 133144,
    active: 57,
    confirmed: 136257,
  },
  {
    country: "Jamaica",
    deaths: 2967,
    recovered: 83689,
    active: 43643,
    confirmed: 130299,
  },
  {
    country: "Rwanda",
    deaths: 1459,
    recovered: 45522,
    active: 82831,
    confirmed: 129812,
  },
  {
    country: "Cameroon",
    deaths: 1927,
    recovered: 117791,
    active: 62,
    confirmed: 119780,
  },
  {
    country: "Angola",
    deaths: 1900,
    recovered: 97149,
    active: 145,
    confirmed: 99194,
  },
  {
    country: "Malta",
    deaths: 702,
    recovered: 87724,
    active: 3724,
    confirmed: 92150,
  },
  {
    country: "DRC",
    deaths: 1337,
    recovered: 50930,
    active: 34756,
    confirmed: 87023,
  },
  {
    country: "Senegal",
    deaths: 1966,
    recovered: 84020,
    active: 21,
    confirmed: 86007,
  },
  {
    country: "Malawi",
    deaths: 2634,
    recovered: 82066,
    active: 1090,
    confirmed: 85790,
  },
  {
    country: "Ivory Coast",
    deaths: 799,
    recovered: 81112,
    active: 46,
    confirmed: 81957,
  },
  {
    country: "French Guiana",
    deaths: 395,
    recovered: 11254,
    active: 69210,
    confirmed: 80859,
  },
  {
    country: "Suriname",
    deaths: 1328,
    recovered: 49401,
    active: 28607,
    confirmed: 79336,
  },
  {
    country: "Channel Islands",
    deaths: 169,
    recovered: 73224,
    active: 990,
    confirmed: 74383,
  },
  {
    country: "French Polynesia",
    deaths: 648,
    recovered: null,
    active: null,
    confirmed: 72746,
  },
  {
    country: "Barbados",
    deaths: 398,
    recovered: 66662,
    active: 3733,
    confirmed: 70793,
  },
  {
    country: "Eswatini",
    deaths: 1397,
    recovered: 68969,
    active: 312,
    confirmed: 70678,
  },
  {
    country: "Fiji",
    deaths: 862,
    recovered: 62791,
    active: 993,
    confirmed: 64646,
  },
  {
    country: "Madagascar",
    deaths: 1391,
    recovered: 59370,
    active: 3420,
    confirmed: 64181,
  },
  {
    country: "Guyana",
    deaths: 1228,
    recovered: 62143,
    active: 113,
    confirmed: 63484,
  },
  {
    country: "Sudan",
    deaths: 4931,
    recovered: null,
    active: null,
    confirmed: 62117,
  },
  {
    country: "New Caledonia",
    deaths: 312,
    recovered: 60231,
    active: 206,
    confirmed: 60749,
  },
  {
    country: "Bhutan",
    deaths: 21,
    recovered: 58623,
    active: 630,
    confirmed: 59274,
  },
  {
    country: "Mauritania",
    deaths: 982,
    recovered: 57695,
    active: 17,
    confirmed: 58694,
  },
  {
    country: "Belize",
    deaths: 676,
    recovered: 56604,
    active: 217,
    confirmed: 57497,
  },
  {
    country: "Cabo Verde",
    deaths: 401,
    recovered: 55556,
    active: 71,
    confirmed: 56028,
  },
  {
    country: "Syria",
    deaths: 3150,
    recovered: 52201,
    active: 474,
    confirmed: 55825,
  },
  {
    country: "Gabon",
    deaths: 304,
    recovered: 47285,
    active: 13,
    confirmed: 47602,
  },
  {
    country: "Papua New Guinea",
    deaths: 650,
    recovered: 43133,
    active: 38,
    confirmed: 43821,
  },
  {
    country: "Seychelles",
    deaths: 166,
    recovered: 41727,
    active: 581,
    confirmed: 42474,
  },
  {
    country: "Curaçao",
    deaths: 274,
    recovered: 41612,
    active: 355,
    confirmed: 42241,
  },
  {
    country: "Andorra",
    deaths: 153,
    recovered: 40689,
    active: 507,
    confirmed: 41349,
  },
  {
    country: "Burundi",
    deaths: 38,
    recovered: 773,
    active: 39586,
    confirmed: 40397,
  },
  {
    country: "Mauritius",
    deaths: 990,
    recovered: 35962,
    active: 739,
    confirmed: 37691,
  },
  {
    country: "Mayotte",
    deaths: 187,
    recovered: 2964,
    active: 34212,
    confirmed: 37363,
  },
  {
    country: "Togo",
    deaths: 273,
    recovered: 36693,
    active: 25,
    confirmed: 36991,
  },
  {
    country: "Guinea",
    deaths: 440,
    recovered: 35976,
    active: 43,
    confirmed: 36459,
  },
  {
    country: "Aruba",
    deaths: 212,
    recovered: 34516,
    active: 118,
    confirmed: 34846,
  },
  {
    country: "Faeroe Islands",
    deaths: 28,
    recovered: 7693,
    active: 26937,
    confirmed: 34658,
  },
  {
    country: "Tanzania",
    deaths: 803,
    recovered: null,
    active: null,
    confirmed: 33872,
  },
  {
    country: "Bahamas",
    deaths: 798,
    recovered: 32368,
    active: 416,
    confirmed: 33582,
  },
  {
    country: "Lesotho",
    deaths: 697,
    recovered: 24155,
    active: 8058,
    confirmed: 32910,
  },
  {
    country: "Mali",
    deaths: 732,
    recovered: 29942,
    active: 176,
    confirmed: 30850,
  },
  {
    country: "Haiti",
    deaths: 835,
    recovered: 29522,
    active: 340,
    confirmed: 30697,
  },
  {
    country: "Isle of Man",
    deaths: 87,
    recovered: 26794,
    active: 1535,
    confirmed: 28416,
  },
  {
    country: "Benin",
    deaths: 163,
    recovered: 25506,
    active: 1283,
    confirmed: 26952,
  },
  {
    country: "Somalia",
    deaths: 1350,
    recovered: 13182,
    active: 11953,
    confirmed: 26485,
  },
  {
    country: "Congo",
    deaths: 385,
    recovered: 20178,
    active: 3516,
    confirmed: 24079,
  },
  {
    country: "Saint Lucia",
    deaths: 368,
    recovered: 22917,
    active: 174,
    confirmed: 23459,
  },
  {
    country: "Timor-Leste",
    deaths: 130,
    recovered: 22730,
    active: 15,
    confirmed: 22875,
  },
  {
    country: "Cayman Islands",
    deaths: 27,
    recovered: 8553,
    active: 13643,
    confirmed: 22223,
  },
  {
    country: "Burkina Faso",
    deaths: 382,
    recovered: 20439,
    active: 32,
    confirmed: 20853,
  },
  {
    country: "Nicaragua",
    deaths: 225,
    recovered: 4225,
    active: 14041,
    confirmed: 18491,
  },
  {
    country: "Gibraltar",
    deaths: 102,
    recovered: 16579,
    active: 1156,
    confirmed: 17837,
  },
  {
    country: "South Sudan",
    deaths: 138,
    recovered: 13514,
    active: 3831,
    confirmed: 17483,
  },
  {
    country: "Tajikistan",
    deaths: 124,
    recovered: 17264,
    active: 0,
    confirmed: 17388,
  },
  {
    country: "Liechtenstein",
    deaths: 84,
    recovered: 17031,
    active: 99,
    confirmed: 17214,
  },
  {
    country: "San Marino",
    deaths: 115,
    recovered: 16059,
    active: 302,
    confirmed: 16476,
  },
  {
    country: "Equatorial Guinea",
    deaths: 183,
    recovered: 15698,
    active: 26,
    confirmed: 15907,
  },
  {
    country: "Solomon Islands",
    deaths: 141,
    recovered: 14109,
    active: 1427,
    confirmed: 15677,
  },
  {
    country: "Djibouti",
    deaths: 189,
    recovered: 15427,
    active: 15,
    confirmed: 15631,
  },
  {
    country: "Grenada",
    deaths: 220,
    recovered: 14111,
    active: 412,
    confirmed: 14743,
  },
  {
    country: "CAR",
    deaths: 113,
    recovered: 6859,
    active: 7677,
    confirmed: 14649,
  },
  {
    country: "Bermuda",
    deaths: 131,
    recovered: 12981,
    active: 376,
    confirmed: 13488,
  },
  {
    country: "Dominica",
    deaths: 63,
    recovered: 12025,
    active: 73,
    confirmed: 12161,
  },
  {
    country: "Gambia",
    deaths: 365,
    recovered: 11591,
    active: 39,
    confirmed: 11995,
  },
  {
    country: "Greenland",
    deaths: 21,
    recovered: 2761,
    active: 9189,
    confirmed: 11971,
  },
  {
    country: "Yemen",
    deaths: 2149,
    recovered: 9009,
    active: 660,
    confirmed: 11818,
  },
  {
    country: "Monaco",
    deaths: 54,
    recovered: 11638,
    active: 109,
    confirmed: 11801,
  },
  {
    country: "Tonga",
    deaths: 11,
    recovered: 9255,
    active: 1228,
    confirmed: 10494,
  },
  {
    country: "Saint Martin",
    deaths: 63,
    recovered: 1399,
    active: 9000,
    confirmed: 10462,
  },
  {
    country: "Sint Maarten",
    deaths: 86,
    recovered: 9913,
    active: 66,
    confirmed: 10065,
  },
  {
    country: "Eritrea",
    deaths: 103,
    recovered: 9631,
    active: 0,
    confirmed: 9734,
  },
  {
    country: "Caribbean Netherlands",
    deaths: 34,
    recovered: 9619,
    active: 76,
    confirmed: 9729,
  },
  {
    country: "Samoa",
    deaths: 19,
    recovered: 1605,
    active: 7968,
    confirmed: 9592,
  },
  {
    country: "Niger",
    deaths: 309,
    recovered: 8524,
    active: 110,
    confirmed: 8943,
  },
  {
    country: "Guinea-Bissau",
    deaths: 171,
    recovered: 7528,
    active: 503,
    confirmed: 8202,
  },
  {
    country: "Comoros",
    deaths: 160,
    recovered: 7933,
    active: 7,
    confirmed: 8100,
  },
  {
    country: "Sierra Leone",
    deaths: 125,
    recovered: null,
    active: null,
    confirmed: 7681,
  },
  {
    country: "Antigua and Barbuda",
    deaths: 136,
    recovered: 7443,
    active: 47,
    confirmed: 7626,
  },
  {
    country: "Vanuatu",
    deaths: 13,
    recovered: 7023,
    active: 497,
    confirmed: 7533,
  },
  {
    country: "Liberia",
    deaths: 294,
    recovered: 5747,
    active: 1393,
    confirmed: 7434,
  },
  {
    country: "Chad",
    deaths: 193,
    recovered: 4874,
    active: 2345,
    confirmed: 7412,
  },
  {
    country: "St. Vincent Grenadines",
    deaths: 106,
    recovered: 6641,
    active: 39,
    confirmed: 6786,
  },
  {
    country: "British Virgin Islands",
    deaths: 62,
    recovered: null,
    active: null,
    confirmed: 6355,
  },
  {
    country: "Sao Tome and Principe",
    deaths: 73,
    recovered: 5884,
    active: 7,
    confirmed: 5964,
  },
  {
    country: "Turks and Caicos",
    deaths: 36,
    recovered: 5862,
    active: 65,
    confirmed: 5963,
  },
  {
    country: "Saint Kitts and Nevis",
    deaths: 43,
    recovered: 5519,
    active: 4,
    confirmed: 5566,
  },
  {
    country: "Cook Islands",
    deaths: 1,
    recovered: 4863,
    active: 252,
    confirmed: 5116,
  },
  {
    country: "Palau",
    deaths: 6,
    recovered: 3984,
    active: 620,
    confirmed: 4610,
  },
  {
    country: "St. Barth",
    deaths: 6,
    recovered: null,
    active: null,
    confirmed: 4544,
  },
  {
    country: "Kiribati",
    deaths: 13,
    recovered: 2601,
    active: 470,
    confirmed: 3084,
  },
  {
    country: "Anguilla",
    deaths: 9,
    recovered: 2766,
    active: 13,
    confirmed: 2788,
  },
  {
    country: "Saint Pierre Miquelon",
    deaths: 1,
    recovered: 2449,
    active: 251,
    confirmed: 2701,
  },
  {
    country: "Diamond Princess",
    deaths: 13,
    recovered: 699,
    active: 0,
    confirmed: 712,
  },
  {
    country: "Wallis and Futuna",
    deaths: 7,
    recovered: 438,
    active: 9,
    confirmed: 454,
  },
  {
    country: "Montserrat",
    deaths: 2,
    recovered: 181,
    active: 90,
    confirmed: 273,
  },
  {
    country: "Falkland Islands",
    deaths: 0,
    recovered: null,
    active: null,
    confirmed: 128,
  },
  {
    country: "Macao",
    deaths: 0,
    recovered: 82,
    active: 0,
    confirmed: 82,
  },
  {
    country: "Vatican City",
    deaths: 0,
    recovered: 29,
    active: 0,
    confirmed: 29,
  },
  {
    country: "Marshall Islands",
    deaths: 0,
    recovered: 14,
    active: 3,
    confirmed: 17,
  },
  {
    country: "Western Sahara",
    deaths: 1,
    recovered: 9,
    active: 0,
    confirmed: 10,
  },
  {
    country: "MS Zaandam",
    deaths: 2,
    recovered: 7,
    active: 0,
    confirmed: 9,
  },
  {
    country: "Niue",
    deaths: 0,
    recovered: 7,
    active: 2,
    confirmed: 9,
  },
  {
    country: "Micronesia",
    deaths: 0,
    recovered: 1,
    active: 6,
    confirmed: 7,
  },
  {
    country: "Nauru",
    deaths: 0,
    recovered: 3,
    active: 2,
    confirmed: 5,
  },
  {
    country: "Saint Helena",
    deaths: 0,
    recovered: 2,
    active: 0,
    confirmed: 2,
  },
  {
    country: "China",
    deaths: 5112,
    recovered: 196458,
    active: 16266,
    confirmed: 217836,
  },
]
/* const comparador= ( a, b ) => {
  if ( a.country.toLowerCase() < b.country.toLowerCase()){
    return -1;
  }
  if ( a.country.toLowerCase() > b.country.toLowerCase()){
    return 1;
  }
  return 0;
} */
const comparador= ( a, b ) => { //Dentro de sort ordena de menor a mayor
  if(a.active){//not null 
    if ( a.active > b.active){
      return -1;
    }
    if ( a.active < b.active){
      return 1;
    }
    return 0;
  }
}
const ordenador=(dataModel) => {
    dataModel.sort(comparador);
    return dataModel
};

let dataModelOrdenada=ordenador(dataModel);

const cortadora=(dataSet,a=0,b=10)=>{
    let ds=dataSet.slice(a,b);
    return ds;
}

let dataModelOrdenadaCortada=cortadora(dataModelOrdenada, 0, 10);
let mayorCifra;
//Construye sòlo datapoints de la data para cada serie del grafico
const dataPChartColumns=(dataModelOrdenadaCortada)=>{
  let columnActive=[];
  let columnConfirmed=[];
  let columnDeaths=[];
  let columnRecovered=[];
  //DIFERENCIA ENTRE MAP Y FOREACH PENDIENTE
  dataModelOrdenadaCortada.forEach(pais => {
    let colActive={ label: pais.country,indexLabel: `Casos Activos ${pais.country}`, indexLabelFontColor: "black", indexLabelOrientation: "vertical", indexLabelPlacement: "inside"};
    colActive.y=parseInt(pais.active);
    //indexLabel: "Higher", indexLabelFontColor: "black", indexLabelOrientation: "vertical", indexLabelPlacement: "inside"}
    colActive.y=parseInt(pais.active);
    let colConfirmed={ label: `${pais.country}`};
    colConfirmed.y=parseInt(pais.confirmed);
    let colDeaths={ label: `${pais.country}`};
    colDeaths.y=parseInt(pais.deaths);
    let colRecovered={ label: `${pais.country}`};
    colRecovered.y=parseInt(pais.recovered);
    columnActive.push(colActive);
    columnConfirmed.push(colConfirmed);
    columnDeaths.push(colDeaths);
    columnRecovered.push(colRecovered);
  });
  let buscandoMayorCifra=[...columnActive,...columnConfirmed,...columnDeaths,...columnRecovered];
  mayorCifra=Math.max(...buscandoMayorCifra.map(o => o.y));

  let cActive= dataChartColumns(columnActive, "Activos");
  let cConfirmed= dataChartColumns(columnConfirmed, "Confirmados");
  let cDeaths= dataChartColumns(columnDeaths, "Fallecidos");
  let cRecovered= dataChartColumns(columnRecovered, "Recuperados");
  return [cActive, cConfirmed, cDeaths, cRecovered].flat()
}
//Construye toda la data para cada serie del grafico
const dataChartColumns=(dataCol, caseType)=>{
  console.log(caseType);
  console.log(dataCol);
  let data=[{ type: "column",
              showInLegend: true,
              toolTipContent: `${caseType}`,//
              indexLabel: caseType=="Activos" ? "{name}-({y})" : "",
              dataPoints: dataCol}];
  console.log(data);
  return data;
}
//dataSet para construir grafico de barras de informaciòn de 10 paises con màs casos activos
let datasForChart=dataPChartColumns(dataModelOrdenadaCortada);

const chartColumn = (dataColumns) => {
  //let max=Math.max(...dataColumns.map(o => o.y))
  console.log("chartColumn: ",dataColumns);
  console.log({ name: `${dataColumns[0].dataPoints[1].name}`, y: `${dataColumns[0].dataPoints[1].y}`},
  );
  CanvasJS.addColorSet("Colors",
                ["#2F4F4F",
                "#008080",
                "#2E8B57",
                "#3CB371",
                "#90EE90"]);
  let chart = new CanvasJS.Chart("graficoDiv", 
  {
      height:700,
      exportEnabled: false,
      title: {
        text: `10 paises con más casos activos`,
        //fontFamily:	“Calibri, Optima, Candara, Verdana, Geneva, sans-serif”
        horizontalAlign:'left',
        fontColor: "blue",
        fontSize: 50,
      },
      subtitles:[
        {
          text: "Estadísticas de Impacto Covid",
          //fontFamily:	“Calibri, Optima, Candara, Verdana, Geneva, sans-serif”
          fontColor: "blue",
          fontSize: 30
        }],
        axisY:{
          valueFormatString: "#,###,,.##M",
          
          interlacedColor: "#F8F1E4",
          tickLength: 10,
          lineColor:	"grey",
          lineThickness: 0.2,
          
          maximum: mayorCifra,
          scaleBreaks: {
            spacing: 20, //5,10,20
            color:"white",//“white”	“green”,”#23EA23″
            lineColor:"gray",//“red”	“green”,”#23EA23″
            lineThickness:2,//
            type:"straight",//“straight”, “waved”, “zigzag”
            autoCalculate: true,
            collapsibleThreshold: "60%",
            maxNumberOfAutoBreaks: 3
          }
        },
      axisX:{
          title: "Paises",
          gridThickness: 0,
          tickLength: 10,
          stripLines:[
            {startValue:0.5, endValue:1.5, color:"magenta"},
            {startValue:1.5, endValue:2.5, color:"blue"},
            {startValue:2.5, endValue:3.5, color:"black"},
            {startValue:3.5, endValue:4.5, color:"red"},
            {startValue:4.5, endValue:5.5, color:"magenta"},
            {startValue:5.5, endValue:6.5, color:"blue"},
            {startValue:6.5, endValue:7.5, color:"black"},
            {startValue:7.5, endValue:8.5, color:"red"},
            {startValue:8.5, endValue:9.5, color:"magenta"},
            ]
         },
      
      legend: {
        cursor: "pointer",
      },
      data:dataColumns,

      animationEnabled: true,
      animationDuration: 2000,
      
      colorSet: "Colors",  
      backgroundColor: "#F5DEB3",
      
      /* legend: {
        horizontalAlign: "Paises",
        verticalAlign: "Pacientes"
      }, */
      dataPointMaxWidth: 40,
      dataPointMinWidth: 5,
    },

  );
  chart.render();
};

const chartPie = (dataModelCountry) => {

  let chart = new CanvasJS.Chart("modalDetalle", {
    exportEnabled: false,
    animationEnabled: true,
    title: {
      text: `Estadísticas de Impacto Covid en ${dataModelCountry.country}`,
    },
    legend: {
      cursor: "pointer",
    },
    data: [
      {
        type: "pie",
        showInLegend: true,
        toolTipContent: "{name}: <strong>{y}%</strong>",
        indexLabel: "{name} - ({y})",
        //DATA POINTS RESULTOS ARRAY EN FUNCION INVOCADA
        dataPoints: [
          { name: "Fallecidos", y: `${dataModelCountry.deaths}`},
          { name: "Recuperados", y: `${dataModelCountry.recovered}`},
          { name: "Activos", y: `${dataModelCountry.active}`},
          { name: "Confirmados", y: `${dataModelCountry.confirmed}`},
        ],
      },
    ],
  });
  console.log("chart: ",chart);
  chart.render();
};

chartColumn(datasForChart);
chartPie(dataModelOrdenadaCortada[0]);