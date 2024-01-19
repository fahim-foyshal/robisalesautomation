import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity, Animated, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const FilterSheet = (props) => {
  const [animation] = useState(new Animated.Value(windowWidth));

  const handleOnClose = () => {
    Animated.timing(animation, {
      toValue: windowWidth,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      props.onClose();
    });
  };

  useEffect(() => {
    if (props.isVisible) {
      Animated.timing(animation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [props.isVisible, animation]);

  const translateX = animation;

  return (
    <Modal transparent visible={props.isVisible} onRequestClose={handleOnClose}>
      <View style={styles.bottomSheetContainer}>
        <Animated.View  style={[styles.bottomSheetContent, { transform: [{ translateX }] }]}>
          <View style={{ padding: 20 }}>
            <Text>Custom Modal Content</Text>
            <TouchableOpacity onPress={handleOnClose}>
              <Text>Close Modal</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  bottomSheetContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'red', // Add a semi-transparent background
  },

  bottomSheetContent: {
    position: 'absolute',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end', // Align content to the left
    backgroundColor: 'green',
    top: 0,
    height: '100%',
    width: '80%',
    marginRight:0,
    borderTopRightRadius: 40, // Adjust to borderTopRightRadius for rounded corners on the right
    borderBottomRightRadius: 40, // Add this for rounded corners on the right
    elevation: 10,
  },

  horizontalLine: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginVertical: 10,
  },
  button: {
    width: 200,
    height: 50,
  },
});

export default FilterSheet;
