import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  headerBar: {
    width: undefined,
    height: 300,
    backgroundColor: '#36357f'
  },
  header: {
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 20,
    fontSize: 20
  },

  //confirmation
  confirmationContainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 64
  },

  //dashboard
  dashboardContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  count: {
    fontSize: 60,
    textAlign: 'center',
    position: 'relative',
    bottom: -50,
    color: 'white'
  },
  countHeader: {
    fontSize: 40,
    position: 'relative',
    bottom: -30,
    fontStyle: 'italic',
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  //date picker
  datePickerContainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 64
  },

  //donations
  donationsContainer: {
    flex: 1,
    backgroundColor: '#36357f',
    paddingTop: 64
  },
  nextButton: {
    position: 'relative',
    bottom: -500,
    flexDirection: 'row',
    justifyContent: 'center'
  },



  //history
  historyContainer: {
    flex: 1,
    backgroundColor: 'white',
  },

  //items list
  itemList: {
    fontSize: 20,
    height: 60,
    textAlign: 'center'
  },
  itemListContainer:{
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 64
  },
  deleteButton: {
    position: 'relative',
    bottom: -10,
    backgroundColor: 'white'
  },

  //items form
  itemsFormContainer: {
    padding: 20
  },
  quantity: {
    position: 'relative',
    top: -12
  },
  itemLabel: {
    color: 'black'
  },
  quantityInput:{
    height: 40,
    width: 80,
    backgroundColor: 'rgba(225,225,225,0.8)',
    marginBottom: 10,
    padding: 10,
  },
  addItemButton: {
    height: 50,
    width: 80,
    backgroundColor: '#5c65aa',
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },

  //login
  mainContainer: {
    flex: 1,
    backgroundColor: '#36357f',
  },
  loginContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  loginLogo: {
    position: 'absolute',
    width: 400,
    height: 200
  },

  //login form
  loginFormContainer: {
    padding: 20
  },
  loginInput:{
    height: 40,
    backgroundColor: 'rgba(225,225,225,0.2)',
    marginBottom: 10,
    padding: 10,
    color: '#fff'
  },
  loginButtonContainer:{
    backgroundColor: '#5c65aa',
    paddingVertical: 15
  },
  loginButtonText:{
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700'
  },

  //location picker
  locationPickerContainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 64
  },
  address: {
    textAlign: 'center',
    fontSize: 20,
    position: 'relative',
    bottom: -30
  },

  //news
  newsContainer: {
    flex: 1,
    backgroundColor: 'white',
  },

  //settings
  settingsContainer: {
    flex: 1,
    backgroundColor: 'white',
  },

  //summary
  summaryContainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 64
  },
  summaryText: {
    textAlign: 'center',
    padding: 10,
    fontSize: 16
  },
  summaryList: {
    textAlign: 'center'
  },

  //tab bar
  tabContent: {
    flex: 1,
    alignItems: 'center'
  },
  tabText: {
    margin: 50,
    fontSize: 40
  },
  tabIcon: {
    width: 24,
    height: 24,
    color: 'black'
  }
})
module.exports = styles
