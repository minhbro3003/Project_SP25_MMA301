import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
} from "react-native";

const ProductDetailScreen = ({ route }) => {
    const { product } = route.params;
    const navigation = useNavigation();

    const handleBuyNow = () => {
        // Điều hướng đến màn hình OrderProduct và truyền dữ liệu sản phẩm
        navigation.navigate("OrderProduct", { product });
    };
    return (
        <ScrollView style={styles.container}>
            <Image
                source={{ uri: product.image }}
                style={styles.productImage}
            />
            <View style={styles.productInfo}>
                <View style={styles.productMeta}>
                    <Text style={styles.productPrice}>
                        ${product.price.toFixed(2)}
                    </Text>
                    <Text style={styles.productSold}>Sold {product.sold}+</Text>
                </View>

                <Text style={styles.productName}>{product.name}</Text>
            </View>
            <View style={styles.descriptionContainer}>
                <Text style={styles.descriptionTitle}>Description</Text>
                <Text style={styles.descriptionText}>
                    {product.description}
                </Text>
            </View>
            <View style={styles.productMeta}>
                <TouchableOpacity
                    style={[styles.buyButton, styles.addToCartButton]}
                >
                    <Text style={styles.buyButtonTextAdd}>Add to Cart</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.buyButton, styles.buyNowButton]}
                    onPress={handleBuyNow}
                >
                    <Text style={styles.buyButtonTextBuy}>Buy Now</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#f5f5f5" },
    productImage: { width: "100%", height: 300, resizeMode: "cover" },
    productInfo: { padding: 15, backgroundColor: "#fff", marginBottom: 10 },
    productName: { fontSize: 17, fontWeight: "bold", color: "#333" },
    productPrice: { fontSize: 20, fontWeight: "bold", color: "#ff4500" },
    productSold: { fontSize: 14, color: "#888" },
    productMeta: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    descriptionContainer: {
        padding: 15,
        backgroundColor: "#fff",
        marginBottom: 10,
    },
    descriptionTitle: { fontSize: 16, fontWeight: "bold", color: "#333" },
    descriptionText: { fontSize: 14, color: "#555" },
    buyButton: {
        flex: 1, // Để các button chiếm không gian đều nhau
        paddingVertical: 15,
        alignItems: "center",
    },

    addToCartButton: {
        backgroundColor: "#ffe4c6", // Màu cho "Add to Cart"
    },

    buyNowButton: {
        backgroundColor: "#ee4d2d", // Màu cho "Mua ngay"
    },

    buyButtonTextAdd: {
        // color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
        color: "#ee4d2d",
    },
    buyButtonTextBuy: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
});

export default ProductDetailScreen;
