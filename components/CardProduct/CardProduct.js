import React from "react";
import { TouchableOpacity, View, Text, Image, StyleSheet } from "react-native";

const CardProduct = ({ product, onPress }) => {
    return (
        <TouchableOpacity style={styles.card} onPress={() => onPress(product)}>
            <Image
                source={{ uri: product.image }}
                style={styles.productImage}
            />
            <View style={styles.infoContainer}>
                <Text style={styles.productName} numberOfLines={2}>
                    {product.name}
                </Text>
                <View style={styles.productMeta}>
                    <Text style={styles.productRate}>⭐ {product.rate}</Text>
                    <Text style={styles.productSold}>Sold {product.sold}+</Text>
                </View>
                <Text style={styles.productPrice}>
                    ${product.price.toFixed(2)}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#fff",
        borderRadius: 5,
        overflow: "hidden",
        elevation: 3,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
    },
    productImage: {
        width: "100%",
        height: 120,
        resizeMode: "cover",
    },
    infoContainer: {
        padding: 10,
    },
    productName: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 5,
    },
    productMeta: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 5,
    },
    productPrice: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#ff4500",
    },
});

export default CardProduct;
