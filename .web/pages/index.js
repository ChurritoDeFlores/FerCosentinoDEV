import { Fragment, useContext, useEffect, useRef, useState } from "react"
import { useRouter } from "next/router"
import { Event, getAllLocalStorageItems, getRefValue, getRefValues, isTrue, preventDefault, refs, spreadArraysOrObjects, uploadFiles, useEventLoop } from "/utils/state"
import { EventLoopContext, initialEvents, StateContext } from "/utils/context.js"
import "focus-visible/dist/focus-visible"
import { Avatar, Box, Button, Card, CardBody, Center, HStack, Image, Link, ListItem, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, Spacer, Text, UnorderedList, useColorMode, VStack } from "@chakra-ui/react"
import Script from "next/script"
import { DownloadIcon } from "@chakra-ui/icons"
import NextLink from "next/link"
import { Prism } from "react-syntax-highlighter"
import { dark } from "/styles/code/prism"
import NextHead from "next/head"



export default function Component() {
  const switch_state = useContext(StateContext)
  const router = useRouter()
  const { colorMode, toggleColorMode } = useColorMode()
  const focusRef = useRef();
  
  // Main event loop.
  const [addEvents, connectError] = useContext(EventLoopContext)

  // Set focus to the specified element.
  useEffect(() => {
    if (focusRef.current) {
      focusRef.current.focus();
    }
  })

  // Route after the initial page hydration.
  useEffect(() => {
    const change_complete = () => addEvents(initialEvents.map((e) => ({...e})))
    router.events.on('routeChangeComplete', change_complete)
    return () => {
      router.events.off('routeChangeComplete', change_complete)
    }
  }, [router])


  return (
    <Fragment>
  <Fragment>
  {isTrue(connectError !== null) ? (
  <Fragment>
  <Modal isOpen={connectError !== null}>
  <ModalOverlay>
  <ModalContent>
  <ModalHeader>
  {`Connection Error`}
</ModalHeader>
  <ModalBody>
  <Text>
  {`Cannot connect to server: `}
  {(connectError !== null) ? connectError.message : ''}
  {`. Check if server is reachable at `}
  {`http://localhost:8000`}
</Text>
</ModalBody>
</ModalContent>
</ModalOverlay>
</Modal>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  <VStack>
  <Script strategy={`afterInteractive`}>
  {`document.documentElement.lang='en'`}
</Script>
  <HStack sx={{"bg": "#00081B", "position": "fixed", "width": "100%", "top": "0px", "zIndex": "5"}}>
  <Image src={`favicon.ico`} sx={{"height": "90px", "marginRight": "1%", "marginLeft": "2%"}}/>
  <Text sx={{"fontSize": "2.3em", "_as": "b", "color": "#F1622B", "marginRight": "auto", "marginLeft": "2%", "width": "81%"}}>
  {`Fernando Cosentino`}
</Text>
  <Button onClick={(_e) => addEvents([Event("_download", {url:"/cv_pdf_file.pdf",filename:"Fernando_Cosentino_CV.pdf"})], (_e))} sx={{"bg": "#F1622B", "color": "#00081B", "marginLeft": "0%", "marginRight": "5%", "_hover": {"bg": "#254168", "borderColor": "#FF9E4D", "textColor": "#FF9E4D"}}}>
  <DownloadIcon/>
  {`Download CV`}
</Button>
</HStack>
  <Box sx={{"width": "100%", "height": "83px", "bg": "#F1622B", "position": "fixed", "zIndex": "4"}}/>
  <HStack sx={{"paddingTop": "0.8em"}}>
  <VStack sx={{"margin": "5%", "width": "100%", "height": "100%"}}>
  <Avatar name={`Fernando Cosentino`} showBorder={true} size={`2xl`} src={`perfil.png`} sx={{"borderColor": "#F1622B", "bg": "#254168"}}/>
  <Center>
  <HStack sx={{"bg": "#00081B", "width": "100%"}}>
  <Link as={NextLink} href={`https://github.com/Dingras`} isExternal={true}>
  <Image src={`github.svg`} sx={{"width": "1.5em", "margin": "1em"}}/>
</Link>
  <Link as={NextLink} href={`https://www.linkedin.com/in/feracosentino/`} isExternal={true}>
  <Image src={`linkedin.svg`} sx={{"width": "1.5em", "margin": "1em"}}/>
</Link>
  <Link as={NextLink} href={`https://www.instagram.com/fernan.cosent/`} isExternal={true}>
  <Image src={`instagram.svg`} sx={{"width": "1.5em", "margin": "1em"}}/>
</Link>
  <Link as={NextLink} href={`mailto:feracosentino@gmail.com`} isExternal={true}>
  <Image src={`email.svg`} sx={{"width": "1.5em", "margin": "1em"}}/>
</Link>
</HStack>
</Center>
  <Text sx={{"color": "#FF9E4D", "_as": "b", "fontSize": "1.2em"}}>
  {`Systems Analyst with a background in mechanical engineering and proficiency in hardware/software, programming,networking, and agile methodologies.`}
</Text>
  <Card sx={{"width": "100%", "height": "100%", "bg": "#254168"}}>
  <CardBody>
  <Box>
  <Text as={`b`} sx={{"color": "#F1622B", "fontSize": "2em"}}>
  {`Experience`}
</Text>
  <Box sx={{"padding": "2%", "margin": "5px", "bg": "#00081B", "borderRadius": "10px"}}>
  <Text as={`i`} sx={{"color": "#FF9E4D", "fontSize": "1.2em"}}>
  {`Simuladores en red, Mar del plata - Manager`}
</Text>
  <UnorderedList spacing={`.025em`} sx={{"color": "#FF9E4D", "fontSize": "1em"}}>
  <ListItem>
  {`Managed local area networks.`}
</ListItem>
  <ListItem>
  {`Administered online game servers.`}
</ListItem>
  <ListItem>
  {`Organized esports events.`}
</ListItem>
</UnorderedList>
</Box>
</Box>
</CardBody>
</Card>
  <Card sx={{"width": "100%", "height": "100%", "bg": "#254168"}}>
  <CardBody>
  <Box>
  <Text as={`b`} sx={{"color": "#F1622B", "fontSize": "2em"}}>
  {`Education`}
</Text>
  <Box sx={{"padding": "2%", "margin": "0.8em", "bg": "#00081B", "borderRadius": "10px"}}>
  <Text as={`i`} sx={{"color": "#FF9E4D", "fontSize": "1.2em"}}>
  {`Facultad de Ingeniería UNMDP - Mar del Plata - Mechanical Engineering`}
</Text>
  <Spacer/>
  <Text sx={{"color": "#FF9E4D", "fontSize": "0.8em"}}>
  {`(2011 - 2016) / Incompleto`}
</Text>
  <UnorderedList spacing={`.025em`} sx={{"color": "#FF9E4D", "fontSize": "1em"}}>
  <ListItem>
  {`Strong proficiency in mathematics, physics and logic.`}
</ListItem>
  <ListItem>
  {`Proficient in laboratory work and error management.`}
</ListItem>
</UnorderedList>
</Box>
  <Box sx={{"padding": "2%", "margin": "0.8em", "bg": "#00081B", "borderRadius": "10px"}}>
  <Text as={`i`} sx={{"color": "#FF9E4D", "fontSize": "1.2em"}}>
  {`Universidad Tecnológica Nacional UTN - Mar del Plata - Computer Repair, Maintenance, and Upgrades`}
</Text>
  <Spacer/>
  <Text sx={{"color": "#FF9E4D", "fontSize": "0.8em"}}>
  {`(April 2017 - July 2017) / Completo`}
</Text>
  <UnorderedList spacing={`.025em`} sx={{"color": "#FF9E4D", "fontSize": "1em"}}>
  <ListItem>
  {`Technical knowledge, handling, and maintenance of software and hardware.`}
</ListItem>
</UnorderedList>
</Box>
  <Box sx={{"padding": "2%", "margin": "0.8em", "bg": "#00081B", "borderRadius": "10px"}}>
  <Text as={`i`} sx={{"color": "#FF9E4D", "fontSize": "1.2em"}}>
  {`Instituto Argentino de la empresa Hilet - Mar del Plata - Systems Analyst`}
</Text>
  <Spacer/>
  <Text sx={{"color": "#FF9E4D", "fontSize": "0.8em"}}>
  {`(April 2021 - December 2023) / Completo`}
</Text>
  <UnorderedList spacing={`.025em`} sx={{"color": "#FF9E4D", "fontSize": "1em"}}>
  <ListItem>
  {`Skills in programming, databases, agile methodologies, and network management.`}
</ListItem>
</UnorderedList>
</Box>
</Box>
</CardBody>
</Card>
  <Card sx={{"width": "100%", "height": "100%", "bg": "#254168"}}>
  <CardBody>
  <VStack sx={{"bg": "#254168", "borderRadius": "10px", "margin": "0.8em"}}>
  <Prism customStyle={{"width": "100%", "height": "100%", "margin": "0.8em"}} language={`python`} showLineNumbers={true} style={dark} sx={{"width": "100%", "height": "100%", "margin": "0.8em"}}>
  {`Skills=[
    'Web Development',
    'Database Management',
    'Agile Methodologies',
    'Problem Solving',
    'Error Management',
    'Laboratory Skills',
    'Mathematics and Physics Proficiency',
    'Logical Thinking'
]`}
</Prism>
  <Prism customStyle={{"width": "100%", "height": "100%", "margin": "0.8em"}} language={`python`} showLineNumbers={true} style={dark} sx={{"width": "100%", "height": "100%", "margin": "0.8em"}}>
  {`Interesting=[
    'Teamwork',
    'Travel',
    'Robotics/Automation',
    'SimRacing',
    'Motorsport',
    'BackEnd',
    'Database Management'
]`}
</Prism>
</VStack>
</CardBody>
</Card>
</VStack>
  <Center sx={{"width": "100%"}}>
  <Card sx={{"bg": "#254168", "width": "100%", "height": "100%", "marginRight": "4em", "marginTop": "100px"}}>
  <CardBody>
  <VStack>
  <Text as={`b`} sx={{"fontSize": "2em", "color": "#F1622B"}}>
  {`Proyects`}
</Text>
  <Card sx={{"bg": "#00081B", "width": "98%"}}>
  <CardBody>
  <VStack>
  <HStack sx={{"width": "100%"}}>
  <Text sx={{"color": "#F1622B", "fontSize": "1.5em", "as": "b", "marginRight": "auto", "marginLeft": "2%"}}>
  {`PyToDo API`}
</Text>
  <Link as={NextLink} href={`https://github.com/Dingras/PyToDo`} isExternal={true} sx={{"display": "flex", "alignItems": "center", "color": "#00081B", "fontSize": "1.2em", "_as": "b", "button": true, "bg": "#F1622B", "paddingX": "1em", "borderRadius": "0.5em", "marginRight": "5%", "marginLeft": "0%", "_hover": {"bg": "#254168", "borderColor": "#FF9E4D", "textColor": "#F1622B"}}}>
  <Image src={`play_button.svg`} sx={{"width": "1em", "height": "1em", "marginY": "0.5em", "marginRight": "0.5em"}}/>
  <Text>
  {`Run`}
</Text>
</Link>
</HStack>
  <HStack sx={{"width": "100%", "marginTop": "1.5em"}}>
  <Text sx={{"color": "#FF9E4D", "fontSize": "1em", "marginRight": "auto", "marginLeft": "2%"}}>
  {`API for user diary created with FastAPI`}
</Text>
  <Image src={`swagger_ui.png`} sx={{"maxWidth": "50%", "maxHeight": "180px", "marginRight": "5%", "marginLeft": "0%"}}/>
</HStack>
  <HStack sx={{"width": "100%"}}>
  <Link as={NextLink} href={`https://github.com/Dingras/PyToDo`} isExternal={true} sx={{"marginRight": "auto", "marginLeft": "2%", "button": true}}>
  <Text sx={{"color": "#FF9E4D", "fontSize": "1em", "as": "i"}}>
  {`https://github.com/Dingras/PyToDo`}
</Text>
</Link>
  <Text sx={{"color": "#FF9E4D", "fontSize": "1em", "as": "i", "marginRight": "5%", "marginLeft": "0%"}}>
  {`Python`}
</Text>
</HStack>
</VStack>
</CardBody>
</Card>
  <Card sx={{"bg": "#00081B", "width": "98%"}}>
  <CardBody>
  <VStack>
  <HStack sx={{"width": "100%"}}>
  <Text sx={{"color": "#F1622B", "fontSize": "1.5em", "as": "b", "marginRight": "auto", "marginLeft": "2%"}}>
  {`PyToDo APP`}
</Text>
  <Link as={NextLink} href={`https://github.com/Dingras/PyToDoReact`} isExternal={true} sx={{"display": "flex", "alignItems": "center", "color": "#00081B", "fontSize": "1.2em", "_as": "b", "button": true, "bg": "#F1622B", "paddingX": "1em", "borderRadius": "0.5em", "marginRight": "5%", "marginLeft": "0%", "_hover": {"bg": "#254168", "borderColor": "#FF9E4D", "textColor": "#F1622B"}}}>
  <Image src={`play_button.svg`} sx={{"width": "1em", "height": "1em", "marginY": "0.5em", "marginRight": "0.5em"}}/>
  <Text>
  {`Run`}
</Text>
</Link>
</HStack>
  <HStack sx={{"width": "100%", "marginTop": "1.5em"}}>
  <Text sx={{"color": "#FF9E4D", "fontSize": "1em", "marginRight": "auto", "marginLeft": "2%"}}>
  {`APP for user diary created with React`}
</Text>
  <Image src={`PyToDoAPP.png`} sx={{"maxWidth": "50%", "maxHeight": "180px", "marginRight": "5%", "marginLeft": "0%"}}/>
</HStack>
  <HStack sx={{"width": "100%"}}>
  <Link as={NextLink} href={`https://github.com/Dingras/PyToDoReact`} isExternal={true} sx={{"marginRight": "auto", "marginLeft": "2%", "button": true}}>
  <Text sx={{"color": "#FF9E4D", "fontSize": "1em", "as": "i"}}>
  {`https://github.com/Dingras/PyToDoReact`}
</Text>
</Link>
  <Text sx={{"color": "#FF9E4D", "fontSize": "1em", "as": "i", "marginRight": "5%", "marginLeft": "0%"}}>
  {`JavaScript - CSS - React`}
</Text>
</HStack>
</VStack>
</CardBody>
</Card>
  <Card sx={{"bg": "#00081B", "width": "98%"}}>
  <CardBody>
  <VStack>
  <HStack sx={{"width": "100%"}}>
  <Text sx={{"color": "#F1622B", "fontSize": "1.5em", "as": "b", "marginRight": "auto", "marginLeft": "2%"}}>
  {`Flappy Bird`}
</Text>
  <Link as={NextLink} href={`https://github.com/Dingras/Java/tree/main/FlappyBird`} isExternal={true} sx={{"display": "flex", "alignItems": "center", "color": "#00081B", "fontSize": "1.2em", "_as": "b", "button": true, "bg": "#F1622B", "paddingX": "1em", "borderRadius": "0.5em", "marginRight": "5%", "marginLeft": "0%", "_hover": {"bg": "#254168", "borderColor": "#FF9E4D", "textColor": "#F1622B"}}}>
  <Image src={`play_button.svg`} sx={{"width": "1em", "height": "1em", "marginY": "0.5em", "marginRight": "0.5em"}}/>
  <Text>
  {`Run`}
</Text>
</Link>
</HStack>
  <HStack sx={{"width": "100%", "marginTop": "1.5em"}}>
  <Text sx={{"color": "#FF9E4D", "fontSize": "1em", "marginRight": "auto", "marginLeft": "2%"}}>
  {`A videogame similar to Flappy Bird, created in Java`}
</Text>
  <Image src={`flappybird.jpg`} sx={{"maxWidth": "50%", "maxHeight": "180px", "marginRight": "5%", "marginLeft": "0%"}}/>
</HStack>
  <HStack sx={{"width": "100%"}}>
  <Link as={NextLink} href={`https://github.com/Dingras/Java/tree/main/FlappyBird`} isExternal={true} sx={{"marginRight": "auto", "marginLeft": "2%", "button": true}}>
  <Text sx={{"color": "#FF9E4D", "fontSize": "1em", "as": "i"}}>
  {`https://github.com/Dingras/Java/tree/main/FlappyBird`}
</Text>
</Link>
  <Text sx={{"color": "#FF9E4D", "fontSize": "1em", "as": "i", "marginRight": "5%", "marginLeft": "0%"}}>
  {`Java`}
</Text>
</HStack>
</VStack>
</CardBody>
</Card>
  <Card sx={{"bg": "#00081B", "width": "98%"}}>
  <CardBody>
  <VStack>
  <HStack sx={{"width": "100%"}}>
  <Text sx={{"color": "#F1622B", "fontSize": "1.5em", "as": "b", "marginRight": "auto", "marginLeft": "2%"}}>
  {`Calculator`}
</Text>
  <Link as={NextLink} href={`http://churritocalculador.somee.com/`} isExternal={true} sx={{"display": "flex", "alignItems": "center", "color": "#00081B", "fontSize": "1.2em", "_as": "b", "button": true, "bg": "#F1622B", "paddingX": "1em", "borderRadius": "0.5em", "marginRight": "5%", "marginLeft": "0%", "_hover": {"bg": "#254168", "borderColor": "#FF9E4D", "textColor": "#F1622B"}}}>
  <Image src={`play_button.svg`} sx={{"width": "1em", "height": "1em", "marginY": "0.5em", "marginRight": "0.5em"}}/>
  <Text>
  {`Run`}
</Text>
</Link>
</HStack>
  <HStack sx={{"width": "100%", "marginTop": "1.5em"}}>
  <Text sx={{"color": "#FF9E4D", "fontSize": "1em", "marginRight": "auto", "marginLeft": "2%"}}>
  {`Web application similar to iPhone calculator`}
</Text>
  <Image src={`calculadora.png`} sx={{"maxWidth": "50%", "maxHeight": "180px", "marginRight": "5%", "marginLeft": "0%"}}/>
</HStack>
  <HStack sx={{"width": "100%"}}>
  <Link as={NextLink} href={`https://github.com/Dingras/CalculadoraHTML`} isExternal={true} sx={{"marginRight": "auto", "marginLeft": "2%", "button": true}}>
  <Text sx={{"color": "#FF9E4D", "fontSize": "1em", "as": "i"}}>
  {`https://github.com/Dingras/CalculadoraHTML`}
</Text>
</Link>
  <Text sx={{"color": "#FF9E4D", "fontSize": "1em", "as": "i", "marginRight": "5%", "marginLeft": "0%"}}>
  {`HTML - CSS - JavaScript`}
</Text>
</HStack>
</VStack>
</CardBody>
</Card>
  <Card sx={{"bg": "#00081B", "width": "98%"}}>
  <CardBody>
  <VStack>
  <HStack sx={{"width": "100%"}}>
  <Text sx={{"color": "#F1622B", "fontSize": "1.5em", "as": "b", "marginRight": "auto", "marginLeft": "2%"}}>
  {`Tele-Pong`}
</Text>
  <Link as={NextLink} href={`https://github.com/Dingras/TelePong`} isExternal={true} sx={{"display": "flex", "alignItems": "center", "color": "#00081B", "fontSize": "1.2em", "_as": "b", "button": true, "bg": "#F1622B", "paddingX": "1em", "borderRadius": "0.5em", "marginRight": "5%", "marginLeft": "0%", "_hover": {"bg": "#254168", "borderColor": "#FF9E4D", "textColor": "#F1622B"}}}>
  <Image src={`play_button.svg`} sx={{"width": "1em", "height": "1em", "marginY": "0.5em", "marginRight": "0.5em"}}/>
  <Text>
  {`Run`}
</Text>
</Link>
</HStack>
  <HStack sx={{"width": "100%", "marginTop": "1.5em"}}>
  <Text sx={{"color": "#FF9E4D", "fontSize": "1em", "marginRight": "auto", "marginLeft": "2%"}}>
  {`TelePong video game made with C# using WinForm`}
</Text>
  <Image src={`telepong.png`} sx={{"maxWidth": "50%", "maxHeight": "180px", "marginRight": "5%", "marginLeft": "0%"}}/>
</HStack>
  <HStack sx={{"width": "100%"}}>
  <Link as={NextLink} href={`https://github.com/Dingras/TelePong`} isExternal={true} sx={{"marginRight": "auto", "marginLeft": "2%", "button": true}}>
  <Text sx={{"color": "#FF9E4D", "fontSize": "1em", "as": "i"}}>
  {`https://github.com/Dingras/TelePong`}
</Text>
</Link>
  <Text sx={{"color": "#FF9E4D", "fontSize": "1em", "as": "i", "marginRight": "5%", "marginLeft": "0%"}}>
  {`C#`}
</Text>
</HStack>
</VStack>
</CardBody>
</Card>
  <Card sx={{"bg": "#00081B", "width": "98%"}}>
  <CardBody>
  <VStack>
  <HStack sx={{"width": "100%"}}>
  <Text sx={{"color": "#F1622B", "fontSize": "1.5em", "as": "b", "marginRight": "auto", "marginLeft": "2%"}}>
  {`Personal portfolio`}
</Text>
  <Link as={NextLink} href={`https://github.com/Dingras/MiPortafolio`} isExternal={true} sx={{"display": "flex", "alignItems": "center", "color": "#00081B", "fontSize": "1.2em", "_as": "b", "button": true, "bg": "#F1622B", "paddingX": "1em", "borderRadius": "0.5em", "marginRight": "5%", "marginLeft": "0%", "_hover": {"bg": "#254168", "borderColor": "#FF9E4D", "textColor": "#F1622B"}}}>
  <Image src={`play_button.svg`} sx={{"width": "1em", "height": "1em", "marginY": "0.5em", "marginRight": "0.5em"}}/>
  <Text>
  {`Run`}
</Text>
</Link>
</HStack>
  <HStack sx={{"width": "100%", "marginTop": "1.5em"}}>
  <Text sx={{"color": "#FF9E4D", "fontSize": "1em", "marginRight": "auto", "marginLeft": "2%"}}>
  {`This web site created with Reflex`}
</Text>
  <Image src={`portfolio.png`} sx={{"maxWidth": "50%", "maxHeight": "180px", "marginRight": "5%", "marginLeft": "0%"}}/>
</HStack>
  <HStack sx={{"width": "100%"}}>
  <Link as={NextLink} href={`https://github.com/Dingras/MiPortafolio`} isExternal={true} sx={{"marginRight": "auto", "marginLeft": "2%", "button": true}}>
  <Text sx={{"color": "#FF9E4D", "fontSize": "1em", "as": "i"}}>
  {`https://github.com/Dingras/MiPortafolio`}
</Text>
</Link>
  <Text sx={{"color": "#FF9E4D", "fontSize": "1em", "as": "i", "marginRight": "5%", "marginLeft": "0%"}}>
  {`Python`}
</Text>
</HStack>
</VStack>
</CardBody>
</Card>
</VStack>
</CardBody>
</Card>
</Center>
</HStack>
</VStack>
  <NextHead>
  <title>
  {`Fernando Cosentino | Systems Analyst.`}
</title>
  <meta content={`Hi, I'm Fernando Cosentino, a systems analyst, and this is my portfolio.`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
