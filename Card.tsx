import React from "react"
import {
    Text,
    View,
    Image,
    StyleSheet
} from "react-native"

export default class Card extends React.Component
    <{
        singer: string,
        song: string,
        key: string,
        camelot: string,
        bpm: number,
        img: string
    },{}>
{
    constructor(props) {
        super(props);
    }

    render() {
        const styles = StyleSheet.create({

        });

        return (
            <View>
                <Image
                    source={{uri: this.props.img}}
                />
                <View>
                    <Text>{this.props.singer}</Text>
                    <Text>{this.props.song}</Text>
                    <View>
                        <View>
                            <Text>{this.props.key}</Text>
                            <Text>Key</Text>
                        </View>
                        <View>
                            <Text>{this.props.camelot}</Text>
                            <Text>Camelot</Text>
                        </View>
                        <View>
                            <Text>{this.props.bpm}</Text>
                            <Text>BPM</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}