import React from "react"
import {
    Text,
    View,
    Image,
    StyleSheet,
    Dimensions
} from "react-native"

export default class Card extends React.Component
    <{
        singer: string,
        song: string,
        ke: string,
        camelot: string,
        bpm: number,
        img: string
    },{}>
{
    constructor(props) {
        super(props);
    }

    render() {
        const appWidth = Math.round(Dimensions.get('window').width);

        const styles = StyleSheet.create({
            container: {
                width: "100%",
                height: 100,
                borderWidth: 1,
                borderRadius: 3,
                borderColor: "#aaaaaa",
                marginBottom: 10,
                overflow: "hidden",
                flexDirection: "row",
                // elevation: 1
            },
            img: {
                width: 98,
                height: 98,
                marginRight: 3,
            },
            viewRight: {
                flexDirection: "column",
                justifyContent: "space-between",
                paddingBottom: 3,
                paddingRight: 3,
            },
            singer: {
                fontSize: 9,
                color: "#666666"
            },
            song: {
                fontSize: 13,
                fontWeight: "bold"
            },
            viewBottom: {
                width: appWidth-60-100-3-3,
                flexDirection: "row",
                justifyContent: "space-between",
            },
            ele: {
                flex: 1,
                flexDirection: "column",
                alignItems: "center"
            },
            val: {
                fontSize: 15,
            },
            desc: {
                fontSize: 13,
                fontWeight: "bold",
            }
        });

        return (
            <View style={styles.container}>
                <Image
                    style={styles.img}
                    source={{uri: this.props.img}}
                />
                <View style={styles.viewRight}>
                    <View>
                        <Text style={styles.singer}>{this.props.singer}</Text>
                        <Text style={styles.song}>{this.props.song}</Text>
                    </View>
                    <View style={styles.viewBottom}>
                        <View style={styles.ele}>
                            <Text style={styles.val}>{this.props.ke}</Text>
                            <Text style={styles.desc}>Key</Text>
                        </View>
                        <View style={styles.ele}>
                            <Text style={styles.val}>{this.props.camelot}</Text>
                            <Text style={styles.desc}>Camelot</Text>
                        </View>
                        <View style={styles.ele}>
                            <Text style={styles.val}>{this.props.bpm}</Text>
                            <Text style={styles.desc}>BPM</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}