/* eslint-disable prettier/prettier */
import React, {useEffect,useState} from 'react';
import {
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Text,
  Pressable,
  Linking
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

const colorGithub = '#010409';
const colorFontGithub = '#C9D1D9';
const colorDarkFontGithub = '#4F565E';

const url = 'https://api.github.com/users/lucaslopeslima';


const App = () => {
  const [data, setData] = useState([])
  const handlePressGoToGithub = async () => {
    console.log('Verificando link');
    const res = await Linking.canOpenURL(data.html_url);
    if (res) {
      console.log('Link aprovado');
      console.log('Abrindo link....');
      await Linking.openURL(data.html_url);
    }
  }
  const handleFollowers = async () => {
    console.log('Verificando link');
    const res = await Linking.canOpenURL('https://github.com/lucaslopeslima?tab=followers');
    if (res) {
      console.log('Link aprovado');
      console.log('Abrindo link....');
      await Linking.openURL('https://github.com/lucaslopeslima?tab=followers');
    }
  }
  const handleFollowing = async () => {
    console.log('Verificando link');
    const res = await Linking.canOpenURL('https://github.com/lucaslopeslima?tab=following');
    if (res) {
      console.log('Link aprovado');
      console.log('Abrindo link....');
      await Linking.openURL('https://github.com/lucaslopeslima?tab=following');
    }
  }
  const handleBlog = async () => {
    console.log('Verificando link');
    const res = await Linking.canOpenURL('https://lucaslopeslima.com.br/');
    if (res) {
      console.log('Link aprovado');
      console.log('Abrindo link....');
      await Linking.openURL('https://lucaslopeslima.com.br/');
    }
  }
  useEffect(()=>{
    async function loadData(){
      const response = await fetch(url)
      .then(res => {
        return res.json();
      })
      .then(data => {
           return data;
      })
      .catch(e => {
          return e // Tratar o erro
      });
      setData(response)
    }
    loadData()
  }, [])

  return (
    <SafeAreaView style={style.container}>
      <StatusBar backgroundColor={colorGithub} barStyle="light-content" />
      <View style={style.content} >
        <Image
          accessibilityLabel="Foto de Lucas Lima"
          style={style.avatar}
          source={{uri: data.avatar_url}}
        />
        <Text
          accessibilityLabel="Nome: Lucas Lima"
          style={[style.defaultText, style.name]}>{data.name}
        </Text>
        <Text
          accessibilityLabel="Nickname: lucaslopeslima
          "
          style={[style.defaultText, style.nickname]}>{data.login}
        </Text>
        <Text
          accessibilityLabel="Estudante de Desenvolvimento Web Full-Stack. Aficionado por tecnologia e sempre pronto pra um novo desafio."
          style={[style.defaultText, style.description]}>{data.bio}
        </Text>

        <Pressable onPress={handlePressGoToGithub}>
          <View style={style.button}>
            <Text style={[style.defaultText, style.textButton]}>
              View Profile
            </Text>
          </View>
        </Pressable>

        <View style={style.follow}>
        <Icon name="people-outline" size={17} color="white" />
          <Pressable style={style.pressableFollow} onPress={handleFollowers}>
            <Text style={[style.defaultText, style.textFollow]}>{data.followers} followers
            </Text>
          </Pressable>
          <Pressable onPress={handleFollowing}>
            <Text style={style.defaultText}>{data.following} following</Text>
          </Pressable>
        </View>

        <View style={style.footer}>
          <Text style={style.defaultText}><Icon name="location-outline" size={17} color="white" />  {data.location}</Text>
          <Pressable onPress={handleBlog}>
            <Text style={style.defaultText}><Icon name="link-outline" size={17} color="white" />  {data.blog}</Text>
          </Pressable>
        </View>
      </View>
      <View style={style.ballsgrid}>
        <View style={style.ball}></View>
        <View style={style.ball}></View>
        <View style={style.ball}></View>
        <View style={style.ball}></View>
        <View style={style.ball}></View>
        <View style={style.ball}></View>
        <View style={style.ball}></View>
        <View style={style.ball}></View>
        <View style={style.ball}></View>
        <View style={style.ball}></View>
        <View style={style.ball}></View>
        <View style={style.ball}></View>
        <View style={style.ball}></View>
      </View>
      <View style={style.ballsgrid}>
        <View style={style.ball}></View>
        <View style={style.lightball}></View>
        <View style={style.lightball}></View>
        <View style={style.ball}></View>
        <View style={style.ball}></View>
        <View style={style.ball}></View>
        <View style={style.lightball}></View>
        <View style={style.ball}></View>
        <View style={style.ball}></View>
        <View style={style.ball}></View>
        <View style={style.lightball}></View>
        <View style={style.ball}></View>
        <View style={style.ball}></View>
      </View>
      <View style={style.ballsgrid}>
        <View style={style.ball}></View>
        <View style={style.lightball}></View>
        <View style={style.ball}></View>
        <View style={style.lightball}></View>
        <View style={style.ball}></View>
        <View style={style.ball}></View>
        <View style={style.lightball}></View>
        <View style={style.ball}></View>
        <View style={style.ball}></View>
        <View style={style.lightball}></View>
        <View style={style.ball}></View>
        <View style={style.lightball}></View>
        <View style={style.ball}></View>
      </View>
      <View style={style.ballsgrid}>
        <View style={style.ball}></View>
        <View style={style.lightball}></View>
        <View style={style.ball}></View>
        <View style={style.lightball}></View>
        <View style={style.ball}></View>
        <View style={style.ball}></View>
        <View style={style.lightball}></View>
        <View style={style.ball}></View>
        <View style={style.ball}></View>
        <View style={style.lightball}></View>
        <View style={style.ball}></View>
        <View style={style.lightball}></View>
        <View style={style.ball}></View>
      </View>
      <View style={style.ballsgrid}>
        <View style={style.ball}></View>
        <View style={style.lightball}></View>
        <View style={style.lightball}></View>
        <View style={style.ball}></View>
        <View style={style.ball}></View>
        <View style={style.ball}></View>
        <View style={style.lightball}></View>
        <View style={style.ball}></View>
        <View style={style.ball}></View>
        <View style={style.ball}></View>
        <View style={style.lightball}></View>
        <View style={style.ball}></View>
        <View style={style.ball}></View>
      </View>
      <View style={style.ballsgrid}>
        <View style={style.ball}></View>
        <View style={style.ball}></View>
        <View style={style.ball}></View>
        <View style={style.ball}></View>
        <View style={style.ball}></View>
        <View style={style.ball}></View>
        <View style={style.ball}></View>
        <View style={style.ball}></View>
        <View style={style.ball}></View>
        <View style={style.ball}></View>
        <View style={style.ball}></View>
        <View style={style.ball}></View>
        <View style={style.ball}></View>
      </View>
    </SafeAreaView>
  );
};

export default App;

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
    marginBottom: 20,
  },
  button: {
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
  footer: {
    marginTop: 40,
  },
  ballsgrid: {
    paddingLeft:1,
    paddingRight:1,
    width: 225,
    marginTop: 2,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  ball: {
    width: 15,
    height: 15,
    borderRadius: 5,
    backgroundColor: 'green',
  },
  lightball: {
    width: 15,
    height: 15,
    borderRadius: 5,
    backgroundColor:'#26d153'
  }
});
