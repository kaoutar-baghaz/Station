// import React, { useState } from "react";
// import { View, TextInput, Button, Alert, StyleSheet } from "react-native";

// const ReservationScreen = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [maintenanceType, setMaintenanceType] = useState("");
//   const [maintenanceDate, setMaintenanceDate] = useState("");

//   const handleReservation = () => {
//     if (
//       name === "" ||
//       email === "" ||
//       phone === "" ||
//       maintenanceType === "" ||
//       maintenanceDate === ""
//     ) {
//       Alert.alert("Erreur", "Veuillez remplir tous les champs.");
//     } else {
//       // Effectuer la réservation
//       const reservationDetails = {
//         name: name,
//         email: email,
//         phone: phone,
//         service: maintenanceType,
//         station: "Eydon Petroleum",
//         date: maintenanceDate,
//       };

//       // Envoyer les détails de la réservation au serveur ou effectuer toute autre action nécessaire
//       // ...

//       Alert.alert(
//         "Réservation effectuée",
//         `Votre réservation pour la maintenance de ${maintenanceType} à Eydon Petroleum le ${maintenanceDate} a été enregistrée avec succès.`
//       );

//       // Réinitialiser les champs
//       setName("");
//       setEmail("");
//       setPhone("");
//       setMaintenanceType("");
//       setMaintenanceDate("");
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.input}
//         placeholder="Nom"
//         value={name}
//         onChangeText={(text) => setName(text)}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         value={email}
//         onChangeText={(text) => setEmail(text)}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Téléphone"
//         value={phone}
//         onChangeText={(text) => setPhone(text)}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Type de maintenance"
//         value={maintenanceType}
//         onChangeText={(text) => setMaintenanceType(text)}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Date de maintenance"
//         value={maintenanceDate}
//         onChangeText={(text) => setMaintenanceDate(text)}
//       />
//       <Button title="Réserver" onPress={handleReservation} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     justifyContent: "center",
//   },
//   input: {
//     marginBottom: 12,
//     padding: 8,
//     borderColor: "#ccc",
//     borderWidth: 1,
//     borderRadius: 4,
//   },
// });

// export default ReservationScreen;

// import React, { useState } from "react";
// import { View, TextInput, Button, Alert, StyleSheet } from "react-native";
// import { Picker } from "@react-native-picker/picker";
// import DateTimePicker from "@react-native-community/datetimepicker";

// const ReservationScreen = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [maintenanceType, setMaintenanceType] = useState(""); // Valeur initiale vide
//   const [maintenanceDate, setMaintenanceDate] = useState(new Date()); // Valeur initiale avec la date actuelle
//   const [showDatePicker, setShowDatePicker] = useState(false);

//   const handleReservation = () => {
//     if (
//       name === "" ||
//       email === "" ||
//       phone === "" ||
//       maintenanceType === "" ||
//       maintenanceDate === ""
//     ) {
//       Alert.alert("Error", "Please fill in all the fields.");
//     } else {
//       // Effectuer la réservation
//       const reservationDetails = {
//         name: name,
//         email: email,
//         phone: phone,
//         service: maintenanceType,
//         station: "Eydon Petroleum",
//         date: maintenanceDate.toDateString(), // Convertir la date en format lisible
//       };

//       // Envoyer les détails de la réservation au serveur ou effectuer toute autre action nécessaire
//       // ...

//       Alert.alert(
//         "Reservation Confirmed",
//         `Your reservation for ${maintenanceType} maintenance at Eydon Petroleum on ${maintenanceDate.toDateString()} has been successfully recorded.`
//       );

//       // Réinitialiser les champs
//       setName("");
//       setEmail("");
//       setPhone("");
//       setMaintenanceType("");
//       setMaintenanceDate(new Date());
//     }
//   };

//   const showDatePickerModal = () => {
//     setShowDatePicker(true);
//   };

