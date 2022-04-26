import { useState, useEffect } from 'react'
export default function Home() {

  const [directory, setDirectory] = useState('~')
  const [command, setCommand] = useState(undefined)
  const [previousOutput, setPreviousOutput] = useState(`
  Welcome to my terminal! </br>
  hint: type the command 'help'

  `)
 
  useEffect(()=>{
    

    if (typeof window !== "undefined") {      
      document.getElementById('command').focus()
     

     

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

      case 'help' : ourOutput = `Commands: <br/> 
      about - About Me <br/> 
      ls - List folders <br/> 
      clear - Clear screen <br />
      cd - Change Directory`
      break ;

      case 'about' : ourOutput = `About Me: <br/> 
      💻 - Full Stack Developer <br/> 
      🧑‍🎓 - Senior studying Cybersecurity <br />
      📚 - Learning about computer architecture<br />
      💾 - Collecting Vintage Computers<br/>
      📍 - Living in NYC`
      break ;
      
      
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
      if(previousOutput != ''){
        setPreviousOutput(previousOutput + `<br /> <a class='text-green-300'>leonard@pm.me</a>:
        <a class='text-blue-400'>`+directory+`</a>
        $ `+ command)
      }else{
        setPreviousOutput(previousOutput + `<a class='text-green-300'>leonard@pm.me</a>:
        <a class='text-blue-400'>`+directory+`</a>
        $ `+ command)
      }

      
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

            <input autoComplete='off' id='command' value={command} className='bg-black font-bold select-all' type='text' style={{outline: 'none', width: '100%'}} onChange={(e)=>{setCommand(e.target.value.toLowerCase())}} onBlur={handleBlur}/>
            </form>

          </div>
      </div>
  
      <br/>
      
    <button style={{bottom : 0, position :'absolute'}} onClick={()=>document.getElementById('command').focus()}> 	→ Click on me to type commands 	← </button>
    </div>
  )
}
