// src/components/OptionNode.js
import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import CheckBox from '@react-native-community/checkbox';
import ColorConstants from '../../constants/ColorConstants';

const OptionNode = ({ node, path, checkedItems, setCheckedItems }) => {

  const handleToggle = () => {
    const newCheckedItems = new Set(checkedItems);
    if (newCheckedItems.has(node.id)) {
      newCheckedItems.delete(node.id);
    } else {
      newCheckedItems.add(node.id);
    }
    setCheckedItems(newCheckedItems);
  };

  return (
    <View style={[styles.nodeContainer]}>
      <View style={styles.nodeContent}>
        <CheckBox
          style={{backgroundColor: 'white'}}
          boxType='square'
          value={checkedItems.has(path)}
          onValueChange={handleToggle}
          lineWidth={1}
          animationDuration={0}
          tintColor={ColorConstants.secondaryColor}
          onCheckColor={ColorConstants.secondaryColor}
          onTintColor={ColorConstants.secondaryColor}
        />
        <View>
          <Text lineBreakMode='tail' numberOfLines={2} style={styles.nodeText}>{node.name}</Text>
          {node.description && <Text numberOfLines={2} style={styles.nodeDescription}>{node.description}</Text>}
        </View>
      </View>
      {node.children && (
        <View style={styles.childrenContainer}>
          {node.children.map((child, index) => (
            <OptionNode
              key={index}
              node={child}
              path={`${path}.${index}`}
              checkedItems={checkedItems}
              setCheckedItems={setCheckedItems}
            />
          ))}
        </View>
      )}
    </View>
  );
};

export default OptionNode;
