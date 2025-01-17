import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    card: {
        backgroundColor: "#fff",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        elevation: 3,
        margin: 5, // Khoảng cách giữa các card
        padding: 10,
        width: "48%", // Mỗi card chiếm 48% chiều rộng màn hình
    },
    productImage: {
        width: "100%",
        height: 150,
        borderRadius: 10,
        marginBottom: 10,
    },
    infoContainer: {
        marginBottom: 10,
    },
    productName: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 5,
    },
    productPrice: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#ff4500",
        marginBottom: 5,
    },
    productMeta: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    productRate: {
        fontSize: 12,
        color: "#888",
    },
    productSold: {
        fontSize: 12,
        color: "#888",
    },
    buyButton: {
        backgroundColor: "#007BFF",
        borderRadius: 5,
        paddingVertical: 8,
        alignItems: "center",
    },
    buyButtonText: {
        color: "#fff",
        fontSize: 14,
        fontWeight: "bold",
    },
});
