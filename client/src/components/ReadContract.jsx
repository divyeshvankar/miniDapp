
import {useState, useEffect } from "react";

const ReadContract = ({state})=>{
  const [data,setData]= useState("No data");
  const {contract}=state;
  useEffect(()=>{
    const readData = async()=>{
        const data = await contract.methods.retrieve().call();
        console.log(data);
        setData(data);
    }
    contract && readData();
  },[contract])

    return <>
    <p>Read Contract : {data}</p>
    </>
}

export default ReadContract;