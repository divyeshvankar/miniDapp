import { useState,useEffect } from 'react'
import Web3 from 'web3'
import ABI from './ABI/ABI.json'
import './App.css'
import WriteContract from './components/WriteContract'
import ReadContract from './components/ReadContract'
// 1st step -create all components
// 2nd step - connect with web3.js lib
// 3rd step - to create an instance of smart contract 
function App() {
  const [state, setState] = useState({
    web3:null,
    contract:null
  })
 useEffect (()=>{
  const template = async()=>{
    let web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"))
    // const accounts= await web3.eth.getAccounts();
    // console.log(accounts);
    const contractAddress = '0xA14c7FFD1b1BB58f19B1eaBd1832D3A4BF917CBD';
    const contractInstance = new web3.eth.Contract(ABI,contractAddress);
    // console.log(contractInstance);
    setState({web3:web3,contract:contractInstance})
   
  }
  template();
 },[])
  return (
    <>
     <ReadContract state={state}/>
     <WriteContract state={state}/>
    </>
  )
}

export default App
