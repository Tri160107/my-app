import {
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

// Text: Hiển thị text
// TextInput: Nhập text
// Image: Hiển thị ảnh
// TouchableOpacity: Button
// View: Khung chứa các component khác

// đơn vị cơ bản của style trong react native
// px: pixel
// %: phần trăm
// style box model: margin, padding, border
// height: chiều cao của component
// width: chiều rộng của component
// border: tạo đường viền cho component
// margin: tạo khoảng cách giữa các component
// padding: tạo khoảng cách bên trong component
// backgroundColor: tạo màu nền cho component
// borderRadius: tạo góc bo tròn cho component

// style typography
// color (màu chữ),
// fontSize (cỡ chữ),
// fontWeight (độ đậm của chữ),
// textAlign (canh lề),
// textDecorationLine (gạch chân),
// fontStyle (in nghiêng),
// fontFamily (font chữ)

// cách viết style
// 1. inline style: viết trực tiếp trong component
// 2. object style: tạo object chứa style và truyền vào component thông qua prop style

// Cấu trúc 1 thẻ component <View> component </View>  <TextInput/>
export default function Index() {
  return (
    <ScrollView style={{}}>
      <Text style={styles.text}>Hello World 
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Text>
      <TextInput placeholder="Enter your name" />
      <Image
        style={{ width: "100%", height: 80 }}
        source={{
          uri: "https://reactnative.dev/img/tiny_logo.png",
        }}
      />
      <TouchableOpacity>
        <Text>Press me me</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          style={{ width: 50, height: 50 }}
          source={{
            uri: "https://reactnative.dev/img/tiny_logo.png",
          }}
        />
      </TouchableOpacity>
      <View
        style={{
          height: 400,
          // width: 100,
          borderWidth: 10,
          borderColor: "black",
          borderStyle: "solid",
          borderRadius: 50,
          margin: 50,
          marginTop: 100,
          marginLeft: 50,
          marginRight: 50,
          marginBottom: 50,
          marginHorizontal: 50,
          marginVertical: 150,
          padding: 50,
          paddingTop: 100,
          paddingLeft: 50,
          paddingRight: 50,
          paddingBottom: 50,
          paddingHorizontal: 50,
          paddingVertical: 150,
          backgroundColor: "red",
        }}
      >
        <Text>Component 1</Text>
      </View>
      <View style={styles.boxStyle}>
        <Text>Component 2</Text>
      </View>
      <View style={styles.boxStyle2}>
        <Text>Component 3</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  // key: tên style
  // value: object chứa các thuộc tính style
  // key: {value}
  boxStyle: {
    height: 100,
    width: 100,
    borderWidth: 10,
    borderColor: "black",
    borderStyle: "solid",
  },
  boxStyle2: {
    height: 100,
    width: 100,
    borderWidth: 10,
    borderColor: "black",
    borderStyle: "solid",
  },
  text:{
    color: "red",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "justify",
    textDecorationLine: "underline",
    fontStyle: "italic",
    fontFamily: "Times New Roman",
  }
});
