import React from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
    TouchableOpacity,
} from "react-native";

const ViewOrderScreen = ({ route, navigation }) => {
    const { order } = route.params; // Nhận thông tin đơn hàng từ màn hình trước

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Chi tiết đơn hàng</Text>

            {/* Thông tin người nhận */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Thông tin người nhận</Text>
                <Text style={styles.infoText}>Tên: {order.name}</Text>
                <Text style={styles.infoText}>Địa chỉ: {order.address}</Text>
                <Text style={styles.infoText}>
                    Số điện thoại: {order.phone}
                </Text>
            </View>

            {/* Thông tin sản phẩm */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Sản phẩm</Text>
                {order.products.map((product, index) => (
                    <View key={index} style={styles.productInfo}>
                        <Image
                            source={{ uri: product.image }}
                            style={styles.productImage}
                        />
                        <View style={styles.productDetails}>
                            <Text style={styles.productName}>
                                {product.name}
                            </Text>
                            <Text style={styles.productPrice}>
                                ${product.price}
                            </Text>
                            <Text style={styles.productQuantity}>
                                Số lượng: {product.quantity}
                            </Text>
                        </View>
                    </View>
                ))}
            </View>

            {/* Phương thức thanh toán */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Phương thức thanh toán</Text>
                <Text style={styles.infoText}>Thanh toán khi nhận hàng</Text>
            </View>

            {/* Tổng tiền */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Tổng tiền</Text>
                <Text style={styles.totalAmount}>${order.totalAmount}</Text>
            </View>

            {/* Trạng thái đơn hàng */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Trạng thái</Text>
                <Text style={styles.infoText}>Đang xử lý</Text>
            </View>

            {/* Nút quay lại */}
            <TouchableOpacity
                style={styles.backButton}
                onPress={() => navigation.goBack()}
            >
                <Text style={styles.backButtonText}>Quay lại</Text>
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
        marginBottom: 20,
        color: "#333",
    },
    section: {
        backgroundColor: "#fff",
        padding: 15,
        marginBottom: 15,
        borderRadius: 8,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
        color: "#333",
    },
    infoText: {
        fontSize: 16,
        color: "#555",
        marginBottom: 5,
    },
    totalAmount: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#ff4500",
    },
    productInfo: {
        flexDirection: "row",
        marginBottom: 10,
        alignItems: "center",
    },
    productImage: {
        width: 60,
        height: 60,
        resizeMode: "cover",
        borderRadius: 5,
        marginRight: 15,
    },
    productDetails: {
        flexDirection: "column",
    },
    productName: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#333",
    },
    productPrice: {
        fontSize: 14,
        color: "#ff4500",
    },
    productQuantity: {
        fontSize: 14,
        color: "#555",
    },
    backButton: {
        backgroundColor: "#ee4d2d",
        paddingVertical: 15,
        marginTop: 20,
        borderRadius: 10,
        alignItems: "center",
    },
    backButtonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
});

export default ViewOrderScreen;
