import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react'
export default function Home() {

  const [directory, setDirectory] = useState('~')
  const [command, setCommand] = useState('')
  const [focus, setFocus] = useState(0)


  const [previousOutput, setPreviousOutput] = useState('Examples: <br/> ls - List all options <br/> clear - clear screen')
 
  useEffect(()=>{
    if (typeof window !== "undefined") {      
      document.getElementById('command').focus()
      console.log("Focusing on stuff")

    }


  },[ ])

  const handleBlur = (e) => {
        setTimeout(function() { 
          document.getElementById('command').focus(); 
    }, 100);
  }

  const onCommandSubmit = e => {
    e.preventDefault();
    //DO stuff
    // send to server with e.g. `window.fetch`
   
    
    var ourOutput = ''
    switch (command.trim().split(' ')[0]) {
      case 'ls': ourOutput = '- one <br/> -two \n'
      break;
      
      case 'clear': ourOutput = 'CLEAR'

      break;
      
      
      case 'cd': {
        if(command.split(' ')[1]){
          if(command.trim().split(' ')[1] == '..'){
            console.log("hi")
            var ourDirectory = directory
            console.log("OUR DIRECTOR", ourDirectory.split('/'))
            ourDirectory = ourDirectory.split('/')
            var newDirectoryTree = ''
            for(var i =0;i<ourDirectory.length;i++){
              if(i != ourDirectory.length -1){
                if(i==0){
                  newDirectoryTree+= ourDirectory[i]

                }else{
                  newDirectoryTree+= "/"+ ourDirectory[i]

                }

              }


            }
            //ourDirectory = ourDirectory.map((folder)=>{return folder+'/'})
            setDirectory(newDirectoryTree)

          }else{
            setDirectory(directory+'/'+command.split(' ')[1]);ourOutput=""

          }         
        }
        else{
          setDirectory('~')
        }
      }
      break;
      
      default: ourOutput = command.split(' ')[0] +': command not found'
   }
   

      

    if(command == 'clear'){
      setPreviousOutput('')
    }else if(command.trim().split(' ')[0] == 'cd'){
      setPreviousOutput(previousOutput + `<br /> <a class='text-green-300'>leonard@pm.me</a>:
      <a class='text-blue-400'>`+directory+`</a>
      $ `+ command)
    }
    else{
      if(previousOutput != ''){
        setPreviousOutput(previousOutput + `<br /> <a class='text-green-300'>leonard@pm.me</a>:
      <a class='text-blue-400'>`+directory+`</a>
      $ `+command + '<br/>' +ourOutput)
      }else{
        setPreviousOutput(previousOutput + `<a class='text-green-300'>leonard@pm.me</a>:
      <a class='text-blue-400'>`+directory+`</a>
      $ `+command + '<br/>' +ourOutput)
      }
    }
   
    
    
    setCommand('')

   

  }
  return (


    
    <div className="bg-black text-white font-mono font-bold" style={{height:"100vh"}}>
      <p dangerouslySetInnerHTML={{__html :previousOutput}}></p>

      <div className="flex justify-start">

        <a className='text-green-300'>leonard@pm.me</a>: 
        <a className='text-blue-400'>{directory} </a>
        <a>$ </a>
          <div className='cursor'>
            <form onSubmit={onCommandSubmit} id='ourForm'>

            <input autoComplete='false' id='command' value={command} className='bg-black font-bold' type='text' style={{outline: 'none', width: '100%'}} onChange={(e)=>{setCommand(e.target.value)}} onBlur={handleBlur}/>
            </form>

          </div>
      </div>
  
      <br/>
      
  
    </div>
  )
}
