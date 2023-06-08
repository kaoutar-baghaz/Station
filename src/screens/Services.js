import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStackNavigator } from "@react-navigation/stack";
import { COLORS, images } from "../constants";

function Shop() {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Image
          source={images.img4}
          resizeMode="cover"
          style={styles.sliderContainer}
        />
      </View>
      <View>
        <Text style={styles.content}>
          Our shops are permanently open and our relaxation areas have been
          designed to allow motorist customers not to feel the time spent in our
          stations. Travelers in a hurry can find all the products necessary for
          the comfort of the road. The FunX team is at your service and will
          endeavor to satisfy your every need. Moreover, and taking into account
          our African cultural realities, the offer plans to satisfy the varied
          needs of our resident neighbors with the advantage of hospitality and
          a certain quality obtained thanks to the good storage conditions of
          our products ( hygiene, ambient air, cold chain, etc.).
        </Text>
      </View>
    </ScrollView>
  );
}
export { Shop };

function Fuel() {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Image
          source={images.img3}
          resizeMode="cover"
          style={styles.sliderContainer}
        />
      </View>
      <View>
        <Text style={styles.content}>
          Technological innovation is the watchword of fuel distribution at
          Eydon Petroleum. We give shape to our passion to satisfy our customers
          by providing them with an irreproachable product and in sufficient
          quantity. Our modern facilities, unique in West Africa, allow us to
          remotely manage the needs of each customer, plan supplies, guarantee
          the quantity supplied and detect any leaks or quality alterations. All
          Eydon Petroleum stations dispense a range of fuels ranging from petrol
          to diesel. Distinguished sales channels based on customer profile have
          also been put in place to satisfy a diverse customer base.
        </Text>
      </View>
    </ScrollView>
  );
}
export { Fuel };

function Lubricants() {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Image
          source={images.img6}
          resizeMode="cover"
          style={styles.sliderContainer}
        />
      </View>
      <View>
        <Text style={styles.content}>
          Introducing the Havoline® range from Chevron Texaco For more than 100
          years, customers around the world have tested and trusted Havoline
          engine oils for performance and protection in their engines, from
          Formula 1 (Formula 1®) and NASCAR® to the races at Le Mans, to the
          rigors of daily driving. Deposits in the engine create friction,
          reduce engine performance and increase fuel consumption. Havoline's
          Deposit Shield technology helps protect engine components against the
          constant attack of harmful deposits and wear, even under extreme
          driving conditions. Engine technology is evolving to produce engines
          that are smaller, more powerful, produce less emissions and consume
          less fuel. The engine oils that protect them must also evolve as well.
          New Havoline ProDS™ engine oils have been specifically developed with
          the latest Deposit Shield technology from Texaco®, which proactively
          protects your engine so it performs at peak performance, whatever the
          driving conditions.
        </Text>
      </View>
    </ScrollView>
  );
}
export { Lubricants };

function Badge() {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Image
          source={images.img10}
          resizeMode="cover"
          style={styles.sliderContainer}
        />
      </View>
      <View>
        <Text style={styles.content}>
          With the Eydon badge, you are in possession of an accurate and
          up-to-date invoice detailing your fuel expenses. Save time and free
          your staff from superfluous administrative tasks. Whether you own a
          fleet of vehicles or are a private individual, the Eydon badge allows
          you to reduce costs, bureaucratic hassles and monitor fraud. The
          advantages of the Eydon badge: I want an Eydon badge
        </Text>
      </View>
    </ScrollView>
  );
}
export { Badge };

function Dineouts() {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Image
          source={images.img2}
          resizeMode="cover"
          style={styles.sliderContainer}
        />
      </View>
      <View>
        <Text style={styles.content}>
          The maintenance centers are managed in partnership with Speedy France,
          one of the European leaders in car maintenance and repair. Composed of
          automotive maintenance professionals, the team is at your disposal
          both to advise you and to carry out a wide range of operations
          relating to the maintenance of your vehicle. Thanks to their
          expertise, Speedy Services Senegal technicians can take care of the
          technical overhaul of your vehicle and the replacement of any part at
          a competitive price-quality ratio and in a short time. Combining human
          and technical expertise to satisfy customers, which translates into
          firm commitments, makes it possible to guarantee any service. The
          engagements : Intervention on all car brands. Reception without
          appointment. Change only if necessary. Free, firm and final estimate.
          Guaranteed interventions in all Speedy Services Senegal centers.
        </Text>
      </View>
    </ScrollView>
  );
}
export { Dineouts };

function History() {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Image
          source={images.img1}
          resizeMode="cover"
          style={styles.sliderContainer}
        />
      </View>
      <View>
        <Text style={styles.content}>
          The principles that dictate our approach to business conduct are based
          on values ​​that are: Ethics: innovative, social Fairness: solidarity,
          willingness to work for customer satisfaction Professionalism: highly
          qualified staff, expert staff in automotive service and maintenance.
          Loyalty: product information, service provided, etc. These values
          ​​are imprinted in our actions, permeate our relations vis-à-vis our
          customers, our suppliers, the State and any other third party.
        </Text>
      </View>
    </ScrollView>
  );
}
export { History };

const Stack = createStackNavigator();

const Services = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Lubricants" component={Lubricants} />
      <Stack.Screen name="Shop" component={Shop} />
      <Stack.Screen name="Fuel" component={Fuel} />
      <Stack.Screen name="Badge" component={Badge} />
      <Stack.Screen name="Dineouts" component={Dineouts} />
      <Stack.Screen name="History" component={History} />
    </Stack.Navigator>
  );
};

export default Services;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sliderContainer: {
    height: 200,
    width: "90%",
    marginTop: 10,
    marginBottom: 10,
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 8,
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "transparent",
    height: 150,
    width: "70%",
    marginTop: 10,
    alignSelf: "center",
    borderRadius: 8,
  },
  sliderImage: {
    height: "100%",
    width: "100%",
    alignSelf: "center",
    borderRadius: 8,
  },
  content: {
    marginBottom: 20,
    marginRight: 10,
    marginLeft: 10,
    borderColor: COLORS.primary,
    borderWidth: 2,
    borderRadius: 8,
    padding: 10,
    fontSize: 20,
    fontStyle: "italic",
    fontWeight: "600",
    justifyContent: "center",
  },
});
