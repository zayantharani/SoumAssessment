// src/components/CategoryListView.js
import React from 'react';
import { View, FlatList } from 'react-native';
import OptionNode from '../OptionNode';
import { styles } from './styles';

const CategoryListView = ({data, listStyles, checkedItems, setCheckedItems}) => {
  const renderItem = ({ item }) => (
    <OptionNode
      node={item}
      path={item.path}
      checkedItems={checkedItems}
      setCheckedItems={setCheckedItems}
    />
  );

  const itemSeparator = () => {
    return <View style={styles.separator} />;
  };

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.path}
      contentContainerStyle={[styles.container, listStyles]}
      ItemSeparatorComponent={itemSeparator}
    />
  );
};

export default CategoryListView;
