/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import {View,Text,Pressable,StyleSheet} from 'react-native';
const colorGithub = '#010409';
const colorFontGithub = '#C9D1D9';
const colorDarkFontGithub = '#4F565E';
let obj = '';
export default function () {
  //const [carregando, setCarregando] = useState(true);
  //const [dados, setdados] = useState({});

  useEffect(() => {
    const url = 'https://api.github.com/users/lucaslopeslima';

    fetch(url)
      .then(res => {
        return res.json;
      })
      .then(data => {
        //setDados(data);
        obj = data;
        console.log(data);
        console.log(data.bio);
        console.log(data.followers);
        console.log(data.followers_url);
        console.log(data.following);
        console.log(data.following_url);
        console.log(data.name);
        console.log(data.login);
        console.log(data.public_repos);
        console.log(data.location);
        console.log(data.blog);
      })
      .catch(e => {
        console.log(e);
        return e;
      });
  },);

  return (
    <View style={style.follow}>
      <Pressable style={style.pressableFollow}>
        <Text style={[style.defaultText, style.textFollow]}>{obj} followers</Text>
      </Pressable>
      <Pressable>
        <Text style={style.defaultText}>following</Text>
      </Pressable>
    </View>
  );
}


const style = StyleSheet.create({
    container: {
      // Column
      backgroundColor: colorGithub,
      flex: 1, // Expandir para a tela inteira
      justifyContent: 'center',
      alignItems: 'center',
      // flexDirection: 'row',
    },
    content: {
      alignItems: 'center',
      padding: 20,
    },
    avatar: {
      height: 190,
      width: 190,
      borderRadius: 100,
      borderColor: 'gray',
      borderWidth: 2,
    },
    defaultText: {
      color: colorFontGithub,
    },
    name: {
      marginTop: 20,
      fontWeight: 'bold',
      fontSize: 24,
    },
    nickname: {
      fontSize: 18,
      color: colorDarkFontGithub,
    },
    description: {
      fontWeight: 'bold',
      fontSize: 14,
    },
    button: {
      marginTop: 20,
      backgroundColor: colorDarkFontGithub,
      borderRadius: 10,
      padding: 15,
      paddingLeft: 60,
      paddingRight: 60,
    },
    textButton: {
      fontWeight: 'bold',
      fontSize: 16,
    },
    follow: {
      marginTop: 20,
      width: 200,
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    textFollow: {},
  });
