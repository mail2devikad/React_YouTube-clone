import React from 'react'
import { useState,useEffect } from 'react' 
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import {Videos,ChannelCard} from './'
import { fetchFROMAPI } from '../utils/fetchFromAPI'

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([])
  const {id}=useParams();

  useEffect(()=>{
    fetchFROMAPI(`channels?.part=snippet&id=${id}`)
    .then((data)=>setChannelDetail(data?.items[0]));

    fetchFROMAPI(`search?channelId=${id}&part=snippet&order=date`)
    .then((data)=>setVideos(data?.items));
  },[id])
  return (
    <div>{id}</div>
  )
}

export default ChannelDetail