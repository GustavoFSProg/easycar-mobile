import {
  Alert,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import icons from "../../constants/icons";
import { styles } from "./home-styles";

function Home() {
  function OpenPassenger() {
    Alert.alert("Clicou Passageiro");
  }

  function OpenDriver() {
    Alert.alert("Clicou Motorista");
  }

  return (
    <>
      <ImageBackground source={icons.bg} style={styles.bg} resizeMode="cover">
        <Image
          style={{
            width: 180,
            marginTop: -50,
            alignItems: "center",
            justifyContent: "center",
          }}
          source={icons.logo}
          resizeMode="none"
        />
        <TouchableOpacity onPress={() => OpenPassenger()}>
          <View
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: -40,
              width: "100vw",
            }}
          >
            <Image
              style={{ width: 160, marginBottom: -50 }}
              source={icons.passenger}
              resizeMode="contain"
            />
            <Text
              style={{ color: "white", fontFamily: "Roboto", fontSize: 20 }}
            >
              Passageiro
            </Text>
            <Text
              style={{
                color: "white",
                fontFamily: "Roboto",
                fontSize: 15,
                opacity: 0.7,
              }}
            >
              Encontre uma carona pra você
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => OpenDriver()}>
          <View
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100vw",
              marginTop: -5,
            }}
          >
            <Image
              style={{ width: 160 }}
              source={icons.driver}
              resizeMode="contain"
            />
            <Text
              style={{
                color: "white",
                fontFamily: "Roboto",
                marginTop: -50,
                fontSize: 20,
              }}
            >
              Motorista
            </Text>
            <Text
              style={{
                color: "white",
                fontFamily: "Roboto",
                fontSize: 15,
                opacity: 0.7,
              }}
            >
              Ofereça carona em seu Carro
            </Text>
          </View>
        </TouchableOpacity>
      </ImageBackground>
    </>
  );
}

export default Home;
