/** 
 * 时间戳转化为年 月 日 时 分 秒 
 * number: 传入时间戳 
 * format：返回格式，支持自定义，但参数必须与formateArr里保持一致 
*/
function formatTime(number, format) {

  var formateArr = ['Y', 'M', 'D', 'h', 'm', 's'];
  var returnArr = [];

  var date = new Date(number * 1000);
  returnArr.push(date.getFullYear());
  returnArr.push(formatNumber(date.getMonth() + 1));
  returnArr.push(formatNumber(date.getDate()));

  returnArr.push(formatNumber(date.getHours()));
  returnArr.push(formatNumber(date.getMinutes()));
  returnArr.push(formatNumber(date.getSeconds()));

  for (var i in returnArr) {
    format = format.replace(formateArr[i], returnArr[i]);
  }
  return format;
}

//数据转化  
function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function getAreaInfo(callBack) {
  var area = [
    {
      "ID" : "1",
      "ProvinceName" : "北京",
      "cities" :     [
        {
          "CityName" : "北京市",
          "ID" : "2",
          "PID" : "1",
          "ZipCode" : "100000",
        }
      ],
    },
    {
      "ID" : "21",
      "ProvinceName" : "天津",
      "cities" : [
        {
          "CityName" : "天津市",
          "ID" : "22",
          "PID" : "21",
          "ZipCode" : "100000",
        }
      ]
    },
    {
      "ID" : "41",
      "ProvinceName" : "河北省",
      "cities" : [
        {
          "CityName" : "石家庄市",
          "ID" : "42",
          "PID" : "41",
          "ZipCode" : "050000",
        },
        {
          "CityName" : "唐山市",
          "ID" : "66",
          "PID" : "41",
          "ZipCode" : "063000",
        },
        {
          "CityName" : "秦皇岛市",
          "ID" : "81",
          "PID" : "41",
          "ZipCode" : "066000",
        },
        {
          "CityName" : "邯郸市",
          "ID" : "89",
          "PID" : "41",
          "ZipCode" : "056000",
        },
        {
          "CityName" : "邢台市",
          "ID" : "109",
          "PID" : "41",
          "ZipCode" : "054000",
        },
        {
          "CityName" : "保定市",
          "ID" : "129",
          "PID" : "41",
          "ZipCode" : "071000",
        },
        {
          "CityName" : "张家口市",
          "ID" : "155",
          "PID" : "41",
          "ZipCode" : "075000",
        },
        {
          "CityName" : "承德市",
          "ID" : "173",
          "PID" : "41",
          "ZipCode" : "067000",
        },
        {
          "CityName" : "沧州市",
          "ID" : "185",
          "PID" : "41",
          "ZipCode" : "061000",
        },
        {
          "CityName" : "廊坊市",
          "ID" : "202",
          "PID" : "41",
          "ZipCode" : "065000",
        },
        {
          "CityName" : "衡水市",
          "ID" : "213",
          "PID" : "41",
          "ZipCode" : "053000",
        }
      ]
    },
    {
      "ID" : "225",
      "ProvinceName" : "山西省",
      "cities" : [
        {
          "CityName" : "太原市",
          "ID" : "226",
          "PID" : "225",
          "ZipCode" : "030000",
        },
        {
          "CityName" : "大同市",
          "ID" : "237",
          "PID" : "225",
          "ZipCode" : "037000",
        },
        {
          "CityName" : "阳泉市",
          "ID" : "249",
          "PID" : "225",
          "ZipCode" : "045000",
        },
        {
          "CityName" : "长治市",
          "ID" : "255",
          "PID" : "225",
          "ZipCode" : "046000",
        },
        {
          "CityName" : "晋城市",
          "ID" : "269",
          "PID" : "225",
          "ZipCode" : "048000",
        },
        {
          "CityName" : "朔州市",
          "ID" : "276",
          "PID" : "225",
          "ZipCode" : "036000",
        },
        {
          "CityName" : "晋中市",
          "ID" : "283",
          "PID" : "225",
          "ZipCode" : "030600",
        },
        {
          "CityName" : "运城市",
          "ID" : "295",
          "PID" : "225",
          "ZipCode" : "044000",
        },
        {
          "CityName": "忻州市",
          "ID" : "309",
          "PID" : "225",
          "ZipCode" : "034000",
        },
        {
          "CityName" : "临汾市",
          "ID" : "324",
          "PID" : "225",
          "ZipCode" : "041000",
        },
        {
          "CityName" : "吕梁市",
          "ID" : "342",
          "PID" : "225",
          "ZipCode" : "030500",
        }
      ]
    },
    {
      "ID" : "356",
      "ProvinceName" : "内蒙古",
      "cities" : [
        {
          "CityName" : "呼和浩特市",
          "ID" : "357",
          "PID" : "356",
          "ZipCode" : "010000",
        },
        {
          "CityName" : "包头市",
          "ID" : "367",
          "PID" : "356",
          "ZipCode" : "014000",
        },
        {
          "CityName" : "乌海市",
          "ID" : "377",
          "PID" : "356",
          "ZipCode" : "016000",
        },
        {
          "CityName" : "赤峰市",
          "ID" : "381",
          "PID" : "356",
          "ZipCode" : "024000",
        },
        {
          "CityName" : "通辽市",
          "ID" : "394",
          "PID" : "356",
          "ZipCode" : "028000",
        },
        {
          "CityName" : "鄂尔多斯市",
          "ID" : "403",
          "PID" : "356",
          "ZipCode" : "010300",
        },
        {
          "CityName" : "呼伦贝尔市",
          "ID" : "413",
          "PID" : "356",
          "ZipCode" : "021000",
        },
        {
          "CityName" : "巴彦淖尔市",
          "ID" : "427",
          "PID" : "356",
          "ZipCode" : "014400",
        },
        {
          "CityName" : "乌兰察布市",
          "ID" : "435",
          "PID" : "356",
          "ZipCode" : "011800",
        },
        {
          "CityName" : "兴安盟",
          "ID" : "447",
          "PID" : "356",
          "ZipCode" : "137500",
        },
        {
          "CityName" : "锡林格勒盟",
          "ID" : "454",
          "PID" : "356",
          "ZipCode" : "011100",
        },
        {
          "CityName" : "阿拉善盟",
          "ID" : "467",
          "PID" : "356",
          "ZipCode" : "016000",
        }
      ]
    },
    {
      "ID" : "471",
      "ProvinceName" : "辽宁省",
      "cities" : [
        {
          "CityName" : "沈阳市",
          "ID" : "472",
          "PID" : "471",
          "ZipCode" : "110000",
        },
        {
          "CityName" : "大连市",
          "ID" : "486",
          "PID" : "471",
          "ZipCode" : "116000",
        },
        {
          "CityName" : "鞍山市",
          "ID" : "497",
          "PID" : "471",
          "ZipCode" : "114000",
        },
        {
          "CityName" : "抚顺市",
          "ID" : "505",
          "PID" : "471",
          "ZipCode" : "113000",
        },
        {
          "CityName" : "本溪市",
          "ID" : "513",
          "PID" : "471",
          "ZipCode" : "117000",
        },
        {
          "CityName" : "丹东市",
          "ID" : "520",
          "PID" : "471",
          "ZipCode" : "118000",
        },
        {
          "CityName" : "锦州市",
          "ID" : "527",
          "PID" : "471",
          "ZipCode" : "121000",
        },
        {
          "CityName" : "营口市",
          "ID" : "535",
          "PID" : "471",
          "ZipCode" : "115000",
        },
        {
          "CityName" : "阜新市",
          "ID" : "542",
          "PID" : "471",
          "ZipCode" : "123000",
        },
        {
          "CityName" : "辽阳市",
          "ID" : "550",
          "PID" : "471",
          "ZipCode" : "111000",
        },
        {
          "CityName" : "盘锦市",
          "ID" : "558",
          "PID" : "471",
          "ZipCode" : "124000",
        },
        {
          "CityName" : "铁岭市",
          "ID" : "563",
          "PID" : "471",
          "ZipCode" : "112000",
        },
        {
          "CityName" : "朝阳市",
          "ID" : "571",
          "PID" : "471",
          "ZipCode" : "122000",
        },
        {
          "CityName" : "葫芦岛市",
          "ID" : "579",
          "PID" : "471",
          "ZipCode" : "125000",
        }
      ]
    },
    {
      "ID" : "586",
      "ProvinceName" : "吉林省",
      "cities" :     [
        {
          "CityName" : "长春市",
          "ID" : "587",
          "PID" : "586",
          "ZipCode" : "130000",
        },
        {
          "CityName" : "吉林市",
          "ID" : "598",
          "PID" : "586",
          "ZipCode" : "132000",
        },
        {
          "CityName" : "四平市",
          "ID" : "608",
          "PID" : "586",
          "ZipCode" : "136000",
        },
        {
          "CityName" : "辽源市",
          "ID" : "615",
          "PID" : "586",
          "ZipCode" : "136200",
        },
        {
          "CityName" : "通化市",
          "ID" : "620",
          "PID" : "586",
          "ZipCode" : "134000",
        },
        {
          "CityName" : "白山市",
          "ID" : "628",
          "PID" : "586",
          "ZipCode" : "134300",
        },
        {
          "CityName" : "松原市",
          "ID" : "635",
          "PID" : "586",
          "ZipCode" : "131100",
        },
        {
          "CityName" : "白城市",
          "ID" : "641",
          "PID" : "586",
          "ZipCode" : "137000",
        },
        {
          "CityName" : "延边朝鲜族自治州",
          "ID" : "647",
          "PID" : "586",
          "ZipCode" : "133000",
        }
      ]
    },
    {
      "ID" : "656",
      "ProvinceName" : "黑龙江",
      "cities" :     [
        {
          "CityName" : "哈尔滨市",
          "ID" : "657",
          "PID" : "656",
          "ZipCode" : "150000",
        },
        {
          "CityName" : "齐齐哈尔市",
          "ID" : "676",
          "PID" : "656",
          "ZipCode" : "161000",
        },
        {
          "CityName" : "鸡西市",
          "ID" : "693",
          "PID" : "656",
          "ZipCode" : "158100",
        },
        {
          "CityName" : "鹤岗市",
          "ID" : "703",
          "PID" : "656",
          "ZipCode" : "154100",
        },
        {
          "CityName" : "双鸭山市",
          "ID" : "712",
          "PID" : "656",
          "ZipCode" : "155100",
        },
        {
          "CityName" : "大庆市",
          "ID" : "721",
          "PID" : "656",
          "ZipCode" : "163000",
        },
        {
          "CityName" : "伊春市",
          "ID" : "731",
          "PID" : "656",
          "ZipCode" : "152300",
        },
        {
          "CityName" : "佳木斯市",
          "ID" : "749",
          "PID" : "656",
          "ZipCode" : "154000",
        },
        {
          "CityName" : "七台河市",
          "ID" : "760",
          "PID" : "656",
          "ZipCode" : "154600",
        },
        {
          "CityName" : "牡丹江市",
          "ID" : "765",
          "PID" : "656",
          "ZipCode" : "157000",
        },
        {
          "CityName" : "黑河市",
          "ID" : "776",
          "PID" : "656",
          "ZipCode" : "164300",
        },
        {
          "CityName" : "绥化市",
          "ID" : "783",
          "PID" : "656",
          "ZipCode" : "152000",
        },
        {
          "CityName" : "大兴安岭地区",
          "ID" : "794",
          "PID" : "656",
          "ZipCode" : "165000",
        }
      ]
    },
    {
      "ID" : "802",
      "ProvinceName" : "上海",
      "cities" :     [
        {
          "CityName" : "上海市",
          "ID" : "803",
          "PID" : "802",
          "ZipCode" : "200000",
        }
      ],
    },
    {
      "ID" : "823",
      "ProvinceName" : "江苏省",
      "cities" :     [
        {
          "CityName" : "南京市",
          "ID" : "824",
          "PID" : "823",
          "ZipCode" : "210000",
        },
        {
          "CityName" : "无锡市",
          "ID" : "838",
          "PID" : "823",
          "ZipCode" : "214000",
        },
        {
          "CityName" : "徐州市",
          "ID" : "847",
          "PID" : "823",
          "ZipCode" : "221000",
        },
        {
          "CityName" : "常州市",
          "ID" : "859",
          "PID" : "823",
          "ZipCode" : "213000",
        },
        {
          "CityName" : "苏州市",
          "ID" : "867",
          "PID" : "823",
          "ZipCode" : "215000",
        },
        {
          "CityName" : "南通市",
          "ID" : "879",
          "PID" : "823",
          "ZipCode" : "226000",
        },
        {
          "CityName" : "连云港市",
          "ID" : "888",
          "PID" : "823",
          "ZipCode" : "222000",
        },
        {
          "CityName" : "淮安市",
          "ID" : "896",
          "PID" : "823",
          "ZipCode" : "223200",
        },
        {
          "CityName" : "盐城市",
          "ID" : "905",
          "PID" : "823",
          "ZipCode" : "224000",
        },
        {
          "CityName" : "扬州市",
          "ID" : "915",
          "PID" : "823",
          "ZipCode" : "225000",
        },
        {
          "CityName" : "镇江市",
          "ID" : "923",
          "PID" : "823",
          "ZipCode" : "212000",
        },
        {
          "CityName" : "泰州市",
          "ID" : "930",
          "PID" : "823",
          "ZipCode" : "225300",
        },
        {
          "CityName" : "宿迁市",
          "ID" : "937",
          "PID" : "823",
          "ZipCode" : "223800",
        }
      ]
    },
    {
      "ID" : "943",
      "ProvinceName" : "浙江省",
      "cities" :     [
        {
          "CityName" : "杭州市",
          "ID" : "944",
          "PID" : "943",
          "ZipCode" : "310000",
        },
        {
          "CityName" : "宁波市",
          "ID" : "958",
          "PID" : "943",
          "ZipCode" : "315000",
        },
        {
          "CityName" : "温州市",
          "ID" : "970",
          "PID" : "943",
          "ZipCode" : "325000",
        },
        {
          "CityName" : "嘉兴市",
          "ID" : "982",
          "PID" : "943",
          "ZipCode" : "314000",
        },
        {
          "CityName" : "湖州市",
          "ID" : "990",
          "PID" : "943",
          "ZipCode" : "313000",
        },
        {
          "CityName" : "绍兴市",
          "ID" : "996",
          "PID" : "943",
          "ZipCode" : "312000",
        },
        {
          "CityName" : "金华市",
          "ID" : "1003",
          "PID" : "943",
          "ZipCode" : "321000",
        },
        {
          "CityName": "衢州市",
          "ID" : "1013",
          "PID" : "943",
          "ZipCode" : "324000",
        },
        {
          "CityName" : "舟山市",
          "ID" : "1020",
          "PID" : "943",
          "ZipCode" : "316000",
        },
        {
          "CityName" : "台州市",
          "ID" : "1025",
          "PID" : "943",
          "ZipCode" : "318000",
        },
        {
          "CityName" : "丽水市",
          "ID" : "1035",
          "PID" : "943",
          "ZipCode" : "323000",
        }
      ]
    },
    {
      "ID" : "1045",
      "ProvinceName" : "安徽省",
      "cities" :     [
        {
          "CityName" : "合肥市",
          "ID" : "1046",
          "PID" : "1045",
          "ZipCode" : "230000",
        },
        {
          "CityName" : "芜湖市",
          "ID" : "1054",
          "PID" : "1045",
          "ZipCode" : "241000",
        },
        {
          "CityName": "蚌埠市",
          "ID" : "1062",
          "PID" : "1045",
          "ZipCode" : "233000",
        },
        {
          "CityName": "淮南市",
          "ID" : "1070",
          "PID" : "1045",
          "ZipCode" : "232000",
        },
        {
          "CityName": "马鞍山市",
          "ID" : "1077",
          "PID" : "1045",
          "ZipCode" : "243000",
        },
        {
          "CityName": "淮北市",
          "ID" : "1082",
          "PID" : "1045",
          "ZipCode" : "235000",
        },
        {
          "CityName": "铜陵市",
          "ID" : "1087",
          "PID" : "1045",
          "ZipCode" : "244000",
        },
        {
          "CityName": "安庆市",
          "ID" : "1092",
          "PID" : "1045",
          "ZipCode" : "246000",
        },
        {
          "CityName": "黄山市",
          "ID" : "1104",
          "PID" : "1045",
          "ZipCode" : "242700",
        },
        {
          "CityName": "滁州市",
          "ID" : "1112",
          "PID" : "1045",
          "ZipCode" : "239000",
        },
        {
          "CityName": "阜阳市",
          "ID" : "1121",
          "PID" : "1045",
          "ZipCode" : "236100",
        },
        {
          "CityName": "宿州市",
          "ID" : "1130",
          "PID" : "1045",
          "ZipCode" : "234100",
        },
        {
          "CityName": "巢湖市",
          "ID" : "1136",
          "PID" : "1045",
          "ZipCode" : "238000",
        },
        {
          "CityName": "六安市",
          "ID" : "1142",
          "PID" : "1045",
          "ZipCode" : "237000",
        },
        {
          "CityName": "亳州市",
          "ID" : "1150",
          "PID" : "1045",
          "ZipCode" : "236800",
        },
        {
          "CityName": "池州市",
          "ID" : "1155",
          "PID" : "1045",
          "ZipCode" : "247100",
        },
        {
          "CityName": "宣城市",
          "ID" : "1160",
          "PID" : "1045",
          "ZipCode" : "366000",
        }
      ]
    },
    {
      "ID" : "1168",
      "ProvinceName": "福建省",
      "cities" :     [
        {
          "CityName": "福州市",
          "ID" : "1169",
          "PID" : "1168",
          "ZipCode" : "350000",
        },
        {
          "CityName" : "厦门市",
          "ID" : "1183",
          "PID" : "1168",
          "ZipCode" : "361000",
        },
        {
          "CityName": "莆田市",
          "ID" : "1190",
          "PID" : "1168",
          "ZipCode" : "351100",
        },
        {
          "CityName" : "三明市",
          "ID" : "1196",
          "PID" : "1168",
          "ZipCode" : "365000",
        },
        {
          "CityName": "泉州市",
          "ID" : "1209",
          "PID" : "1168",
          "ZipCode" : "362000",
        },
        {
          "CityName": "漳州市",
          "ID" : "1222",
          "PID" : "1168",
          "ZipCode" : "363000",
        },
        {
          "CityName": "南平市",
          "ID" : "1234",
          "PID" : "1168",
          "ZipCode" : "353000",
        },
        {
          "CityName": "龙岩市",
          "ID" : "1245",
          "PID" : "1168",
          "ZipCode" : "364000",
        },
        {
          "CityName": "宁德市",
          "ID" : "1253",
          "PID" : "1168",
          "ZipCode" : "352100",
        }
      ]
    },
    {
      "ID" : "1263",
      "ProvinceName": "江西省",
      "cities" :     [
        {
          "CityName": "南昌市",
          "ID" : "1264",
          "PID" : "1263",
          "ZipCode" : "330000",
        },
        {
          "CityName": "景德镇市",
          "ID" : "1274",
          "PID" : "1263",
          "ZipCode" : "333000",
        },
        {
          "CityName": "萍乡市",
          "ID" : "1279",
          "PID" : "1263",
          "ZipCode" : "337000",
        },
        {
          "CityName": "九江市",
          "ID" : "1285",
          "PID" : "1263",
          "ZipCode" : "332000",
        },
        {
          "CityName": "新余市",
          "ID" : "1298",
          "PID" : "1263",
          "ZipCode" : "338000",
        },
        {
          "CityName": "鹰潭市",
          "ID" : "1301",
          "PID" : "1263",
          "ZipCode" : "335000",
        },
        {
          "CityName": "赣州市",
          "ID" : "1305",
          "PID" : "1263",
          "ZipCode" : "341000",
        },
        {
          "CityName": "吉安市",
          "ID" : "1324",
          "PID" : "1263",
          "ZipCode" : "343000",
        },
        {
          "CityName": "宜春市",
          "ID" : "1338",
          "PID" : "1263",
          "ZipCode" : "336000",
        },
        {
          "CityName": "抚州市",
          "ID" : "1349",
          "PID" : "1263",
          "ZipCode" : "332900",
        },
        {
          "CityName": "上饶市",
          "ID" : "1361",
          "PID" : "1263",
          "ZipCode" : "334000",
        }
      ]
    },
    {
      "ID" : "1374",
      "ProvinceName": "山东省",
      "cities" :     [
        {
          "CityName": "济南市",
          "ID" : "1375",
          "PID" : "1474",
          "ZipCode" : "250000",
        },
        {
          "CityName" : "青岛市",
          "ID" : "1386",
          "PID" : "1474",
          "ZipCode" : "266000",
        },
        {
          "CityName": "淄博市",
          "ID" : "1399",
          "PID" : "1474",
          "ZipCode" : "255000",
        },
        {
          "CityName" : "枣庄市",
          "ID" : "1408",
          "PID" : "1474",
          "ZipCode" : "277100",
        },
        {
          "CityName": "东营市",
          "ID" : "1415",
          "PID" : "1474",
          "ZipCode" : "257000",
        },
        {
          "CityName" : "烟台市",
          "ID" : "1421",
          "PID" : "1474",
          "ZipCode" : "264000",
        },
        {
          "CityName": "潍坊市",
          "ID" : "1434",
          "PID" : "1474",
          "ZipCode" : "261000",
        },
        {
          "CityName": "济宁市",
          "ID" : "1447",
          "PID" : "1474",
          "ZipCode" : "272100",
        },
        {
          "CityName": "泰安市",
          "ID" : "1460",
          "PID" : "1474",
          "ZipCode" : "271000",
        },
        {
          "CityName" : "威海市",
          "ID" : "1467",
          "PID" : "1474",
          "ZipCode" : "265700",
        },
        {
          "CityName": "日照市",
          "ID" : "1472",
          "PID" : "1474",
          "ZipCode" : "276800",
        },
        {
          "CityName" : "莱芜市",
          "ID" : "1477",
          "PID" : "1474",
          "ZipCode" : "271100",
        },
        {
          "CityName": "临沂市",
          "ID" : "1480",
          "PID" : "1474",
          "ZipCode" : "276000",
        },
        {
          "CityName" : "德州市",
          "ID" : "1493",
          "PID" : "1474",
          "ZipCode" : "253000",
        },
        {
          "CityName": "聊城市",
          "ID" : "1505",
          "PID" : "1474",
          "ZipCode" : "252000",
        },
        {
          "CityName" : "滨州市",
          "ID" : "1514",
          "PID" : "1474",
          "ZipCode" : "256600",
        },
        {
          "CityName": "荷泽市",
          "ID" : "1522",
          "PID" : "1474",
          "ZipCode" : "255000",
        }
      ]
    },
    {
      "ID" : "1532",
      "ProvinceName": "河南省",
      "cities" :     [
        {
          "CityName" : "郑州市",
          "ID" : "1533",
          "PID" : "1532",
          "ZipCode" : "450000",
        },
        {
          "CityName" : "开封市",
          "ID" : "1546",
          "PID" : "1532",
          "ZipCode" : "475000",
        },
        {
          "CityName" : "洛阳市",
          "ID" : "1557",
          "PID" : "1532",
          "ZipCode" : "471000",
        },
        {
          "CityName" : "平顶山市",
          "ID" : "1573",
          "PID" : "1532",
          "ZipCode" : "467000",
        },
        {
          "CityName" : "安阳市",
          "ID" : "1584",
          "PID" : "1532",
          "ZipCode" : "454900",
        },
        {
          "CityName" : "鹤壁市",
          "ID" : "1594",
          "PID" : "1532",
          "ZipCode" : "456600",
        },
        {
          "CityName": "新乡市",
          "ID" : "1600",
          "PID" : "1532",
          "ZipCode" : "453000",
        },
        {
          "CityName" : "焦作市",
          "ID" : "1613",
          "PID" : "1532",
          "ZipCode" : "454100",
        },
        {
          "CityName": "濮阳市",
          "ID" : "1625",
          "PID" : "1532",
          "ZipCode" : "457000",
        },
        {
          "CityName" : "许昌市",
          "ID" : "1632",
          "PID" : "1532",
          "ZipCode" : "461000",
        },
        {
          "CityName": "漯河市",
          "ID" : "1639",
          "PID" : "1532",
          "ZipCode" : "462000",
        },
        {
          "CityName" : "三门峡市",
          "ID" : "1645",
          "PID" : "1532",
          "ZipCode" : "472000",
        },
        {
          "CityName": "南阳市",
          "ID" : "1652",
          "PID" : "1532",
          "ZipCode" : "473000",
        },
        {
          "CityName" : "商丘市",
          "ID" : "1666",
          "PID" : "1532",
          "ZipCode" : "476000",
        },
        {
          "CityName": "信阳市",
          "ID" : "1676",
          "PID" : "1532",
          "ZipCode" : "464000",
        },
        {
          "CityName" : "周口市",
          "ID" : "1687",
          "PID" : "1532",
          "ZipCode" : "466000",
        },
        {
          "CityName" : "驻马店市",
          "ID" : "1698",
          "PID" : "1532",
          "ZipCode" : "463000",
        }
      ]
    },
    {
      "ID" : "1709",
      "ProvinceName": "湖北省",
      "cities" :     [
        {
          "CityName" : "武汉市",
          "ID" : "1710",
          "PID" : "1709",
          "ZipCode" : "430000",
        },
        {
          "CityName": "黄石市",
          "ID" : "1724",
          "PID" : "1709",
          "ZipCode" : "435000",
        },
        {
          "CityName": "十堰市",
          "ID" : "1731",
          "PID" : "1709",
          "ZipCode" : "442000",
        },
        {
          "CityName" : "宜昌市",
          "ID" : "1740",
          "PID" : "1709",
          "ZipCode" : "443000",
        },
        {
          "CityName": "襄樊市",
          "ID" : "1754",
          "PID" : "1709",
          "ZipCode" : "441000",
        },
        {
          "CityName" : "鄂州市",
          "ID" : "1764",
          "PID" : "1709",
          "ZipCode" : "436000",
        },
        {
          "CityName": "荆门市",
          "ID" : "1768",
          "PID" : "1709",
          "ZipCode" : "448000",
        },
        {
          "CityName" : "孝感市",
          "ID" : "1774",
          "PID" : "1709",
          "ZipCode" : "432100",
        },
        {
          "CityName": "荆州市",
          "ID" : "1782",
          "PID" : "1709",
          "ZipCode" : "434000",
        },
        {
          "CityName" : "黄冈市",
          "ID" : "1791",
          "PID" : "1709",
          "ZipCode" : "438000",
        },
        {
          "CityName": "咸宁市",
          "ID" : "1802",
          "PID" : "1709",
          "ZipCode" : "437000",
        },
        {
          "CityName" : "随州市",
          "ID" : "1809",
          "PID" : "1709",
          "ZipCode" : "441300",
        },
        {
          "CityName": "恩施土家族苗族自治州",
          "ID" : "1812",
          "PID" : "1709",
          "ZipCode" : "445000",
        },
        {
          "CityName": "省直辖县级行政单位",
          "ID" : "1821",
          "PID" : "1709",
          "ZipCode" : "442400",
        }
      ]
    },
    {
      "ID" : "1826",
      "ProvinceName": "湖南省",
      "cities" :     [
        {
          "CityName" : "长沙市",
          "ID" : "1827",
          "PID" : "1826",
          "ZipCode" : "410000",
        },
        {
          "CityName": "株洲市",
          "ID" : "1837",
          "PID" : "1826",
          "ZipCode" : "412000",
        },
        {
          "CityName" : "湘潭市",
          "ID" : "1847",
          "PID" : "1826",
          "ZipCode" : "411100",
        },
        {
          "CityName": "衡阳市",
          "ID" : "1853",
          "PID" : "1826",
          "ZipCode" : "421000",
        },
        {
          "CityName" : "邵阳市",
          "ID" : "1866",
          "PID" : "1826",
          "ZipCode" : "422000",
        },
        {
          "CityName": "岳阳市",
          "ID" : "1879",
          "PID" : "1826",
          "ZipCode" : "414000",
        },
        {
          "CityName" : "常德市",
          "ID" : "1889",
          "PID" : "1826",
          "ZipCode" : "415000",
        },
        {
          "CityName": "张家界市",
          "ID" : "1899",
          "PID" : "1826",
          "ZipCode" : "427000",
        },
        {
          "CityName" : "益阳市",
          "ID" : "1904",
          "PID" : "1826",
          "ZipCode" : "413000",
        },
        {
          "CityName": "郴州市",
          "ID" : "1911",
          "PID" : "1826",
          "ZipCode" : "423000",
        },
        {
          "CityName" : "永州市",
          "ID" : "1923",
          "PID" : "1826",
          "ZipCode" : "425000",
        },
        {
          "CityName": "怀化市",
          "ID" : "1935",
          "PID" : "1826",
          "ZipCode" : "418000",
        },
        {
          "CityName" : "娄底市",
          "ID" : "1948",
          "PID" : "1826",
          "ZipCode" : "417000",
        },
        {
          "CityName": "湘西土家族苗族自治州",
          "ID" : "1954",
          "PID" : "1826",
          "ZipCode" : "416000",
        }
      ]
    },
    {
      "ID" : "1963",
      "ProvinceName": "广东省",
      "cities" :     [
        {
          "CityName": "广州市",
          "ID" : "1964",
          "PID" : "1963",
          "ZipCode" : 510000,
        },
        {
          "CityName" : "韶关市",
          "ID" : "1977",
          "PID" : "1963",
          "ZipCode" : "521000",
        },
        {
          "CityName" : "深圳市",
          "ID" : "1988",
          "PID" : "1963",
          "ZipCode" : "518000",
        },
        {
          "CityName" : "珠海市",
          "ID" : "1995",
          "PID" : "1963",
          "ZipCode" : "519000",
        },
        {
          "CityName" : "汕头市",
          "ID" : "1999",
          "PID" : "1963",
          "ZipCode" : "515000",
        },
        {
          "CityName" : "佛山市",
          "ID" : "2007",
          "PID" : "1963",
          "ZipCode" : "528000",
        },
        {
          "CityName" : "江门市",
          "ID" : "2013",
          "PID" : "1963",
          "ZipCode" : "529000",
        },
        {
          "CityName" : "湛江市",
          "ID" : "2021",
          "PID" : "1963",
          "ZipCode" : "524000",
        },
        {
          "CityName": "茂名市",
          "ID" : "2031",
          "PID" : "1963",
          "ZipCode" : "525000",
        },
        {
          "CityName": "肇庆市",
          "ID" : "2038",
          "PID" : "1963",
          "ZipCode" : "526000",
        },
        {
          "CityName": "惠州市",
          "ID" : "2047",
          "PID" : "1963",
          "ZipCode" : "516000",
        },
        {
          "CityName": "梅州市",
          "ID" : "2053",
          "PID" : "1963",
          "ZipCode" : "514000",
        },
        {
          "CityName": "汕尾市",
          "ID" : "2062",
          "PID" : "1963",
          "ZipCode" : "516600",
        },
        {
          "CityName": "河源市",
          "ID" : "2067",
          "PID" : "1963",
          "ZipCode" : "517000",
        },
        {
          "CityName": "阳江市",
          "ID" : "2074",
          "PID" : "1963",
          "ZipCode" : "529500",
        },
        {
          "CityName": "清远市",
          "ID" : "2079",
          "PID" : "1963",
          "ZipCode" : "511500",
        },
        {
          "CityName": "东莞市",
          "ID" : "2088",
          "PID" : "1963",
          "ZipCode" : "511700",
        },
        {
          "CityName": "中山市",
          "ID" : "2089",
          "PID" : "1963",
          "ZipCode" : "528400",
        },
        {
          "CityName": "潮州市",
          "ID" : "2090",
          "PID" : "1963",
          "ZipCode" : "515600",
        },
        {
          "CityName": "揭阳市",
          "ID" : "2094",
          "PID" : "1963",
          "ZipCode" : "522000",
        },
        {
          "CityName": "云浮市",
          "ID" : "2100",
          "PID" : "1963",
          "ZipCode" : "527300",
        }
      ]
    },
    {
      "ID" : "2106",
      "ProvinceName": "广西省",
      "cities" :     [
        {
          "CityName": "南宁市",
          "ID" : "2107",
          "PID" : "2106",
          "ZipCode" : "530000",
        },
        {
          "CityName": "柳州市",
          "ID" : "2120",
          "PID" : "2106",
          "ZipCode" : "545000",
        },
        {
          "CityName": "桂林市",
          "ID" : "2131",
          "PID" : "2106",
          "ZipCode" : "541000",
        },
        {
          "CityName": "梧州市",
          "ID" : "2149",
          "PID" : "2106",
          "ZipCode" : "543000",
        },
        {
          "CityName": "北海市",
          "ID" : "2157",
          "PID" : "2106",
          "ZipCode" : "536000",
        },
        {
          "CityName": "防城港市",
          "ID" : "2162",
          "PID" : "2106",
          "ZipCode" : "538000",
        },
        {
          "CityName": "钦州市",
          "ID" : "2167",
          "PID" : "2106",
          "ZipCode" : "535000",
        },
        {
          "CityName": "贵港市",
          "ID" : "2172",
          "PID" : "2106",
          "ZipCode" : "537100",
        },
        {
          "CityName": "玉林市",
          "ID" : "2178",
          "PID" : "2106",
          "ZipCode" : "537000",
        },
        {
          "CityName": "百色市",
          "ID" : "2185",
          "PID" : "2106",
          "ZipCode" : "533000",
        },
        {
          "CityName": "贺州市",
          "ID" : "2198",
          "PID" : "2106",
          "ZipCode" : "542800",
        },
        {
          "CityName": "河池市",
          "ID" : "2203",
          "PID" : "2106",
          "ZipCode" : "547000",
        },
        {
          "CityName": "来宾市",
          "ID" : "2215",
          "PID" : "2106",
          "ZipCode" : "546100",
        },
        {
          "CityName": "崇左市",
          "ID" : "2222",
          "PID" : "2106",
          "ZipCode" : "532200",
        }
      ],
    },
    {
      "ID" : "2230",
      "ProvinceName": "海南省",
      "cities" :     [
        {
          "CityName": "海口市",
          "ID" : "2231",
          "PID" : "2230",
          "ZipCode" : "570000",
        },
        {
          "CityName" : "三亚市",
          "ID" : "2236",
          "PID" : "2230",
          "ZipCode" : "572000",
        }
      ],
    },
    {
      "ID" : "2257",
      "ProvinceName": "重庆市",
      "cities" :     [
        {
          "CityName": "重庆市",
          "ID" : "2258",
          "PID" : "22",
          "ZipCode" : "400000",
        }
      ]
    },
    {
      "ID" : "2299",
      "ProvinceName": "四川省",
      "cities" :     [
        {
          "CityName" : "成都市",
          "ID" : "2300",
          "PID" : "2299",
          "ZipCode" : "610000",
        },
        {
          "CityName": "自贡市",
          "ID" : "2320",
          "PID" : "2299",
          "ZipCode" : "643000",
        },
        {
          "CityName": "攀枝花市",
          "ID" : "2327",
          "PID" : "2299",
          "ZipCode" : "617000",
        },
        {
          "CityName": "泸州市",
          "ID" : "2333",
          "PID" : "2299",
          "ZipCode" : "646100",
        },
        {
          "CityName": "德阳市",
          "ID" : "2341",
          "PID" : "2299",
          "ZipCode" : "618000",
        },
        {
          "CityName": "绵阳市",
          "ID" : "2348",
          "PID" : "2299",
          "ZipCode" : "621000",
        },
        {
          "CityName": "广元市",
          "ID" : "2358",
          "PID" : "2299",
          "ZipCode" : "628000",
        },
        {
          "CityName": "遂宁市",
          "ID" : "2366",
          "PID" : "2299",
          "ZipCode" : "629000",
        },
        {
          "CityName": "内江市",
          "ID" : "2372",
          "PID" : "2299",
          "ZipCode" : "641000",
        },
        {
          "CityName": "乐山市",
          "ID" : "2378",
          "PID" : "2299",
          "ZipCode" : "614000",
        },
        {
          "CityName": "南充市",
          "ID" : "2390",
          "PID" : "2299",
          "ZipCode" : "637000",
        },
        {
          "CityName": "眉山市",
          "ID" : "2400",
          "PID" : "2299",
          "ZipCode" : "612100",
        },
        {
          "CityName": "宜宾市",
          "ID" : "2407",
          "PID" : "2299",
          "ZipCode" : "644000",
        },
        {
          "CityName": "广安市",
          "ID" : "2418",
          "PID" : "2299",
          "ZipCode" : "638000",
        },
        {
          "CityName": "达州市",
          "ID" : "2424",
          "PID" : "2299",
          "ZipCode" : "635000",
        },
        {
          "CityName": "雅安市",
          "ID" : "2432",
          "PID" : "2299",
          "ZipCode" : "625000",
        },
        {
          "CityName": "巴中市",
          "ID" : "2441",
          "PID" : "2299",
          "ZipCode" : "635500",
        },
        {
          "CityName": "资阳市",
          "ID" : "2446",
          "PID" : "2299",
          "ZipCode" : "641300",
        },
        {
          "CityName": "阿坝藏族羌族自治州",
          "ID" : "2451",
          "PID" : "2299",
          "ZipCode" : "624600",
        },
        {
          "CityName": "甘孜藏族自治州",
          "ID" : "2465",
          "PID" : "2299",
          "ZipCode" : "626000",
        },
        {
          "CityName": "凉山彝族自治州",
          "ID" : "2484",
          "PID" : "2299",
          "ZipCode" : "615000",
        }
      ]
    },
    {
      "ID" : "2502",
      "ProvinceName": "贵州省",
      "cities" :     [
        {
          "CityName": "贵阳市",
          "ID" : "2503",
          "PID" : "2502",
          "ZipCode" : "55000",
        },
        {
          "CityName": "六盘水市",
          "ID" : "2514",
          "PID" : "2502",
          "ZipCode" : "553000",
        },
        {
          "CityName": "遵义市",
          "ID" : "2519",
          "PID" : "2502",
          "ZipCode" : "563000",
        },
        {
          "CityName": "安顺市",
          "ID" : "2534",
          "PID" : "2502",
          "ZipCode" : "561000",
        },
        {
          "CityName": "铜仁地区",
          "ID" : "2541",
          "PID" : "2502",
          "ZipCode" : "554300",
        },
        {
          "CityName": "黔西南布依族苗族自治州",
          "ID" : "2552",
          "PID" : "2502",
          "ZipCode" : "551500",
        },
        {
          "CityName": "毕节地区",
          "ID" : "2561",
          "PID" : "2502",
          "ZipCode" : "551700",
        },
        {
          "CityName": "黔东南苗族侗族自治州",
          "ID" : "2570",
          "PID" : "2502",
          "ZipCode" : "551500",
        },
        {
          "CityName": "黔南布依族苗族自治州",
          "ID" : "2587",
          "PID" : "2502",
          "ZipCode" : "550100",
        }
      ]
    },
    {
      "ID" : "2600",
      "ProvinceName": "云南省",
      "cities" :     [
        {
          "CityName": "昆明市",
          "ID" : "2601",
          "PID" : "2600",
          "ZipCode" : "650000",
        },
        {
          "CityName": "曲靖市",
          "ID" : "2616",
          "PID" : "2600",
          "ZipCode" : "655000",
        },
        {
          "CityName": "玉溪市",
          "ID" : "2626",
          "PID" : "2600",
          "ZipCode" : "653100",
        },
        {
          "CityName": "保山市",
          "ID" : "2636",
          "PID" : "2600",
          "ZipCode" : "678000",
        },
        {
          "CityName": "昭通市",
          "ID" : "2642",
          "PID" : "2600",
          "ZipCode" : "657000",
        },
        {
          "CityName": "丽江市",
          "ID" : "2654",
          "PID" : "2600",
          "ZipCode" : "674100",
        },
        {
          "CityName": "普洱市",
          "ID" : "2660",
          "PID" : "2600",
          "ZipCode" : "665000",
        },
        {
          "CityName": "临沧市",
          "ID" : "2671",
          "PID" : "2600",
          "ZipCode" : "677000",
        },
        {
          "CityName": "楚雄彝族自治州",
          "ID" : "2680",
          "PID" : "2600",
          "ZipCode" : "675000",
        },
        {
          "CityName": "红河哈尼族彝族自治州",
          "ID" : "2691",
          "PID" : "2600",
          "ZipCode" : "654400",
        },
        {
          "CityName": "文山壮族苗族自治州",
          "ID" : "2705",
          "PID" : "2600",
          "ZipCode" : "663000",
        },
        {
          "CityName": "西双版纳傣族自治州",
          "ID" : "2714",
          "PID" : "2600",
          "ZipCode" : "666200",
        },
        {
          "CityName": "大理白族自治州",
          "ID" : "2718",
          "PID" : "2600",
          "ZipCode" : "671000",
        },
        {
          "CityName": "德宏傣族景颇族自治州",
          "ID" : "2731",
          "PID" : "2600",
          "ZipCode" : "678400",
        },
        {
          "CityName": "怒江傈僳族自治州",
          "ID" : "2737",
          "PID" : "2600",
          "ZipCode" : "671400",
        },
        {
          "CityName": "迪庆藏族自治州",
          "ID" : "2742",
          "PID" : "2600",
          "ZipCode" : "674400",
        }
      ]
    },
    {
      "ID" : "2746",
      "ProvinceName": "西藏",
      "cities" :     [
        {
          "CityName": "拉萨市",
          "ID" : "2747",
          "PID" : "2746",
          "ZipCode" : "850000",
        },
        {
          "CityName": "昌都地区",
          "ID" : "2756",
          "PID" : "2746",
          "ZipCode" : "854000",
        },
        {
          "CityName": "山南地区",
          "ID" : "2768",
          "PID" : "2746",
          "ZipCode" : "856000",
        },
        {
          "CityName": "日喀则地区",
          "ID" : "2781",
          "PID" : "2746",
          "ZipCode" : "857000",
        },
        {
          "CityName": "那曲地区",
          "ID" : "2800",
          "PID" : "2746",
          "ZipCode" : "852000",
        },
        {
          "CityName": "阿里地区",
          "ID" : "2811",
          "PID" : "2746",
          "ZipCode" : "859100",
        },
        {
          "CityName": "林芝地区",
          "ID" : "2819",
          "PID" : "2746",
          "ZipCode" : "860100",
        }
      ]
    },
    {
      "ID" : "2827",
      "ProvinceName": "陕西省",
      "cities" :     [
        {
          "CityName": "西安市",
          "ID" : "2828",
          "PID" : "2827",
          "ZipCode" : "710000",
        },
        {
          "CityName": "铜川市",
          "ID" : "2842",
          "PID" : "2827",
          "ZipCode" : "727000",
        },
        {
          "CityName": "宝鸡市",
          "ID" : "2847",
          "PID" : "2827",
          "ZipCode" : "721000",
        },
        {
          "CityName": "咸阳市",
          "ID" : "2860",
          "PID" : "2827",
          "ZipCode" : "712000",
        },
        {
          "CityName": "渭南市",
          "ID" : "2875",
          "PID" : "2827",
          "ZipCode" : "714000",
        },
        {
          "CityName": "延安市",
          "ID" : "2887",
          "PID" : "2827",
          "ZipCode" : "716000",
        },
        {
          "CityName": "汉中市",
          "ID" : "2901",
          "PID" : "2827",
          "ZipCode" : "723000",
        },
        {
          "CityName": "榆林市",
          "ID" : "2913",
          "PID" : "2827",
          "ZipCode" : "719000",
        },
        {
          "CityName": "安康市",
          "ID" : "2926",
          "PID" : "2827",
          "ZipCode" : "725000",
        },
        {
          "CityName": "商洛市",
          "ID" : "2937",
          "PID" : "2827",
          "ZipCode" : "711500",
        }
      ]
    },
    {
      "ID" : "2945",
      "ProvinceName": "甘肃省",
      "cities" :     [
        {
          "CityName": "兰州市",
          "ID" : "2946",
          "PID" : "2945",
          "ZipCode" : "730000",
        },
        {
          "CityName": "嘉峪关市",
          "ID" : "2955",
          "PID" : "2945",
          "ZipCode" : "735100",
        },
        {
          "CityName": "金昌市",
          "ID" : "2956",
          "PID" : "2945",
          "ZipCode" : "737100",
        },
        {
          "CityName": "白银市",
          "ID" : "2959",
          "PID" : "2945",
          "ZipCode" : "730900",
        },
        {
          "CityName": "天水市",
          "ID" : "2965",
          "PID" : "2945",
          "ZipCode" : "741000",
        },
        {
          "CityName": "武威市",
          "ID" : "2973",
          "PID" : "2945",
          "ZipCode" : "733000",
        },
        {
          "CityName": "张掖市",
          "ID" : "2978",
          "PID" : "2945",
          "ZipCode" : "734000",
        },
        {
          "CityName": "平凉市",
          "ID" : "2985",
          "PID" : "2945",
          "ZipCode" : "744000",
        },
        {
          "CityName": "酒泉市",
          "ID" : "2993",
          "PID" : "2945",
          "ZipCode" : "735000",
        },
        {
          "CityName": "庆阳市",
          "ID" : "3001",
          "PID" : "2945",
          "ZipCode" : "744500",
        },
        {
          "CityName": "定西市",
          "ID" : "3010",
          "PID" : "2945",
          "ZipCode" : "743000",
        },
        {
          "CityName": "陇南市",
          "ID" : "3018",
          "PID" : "2945",
          "ZipCode" : "742100",
        },
        {
          "CityName": "临夏回族自治州",
          "ID" : "3028",
          "PID" : "2945",
          "ZipCode" : "731100",
        },
        {
          "CityName": "甘南藏族自治州",
          "ID" : "3037",
          "PID" : "2945",
          "ZipCode" : "747000",
        }
      ]
    },
    {
      "ID" : "3046",
      "ProvinceName": "青海省",
      "cities" :     [
        {
          "CityName": "西宁市",
          "ID" : "3047",
          "PID" : "3046",
          "ZipCode" : "810000",
        },
        {
          "CityName": "海东地区",
          "ID" : "3055",
          "PID" : "3046",
          "ZipCode" : "810600",
        },
        {
          "CityName": "海北藏族自治州",
          "ID" : "3062",
          "PID" : "3046",
          "ZipCode" : "810300",
        },
        {
          "CityName": "黄南藏族自治州",
          "ID" : "3067",
          "PID" : "3046",
          "ZipCode" : "811300",
        },
        {
          "CityName": "海南藏族自治州",
          "ID" : "3072",
          "PID" : "3046",
          "ZipCode" : "813000",
        },
        {
          "CityName": "果洛藏族自治州",
          "ID" : "3078",
          "PID" : "3046",
          "ZipCode" : "814000",
        },
        {
          "CityName": "玉树藏族自治州",
          "ID" : "3085",
          "PID" : "3046",
          "ZipCode" : "815000",
        },
        {
          "CityName": "海西蒙古族藏族自治州",
          "ID" : "3092",
          "PID" : "3046",
          "ZipCode" : "817000",
        }
      ]
    },
    {
      "ID" : "3098",
      "ProvinceName": "宁夏",
      "cities" :     [
        {
          "CityName": "银川市",
          "ID" : "3099",
          "PID" : "3098",
          "ZipCode" : "750000",
        },
        {
          "CityName": "石嘴山市",
          "ID" : "3106",
          "PID" : "3098",
          "ZipCode" : "753000",
        },
        {
          "CityName": "吴忠市",
          "ID" : "3110",
          "PID" : "3098",
          "ZipCode" : "751100",
        },
        {
          "CityName": "固原市",
          "ID" : "3115",
          "PID" : "3098",
          "ZipCode" : "756000",
        },
        {
          "CityName": "中卫市",
          "ID" : "3121",
          "PID" : "3098",
          "ZipCode" : "751700",
        }
      ]
    },
    {
      "ID" : "3125",
      "ProvinceName" : "新疆",
      "cities" :     [
        {
          "CityName": "乌鲁木齐市",
          "ID" : "3126",
          "PID" : "3125",
          "ZipCode" : "830000",
        },
        {
          "CityName": "克拉玛依市",
          "ID" : "3135",
          "PID" : "3125",
          "ZipCode" : "834000",
        },
        {
          "CityName": "吐鲁番地区",
          "ID" : "3140",
          "PID" : "3125",
          "ZipCode" : "838000",
        },
        {
          "CityName": "哈密地区",
          "ID" : "3144",
          "PID" : "3125",
          "ZipCode" : "839000",
        },
        {
          "CityName": "昌吉回族自治州",
          "ID" : "3145",
          "PID" : "3125",
          "ZipCode" : "831100",
        },
        {
          "CityName": "博尔塔拉蒙古自治州",
          "ID" : "3153",
          "PID" : "3125",
          "ZipCode" : "833400",
        },
        {
          "CityName": "巴音郭楞蒙古自治州",
          "ID" : "3157",
          "PID" : "3125",
          "ZipCode" : "841000",
        },
        {
          "CityName": "阿克苏地区",
          "ID" : "3167",
          "PID" : "3125",
          "ZipCode" : "843000",
        },
        {
          "CityName": "克孜勒苏柯尔克孜自治州",
          "ID" : "3177",
          "PID" : "3125",
          "ZipCode" : "835600",
        },
        {
          "CityName": "喀什地区",
          "ID" : "3182",
          "PID" : "3125",
          "ZipCode" : "844000",
        },
        {
          "CityName": "和田地区",
          "ID" : "3195",
          "PID" : "3125",
          "ZipCode" : "848000",
        },
        {
          "CityName": "伊犁哈萨克自治州",
          "ID" : "3204",
          "PID" : "3125",
          "ZipCode" : "833200",
        },
        {
          "CityName": "塔城地区",
          "ID" : "3215",
          "PID" : "3125",
          "ZipCode" : "834700",
        },
        {
          "CityName": "阿勒泰地区",
          "ID" : "3223",
          "PID" : "3125",
          "ZipCode" : "836500",
        }
      ]
    },
    {
      "ID" : "3324",
      "ProvinceName": "中国香港",
      "cities" :     [
        {
          "CityName": "香港特别行政区",
          "ID" : "3325",
          "PID" : "3324",
          "ZipCode" : "000000",
        }
      ]
    },
    {
      "ID" : "3326",
      "ProvinceName": "中国澳门",
      "cities" :     [
        {
          "CityName": "澳门特别行政区",
          "ID" : "3327",
          "PID" : "3326",
          "ZipCode" : "000000",
        }
      ]
    },
    {
      "ID" : "3328",
      "ProvinceName": "中国台湾",
      "cities" :     [
        {
          "CityName": "台湾省",
          "ID" : "3329",
          "PID" : "3328",
          "ZipCode" : "000000",
        }
      ]
    }
  ];
  callBack(area);
}


module.exports = {
  formatTime: formatTime,
  getAreaInfo : getAreaInfo
}