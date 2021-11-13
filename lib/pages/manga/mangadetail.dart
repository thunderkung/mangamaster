import 'package:flutter/material.dart';
import 'package:mangamster/method/manga_item.dart';

class MangaDetail extends StatefulWidget {
  const MangaDetail({Key? key}) : super(key: key);

  @override
  _MangaDetailState createState() => _MangaDetailState();
}

class _MangaDetailState extends State<MangaDetail> {
  var _selectedMangaPageIndex = 0;

 // final children =

  @override
  Widget build(BuildContext context) {
    var manga = ModalRoute.of(context)!.settings.arguments as Mangaitem;


    return Scaffold(
      appBar: AppBar(
        title: Text('${manga.name}'),
      ),
      body: SingleChildScrollView(

        child: Row(
          crossAxisAlignment: CrossAxisAlignment.center,
          mainAxisAlignment: MainAxisAlignment.center  ,

          children: [
            Column(
              crossAxisAlignment: CrossAxisAlignment.center,
              mainAxisAlignment: MainAxisAlignment.center,

              children: [

                for(int i = 1;i<=manga.pagecount;i++)
                Card(
                  child: Image.asset('assets/images/${manga.name}/${i}.jpg'),
                )
              ],
            ),
          ],
        ),
      ),
    );
  }
}
