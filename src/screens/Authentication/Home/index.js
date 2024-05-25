import React, { useEffect, useState } from 'react'
import { View, Dimensions } from 'react-native'
import CategoryListView from '../../../Components/CategoryList'
import { productData } from '../../../../resource/Data/mockData';
import ColorConstants from '../../../constants/ColorConstants';
import { transformDataToOptionNodes } from '../../../Helpers/dataHelper';


const Home = () => {
    const windowWidth = Dimensions.get('window').width;
    const options =  transformDataToOptionNodes(productData);
    const [checkedItems, setCheckedItems] = useState(new Set());

    useEffect(() => {
      console.log("Checked Items: ", Array.from(checkedItems));
    }, [checkedItems]);

  
    return (
        <View>
        <CategoryListView
          data={options}
          listStyles={{ backgroundColor: ColorConstants.primaryColor, width: windowWidth * 0.65 }}
          checkedItems={checkedItems}
          setCheckedItems={setCheckedItems}
         />
    </View>
    );
  };
  
  export default Home;
  
