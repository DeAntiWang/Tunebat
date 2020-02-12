import React from 'react';
import {
    StatusBar,
    StyleSheet,
    TextInput,
    View,
    Button,
    ScrollView,
    Text,
    Dimensions
} from 'react-native';
import Card from "./Card";

interface listEle {
    singer: string,
    song: string,
    key: string,
    camelot: string,
    bpm: number,
    img: string
}

export default class App extends React.Component<{},{list: Array<listEle>}> {
    searchText: string;

    constructor(props) {
        super(props);
        // init var
        this.searchText = "";
        // state
        this.state = {
            list: []
        };
    }

    search(value: string) {
        return [

        ];
    }

    _onSearch(): void {
        // alert('test')
    }

    render() {
        const appHeight = Math.round(Dimensions.get('window').height);

        const styles = StyleSheet.create({
            container: {
                height: "100%",
                width: "100%",
                backgroundColor: "white",
                // backgroundColor: "red",
                flexDirection: "column",
                alignItems: "center",
                padding: 20,
            },
            row: {
                flexDirection: "row",
                alignItems: "center"
            },
            head: {
                marginBottom: 30,
            },
            textInput: {
                width: "55%",
                height: 35,
                borderWidth: 1,
                borderColor: "#3B7B9A",
                marginLeft: 10,
                marginRight: 10
            },
            main: {
                width: "100%",
                height: appHeight-40-35-30,
                flexDirection: "column",
            },
        });

        return (
            <>
                <StatusBar
                    translucent={true}
                    hidden={true}
                    animated={true}
                />
                <View style={styles.container}>
                    <View style={[styles.row, styles.head]}>
                        <TextInput
                            style={styles.textInput}
                            value={this.searchText}
                        />
                        <Button
                            title="Search"
                            color="#70AFCE"
                            onPress={() => this._onSearch()}
                        />
                    </View>
                    <ScrollView
                        contentContainerStyle={styles.main}
                    >
                        {
                            this.state.list.length==0?
                                (<Text>No Resolution</Text>)
                                :
                            this.state.list.map(v => (
                                <Card
                                    singer={v.singer}
                                    song={v.song}
                                    key={v.key}
                                    camelot={v.camelot}
                                    bpm={v.bpm}
                                    img={v.img}
                                />)
                            )
                        }
                    </ScrollView>
                </View>
            </>
        );
    }
}
