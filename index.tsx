import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  Pressable,
} from 'react-native';
import { Video, ResizeMode } from 'expo-av';

const { height, width } = Dimensions.get('window');

const videos = [
  { id: '1', url: 'https://www.w3schools.com/html/mov_bbb.mp4' },
  { id: '2', url: 'https://www.w3schools.com/html/movie.mp4' },
];

export default function HomeScreen() {
  return (
    <FlatList
      data={videos}
      keyExtractor={(item) => item.id}
      pagingEnabled
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => (
        <View style={styles.container}>
          <Video
            source={{ uri: item.url }}
            style={styles.video}
            resizeMode={ResizeMode.COVER}
            shouldPlay
            isLooping
          />

          {/* Bottom text */}
          <View style={styles.bottomOverlay}>
            <Text style={styles.username}>@you</Text>
            <Text style={styles.caption}>🔥 TikTok Clone</Text>
          </View>

          {/* Right side buttons */}
          <View style={styles.rightBar}>
            <Pressable style={styles.iconBox}>
              <Text style={styles.icon}>❤️</Text>
              <Text style={styles.count}>120</Text>
            </Pressable>

            <Pressable style={styles.iconBox}>
              <Text style={styles.icon}>💬</Text>
              <Text style={styles.count}>45</Text>
            </Pressable>

            <Pressable style={styles.iconBox}>
              <Text style={styles.icon}>🔗</Text>
              <Text style={styles.count}>Share</Text>
            </Pressable>
          </View>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
  height: height,
  width: '100%',
  backgroundColor: 'black',
  justifyContent: 'center',
  alignItems: 'center',
},
  video: {
  width: '100%',
  height: '100%',
},
  bottomOverlay: {
    position: 'absolute',
    bottom: 80,
    left: 15,
  },
  username: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  caption: {
    color: 'white',
    marginTop: 5,
  },
  rightBar: {
    position: 'absolute',
    right: 10,
    bottom: 100,
    alignItems: 'center',
  },
  iconBox: {
    alignItems: 'center',
    marginBottom: 20,
  },
  icon: {
    fontSize: 28,
    color: 'white',
  },
  count: {
    color: 'white',
    fontSize: 12,
  },
});