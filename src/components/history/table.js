import React from "react";
import { View, StyleSheet } from "react-native";
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component'

class HistoryTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = ({
      tableData: props.data
    })
  }

  render() {
    const tableHead = ['Date', 'Confirmation Number']
    console.log(this.props.data)
    return (
      <View style={{paddingTop: 40}}>
        <Table>
          <Row data={tableHead} style={styles.head} textStyle={styles.text}/>
          <Rows data={this.props.data} style={styles.row} textStyle={styles.text}/>
        </Table>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { marginLeft: 5 },
  row: { height: 30 }
})

module.exports = HistoryTable