//   const handleDateChange = (event, selectedDate) => {
//     setShowDatePicker(false);
//     if (selectedDate) {
//       setMaintenanceDate(selectedDate);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.input}
//         placeholder="Name"
//         value={name}
//         onChangeText={(text) => setName(text)}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         value={email}
//         onChangeText={(text) => setEmail(text)}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Phone"
//         value={phone}
//         onChangeText={(text) => setPhone(text)}
//       />
//       <View style={styles.pickerContainer}>
//         <Picker
//           style={styles.picker}
//           selectedValue={maintenanceType}
//           onValueChange={(itemValue) => setMaintenanceType(itemValue)}
//         >
//           <Picker.Item label="Select maintenance type" value="" />
//           <Picker.Item label="Oil Change" value="Oil Change" />
//           <Picker.Item label="Tire Rotation" value="Tire Rotation" />
//           <Picker.Item label="Brake Inspection" value="Brake Inspection" />
//           {/* Ajoutez d'autres types de maintenance au besoin */}
//         </Picker>
//       </View>
//       <View style={styles.dateContainer}>
//         <Button title="Select maintenance date" onPress={showDatePickerModal} />
//         {showDatePicker && (
//           <DateTimePicker
//             value={maintenanceDate}
//             mode="date"
//             display="default"
//             onChange={handleDateChange}
//           />
//         )}
//       </View>
//       <Button title="Book Now" onPress={handleReservation} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     justifyContent: "center",
//   },
//   input: {
//     marginBottom: 12,
//     padding: 8,
//     borderColor: "#ccc",
//     borderWidth: 1,
//     borderRadius: 4,
//   },
//   pickerContainer: {
//     marginBottom: 12,
//     borderColor: "#ccc",
//     borderWidth: 1,
//     borderRadius: 4,
//     backgroundColor: "#fff",
//     overflow: "hidden",
//   },
//   picker: {
//     height: 40,
//     color: "#000",
//   },
//   dateContainer: {
//     marginBottom: 12,
//   },
// });

// export default ReservationScreen;

import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
} from "react-native";
import Buttons from "../components/Buttons";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import { COLORS, FONTS } from "../constants/index";

const ReservationScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [model, setModel] = useState("");
  const [vehicleNumber, setvehicleNumber] = useState("");
  const [maintenanceType, setMaintenanceType] = useState("");
  const [carType, setCarType] = useState("");
  const [maintenanceDate, setMaintenanceDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleReservation = () => {
    if (
      name === "" ||
      email === "" ||
      phone === "" ||
      model === "" ||
      vehicleNumber === "" ||
      maintenanceType === "" ||
      carType === "" ||
      maintenanceDate === ""
    ) {
      Alert.alert("Error", "Please fill in all the fields.");
    } else {
      // Perform reservation
      const reservationDetails = {
        name: name,
        email: email,
        phone: phone,
        model: model,
        vehicleNumber: vehicleNumber,
        car: carType,
        service: maintenanceType,
        station: "Eydon Petroleum",
        date: maintenanceDate.toDateString(),
      };

      // Send reservation details to server or perform any other necessary action
      // ...

      Alert.alert(
        "Reservation Confirmed",
        `Your reservation for ${carType} to ${maintenanceType} maintenance at Eydon Petroleum on ${maintenanceDate.toDateString()} has been successfully recorded.`
      );

      // Reset fields
      setName("");
      setEmail("");
      setPhone("");
      setModel("");
      setvehicleNumber("");
      setCarType("");
      setMaintenanceType("");
      setMaintenanceDate(new Date());
    }
  };

  const showDatePickerModal = () => {
    setShowDatePicker(true);
  };

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setMaintenanceDate(selectedDate);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Car Service Booking</Text>
      <View style={styles.container1}>
        <Text style={styles.costumer}>Customer Information</Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Phone"
          value={phone}
          onChangeText={(text) => setPhone(text)}
        />
      </View>
      <View style={styles.container1}>
        <Text style={styles.costumer}>Car Information</Text>
        <TextInput
          style={styles.input}
          placeholder="Model"
          value={model}
          onChangeText={(text) => setModel(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Vehicle Number"
          value={vehicleNumber}
          onChangeText={(text) => setvehicleNumber(text)}
        />
        <View style={styles.pickerContainer}>
          <Picker
            style={styles.picker}
            selectedValue={carType}
            onValueChange={(itemValue) => setCarType(itemValue)}
          >
            <Picker.Item label="Select Vehicle Type" value="" />
            <Picker.Item label="Sedan" value="Sedan" />
            <Picker.Item label="Sports Car" value="Sports Car" />
            <Picker.Item label="Hatchback" value="Hatchback" />
            <Picker.Item
              label="Sport Utility Vehicle (SUV)"
              value="Sport Utility Vehicle (SUV)"
            />
            <Picker.Item label="Pickup Truck" value="Pickup Truck" />
            <Picker.Item label="Coupe" value="Coupe" />
            <Picker.Item label="Wagon" value="Wagon" />
            <Picker.Item label="Convertible" value="Convertible" />
            <Picker.Item label="Minivan" value="Minivan" />
            <Picker.Item label="Hybrid/Electric" value="Hybrid/Electric" />
          </Picker>
        </View>
        <View style={styles.pickerContainer}>
          <Picker
            style={styles.picker}
            selectedValue={maintenanceType}
            onValueChange={(itemValue) => setMaintenanceType(itemValue)}
          >
            <Picker.Item label="Select maintenance type" value="" />
            <Picker.Item
              label="Inspect timing belt or timing chain"
              value="Inspect timing belt or timing chain"
            />
            <Picker.Item label="Tire Rotation" value="Tire Rotation" />
            <Picker.Item
              label="Oil fiter replacement"
              value="Oil fiter replacement"
            />
            <Picker.Item label="Brake Inspection" value="Brake Inspection" />
            <Picker.Item
              label="Verify A/M Transmission Fluid"
              value="Verify A/M Transmission Fluid"
            />
            <Picker.Item
              label="Air filter replacement"
              value="Air filter replacement"
            />
            <Picker.Item
              label="Verify Coolant Hoses"
              value="Verify Coolant Hoses"
            />
            <Picker.Item
              label="Grease and lubricate components"
              value="Grease and lubricate components"
            />
            <Picker.Item
              label="Refill A/M Transmission Fluid"
              value="Refill A/M Transmission Fluid"
            />
            <Picker.Item
              label="Verify the charging systems"
              value="Verify the charging systems"
            />
            <Picker.Item
              label="Replace the spark plugs"
              value="Replace the spark plugs"
            />
            <Picker.Item
              label="Fuel filter replacement"
              value="Fuel filter replacement"
            />
            <Picker.Item
              label="Refill brake fluid"
              value="Refill brake fluid"
            />
            <Picker.Item
              label="Check clutch fluid"
              value="Check clutch fluid"
            />
            <Picker.Item
              label="Check lights, wipers, and others"
              value="Check lights, wipers, and others"
            />
          </Picker>
        </View>
        <View style={styles.dateContainer}>
          <TouchableOpacity onPress={showDatePickerModal}>
            <Text style={styles.buttonText}>Select maintenance date</Text>
          </TouchableOpacity>
          {showDatePicker && (
            <DateTimePicker
              value={maintenanceDate}
              mode="date"
              display="default"
              onChange={handleDateChange}
            />
          )}
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: COLORS.tertiary,
            height: 50,
            marginTop: 10,
            borderRadius: 6,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={handleReservation}
        >
          <Text
            style={{
              ...FONTS.body3,
              color: COLORS.white,
            }}
          >
            Book Now
          </Text>
        </TouchableOpacity>
      </View>
   
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    backgroundColor: "#f2f2f2",
    marginBottom: 25,
  },
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
  costumer: {
    fontSize: 20,
    marginBottom: 16,
    justifyContent: "center",
    alignItems: "center",
    color: COLORS.tertiary,
  },
  input: {
    marginBottom: 12,
    padding: 12,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: "#fff",
    fontSize: 16,
  },
  pickerContainer: {
    marginBottom: 12,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: "#fff",
    overflow: "hidden",
  },
  picker: {
    height: 40,
    marginBottom: 12,
    color: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
  dateContainer: {
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  button: {
    justifyContent: "center",
    width: "70%",
    backgroundColor: COLORS.tertiary,
    height: 50,
    marginBottom: 30,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 15,
    letterSpacing: 1.5,
    textAlign: "center",
    position: "relative",
    color: "#FF6347",
    marginTop: 15,
    textAlignVertical: "center",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ReservationScreen;
