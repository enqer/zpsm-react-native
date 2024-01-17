import { PermissionsAndroid, Platform, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { BleManager } from 'react-native-ble-plx';

const Connection = () => {
  const [manager] = useState(() => new BleManager())
  const [devices, setDevices] = useState([])


  const requestBluetoothPermission = async () => {
    if (Platform.OS === 'android' && PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION) {
      const apiLevel = parseInt(Platform.Version.toString(), 10)

      if (apiLevel < 31) {
        const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION)
        return granted === PermissionsAndroid.RESULTS.GRANTED
      }
      if (PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN && PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT) {
        const result = await PermissionsAndroid.requestMultiple([
          PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN,
          PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT,
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
        ])

        return (
          result['android.permission.BLUETOOTH_CONNECT'] === PermissionsAndroid.RESULTS.GRANTED &&
          result['android.permission.BLUETOOTH_SCAN'] === PermissionsAndroid.RESULTS.GRANTED &&
          result['android.permission.ACCESS_FINE_LOCATION'] === PermissionsAndroid.RESULTS.GRANTED
        )
      }
    }

    this.showErrorToast('Permission have not been granted')

    return false
  }
  useEffect(() => {

    // m = requestBluetoothPermission()
  }, []);

  const scanAndConnect = () => {
      manager.startDeviceScan(null, null,(error, device) => {
        if (error) {
          console.log("error: ", error)
          return
        }
        console.log("de" + device)
        device.connect()
          .then((d) => {
            d.discoverAllServicesAndCharacteristics()
              .then(res => {
                console.log("res: "+ JSON.stringify(res))
                setDevices(prevState => [...prevState, JSON.parse(JSON.stringify(res))])
              })
          })
          .catch(error => {
            console.log(error)
          })
        console.log("Json: " + JSON.stringify(device))
        if (device.name === 'MLT-BT05') {
          manager.stopDeviceScan()
        }
      })
  }

  const checkBluetoothState = () => {
      const subscription = manager.onStateChange((state) => {
        if (state === 'PoweredOn'){
          scanAndConnect()
          console.log("tetqwe")
          // subscription.remove()
        }
      }, true)
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity
        style={{backgroundColor: 'orange', paddingTop: 10, paddingBottom: 10, paddingLeft: 20, paddingRight: 20, borderRadius: 10}}
        onPress={checkBluetoothState}
      >
        <Text style={{color: 'black'}}>Szukaj</Text>
      </TouchableOpacity>
      <View style={{  justifyContent: 'center', alignItems: 'center' }}>
        <Text>Urządzenia:</Text>
        {devices.length > 0  && devices.map((d, index) => {
          return(
            <Text style={{color: 'black', fontSize: 24}} key={index}>{d.name}</Text>
          )
        })}
      </View>
    </View>
  );
}

export default Connection
