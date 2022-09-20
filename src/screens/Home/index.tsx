import { FlatList, Image, View } from 'react-native';

import { styles } from './styles';

import { Heading } from '../../components/Heading';
import { GameCard } from '../../components/GameCard';

import logoImg from "../../assets/logo-nlw-esports.png"

import { GAMES } from "../../utils/games"

export function Home() {
  return (
    <View style={styles.container}>
      <Image source={logoImg} style={styles.logo} />
      
      <Heading 
        title="Encontre seu duo!"
        subtitle="Selecione o game que deseja jogar..."
      />

      <FlatList
        keyExtractor={(item) => item.id}
        data={GAMES}
        renderItem={({ item }) => <GameCard data={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentList}
      />
    </View>
  );
}