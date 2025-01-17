import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    ScrollView,
    Image,
    ToastAndroid,
} from "react-native";

const OrderProductScreen = ({ route, navigation }) => {
    const { product } = route.params; // Nhận dữ liệu từ màn hình trước

    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");

    const handlePlaceOrder = () => {
        // Logic đặt hàng
        ToastAndroid.show(
            `Đặt hàng thành công cho ${product.name}`,
            ToastAndroid.SHORT
        );
        // navigation.navigate("ProductList"); // Quay lại màn hình danh sách sản phẩm
        const order = {
            name,
            address,
            phone,
            products: [
                {
                    name: product.name,
                    price: product.price,
                    image: product.image,
                    quantity: 1,
                },
            ],
            totalAmount: product.price,
        };

        navigation.navigate("ViewOrderScreen", { order });
    };

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Thông tin đơn hàng</Text>

            {/* Thông tin sản phẩm */}
            <View style={styles.productInfo}>
                <Image
                    source={{ uri: product.image }}
                    style={styles.productImage}
                />
                <View style={styles.productDetails}>
                    <Text style={styles.productName}>{product.name}</Text>
                    <Text style={styles.productPrice}>
                        ${product.price.toFixed(2)}
                    </Text>
                </View>
            </View>

            {/* Form nhập thông tin */}
            <View style={styles.formContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Recipient name"
                    value={name}
                    onChangeText={setName}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Shipping address"
                    value={address}
                    onChangeText={setAddress}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Phone number"
                    value={phone}
                    onChangeText={setPhone}
                    keyboardType="phone-pad"
                />
            </View>

            {/* Nút đặt hàng */}
            <TouchableOpacity
                style={styles.orderButton}
                onPress={handlePlaceOrder}
            >
                <Text style={styles.orderButtonText}>Payment</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
        padding: 15,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 15,
        color: "#333",
    },
    productInfo: {
        flexDirection: "row", // Hiển thị hình ảnh và thông tin cùng 1 hàng
        alignItems: "center", // Căn giữa hình ảnh và thông tin
        padding: 12,
        backgroundColor: "#fff",
        marginBottom: 10,
        borderRadius: 8,
    },
    productImage: {
        width: 50,
        height: 50,
        resizeMode: "cover",
        borderRadius: 5,
        marginRight: 15, // Khoảng cách giữa hình ảnh và thông tin
    },
    productName: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333",
    },
    productDetails: {
        flexDirection: "column", // Đảm bảo tên và giá hiển thị theo cột
        justifyContent: "center",
    },
    productPrice: {
        fontSize: 16,
        color: "#ff4500",
        marginTop: 5,
    },
    formContainer: {
        backgroundColor: "#fff",
        padding: 15,
        marginBottom: 10,
        borderRadius: 8,
    },
    input: {
        height: 40,
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        paddingLeft: 10,
        fontSize: 16,
    },
    orderButton: {
        backgroundColor: "#ee4d2d",
        paddingVertical: 15,
        marginHorizontal: 15,
        borderRadius: 10,
        alignItems: "center",
        marginBottom: 20,
    },
    orderButtonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
});

export default OrderProductScreen;
