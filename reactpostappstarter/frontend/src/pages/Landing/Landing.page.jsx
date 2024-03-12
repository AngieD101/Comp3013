import { Container, Text } from "@mantine/core";

const Landing = () => {
  return (
    <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
      <img src="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Landing image" style={{ width: '100%', height: '100%', objectFit: 'cover'}} />
      <div style={{position: 'absolute', display: 'flex', flexDirection: 'column', alignItems: 'center',zIndex: 1, }}>
        <Text style={{color: 'black', fontSize: '4rem', fontWeight: 'bold', textAlign: 'center',}}>
          Welcome !
        </Text>
        <Text style={{color: 'white', fontSize: '1.5rem', textAlign: 'center', marginTop: '20px',maxWidth: '600px',}}>
          an app for photographers to upload and 
          share posts about photos they’ve taken
        </Text>
      </div>
    </Container>
  );
};

export default Landing;
