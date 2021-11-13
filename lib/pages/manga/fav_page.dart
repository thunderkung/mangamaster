import 'package:flutter/material.dart';

class FavoriteListPage extends StatefulWidget {
  const FavoriteListPage({Key? key}) : super(key: key);

  @override
  _FavoriteListPageState createState() => _FavoriteListPageState();
}

class _FavoriteListPageState extends State<FavoriteListPage> {
  @override
  Widget build(BuildContext context) {
    return Container(
      child: (
        Image.asset('assets/images/thumbnail.jpg')
      ),
    );
  }
}
