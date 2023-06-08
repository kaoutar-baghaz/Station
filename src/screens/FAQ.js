import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { COLORS } from "../constants";
import Animated from "react-native-reanimated";
import { useTheme } from "@react-navigation/native";

const FAQ = () => {
  const theme = useTheme();
  const faqData = [
    {
      question: "How can I locate the nearest Eydon Petroleum gas station?",
      answer:
        "You can use the application's location feature to find the nearest Eydon Petroleum gas station based on your current location.",
    },
    {
      question:
        "What payment methods are accepted at Eydon Petroleum gas stations?",
      answer:
        "Eydon Petroleum gas stations accept cash, credit card, and mobile payment methods.",
    },
    {
      question: "Do Eydon Petroleum gas stations offer discounts on fuel?",
      answer:
        "Yes, Eydon Petroleum gas stations regularly offer special deals and discounts on fuel. You can check our application or website for ongoing promotions.",
    },
    {
      question: "Can I get a loyalty card from Eydon Petroleum?",
      answer:
        "Yes, Eydon Petroleum offers a loyalty card that allows you to earn points with every fuel purchase. You can redeem your points for exclusive rewards.",
    },
    {
      question: "What is the quality of the fuel provided by Eydon Petroleum?",
      answer:
        "Eydon Petroleum is committed to providing high-quality fuel that meets international standards for quality and performance. Our fuel undergoes regular testing to ensure an optimal driving experience.",
    },
    {
      question:
        "How do I download and install the Eydon Petroleum app on my smartphone?",
      answer:
        "You can download the Eydon Petroleum app from the App Store (for iOS devices) or Google Play Store (for Android devices). Simply search for 'Eydon Petroleum' and follow the prompts to install it on your device.",
    },
    {
      question:
        "Can I use the Eydon Petroleum app to find nearby gas stations?",
      answer:
        "Yes, the Eydon Petroleum app includes a feature that allows you to locate nearby gas stations. It uses your device's GPS to provide you with a list of nearby stations along with their fuel prices and other relevant information.",
    },
    {
      question: "How can I pay for fuel using the Eydon Petroleum app?",
      answer:
        "The Eydon Petroleum app offers various payment options, including credit/debit card payments and digital wallets. You can securely link your preferred payment method to the app and use it to pay for fuel directly at the pump or in-store.",
    },
    {
      question:
        "Can I track my fuel expenses and usage with the Eydon Petroleum app?",
      answer:
        "Yes, the Eydon Petroleum app provides a detailed transaction history that allows you to track your fuel expenses and usage over time. You can view your past transactions, monitor your fuel consumption, and generate reports for better expense management.",
    },
    {
      question:
        "Does the Eydon Petroleum app offer any loyalty or rewards program?",
      answer:
        "Yes, Eydon Petroleum has a loyalty program integrated into the app. By using the app for your fuel purchases, you can accumulate points or rewards that can be redeemed for discounts, special offers, or exclusive promotions.",
    },
    {
      question: "Can I pre-order fuel through the Eydon Petroleum app?",
      answer:
        "Currently, the Eydon Petroleum app does not offer a pre-ordering feature for fuel. However, you can use the app to check fuel prices, locate nearby stations, and plan your refueling stops in advance.",
    },
    {
      question:
        "Is my personal information safe and secure when using the Eydon Petroleum app?",
      answer:
        "Yes, Eydon Petroleum takes user privacy and data security seriously. The app employs industry-standard encryption protocols and safeguards to protect your personal and payment information.",
    },
    {
      question:
        "Can I provide feedback or report any issues through the Eydon Petroleum app?",
      answer:
        "Absolutely! The Eydon Petroleum app includes a built-in feedback mechanism where you can submit your comments, suggestions, or report any issues you encounter. The app developers value user feedback and strive to continuously improve the app based on user input.",
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);
  const rowHeightAnimatedValue = new Animated.Value(60);

  const toggleAnswer = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  const renderFAQItem = (item, index) => {
    const isExpanded = expandedIndex === index;

    return (
      <View key={index} style={styles.faqItem}>
        <TouchableOpacity
          style={styles.questionContainer}
          onPress={() => toggleAnswer(index)}
        >
          <Text style={styles.question}>{item.question}</Text>
          <AntDesign
            name={isExpanded ? "caretup" : "caretdown"}
            size={24}
            color={COLORS.secondary}
          />
        </TouchableOpacity>
        {isExpanded && <Text style={styles.answer}>{item.answer}</Text>}
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle={theme.dark ? "light-content" : "dark-content"} />
      <Text style={styles.title}>Frequently Asked Questions</Text>
      <View style={styles.faqList}>
        {faqData.map((item, index) => renderFAQItem(item, index))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#F9F9F9",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    borderBottomWidth: 5,
    borderColor: COLORS.secondary,
    justifyContent: "center",
    alignItems: "center",
    color: COLORS.secondary,
  },
  faqList: {
    marginTop: 16,
  },
  faqItem: {
    marginBottom: 16,
    backgroundColor: COLORS.blackOpacity10,
    borderRadius: 8,
    padding: 16,
  },
  questionContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  question: {
    flex: 1,
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.tertiary,
  },
  answer: {
    fontSize: 16,
    color: "#555",
  },
  rowBack: {
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default FAQ;
