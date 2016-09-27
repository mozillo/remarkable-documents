import React from 'react';
import {
	View,
	Text,
	Alert,
	Clipboard,
	TouchableOpacity,
	StyleSheet,
} from 'react-native';

export function inspect (obj, objectName) {
	const methods = Object.getOwnPropertyNames(obj);
	return (
		<View style={styles.container}>
			<View style={styles.titleWrap}>
				<Text style={styles.title}>Debug Info: ObjectName: {objectName}</Text>
			</View>
			
			<View style={[styles.row, styles.block]}>
				<Text style={styles.keys}>key</Text>
				<Text style={styles.values}>value</Text>
			</View>
			{ Object.keys(obj).map(key => renderData(obj[key], key, 1)) }
			
			<View style={styles.titleWrap}>
				<Text style={styles.title}>Debug Info: MethodOf: {objectName}</Text>
			</View>
			<View style={[styles.row, styles.block]}>
				<Text style={styles.keys}>key</Text>
				<Text style={styles.values}>method</Text>
			</View>
			{ Object.keys(methods).map(key => renderData(methods[key], key, 1)) }

		</View>
	);
}

function renderData (obj, key, deep) {
	if(obj === null) {
		return (
			<View key={key} style={[styles.row, styles.block]}>
				<Text style={styles.keys}>-{ key }</Text> 
				<Text style={styles.values}> null </Text>
			</View>
		);
	}
	if(typeof obj === 'object') {
		return (
			<View key={key} style={styles.block}>
				<TouchableOpacity onPress={()=>{Clipboard.setString(key); Alert.alert(`Copy key: ${key}`);}} style={styles.row}>
					<Text style={styles.content}>-{key}</Text>
				</TouchableOpacity>
				<View style={{ paddingLeft: deep * 10}}>
					{ Object.keys(obj).map(okey => renderData(obj[okey], okey, deep+1)) }
				</View>
			</View>
		);
	} else {
		return (
			<View key={key} style={[styles.row, styles.block]}>
				<TouchableOpacity onPress={()=>{Clipboard.setString(key); Alert.alert(`Copy key: ${key}`);}} style={styles.keys}>
					<Text>-{ key }</Text> 
				</TouchableOpacity>
				<TouchableOpacity onPress={()=>{Clipboard.setString(obj); Alert.alert(`Copy value: ${obj}`);}} style={styles.values}>
					<Text>{ obj } </Text>
				</TouchableOpacity>
			</View>
		);
	}
}


const styles = StyleSheet.create({
	container : {
		margin: 10,
		borderWidth: 1,
		borderColor: 'green',
	},
	row : {
		flexDirection: 'row',
		paddingHorizontal: 10,
		borderBottomWidth: 1,
		borderBottomColor: '#CCCCCC',
		paddingVertical: 5,
	},
	block : {
	},
	keys : {
		flex: 2,
	},
	values : {
		flex: 3,
	},
	titleWrap : {
		padding: 10,
		backgroundColor: 'green',
	},
	title : {
		color: '#FFFFFF',
		fontSize: 12,
	}
});
