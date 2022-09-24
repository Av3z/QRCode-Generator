import React, { useState } from 'react'
import { Text, TextInput, TouchableOpacity, View, Keyboard } from "react-native";
import tw from 'twrnc';
import QRCode from 'react-native-qrcode-svg';

export default function HomeScreen() {

    const [textInput, setTextInput] = useState("");
    const [qrCode, setQrCode] = useState('');

    return (
        <View style={tw`flex justify-center items-center w-full h-full`}>
            <View style={tw`flex flex-row`}>
                <Text style={tw`text-2xl text-slate-500 font-bold`}>QRCode</Text>
                <Text style={tw`text-2xl text-blue-400 font-bold italic`}> Generate</Text>
            </View>

            <TextInput style={tw`bg-white rounded-sm w-70 h-40 mt-10`}
                editable={true}
                returnKeyType='done'
                onSubmitEditing={Keyboard.dismiss}
                multiline={true}
                autoFocus={true}
                onChangeText={(t) => setTextInput(t)}
                value={textInput} />

            <TouchableOpacity style={tw`rounded-md shadow-md bg-blue-400 p-2 mt-10 w-30`}
                onPress={() => setQrCode(textInput)}
            >
                <Text style={tw`text-center text-white text-xl`}>Gerar</Text>
            </TouchableOpacity>

            <QRCode
                value={qrCode ? qrCode : 'NA'}
                size={100}
                logoSize={25}
                backgroundColor='white'
                color='black'
            />
        </View>
    )
}