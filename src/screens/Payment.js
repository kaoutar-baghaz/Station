import React, { useRef } from "react";
import { Paystack, paystackProps } from "react-native-paystack-webview";
import { View, TouchableOpacity, Text, StyleSheet, Image } from "react-native";

export default function Payment() {
  const paystackWebViewRef = useRef(paystackProps.PayStackRef);

  return (
    <View style={styles.Vcontainer}>
      <View style={styles.container}>
        <Image
          source={require("../assets/images/pay.png")}
          style={styles.image}
        />
      </View>
      <View style={{ marginHorizontal: 15 }}>
        <Paystack
          paystackKey="pk_test_4f6ffc3f55e513cdeb56e13dd9680afd61cb3702"
          paystackSecretKey="sk_test_55df4d0e2ef238bf1c941f52e317c5fbd46eea7a"
          billingEmail="samuelagbenyo067@gmail.com"
          amount={1}
          billingName="Samuel Agbenyo"
          billingMobile="0594602088"
          currency="GHS"
          onCancel={(e) => {
            console.log(e);
          }}
          onSuccess={(res) => {
            console.log(e);
          }}
          ref={paystackWebViewRef}
        />

        <TouchableOpacity
          onPress={() => paystackWebViewRef.current.startTransaction()}
          style={styles.paystack}
        >
          <Text style={styles.pay}>Pay Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Vcontainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  paystack: {
    minWidth: "60%",
    backgroundColor: "#F9A826",
    padding: 10,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  pay: {
    color: "white",
  },
  image: {
    height: "100%",
    width: 450,
  },
  container: {
    flex: 0.5,
    marginHorizontal: 15,
    marginTop: 10,
  },
});
