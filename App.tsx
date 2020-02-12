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
import cheerio from 'cheerio'

interface listEle {
    singer: string,
    song: string,
    ke: string,
    camelot: string,
    bpm: number,
    img: string
}

export default class App extends React.Component<{},{list: Array<listEle>, searchText: string}> {
    constructor(props) {
        super(props);
        // state
        this.state = {
            list: [],
            searchText: "",
        };
    }

    componentDidMount(): void {
        // Test
        // let tmp: Array<listEle> = [
        //     {
        //         singer: "ONE OK ROCK",
        //         song: "完全感覚Dreamer",
        //         ke: "F# Minor",
        //         camelot: "11A",
        //         bpm: 190,
        //         img: "https://i.scdn.co/image/ca7bd85fd772ef5298934bed7a1bdf8ef74c94fb"
        //     },
        //     {
        //         singer: "ONE OK ROCK",
        //         song: "完全感覚Dreamer",
        //         ke: "F# Minor",
        //         camelot: "11A",
        //         bpm: 190,
        //         img: "https://i.scdn.co/image/ca7bd85fd772ef5298934bed7a1bdf8ef74c94fb"
        //     }
        // ];
        // this.setState({
        //     list: tmp
        // })
    }

    async search(value: string) : Promise<Array<listEle>> {
        let list : Array<listEle> = [];
        // contact string
        let re = /\W/gi;
        let url = "https://tunebat.com/Search?q="+value.trim().replace(re,"+");
        // get page
        const response = await fetch(url);
        const $ = cheerio.load(await response.text());
        // get data
        $('.searchResultList .searchResultNode a').map( function() {
            let temp : listEle = {
                singer: $(".search-artist-name", this).text(),
                song: $(".search-track-name", this).text(),
                ke: $(".search-attribute-value", this)[0].children[0].data,
                camelot: $(".search-attribute-value", this)[1].children[0].data,
                bpm: Number($(".search-attribute-value", this)[2].children[0].data),
                img: $("img", this)[0].attribs.src
            };
            list.push(temp);
        });
        return list;
    }

   async  _onSearch() {
        // alert('test')
        let content : string = this.state.searchText;
        this.setState({
            list: await this.search(content)
        });
    }

    _changeText(value) : void {
        this.setState({
            searchText: value
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
                paddingTop: 20,
                paddingRight: 20,
                paddingLeft: 20
            },
            row: {
                flexDirection: "row",
                alignItems: "center"
            },
            head: {
                marginBottom: 20,
            },
            textInput: {
                width: appWidth - 139,
                height: 35,
                borderWidth: 1,
                borderRadius: 3,
                borderColor: "#3B7B9A",
                marginLeft: 10,
                marginRight: 10,
                paddingLeft: 5,
            },
            main: {
                width: appWidth-60,
                height: appHeight-40-35-30-3,
                flexDirection: "column",
                alignItems: "center",
            },
            footer: {
                height: 23,
                width: appWidth-60,
                flexDirection: "row",
                justifyContent: "center",
            }
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
                            onChangeText={text => this._changeText(text)}
                            onSubmitEditing={() => this._onSearch()}
                            value={this.state.searchText}
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
                            this.state.list.map((v,index) => {
                                return (
                                        <Card
                                            singer={v.singer}
                                            song={v.song}
                                            ke={v.ke}
                                            camelot={v.camelot}
                                            bpm={v.bpm}
                                            img={v.img}
                                            key={index}
                                        />);
                                }
                            )
                        }
                    </ScrollView>
                    <View style={styles.footer}>
                        <Text
                            style={{
                                fontSize: 12,
                            }}
                        >
                            Copyright © 2020 by DeAnti-
                        </Text>
                    </View>
                </View>
            </>
        );
    }
}
