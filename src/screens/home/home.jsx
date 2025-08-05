import { Image, ImageBackground, Text, View } from "react-native";
import icons from "../../constants/icons";
import { styles } from "./home-styles";

function Home() {
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
        <View
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: -35,
            width: "100vw",
          }}
        >
          <Image
            style={{ width: 160, marginBottom: -50 }}
            source={icons.passenger}
            resizeMode="contain"
          />
          <Text style={{ color: "white", fontFamily: "Roboto", fontSize: 20 }}>
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
      </ImageBackground>
    </>
  );
}

export default Home;
