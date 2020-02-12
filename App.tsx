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
    ke: string,
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

    componentDidMount(): void {
        // Test
        let tmp: Array<listEle> = [
            {
                singer: "ONE OK ROCK",
                song: "完全感覚Dreamer",
                ke: "F# Minor",
                camelot: "11A",
                bpm: 190,
                img: "https://i.scdn.co/image/ca7bd85fd772ef5298934bed7a1bdf8ef74c94fb"
            }
        ];
        this.setState({
            list: tmp
        })
    }

    search(value: string) : Array<listEle> {
        let list : Array<listEle> = [];
        // work
        return list;
    }

    _onSearch(): void {
        // alert('test')
        let content : string = "";
        this.setState({
            list: this.search(content)
        });
    }

    render() {
        const appHeight = Math.round(Dimensions.get('window').height);
        const appWidth = Math.round(Dimensions.get('window').width);

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
                width: appWidth - 139,
                height: 35,
                borderWidth: 1,
                borderRadius: 3,
                borderColor: "#3B7B9A",
                marginLeft: 10,
                marginRight: 10
            },
            main: {
                width: appWidth-60,
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
                                    ke={v.ke}
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
