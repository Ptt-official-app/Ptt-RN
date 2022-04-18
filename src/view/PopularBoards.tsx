import React, { Component } from "react"
import { ActivityIndicator, View } from "react-native"
import { Board, FetchBoard } from "../model/board"
import BoardList from "../component/BoardList"
import styles from './PopularBoards.style'

export default class PopularBoards extends Component<{}, {
    boards: Board[]
    loading: boolean
}> {
    constructor(props) {
        super(props)
        this.state = {
            boards: [],
            loading: true
        }
    }

    render() {
        return (
            <View style={[styles.container]}>
                <BoardList boards={this.state.boards} />
                {this.state.loading && <ActivityIndicator size="large" style={{ backgroundColor: '#000' }} />}
            </View>
        )
    }

    async componentDidMount() {
        const allBoards = await FetchBoard.popularBoards()
        allBoards.map((each, idx) => each.key = idx.toString())
        this.setState({
            boards: allBoards,
            loading: false
        })
    }
}

