import 'package:flutter/material.dart';
import 'package:mangamster/method/manga_item.dart';

class MangaListPage extends StatefulWidget {
  const MangaListPage({Key? key}) : super(key: key);

  @override
  _MangaListPageState createState() => _MangaListPageState();
}

class _MangaListPageState extends State<MangaListPage> {

  var mangas = [
    Mangaitem(
        name: 'Nene-san',
        author: 'Amairo, Chu',
        TL: 'TL',
        thumbnail: 'thumbnail.jpg',
        pagecount: 60,
    ),
    Mangaitem(
      name: '7 DAY DINER',
      author: 'Sanka Kumaru',
      TL: 'เพจแปลแบบคนเหงาและง่วง',
      thumbnail: 'thumbnail.jpg',
      pagecount: 59,
    ),
    Mangaitem(
      name: 'Record Of World 0001',
      author: 'Noririn4696',
      TL: 'O-Minus',
      thumbnail: 'thumbnail.jpg',
      pagecount: 59,
    ),
  ];

  @override
  Widget build(BuildContext context) {
    return Container(
      child: ListView.builder(
        itemCount: mangas.length,
        itemBuilder: (BuildContext contex, int index) {
          var manga = mangas[index];
          return Card(
              margin: const EdgeInsets.all(8.0),
              child: InkWell(
                onTap: () {
                  goDetail(mangas[index]);
                },
                child: Padding(
                  padding: const EdgeInsets.all(16.0),
                  child: Row(
                    children: [
                      Image.asset(
                        'assets/images/${manga.name}/${manga.thumbnail}',
                        width: 90.0,
                        height: 90.0,
                      ),
                      const SizedBox(width: 25),
                      Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          const SizedBox(width: 30,),
                          Text(
                            '${manga.name}',
                            style: TextStyle(fontSize: 20,),
                          ),
                          SizedBox(width: 30,),
                          Text('Auther:${manga.author}  TL:${manga.TL}',
                            style: TextStyle(fontSize: 15),
                          ),
                        ],
                      ),

                    ],
                  ),
                ),
              ));
        },
      ),
    );
  }
  void goDetail(Mangaitem manga) {
    Navigator.pushNamed(
      context,
      "/MangaDetail",
      arguments: manga,
    );
  }
}
