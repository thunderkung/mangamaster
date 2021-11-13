'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "0e21e0718c6a6a39d1dbe96a69a6d8fb",
"assets/assets/images/7%2520DAY%2520DINER/1.jpg": "c46083ed73ad89985c6448f968a17ebe",
"assets/assets/images/7%2520DAY%2520DINER/10.jpg": "91f701cf6cc4c5b6db5733061d1edafd",
"assets/assets/images/7%2520DAY%2520DINER/11.jpg": "a8d9f4af4661678c4986ad034d885b7c",
"assets/assets/images/7%2520DAY%2520DINER/12.jpg": "30e77018dfeed42e842471e4e9a57e84",
"assets/assets/images/7%2520DAY%2520DINER/13.jpg": "93c9ed34b159048bbf1e96914da33266",
"assets/assets/images/7%2520DAY%2520DINER/14.jpg": "6468aa095bd02e09482e3be1965582b3",
"assets/assets/images/7%2520DAY%2520DINER/15.jpg": "f37b98fb3bdcadf9533a4ff799cd59ae",
"assets/assets/images/7%2520DAY%2520DINER/16.jpg": "9c1c2507fa0adf6c9ab2eba7b99ca323",
"assets/assets/images/7%2520DAY%2520DINER/17.jpg": "bbc4c4493f3a8b39590f237b8698ef12",
"assets/assets/images/7%2520DAY%2520DINER/18.jpg": "2a1034483aa439e3881bac21fa9c3942",
"assets/assets/images/7%2520DAY%2520DINER/19.jpg": "a5d9c21f7fa2b0cfad8d65b22965956f",
"assets/assets/images/7%2520DAY%2520DINER/2.jpg": "fdc4507a023c16430927c6e5f461ebf1",
"assets/assets/images/7%2520DAY%2520DINER/20.jpg": "4ce3fc0777f52f56a15c77efe9475247",
"assets/assets/images/7%2520DAY%2520DINER/21.jpg": "fc02017f42897fb468c818f2a6e62acc",
"assets/assets/images/7%2520DAY%2520DINER/22.jpg": "27581174176b913a9a3979ec25e0cb00",
"assets/assets/images/7%2520DAY%2520DINER/23.jpg": "a763def9a7c3b6f6177d9ba1356beefa",
"assets/assets/images/7%2520DAY%2520DINER/24.jpg": "db688c6d800094071962337a08f37fbe",
"assets/assets/images/7%2520DAY%2520DINER/25.jpg": "e21d1775d5eef7a041e3b8ca65d029e1",
"assets/assets/images/7%2520DAY%2520DINER/26.jpg": "3a424ace2dca7e0aed4bd4a57c38ecee",
"assets/assets/images/7%2520DAY%2520DINER/27.jpg": "24148d92d364f8e9d4b7e0932f590a27",
"assets/assets/images/7%2520DAY%2520DINER/28.jpg": "d706a7b9db653ab53e8f9c7369132ac9",
"assets/assets/images/7%2520DAY%2520DINER/29.jpg": "4a47139fe3b0f035a3843b23e7598acf",
"assets/assets/images/7%2520DAY%2520DINER/3.jpg": "98f2562b872e92597beb1f160ab6c0f6",
"assets/assets/images/7%2520DAY%2520DINER/30.jpg": "b5188ae674d283bf8092657587c68055",
"assets/assets/images/7%2520DAY%2520DINER/31.jpg": "aa964eb885bf5a7134d889a046ef62c8",
"assets/assets/images/7%2520DAY%2520DINER/32.jpg": "a7d0d8c057c94a5d4bab6908c1c1e67b",
"assets/assets/images/7%2520DAY%2520DINER/33.jpg": "9c7ae44a196e8cbbf4d43dc0d7ba71ab",
"assets/assets/images/7%2520DAY%2520DINER/34.jpg": "74d40f1575d2b048837d3c9e1e792b6f",
"assets/assets/images/7%2520DAY%2520DINER/35.jpg": "b7ba382ed339fee9d0fc50be8664e89c",
"assets/assets/images/7%2520DAY%2520DINER/36.jpg": "72487df2ee07d704c46cb89be48a3c41",
"assets/assets/images/7%2520DAY%2520DINER/37.jpg": "76e400850a79cea686cd77f2c08f1ee4",
"assets/assets/images/7%2520DAY%2520DINER/38.jpg": "d5fd8b780e2a69208fbaeeae9399f2e1",
"assets/assets/images/7%2520DAY%2520DINER/39.jpg": "82f20632b031e02e2c79f664d05eeae8",
"assets/assets/images/7%2520DAY%2520DINER/4.jpg": "333bc273e030a679f28cd6bcaffa0396",
"assets/assets/images/7%2520DAY%2520DINER/40.jpg": "a25acea596c0cd4514e9c742fa713cdd",
"assets/assets/images/7%2520DAY%2520DINER/41.jpg": "dd3416e8f00bdd91ab15b4b58bdf90b0",
"assets/assets/images/7%2520DAY%2520DINER/42.jpg": "351e3155c687ffffc2638c5cf30e54c4",
"assets/assets/images/7%2520DAY%2520DINER/43.jpg": "15a2d21be248959a4967137feca3472f",
"assets/assets/images/7%2520DAY%2520DINER/44.jpg": "af21c6d4f8e4dc6b1a90f4d8c63a5264",
"assets/assets/images/7%2520DAY%2520DINER/45.jpg": "35037a5badaddd58cc9cb57777bd9d37",
"assets/assets/images/7%2520DAY%2520DINER/46.jpg": "24efe584731da375deff6e9efba2db65",
"assets/assets/images/7%2520DAY%2520DINER/47.jpg": "0df872447bca72e24a309d530ecdb7e4",
"assets/assets/images/7%2520DAY%2520DINER/48.jpg": "fc7a584b55b8638b293b664eba8cca21",
"assets/assets/images/7%2520DAY%2520DINER/49.jpg": "19da7eaa44714a19a12677b11882cf55",
"assets/assets/images/7%2520DAY%2520DINER/5.jpg": "b85018c0d36bba0684e888aaddfa0cb4",
"assets/assets/images/7%2520DAY%2520DINER/50.jpg": "19da7eaa44714a19a12677b11882cf55",
"assets/assets/images/7%2520DAY%2520DINER/51.jpg": "7c696775bb35b149e6a58a95607e7976",
"assets/assets/images/7%2520DAY%2520DINER/52.jpg": "0b3673c4c710e22d689fe014ab88802a",
"assets/assets/images/7%2520DAY%2520DINER/53.jpg": "8cbef685dceeb73d74a6cd12abfe1978",
"assets/assets/images/7%2520DAY%2520DINER/54.jpg": "5f2ba894049ab166b20c43fb115612a9",
"assets/assets/images/7%2520DAY%2520DINER/55.jpg": "32f2ad44f7bd71e95a9d18c2f39b3f5a",
"assets/assets/images/7%2520DAY%2520DINER/56.jpg": "607307138217321f2d764b1f32c86b08",
"assets/assets/images/7%2520DAY%2520DINER/57.jpg": "d66c1ca06b1f10b34b77b3531652f176",
"assets/assets/images/7%2520DAY%2520DINER/58.jpg": "4ef0e251a4c16bafef3efc8747a05fe6",
"assets/assets/images/7%2520DAY%2520DINER/59.jpg": "14ecaa5996013c85188e27e172594f03",
"assets/assets/images/7%2520DAY%2520DINER/6.jpg": "1e9c3bffb2e5fecabe575352cc7559be",
"assets/assets/images/7%2520DAY%2520DINER/7.jpg": "943645c66963cfca0ddf489936def785",
"assets/assets/images/7%2520DAY%2520DINER/8.jpg": "0ade72603082e6e0d2cf9ed4700a9308",
"assets/assets/images/7%2520DAY%2520DINER/9.jpg": "e38032a134515b9f8c837f6ccb272da9",
"assets/assets/images/7%2520DAY%2520DINER/thumbnail.jpg": "bda78557a18fb9db5c195c7a7a3c420c",
"assets/assets/images/Nene-san/1.jpg": "5959b20bc2eaf7367fbd3aab4ecbb71e",
"assets/assets/images/Nene-san/10.jpg": "97929e71087427ef7c6972b15d6e9ddd",
"assets/assets/images/Nene-san/11.jpg": "796105dea72e557e74e6b6c832ad7d04",
"assets/assets/images/Nene-san/12.jpg": "232d4964289cfb389140646e66f7a94d",
"assets/assets/images/Nene-san/13.jpg": "164fc79f96488445f594452055e535a6",
"assets/assets/images/Nene-san/14.jpg": "18cb461c518fcabbe9fba1b80d5b2927",
"assets/assets/images/Nene-san/15.jpg": "6eceb6c3e8221d02190ce5f09bc2e0ab",
"assets/assets/images/Nene-san/16.jpg": "b0cba289294ee443c375e460e8015db6",
"assets/assets/images/Nene-san/17.jpg": "0e323d9f2955ce0b1e84c830d7bf7a3c",
"assets/assets/images/Nene-san/18.jpg": "570e0e87e0e573862e6da5015c435d4c",
"assets/assets/images/Nene-san/19.jpg": "c2dbc92f42fc29da365f577c536c39b2",
"assets/assets/images/Nene-san/2.jpg": "f815ade4d696fbc4b309cf83db28f168",
"assets/assets/images/Nene-san/20.jpg": "58123f80b163d8ed8936ede298791f36",
"assets/assets/images/Nene-san/21.jpg": "44e1fa053b93846f665032ced319761b",
"assets/assets/images/Nene-san/22.jpg": "471a4fd8dc2ff114d4bc71d84a7aeaf7",
"assets/assets/images/Nene-san/23.jpg": "57560f438d657dbf9b130d2a0d857f79",
"assets/assets/images/Nene-san/24.jpg": "c7c1e5e19e50a77574a1e55cdded3b57",
"assets/assets/images/Nene-san/25.jpg": "d728867f94aae04d96c897f5064b6071",
"assets/assets/images/Nene-san/26.jpg": "7e2a1c76aed4a531bd5c6be41ba97422",
"assets/assets/images/Nene-san/27.jpg": "abe22adcc180c34b2416231191f59ac1",
"assets/assets/images/Nene-san/28.jpg": "5e03cebc3df6706960c428403cbdbf90",
"assets/assets/images/Nene-san/29.jpg": "c2a2eabcd83b360e4ed6ebc40194f70a",
"assets/assets/images/Nene-san/3.jpg": "c3164e5f2d4e27d8fa79d0cb2306ce82",
"assets/assets/images/Nene-san/30.jpg": "1831c1e41a3c0c602150ca0692a62b70",
"assets/assets/images/Nene-san/31.jpg": "6021d53b3370abd7e0ae9d6e5d7f0588",
"assets/assets/images/Nene-san/32.jpg": "ff48fd92c815e9df46928a7679846ce3",
"assets/assets/images/Nene-san/33.jpg": "0f2a9bd2d36b638ec1cd118f44fa6d6d",
"assets/assets/images/Nene-san/34.jpg": "ebfd748ad1f9fd68d2bfb4724ddb1ccb",
"assets/assets/images/Nene-san/35.jpg": "4c5ca80f6249eaa083db4f201855700e",
"assets/assets/images/Nene-san/36.jpg": "b128ed1a65a755d7e3671f784c2f2c3d",
"assets/assets/images/Nene-san/37.jpg": "f41acbdd0dbfc01c86b4d4710893bf3d",
"assets/assets/images/Nene-san/38.jpg": "4795fca3c7e326ab3c6d9b638642dc50",
"assets/assets/images/Nene-san/39.jpg": "14f4ad0070829181e5ad138c3ae6b636",
"assets/assets/images/Nene-san/4.jpg": "23a1472b6a4a3bcf0b9c46cf00f6a114",
"assets/assets/images/Nene-san/40.jpg": "3b8727a41083acf022a475ef11b18fa6",
"assets/assets/images/Nene-san/41.jpg": "8e5be5b8f4070667232943c079cb7b86",
"assets/assets/images/Nene-san/42.jpg": "e4cf9447263f639799fcfa17a9f0625c",
"assets/assets/images/Nene-san/43.jpg": "dc5a60615ffbdaea41b9f13e580be8b3",
"assets/assets/images/Nene-san/44.jpg": "2f506b023b10c835a57e1329dfcb1ef6",
"assets/assets/images/Nene-san/45.jpg": "91c12728c3f666cb4efa93e5b4f23714",
"assets/assets/images/Nene-san/46.jpg": "eb7136d13d86f463d5e02708e2b4ea30",
"assets/assets/images/Nene-san/47.jpg": "cd074b15c24e203313d1649b2cd8bea1",
"assets/assets/images/Nene-san/48.jpg": "6372717b134c3cd10cd1bdf78f2956f2",
"assets/assets/images/Nene-san/49.jpg": "5ebf2d35efc55fcb98065803ce0d21b4",
"assets/assets/images/Nene-san/5.jpg": "d8a262d8e5c508bb182ae7313bfd11d7",
"assets/assets/images/Nene-san/50.jpg": "218b0211605cc053a623a8f7764b42af",
"assets/assets/images/Nene-san/51.jpg": "9231e7143ed81bdfb48442a2a1719117",
"assets/assets/images/Nene-san/52.jpg": "2babfee3192edaec357bf21e7ceb621f",
"assets/assets/images/Nene-san/53.jpg": "d17371f76ddec48531528a86ee07e989",
"assets/assets/images/Nene-san/54.jpg": "e840be63bb4815a7a2ce2b913e3d1c8e",
"assets/assets/images/Nene-san/55.jpg": "0f6f4ea2be8aee0ce8bbc681bd845f85",
"assets/assets/images/Nene-san/56.jpg": "c019bea4fc1c2e819a0e0713b5efd940",
"assets/assets/images/Nene-san/57.jpg": "ef7a7661f04c5589690aa60690162970",
"assets/assets/images/Nene-san/58.jpg": "82c7dcbd027cd6e93053221b3ade8315",
"assets/assets/images/Nene-san/59.jpg": "d7aa445c0bbd9beb7542ff83f26395b2",
"assets/assets/images/Nene-san/6.jpg": "3e65f349d8a2250fcab998642ee9238c",
"assets/assets/images/Nene-san/60.jpg": "2e0f134565377d608e18814c37e63b74",
"assets/assets/images/Nene-san/7.jpg": "7c4bbe013fc61a953d44d08aa8c4effa",
"assets/assets/images/Nene-san/8.jpg": "58f967e8a1d2fa6459226d5efbf27ea5",
"assets/assets/images/Nene-san/9.jpg": "234ea95a4067c676fb16c1e1768b1b84",
"assets/assets/images/Nene-san/thumbnail.jpg": "d24dbba3e68a412cc97f182f6fe90f21",
"assets/assets/images/Record%2520Of%2520World%25200001/1.jpg": "3eaa775237041d429d796adca6854012",
"assets/assets/images/Record%2520Of%2520World%25200001/10.jpg": "a1208268762393bb6988c5269122f426",
"assets/assets/images/Record%2520Of%2520World%25200001/11.jpg": "abb52e265d29f444b1231677cd6ffc5b",
"assets/assets/images/Record%2520Of%2520World%25200001/12.jpg": "b0cfe37b6548b4150b42708a978d2368",
"assets/assets/images/Record%2520Of%2520World%25200001/13.jpg": "2b729c58f5b5f380091d136f920f2b13",
"assets/assets/images/Record%2520Of%2520World%25200001/14.jpg": "b4be156e81377cb823f2dcf1ca434031",
"assets/assets/images/Record%2520Of%2520World%25200001/15.jpg": "1151d3d1333ca1f548be69e794f2e374",
"assets/assets/images/Record%2520Of%2520World%25200001/16.jpg": "1f4e8aa7f9c99284ef1a3e0bb0b79b63",
"assets/assets/images/Record%2520Of%2520World%25200001/17.jpg": "3f64ef049773aaf580e32e5333f1c197",
"assets/assets/images/Record%2520Of%2520World%25200001/18.jpg": "c1bb20b9ae35c1028020ae1495307d9b",
"assets/assets/images/Record%2520Of%2520World%25200001/19.jpg": "3bf02abb3a0318fab82767e16ae9b5aa",
"assets/assets/images/Record%2520Of%2520World%25200001/2.jpg": "b43b84e403f2ac2ed32258adee649e16",
"assets/assets/images/Record%2520Of%2520World%25200001/20.jpg": "3e7f89416077e0043f7f8b75b4aeed2e",
"assets/assets/images/Record%2520Of%2520World%25200001/21.jpg": "4581a0e8e2d20156c941c76c4334457e",
"assets/assets/images/Record%2520Of%2520World%25200001/22.jpg": "2aec61127e72e11693eeb1dc8f4e3209",
"assets/assets/images/Record%2520Of%2520World%25200001/23.jpg": "f3566142539836602b3f96b9ff2dab38",
"assets/assets/images/Record%2520Of%2520World%25200001/24.jpg": "5333e295b15043b0ff57b19fd5bb8e0a",
"assets/assets/images/Record%2520Of%2520World%25200001/25.jpg": "c4317231c16200ce3cddd3af284922c6",
"assets/assets/images/Record%2520Of%2520World%25200001/26.jpg": "737d5e24af7e3f49f88d8e47dbca3c73",
"assets/assets/images/Record%2520Of%2520World%25200001/27.jpg": "d7b50958c8d70c8b02d79f4ba417ba98",
"assets/assets/images/Record%2520Of%2520World%25200001/28.jpg": "ab76c20f53ba51b21a4bf5be29e8cbfe",
"assets/assets/images/Record%2520Of%2520World%25200001/29.jpg": "0409220b50fa10e3b26cc871d6d300e1",
"assets/assets/images/Record%2520Of%2520World%25200001/3.jpg": "c6bff4071aff740cb5e5988116cb9ee2",
"assets/assets/images/Record%2520Of%2520World%25200001/30.jpg": "a3bef2a4ef427ce23d7e1e632d8dca6c",
"assets/assets/images/Record%2520Of%2520World%25200001/31.jpg": "4260c104b2c7b221ca8db9d8d69a9d5b",
"assets/assets/images/Record%2520Of%2520World%25200001/32.jpg": "6ba4c81fd038bf35639356ff0037bc64",
"assets/assets/images/Record%2520Of%2520World%25200001/33.jpg": "6c467f94ef43038ff8466b2fd7ee8763",
"assets/assets/images/Record%2520Of%2520World%25200001/34.jpg": "b400e42581b29684dc08fbc812e4c879",
"assets/assets/images/Record%2520Of%2520World%25200001/35.jpg": "8ca94efd80920492f3d478a186bc4181",
"assets/assets/images/Record%2520Of%2520World%25200001/36.jpg": "5fd15b63576f10c4e5e06670c4590d66",
"assets/assets/images/Record%2520Of%2520World%25200001/37.jpg": "3bd14dbab10be05b5178905e48fa7538",
"assets/assets/images/Record%2520Of%2520World%25200001/38.jpg": "408d031e757657cbe8ecd3118e6a383e",
"assets/assets/images/Record%2520Of%2520World%25200001/39.jpg": "cb911115da3fc37b4f76e7ad2ce5a7bb",
"assets/assets/images/Record%2520Of%2520World%25200001/4.jpg": "fdc0429f7345cdd8e6c0eec277bd4e5b",
"assets/assets/images/Record%2520Of%2520World%25200001/40.jpg": "e4b850926a5db9c24815159731cb7cc9",
"assets/assets/images/Record%2520Of%2520World%25200001/41.jpg": "76ea75ef893b2673b4fb1d32b2da03cb",
"assets/assets/images/Record%2520Of%2520World%25200001/42.jpg": "0d388dafda447e33a00db0159c05ed35",
"assets/assets/images/Record%2520Of%2520World%25200001/43.jpg": "a1978a206fcce11b68cd0d714e709889",
"assets/assets/images/Record%2520Of%2520World%25200001/44.jpg": "ec8a566ace61141bc05a9f2ad611b1b2",
"assets/assets/images/Record%2520Of%2520World%25200001/45.jpg": "10ff9424aa8d0d8219372acb059d3ebf",
"assets/assets/images/Record%2520Of%2520World%25200001/46.jpg": "5f506e164c317f5930153c12fac694db",
"assets/assets/images/Record%2520Of%2520World%25200001/47.jpg": "d14c6629818f8528323ff617a9e09ff8",
"assets/assets/images/Record%2520Of%2520World%25200001/48.jpg": "d33b4f4dab5df31b6182d84b7be5e4eb",
"assets/assets/images/Record%2520Of%2520World%25200001/49.jpg": "4f12005427924ca08577d649cdbefa8e",
"assets/assets/images/Record%2520Of%2520World%25200001/5.jpg": "ab791662d97a654cde1dcadc08236b14",
"assets/assets/images/Record%2520Of%2520World%25200001/50.jpg": "86a1f561a6532e71df8a8125f2baf909",
"assets/assets/images/Record%2520Of%2520World%25200001/51.jpg": "bad40fd2f6760b1f115dc5c11bd62383",
"assets/assets/images/Record%2520Of%2520World%25200001/52.jpg": "d0d62cf11113bf8e7b0b546d2ef24f0a",
"assets/assets/images/Record%2520Of%2520World%25200001/53.jpg": "0162a29aa862394672cf6764f4a70037",
"assets/assets/images/Record%2520Of%2520World%25200001/54.jpg": "a52dbf7916f4ff6fdf2c9671305cf0a2",
"assets/assets/images/Record%2520Of%2520World%25200001/55.jpg": "5b50e987fba52c6fa761109030ffe3b8",
"assets/assets/images/Record%2520Of%2520World%25200001/56.jpg": "e66a5467c02b1a47ece9a873ac80132e",
"assets/assets/images/Record%2520Of%2520World%25200001/57.jpg": "24e225c68e8558623d7a06b49573cd42",
"assets/assets/images/Record%2520Of%2520World%25200001/58.jpg": "75a0912174a42f1ba9bdfd2c61be0322",
"assets/assets/images/Record%2520Of%2520World%25200001/59.jpg": "35cedc55e6fd32926d68c64880cdfc0b",
"assets/assets/images/Record%2520Of%2520World%25200001/6.jpg": "31b3a9450851ec14a5321f19a01855e8",
"assets/assets/images/Record%2520Of%2520World%25200001/60.jpg": "bd4639d110b4a818bb269396fe04c3e7",
"assets/assets/images/Record%2520Of%2520World%25200001/61.jpg": "09ef5529cc939677c988fcb51b8cee72",
"assets/assets/images/Record%2520Of%2520World%25200001/62.jpg": "3a8f67f7108f83472ddfeff9fe666017",
"assets/assets/images/Record%2520Of%2520World%25200001/7.jpg": "928bbc07d0a342e5f85af457e10a40da",
"assets/assets/images/Record%2520Of%2520World%25200001/8.jpg": "491e6169d1f4228eebccb59b98472c77",
"assets/assets/images/Record%2520Of%2520World%25200001/9.jpg": "603f2d9b56dd841451ad0cf95c3bc068",
"assets/assets/images/Record%2520Of%2520World%25200001/thumbnail.jpg": "ec713725a20ca40ca5a3de4fda7df9fd",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "8b5f0b8e497484f7604f333baa4fbc5b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ef2af05ad3fc7a8f966117efab38a428",
"/": "ef2af05ad3fc7a8f966117efab38a428",
"main.dart.js": "dc9ee2e51d89ca8233dbe9b0d93aab14",
"manifest.json": "1f65bf675ca7e70390bc23e466eb8f6a",
"version.json": "43b5cff2e1d3bba8884bf65437652a08"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
