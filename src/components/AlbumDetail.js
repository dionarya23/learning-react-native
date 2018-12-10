import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection'
import Button from './Button'

const AlbumDetail = ({album}) => {
  const {thumbnail_image, title, artist, image, url} = album
  const {
    thumbnailStyle,
    headerContentStyles,
    thumbnailContainerStyle,
    headerTextStyle,
    imageStyle
    } = styles
  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
            <Image
            style={thumbnailStyle}
            source={{uri: thumbnail_image}} />
        </View>
        <View style={headerContentStyles}>
                <Text style={{fontSize:18}}>{title}</Text>
                <Text>{artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image style={imageStyle} source={{uri: image}} /> 
      </CardSection>

      <CardSection>
        <Button onPress={() => Linking.openURL(url)}>
          Buy Now
        </Button>
      </CardSection>

    </Card>
  );
};

const styles = {
  headerContentStyles: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fonstSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50 
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
}

export default AlbumDetail;