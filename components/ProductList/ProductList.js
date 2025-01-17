import React from "react";
import { FlatList, StyleSheet, View, useWindowDimensions } from "react-native";
import CardProduct from "../CardProduct/CardProduct";

const ProductList = ({ navigation }) => {
    const { width } = useWindowDimensions();

    const products = [
        {
            id: 1,
            name: "Wireless Headphones",
            rate: 4.5,
            sold: 1200,
            price: 99.99,
            description: "Tai nghe không dây với âm thanh chất lượng cao...",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuzonOu-NPLvTlFz35GUUS9kOHTDgVHKrojA&s",
        },
        {
            id: 2,
            name: "Smartphone Case",
            rate: 4.2,
            sold: 800,
            price: 19.99,
            description: "Ốp lưng điện thoại bền đẹp, thiết kế thời trang...",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuzonOu-NPLvTlFz35GUUS9kOHTDgVHKrojA&s",
        },
        {
            id: 3,
            name: "Smart Watch",
            rate: 4.8,
            sold: 500,
            price: 149.99,
            description:
                "Đồng hồ thông minh với tính năng theo dõi sức khỏe...",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuzonOu-NPLvTlFz35GUUS9kOHTDgVHKrojA&s",
        },
        {
            id: 3,
            name: "Smart Watch",
            rate: 4.8,
            sold: 500,
            price: 149.99,
            description:
                "Đồng hồ thông minh với tính năng theo dõi sức khỏe...",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuzonOu-NPLvTlFz35GUUS9kOHTDgVHKrojA&s",
        },
        {
            id: 3,
            name: "Smart Watch",
            rate: 4.8,
            sold: 500,
            price: 149.99,
            description:
                "Đồng hồ thông minh với tính năng theo dõi sức khỏe...",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuzonOu-NPLvTlFz35GUUS9kOHTDgVHKrojA&s",
        },
    ];

    const numColumns = 2; // Số sản phẩm mỗi hàng
    const productWidth = (width - 30) / numColumns; // Trừ đi khoảng cách padding và tính kích thước mỗi sản phẩm

    const handleCardPress = (product) => {
        navigation.navigate("ProductDetail", { product });
    };

    const renderItem = ({ item }) => (
        <View style={[styles.cardContainer, { width: productWidth }]}>
            <CardProduct product={item} onPress={handleCardPress} />
        </View>
    );

    return (
        <FlatList
            data={products}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
            numColumns={numColumns}
            columnWrapperStyle={styles.row} // Căn chỉnh các cột
            contentContainerStyle={styles.listContainer}
        />
    );
};

const styles = StyleSheet.create({
    listContainer: {
        padding: 10,
    },
    row: {
        justifyContent: "flex-start", // Căn các sản phẩm bắt đầu từ trái
    },
    cardContainer: {
        margin: 5, // Khoảng cách giữa các sản phẩm
    },
});

export default ProductList;
