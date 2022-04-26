import { useState, useEffect } from 'react'
export default function Home() {

  var commandOptions = {
    'help' : `

    Next.js web shell interface, version 0.1 - by Leonard Melnik <br/>
    
    <a class='text-blue-500'> Commands: </a><br/> 
    <div class='px-4'>

      about - About Me <br/> 
      contact - Ways to reach out to me <br/>
      projects - What I am currently working on!<br/>
      ls - List folders <br/> 
      clear - Clear screen <br />
      cd - Change Directory
      
      </div>`,

    'about' : `About Me: <br/> 
    💻 - Full Stack Developer <br/> 
    🧑‍🎓 - Senior studying Cybersecurity <br />
    📚 - Learning about computer architecture<br />
    💾 - Collecting Vintage Computers<br/>
    📍 - Living in NYC`,
    'contact' : `The best way to reach me is my cell<br/>
    (929)237-0000 <br/>

    For email I use:

    <a class='underline' href='mailto:leonardmelnik@pm.me'>leonardmelnik@pm.me</a>`,

    'projects': `
    <a class='text-green-600' href='https://isitall.online'>IsItAll.online</a> - Uptime montioring tool, that can integrate with basically any software </br>
    <a class='text-yellow-500'>MTA.now </a> - Web app to give quick train arrival details in NYC </br>
    <a class='text-red-400'> Sos </a>- An bare bones operating system that I am building from scratch </br>`,

    work : `
    Evaluable -  <br/>
    <a class='text-green-400'>43605</a> - <br/>
    <a class='text-blue-700'>Unime</a> - <br/>
    `,

    skills : `

    Cybersecurity:
    
    Web Development:
    <ul>
    <li>
    Javascript:
    </li>
      <li>
        React
      </li>
      <li>
        Next
      </li>
      <li>
        Node
      </li>
      <li>
        Websockets
      </li>
   
    </ul>
    `
    
    
    

  }
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

   if(commandOptions[command]){
     ourOutput = commandOptions[command]
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
    setTimeout(function() { 
      window.scrollTo(0, document.body.scrollHeight)
    }, 100);

  }
  return (


    
    <div className="bg-black text-white font-mono font-bold" style={{height:"100%", minHeight:'100vh'}}>
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
      
    <button className='bottom-0 right-0' onClick={()=>document.getElementById('command').focus()}> 	→ Click on me to type commands 	← </button>
    </div>
  )
}

