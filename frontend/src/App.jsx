import React, {useState} from 'react'


export default function App(){
const [file, setFile] = useState(null)
const [results, setResults] = useState(null)
const [annotated, setAnnotated] = useState(null)
const [loading, setLoading] = useState(false)


async function handleUpload(e){
e.preventDefault()
if(!file) return alert('Choose an image first')
setLoading(true)
const fd = new FormData()
fd.append('file', file)
try{
const res = await fetch('/upload', {method:'POST', body: fd})
const data = await res.json()
setResults(data.results)
if(data.annotated_image_base64){
setAnnotated('data:image/jpeg;base64,' + data.annotated_image_base64)